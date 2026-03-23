import SectionTitle from "@/components/common/SectionTitle/SectionTitle";
import { services } from "@/data/siteContent";

function ServicesSection() {
  return (
    <section id="services" className="section-shell bg-evp-section">
      <SectionTitle
        eyebrow="Services"
        title="Services Section | Core offer"
        description="Initial text to list strategic services and each service scope."
      />
      <ul className="m-0 grid gap-3 pl-5">
        {services.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default ServicesSection;
