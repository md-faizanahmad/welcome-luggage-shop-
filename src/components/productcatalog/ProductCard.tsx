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
    <div className="relative w-full overflow-hidden rounded-xl">
      <Image
        src={product.image}
        alt={product.name}
        width={800}
        height={800}
        sizes="(max-width: 639px) 82vw, (max-width: 767px) 360px, (max-width: 1279px) 45vw, 30vw"
        className="block h-auto w-full object-contain"
        priority={product.id === 1}
      />
    </div>
  );
}
