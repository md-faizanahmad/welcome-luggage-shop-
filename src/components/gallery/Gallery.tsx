"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
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
    cat: "Leather Repair",
    src: Img4,
    grid: "md:col-span-2 md:row-span-1",
  },
  {
    id: 5,
    title: "Wheel System",
    cat: "Wheels",
    src: Img5,
    grid: "md:col-span-1 md:row-span-1",
  },
  {
    id: 6,
    title: "Travel Ready",
    cat: "Final Check",
    src: Img6,
    grid: "md:col-span-1 md:row-span-1",
  },
];

export default function GalleryPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main className="min-h-screen overflow-hidden bg-white text-gray-900">
      {/* Page heading */}
      <section className="px-5 pb-7 pt-24 sm:px-6 sm:pt-10 md:pb-9">
        <div className="mx-auto max-w-7xl border-l-[3px] border-black pl-4 sm:pl-5">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">
            Our Work
          </p>

          <h1 className="text-3xl font-bold uppercase leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Welcome
            <br />
            <span className="text-brand-navy-light">Luggage Gallery</span>
          </h1>

          <p className="mt-3 max-w-md text-sm leading-6 text-gray-600">
            A look at luggage repairs, replacement parts, and everyday workshop
            work.
          </p>
        </div>
      </section>

      {/* Mobile: horizontal swipe gallery */}
      <section aria-label="Luggage repair gallery" className="md:hidden">
        <div className="mb-3 flex items-center justify-between px-5">
          <h2 className="text-sm font-semibold text-gray-900">
            Workshop Gallery
          </h2>
          <span className="text-xs text-gray-500">Swipe to explore →</span>
        </div>

        <div className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain px-5 pb-4">
          {GALLERY_ITEMS.map((item, index) => (
            <article
              key={item.id}
              className="relative h-[340px] w-[82vw] max-w-[340px] shrink-0 snap-start overflow-hidden bg-gray-100 sm:h-[390px] sm:w-[70vw]"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                priority={index === 0}
                sizes="(max-width: 640px) 82vw, 70vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-300">
                  {item.cat}
                </span>

                <h3 className="mt-1 text-xl font-semibold leading-snug text-white">
                  {item.title}
                </h3>

                <span className="mt-3 block text-xs text-white/70">
                  Work #{String(item.id).padStart(2, "0")}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Desktop and tablet: original bento layout */}
      <section
        aria-label="Luggage repair work"
        className="hidden px-5 pb-12 md:block lg:px-6 lg:pb-16"
      >
        <div className="mx-auto grid max-w-7xl auto-rows-[210px] grid-cols-3 gap-2 lg:auto-rows-[250px] lg:grid-cols-4">
          {GALLERY_ITEMS.map((item, index) => (
            <motion.article
              key={item.id}
              whileHover={shouldReduceMotion ? undefined : { y: -2 }}
              transition={{ duration: 0.2 }}
              className={`group relative min-w-0 overflow-hidden bg-gray-100 ${item.grid}`}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                priority={index === 0}
                sizes={
                  item.id === 1 || item.id === 4
                    ? "(min-width: 1024px) 50vw, 66vw"
                    : "(min-width: 768px) 33vw, 25vw"
                }
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent transition-colors duration-200 group-hover:from-black/85" />

              <div className="absolute inset-x-0 bottom-0 p-4 lg:p-5">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-300">
                  {item.cat}
                </span>

                <h3 className="mt-1 text-lg font-semibold leading-snug text-white lg:text-xl">
                  {item.title}
                </h3>
              </div>

              <span className="absolute right-3 top-3 text-xs font-medium text-white/80">
                /{String(index + 1).padStart(2, "0")}
              </span>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Simple workshop footer strip */}
      <section className="bg-black px-5 py-5 text-white sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-3">
          <span className="text-xs font-medium text-white/70">
            Quality Materials
          </span>

          <span className="text-xs font-medium text-white/70">
            Skilled Repairs
          </span>

          <a
            href="https://wa.me/919430965836"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-10 items-center text-xs font-semibold text-blue-400 transition-colors hover:text-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
          >
            Enquire About a Repair{" "}
            <span className="ml-1" aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </section>
    </main>
  );
}
