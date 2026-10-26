import {
  Users2,
  CalendarHeart,
  Verified,
  Star,
  MapPin,
  Clock3,
} from "lucide-react";

const BASE_CUSTOMERS = 100_000;
const CUSTOMERS_PER_DAY = 5;

const BASE_PARTS_SUPPLIED = 50_000;
const PARTS_PER_DAY = 10;

const BASE_EXPERIENCE = 16;
const BASE_YEAR = 2026;

// The date when these baseline totals are established.
// Change this if your starting totals refer to another date.
const BASE_DATE = "2026-10-26";

function getIndiaDate() {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());

  const getPart = (type: string) =>
    parts.find((part) => part.type === type)?.value ?? "";

  return {
    year: Number(getPart("year")),
    month: Number(getPart("month")),
    day: Number(getPart("day")),
    date: `${getPart("year")}-${getPart("month")}-${getPart("day")}`,
  };
}

function getDaysSinceBaseDate(currentDate: string) {
  const base = new Date(`${BASE_DATE}T00:00:00Z`);
  const current = new Date(`${currentDate}T00:00:00Z`);

  return Math.max(
    0,
    Math.floor((current.getTime() - base.getTime()) / 86_400_000),
  );
}

export function getBusinessStats() {
  const today = getIndiaDate();
  const daysPassed = getDaysSinceBaseDate(today.date);

  const customersServed = BASE_CUSTOMERS + daysPassed * CUSTOMERS_PER_DAY;

  const partsSupplied = BASE_PARTS_SUPPLIED + daysPassed * PARTS_PER_DAY;

  const yearsOfExperience =
    BASE_EXPERIENCE + Math.max(0, today.year - BASE_YEAR);

  return [
    {
      label: "Customers Served",
      value: customersServed,
      suffix: "+",
      icon: Users2,
    },
    {
      label: "Years of Experience",
      value: yearsOfExperience,
      suffix: "+",
      icon: CalendarHeart,
    },
    {
      label: "Parts Supplied",
      value: partsSupplied,
      suffix: "+",
      icon: Verified,
    },
    {
      label: "Google Rating",
      value: 4.6,
      suffix: "/5",
      icon: Star,
    },
    {
      label: "Service Area",
      value: "Gaya & Bihar",
      suffix: "",
      icon: MapPin,
    },
    {
      label: "Availability",
      value: "Open 7 Days",
      suffix: "",
      icon: Clock3,
    },
  ];
}
