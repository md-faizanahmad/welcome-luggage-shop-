import { Product } from "@/@types/Product";
import ProductGrid from "@/components/pages/WholesalePage/ProductGrid";

// Mock Data - In a real app, fetch this from an API/Database
const products: Product[] = [
  {
    id: 1,
    name: "Heavy Duty Handle",
    category: "Handle",
    price: "₹500.00",
    image: "/trolley_handle.png",
  },
  {
    id: 2,
    name: "360 Spin Wheel",
    category: "Trolley Parts",
    price: "₹120.00",
    image: "/parts/wheel.jpg",
  },
  // Add more items...
];

export default function WholesalePage() {
  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      <div className="bg-blue-400 py-12 px-4 text-center text-white">
        <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
          Wholesale Parts
        </h1>
        <p className="mt-2 text-blue-50 font-medium">
          Premium Luggage Components at Bulk Prices
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-[-2rem]">
        <ProductGrid initialProducts={products} />
      </div>
    </main>
  );
}
