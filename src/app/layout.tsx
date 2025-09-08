// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "MShop.",
//   description: "Mobile Shop Portfolio ",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }
import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/footer/Footer";
import Loader from "@/components/shared/Loader";
import { Analytics } from "@vercel/analytics/next";
export const metadata: Metadata = {
  title: "Welcome Luggage & Repairing Center",
  description:
    "Welcome Luggage & Repairing Center Gaya ,We specialize in all types of Luggage, Bag, and Trolley repair services at affordable prices",
  openGraph: {
    description: "Your trusted Welcome Luggage & Repairing Center",
    url: "https://your-shop-url.com",
    type: "website",
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
        <Navbar />

        <Suspense fallback={<Loader />}>
          {children}
          <Analytics />
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
