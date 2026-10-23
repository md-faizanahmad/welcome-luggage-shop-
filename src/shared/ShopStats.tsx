"use client";

import CountUp from "react-countup";
import { motion, useReducedMotion } from "framer-motion";
import { CalendarHeart, Users2, Verified } from "lucide-react";

const stats = [
  {
    label: "Customers Served",
    value: 100000,
    suffix: "+",
    icon: Users2,
  },
  {
    label: "Years of Experience",
    value: 15,
    suffix: "+",
    icon: CalendarHeart,
  },
  {
    label: "Parts Supplied",
    value: 50000,
    suffix: "+",
    icon: Verified,
  },
];

const StatItem = ({ item }: { item: (typeof stats)[number] }) => {
  const Icon = item.icon;

  return (
    <div className="flex min-w-[190px] items-center gap-3  px-4 py-3 sm:min-w-[220px] sm:gap-4 sm:px-5 sm:py-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-red-light text-brand-red sm:h-12 sm:w-12 sm:rounded-xl">
        <Icon size={20} strokeWidth={2} className="sm:hidden" />
        <Icon size={23} strokeWidth={2} className="hidden sm:block" />
      </div>

      <div className="min-w-0">
        <p className="whitespace-nowrap text-xl font-black leading-tight tracking-tight text-brand-navy sm:text-2xl">
          <CountUp
            end={item.value}
            duration={2.5}
            separator=","
            enableScrollSpy
            scrollSpyOnce
          />
          <span className="ml-0.5 text-brand-red">{item.suffix}</span>
        </p>

        <p className="mt-1 text-[10px] font-bold leading-tight text-text-muted sm:text-xs">
          {item.label}
        </p>
      </div>
    </div>
  );
};

export default function StatsCounter() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-label="Hamare kaam ka tajurba"
      className="w-full overflow-hidden py-6 sm:py-8 lg:py-10"
    >
      <div className="mx-auto w-full max-w-7xl px-3 sm:px-5 lg:px-8">
        {/* Section Heading */}
        <div className="mb-4 text-center sm:mb-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-red sm:text-xs sm:tracking-[0.22em]">
            Hamare kaam ki pehchaan
          </p>

          <h2 className="mt-1 text-xl font-black tracking-tight text-brand-navy sm:text-2xl md:text-3xl">
            Tajurba jo bharosa dilaye
          </h2>
        </div>

        {/* Stats Marquee */}
        <div
          className="group relative overflow-hidden"
          aria-label="Business statistics"
        >
          {/* Edge fade */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-5 bg-gradient-to-r from-white to-transparent sm:w-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-5 bg-gradient-to-l from-white to-transparent sm:w-10" />

          <motion.div
            className="flex w-max gap-3 py-2 sm:gap-4"
            animate={shouldReduceMotion ? undefined : { x: ["0%", "-50%"] }}
            transition={
              shouldReduceMotion
                ? undefined
                : {
                    x: {
                      duration: 28,
                      ease: "linear",
                      repeat: Infinity,
                    },
                  }
            }
            whileHover={
              shouldReduceMotion ? undefined : { animationPlayState: "paused" }
            }
          >
            {/* Duplicate items for a seamless loop */}
            {[...stats, ...stats].map((item, index) => (
              <div
                key={`${item.label}-${index}`}
                aria-hidden={index >= stats.length}
              >
                <StatItem item={item} />
              </div>
            ))}
          </motion.div>
        </div>

        <p className="mt-2 text-center text-[10px] leading-relaxed text-text-muted sm:text-xs">
          Apne bag ki marammat aur spare parts ke liye humse sampark karein.
        </p>
      </div>
    </section>
  );
}
