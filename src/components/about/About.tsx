"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ShopImage from "@/assets/shop.jpg";
import { ShieldCheck, Clock, MapPin } from "lucide-react";

export default function AboutClient() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-6 md:py-10">
      {/* 1. SEO KEYWORDS STRIP - Tighter Margin */}
      <div className="mb-6 flex flex-wrap gap-x-6 gap-y-2 border-b border-slate-100 pb-4">
        {[
          "Luggage Repair Gaya",
          "Trolley Wheel Fix",
          "Bag Zip Repair",
          "Samsonite Service",
          "Wholesale Parts",
        ].map((word) => (
          <span
            key={word}
            className="text-[9px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-1.5"
          >
            <span className="w-1 h-1 bg-blue-600 rounded-full" /> {word}
          </span>
        ))}
      </div>

      {/* Hero & Features Combined to Save Space */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* IMAGE - Compacted Width */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="md:col-span-4 relative group"
        >
          <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-[2rem] shadow-xl border-4 border-white z-10">
            <Image
              src={ShopImage}
              alt="Workshop"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 300px"
            />
          </div>
          <div className="absolute -inset-2 bg-blue-50 rounded-[2.2rem] -rotate-2 -z-0" />
        </motion.div>

        {/* CONTENT - Optimized for Quick Reading */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="md:col-span-8 space-y-4"
        >
          <span className="text-blue-600 font-black uppercase tracking-widest text-[9px] bg-blue-50 px-2 py-0.5 rounded">
            Trusted Since 2009
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-[0.95]">
            Professional <span className="text-blue-600">Luggage Repair</span>{" "}
            in Gaya.
          </h2>

          <p className="text-slate-600 text-sm max-w-2xl">
            Welcome Luggage is Gaya&apos;s specialized workshop for high-end
            restoration. We repair VIP, Samsonite, and more with precision
            hardware.
          </p>

          {/* Quick Stats - Condensed */}
          <div className="flex gap-6 py-2 border-y border-slate-50">
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-wider text-slate-800">
              <ShieldCheck size={14} className="text-blue-600" /> Genuine Parts
            </div>
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-wider text-slate-800">
              <Clock size={14} className="text-blue-600" /> Same-Day Fix
            </div>
          </div>

          {/* FEATURES - Moved up and made smaller */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
            <MiniFeature title="Repair" desc="All Brands" />
            <MiniFeature title="Wholesale" desc="Bulk Parts" />
            <MiniFeature title="Custom" desc="Bags Covers" />
            <MiniFeature title="Alter" desc="Tailoring" />
          </div>
        </motion.div>
      </div>

      {/* CTA Footer - Highly Compact */}
      <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <MapPin size={16} className="text-blue-600" />
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
            G.B Road, Infront of Sony Optical, Gaya
          </p>
        </div>
        <h3 className="text-sm font-bold text-slate-800 italic">
          &quot;Quality repairs you can trust.&quot;
        </h3>
      </div>
    </div>
  );
}

function MiniFeature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-blue-200 transition-colors">
      <h4 className="text-[10px] font-black uppercase text-slate-900 leading-none">
        {title}
      </h4>
      <p className="text-[9px] text-slate-500 mt-1">{desc}</p>
    </div>
  );
}
