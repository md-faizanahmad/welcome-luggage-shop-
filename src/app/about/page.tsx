"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import ShopImage from "@/assets/shop.jpg"; // Replace with your shop image

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className="max-w-7xl mx-auto px-4 py-12 mt-10 space-y-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <Image
            src={ShopImage}
            alt="Welcome Luggage & Repairing Center"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-black">
            Welcome to Welcome Luggage & Repairing Center
          </h1>
          <p className="text-gray-700 text-lg">
            With over{" "}
            <span className="font-semibold">15 years of experience</span>, we
            specialize in repairing all types of luggage, bags, and trolleys at
            affordable prices. Our dedicated team ensures that your items are
            repaired with precision and care, maintaining the quality and
            durability of your travel essentials.
          </p>
          <p className="text-gray-700 text-lg">
            We also provide custom covers, accessories, and dress alterations
            for men, women, and children. Your satisfaction is our priority, and
            we pride ourselves on trusted service, fair pricing, and
            professional workmanship.
          </p>
        </div>
      </div>

      {/* Services Highlights */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <h3 className="font-bold text-lg">Luggage Repair</h3>
          <p className="text-gray-600">
            Repair VIP, Samsonite, Wildcraft & more.
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <h3 className="font-bold text-lg">Wholesale Parts</h3>
          <p className="text-gray-600">Wheels, handles, runners, and covers.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <h3 className="font-bold text-lg">Custom Covers</h3>
          <p className="text-gray-600">
            Protective covers for luggage & travel bags.
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <h3 className="font-bold text-lg">Dress Alterations</h3>
          <p className="text-gray-600">
            Neat stitching for men, women, and children.
          </p>
        </div>
      </motion.div>

      {/* Call to Action */}
      <div className="text-center mt-10">
        <p className="text-lg text-gray-700">
          Visit us today at <span className="font-semibold">Gaya</span> for
          reliable repairs and professional services you can trust.
        </p>
      </div>
    </motion.div>
  );
}
