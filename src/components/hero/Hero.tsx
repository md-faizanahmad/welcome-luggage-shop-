// components/Hero.tsx
import React from "react";
import { ShieldCheck, ArrowRight } from "lucide-react";
import HeroClient from "./HeroClient";

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
              Book Repair Service
              <ArrowRight
                className="group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </button>
            <button className="px-8 py-4 border border-slate-500 hover:border-white text-white font-bold rounded-full transition-all">
              Wholesale Parts
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
