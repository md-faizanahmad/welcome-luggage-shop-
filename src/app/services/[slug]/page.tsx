import { services } from "@/data/services";
import { notFound } from "next/navigation";
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
    openGraph: {
      title: `${service.title} | Welcome Luggage & Repairing Center`,
      description: service.description,
      url: `https://www.welcomeluggagerepair.shop/services/${slug}`,
      type: "website",
      images: [service.image],
    },
    alternates: {
      canonical: `https://www.welcomeluggagerepair.shop/services/${slug}`,
    },
  };
};

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service: Service | undefined = services.find((s) => s.slug === slug);

  if (!service) return notFound();

  return (
    <main className="max-w-6xl mx-auto px-4 py-12 mt-20">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <div className="md:w-1/2">
          <Image
            src={service.image}
            alt={service.title}
            width={800}
            height={450}
            className="rounded-2xl shadow-lg"
            priority
          />
        </div>
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-4xl font-bold text-blue-700">{service.title}</h1>
          <p className="text-gray-700 text-lg">{service.description}</p>
        </div>
      </section>

      {/* Parts Section */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-semibold text-center text-blue-600 mb-8">
          Parts & Accessories
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {service.parts.map((part) => (
            <div key={part.name} className="flex flex-col items-center">
              <Image
                src={part.image}
                alt={part.name}
                width={300}
                height={200}
                className="rounded-lg"
              />
              <h3 className="mt-3 font-semibold text-gray-900">{part.name}</h3>
              {/* <p className="text-gray-600">{part.price}</p> */}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
