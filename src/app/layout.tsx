import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/footer/Footer";
import Loader from "@/components/shared/Loader";

export const metadata: Metadata = {
  title: "Welcome Luggage & Repairing Center | Bag & Trolley Repair in Gaya",
  verification: {
    google: "googleb0467f65887f6094.html", // Just the random string from Google
  },
  description:
    "Expert luggage repair in Gaya. We specialize in fixing bags, trolleys, zips, wheels, and handles at affordable prices. Visit Welcome Luggage & Repairing Center for reliable repair services.",
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
  keywords: [
    "luggage repair Gaya",
    "suitcase repair near me",
    "trolley wheel repair",
    "trolly wheel repair near me",
    "trolly",
    "trolley",
    "bag repair shop Gaya",
    "trolley repair Gaya",
    "trolly repair Gaya", // common misspell
    "trollery repair Gaya", // misspell
    "zip replacement Gaya",
    "bag handle repair Gaya",
  ],
  themeColor: "#16a34a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800">
        <Navbar />
        <Suspense fallback={<Loader />}>{children}</Suspense>

        <Footer />
      </body>
    </html>
  );
}
