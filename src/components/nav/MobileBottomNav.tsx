"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, BriefcaseBusiness, Images, Info, Phone } from "lucide-react";

const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "Services",
    href: "/services",
    icon: BriefcaseBusiness,
  },
  {
    label: "Gallery",
    href: "/gallery",
    icon: Images,
  },
  {
    label: "About",
    href: "/about",
    icon: Info,
  },
  {
    label: "Contact",
    href: "/support",
    icon: Phone,
  },
];

export default function MobileBottomNav() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <nav
      aria-label="Mobile navigation"
      className="fixed inset-x-0 bottom-0 z-[100] border-t border-border bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_20px_rgba(11,35,69,0.08)] backdrop-blur-lg md:hidden"
    >
      <div className="mx-auto grid max-w-lg grid-cols-5">
        {NAV_ITEMS.map(({ label, href, icon: Icon }) => {
          const active = isActive(href);

          return (
            <Link
              key={label}
              href={href}
              aria-label={label}
              aria-current={active ? "page" : undefined}
              className={`relative flex min-h-16 flex-col items-center justify-center gap-1 px-1 py-2 transition-colors ${
                active
                  ? "text-brand-red"
                  : "text-text-muted hover:text-brand-navy"
              }`}
            >
              {active && (
                <span className="absolute top-0 h-0.5 w-8 rounded-full bg-brand-red" />
              )}

              <Icon
                size={21}
                strokeWidth={active ? 2.5 : 1.8}
                aria-hidden="true"
              />

              <span
                className={`text-[10px] leading-tight ${
                  active ? "font-bold" : "font-medium"
                }`}
              >
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
