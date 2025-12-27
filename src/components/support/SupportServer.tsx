import SupportClient from "./SupportClient";

const supportData = {
  contact: {
    email: "Md Mushtaque Ahmad",
    phone: "+919430965836",
    hours: "Mon-Sat, 10 AM - 8:30 PM IST & Sometimes Sunday ",
  },
  faqs: [
    {
      question: "What types of items do you repair?",
      answer:
        "We repair all types of luggage, travel bags, and trolley bags including VIP, Skybags, Samsonite, Wildcraft, and more.",
    },
    {
      question: "Do you replace damaged parts like wheels or handles?",
      answer:
        "Yes, we stock and replace wheels, handles, runners, and covers (plastic & cloth) at wholesale prices.",
    },
    {
      question: "Can you make custom covers for luggage?",
      answer:
        "Yes, we provide custom covers and accessories for luggage and travel bags to suit your needs.",
    },
    {
      question: "Do you offer dress alteration services?",
      answer:
        "Yes, we provide dress alterations for men, women, and children with neat stitching at reasonable rates.",
    },
    {
      question: "How long does a repair usually take?",
      answer:
        "Most repairs are completed within a few hours or a day, depending on the issue.",
    },
    {
      question: "What are your service charges?",
      answer:
        "Our charges are affordable and vary depending on the type of repair or alteration. Visit us for a quick estimate.",
    },
    {
      question: "Where is your shop located?",
      answer:
        "We are located in Gaya. Visit us today for reliable repairs and professional alterations.",
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
