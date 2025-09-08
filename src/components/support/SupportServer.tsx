import SupportClient from "./SupportClient";

const supportData = {
  contact: {
    email: "support@techfix.com",
    phone: "+1-800-555-1234",
    hours: "Mon-Fri, 9 AM - 6 PM IST",
  },
  faqs: [
    {
      question: "How long does a repair take?",
      answer:
        "Repairs typically take 1-3 business days, depending on the issue.",
    },
    {
      question: "What is your warranty policy?",
      answer: "We offer a 90-day warranty on all repairs.",
    },
    {
      question: "Do you offer remote support?",
      answer: "Yes, for software issues, we provide remote assistance.",
    },
  ],
};

export const metadata = {
  title: "Support - TechFix",
  description: "Get help and support for your devices at TechFix",
};

export default function SupportServer() {
  return (
    <div className="min-h-screen py-12 bg-gray-50 mt-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-black text-center mb-8">
          Support
        </h1>
        <SupportClient supportData={supportData} />
      </div>
    </div>
  );
}
