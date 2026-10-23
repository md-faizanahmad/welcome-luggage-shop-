"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

import Logo from "@/assets/logo.png";
import Motion from "@/shared/Motion";

interface SubNavItem {
  name: string;
  href: string;
}

interface NavItem {
  name: string;
  href: string;
  dropdown?: SubNavItem[];
}

const NAV_LINKS: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  {
    name: "Services",
    href: "/services",
    dropdown: [
      { name: "Luggage Repair", href: "/services/repairing-of-luggage" },
      { name: "Wholesale Parts", href: "/services/wholesale-parts" },
      { name: "Custom Covers", href: "/services/custom-covers" },
      { name: "Dress Alterations", href: "/services/dress-alterations" },
    ],
  },
  { name: "Support", href: "/support" },
];

export default function DesktopNavbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsServiceOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;
  const isParentActive = (item: NavItem) =>
    item.dropdown?.some((sub) => pathname === sub.href) ?? false;

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`fixed inset-x-0 top-0 z-[100] hidden transition-all duration-300 md:block ${
          scrolled ? "bg-white py-2 shadow-md" : "bg-white/95 py-4"
        }`}
      >
        <div
          className={`mx-auto px-4 transition-all duration-500 ${
            scrolled ? "max-w-6xl" : "max-w-7xl"
          }`}
        >
          <div
            className={`relative flex h-16 items-center justify-between rounded-2xl px-6 transition-all duration-500 ${
              scrolled
                ? "border border-border bg-white shadow-sm"
                : "border border-transparent bg-transparent"
            }`}
          >
            {/* Logo */}
            <Link
              href="/"
              aria-label="Welcome Luggage & Repairing Center home"
              className="z-50 shrink-0"
            >
              <Image
                src={Logo}
                alt="Welcome Luggage & Repairing Center"
                width={50}
                height={50}
                priority
                className="transition-transform hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="flex items-center space-x-1">
              {NAV_LINKS.map((item) =>
                item.dropdown ? (
                  <div
                    key={item.name}
                    className="relative px-4 py-2"
                    onMouseEnter={() => setIsServiceOpen(true)}
                    onMouseLeave={() => setIsServiceOpen(false)}
                  >
                    <button
                      type="button"
                      aria-expanded={isServiceOpen}
                      aria-haspopup="true"
                      onClick={() => setIsServiceOpen((open) => !open)}
                      className={`flex items-center text-sm font-bold uppercase tracking-widest transition-colors ${
                        isParentActive(item)
                          ? "text-brand-red"
                          : "text-slate-700 hover:text-brand-red"
                      }`}
                    >
                      {item.name}

                      <ChevronDown
                        size={14}
                        className={`ml-1 transition-transform ${
                          isServiceOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isServiceOpen && (
                        <Motion
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 top-full mt-1 w-64 overflow-hidden rounded-2xl border border-border bg-white py-3 shadow-2xl"
                        >
                          {item.dropdown.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className={`block px-6 py-3 text-sm font-medium transition-colors ${
                                isActive(sub.href)
                                  ? "bg-brand-red-light text-brand-red"
                                  : "text-slate-600 hover:bg-brand-red-light hover:text-brand-red"
                              }`}
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </Motion>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`group relative px-4 py-2 text-sm font-bold uppercase tracking-widest transition-colors ${
                      isActive(item.href)
                        ? "text-brand-navy"
                        : "text-slate-700 hover:text-brand-red"
                    }`}
                  >
                    {item.name}

                    <span
                      className={`absolute bottom-0 left-4 right-4 h-0.5 origin-left bg-brand-red transition-transform ${
                        isActive(item.href)
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                ),
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Navbar Spacer */}
      <div className="hidden h-20 w-full md:block" />
    </>
  );
}
