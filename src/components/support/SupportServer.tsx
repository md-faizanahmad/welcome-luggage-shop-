import {
  MapPin,
  Phone,
  Clock,
  User,
  ShieldCheck,
  HelpCircle,
} from "lucide-react";
import SupportCard from "./SupportCard"; // Use the <details> version
import React from "react";
import WhatsAppSupportForm from "@/shared/Whatsapp";

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

export default function SupportServer() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* 1. Minimal Header */}
      <header className="mb-12 border-l-4 border-blue-600 pl-6">
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
          Support & Professional Services
        </h1>
        <p className="text-slate-500 mt-1 font-medium italic">
          Welcome Luggage & Repairing Center — Gaya
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* 2. Left Column: Business Details & WhatsApp */}
        <div className="lg:col-span-5 space-y-8">
          {/* Contact Grid - No BG, just clean borders */}
          <section className="border border-slate-200 rounded-2xl p-6">
            <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-blue-600 mb-6">
              <ShieldCheck size={18} /> Business Information
            </h2>

            <div className="grid grid-cols-1 gap-6">
              <InfoItem
                icon={<User size={18} />}
                label="Proprietor"
                value={supportData.contact.owner}
              />
              <InfoItem
                icon={<Phone size={18} />}
                label="Phone"
                value={supportData.contact.phone}
                highlight
              />
              <InfoItem
                icon={<Clock size={18} />}
                label="Hours"
                value={supportData.contact.hours}
              />
              <InfoItem
                icon={<MapPin size={18} />}
                label="Location"
                value={supportData.contact.location}
              />
            </div>
          </section>

          {/* WhatsApp Section */}
          <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <WhatsAppSupportForm />
          </div>
        </div>

        {/* 3. Right Column: FAQs */}
        <section className="lg:col-span-7">
          <div className="flex items-center gap-3 mb-6">
            <HelpCircle className="text-blue-600" />
            <h2 className="text-xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="border-t border-slate-100">
            {supportData.faqs.map((faq, index) => (
              <SupportCard
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

// Minimalist Sub-component

interface InfoItemsProps {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
  highlight?: boolean;
}

function InfoItem({ icon, label, value, highlight = false }: InfoItemsProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-1 text-slate-400">{icon}</div>
      <div>
        <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
          {label}
        </p>
        <p
          className={`text-base font-semibold ${highlight ? "text-blue-600" : "text-slate-800"}`}
        >
          {value}
        </p>
      </div>
    </div>
  );
}
