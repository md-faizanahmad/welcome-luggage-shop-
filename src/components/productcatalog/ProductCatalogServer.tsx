import ProductCatalogClient from "./ProductCatalogClient";

const products = [
  {
    id: 1,
    name: "Har Tarah Ke Bag Ki Marammat",
    image: "/catlogs/catlog1.jpg",
  },
  {
    id: 2,
    name: "Kapdon Ki Fitting Aur Marammat",
    image: "/catlogs/catlog2.png",
  },
  {
    id: 3,
    name: "Wholesale Spare Parts",
    image: "/catlogs/catlog3.jpg",
  },
];

export const metadata = {
  title: "Hamari Collections | Welcome Luggage & Repairing Center",
  description:
    "Bag ki marammat, kapdon ki fitting aur luggage ke spare parts ki jaankari paayein.",
};

export default function ProductCatalogServer() {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-transparent">
      <div className="mx-auto w-full max-w-7xl px-4 pb-8 pt-6 sm:px-6 sm:pb-10 sm:pt-8 lg:px-8 lg:pb-12">
        <header className="mb-5 sm:mb-7 lg:mb-9">
          <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-red sm:text-xs">
            Hamari Suvidhayein
          </p>

          <h1 className="text-2xl font-black leading-tight tracking-tight text-brand-navy sm:text-3xl md:text-4xl lg:text-5xl">
            Aapke Kaam Ki
            <span className="block text-brand-red sm:inline"> Har Suvidha</span>
          </h1>

          <p className="mt-2 max-w-xl text-xs leading-5 text-text-muted sm:mt-3 sm:text-sm sm:leading-6">
            Bag ki marammat se lekar spare parts tak, apni zaroorat ki suvidha
            chunein.
          </p>
        </header>

        <ProductCatalogClient products={products} />
      </div>
    </main>
  );
}
