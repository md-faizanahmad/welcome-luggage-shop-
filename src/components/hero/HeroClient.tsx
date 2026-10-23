"use client";

import { motion } from "framer-motion";
import { Settings, Luggage, Package } from "lucide-react";

const stats = [
  {
    label: "Brands Repaired",
    value: "VIP, Samsonite & More",
    icon: Luggage,
  },
  {
    label: "Repair Quality",
    value: "Precision Workmanship",
    icon: Settings,
  },
  {
    label: "Parts Inventory",
    value: "Wholesale Parts Available",
    icon: Package,
  },
];

export default function HeroClient() {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 space-y-4"
      >
        {stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.45,
                delay: 0.15 * index,
                ease: "easeOut",
              }}
              whileHover={{ x: -5, scale: 1.02 }}
              className="group flex items-center gap-4 rounded-2xl border border-white/15 bg-white/10 p-4 shadow-lg shadow-black/10 backdrop-blur-xl transition-colors hover:border-brand-red/60 hover:bg-white/15 sm:p-5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-red shadow-md shadow-brand-red/20 transition-transform group-hover:scale-105">
                <Icon
                  className="text-white"
                  size={23}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </div>

              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/65">
                  {stat.label}
                </p>
                <p className="mt-1 text-base font-semibold leading-snug text-white sm:text-lg">
                  {stat.value}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        aria-hidden="true"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -right-8 -top-10 h-56 w-56 rounded-full border border-dashed border-brand-red/25 xl:-right-12"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-brand-red/10 blur-3xl"
      />
    </div>
  );
}
