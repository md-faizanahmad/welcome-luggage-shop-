"use client";
import { motion } from "motion/react";
import HeroServer from "./HeroServer";

export default function HeroClient() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <HeroServer />
    </motion.div>
  );
}
