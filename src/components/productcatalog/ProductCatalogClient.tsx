"use client";

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
  return (
    <div
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
            w-[88vw] max-w-[380px] shrink-0 snap-start
            sm:w-[72vw] sm:max-w-[420px]
            md:w-auto md:max-w-none
          "
        >
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}
