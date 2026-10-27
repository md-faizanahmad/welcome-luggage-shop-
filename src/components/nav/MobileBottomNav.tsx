"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Home,
  BriefcaseBusiness,
  Images,
  Info,
  Phone,
  ChevronUp,
  X,
} from "lucide-react";

const SERVICE_LINKS = [
  { label: "Luggage Repair", href: "/services/repairing-of-luggage" },
  { label: "Wholesale Parts", href: "/services/wholesale-parts" },
  { label: "Custom Covers", href: "/services/custom-covers" },
  { label: "Dress Alterations", href: "/services/dress-alterations" },
];

const NAV_ITEMS = [
  { label: "Home", href: "/", icon: Home },
  { label: "Services", href: "/services", icon: BriefcaseBusiness },
  { label: "Gallery", href: "/gallery", icon: Images },
  { label: "About", href: "/about", icon: Info },
  { label: "Contact", href: "/support", icon: Phone },
];

export default function MobileBottomNav() {
  const pathname = usePathname();
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const isServicesActive =
    pathname === "/services" || pathname.startsWith("/services/");

  useEffect(() => {
    setIsServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isServicesOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsServicesOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isServicesOpen]);

  return (
    <>
      {/* Backdrop */}
      {isServicesOpen && (
        <button
          type="button"
          aria-label="Close services menu"
          className="fixed inset-0 z-[90] bg-black/20 md:hidden"
          onClick={() => setIsServicesOpen(false)}
        />
      )}

      {/* Services drop-up */}
      <div
        id="mobile-services-menu"
        className={`fixed bottom-[65px] left-0 right-0 z-[101] mx-auto w-full max-w-lg bg-white transition-all duration-200 md:hidden ${
          isServicesOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible translate-y-2 opacity-0 pointer-events-none"
        }`}
      >
        <div className="border-t-2 border-brand-red">
          <div className="flex items-center justify-between border-b border-border px-5 py-3">
            <h2 className="text-sm font-semibold text-foreground">
              Our Services
            </h2>

            <button
              type="button"
              onClick={() => setIsServicesOpen(false)}
              aria-label="Close services menu"
              className="p-1 text-text-muted hover:text-brand-red"
            >
              <X size={19} />
            </button>
          </div>

          <nav aria-label="Mobile services" className="py-1">
            {SERVICE_LINKS.map((service) => {
              const isActive = pathname === service.href;

              return (
                <Link
                  key={service.href}
                  href={service.href}
                  onClick={() => setIsServicesOpen(false)}
                  className={`flex min-h-12 items-center justify-between px-5 py-3 text-sm transition-colors ${
                    isActive
                      ? "bg-brand-red-light font-semibold text-brand-red"
                      : "text-foreground hover:bg-background-secondary"
                  }`}
                >
                  <span>{service.label}</span>
                  <span className="text-lg leading-none" aria-hidden="true">
                    ›
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Bottom navigation */}
      <nav
        aria-label="Mobile navigation"
        className="fixed inset-x-0 bottom-0 z-[100] border-t border-border bg-white md:hidden"
      >
        <div className="mx-auto grid h-[65px] max-w-lg grid-cols-5">
          {NAV_ITEMS.map(({ label, href, icon: Icon }) => {
            const isServices = label === "Services";
            const isActive = isServices
              ? isServicesActive
              : href === "/"
                ? pathname === "/"
                : pathname === href || pathname.startsWith(`${href}/`);

            if (isServices) {
              return (
                <button
                  key={label}
                  type="button"
                  onClick={() => setIsServicesOpen((open) => !open)}
                  aria-expanded={isServicesOpen}
                  aria-controls="mobile-services-menu"
                  className={`relative flex flex-col items-center justify-center gap-1 text-[10px] transition-colors ${
                    isActive || isServicesOpen
                      ? "font-semibold text-brand-red"
                      : "text-text-muted"
                  }`}
                >
                  {(isActive || isServicesOpen) && (
                    <span className="absolute left-3 right-3 top-0 h-0.5 bg-brand-red" />
                  )}

                  <span className="flex items-center gap-1">
                    <Icon size={19} strokeWidth={1.8} />
                    <ChevronUp
                      size={12}
                      className={`transition-transform ${
                        isServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>

                  <span>{label}</span>
                </button>
              );
            }

            return (
              <Link
                key={label}
                href={href}
                className={`relative flex flex-col items-center justify-center gap-1 text-[10px] transition-colors ${
                  isActive ? "font-semibold text-brand-red" : "text-text-muted"
                }`}
              >
                {isActive && (
                  <span className="absolute left-3 right-3 top-0 h-0.5 bg-brand-red" />
                )}

                <Icon size={19} strokeWidth={1.8} />
                <span>{label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
