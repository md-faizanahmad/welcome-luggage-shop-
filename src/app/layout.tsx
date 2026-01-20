import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/footer/Footer";
import Script from "next/script";
import FirebaseAnalytics from "@/components/FirebaseAnalytics/FirebaseAnalytics";
import { DEFAULT_KEYWORDS } from "./keyword";
import Loader from "@/shared/Loader";

export const metadata: Metadata = {
  metadataBase: new URL("https://welcomeluggagerepair.shop"),
  title: "Welcome Luggage & Repairing Center | Bag & Trolley Repair in Gaya",

  description:
    "Expert luggage repair in Gaya. We specialize in fixing bags, trolleys, zips, wheels, and handles at affordable prices. Visit Welcome Luggage & Repairing Center for reliable repair services.",
  keywords: [
    ...DEFAULT_KEYWORDS,
    "luggage repairing service Gaya",
    "trolley zip repair Gaya",
    "wheel replacement Gaya",
  ],
  verification: {
    google: "googleb0467f65887f6094.html", // Just the random string from Google
  },

  openGraph: {
    title: "Welcome Luggage & Repairing Center | Bag & Trolley Repair in Gaya",
    description:
      "Your trusted luggage, bag, and trolley repair shop in Gaya. Affordable and professional repair services for all brands.",
    url: "https://welcomeluggagerepair.shop",
    type: "website",
    images: [
      {
        url: "/og_image.png", // ✅ your OG image
        width: 1200,
        height: 630,
        alt: "Welcome Luggage & Repairing Center - Bag & Trolley Repair in Gaya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Welcome Luggage & Repairing Center | Bag & Trolley Repair in Gaya",
    description:
      "Expert luggage, bag, and trolley repair services in Gaya. Trusted shop for zips, wheels, and handle fixes.",
    images: ["/og_image.png"], // ✅ for Twitter
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800">
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-myid"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
        <FirebaseAnalytics />
        <Navbar />
        <Suspense fallback={<Loader />}>{children}</Suspense>

        <Footer />
      </body>
    </html>
  );
}
