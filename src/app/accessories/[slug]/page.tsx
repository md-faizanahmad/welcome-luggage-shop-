import { notFound } from "next/navigation";
import Image from "next/image";
import accessoriesData from "@/data/accessories.json";
import PartsCard from "@/components/accessorycard/accessorycard";

interface Part {
  name: string;
  price: number;
  image: string;
}

interface Accessory {
  slug: string;
  name: string;
  description: string;
  image: string;
  parts: Part[];
}

// ✅ Correct typing for App Router dynamic route
interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function AccessoryPage({ params }: PageProps) {
  const { slug } = await params; // ✅ params is async in Next.js 13+

  const accessory: Accessory | undefined = accessoriesData.find(
    (item) => item.slug === slug
  );

  if (!accessory) return notFound();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="md:w-1/2">
          <Image
            src={accessory.image}
            alt={accessory.name}
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-3xl font-bold">{accessory.name}</h1>
          <p className="text-gray-700">{accessory.description}</p>
        </div>
      </div>

      {/* Parts Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {accessory.parts.map((part) => (
          <PartsCard
            key={part.name}
            name={part.name}
            price={part.price}
            image={part.image}
          />
        ))}
      </div>
    </div>
  );
}
