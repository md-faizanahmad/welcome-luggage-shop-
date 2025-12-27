"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SupportCard from "./SupportCard";
import WhatsAppSupportForm from "../shared/Whatsapp";

interface SupportData {
  contact: {
    email: string;
    phone: string;
    hours: string;
  };
  faqs: { question: string; answer: string }[];
}

export default function SupportClient({
  supportData,
}: {
  supportData: SupportData;
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="space-y-8"
    >
      <div className="flex flex-col lg:flex-row gap-6">
        <motion.div variants={itemVariants} className=" rounded-lg  p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-black mb-4">
            Contact Us
          </h2>
          <p className="text-black">
            <strong>Onwer Name:</strong> {supportData.contact.email}
          </p>
          <p className="text-black">
            <strong>Phone:</strong> {supportData.contact.phone}
          </p>
          <p className="text-black">
            <strong>Hours:</strong> {supportData.contact.hours}
          </p>
        </motion.div>
        <WhatsAppSupportForm />
      </div>
      <motion.div
        variants={itemVariants}
        className="bg-white rounded-lg shadow-md p-6"
      >
        <h2 className="text-xl sm:text-2xl font-bold text-black mb-4">
          Frequently Asked Questions
        </h2>
        {supportData.faqs.map((faq, index) => (
          <SupportCard
            key={index}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
