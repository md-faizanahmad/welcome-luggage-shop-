"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SupportCard from "./SupportCard";

interface SupportData {
  contact: {
    email: string;
    phone: string;
    hours: string;
  };
  faqs: { question: string; answer: string }[];
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function SupportClient({
  supportData,
}: {
  supportData: SupportData;
}) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Support request submitted:", formData);
    setFormData({ name: "", email: "", message: "" }); // Reset form
  };

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
      <motion.div
        variants={itemVariants}
        className="bg-white rounded-lg shadow-md p-6"
      >
        <h2 className="text-xl sm:text-2xl font-bold text-black mb-4">
          Contact Us
        </h2>
        <p className="text-black">
          <strong>Email:</strong> {supportData.contact.email}
        </p>
        <p className="text-black">
          <strong>Phone:</strong> {supportData.contact.phone}
        </p>
        <p className="text-black">
          <strong>Hours:</strong> {supportData.contact.hours}
        </p>
      </motion.div>

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

      <motion.div
        variants={itemVariants}
        className="bg-white rounded-lg shadow-md p-6"
      >
        <h2 className="text-xl sm:text-2xl font-bold text-black mb-4">
          Submit a Support Request
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              className="block text-black text-sm font-medium mb-1"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm placeholder:text-black"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label
              className="block text-black text-sm font-medium mb-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm placeholder:text-black"
              placeholder="Your Email"
              required
            />
          </div>
          <div>
            <label
              className="block text-black text-sm font-medium mb-1"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm placeholder:text-black"
              placeholder="Describe your issue..."
              rows={4}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-2 rounded-lg hover:from-blue-600 hover:to-green-600 transition-colors text-sm"
          >
            Submit Request
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
}
