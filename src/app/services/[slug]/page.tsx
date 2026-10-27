import { services } from "@/data/services";
import Image from "next/image";

interface Part {
  name: string;

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
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found | Welcome Luggage & Repairing Center",
    };
  }

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
  };
};

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const service: Service | undefined = services.find(
    (item) => item.slug === slug,
  );

  if (!service) {
    return (
      <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        <h1 className="text-xl font-semibold text-gray-900">
          Service not found
        </h1>
        <p className="mt-2 text-sm leading-6 text-gray-600">
          This service may no longer be available. Please contact Welcome
          Luggage & Repairing Center in Gaya for assistance.
        </p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-4 pb-12 pt-24 sm:px-6 sm:pt-28">
      {/* Service information */}
      <section className="mb-10 grid grid-cols-1 gap-5 sm:gap-7 md:grid-cols-2 md:items-center">
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
          <Image
            src={service.image}
            alt={service.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="py-1 md:py-4">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
            Our Services
          </p>

          <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 sm:text-3xl">
            {service.title}
          </h1>

          <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
            {service.description}
          </p>

          <div className="mt-5 border-t border-gray-200 pt-4">
            <p className="text-sm font-medium text-gray-900">Need a repair?</p>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Visit our shop in Gaya to discuss the repair and available parts.
            </p>
          </div>
        </div>
      </section>

      {/* Available parts */}
      <section>
        <div className="mb-4 flex items-end justify-between gap-3 border-b border-gray-200 pb-3">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 sm:text-xl">
              Parts & Accessories
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Available parts for your luggage
            </p>
          </div>

          {service.parts.length > 2 && (
            <span className="shrink-0 text-xs text-gray-500 sm:hidden">
              Swipe to view →
            </span>
          )}
        </div>

        {service.parts.length > 0 ? (
          <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-3 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:overflow-visible sm:px-0 md:grid-cols-4 lg:grid-cols-5">
            {service.parts.map((part) => (
              <article
                key={part.name}
                className="w-[148px] shrink-0 snap-start sm:w-auto"
              >
                <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
                  <Image
                    src={part.image}
                    alt={part.name}
                    fill
                    sizes="(max-width: 639px) 148px, (max-width: 1023px) 33vw, 20vw"
                    className="object-cover"
                  />
                </div>

                <div className="pt-2">
                  <h3 className="line-clamp-2 text-sm font-medium leading-5 text-gray-900">
                    {part.name}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="py-6 text-sm text-gray-500">
            Please contact us for information about available parts.
          </p>
        )}
      </section>
    </main>
  );
}
