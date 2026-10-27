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
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsServiceOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isServiceOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsServiceOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isServiceOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href;

  const isParentActive = (item: NavItem) =>
    item.dropdown?.some((sub) => pathname === sub.href) ?? false;

  return (
    <>
      <nav
        aria-label="Main navigation"
        className={`fixed inset-x-0 top-0 z-[100] hidden border-b transition-colors duration-200 md:block ${
          scrolled ? "border-gray-200 bg-white" : "border-transparent bg-white"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-[76px] items-center justify-between gap-8">
            {/* Logo */}
            <Link
              href="/"
              aria-label="Welcome Luggage & Repairing Center home"
              className="shrink-0"
            >
              <Image
                src={Logo}
                alt="Welcome Luggage & Repairing Center"
                width={48}
                height={48}
                priority
                className="h-11 w-11 object-contain"
              />
            </Link>

            {/* Navigation links */}
            <div className="flex h-full items-center gap-1 lg:gap-3">
              {NAV_LINKS.map((item) =>
                item.dropdown ? (
                  <div
                    key={item.name}
                    className="relative flex h-full items-center"
                    onMouseEnter={() => setIsServiceOpen(true)}
                    onMouseLeave={() => setIsServiceOpen(false)}
                  >
                    <button
                      type="button"
                      aria-expanded={isServiceOpen}
                      aria-haspopup="true"
                      onClick={() => setIsServiceOpen((open) => !open)}
                      onFocus={() => setIsServiceOpen(false)}
                      className={`inline-flex min-h-10 items-center gap-1 px-3 text-[13px] font-semibold transition-colors  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red lg:px-4 ${
                        isParentActive(item) || isServiceOpen
                          ? "text-brand-red"
                          : "text-gray-700 hover:text-brand-red"
                      }`}
                    >
                      {item.name}

                      <ChevronDown
                        size={15}
                        strokeWidth={1.8}
                        className={`transition-transform duration-200 ${
                          isServiceOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isServiceOpen && (
                        <Motion
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 5 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-0 top-[calc(100%-1px)] w-60 border-t-2 border-brand-red bg-white py-1 shadow-sm"
                        >
                          {item.dropdown.map((sub) => {
                            const active = isActive(sub.href);

                            return (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                onClick={() => setIsServiceOpen(false)}
                                className={`flex min-h-11 items-center border-l-2 px-4 py-2.5 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-brand-red ${
                                  active
                                    ? "border-brand-red bg-gray-50 font-semibold text-gray-900"
                                    : "border-transparent text-gray-600 hover:border-gray-400 hover:bg-gray-50 hover:text-gray-900"
                                }`}
                              >
                                {sub.name}
                              </Link>
                            );
                          })}
                        </Motion>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`relative inline-flex h-full items-center px-3 text-[13px] font-semibold transition-colors  focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-brand-red lg:px-4 ${
                      isActive(item.href)
                        ? "text-brand-red"
                        : "text-gray-700 hover:text-brand-red"
                    }`}
                  >
                    {item.name}

                    <span
                      className={`absolute inset-x-3 bottom-0 h-0.5 bg-brand-red transition-transform duration-200 lg:inset-x-4 ${
                        isActive(item.href) ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </Link>
                ),
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Reserve navbar space */}
      <div className="hidden h-[76px] md:block" />
    </>
  );
}
