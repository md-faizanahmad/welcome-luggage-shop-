"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

interface FormData {
  name: string;
  item: string;
  issue: string;
}

export default function WhatsAppSupportForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    item: "",
    issue: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const phoneNumber = "919430965830"; // 🔹 Replace with your WhatsApp number
    const textMessage = `Hello, my name is ${formData.name}.
I need help with my ${formData.item}.
Issue: ${formData.issue}.`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      textMessage
    )}`;
    window.open(url, "_blank");
  };

  return (
    <>
      {/* Main Form */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="bg-white w-full rounded-lg shadow-md p-6 max-w-md mx-auto"
      >
        <h2 className="text-xl sm:text-2xl font-bold text-black mb-4">
          Submit a WhatsApp Request
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
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
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
              placeholder="Your Name"
              required
            />
          </div>

          {/* Item Dropdown */}
          <div>
            <label
              className="block text-black text-sm font-medium mb-1"
              htmlFor="item"
            >
              Item
            </label>
            <select
              id="item"
              name="item"
              value={formData.item}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
              required
            >
              <option value="">Select Item</option>
              <option value="Luggage">Luggage</option>
              <option value="Trolley Bag">Trolley Bag</option>
              <option value="Backpack">Backpack</option>
              <option value="Travel Bag">Travel Bag</option>
            </select>
          </div>

          {/* Issue Dropdown */}
          <div>
            <label
              className="block text-black text-sm font-medium mb-1"
              htmlFor="issue"
            >
              Issue
            </label>
            <select
              id="issue"
              name="issue"
              value={formData.issue}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
              required
            >
              <option value="">Select Issue</option>
              <option value="Wheel Broken">Wheel Broken</option>
              <option value="Handle Loose">Handle Loose</option>
              <option value="Zip Issue">Zip Issue</option>
              <option value="Cover Needed">Cover Needed</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-teal-500 text-white py-2 rounded-lg hover:from-green-600 hover:to-teal-600 transition-colors text-sm"
          >
            Send via WhatsApp
          </button>
        </form>

        {/* Trust Info */}
        <div className="mt-6 text-sm text-gray-600">
          ⏱ Most repairs done in <span className="font-semibold">1 day</span>{" "}
          <br />
          💰 Affordable rates starting at{" "}
          <span className="font-semibold">₹100</span> <br />
          📍 Visit us at Gaya – Reliable repairs, trusted service
        </div>
      </motion.div>

      {/* Floating WhatsApp Button */}
    </>
  );
}
