import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const WhatWeDoList = [
  {
    title: "Luggage Repair",
    desc: "Expert restoration for all brands.",
    src: "/services/repairall.png",
    link: "/services/repairing-of-luggage",
  },
  {
    title: "Wholesale Parts",
    desc: "Genuine hardware at bulk prices.",
    src: "/services/saleall.png",
    link: "/services/wholesale-parts",
  },
  {
    title: "Custom Covers",
    desc: "Tailored protection for your gear.",
    src: "/services/customcovers.png",
    link: "/services/custom-covers",
  },
  {
    title: "Dress Alterations",
    desc: "Precision tailoring and fitting.",
    src: "/services/4.png",
    link: "/services/dress-alterations",
  },
];

export default function WhatWeDoServer() {
  return (
    <section className="overflow-hidden bg-transparent py-6 sm:py-8 md:py-10">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        {/* Header */}
        <div className="mb-6 flex flex-col justify-between gap-2  md:flex-row md:items-end md:gap-4 lg:mb-2 sm:mb-4">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-red sm:text-xs sm:tracking-[0.3em]">
              Services
            </span>
            <h2 className="mt-1.5 text-2xl font-black uppercase leading-tight tracking-tight text-brand-navy sm:mt-0.5 sm:text-3xl md:text-4xl lg:text-4xl">
              Hum Kya Karte Hain ?
            </h2>
          </div>

          <p className="max-w-xs text-xs font-medium leading-relaxed text-text-muted sm:text-sm">
            Expert luggage care and restoration.
          </p>
        </div>

        {/* Responsive service cards */}
        <div
          className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-hidden px-4 pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-6 sm:gap-5 sm:px-6 md:mx-0 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-4"
          aria-label="Our services"
        >
          {WhatWeDoList.map((service) => (
            <div
              key={service.title}
              className="w-[78vw] max-w-[340px] shrink-0 snap-center sm:w-[45vw] sm:max-w-none md:w-auto"
            >
              <Link
                href={service.link}
                aria-label={`${service.title}: ${service.desc}`}
                className="group relative block h-full rounded-[1.75rem] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red sm:rounded-[2rem] lg:rounded-[2.5rem]"
              >
                <div className="relative h-[300px] w-full overflow-hidden rounded-[1.75rem] transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-2xl group-hover:shadow-brand-navy/10 sm:h-[340px] sm:rounded-[2rem] md:h-[360px] lg:h-[320px] xl:h-[360px]">
                  {/* Service image */}
                  <div className="absolute inset-0 flex items-center justify-center p-6 transition-transform duration-500 group-hover:scale-105 sm:p-8 lg:p-6 xl:p-8">
                    <Image
                      src={service.src}
                      alt={service.title}
                      fill
                      sizes="(max-width: 639px) 78vw, (max-width: 767px) 45vw, (max-width: 1023px) 45vw, 25vw"
                      className="object-contain"
                    />
                  </div>

                  {/* Service label */}
                  <div className="pointer-events-auto absolute inset-x-3 bottom-3 rounded-2xl border border-white/40 bg-white/75 p-3 shadow-lg backdrop-blur-xl transition-all duration-300 sm:inset-x-4 sm:bottom-4 sm:p-4 md:translate-y-0 md:opacity-100 lg:pointer-events-none lg:translate-y-3 lg:opacity-0 lg:group-hover:pointer-events-auto lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-focus-visible:pointer-events-auto lg:group-focus-visible:translate-y-0 lg:group-focus-visible:opacity-100">
                    <div className="flex items-center justify-between gap-2">
                      <div className="min-w-0">
                        <h3 className="truncate text-sm font-bold tracking-tight text-slate-900 sm:text-base">
                          {service.title}
                        </h3>

                        <p className="mt-0.5 line-clamp-2 text-xs leading-relaxed text-slate-700 sm:text-sm">
                          {service.desc}
                        </p>
                      </div>

                      <div className="flex shrink-0 items-center justify-center rounded-full bg-brand-red p-2 text-white transition-colors group-hover:bg-white group-hover:text-brand-red sm:p-2.5">
                        <ArrowUpRight size={18} />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Mobile pagination indicators */}
        <div
          className="mt-1 flex items-center justify-center gap-2 md:hidden"
          aria-hidden="true"
        >
          {WhatWeDoList.map((service, index) => (
            <span
              key={service.title}
              className={`h-2 w-2 rounded-full ${
                index === 0 ? "bg-brand-red" : "bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
