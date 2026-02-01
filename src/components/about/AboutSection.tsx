import Image from "next/image";
import { History, ShieldCheck, MapPin, Award, Star } from "lucide-react";
import ShopImg from "@/assets/shop.jpg";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://welcomeluggagerepair.shop"),

  title: "About Welcome Luggage Repair Center | Trusted Luggage Repair in Gaya",
  description:
    "Learn about Welcome Luggage Repair Center in Gaya — a trusted local shop providing reliable luggage, trolley bag, and suitcase repair services with years of hands-on experience.",

  alternates: {
    canonical: "/about",
  },

  keywords: [
    "about welcome luggage repair",
    "luggage repair shop gaya",
    "trusted luggage repair gaya",
    "trolley bag repair shop gaya",
  ],
};

export default function AboutSection() {
  return (
    <article
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      aria-labelledby="story-title"
    >
      {/* Hidden SEO Heading for Crawlers */}
      <h1 id="story-title" className="sr-only">
        Welcome Luggage Gaya - Luggage Repair Expert Md Mushtaque Ahmad
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Visual Identity: Owner & Shop */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="relative group">
            <figure className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl z-20">
              <Image
                src="/owner_img.jpeg" // MD Mushtaque Ahmad Image
                alt="Md Mushtaque Ahmad, Proprietor of Welcome Luggage Gaya"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <figcaption className="absolute bottom-0 inset-x-0 bg-slate-900/60 backdrop-blur-md p-4 text-white">
                <p className="text-sm font-black tracking-widest uppercase text-blue-400">
                  Proprietor
                </p>
                <p className="text-lg font-bold">Md Mushtaque Ahmad</p>
              </figcaption>
            </figure>
            {/* Decorative Blue Box */}
            <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 bg-green-500 rounded-[3rem] -z-0 hidden lg:block" />
          </div>

          <figure className="relative aspect-video rounded-[2rem] overflow-hidden border-4 border-white shadow-xl lg:-mt-20 lg:ml-auto lg:w-4/5 z-30 ring-1 ring-slate-100">
            <Image
              src={ShopImg} // Shop Image
              alt="Welcome Luggage Workshop G.B. Road Gaya"
              fill
              sizes="(max-width: 1024px) 80vw, 400px"
              className="object-cover"
            />
          </figure>
        </div>

        {/* Storytelling & Business Info */}
        <div className="lg:col-span-7 space-y-8">
          <header className="space-y-4">
            <div className="inline-flex items-center gap-2 text-blue-600 font-black text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-lg">
              <History size={14} /> Established Before 2007
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[0.95] tracking-tighter">
              Crafting Trust <br />
              <span className="text-green-400">Since Dehri to Gaya.</span>
            </h2>
          </header>

          <div className="space-y-6 text-slate-600 text-lg leading-relaxed border-l-2 border-slate-100 pl-6">
            <p>
              Our journey of excellence began in{" "}
              <strong className="text-slate-900 font-bold">
                Dehri-on-Sone
              </strong>
              , where we mastered the intricate details of bag craftsmanship
              long before 2007.
            </p>
            <p>
              In <time dateTime="2007">2007</time>, we transitioned our
              expertise to Gaya, establishing{" "}
              <strong>Welcome Luggage & Repairing Center</strong> on G.B. Road.
              Today, we are the city&apos;s leading specialist for brands like
              VIP, Samsonite, and Skybags.
            </p>
          </div>

          {/* Accessible Trust List */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4"
            role="list"
          >
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm transition-colors hover:border-blue-200">
              <div className="p-2 bg-white rounded-lg text-blue-600 shadow-sm">
                <Award size={20} />
              </div>
              <span className="text-sm font-black text-slate-800 uppercase italic">
                Master Tailoring
              </span>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm transition-colors hover:border-blue-200">
              <div className="p-2 bg-white rounded-lg text-blue-600 shadow-sm">
                <ShieldCheck size={20} />
              </div>
              <span className="text-sm font-black text-slate-800 uppercase italic">
                Genuine Hardware
              </span>
            </div>
          </div>

          {/* Local SEO Address Footer */}
          <footer className="pt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            <address className="not-italic flex items-center gap-2 text-slate-500 font-medium text-sm">
              <MapPin size={18} className="text-blue-600" />
              G.B Road, Infront of Sony Optical, Gaya
            </address>
            <div className="flex items-center gap-1 text-orange-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
              <span className="ml-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
                Top Rated Support
              </span>
            </div>
          </footer>
        </div>
      </div>
    </article>
  );
}
