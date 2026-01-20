// app/page.tsx
import HomeServer from "@/components/home/HomeServer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bag & Trolley Repair Shop in Gaya | Welcome Luggage Center",
  description:
    "Welcome Luggage & Repairing Center in Gaya offers expert trolley bag, suitcase, zip, wheel, and handle repair services. Affordable and trusted local shop.",
};

export default function Page() {
  return <HomeServer />;
}
