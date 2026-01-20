import { FourOhFourClient } from "./FourOhFourClient";

export const metadata = {
  title:
    "404 - Page Not Found | Welcome Luggage & Repairing Center | Bag & Trolley Repair in Gaya ",
  description:
    "Oops! The page you’re looking for doesn’t exist. Return to Welcome Luggage & Repairing Center | Bag & Trolley Repair in Gaya homepage.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen py-12  mt-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FourOhFourClient />
      </div>
    </div>
  );
}
