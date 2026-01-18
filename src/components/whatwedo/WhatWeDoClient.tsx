// components/whatwedo/ServicesClient.tsx
"use client";

import { motion, Variants } from "framer-motion";
import ServicesServer from "./WhatWeDoServer";

export default function ServicesClient() {
  // Animation Variants for a professional staggered entrance
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Staggers the cards one by one
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for "Next-Gen" feel
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* We use CSS selectors to target the children within the Server Component */}

      {/* Note: To animate individual cards inside a Server Component from a Client Parent, 
        we usually wrap the Server Component in a motion div. 
        For true staggering of server children, we target them via framer motion's 
        ability to animate child selectors or simple top-level fade-in.
      */}
      <motion.div variants={itemVariants}>
        <ServicesServer />
      </motion.div>
    </motion.div>
  );
}
