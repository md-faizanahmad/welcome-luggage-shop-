"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, History, MapPin, Award } from "lucide-react";
// Import your images here
// import OwnerImage from "@/assets/owner.jpg";

export default function AboutStorySection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 overflow-hidden">
      {/* 1. SEO & Trust Header */}
      <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-6">
        <div>
          <span className="text-blue-600 font-black uppercase tracking-[0.2em] text-[10px] bg-blue-50 px-3 py-1 rounded-full">
            Est. Before 2007
          </span>
          <h1 className="text-2xl font-bold text-slate-900 mt-2">
            Our Heritage in Repair
          </h1>
        </div>
        <div className="flex gap-4">
          <SEOBadge text="Luggage Repair Gaya" />
          <SEOBadge text="Trolley Specialist" />
          <SEOBadge text="Boutique Stitching" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* 2. Visual Storytelling (Owner & Shop) */}
        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative z-10 aspect-[4/5] rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1558191053-8edcb01e1da3?q=80&w=1000" // Replace with OwnerImage
              alt="Md Mushtaque Ahmad - Expert Craftsman at Welcome Luggage"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 450px"
            />
            {/* Legend Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-6 text-white">
              <p className="text-sm font-bold">Md Mushtaque Ahmad</p>
              <p className="text-xs opacity-80 uppercase tracking-widest">
                Master Craftsman & Proprietor
              </p>
            </div>
          </motion.div>

          {/* Decorative Elements */}
          <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-blue-600 rounded-[2rem] -z-0 hidden md:block" />
        </div>

        {/* 3. The Narrative (Storytelling) */}
        <div className="lg:col-span-7 space-y-6">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2 text-blue-600">
              <History size={20} />
              <span className="font-bold uppercase tracking-wider text-xs">
                The Journey
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.1]">
              From Dehri-on-Sone <br />
              <span className="text-blue-600 text-2xl md:text-4xl">
                To the Heart of Gaya.
              </span>
            </h2>

            <div className="space-y-4 text-slate-600 leading-relaxed text-base">
              <p>
                Our story didn&apos;t start in Gaya. Long before 2007, we were
                the trusted repair hands in
                <strong className="text-slate-900"> Dehri-on-Sone</strong>. We
                built our reputation on a simple promise:{" "}
                <em>If it travels with you, we can fix it.</em>
              </p>
              <p>
                In <strong className="text-slate-900">2007</strong>, we brought
                that legacy to Gaya, establishing
                <strong> Welcome Luggage & Repairing Center</strong>. For nearly
                two decades at G.B. Road, we have saved thousands of suitcases
                from landfills and perfected the art of boutique tailoring.
              </p>
            </div>
          </motion.div>

          {/* Trust Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <Award className="text-blue-600 shrink-0" />
              <div>
                <h4 className="font-bold text-slate-900 text-sm italic">
                  Master Craftsmanship
                </h4>
                <p className="text-xs text-slate-500">
                  Decades of experience in luxury brand restoration.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <ShieldCheck className="text-blue-600 shrink-0" />
              <div>
                <h4 className="font-bold text-slate-900 text-sm italic">
                  Authentic Spares
                </h4>
                <p className="text-xs text-slate-500">
                  Only high-grade wheels, zips, and runners used.
                </p>
              </div>
            </div>
          </div>

          {/* Location Quick-Scan */}
          <div className="pt-6 border-t border-slate-100 flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-blue-600" />
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                G.B Road, Infront of Sony Optical, Gaya
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SEOBadge({ text }: { text: string }) {
  return (
    <span className="hidden md:flex items-center gap-1.5 text-[9px] font-black uppercase tracking-tighter text-slate-400">
      <div className="w-1 h-1 bg-blue-600 rounded-full" /> {text}
    </span>
  );
}
