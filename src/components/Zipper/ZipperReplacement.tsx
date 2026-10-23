"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Scissors, Zap, PhoneCall } from "lucide-react";

export function ZipperReplacementSection() {
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
          {/* Repair Images */}
          <div className="min-w-0 lg:order-2">
            <div
              className="-mx-3 flex w-[calc(100%+1.5rem)] snap-x snap-mandatory gap-3 overflow-x-auto overflow-y-hidden px-3 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:grid sm:w-full sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0"
              aria-label="Zip repair images"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4 }}
                className="relative h-56 w-[90%] shrink-0 snap-center overflow-hidden rounded-xl sm:h-52 sm:w-full sm:rounded-2xl md:h-60 lg:h-72"
              >
                <Image
                  src="https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1000&auto=format&fit=crop"
                  alt="Bag ki zip ka close-up"
                  fill
                  sizes="(max-width: 639px) 90vw, 45vw"
                  className="object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="relative h-56 w-[90%] shrink-0 snap-center overflow-hidden rounded-xl sm:h-52 sm:w-full sm:rounded-2xl md:h-60 lg:h-72"
              >
                <Image
                  src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1000&auto=format&fit=crop"
                  alt="Bag aur kapdon se judi marammat"
                  fill
                  sizes="(max-width: 639px) 90vw, 45vw"
                  className="object-cover"
                />
              </motion.div>
            </div>

            {/* Mobile Swipe Hint and Dots */}
            <div className="mt-3 flex flex-col items-center gap-2 sm:hidden">
              <p className="text-xs font-medium text-text-muted">
                Swipe karein aur dekhein
              </p>

              <div className="flex items-center gap-1.5" aria-hidden="true">
                <span className="h-1.5 w-5 rounded-full bg-brand-green" />
                <span className="h-1.5 w-1.5 rounded-full bg-border" />
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
