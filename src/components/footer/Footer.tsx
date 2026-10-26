"use client";

import {
  Phone,
  MessageCircle,
  ArrowUpRight,
  MapPin,
  Luggage,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const mapUrl =
    "https://www.google.com/maps/place/Welcome+Luggage+%26+Repairing+Center/@24.7970761,85.0061303,707m/data=!3m1!1e3!4m14!1m7!3m6!1s0x39f32b30ac38c101:0xe819c1eb6ae9ec9a!2sWelcome+Luggage+%26+Repairing+Center!8m2!3d24.7960991!4d85.0084257!16s%2Fg%2F11tmz80tj7!3m5!1s0x39f32b30ac38c101:0xe819c1eb6ae9ec9a!8m2!3d24.7960991!4d85.0084257!16s%2Fg%2F11tmz80tj7?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoKLDEwMDc5MjA2N0gBUAM%3D";

  return (
    <footer className="relative overflow-hidden border-t border-border bg-white pt-12 pb-6 sm:pt-16 sm:pb-8 lg:pt-20 lg:pb-10">
      {/* Background Watermark */}
      <div className="pointer-events-none absolute inset-0 flex select-none items-center justify-center overflow-hidden">
        <span className="whitespace-nowrap  text-[24vw] font-black uppercase leading-none tracking-tighter text-brand-red-light sm:text-[18vw]">
          WLR
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Three-column desktop layout */}
        <div className="grid grid-cols-1 items-start gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {/* Column 1: Brand */}
          <div className="min-w-0">
            <h3 className="text-xl font-black uppercase tracking-tight text-brand-navy sm:text-2xl">
              Welcome Luggage
              <br />
              <span className="text-brand-red">& Repairing Center</span>
            </h3>

            <p className="mt-3 max-w-sm text-sm font-medium leading-relaxed text-text-muted sm:mt-4">
              Precision repairs and wholesale parts. Your trusted partner for
              luggage restoration in Gaya.
            </p>
          </div>

          {/* Column 2: Location / Contact */}
          <div className="min-w-0">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-navy">
              Location / Contact
            </h4>

            <address className="mt-4 flex items-start gap-2 text-sm leading-relaxed text-text-muted not-italic">
              <MapPin
                size={18}
                className="mt-0.5 shrink-0 text-brand-red"
                aria-hidden="true"
              />
              <span>Jama Masjid Market G.B. Road Gaya, Bihar</span>
            </address>

            {/* Compact Call and WhatsApp buttons */}
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <Link
                href="tel:+919430965836"
                aria-label="Call +91 94309 65836"
                className="inline-flex w-fit items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm font-bold text-brand-navy transition-colors hover:border-brand-red hover:text-brand-red"
              >
                <Phone size={16} aria-hidden="true" />
                Call Us
              </Link>

              <Link
                href="https://wa.me/919430965836"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
                className="inline-flex w-fit items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm font-bold text-brand-green-dark transition-colors hover:border-brand-green hover:bg-brand-green-light"
              >
                <MessageCircle size={16} aria-hidden="true" />
                WhatsApp
              </Link>
            </div>

            {/* Directions and Reviews */}
            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3">
              <Link
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-red transition-colors hover:text-brand-navy"
              >
                Get Directions
                <ArrowUpRight size={14} aria-hidden="true" />
              </Link>

              <Link
                href="https://g.page/r/CZrs6WrrwRnoEBM/review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-green-dark transition-colors hover:text-brand-green"
              >
                Leave a Review
                <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Column 3: Google Maps */}
          <div className="min-w-0">
            <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-navy">
              Find Our Shop
            </h4>

            <div className="relative h-52 w-full overflow-hidden border-4 border-white shadow-xl shadow-brand-navy/10 sm:h-64 lg:h-56">
              <iframe
                title="Welcome Luggage & Repairing Center location on Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1175.3607219163011!2d85.00765672089497!3d24.79614705197356!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32b30ac38c101%3A0xe819c1eb6ae9ec9a!2sWelcome%20Luggage%20%26%20Repairing%20Center!5e1!3m2!1sen!2sin!4v1769359000639!5m2!1sen!2sin"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 sm:mt-12 sm:pt-8 md:flex-row md:items-center">
          <p className="text-[10px] font-bold uppercase tracking-wider text-text-muted">
            © {currentYear} Welcome Luggage Center
          </p>

          <div className="text-left text-[10px] font-bold uppercase tracking-wider text-text-muted md:text-center">
            Designed and Developed by{" "}
            <a
              href="https://agency.mdfaizanahmad.in"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-brand-red"
            >
              Md Faizan Ahmad
            </a>
          </div>

          <div className="flex gap-5 text-[10px] font-bold uppercase tracking-wider text-text-muted sm:gap-8">
            <Link
              href="/privacy"
              className="transition-colors hover:text-brand-red"
              aria-label="Welcome Luggage Privacy Policy"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-brand-red"
              aria-label="Welcome Luggage Terms and Conditions"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
