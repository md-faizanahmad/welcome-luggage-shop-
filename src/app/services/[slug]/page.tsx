import { services } from "@/data/services";
import Image from "next/image";

interface Part {
  name: string;
  price: string;
  image: string;
}

interface Service {
  slug: string;
  title: string;
  description: string;
  image: string;
  parts: Part[];
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const generateMetadata = async ({ params }: PageProps) => {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | Welcome Luggage & Repairing Center`,
    description: service.description,

    content:
      "Expert luggage repair in Gaya. We specialize in fixing bags, trolleys, zips, wheels, and handles at affordable prices. Visit Welcome Luggage & Repairing Center for reliable repair services.",
    openGraph: {
      title: `${service.title} | Welcome Luggage & Repairing Center`,
      description: service.description,
      url: `https://www.welcomeluggagerepair.shop/services/${slug}`,
      type: "website",
      images: [service.image],
    },
  };
};

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const service: Service | undefined = services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found | Welcome Luggage & Repairing Center",
      description:
        "The requested service could not be found. Contact Welcome Luggage & Repairing Center in Gaya for luggage and trolley repair services.",
    };
  }

  return (
    <main className="max-w-6xl mx-auto px-4 pt-10 pb-10 ">
      {/* Hero Section: Compact for Mobile */}
      <section className="flex flex-col md:flex-row items-center gap-6 mb-10">
        <div className="w-full md:w-1/2">
          <div className="relative aspect-video md:aspect-square max-h-[300px] md:max-h-full w-full">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="rounded-2xl shadow-md object-cover"
              priority
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-700 leading-tight">
            {service.title}
          </h1>
          <p className="mt-3 text-gray-700 text-base md:text-lg leading-relaxed">
            {service.description}
          </p>
        </div>
      </section>

      {/* Parts Section */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl md:text-2xl font-semibold text-blue-600">
            Parts & Accessories
          </h2>
          <span className="text-xs text-gray-400 md:hidden italic">
            Swipe →
          </span>
        </div>

        {/* Mobile: Horizontal Scroll | Desktop: Grid */}
        <div className="flex overflow-x-auto pb-4 gap-4 snap-x md:grid md:grid-cols-4 md:overflow-visible">
          {service.parts.map((part) => (
            <div
              key={part.name}
              className="flex-shrink-0 w-[160px] md:w-auto snap-start bg-white rounded-xl p-2 border border-gray-100 shadow-sm md:shadow-none md:border-0"
            >
              <div className="relative aspect-square w-full mb-2">
                <Image
                  src={part.image}
                  alt={part.name}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <h3 className="text-sm md:text-base font-medium text-gray-900 text-center line-clamp-2">
                {part.name}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
