// components/Hero.tsx
import React from "react";
import { ShieldCheck, ArrowUpRight } from "lucide-react";
import HeroClient from "./HeroClient";
import Link from "next/link";

// Server-side Component for SEO
const Hero = () => {
  // Static content for SEO crawlers
  const seoContent = {
    title: "Welcome Luggage & Repairing Center",
    subtitle: "Precision repairs and sell wholesale parts.",
    description:
      "Your trusted partner for luggage restoration in Gaya. We are a specialized workshop for high-end restoration, repairing VIP, Samsonite, and more with precision hardware and professional care.",
    location: "Gaya, Bihar",
  };

  return (
    <section className="relative w-full  min-h-screen flex items-center overflow-hidden bg-slate-900">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40"
          poster="https://res.cloudinary.com/daqb5wglu/image/upload/v1768672490/Banner1_wn9asm.png"
        >
          <source
            src="/Video_Generation_Luggage_Repairs_Parts.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Server Side Content (SEO) */}
        <header>
          <div className="inline-flex mt-6 items-center gap-2 px-3 py-1 rounded-full  border border-green-500/30 text-white text-sm font-medium ">
            <ShieldCheck size={16} />
            <span>{seoContent.location}&apos;s Premier Workshop</span>
          </div>

          <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight mb-4">
            {seoContent.title}
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold text-blue-400 mb-6">
            {seoContent.subtitle}
          </h2>

          {/* <p className="text-lg text-slate-300 mb-8 max-w-xl leading-relaxed">
            {seoContent.description}
          </p> */}

          <div className="flex flex-wrap gap-4">
            <button className="group px-8 py-4 bg-green-900 hover:bg-green-700 text-white font-bold rounded-full transition-all flex items-center gap-2">
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
            <button className="px-8 py-4 border border-slate-500 hover:border-white text-white font-bold rounded-full transition-all">
              <Link href="/wholesale" target="_blank">
                <span className="flex items-center gap-2">
                  Wholesale Parts <ArrowUpRight size={14} />
                </span>
              </Link>
            </button>
          </div>
        </header>

        {/* Right Side: Client Side Animations & Motion */}
        <div className="hidden lg:block">
          <HeroClient />
        </div>
      </div>
    </section>
  );
};

export default Hero;
