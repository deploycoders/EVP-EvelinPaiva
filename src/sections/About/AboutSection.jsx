import SectionTitle from "@/components/common/SectionTitle/SectionTitle";

function AboutSection() {
  return (
    <section id="sobre-mi" className="section-shell">
      <SectionTitle
        eyebrow="Sobre mí"
        title="Sección Sobre | Identidad profesional"
        description="Texto inicial para biografía, enfoque de trabajo y diferenciadores de marca personal."
      />
      <p className="m-0">
        Este espacio está preparado para tu historia profesional, trayectoria y
        filosofía de estilo.
      </p>
    </section>
  );
}

export default AboutSection;
