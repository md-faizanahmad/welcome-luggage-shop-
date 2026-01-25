import ProductCatalogClient from "./ProductCatalogClient";

const products = [
  { id: 1, name: "All Types Bag Repair", image: "/catlogs/catlog1.jpg" },
  { id: 2, name: "Dress Alterations", image: "/catlogs/catlog2.png" },
  { id: 3, name: "Wholesale Parts", image: "/catlogs/catlog3.jpg" },
];

export const metadata = {
  title: "Collections | TechFix",
  description: "Experience premium repair services and parts.",
};

export default function ProductCatalogServer() {
  return (
    <div className="min-h-screen bg-[#fafafa] selection:bg-black selection:text-white">
      {/* Decorative background element */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-100/50 blur-[120px]" />
      </div>

      <div className="relative container mx-auto px-6 pt-20 pb-12">
        <header className="max-w-2xl mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-2 font-semibold">
            Service Catalog
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-neutral-900">
            WTR{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              Solutions.
            </span>
          </h1>
        </header>

        <ProductCatalogClient products={products} />
      </div>
    </div>
  );
}
