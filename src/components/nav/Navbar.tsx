"use client";

import Link from "next/link";
import { useState, useEffect, JSX } from "react";
import { usePathname } from "next/navigation";
import { X, ChevronDown, ChevronLeft, Menu, Star, MapPin } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Logo from "@/assets/logo.png";

/**
 * Types & Interfaces
 */
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

export default function Navbar(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isServiceOpen, setIsServiceOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false); // Fixes Hydration Mismatch

  const pathname = usePathname();

  // 1. Mount detection to sync Server/Client HTML
  useEffect(() => {
    setMounted(true);
  }, []);

  // 2. Body Scroll Lock
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    if (!isOpen) setIsServiceOpen(false);
  }, [isOpen]);

  // 3. Scroll Listener
  useEffect(() => {
    const handleScroll = (): void => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /**
   * Shorthand State Helpers
   */
  const checkActive = (path: string): boolean => mounted && pathname === path;
  const isParentActive = (item: NavItem): boolean =>
    mounted && !!item.dropdown?.some((sub) => pathname === sub.href);

  return (
    <>
      <div className="h-20 w-full" />

      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled || isOpen
            ? "py-2 bg-white shadow-md"
            : "py-4 bg-white md:bg-transparent"
        }`}
      >
        <div
          className={`mx-auto px-4 transition-all duration-500 ${scrolled ? "max-w-6xl" : "max-w-7xl"}`}
        >
          <div
            className={`relative flex items-center justify-between px-6 h-16 rounded-2xl transition-all duration-500 ${
              scrolled
                ? "bg-white border border-slate-100 shadow-sm"
                : "bg-transparent border-transparent"
            }`}
          >
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 z-50">
              <Image
                src={Logo}
                alt="Logo"
                width={50}
                height={50}
                className="hover:scale-105 transition-transform"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-1">
              {NAV_LINKS.map((link) =>
                link.dropdown ? (
                  <div
                    key={link.name}
                    className="relative px-4 py-2"
                    onMouseEnter={() => setIsServiceOpen(true)}
                    onMouseLeave={() => setIsServiceOpen(false)}
                  >
                    <button
                      className={`flex items-center text-sm font-bold uppercase tracking-widest transition-colors ${
                        isParentActive(link)
                          ? "text-blue-600"
                          : "text-slate-700 hover:text-blue-600"
                      }`}
                    >
                      {link.name}{" "}
                      <ChevronDown
                        size={14}
                        className={`ml-1 transition-transform ${isServiceOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    <AnimatePresence>
                      {isServiceOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 w-64 bg-white border border-slate-100 shadow-2xl rounded-2xl overflow-hidden py-3 mt-1"
                        >
                          {link.dropdown.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className={`block px-6 py-3 text-sm font-medium transition-all ${
                                checkActive(sub.href)
                                  ? "bg-blue-50 text-blue-600"
                                  : "text-slate-600 hover:bg-blue-50 hover:text-blue-600"
                              }`}
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <NavLink
                    key={link.name}
                    href={link.href}
                    active={checkActive(link.href)}
                  >
                    {link.name}
                  </NavLink>
                ),
              )}
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden z-[110] p-2 text-slate-900 bg-slate-50 rounded-xl"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Full-Screen Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30 }}
              className="fixed inset-0 bg-white z-[100] md:hidden flex flex-col p-8 pt-28"
            >
              <div className="flex flex-col gap-2 flex-grow overflow-y-auto">
                {!isServiceOpen ? (
                  <>
                    {NAV_LINKS.map((link) =>
                      link.dropdown ? (
                        <button
                          key={link.name}
                          onClick={() => setIsServiceOpen(true)}
                          className={`text-4xl font-black uppercase tracking-tighter flex items-center justify-between py-4 border-b border-slate-100 ${
                            isParentActive(link)
                              ? "text-blue-600"
                              : "text-slate-800"
                          }`}
                        >
                          {link.name} <ChevronDown size={28} />
                        </button>
                      ) : (
                        <MobileLink
                          key={link.name}
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          active={checkActive(link.href)}
                        >
                          {link.name}
                        </MobileLink>
                      ),
                    )}
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex flex-col gap-6"
                  >
                    <button
                      onClick={() => setIsServiceOpen(false)}
                      className="flex items-center text-blue-600 font-bold uppercase tracking-[0.2em] mb-6"
                    >
                      <ChevronLeft size={20} className="mr-2" /> Back to Menu
                    </button>
                    {NAV_LINKS.find((l) => l.dropdown)?.dropdown?.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        onClick={() => setIsOpen(false)}
                        className={`text-3xl font-black uppercase tracking-tighter border-b border-slate-50 pb-2 ${
                          checkActive(sub.href)
                            ? "text-blue-600"
                            : "text-slate-800"
                        }`}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>

              {/* Mobile Footer Buttons */}
              <div className="mt-auto pt-8 flex flex-col gap-4 border-t border-slate-100">
                <Link
                  href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11846.912275487812!2d84.99886999999995!3d24.7959357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32b30ac38c101%3A0xe819c1eb6ae9ec9a!2sWelcome%20Luggage%20%26%20Repairing%20Center!5e1!3m2!1sen!2sin!4v1769359285631!5m2!1sen!2sin"
                  target="_blank"
                  className="flex items-center justify-between bg-blue-600 text-white px-6 py-4 rounded-xl font-bold uppercase tracking-widest text-sm transition-transform active:scale-95"
                >
                  Get Directions <MapPin size={18} />
                </Link>
                <Link
                  href="https://g.page/r/CZrs6WrrwRnoEBM/review"
                  target="_blank"
                  className="flex items-center justify-between bg-yellow-500 text-white px-6 py-4 rounded-xl font-bold uppercase tracking-widest text-sm transition-transform active:scale-95"
                >
                  Review Us <Star size={18} />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}

/**
 * Sub-Components
 */
function NavLink({
  href,
  children,
  active,
}: {
  href: string;
  children: React.ReactNode;
  active: boolean;
}): JSX.Element {
  return (
    <Link
      href={href}
      className={`px-4 py-2 text-sm font-bold uppercase tracking-widest relative group transition-colors ${
        active ? "text-blue-900" : "text-slate-700 hover:text-blue-400"
      }`}
    >
      {children}
      <span
        className={`absolute bottom-0 left-4 right-4 h-0.5 bg-green-600 transition-transform origin-left ${
          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
        }`}
      />
    </Link>
  );
}

function MobileLink({
  href,
  onClick,
  children,
  active,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
  active: boolean;
}): JSX.Element {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`text-4xl font-black uppercase tracking-tighter py-4 border-b border-slate-100 transition-colors ${
        active ? "text-blue-600" : "text-slate-800 hover:text-blue-600"
      }`}
    >
      {children}
    </Link>
  );
}
