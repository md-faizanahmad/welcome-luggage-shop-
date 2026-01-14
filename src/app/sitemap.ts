import { MetadataRoute } from "next";

// Example data sources (services, accessories, etc.)
import { services } from "@/data/services";
import accessoriesData from "@/data/accessories.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.welcomeluggagerepair.shop";

  // Static routes
  const routes = [
    "",
    "/about",
    "/services",
    "/accessories",
    "/gallery",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 1.0,
  }));

  // Dynamic service pages
  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Dynamic accessory pages
  const accessoryRoutes = accessoriesData.map((item) => ({
    url: `${baseUrl}/accessories/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...routes, ...serviceRoutes, ...accessoryRoutes];
}
