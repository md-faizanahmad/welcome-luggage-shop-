"use client";
import Image from "next/image";
import { Plus } from "lucide-react"; // Optional icon for extra flair

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
    <div className="group relative w-full overflow-hidden rounded-[24px] bg-[#f8f8f8] transition-all duration-500">
      {/* 1. Square Container (Forces all cards to match) */}
      <div className="relative aspect-square w-full overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        />

        {/* 2. Next-Gen Hover Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-6">
          <div className="translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
            {/* <span className="text-white/70 text-xs font-bold uppercase tracking-widest mb-1 block">
              welcome trolly
            </span> */}
            <h2 className="text-xl font-bold text-white leading-tight">
              {product.name}
            </h2>

            {/* Action Button */}
            <button className="mt-4 w-full rounded-full bg-white py-3 text-sm font-bold text-black shadow-lg hover:bg-neutral-100 transition-colors">
              Book Service
            </button>
          </div>
        </div>
      </div>

      {/* 3. Static Footer (Visible when not hovering on Desktop / Always visible for context) */}
      <div className="flex items-center justify-between p-5 bg-white group-hover:bg-neutral-50 transition-colors">
        <div>
          <h3 className="text-sm font-bold text-neutral-900 line-clamp-1">
            {product.name}
          </h3>
          <p className="text-xs text-neutral-500">Professional Repair</p>
        </div>
        <div className="h-10 w-10 rounded-full border border-neutral-200 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
          <Plus size={18} />
        </div>
      </div>
    </div>
  );
}
