"use client";

import { useRef, useState } from "react";
import ProductCard from "./ProductCard";

interface Product {
  id: number;
  name: string;
  image: string;
}

interface ProductCatalogClientProps {
  products: Product[];
}

export default function ProductCatalogClient({
  products,
}: ProductCatalogClientProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const cards = Array.from(container.children) as HTMLElement[];
    if (!cards.length) return;

    const containerCenter =
      container.getBoundingClientRect().left +
      container.getBoundingClientRect().width / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    cards.forEach((card, index) => {
      const cardCenter =
        card.getBoundingClientRect().left +
        card.getBoundingClientRect().width / 2;

      const distance = Math.abs(containerCenter - cardCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };

  const scrollToProduct = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;

    const card = container.children[index] as HTMLElement | undefined;

    card?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });

    setActiveIndex(index);
  };

  return (
    <>
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="
          -mx-4 flex snap-x snap-mandatory gap-4
          overflow-x-auto overscroll-x-contain
          px-4 pb-3
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
          sm:-mx-6 sm:gap-5 sm:px-6
          md:mx-0 md:grid md:grid-cols-2
          md:gap-6 md:overflow-visible md:px-0 md:pb-0
          xl:grid-cols-3 xl:gap-7
        "
        aria-label="Hamari services"
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="
              w-[80vw] max-w-[320px] shrink-0 snap-start
              sm:w-[65vw] sm:max-w-[350px]
              md:w-auto md:max-w-[300px]
              xl:max-w-[280px]
            "
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* Mobile navigation dots */}
      {products.length > 1 && (
        <div className="mt-4 flex items-center justify-center gap-2 md:hidden">
          {products.map((product, index) => (
            <button
              key={product.id}
              type="button"
              onClick={() => scrollToProduct(index)}
              aria-label={`Show product ${index + 1}: ${product.name}`}
              aria-current={activeIndex === index ? "true" : undefined}
              className={`
                h-2.5 rounded-full transition-all duration-300
                focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-brand-red focus-visible:ring-offset-2
                ${
                  activeIndex === index
                    ? "w-7 bg-brand-red"
                    : "w-2.5 bg-brand-navy/20 hover:bg-brand-red/50"
                }
              `}
            />
          ))}
        </div>
      )}
    </>
  );
}
