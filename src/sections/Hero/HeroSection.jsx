import PrimaryButton from "@/components/common/PrimaryButton/PrimaryButton";

function HeroSection() {
  return (
    <section
      id="inicio"
      className="grid gap-4 rounded-2xl border border-evp-border bg-gradient-to-br from-evp-bg to-evp-section p-8 shadow-soft md:p-12"
    >
      <p className="m-0 text-xs uppercase tracking-[0.12em] text-evp-accent">
        Propuesta Visual 2026
      </p>
      <h1 className="m-0 font-title text-4xl text-evp-title md:text-6xl">
        Sección Hero | Inicio del proyecto EVP
      </h1>
      <p className="m-0 max-w-3xl">
        Texto inicial de presentación para definir la propuesta de valor de
        Evelin Paiva. Este bloque está listo para reemplazar por el copy final
        de marca.
      </p>
      <div>
        <PrimaryButton>Agendar asesoría</PrimaryButton>
      </div>
    </section>
  );
}

export default HeroSection;
