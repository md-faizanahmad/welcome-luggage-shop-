import { Phone, MessageCircle } from "lucide-react";

export default function HeroServer() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-white">
      <div className="text-center max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
          Bags kharab? Trolley tooti?
        </h1>
        <p className="text-lg  md:text-xl text-gray-600 mb-8 min-h-[60px]">
          Welcome Luggage & Repairing Center mein sab thik karein, jaldi aur
          saste mein!
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="https://wa.me/9430965836"
            aria-label="Whatsapp Chat"
            className="flex items-center gap-2 px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-600"
          >
            <MessageCircle size={20} />
            WhatsApp
          </a>
          <a
            href="tel:9430965836"
            aria-label="Call Now"
            className="flex items-center gap-2 px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-600"
          >
            <Phone size={20} />
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
