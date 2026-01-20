import { FourOhFourClient } from "./FourOhFourClient";

export const metadata = {
  title: "404 - Lost Your Way? | Welcome Luggage & Repairing Center Gaya",
  description:
    "Looking for bag or trolley repair in Gaya? This page might be missing, but our repair services are always available.",
};

export default function NotFound() {
  return (
    <main className="min-h-[90vh] flex items-center justify-center ">
      <div className="container mx-auto py-16">
        <FourOhFourClient />
      </div>
    </main>
  );
}
