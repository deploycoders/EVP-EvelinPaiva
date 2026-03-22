import SectionTitle from "@/components/common/SectionTitle/SectionTitle";
import { testimonials } from "@/data/siteContent";

function TestimonialsSection() {
  return (
    <section id="testimonios" className="section-shell bg-evp-section">
      <SectionTitle
        eyebrow="Testimonios"
        title="Sección Testimonios | Prueba social"
        description="Texto inicial para validar estructura de confianza y reputación de marca."
      />
      <div className="grid gap-4">
        {testimonials.map((item) => (
          <blockquote key={item} className="m-0 border-l-4 border-evp-accent bg-evp-bg px-4 py-3">
            {item}
          </blockquote>
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;
