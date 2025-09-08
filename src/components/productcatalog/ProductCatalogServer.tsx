import ProductCatalogClient from "./ProductCatalogClient";

const products = [
  {
    id: 1,
    name: "All Types Bag Repair",
    image: "/catlogs/catlog1.jpg",
  },
  {
    id: 2,
    name: "Dress alterations",
    image: "/catlogs/catlog2.png",
  },
  {
    id: 3,
    name: "Wholesale parts",
    image: "/catlogs/catlog3.jpg",
  },
];

export const metadata = {
  title: "Product Catalog - TechFix",
  description: "Browse our latest tech products at TechFix",
};

export default function ProductCatalogServer() {
  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-white shadow-2xl to-blue-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-black text-center mb-8">
          Product Catalog
        </h1>
        <ProductCatalogClient products={products} />
      </div>
    </div>
  );
}
