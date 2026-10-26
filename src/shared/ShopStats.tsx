"use client";

import CountUp from "react-countup";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import { useRef, useState } from "react";
import { getBusinessStats } from "@/lib/businessStats";

const stats = getBusinessStats();

type StatItemType = (typeof stats)[number];

function StatItem({ item }: { item: StatItemType }) {
  const Icon = item.icon;
  const numericValue = typeof item.value === "number" ? item.value : undefined;

  return (
    <div className="flex min-w-[190px] items-center gap-3 px-4 py-3 sm:min-w-[220px] sm:gap-4 sm:px-5 sm:py-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center text-brand-red sm:h-12 sm:w-12 sm:rounded-xl">
        <Icon size={20} strokeWidth={2} className="sm:hidden" />
        <Icon size={23} strokeWidth={2} className="hidden sm:block" />
      </div>

      <div className="min-w-0">
        <p className="whitespace-nowrap text-xl font-black leading-tight tracking-tight text-brand-navy sm:text-2xl">
          {numericValue !== undefined ? (
            <CountUp
              end={numericValue}
              duration={2.5}
              separator=","
              enableScrollSpy
              scrollSpyOnce
            />
          ) : (
            item.value
          )}

          {item.suffix && (
            <span className="ml-0.5 text-brand-red">{item.suffix}</span>
          )}
        </p>

        <p className="mt-1 whitespace-nowrap text-[10px] font-bold leading-tight text-text-muted sm:text-xs">
          {item.label}
        </p>
      </div>
    </div>
  );
}

function StatGroup({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-center gap-3 pr-3 sm:gap-4 sm:pr-4"
      aria-hidden={duplicate}
    >
      {stats.map((item) => (
        <div key={item.label}>
          <StatItem item={item} />
        </div>
      ))}
    </div>
  );
}

export default function StatsCounter() {
  const shouldReduceMotion = useReducedMotion();
  const [isPaused, setIsPaused] = useState(false);

  const trackRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const positionRef = useRef(0);

  useAnimationFrame((_, delta) => {
    if (shouldReduceMotion || isPaused) return;

    const groupWidth = groupRef.current?.getBoundingClientRect().width;

    if (!groupWidth) return;

    const speed = 45; // Pixels per second
    positionRef.current -= (speed * delta) / 1000;

    if (positionRef.current <= -groupWidth) {
      positionRef.current += groupWidth;
    }

    x.set(positionRef.current);
  });

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
            Experience jo bharosa dilaye
          </h2>
        </div>

        {/* Infinite Stats Marquee */}
        <div
          className="group relative cursor-pointer overflow-hidden"
          aria-label="Business statistics"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Edge Fade */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-5 bg-gradient-to-r from-white to-transparent sm:w-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-5 bg-gradient-to-l from-white to-transparent sm:w-10" />

          <div ref={trackRef} className="overflow-hidden">
            <motion.div
              className="flex w-max"
              style={{
                x,
                willChange: shouldReduceMotion ? "auto" : "transform",
              }}
            >
              <div ref={groupRef}>
                <StatGroup />
              </div>

              <StatGroup duplicate />
            </motion.div>
          </div>
        </div>

        <p className="mt-2 text-center text-[10px] leading-relaxed text-text-muted sm:text-xs">
          Apne bag ki marammat aur spare parts ke liye humse sampark karein.
        </p>
      </div>
    </section>
  );
}
