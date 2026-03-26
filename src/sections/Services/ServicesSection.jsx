import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import {
  corePrinciples,
  therapyCards,
  treatmentSpecs,
} from "@/data/siteContent";
import { motion, AnimatePresence } from "framer-motion";

// Importar estilos de Swiper
import "swiper/css";

function TherapyCard({ card, onOpen }) {
  return (
    <article className="group h-full flex flex-col">
      {/* Sección de Imagen con borde curvo */}
      <button
        type="button"
        onClick={() => onOpen(card)}
        className="aspect-[7/11] lg:aspect-[8/11] w-full overflow-hidden border border-evp-border bg-evp-section text-left transition duration-300 hover:-translate-y-1 hover:shadow-soft rounded-t-[160px] rounded-b-2xl relative"
        aria-label={`Open details for ${card.title}`}
      >
        <img
          src={card.image || "/images/home/home.png"}
          alt={card.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
        />
        {/* Overlay sutil en hover */}
        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/5" />
      </button>

      {/* Sección de Texto Ajustada (Flex Container) */}
      <div className="mt-5 border-l-2 border-evp-accent/40 pl-4 flex-grow grid grid-cols-[1fr_auto] gap-x-5 gap-y-1 items-start">
        {/* Lado Izquierdo: Título y Subtítulo */}
        <div>
          <h3 className="font-title text-3xl italic leading-tight text-evp-title transition-colors duration-300 group-hover:text-evp-accent">
            {card.title}
          </h3>
          <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.15em] text-evp-accent/80 col-span-2">
            {card.subtitle}
          </p>
        </div>

        {/* Lado Derecho: Descripción (Summary) */}
        <p className="text-[13px] leading-relaxed text-evp-body/80 line-clamp-3 text-right max-w-[200px]">
          {card.summary}
        </p>
      </div>
    </article>
  );
}

function ServicesSection() {
  const [selectedTherapy, setSelectedTherapy] = useState(null);

  // Segmentación para Desktop (XL)
  const featuredTherapies = therapyCards.slice(0, 3);
  const secondaryTherapies = therapyCards.slice(3);

  // useEffect para el modal (se mantiene igual)
  useEffect(() => {
    function handleEsc(event) {
      if (event.key === "Escape") setSelectedTherapy(null);
    }
    if (selectedTherapy) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
      return () => {
        document.removeEventListener("keydown", handleEsc);
        document.body.style.overflow = "unset";
      };
    }
  }, [selectedTherapy]);

  return (
    <section
      id="services"
      className="w-full overflow-x-clip border-t border-evp-border bg-evp-section pt-14 md:pt-20"
    >
      <div className="mx-auto w-full max-w-6xl px-6 xl:px-0">
        <header className="mx-auto mb-10 flex flex-col border-b border-evp-border justify-between pb-8 md:mb-14 md:flex-row md:items-end">
          <div className="max-w-xl flex flex-col items-start">
            <p className="text-[11px] uppercase tracking-[0.16em] text-evp-accent font-semibold">
              Our signature experience
            </p>
            <h2 className="mt-2 font-title text-5xl text-evp-title md:text-6xl">
              Our Therapies
            </h2>
            <div className="mt-4 h-[2px] w-16 bg-[#c65f42]"></div>
          </div>

          <div className="mt-4 md:mt-0 md:text-right">
            <p className="font-title text-xl italic text-evp-body/80 md:max-w-xs">
              A return to essence through touch and form.
            </p>
          </div>
        </header>

        <div className="relative">
          {/* Swiper para Móvil, Tablet y Laptops (hasta antes de XL) */}
          <div className="xl:hidden">
            <Swiper
              modules={[Autoplay]}
              loop
              speed={800}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              slidesPerView={1.15} // 1 en móvil pequeño
              spaceBetween={24}
              breakpoints={{
                640: { slidesPerView: 2.2, spaceBetween: 30 }, // 2 en tablets
                1024: { slidesPerView: 3, spaceBetween: 30 }, // 3 en laptops
              }}
              className="!overflow-visible" // Para que las sombras no se corten
            >
              {therapyCards.map((card) => (
                <SwiperSlide key={card.id}>
                  <TherapyCard card={card} onOpen={setSelectedTherapy} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Grid Estático para Desktop Extra Large (XL+) */}
          <div className="hidden xl:grid xl:grid-cols-3 xl:gap-x-8 xl:gap-y-16">
            {therapyCards.map((card) => (
              <TherapyCard
                key={card.id}
                card={card}
                onOpen={setSelectedTherapy}
              />
            ))}
          </div>
        </div>
      </div>

      {/* --- SECCIÓN CORE PRINCIPLES --- */}
      <section className="relative left-1/2 mt-24 w-[100dvw] -translate-x-1/2 border-t border-evp-border bg-white shadow-inner">
        <div className="mx-auto w-[90%] max-w-6xl py-16 md:py-24">
          <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div>
              <h3 className="font-title text-4xl leading-tight text-evp-title md:text-5xl">
                The Core Principles of
                <span className="block italic opacity-80">Our Practice</span>
              </h3>
              <div className="mt-4 h-[2px] w-16 bg-[#c65f42]"></div>

              <div className="mt-12 space-y-10">
                {corePrinciples.map((item) => (
                  <article
                    key={item.id}
                    className="group border-l border-evp-accent/30 pl-6 transition-colors hover:border-evp-accent"
                  >
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-evp-accent">
                      {item.id}
                    </p>
                    <h4 className="mt-1 font-title text-2xl italic text-evp-title">
                      {item.title}
                    </h4>
                    <p className="mt-3 max-w-lg text-[15px] leading-8 text-evp-body/80">
                      {item.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="sticky top-10 border-l border-evp-accent/20 pl-6 lg:pl-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-evp-accent">
                Technical standards
              </p>
              <dl className="mt-6 divide-y divide-evp-border border-y border-evp-border">
                {treatmentSpecs.map(([label, value]) => (
                  <div
                    key={label}
                    className="grid grid-cols-[1fr_auto] gap-4 py-4 text-[13px]"
                  >
                    <dt className="font-medium text-evp-body/60">{label}</dt>
                    <dd className="text-right font-title italic text-evp-title">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-8 bg-evp-section/40 p-6 rounded-xl border border-evp-border/30">
                <p className="text-[12px] italic text-evp-body/70 leading-relaxed">
                  "Precision is the bridge between clinical innovation and
                  aesthetic harmony."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedTherapy && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            {/* Backdrop con desenfoque profundo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTherapy(null)}
              className="absolute inset-0 bg-evp-title/20 backdrop-blur-xl"
            />

            {/* Contenedor del Modal */}
            <motion.article
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-lg overflow-hidden bg-white px-8 py-12 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.2)] md:px-16 md:py-20 rounded-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Decoración sutil: Un número o letra de fondo muy tenue */}
              <span className="absolute -left-4 -top-10 select-none font-title text-[180px] italic opacity-[0.03] text-evp-accent">
                {selectedTherapy.title.charAt(0)}
              </span>

              {/* Botón Cerrar Minimalista */}
              <button
                onClick={() => setSelectedTherapy(null)}
                className="absolute right-8 top-8 group"
              >
                <div className="relative flex h-8 w-8 items-center justify-center">
                  <div className="absolute h-[1px] w-6 rotate-45 bg-evp-title transition-transform group-hover:rotate-0" />
                  <div className="absolute h-[1px] w-6 -rotate-45 bg-evp-title transition-transform group-hover:rotate-0" />
                </div>
              </button>

              <div className="relative flex flex-col items-center text-center">
                <header>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-evp-accent">
                    Protocol Detail
                  </p>
                  <h3 className="mt-4 font-title text-4xl italic leading-tight text-evp-title md:text-5xl">
                    {selectedTherapy.title}
                  </h3>
                  {/* Línea divisoria minimalista */}
                  <div className="mx-auto mt-8 h-[1px] w-12 bg-evp-accent/30" />
                </header>

                <div className="mt-10 space-y-8">
                  <div className="space-y-4">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-evp-accent/60">
                      {selectedTherapy.subtitle}
                    </span>
                    <p className="font-title text-xl italic leading-relaxed text-evp-body">
                      "{selectedTherapy.summary}"
                    </p>
                  </div>

                  <div className="relative">
                    <p className="text-[15px] leading-8 text-evp-body/80">
                      {selectedTherapy.details}
                    </p>
                  </div>
                </div>

                <footer className="mt-12">
                  <p className="text-[10px] italic text-evp-body/40 uppercase tracking-widest">
                    Consult with our specialists for personalized care
                  </p>
                </footer>
              </div>
            </motion.article>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default ServicesSection;
