import SupportClient from "./SupportClient";

// Professional Business Data
const supportData = {
  contact: {
    owner: "Md Mushtaque Ahmad",
    phone: "+91 9430965836",
    hours: "Mon-Sat: 10:00 AM – 8:30 PM (Sun: On Call)",
    location: "Gaya, Bihar",
  },
  faqs: [
    {
      question: "Which luggage brands do you repair?",
      answer:
        "We specialize in all major brands including VIP, Skybags, Samsonite, American Tourister, Aristocrat, and Wildcraft.",
    },
    {
      question: "Do you provide genuine spare parts?",
      answer:
        "Yes, we stock high-quality wheels, telescopic handles, zippers, runners, and protective covers at wholesale prices.",
    },
    {
      question: "Do you offer custom luggage covers?",
      answer:
        "Absolutely. We provide custom-fit plastic and cloth covers to protect your luggage from scratches and rain.",
    },
    {
      question: "What types of dress alterations do you perform?",
      answer:
        "We offer professional alterations for men, women, and children, ensuring a perfect fit with neat, boutique-quality stitching.",
    },
    {
      question: "Is there a warranty on repairs?",
      answer:
        "We take pride in our craftsmanship. Most part replacements come with a service guarantee for your peace of mind.",
    },
  ],
};

export const metadata = {
  title:
    "Expert Luggage Repair & Dress Alterations in Gaya | Md Mushtaque Ahmad",
  description:
    "Professional repair services for VIP, Skybags, and Samsonite in Gaya. We offer wheel replacement, handle repairs, and expert dress alterations at affordable rates.",
  keywords:
    "Luggage repair Gaya, Trolley bag repair, Skybags service center Gaya, Dress alteration Gaya, Suitcase wheel replacement",
};

export default function SupportServer() {
  return (
    <div className="min-h-screen py-10 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
            Customer Support & Services
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Reliable repairs and professional tailoring in Gaya
          </p>
        </header>

        <SupportClient supportData={supportData} />
      </div>
    </div>
  );
}
