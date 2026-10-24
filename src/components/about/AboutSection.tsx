import Image from "next/image";
import {
  History,
  ShieldCheck,
  MapPin,
  Award,
  Star,
  Users,
  Wrench,
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

export default function AboutSection() {
  return (
    <article
      className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16"
      aria-labelledby="story-title"
    >
      <h1 id="story-title" className="sr-only">
        About Welcome Luggage & Repairing Center in Gaya, Bihar
      </h1>

      <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-12">
        {/* Owner and Shop Images */}
        <div className="flex min-w-0 flex-col gap-5 sm:gap-6 lg:col-span-5">
          <div className="group relative">
            <figure className="relative z-10 aspect-[4/4] overflow-hidden lg:rounded-2xl lg:border-9  border-4 border-white shadow-xl sm:aspect-[4/5] ">
              <Image
                src="/owner_img.jpeg"
                alt="Md Mushtaque Ahmad, owner of Welcome Luggage & Repairing Center in Gaya"
                fill
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 80vw, 42vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                priority
              />

              <figcaption className="absolute inset-x-0 bottom-0 bg-brand-navy/75 p-4 text-white backdrop-blur-md sm:p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-green-light">
                  Shop Owner
                </p>

                <p className="mt-1 text-lg font-extrabold sm:text-xl">
                  Md Mushtaque Ahmad
                </p>

                <p className="mt-1 text-xs text-white/85 sm:text-sm">
                  Welcome Luggage & Repairing Center
                </p>
              </figcaption>
            </figure>

            {/* Shop theme decoration */}
            <div className="absolute -bottom-3 -right-3 -z-0 hidden h-2/3 w-2/3 rounded-[2.5rem] bg-brand-green lg:block" />
          </div>

          <figure className="relative z-20 aspect-[16/10] w-full overflow-hidden  shadow-lg ring-1 ring-border sm:aspect-video sm:rounded-[2rem] lg:-mt-10 lg:ml-auto lg:w-4/5">
            <Image
              src={ShopImg}
              alt="Welcome Luggage & Repairing Center shop and workshop on G.B. Road, Gaya"
              fill
              sizes="(max-width: 639px) 100vw, (max-width: 1023px) 80vw, 34vw"
              className="object-cover"
            />
          </figure>
        </div>

        {/* About the Business */}
        <div className="min-w-0 space-y-6 sm:space-y-8 lg:col-span-7">
          <header className="space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-2 rounded-lg bg-brand-green-light px-3 py-2 text-xs font-extrabold uppercase tracking-wider text-brand-green-dark sm:text-sm">
              <History size={16} aria-hidden="true" />
              Purana experience, bharosemand kaam
            </div>

            <h2 className="text-3xl font-black leading-tight tracking-tight text-brand-navy sm:text-4xl md:text-5xl lg:text-6xl">
              Aapke bag ki marammat,
              <span className="block text-brand-red">bharose ke saath.</span>
            </h2>
          </header>

          <div className="space-y-4 border-l-2 border-brand-green pl-4 text-sm leading-7 text-text-muted sm:space-y-5 sm:pl-6 sm:text-base sm:leading-8">
            <p>
              <strong className="font-bold text-brand-navy">
                Welcome Luggage & Repairing Center
              </strong>{" "}
              Gaya, Bihar mein luggage aur bag repair ki services dene wala ek
              local shop hai. Yahan hamara focus hai aapke bag ki problem
              samajhna aur uske hisaab se marammat karna.
            </p>

            <p>
              Is shop ke owner{" "}
              <strong className="font-bold text-brand-navy">
                Md Mushtaque Ahmad
              </strong>{" "}
              hain. Unke saath hamare experienced workers luggage repair aur
              silai ke kaam ko dhyan se karte hain. Hamara maqsad hai ki
              customer ko apne bag ki marammat ke liye sahi guidance aur
              bharosemand service mile.
            </p>

            <p>
              Trolley bag ki zip kharab ho, handle toot gaya ho, wheel ghis gaya
              ho ya bag ki silai khul gayi ho — aap apna bag hamare paas la
              sakte hain. Hum problem check karke repair ke options batate hain,
              taaki aap apni zaroorat ke hisaab se faisla kar sakein.
            </p>
          </div>

          {/* Service Highlights */}
          <div className="grid grid-cols-1 gap-3 pt-1 sm:grid-cols-2 sm:gap-4">
            <div className="flex items-center gap-3  p-3  transition-colors  sm:gap-4 sm:p-4">
              <div className="shrink-0  p-3 text-brand-green-dark">
                <Wrench size={22} aria-hidden="true" />
              </div>

              <div>
                <h3 className="text-sm font-extrabold text-brand-navy sm:text-base">
                  Bag & Trolley Repair
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-text-muted sm:text-sm">
                  Zip, handle, wheel aur silai ki marammat.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3  p-3  transition-colors  sm:gap-4 sm:p-4">
              <div className="shrink-0  p-3 text-brand-green-dark">
                <Users size={22} aria-hidden="true" />
              </div>

              <div>
                <h3 className="text-sm font-extrabold text-brand-navy sm:text-base">
                  Experienced Workers
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-text-muted sm:text-sm">
                  Kaam ko dhyan se karne wali team.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3  p-3  transition-colors  sm:gap-4 sm:p-4">
              <div className="shrink-0  p-3 text-brand-green-dark">
                <ShieldCheck size={22} aria-hidden="true" />
              </div>

              <div>
                <h3 className="text-sm font-extrabold text-brand-navy sm:text-base">
                  Repair Options
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-text-muted sm:text-sm">
                  Problem check karke suitable repair ki salah.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3  p-3  transition-colors  sm:gap-4 sm:p-4">
              <div className="shrink-0  p-3 text-brand-red">
                <Award size={22} aria-hidden="true" />
              </div>

              <div>
                <h3 className="text-sm font-extrabold text-brand-navy sm:text-base">
                  Personal Attention
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-text-muted sm:text-sm">
                  Har bag ki problem ko samajhkar kaam.
                </p>
              </div>
            </div>
          </div>

          {/* Local SEO and Location */}
          <footer className="flex flex-col gap-4 border-t border-border pt-5 sm:pt-6">
            <address className="flex items-start gap-3 text-sm font-medium not-italic leading-6 text-text-muted sm:text-base">
              <MapPin
                size={20}
                className="mt-0.5 shrink-0 text-brand-red"
                aria-hidden="true"
              />

              <span>
                <strong className="text-brand-navy">
                  Welcome Luggage & Repairing Center
                </strong>
                <br />
                G.B. Road, Sony Optical ke saamne, Gaya, Bihar
              </span>
            </address>

            <div className="flex items-center gap-1.5 text-amber-500">
              {Array.from({ length: 5 }, (_, index) => (
                <Star
                  key={index}
                  size={16}
                  fill="currentColor"
                  aria-hidden="true"
                />
              ))}

              <span className="ml-2 text-xs font-bold text-text-muted sm:text-sm">
                Aapka bharosa, hamari zimmedari
              </span>
            </div>
          </footer>
        </div>
      </div>
    </article>
  );
}
