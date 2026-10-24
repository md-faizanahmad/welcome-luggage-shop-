import Hero from "@/components/hero/Hero";
import ProductCatalogServer from "@/components/productcatalog/ProductCatalogServer";
import ReviewSection from "@/components/reviews/Reviews";
import ServicesClient from "@/components/whatwedo/WhatWeDoClient";
import { ZipperReplacementSection } from "@/components/Zipper/ZipperReplacement";
import { TrolleyRepairSection } from "@/components/trolley/TrolleyRepair";
import StatsCounter from "@/shared/ShopStats";

export default function HomePages() {
  return (
    <div className="relative antialiased overflow-x-hidden">
      {/* Client-only scroll animation */}

      <section className="relative w-full overflow-hidden">
        <Hero />
      </section>

      <ServicesClient />
      <TrolleyRepairSection />
      <ZipperReplacementSection />

      <section className="py-8 md:py-24 ">
        <div className="max-w-7xl mx-auto">
          <StatsCounter />
        </div>
      </section>

      <ProductCatalogServer />

      <section className="py-20 rounded-t-[3rem] md:rounded-t-[5rem]">
        <div className="max-w-7xl mx-auto px-4">
          <ReviewSection />
        </div>
      </section>
    </div>
  );
}
