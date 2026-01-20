"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { Wrench, Home, Phone } from "lucide-react"; // Optional: npm i lucide-react

export function FourOhFourClient() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="flex flex-col items-center text-center px-4"
    >
      {/* Visual Icon/Graphic */}
      <motion.div variants={itemVariants} className="relative mb-8">
        <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <div className="relative bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
          <Wrench className="w-16 h-16 text-blue-600 mb-2 mx-auto" />
          <h1 className="text-8xl font-black text-gray-200">404</h1>
        </div>
      </motion.div>

      {/* Text Content */}
      <motion.header variants={itemVariants} className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
          Oops! This Bag is Unpacked.
        </h2>
        <p className="text-gray-600 max-w-md mx-auto text-lg leading-relaxed">
          The page you are looking for has been moved or doesn&apos;t exist.
          Don&apos;t worry, we can fix your luggage even if we can&apos;t find
          this link!
        </p>
      </motion.header>

      {/* Call to Action Buttons */}
      <motion.div
        variants={itemVariants}
        className="mt-10 flex flex-col sm:flex-row gap-4 w-full max-w-md"
      >
        <Link
          href="/"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all active:scale-95 shadow-lg shadow-blue-200"
        >
          <Home size={18} />
          Back to Home
        </Link>

        <a
          href="tel:+919430965836"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-white border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all active:scale-95"
        >
          <Phone size={18} />
          Call Support
        </a>
      </motion.div>

      {/* Quick Links */}
      <motion.footer variants={itemVariants} className="mt-12">
        <p className="text-sm text-gray-400 uppercase tracking-widest font-medium">
          Popular Services
        </p>
        <div className="flex flex-wrap justify-center gap-6 mt-4 text-gray-500 font-medium">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Trolley Repair
          </Link>
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Zipper Replacement
          </Link>
          <Link
            href="/support"
            className="hover:text-blue-600 transition-colors"
          >
            Find Shop
          </Link>
        </div>
      </motion.footer>
    </motion.section>
  );
}
