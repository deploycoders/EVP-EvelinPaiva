import SectionTitle from "@/components/common/SectionTitle/SectionTitle";
import PrimaryButton from "@/components/common/PrimaryButton/PrimaryButton";

function ContactSection() {
  return (
    <section
      id="contacto"
      className="mt-10 rounded-2xl border border-evp-border bg-gradient-to-b from-evp-section to-evp-bg p-6 shadow-soft md:p-8"
    >
      <SectionTitle
        eyebrow="Contacto"
        title="Sección Contacto | Conversión final"
        description="Texto inicial para canal de contacto, agenda y próximos pasos."
      />
      <p className="max-w-3xl">
        Bloque de cierre preparado para formulario, WhatsApp o agenda directa según tu flujo
        comercial.
      </p>
      <PrimaryButton href="mailto:contacto@evelinpaiva.com">Enviar correo</PrimaryButton>
    </section>
  );
}

export default ContactSection;
