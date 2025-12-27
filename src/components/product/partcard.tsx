"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Part {
  name: string;
  price: string;
  image: string;
}

export default function PartsClient({ parts }: { parts: Part[] }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {parts.map((part, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition"
        >
          <div className="relative w-full h-40 mb-4">
            <Image
              src={part.image}
              alt={part.name}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <h3 className="text-lg font-semibold text-black">{part.name}</h3>
          <p className="text-green-600 font-bold">{part.price}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
