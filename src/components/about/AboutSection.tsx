import Image from "next/image";
import {
  History,
  ShieldCheck,
  MapPin,
  Award,
  Users,
  Wrench,
  ArrowUpRight,
} from "lucide-react";
import ShopImg from "@/assets/shop.jpg";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://welcomerepair.vercel.app"),

  title: "About Us | Welcome Luggage & Repairing Center, Gaya, Bihar",

  description:
    "Meet Md Mushtaque Ahmad, owner of Welcome Luggage & Repairing Center, G.B. Road, Gaya. Hum luggage, trolley bags, zip, handle aur wheel repair ka kaam experienced workers ke saath karte hain.",

  alternates: {
    canonical: "/about",
  },

  keywords: [
    "Welcome Luggage and Repairing Center",
    "luggage repair shop in Gaya",
    "trolley bag repair Gaya Bihar",
    "bag repair shop G B Road Gaya",
    "Md Mushtaque Ahmad",
    "luggage zip repair Gaya",
    "trolley wheel replacement Gaya",
    "luggage handle repair Gaya",
    "bag repairing centre near Sony Optical Gaya",
  ],

  openGraph: {
    title: "About Welcome Luggage & Repairing Center, Gaya",
    description:
      "Gaya mein luggage aur trolley bag repair ke liye humse milein. Md Mushtaque Ahmad aur hamari experienced team aapke bag ki marammat ka kaam karti hai.",
    url: "https://welcomerepair.vercel.app/about",
    type: "website",
    images: [
      {
        url: "/owner_img.jpeg",
        alt: "Md Mushtaque Ahmad, owner of Welcome Luggage & Repairing Center, Gaya",
      },
    ],
  },
};

const services = [
  {
    icon: Wrench,
    title: "Bag & Trolley Repair",
    description: "Zip, handle, wheel aur silai ki marammat.",
    iconClass: "text-brand-navy",
  },
  {
    icon: Users,
    title: "Experienced Workers",
    description: "Kaam karne wali experienced team.",
    iconClass: "text-red-700",
  },
  {
    icon: ShieldCheck,
    title: "Repair Guidance",
    description: "Problem ke hisaab se repair options.",
    iconClass: "text-brand-green-dark",
  },
  {
    icon: Award,
    title: "Personal Attention",
    description: "Har bag ki problem par dhyan.",
    iconClass: "text-amber-500",
  },
];

export default function AboutSection() {
  return (
    <article
      className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12"
      aria-labelledby="story-title"
    >
      <h1 id="story-title" className="sr-only">
        About Welcome Luggage & Repairing Center in Gaya, Bihar
      </h1>

      <div className="grid grid-cols-1 items-start gap-7 md:grid-cols-12 md:items-center md:gap-8 lg:gap-12">
        {/* Owner profile */}
        <div className="mx-auto w-full max-w-md md:col-span-5 md:max-w-none">
          <figure className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 sm:aspect-[5/4] md:aspect-[4/5]">
              <Image
                src="/owner_img.jpeg"
                alt="Md Mushtaque Ahmad, owner of Welcome Luggage & Repairing Center in Gaya"
                fill
                priority
                sizes="(max-width: 767px) 100vw, (max-width: 1023px) 42vw, 400px"
                className="object-cover object-center"
              />

              {/* Compact owner label */}
              <figcaption className="absolute inset-x-0 bottom-0 bg-brand-navy/85 px-3 py-3 text-white sm:px-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-brand-green-light sm:text-xs">
                  Founder & Owner
                </p>

                <p className="mt-0.5 text-base font-extrabold sm:text-lg">
                  Md Mushtaque Ahmad
                </p>

                <p className="mt-0.5 text-[11px] text-white/80 sm:text-xs">
                  Welcome Luggage & Repairing Center
                </p>
              </figcaption>
            </div>

            {/* Small shop photo: desktop only */}
            <div className="absolute -bottom-0 -right-0 hidden w-32 overflow-hidden  shadow-md lg:block xl:w-36">
              <div className="relative aspect-[4/3]">
                <Image
                  src={ShopImg}
                  alt="Welcome Luggage & Repairing Center shop on G.B. Road, Gaya"
                  fill
                  sizes="144px"
                  className="object-cover"
                />
              </div>
            </div>
          </figure>
        </div>

        {/* Business information */}
        <div className="min-w-0 md:col-span-7">
          <header className="mb-4 space-y-2 sm:mb-5">
            <div className="inline-flex items-center gap-1.5 rounded-md bg-brand-green-light px-2.5 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-brand-green-dark sm:text-xs">
              <History size={14} aria-hidden="true" />
              Purana experience, bharosemand kaam
            </div>

            <h2 className="max-w-xl text-2xl font-black leading-tight tracking-tight text-brand-navy sm:text-3xl lg:text-4xl">
              Aapke bag ki marammat,{" "}
              <span className="text-brand-red">bharose ke saath.</span>
            </h2>
          </header>

          {/* Short, readable introduction */}
          <div className="max-w-2xl space-y-3 text-sm leading-6 text-text-muted sm:text-base sm:leading-7">
            <p>
              <strong className="font-bold text-brand-navy">
                Welcome Luggage & Repairing Center
              </strong>{" "}
              Gaya, Bihar ka ek local shop hai, jahan luggage aur trolley bag ki
              marammat ki jaati hai.
            </p>

            <p>
              Owner{" "}
              <strong className="text-brand-navy">Md Mushtaque Ahmad</strong>{" "}
              aur unki team zip, handle, wheel aur bag ki silai jaisi problems
              check karke suitable repair options batate hain.
            </p>
          </div>

          {/* Service highlights */}
          <div className="mt-5 grid grid-cols-2 gap-2.5 sm:mt-6 sm:gap-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="flex min-w-0 items-start gap-2.5  p-3 sm:gap-3 sm:p-3.5"
                >
                  <div className={`mt-3 shrink-0 ${service.iconClass}`}>
                    <Icon size={19} strokeWidth={2} aria-hidden="true" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-xs font-extrabold leading-5 text-brand-navy sm:text-sm">
                      {service.title}
                    </h3>

                    <p className="mt-0.5 text-[11px] leading-4 text-text-muted sm:text-xs sm:leading-5">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Location and business reassurance */}
          <footer className="mt-5 flex flex-col gap-3 border-t border-border pt-4 sm:mt-6 sm:flex-row sm:items-center sm:justify-between">
            <address className="flex min-w-0 items-start gap-2 text-xs not-italic leading-5 text-text-muted sm:text-sm">
              <MapPin
                size={17}
                className="mt-0.5 shrink-0 text-brand-red"
                aria-hidden="true"
              />

              <span>
                <a
                  href="https://www.google.com/maps/place/Welcome+Luggage+%26+Repairing+Center/@24.7970761,85.0061303,707m/data=!3m1!1e3!4m14!1m7!3m6!1s0x39f32b30ac38c101:0xe819c1eb6ae9ec9a!2sWelcome+Luggage+%26+Repairing+Center!8m2!3d24.7960991!4d85.0084257!16s%2Fg%2F11tmz80tj7!3m5!1s0x39f32b30ac38c101:0xe819c1eb6ae9ec9a!8m2!3d24.7960991!4d85.0084257!16s%2Fg%2F11tmz80tj7?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoKLDEwMDc5MjA2N0gBUAM%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Find Welcome Luggage and Repairing Center on Google Maps"
                  className="group inline-flex flex-col"
                >
                  <strong className="inline-flex items-center gap-1 font-bold text-brand-navy transition-colors group-hover:text-brand-red">
                    Visit Our Shop
                    <ArrowUpRight
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </strong>

                  <span className="mt-0.5 transition-colors group-hover:text-brand-red">
                    G.B. Road, Sony Optical ke saamne, Gaya, Bihar
                  </span>
                </a>
              </span>
            </address>

            <div className="inline-flex items-center gap-1.5 self-start text-xs font-bold text-brand-green-dark sm:self-center sm:whitespace-nowrap">
              <ShieldCheck size={16} aria-hidden="true" />
              Aapka bharosa, hamari zimmedari
            </div>
          </footer>
        </div>
      </div>
    </article>
  );
}
