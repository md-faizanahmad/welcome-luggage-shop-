"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Link from "next/link";

export function FourOhFourClient() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  useEffect(() => {
    document.title = "404 - Page Not Found | TechFix";
  }, []);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="text-center"
    >
      <motion.div variants={itemVariants} className="mb-6">
        <h1 className="text-5xl sm:text-6xl font-bold text-black">404</h1>
        <p className="text-2xl sm:text-3xl text-black mt-2">Page Not Found</p>
      </motion.div>
      <motion.p
        variants={itemVariants}
        className="text-lg sm:text-xl text-black max-w-md mx-auto mb-6"
      >
        Oops! It seems the page you’re looking for doesn’t exist or has been
        moved. Let’s get you back on track with your device repairs!
      </motion.p>
      <motion.div variants={itemVariants}>
        <Link
          href="/"
          className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-green-600 transition-colors text-sm sm:text-base"
        >
          📞 Call for Repair Help +91 9430965836
        </Link>
      </motion.div>
    </motion.div>
  );
}
