"use client";

import Image from "next/image";

interface Product {
  id: number;
  name: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative w-full overflow-hidden rounded-xl">
      <Image
        src={product.image}
        alt={product.name}
        width={900}
        height={900}
        sizes="
          (max-width: 639px) 88vw,
          (max-width: 767px) 420px,
          (max-width: 1279px) 45vw,
          30vw
        "
        className="
          block h-auto w-full object-contain
          transition-transform duration-300 ease-out
          group-hover:scale-[1.04]
        "
        priority={product.id === 1}
      />
    </div>
  );
}
