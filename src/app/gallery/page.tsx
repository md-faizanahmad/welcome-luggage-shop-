"use client";
import { motion } from "framer-motion";
import Image from "next/image";

// Replace with your real gallery images
import Img1 from "@/assets/gallery/shop.jpg";
import Img2 from "@/assets/gallery/shop.jpg";
import Img3 from "@/assets/gallery/shop.jpg";
import Img4 from "@/assets/gallery/shop.jpg";
import Img5 from "@/assets/gallery/shop.jpg";
import Img6 from "@/assets/gallery/shop.jpg";

export default function GalleryPage() {
  const galleryImages = [
    { src: Img1, alt: "Luggage Repair" },
    { src: Img2, alt: "Trolley Bag Repair" },
    { src: Img3, alt: "Backpack Repair" },
    { src: Img4, alt: "Custom Covers" },
    { src: Img5, alt: "Wholesale Parts" },
    { src: Img6, alt: "Dress Alterations" },
  ];

  return (
    <motion.div
      className="max-w-7xl mx-auto px-4 py-12 mt-15"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Title */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-black">
          Our Gallery
        </h1>
        <p className="text-gray-600 mt-2 text-lg">
          A glimpse of our work – repairs, accessories, and custom services.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryImages.map((img, index) => (
          <motion.div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={400}
              height={300}
              className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity">
              {img.alt}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
