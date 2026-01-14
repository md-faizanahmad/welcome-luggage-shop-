// app/about/page.tsx
import AboutClient from "@/components/about/About";

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      {/* Hidden SEO Content for search crawlers */}
      <section className="sr-only">
        <h1>Welcome Luggage & Repairing Center</h1>
        <p>
          Expert luggage restoration services in Gaya since 2009. We repair all
          brands including VIP, Samsonite, and American Tourister.
        </p>
      </section>

      <AboutClient />
    </main>
  );
}
