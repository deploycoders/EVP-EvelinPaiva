import SiteHeader from "@/components/layout/SiteHeader/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter/SiteFooter";
import HeroSection from "@/sections/Hero/HeroSection";
import ManifestoBannerSection from "@/sections/ManifestoBanner/ManifestoBannerSection";
import AboutSection from "@/sections/About/AboutSection";
import ServicesSection from "@/sections/Services/ServicesSection";
import PortfolioSection from "@/sections/Portfolio/PortfolioSection";
import TestimonialsSection from "@/sections/Testimonials/TestimonialsSection";
import ContactSection from "@/sections/Contact/ContactSection";

function HomePage() {
  return (
    <div className="min-h-screen bg-evp-bg text-evp-body">
      <SiteHeader />
      <HeroSection />
      <ManifestoBannerSection />
      <AboutSection />
      <ServicesSection />

      <main className="mx-auto w-[92%] max-w-6xl px-0 py-10 pb-16">
        <PortfolioSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  );
}

export default HomePage;
