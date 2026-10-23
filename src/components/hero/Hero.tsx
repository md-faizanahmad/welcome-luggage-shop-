import { ArrowUpRight, MapPin, Package } from "lucide-react";
import Link from "next/link";
import ItemsShowcase from "./ItemsShowcase";

const seoContent = {
  title: "Welcome Luggage & Repairing Center",
  subtitle: "Expert Luggage Repairs. Quality Parts. Trusted Service.",
  description:
    "From trolley wheels and broken handles to zippers and replacement parts, we help keep your luggage ready for every journey.",
  location: "Gaya, Bihar",
};

const DIRECTIONS_URL =
  "https://www.google.com/maps/place/Welcome+Luggage+%26+Repairing+Center/@24.7970761,85.0061303,707m/data=!3m1!1e3!4m14!1m7!3m6!1s0x39f32b30ac38c101:0xe819c1eb6ae9ec9a!2sWelcome+Luggage+%26+Repairing+Center!8m2!3d24.7960991!4d85.0084257!16s%2Fg%2F11tmz80tj7!3m5!1s0x39f32b30ac38c101:0xe819c1eb6ae9ec9a!8m2!3d24.7960991!4d85.0084257!16s%2Fg%2F11tmz80tj7?entry=ttu";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-5rem)] items-center overflow-hidden bg-brand-navy text-white lg:min-h-[min(760px,calc(100svh-5rem))]">
      {/* Background Video */}
      <div className="absolute inset-0 -z-10 bg-brand-navy">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster="https://res.cloudinary.com/daqb5wglu/image/upload/v1768672490/Banner1_wn9asm.png"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        >
          <source
            src="/Video_Generation_Luggage_Repairs_Parts.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 via-transparent to-brand-navy/20" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-5 py-12 sm:px-8 md:py-14 lg:grid-cols-2 lg:gap-12 lg:px-10 lg:py-10">
        {/* Hero Content */}
        <header className="relative z-10">
          {/* <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-red/50 bg-brand-red/15 px-3 py-2 text-xs font-semibold text-white sm:text-sm">
            <ShieldCheck size={17} className="shrink-0 text-brand-red" />
            <span>Trusted Luggage Repair Experts in {seoContent.location}</span>
          </div> */}

          <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
            {seoContent.title}
          </h1>

          <h2 className="mt-5 max-w-xl text-lg font-semibold leading-snug text-red-300 sm:text-xl lg:text-2xl">
            {seoContent.subtitle}
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-200 sm:text-base">
            {seoContent.description}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand-red px-6 py-3 text-sm font-bold text-white shadow-lg transition-colors hover:bg-brand-red-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:text-base"
            >
              <MapPin size={18} />
              Get Directions
              <ArrowUpRight size={16} />
            </Link>

            <Link
              href="/services/wholesale-parts"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:border-brand-red hover:bg-brand-red/15 sm:text-base"
            >
              <Package size={18} />
              Explore Wholesale Parts
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </header>

        {/* Supporting Service Highlights */}
        <div className="relative z-10 hidden lg:block">
          <ItemsShowcase />
        </div>
      </div>
    </section>
  );
}
