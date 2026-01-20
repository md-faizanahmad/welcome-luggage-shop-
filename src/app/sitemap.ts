import { MetadataRoute } from "next";
import { services } from "@/data/services";
import accessoriesData from "@/data/accessories.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.welcomeluggagerepair.shop";
  const LAST_MOD = new Date("2025-12-01");

  // Core indexable pages only
  const routes = ["", "/about", "/services", "/accessories"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: LAST_MOD,
  }));

  // Service pages (important)
  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: LAST_MOD,
  }));

  // Accessories pages (secondary)
  const accessoryRoutes = accessoriesData.map((item) => ({
    url: `${baseUrl}/accessories/${item.slug}`,
    lastModified: LAST_MOD,
  }));

  return [...routes, ...serviceRoutes, ...accessoryRoutes];
}
