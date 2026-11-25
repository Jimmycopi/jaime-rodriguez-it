import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { AiChatWidget } from "@/components/ui/AiChatWidget";
import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { WhyChooseMe } from "@/components/sections/WhyChooseMe";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { Testimonials } from "@/components/sections/Testimonials";
import { BookingSection } from "@/components/sections/BookingSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { MapSection } from "@/components/sections/MapSection";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Experience />
        <WhyChooseMe />
        <Services />
        <Portfolio />
        <Testimonials />
        <BookingSection />
        <ContactSection />
        <MapSection />
      </main>
      <Footer />
      <AiChatWidget />
      <WhatsAppFloat />
    </div>
  );
}
