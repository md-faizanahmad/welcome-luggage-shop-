"use client";

import React from "react";
import { motion } from "framer-motion";
import { Settings, Luggage, Package } from "lucide-react";

const HeroClient = () => {
  const stats = [
    { label: "Brands Repaired", value: "VIP, Samsonite, etc.", icon: Luggage },
    { label: "Service Quality", value: "Precision Hardware", icon: Settings },
    { label: "Inventory", value: "Wholesale Parts", icon: Package },
  ];

  return (
    <div className="relative">
      {/* Motion Graphic Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 space-y-4"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 * index + 0.5 }}
            whileHover={{ scale: 1.05, x: -10 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl flex items-center gap-4 cursor-default"
          >
            <div className="bg-blue-500 p-3 mt-4 rounded-xl shadow-lg shadow-blue-500/40">
              <stat.icon className="text-white" size={24} />
            </div>
            <div>
              <p className="text-xs text-blue-300 uppercase tracking-widest font-bold">
                {stat.label}
              </p>
              <p className="text-xl text-white font-semibold">{stat.value}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Decorative Animated Circles */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -top-20 -right-20 w-80 h-80 border border-blue-500/20 rounded-full border-dashed"
      />
    </div>
  );
};

export default HeroClient;
