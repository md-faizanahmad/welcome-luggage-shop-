import AboutClient from "@/components/about/AboutClient";
import AboutSection from "@/components/about/AboutSection";
export default function Page() {
  return (
    <main>
      {/* The Client Wrapper animates the Server Content */}
      <AboutClient>
        <AboutSection />
      </AboutClient>
    </main>
  );
}
