"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import Img1 from "@/assets/gallery/shop.jpg";
import Img2 from "@/assets/gallery/shop.jpg";
import Img3 from "@/assets/gallery/shop.jpg";
import Img4 from "@/assets/gallery/shop.jpg";
import Img5 from "@/assets/gallery/shop.jpg";
import Img6 from "@/assets/gallery/shop.jpg";

const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Hard-shell Restoration",
    cat: "Repair",
    src: Img1,
    grid: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    title: "Handle Fix",
    cat: "Hardware",
    src: Img2,
    grid: "md:col-span-1 md:row-span-1",
  },
  {
    id: 3,
    title: "Zipper Replacement",
    cat: "Detail",
    src: Img3,
    grid: "md:col-span-1 md:row-span-1",
  },
  {
    id: 4,
    title: "Vintage Leather",
    cat: "Luxury",
    src: Img4,
    grid: "md:col-span-2 md:row-span-1",
  },
  {
    id: 5,
    title: "Wheel System",
    cat: "Internal",
    src: Img5,
    grid: "md:col-span-1 md:row-span-1",
  },
  {
    id: 6,
    title: "Travel Ready",
    cat: "Final",
    src: Img6,
    grid: "md:col-span-1 md:row-span-1",
  },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white p-5">
      {/* Tight, Impactful Header */}
      <section className="pt-20 pb-10 px-4">
        <div className="max-w-[1400px] mx-auto border-l-4 border-black pl-6">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">
            Welcome <br />{" "}
            <span className="text-blue-400">Luggage Gallery</span>
          </h1>
          <p className="text-gray-500 mt-4 max-w-sm text-sm font-medium uppercase tracking-widest">
            High-performance repair standards.
          </p>
        </div>
      </section>

      {/* MOBILE: Edge-to-Edge Swipe Experience */}
      <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory no-scrollbar bg-black">
        {GALLERY_ITEMS.map((item) => (
          <div
            key={item.id}
            className="snap-center shrink-0 w-[82vw] h-[50vh] relative border-r border-white/10"
          >
            <Image
              src={item.src}
              alt={item.title}
              fill
              className="object-cover opacity-80"
            />
            <div className="absolute bottom-10 left-8 right-8">
              <span className="text-blue-500 text-xs font-bold uppercase tracking-[0.2em]">
                {item.cat}
              </span>
              <h3 className="text-white text-3xl font-bold mt-1 tracking-tight">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* DESKTOP: Flush Professional Bento Grid */}
      <section className="hidden md:block px-4 pb-20">
        <div className="max-w-[1400px] mx-auto grid grid-cols-4 auto-rows-[300px] gap-2">
          {GALLERY_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -5 }}
              className={`relative overflow-hidden group bg-gray-100 ${item.grid}`}
            >
              {/* Image with subtle zoom on hover */}
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              {/* Minimalist Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex flex-col justify-end p-8">
                <div className="translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-blue-400 text-xs font-bold uppercase tracking-[0.3em]">
                    {item.cat}
                  </span>
                  <h3 className="text-white text-2xl font-bold tracking-tight mt-1">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Top-Right Index Number for "Gallery" look */}
              <div className="absolute top-6 right-6 text-white/50 text-xs font-mono group-hover:text-white transition-colors">
                /0{idx + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modern Contact Strip - No extra padding/space */}
      <div className="bg-black py-6">
        <div className="max-w-[1400px] mx-auto px-4 flex justify-between items-center text-white/40 text-[10px] font-bold uppercase tracking-[0.4em]">
          <span>Quality Materials</span>
          <span>Expert Craftsmanship</span>
          <span className="text-blue-500">Book Repair</span>
        </div>
      </div>
    </main>
  );
}
