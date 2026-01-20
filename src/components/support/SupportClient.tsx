import SupportCard from "./SupportCard"; // Ensure this uses the <details> tag we made
import WhatsAppSupportForm from "../shared/Whatsapp";
import { MapPin, Phone, Clock, User, MessageCircle } from "lucide-react";

interface SupportData {
  contact: {
    owner: string;
    phone: string;
    hours: string;
    location: string;
  };
  faqs: { question: string; answer: string }[];
}

export default function SupportSection({
  supportData,
}: {
  supportData: SupportData;
}) {
  return (
    <div className="max-w-6xl mx-auto space-y-12 px-4 py-10">
      {/* Header Area */}
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900">
          Need a <span className="text-blue-600">Quick Fix?</span>
        </h2>
        <p className="text-slate-500 text-lg">
          Visit us in Gaya or send a message on WhatsApp.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* Contact Info Card - CSS Hover Animation */}
        <div className="bg-white border border-slate-200 rounded-[2rem] p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-blue-50 rounded-2xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <MapPin size={24} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">
              Visit Our Shop
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ContactItem
              icon={<User size={18} />}
              label="Proprietor"
              value={supportData.contact.owner}
            />
            <ContactItem
              icon={<Phone size={18} />}
              label="Contact"
              value={supportData.contact.phone}
              isBlue
            />
            <ContactItem
              icon={<Clock size={18} />}
              label="Service Hours"
              value={supportData.contact.hours}
            />
            <ContactItem
              icon={<MapPin size={18} />}
              label="Location"
              value={supportData.contact.location}
            />
          </div>
        </div>

        {/* WhatsApp Form Section */}
        <div className="transition-all duration-300 hover:shadow-xl hover:-translate-y-1 rounded-[2rem] overflow-hidden">
          <WhatsAppSupportForm />
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-slate-50 border border-slate-200 rounded-[2.5rem] p-8 md:p-12">
        <div className="flex items-center gap-4 mb-10">
          <div className="p-3 bg-white rounded-xl shadow-sm text-blue-600">
            <MessageCircle size={24} />
          </div>
          <h2 className="text-3xl font-black text-slate-900">
            Common Questions
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-4 md:p-8 shadow-sm">
          {supportData.faqs.map((faq, index) => (
            <SupportCard
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
interface ContactItemProps {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
  isBlue?: boolean;
}

// Small helper component for the contact grid
function ContactItem({ icon, label, value, isBlue = false }: ContactItemProps) {
  return (
    <div className="space-y-1">
      <p className="text-xs uppercase tracking-[0.15em] text-slate-400 font-bold flex items-center gap-2">
        {icon} {label}
      </p>
      <p
        className={`text-lg font-semibold ${isBlue ? "text-blue-600" : "text-slate-800"}`}
      >
        {value}
      </p>
    </div>
  );
}
