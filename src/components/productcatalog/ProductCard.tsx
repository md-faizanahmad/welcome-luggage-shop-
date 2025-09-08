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
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Image
        width={500}
        height={500}
        src={product.image}
        alt={product.name}
        className="w-full h-min cursor-pointer object-fit"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-black">{product.name}</h2>
        {/* <p className="text-gray-600 text-sm mt-2">{product.description}</p> */}
        {/* <p className="text-lg font-bold text-black mt-2">
          ${product.price.toFixed(2)}
        </p> */}
      </div>
    </div>
  );
}
