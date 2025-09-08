"use client";
import { motion } from "motion/react";
import ServicesServer from "./WhatWeDoServer";

export default function ServicesClient() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, staggerChildren: 0.2 }}
    >
      <ServicesServer />
    </motion.div>
  );
}
