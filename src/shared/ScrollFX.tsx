// components/home/ScrollFX.tsx
"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";

export default function ScrollFX() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="hidden fixed top-0  left-0 right-0 h-1 bg-blue-600 origin-left z-[110]"
        style={{ scaleX }}
      />

      {/* Floating CTA */}
      <div className="fixed bottom-8 right-8 z-[90]">
        <Link
          href="/support"
          aria-label="Book luggage repair support"
          className="bg-blue-600 text-white p-4 rounded-full shadow-2xl font-bold uppercase tracking-widest text-[10px]"
        >
          Book Now
        </Link>
      </div>
    </>
  );
}
