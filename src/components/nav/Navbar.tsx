"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { X, ChevronDown, ChevronLeft, Menu } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Logo from "@/assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 1. Lock scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setIsServiceOpen(false);
    }
  }, [isOpen]);

  // 2. Handle scroll logic
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const serviceItems = [
    { name: "Luggage Repair", href: "/services/repairing-of-luggage" },
    { name: "Wholesale Parts", href: "/services/wholesale-parts" },
    { name: "Custom Covers", href: "/services/custom-covers" },
    { name: "Dress Alterations", href: "/services/dress-alterations" },
  ];

  return (
    <>
      {/* Placeholder to prevent page jitter */}
      <div className="h-20 w-full" />

      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ease-in-out ${
          // If menu is open OR user has scrolled, show solid white
          scrolled || isOpen
            ? "py-2 bg-white shadow-md"
            : "py-4 bg-white md:bg-transparent"
        }`}
      >
        <div
          className={`max-w-7xl mx-auto px-4 transition-all duration-500 ${
            scrolled ? "max-w-6xl" : "max-w-7xl"
          }`}
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
                alt="Welcome Luggage Logo"
                width={50}
                height={50}
                className="hover:scale-105 transition-transform duration-300"
                priority
              />
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-1">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/gallery">Gallery</NavLink>

              <div
                className="relative px-4 py-2"
                onMouseEnter={() => setIsServiceOpen(true)}
                onMouseLeave={() => setIsServiceOpen(false)}
              >
                <button className="flex items-center text-sm font-bold uppercase tracking-widest text-slate-700 hover:text-blue-600 transition-colors">
                  Services
                  <ChevronDown
                    size={14}
                    className={`ml-1 transition-transform duration-300 ${
                      isServiceOpen ? "rotate-180" : ""
                    }`}
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
                      {serviceItems.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-6 py-3 text-sm font-medium text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-all"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <NavLink href="/support">Support</NavLink>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden z-[110] p-2 text-slate-900 bg-slate-50 hover:bg-slate-100 rounded-xl transition-colors"
              aria-label="Toggle Menu"
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
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed inset-0 bg-white z-[100] md:hidden flex flex-col p-8 pt-28"
            >
              <div className="flex flex-col gap-4">
                {!isServiceOpen ? (
                  <>
                    <MobileLink href="/" onClick={() => setIsOpen(false)}>
                      Home
                    </MobileLink>
                    <MobileLink href="/about" onClick={() => setIsOpen(false)}>
                      About
                    </MobileLink>
                    <MobileLink
                      href="/gallery"
                      onClick={() => setIsOpen(false)}
                    >
                      Gallery
                    </MobileLink>
                    <button
                      onClick={() => setIsServiceOpen(true)}
                      className="text-4xl font-black uppercase tracking-tighter flex items-center justify-between py-4 border-b border-slate-100"
                    >
                      Services <ChevronDown size={28} />
                    </button>
                    <MobileLink
                      href="/support"
                      onClick={() => setIsOpen(false)}
                    >
                      Support
                    </MobileLink>
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
                    {serviceItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="text-3xl font-black uppercase tracking-tighter text-slate-800 border-b border-slate-50 pb-2"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}

// Sub-components stay same as your previous logic for cleanliness
function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="px-4 py-2 text-sm font-bold uppercase tracking-widest text-slate-700 hover:text-blue-600 transition-colors relative group"
    >
      {children}
      <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </Link>
  );
}

function MobileLink({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-4xl font-black uppercase tracking-tighter hover:text-blue-600 transition-colors py-4 border-b border-slate-100"
    >
      {children}
    </Link>
  );
}
