"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { X, ChevronDown, ChevronLeft, Menu } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
// import { useRouter } from "next/navigation";
import Logo from "@/assets/logo.png";

export default function Navbar() {
  // const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  // const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);

  // 1. Lock scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setIsServiceOpen(false); // Reset internal state on close
    }
  }, [isOpen]);

  // 2. Handle scroll with a threshold to prevent flickering
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
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

  // const handleSearch = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   const query = searchQuery.toLowerCase().trim();
  //   const foundItem = serviceItems.find((item) =>
  //     item.name.toLowerCase().includes(query),
  //   );
  //   if (foundItem) {
  //     router.push(foundItem.href);
  //     setSearchQuery("");
  //     setIsOpen(false);
  //   }
  // };

  return (
    <>
      {/* 3. Placeholder to prevent page jitter when navbar resizes */}
      <div className="h-20 w-full" />

      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out ${
          scrolled ? "py-2 bg-white/40 backdrop-blur-md" : "py-4 bg-white"
        }`}
      >
        <div
          className={`max-w-7xl mx-auto px-4 transition-all duration-500 ease-in-out ${
            scrolled ? "max-w-6xl" : "max-w-7xl"
          }`}
        >
          <div
            className={`relative flex items-center justify-between px-6 h-16 rounded-2xl transition-all duration-500 border ${
              scrolled
                ? "bg-white/80 backdrop-blur-xl border-slate-200 shadow-lg"
                : "bg-transparent border-transparent"
            }`}
          >
            {/* Logo */}
            <Link
              href="/"
              className="flex-shrink-0 z-50"
              aria-label="Luggage Repair Service in Gaya"
            >
              <Image
                src={Logo}
                alt="Logo"
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
                          aria-label={item.name}
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

            {/* Search */}
            {/* <div className="hidden md:flex items-center gap-4">
              <form onSubmit={handleSearch} className="relative group">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="w-40 focus:w-64 transition-all duration-500 pl-10 pr-4 py-2 text-xs font-bold rounded-xl bg-slate-100/50 border-transparent focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none uppercase tracking-widest"
                />
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors"
                  size={14}
                />
              </form>
            </div> */}

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden z-[110] p-2 text-slate-900 bg-slate-100 rounded-xl"
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
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 bg-white z-[100] md:hidden flex flex-col p-8 pt-24"
            >
              <div className="flex flex-col gap-6">
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
                      className="text-4xl font-black uppercase tracking-tighter flex items-center justify-between py-2 border-b border-slate-100"
                    >
                      Services <ChevronDown size={28} />
                    </button>
                    <MobileLink
                      href="/support"
                      onClick={() => setIsOpen(false)}
                    >
                      Support
                    </MobileLink>

                    {/* <form onSubmit={handleSearch} className="mt-8">
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="SEARCH..."
                        className="w-full bg-slate-100 border-none p-5 rounded-2xl text-lg font-bold uppercase tracking-widest"
                      />
                    </form> */}
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex flex-col gap-8"
                  >
                    <button
                      onClick={() => setIsServiceOpen(false)}
                      className="flex items-center text-blue-600 font-bold uppercase tracking-[0.2em] mb-4"
                    >
                      <ChevronLeft size={20} className="mr-2" /> Back
                    </button>
                    {serviceItems.map((item) => (
                      <Link
                        aria-label={item.name}
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="text-4xl font-black uppercase tracking-tighter text-slate-800"
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

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      aria-label={href}
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
      aria-label={href}
      href={href}
      onClick={onClick}
      className="text-5xl font-black uppercase tracking-tighter hover:text-blue-600 transition-colors py-2 border-b border-slate-50"
    >
      {children}
    </Link>
  );
}
