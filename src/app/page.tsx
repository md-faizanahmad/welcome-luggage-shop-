"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import ProductCatalogServer from "@/components/productcatalog/ProductCatalogServer";
import ReviewSection from "@/components/reviews/Reviews";
import StatsCounter from "@/components/shared/ShopStats";
import ServicesClient from "@/components/whatwedo/WhatWeDoClient";
import Hero from "@/components/hero/Hero";
import Link from "next/link";
import { ZipperReplacementSection } from "@/components/Zipper/ZipperReplacement";
import { TrolleyRepairSection } from "@/components/trolley/TrolleyRepair";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="relative  antialiased overflow-x-hidden">
      {/* 1. Next-Gen Scroll Progress Bar (Top of screen) */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1  origin-left z-[110]"
        style={{ scaleX }}
      />

      {/* 2. Hero Section - Full Bleed */}
      <section className="relative w-full overflow-hidden">
        {/* <BannerCarousel /> */}
        <Hero />
      </section>

      {/* 3. Services Section - Negative Margin for Depth */}

      <ServicesClient />
      <TrolleyRepairSection />
      <ZipperReplacementSection />
      {/* 4. Stats Counter - Minimalist Strip */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <StatsCounter />
        </div>
      </section>

      {/* 5. Product Catalog - The Content Hero */}
      <section className="py-12 md:py-20">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="mb-12 border-l-4 border-blue-600 pl-6">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
              Premium Parts <br />
              <span className="text-slate-400">& Inventory</span>
            </h2>
          </div>
          <ProductCatalogServer />
        </div>
      </section>

      {/* 6. Review Section - "Clean Social Proof" */}
      <section className=" py-20 rounded-t-[3rem] md:rounded-t-[5rem]">
        <div className="max-w-7xl mx-auto px-4">
          <ReviewSection />
        </div>
      </section>

      {/* 7. Floating Action (Optional) */}
      <div className="fixed bottom-8 right-8 z-[90]">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-blue-600 text-white p-4 rounded-full shadow-2xl flex items-center gap-2 font-bold uppercase tracking-widest text-[10px]"
        >
          <Link href="/support" className="" aria-label="Support ">
            Book Now
          </Link>
        </motion.button>
      </div>
    </div>
  );
}
