import HomeServer from "@/components/home/HomeServer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://welcomeluggagerepair.shop"),

  title: "Luggage Repair in Gaya | Trolley Bag & Suitcase Repair Shop",
  description:
    "Welcome Luggage Repair Center in Gaya offers trusted luggage, trolley bag, and suitcase repair services. Wheel, zip, handle fixing at affordable local prices.",

  alternates: {
    canonical: "/",
  },

  keywords: [
    "luggage repair in gaya",
    "trolley bag repair gaya",
    "suitcase repair shop gaya",
    "luggage wheel repair",
    "zip handle repair luggage",
  ],
};

export default function Home() {
  return <HomeServer />;
}
