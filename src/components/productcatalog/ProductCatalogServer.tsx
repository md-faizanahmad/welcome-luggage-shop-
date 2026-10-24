import ProductCatalogClient from "./ProductCatalogClient";

const products = [
  {
    id: 1,
    name: "Bag & Luggage Repair",
    image: "/catlogs/Products_Ones.png",
  },
  {
    id: 2,
    name: "Zipper Replacement & Repair",
    image: "/catlogs/Products_Twos.png",
  },
  {
    id: 3,
    name: "Travel Luggage Repair",
    image: "/catlogs/Products_Three.png",
  },
  {
    id: 4,
    name: "Luggage Handle Repair",
    image: "/catlogs/Products_Four.png",
  },
  {
    id: 5,
    name: "Leather & Fabric Handle Repair",
    image: "/catlogs/Products_Five.png",
  },
  {
    id: 6,
    name: "Luggage Wheel Replacement",
    image: "/catlogs/Products_Six.png",
  },
  {
    id: 7,
    name: "Luggage Wheels & Tyres",
    image: "/catlogs/Products_Seven.png",
  },
];

export const metadata = {
  title: "Our Services | Welcome Luggage & Repairing Center",
  description: "Welcome Luggage & Repairing Center, Gaya — hamari services.",
};

export default function ProductCatalogServer() {
  return (
    <section className="w-full overflow-hidden bg-transparent py-6 sm:py-8">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-5 text-2xl font-black tracking-tight text-brand-navy sm:mb-7 sm:text-3xl md:text-4xl">
          Hamari <span className="text-brand-red"> Catalog</span>
        </h2>

        <ProductCatalogClient products={products} />
      </div>
    </section>
  );
}
