import HeroClient from "@/components/hero/HeroClient";
import ProductCatalogServer from "@/components/productcatalog/ProductCatalogServer";
import ReviewSection from "@/components/reviews/Reviews";
import ServicesClient from "@/components/whatwedo/WhatWeDoClient";

export default function Home() {
  return (
    <div className="font-sans mt-10">
      <HeroClient />
      <ServicesClient />
      <ProductCatalogServer />
      <ReviewSection />
    </div>
  );
}
