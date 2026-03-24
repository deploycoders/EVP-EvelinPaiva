import PrimaryButton from "@/components/common/PrimaryButton/PrimaryButton";
import SecondaryButton from "@/components/common/SecondaryButton/SecondaryButton";

function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-[center_top] md:bg-[center_20%] lg:bg-center"
        style={{
          backgroundImage: "url('/images/home/home.png')",
        }}
        aria-hidden="true"
      />

      <div className="absolute inset-0 bg-black/45" aria-hidden="true" />

      <div className="relative z-10 w-full px-6 text-center sm:px-8 md:px-12">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 font-body text-xs uppercase tracking-widest text-white/85 sm:mb-5 md:mb-6">
            {/* VOLUME 1: THE ORIGIN */}
          </p>

          <h1 className="mb-8 font-title text-4xl italic text-white/95 sm:text-5xl md:mb-10 md:text-6xl lg:text-7xl">
            Sculpt your best version
          </h1>

          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-4">
            <PrimaryButton
              href="#about"
              className="text-sm uppercase tracking-wider"
            >
              Start the experience
            </PrimaryButton>

            <SecondaryButton
              href="#location"
              className="bg-white font-body text-sm uppercase tracking-wider transition duration-300 hover:-translate-y-0.5 hover:bg-white/80 hover:text-evp-accent active:translate-y-0"
            >
              CONTACT US
            </SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
