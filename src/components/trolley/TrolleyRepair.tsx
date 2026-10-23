"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Settings, CheckCircle2, MoveRight } from "lucide-react";

const repairServices = [
  "Trolley ke pahiye badalna",
  "Handle ki marammat",
  "Lock theek karna",
  "Bag ke body ki marammat",
];

export function TrolleyRepairSection() {
  return (
    <section className="w-full overflow-hidden bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-7 sm:gap-9 lg:grid-cols-2 lg:gap-12">
        {/* Repair Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="group relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div className="absolute -left-3 -top-3 h-16 w-16 rounded-full bg-brand-red-light opacity-70 blur-2xl sm:h-20 sm:w-20" />

          <div className="relative h-[230px] w-full overflow-hidden rounded-2xl border border-border shadow-lg sm:h-[300px] sm:rounded-3xl md:h-[340px] lg:h-[380px]">
            <Image
              src="/Trolley_Repair.png"
              alt="Trolley bag ke pahiye aur handle ki marammat"
              fill
              sizes="(max-width: 639px) 100vw, (max-width: 1023px) 80vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Parts Badge */}
            <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-white/50 bg-white/90 px-3 py-2 shadow-md backdrop-blur-sm sm:bottom-4 sm:left-4 sm:right-auto sm:px-4 sm:py-3">
              <p className="text-xs font-bold text-brand-red sm:text-sm">
                Zaroori parts uplabdh hain
              </p>
              <p className="mt-0.5 text-[11px] font-medium text-brand-navy sm:text-xs">
                Pahiye, handle aur lock
              </p>
            </div>
          </div>
        </motion.div>

        {/* Repair Details */}
        <div className="min-w-0">
          <header>
            <div className="mb-2 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-red sm:mb-3 sm:text-sm">
              <Settings size={16} />
              Bharosemand marammat
            </div>

            <h2 className="text-2xl font-black leading-tight tracking-tight text-brand-navy sm:text-3xl md:text-4xl lg:text-[2.65rem]">
              Trolley bag ke pahiye ya handle{" "}
              <span className="text-brand-red">kharab ho gaye hain?</span>
            </h2>
          </header>

          <p className="mt-3 max-w-xl text-sm leading-6 text-text-muted sm:mt-4 sm:text-base sm:leading-7">
            Toota hua body, atakta hua handle ya kharab pahiye — hum aapke
            trolley bag ki marammat karte hain. Zaroorat ke hisaab se parts
            badal kar aapke bag ko phir se istemal ke layak banate hain.
          </p>

          {/* Services List */}
          <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:mt-5 sm:grid-cols-2 sm:gap-3">
            {repairServices.map((item) => (
              <li
                key={item}
                className="flex min-w-0 items-start gap-2.5 text-sm font-semibold text-brand-navy sm:text-base"
              >
                <CheckCircle2
                  size={18}
                  className="mt-0.5 shrink-0 text-brand-red"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Call Button */}
          <div className="mt-5 sm:mt-6">
            <a
              href="tel:+919430965836"
              className="group inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-brand-red px-5 py-3 text-sm font-bold text-white shadow-md transition-colors hover:bg-brand-red-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red sm:w-auto sm:px-6 sm:text-base"
            >
              Marammat ke liye call karein
              <MoveRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
