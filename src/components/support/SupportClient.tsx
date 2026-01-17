"use client";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SupportCard from "./SupportCard";
import WhatsAppSupportForm from "../shared/Whatsapp";

interface SupportData {
  contact: {
    owner: string;
    phone: string;
    hours: string;
    location: string;
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

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="max-w-6xl mx-auto space-y-12"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Contact Info Card */}
        <motion.div
          variants={itemVariants}
          className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm"
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b pb-4">
            Visit Our Shop
          </h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm uppercase tracking-wider text-slate-500 font-semibold">
                Proprietor
              </p>
              <p className="text-lg font-medium text-slate-800">
                {supportData.contact.owner}
              </p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-wider text-slate-500 font-semibold">
                Contact Number
              </p>
              <p className="text-lg font-medium text-blue-600">
                {supportData.contact.phone}
              </p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-wider text-slate-500 font-semibold">
                Service Hours
              </p>
              <p className="text-lg font-medium text-slate-800">
                {supportData.contact.hours}
              </p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-wider text-slate-500 font-semibold">
                Location
              </p>
              <p className="text-lg font-medium text-slate-800">
                {supportData.contact.location}
              </p>
            </div>
          </div>
        </motion.div>

        {/* WhatsApp Form Section */}
        <motion.div variants={itemVariants} className="h-full">
          <WhatsAppSupportForm />
        </motion.div>
      </div>

      {/* FAQ Section */}
      <motion.div
        variants={itemVariants}
        className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm"
      >
        <h2 className="text-2xl font-bold text-slate-900 mb-8">
          Common Questions
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {supportData.faqs.map((faq, index) => (
            <SupportCard
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
