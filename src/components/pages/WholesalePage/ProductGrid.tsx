"use client";

import { useState } from "react";
import { Search, CheckCircle2 } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import { CATEGORIES, Product } from "@/@types/Product";
import { motion } from "motion/react";

export default function ProductGrid({
  initialProducts,
}: {
  initialProducts: Product[];
}) {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Filter Logic
  const filtered = initialProducts.filter(
    (p) =>
      (activeTab === "All" || p.category === activeTab) &&
      p.name.toLowerCase().includes(search.toLowerCase()),
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Shop will contact you soon!", {
      icon: <CheckCircle2 className="text-green-400" />,
      style: { borderRadius: "10px", background: "#333", color: "#fff" },
    });
    setSelectedProduct(null);
  };

  return (
    <div className="flex flex-col gap-6">
      <Toaster position="top-center" />

      {/* Search & Filters */}
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col gap-4">
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search parts..."
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-400 transition-all"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase whitespace-nowrap transition-all ${
                activeTab === cat
                  ? "bg-blue-400 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Compact Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {filtered.map((product) => (
          <div
            key={product.id}
            className="group relative bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all"
          >
            <div className="aspect-square bg-slate-100 relative">
              {/* Image would go here */}
              <div className="absolute inset-0 flex items-center justify-center text-slate-300 text-[10px] uppercase font-bold">
                Image
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-blue-400/90 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-2 text-center">
                <span className="text-white font-black text-xl mb-2">
                  {product.price}
                </span>
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="bg-green-400 text-white px-4 py-2 rounded-lg text-[10px] font-bold uppercase hover:bg-green-500 transition-colors"
                >
                  Get Quote
                </button>
              </div>
            </div>
            <div className="p-2">
              <h3 className="text-[11px] font-bold text-slate-800 truncate uppercase">
                {product.name}
              </h3>
              <p className="text-[9px] text-slate-400 font-bold uppercase">
                {product.category}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Order Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white w-full max-w-md rounded-3xl p-8 shadow-2xl"
          >
            <h2 className="text-2xl font-black uppercase tracking-tighter text-slate-800 mb-1">
              Inquiry for
            </h2>
            <p className="text-blue-400 font-bold uppercase text-sm mb-6">
              {selectedProduct.name}
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                required
                type="text"
                placeholder="Full Name"
                className="w-full p-4 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-green-400"
              />
              <input
                required
                type="tel"
                placeholder="Phone Number"
                className="w-full p-4 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-green-400"
              />
              <textarea
                required
                placeholder="Address"
                className="w-full p-4 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-green-400 h-24"
              />

              <div className="flex gap-3 mt-2">
                <button
                  type="button"
                  onClick={() => setSelectedProduct(null)}
                  className="flex-1 py-4 font-bold uppercase text-slate-400 hover:text-slate-600 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-4 bg-green-400 text-white rounded-xl font-bold uppercase tracking-widest hover:bg-green-500 transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}
