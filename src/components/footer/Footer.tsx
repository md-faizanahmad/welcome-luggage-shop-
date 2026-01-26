"use client";

import { MapPin, Phone, MessageCircle, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white pt-20 pb-10 overflow-hidden border-t border-gray-100">
      {/* Background Watermark Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[18vw] font-black text-gray-100 leading-none uppercase tracking-tighter">
          WTR
        </span>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="text-2xl font-black uppercase tracking-tighter text-gray-900">
                Welcome Luggage <br />
                <span className="text-blue-400">& Repairing Center</span>
              </h3>
              <p className="text-gray-500 mt-4 max-w-sm font-medium leading-relaxed">
                Precision repairs and wholesale parts. Your trusted partner for
                luggage restoration in Gaya.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">
                Connect With Us
              </h4>
              <div className="flex flex-col gap-3">
                <Link
                  target="_blank"
                  href="tel:+919430965836"
                  aria-label="Call to +91 9430965836"
                  className="group flex items-center gap-3 text-gray-800 hover:text-blue-600 transition-colors"
                >
                  <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-blue-50 transition-colors">
                    <Phone size={18} />
                  </div>
                  <span className="font-bold text-green-600">
                    +91 94309 65836
                  </span>
                </Link>

                <Link
                  target="_blank"
                  href="https://wa.me/9430965836"
                  aria-label="Whatsapp Us"
                  className="group flex items-center gap-3 text-gray-800 hover:text-green-600 transition-colors"
                >
                  <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-green-50 transition-colors">
                    <MessageCircle size={18} />
                  </div>
                  <span className="font-bold">Chat on WhatsApp</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Location Details */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">
              Our Workshop
            </h4>
            <div className="flex gap-3 text-gray-800 italic">
              <MapPin size={24} className="shrink-0 text-blue-600" />
              <p className="font-semibold leading-snug">
                G.B Road, <br />
                Infront of Sony Optical, <br />
                Gaya, Bihar
              </p>
            </div>
            <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-400 hover:gap-3 transition-all">
              <Link
                href="https://www.google.com/maps/place/Welcome+Luggage+%26+Repairing+Center/@24.7970761,85.0061303,707m/data=!3m1!1e3!4m14!1m7!3m6!1s0x39f32b30ac38c101:0xe819c1eb6ae9ec9a!2sWelcome+Luggage+%26+Repairing+Center!8m2!3d24.7960991!4d85.0084257!16s%2Fg%2F11tmz80tj7!3m5!1s0x39f32b30ac38c101:0xe819c1eb6ae9ec9a!8m2!3d24.7960991!4d85.0084257!16s%2Fg%2F11tmz80tj7?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoKLDEwMDc5MjA2N0gBUAM%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="flex items-center gap-2">
                  Get Directions <ArrowUpRight size={14} />
                </span>
              </Link>
            </button>
            <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-green-400 hover:gap-3 transition-all">
              <Link
                href="https://g.page/r/CZrs6WrrwRnoEBM/review"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Leave a Review <ArrowUpRight size={14} />
              </Link>
            </button>
          </div>

          {/* Map Section - Compact & Rounded */}
          <div className="lg:col-span-4">
            <div className="relative h-64 w-full rounded-3xl overflow-hidden border-4 border-white shadow-2xl shadow-gray-200">
              <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1175.3607219163011!2d85.00765672089497!3d24.79614705197356!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32b30ac38c101%3A0xe819c1eb6ae9ec9a!2sWelcome%20Luggage%20%26%20Repairing%20Center!5e1!3m2!1sen!2sin!4v1769359000639!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            © {currentYear} Welcome Luggage Center
          </p>
          <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            Designed and Developed by{" "}
            <a href="https://agency.mdfaizanahmad.in">
              Md Faizan Ahmad Web Agency
            </a>
          </div>
          <div className="flex gap-8 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            <Link
              href="#"
              className="hover:text-black transition-colors"
              aria-label="Welcome Luggage Privacy"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="hover:text-black transition-colors"
              aria-label="Welcome Luggage Terms"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
