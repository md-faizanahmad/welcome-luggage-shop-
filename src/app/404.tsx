import { FourOhFourClient } from "./404Client";

export const metadata = {
  title: "404 - Page Not Found | TechFix",
  description:
    "Oops! The page you’re looking for doesn’t exist. Return to TechFix homepage.",
};

export default function FourOhFour() {
  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FourOhFourClient />
      </div>
    </div>
  );
}
