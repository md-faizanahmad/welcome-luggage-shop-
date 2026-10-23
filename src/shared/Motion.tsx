import { motion, type HTMLMotionProps } from "framer-motion";

type MotionProps = HTMLMotionProps<"div">;

export default function Motion({
  children,
  initial = { opacity: 0, y: 16 },
  whileInView = { opacity: 1, y: 0 },
  viewport = { once: true, amount: 0.2 },
  transition = { duration: 0.5, ease: "easeOut" },
  ...props
}: MotionProps) {
  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
      {...props}
    >
      {children}
    </motion.div>
  );
}
