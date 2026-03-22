import SectionTitle from "@/components/common/SectionTitle/SectionTitle";
import { services } from "@/data/siteContent";

function ServicesSection() {
  return (
    <section id="servicios" className="section-shell bg-evp-section">
      <SectionTitle
        eyebrow="Servicios"
        title="Sección Servicios | Oferta principal"
        description="Texto inicial para listar servicios estratégicos y alcance de cada uno."
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
