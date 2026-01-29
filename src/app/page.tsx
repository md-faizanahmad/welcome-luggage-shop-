import HomeServer from "@/components/home/HomeServer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luggage Repair Service Near You | Welcome Luggage Repair",
  description:
    "Welcome Luggage & Repairing Center in Gaya offers expert trolley bag, suitcase, zip, wheel, and handle repair services. Affordable and trusted local shop.",
};

export default function Home() {
  return <HomeServer />;
}
