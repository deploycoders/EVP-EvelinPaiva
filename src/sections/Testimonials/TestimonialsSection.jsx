import SectionTitle from "@/components/common/SectionTitle/SectionTitle";
import { testimonials } from "@/data/siteContent";

function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-shell bg-evp-section">
      <SectionTitle
        eyebrow="Testimonials"
        title="Testimonials Section | Social proof"
        description="Initial text to validate trust structure and brand reputation."
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
