"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const WhatWeDoList = [
  {
    src: "/services/repairall.png",
    link: "/services/repairing-of-luggage",
  },
  {
    src: "/services/saleall.png",
    link: "/services/wholesale-parts",
  },
  {
    src: "/services/customcovers.png",
    link: "/services/custom-covers",
  },
  {
    src: "/services/4.png",
    link: "/services/dress-alterations",
  },
];

export default function WhatWeDoServer() {
  const [loaded, setLoaded] = useState<boolean[]>(new Array(4).fill(false));

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 mx-auto px-4 sm:px-6 lg:px-12 py-16">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {WhatWeDoList.map((service, index) => (
          <div
            key={index}
            className="relative group w-full h-52 sm:h-64 lg:h-72 overflow-hidden rounded-xl"
          >
            {/* Skeleton Loader */}
            {!loaded[index] && (
              <div className="absolute inset-0 animate-pulse bg-gray-200 rounded-xl"></div>
            )}

            {/* Image */}
            <Image
              src={service.src}
              alt={`Service ${index + 1}`}
              fill
              className={`object-contain transition-transform duration-500 ${
                loaded[index] ? "opacity-100" : "opacity-0"
              } group-hover:scale-110`}
              onLoad={() =>
                setLoaded((prev) => {
                  const newState = [...prev];
                  newState[index] = true;
                  return newState;
                })
              }
            />

            {/* Hover Button */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
              <Link
                href={service.link}
                className="px-4 py-2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition"
              >
                More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
