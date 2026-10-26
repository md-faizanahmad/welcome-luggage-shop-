import {
  MapPin,
  Phone,
  Clock,
  User,
  ShieldCheck,
  HelpCircle,
} from "lucide-react";
import SupportCard from "./SupportCard";
import React from "react";
import WhatsAppSupportForm from "@/shared/Whatsapp";

const supportData = {
  contact: {
    owner: "Md Mushtaque Ahmad",
    phone: "+91 9430965836",
    hours: "Somvaar–Shanivaar: 10 AM–8:30 PM (Ravivaar: Call karein)",
    location: "Gaya, Bihar",
  },
  faqs: [
    {
      question: "Kaun-kaun se luggage brands repair hote hain?",
      answer:
        "Hum VIP, Skybags, Samsonite, American Tourister, Aristocrat aur Wildcraft jaise major brands ke bags aur trolley repair karte hain.",
    },
    {
      question: "Kya spare parts achhi quality ke milte hain?",
      answer:
        "Haan, hum luggage ke wheels, telescopic handles, zips, runners aur protective covers jaise parts provide karte hain. Parts ki availability aur price ke liye humse contact karein.",
    },
    {
      question: "Kya luggage ke custom covers bhi milte hain?",
      answer:
        "Haan, luggage ko dhool, scratches aur baarish se bachane ke liye plastic aur kapde ke covers ki availability ke baare mein pooch sakte hain.",
    },
    {
      question: "Kya kapdon ki fitting aur alteration bhi hoti hai?",
      answer:
        "Haan, hum men, women aur children ke kapdon ki fitting aur alteration ka kaam bhi karte hain.",
    },
    {
      question: "Kya repair par warranty milti hai?",
      answer:
        "Warranty repair aur replace kiye gaye part par depend karti hai. Kaam shuru karne se pehle warranty ki details humse confirm kar lein.",
    },
  ],
};

export default function SupportServer() {
  return (
    <main className="mx-auto max-w-7xl px-4 pb-10 pt-10 sm:px-6 sm:pt-8 lg:px-8">
      {/* Page heading */}
      <header className="mb-8">
        <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 sm:text-3xl">
          Support aur Services
        </h1>
        <p className="mt-2 text-sm leading-6 text-gray-600">
          Welcome Luggage & Repairing Center — Gaya
        </p>
      </header>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
        {/* Contact and WhatsApp */}
        <div className="space-y-8 lg:col-span-5">
          <section>
            <h2 className="mb-5 flex items-center gap-2 text-base font-semibold text-gray-900">
              <ShieldCheck size={19} className="shrink-0 text-gray-700" />
              Dukaan ki jaankari
            </h2>

            <div className="space-y-5">
              <InfoItem
                icon={<User size={18} />}
                label="Dukaan ke maalik"
                value={supportData.contact.owner}
              />

              <InfoItem
                icon={<Phone size={18} />}
                label="Phone number"
                value={
                  <a
                    href="tel:+919430965836"
                    className="underline decoration-gray-300 underline-offset-4 hover:text-gray-600"
                  >
                    {supportData.contact.phone}
                  </a>
                }
              />

              <InfoItem
                icon={<Clock size={18} />}
                label="Dukaan ka samay"
                value={supportData.contact.hours}
              />

              <InfoItem
                icon={<MapPin size={18} />}
                label="Address"
                value={supportData.contact.location}
              />
            </div>
          </section>

          {/* WhatsApp support form */}
          <section className="pt-2">
            <h2 className="mb-3 text-base font-semibold text-gray-900">
              WhatsApp par poochhein
            </h2>
            <WhatsAppSupportForm />
          </section>
        </div>

        {/* FAQs */}
        <section className="lg:col-span-7">
          <div className="mb-4 flex items-center gap-2">
            <HelpCircle size={20} className="shrink-0 text-gray-700" />
            <h2 className="text-lg font-semibold text-gray-900">
              Aksar poochhe jaane wale sawaal
            </h2>
          </div>

          <div>
            {supportData.faqs.map((faq) => (
              <SupportCard
                key={faq.question}
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

interface InfoItemsProps {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}

function InfoItem({ icon, label, value }: InfoItemsProps) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1 shrink-0 text-gray-500">{icon}</div>

      <div className="min-w-0">
        <p className="text-xs font-medium text-gray-500">{label}</p>
        <div className="mt-1 break-words text-sm font-medium leading-6 text-gray-900">
          {value}
        </div>
      </div>
    </div>
  );
}
