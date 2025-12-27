import BannerCarousel from "@/components/hero/HeroCarousel";
import ProductCatalogServer from "@/components/productcatalog/ProductCatalogServer";
import ReviewSection from "@/components/reviews/Reviews";
import StatsCounter from "@/components/shared/ShopStats";
import ServicesClient from "@/components/whatwedo/WhatWeDoClient";

export default function Home() {
  return (
    <div className="font-sans mt-15">
      <BannerCarousel />
      <ServicesClient />
      <StatsCounter />
      <ProductCatalogServer />
      <ReviewSection />
    </div>
  );
}
