import MainLayout from "@/app/layout/MainLayout";
import HeroSection from "@/sections/Hero/HeroSection";
import AboutSection from "@/sections/About/AboutSection";
import ServicesSection from "@/sections/Services/ServicesSection";
import PortfolioSection from "@/sections/Portfolio/PortfolioSection";
import TestimonialsSection from "@/sections/Testimonials/TestimonialsSection";
import ContactSection from "@/sections/Contact/ContactSection";

function HomePage() {
  return (
    <MainLayout>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
    </MainLayout>
  );
}

export default HomePage;
