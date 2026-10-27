"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const HERO_IMAGES = [
  { src: "/cards_img/card1.png", alt: "Luggage and accessories" },
  { src: "/cards_img/wheel.png", alt: "Wheel" },
  { src: "/cards_img/cover.png", alt: "Cover" },
  { src: "/cards_img/change-handle.png", alt: "handle time" },
  { src: "/cards_img/card2.png", alt: "Luggage repair products" },
  { src: "/cards_img/card3.png", alt: "Replacement parts" },
  { src: "/cards_img/card4.png", alt: "Luggage accessories" },
];
export default function HeroImage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % HERO_IMAGES.length);
    }, 3500);

    return () => window.clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <div className="relative mx-auto w-full max-w-[260px] sm:max-w-[320px] lg:max-w-[380px] xl:max-w-[420px]">
      <div className="relative aspect-square w-full">
        <AnimatePresence initial={false}>
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.7,
              ease: "easeInOut",
            }}
            className="absolute inset-0"
          >
            <Image
              src={HERO_IMAGES[activeIndex].src}
              alt={HERO_IMAGES[activeIndex].alt}
              fill
              priority={activeIndex === 0}
              sizes="(max-width: 640px) 260px, (max-width: 1023px) 320px, (max-width: 1279px) 380px, 420px"
              className="object-contain"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
