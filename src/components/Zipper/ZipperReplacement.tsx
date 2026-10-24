"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Scissors, Zap, PhoneCall } from "lucide-react";

const repairImages = [
  {
    src: "/catlogs/Bag_repair.png",
    alt: "Bag ki zip ka close-up",
  },
  {
    src: "/catlogs/Wheel_repair.png",
    alt: "Luggage se judi marammat",
  },
];

export function ZipperReplacementSection() {
  const imageScrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleImageScroll = () => {
    const container = imageScrollRef.current;
    if (!container) return;

    const cards = Array.from(container.children) as HTMLElement[];
    const containerCenter =
      container.getBoundingClientRect().left +
      container.getBoundingClientRect().width / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    cards.forEach((card, index) => {
      const cardCenter =
        card.getBoundingClientRect().left +
        card.getBoundingClientRect().width / 2;

      const distance = Math.abs(containerCenter - cardCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };

  const scrollToImage = (index: number) => {
    const container = imageScrollRef.current;
    if (!container) return;

    const image = container.children[index] as HTMLElement | undefined;

    image?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });

    setActiveIndex(index);
  };

  return (
    <section className="w-full min-w-0 overflow-hidden px-3 py-6 sm:px-5 sm:py-8 lg:px-8 lg:py-10">
      <article className="mx-auto w-full max-w-7xl min-w-0">
        <div className="grid w-full min-w-0 grid-cols-1 items-center gap-5 sm:gap-7 lg:grid-cols-2 lg:gap-10">
          {/* Repair Details */}
          <div className="order-2 min-w-0 space-y-4 lg:order-1 lg:space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
            >
              <div className="mb-2 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-green sm:text-sm">
                <Scissors size={16} />
                Zip ki marammat
              </div>

              <h2 className="text-2xl font-black leading-tight tracking-tight text-brand-navy sm:text-3xl md:text-4xl lg:text-[2.65rem]">
                Bag phenke nahi,
                <span className="block text-brand-green">
                  zip theek karwayein!
                </span>
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-text-muted sm:mt-4 sm:text-base sm:leading-7">
                Bag ki zip atak gayi hai ya toot gayi hai? Hum slider badalne se
                lekar poori zip lagane tak ki marammat karte hain. School bags,
                travel bags aur jackets ki zip bhi theek karwayein.
              </p>
            </motion.div>

            {/* Service Highlights */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-border p-3 sm:p-4">
                <Scissors size={22} className="mb-2 text-brand-green" />
                <h3 className="text-sm font-bold text-brand-navy sm:text-base">
                  Mazboot silai
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-text-muted sm:text-sm">
                  Zip aur silai ki marammat, taaki bag chale lambe samay tak.
                </p>
              </div>

              <div className="rounded-xl border border-border p-3 sm:p-4">
                <Zap size={22} className="mb-2 text-brand-green" />
                <h3 className="text-sm font-bold text-brand-navy sm:text-base">
                  Jaldi marammat
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-text-muted sm:text-sm">
                  Chhoti-moti kharabi ko jald theek karne ki suvidha.
                </p>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919430965836"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-brand-green px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-green-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green sm:w-auto sm:px-5 sm:text-base"
            >
              <PhoneCall size={18} />
              WhatsApp par daam poochhein
            </a>
          </div>

          {/* Repair Images */}
          <div className="min-w-0 lg:order-2">
            <div
              ref={imageScrollRef}
              onScroll={handleImageScroll}
              className="-mx-3 flex w-[calc(100%+1.5rem)] snap-x snap-mandatory gap-3 overflow-x-auto overflow-y-hidden overscroll-x-contain px-3 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:grid sm:w-full sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0"
              aria-label="Zip repair images"
            >
              {repairImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative h-56 w-[90%] shrink-0 snap-center overflow-hidden rounded-xl sm:h-52 sm:w-full sm:rounded-2xl md:h-60 lg:h-72"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 639px) 90vw, 45vw"
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </div>

            {/* Interactive Mobile Dots */}
            <div className="mt-3 flex flex-col items-center gap-2 sm:hidden">
              <p className="text-xs font-medium text-text-muted">
                Swipe karein aur dekhein
              </p>

              <div className="flex items-center gap-2">
                {repairImages.map((image, index) => (
                  <button
                    key={image.src}
                    type="button"
                    onClick={() => scrollToImage(index)}
                    aria-label={`Show image ${index + 1}`}
                    aria-current={activeIndex === index ? "true" : undefined}
                    className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 ${
                      activeIndex === index
                        ? "w-6 bg-brand-green"
                        : "w-2 bg-brand-green/25 hover:bg-brand-green/60"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
