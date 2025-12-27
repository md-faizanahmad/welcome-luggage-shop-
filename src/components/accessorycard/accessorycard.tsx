import Image from "next/image";

interface PartProps {
  name: string;
  price: number;
  image: string;
}

export default function PartsCard({ name, price, image }: PartProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
      <Image
        src={image}
        alt={name}
        width={200}
        height={150}
        className="rounded-md"
      />
      <h3 className="mt-2 font-semibold">{name}</h3>
      <p className="text-green-600 font-medium">₹{price}</p>
    </div>
  );
}
