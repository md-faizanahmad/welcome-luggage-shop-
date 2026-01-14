"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ProductCard from "./ProductCard";

interface Product {
  id: number;
  name: string;
  image: string;
}

interface ProductCatalogClientProps {
  products: Product[];
}

export default function ProductCatalogClient({
  products,
}: ProductCatalogClientProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12"
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </motion.div>
  );
}
