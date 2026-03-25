import SiteHeader from "@/components/layout/SiteHeader/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter/SiteFooter";
import HeroSection from "@/sections/Hero/HeroSection";
import ManifestoBannerSection from "@/sections/ManifestoBanner/ManifestoBannerSection";
import AboutSection from "@/sections/About/AboutSection";
import ServicesSection from "@/sections/Services/ServicesSection";
import RecoverySection from "@/sections/Recovery/RecoverySection";
import TestimonialsSection from "@/sections/Testimonials/TestimonialsSection";
import InstagramSection from "@/sections/Instagram/InstagramSection";
import LocationSection from "@/sections/Location/LocationSection";

function HomePage() {
  return (
    <div className="min-h-screen bg-evp-bg text-evp-body">
      <SiteHeader />
      <HeroSection />
      <ManifestoBannerSection />
      <AboutSection />
      <ServicesSection />
      {/* <RecoverySection /> */}
      <TestimonialsSection />

      <InstagramSection />

      <LocationSection />

      <SiteFooter />
    </div>
  );
}

export default HomePage;
