// components/home/HomeServer.tsx
import Hero from "@/components/hero/Hero";
import ProductCatalogServer from "@/components/productcatalog/ProductCatalogServer";
import ReviewSection from "@/components/reviews/Reviews";
import StatsCounter from "@/components/shared/ShopStats";
import ServicesClient from "@/components/whatwedo/WhatWeDoClient";
import { ZipperReplacementSection } from "@/components/Zipper/ZipperReplacement";
import { TrolleyRepairSection } from "@/components/trolley/TrolleyRepair";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Bag & Trolley Repair Shop in Gaya | Welcome Luggage Center",
  description:
    "Welcome Luggage & Repairing Center in Gaya offers expert trolley bag, suitcase, zip, wheel, and handle repair services. Affordable and trusted local shop.",
};
export default function HomeServer() {
  return (
    <div className="relative antialiased overflow-x-hidden">
      {/* Client-only scroll animation */}

      <section className="relative w-full overflow-hidden">
        <Hero />
      </section>

      <ServicesClient />
      <TrolleyRepairSection />
      <ZipperReplacementSection />

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <StatsCounter />
        </div>
      </section>

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

      <section className="py-20 rounded-t-[3rem] md:rounded-t-[5rem]">
        <div className="max-w-7xl mx-auto px-4">
          <ReviewSection />
        </div>
      </section>
    </div>
  );
}
