import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import {
  corePrinciples,
  therapyCards,
  treatmentSpecs,
} from "@/data/siteContent";
import "swiper/css";

const shapeClasses = {
  left: "rounded-t-[120px] rounded-b-2xl",
  center: "rounded-t-[160px] rounded-b-none",
  right: "rounded-t-[120px] rounded-b-2xl",
};

function TherapyCard({ card, onOpen }) {
  return (
    <article className="group">
      <button
        type="button"
        onClick={() => onOpen(card)}
        className={`aspect-[4/5] w-full overflow-hidden border border-evp-border bg-evp-section text-left transition duration-300 hover:-translate-y-1 hover:shadow-soft ${shapeClasses[card.shape]}`}
        aria-label={`Open details for ${card.title}`}
      >
        <img
          src={card.image || "/images/home/home.png"}
          alt={`${card.title} placeholder image`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      </button>

      <div className="mt-3 border-l-2 border-evp-accent/70 pl-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-title text-3xl italic leading-tight text-evp-title">
            {card.title}
          </h3>
          <span className="mt-1 text-sm font-medium text-evp-accent">
            {card.price}
          </span>
        </div>
        <p className="mt-1 text-[11px] uppercase tracking-[0.11em] text-evp-body/70">
          {card.subtitle}
        </p>
        <p className="mt-3 text-sm leading-7 text-evp-body/90">
          {card.summary}
        </p>
      </div>
    </article>
  );
}

function ServicesSection() {
  const [selectedTherapy, setSelectedTherapy] = useState(null);

  useEffect(() => {
    function handleEsc(event) {
      if (event.key === "Escape") {
        setSelectedTherapy(null);
      }
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
      <div className="mx-auto w-[92%] max-w-6xl">
        <header className="mx-auto mb-10 max-w-3xl text-left md:mb-14">
          <p className="text-[11px] uppercase tracking-[0.16em] text-evp-accent">
            Our signature experience
          </p>
          <h2 className="mt-2 font-title text-5xl text-evp-title md:text-6xl">
            Our Therapies
          </h2>
          <p className="mt-3 font-title text-xl italic text-evp-body/80">
            A return to essence through touch and form.
          </p>
        </header>

        <div className="md:hidden">
          <Swiper
            modules={[Autoplay]}
            loop
            speed={700}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            slidesPerView={1.12}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 1.2, spaceBetween: 20 },
            }}
          >
            {therapyCards.map((card) => (
              <SwiperSlide key={card.id}>
                <TherapyCard card={card} onOpen={setSelectedTherapy} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="hidden grid-cols-1 gap-x-7 gap-y-10 md:grid md:grid-cols-2 xl:grid-cols-3">
          {therapyCards.map((card) => (
            <TherapyCard
              key={card.id}
              card={card}
              onOpen={setSelectedTherapy}
            />
          ))}
        </div>
      </div>

      <section className="relative left-1/2 mt-16 w-[100dvw] -translate-x-1/2 border-t border-evp-border bg-white">
        <div className="mx-auto w-[92%] max-w-6xl py-12 md:py-20">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div>
              <h3 className="font-title text-4xl leading-tight text-evp-title">
                The Core Principles of
                <span className="block">Our Practice</span>
              </h3>

              <div className="mt-7 space-y-6">
                {corePrinciples.map((item) => (
                  <article
                    key={item.id}
                    className="border-l border-evp-accent pl-4"
                  >
                    <p className="text-[10px] uppercase tracking-[0.15em] text-evp-accent">
                      {item.id}
                    </p>
                    <h4 className="mt-1 font-title text-2xl italic text-evp-title">
                      {item.title}
                    </h4>
                    <p className="mt-2 max-w-md text-sm leading-7 text-evp-body/90">
                      {item.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="border-l border-evp-accent/70 pl-5 lg:pl-7">
              <p className="text-[10px] uppercase tracking-[0.15em] text-evp-accent">
                Treatment specs
              </p>

              <dl className="mt-4 divide-y divide-evp-border border-y border-evp-border">
                {treatmentSpecs.map(([label, value]) => (
                  <div
                    key={label}
                    className="grid grid-cols-[1fr_auto] gap-3 py-3 text-sm"
                  >
                    <dt className="text-evp-body/80">{label}</dt>
                    <dd className="text-right text-evp-title/85">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {selectedTherapy ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/50 p-4"
          onClick={() => setSelectedTherapy(null)}
        >
          <article
            className="w-full max-w-xl border border-evp-border bg-evp-bg p-6 shadow-soft md:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[11px] uppercase tracking-[0.14em] text-evp-accent">
                  Therapy details
                </p>
                <h3 className="mt-2 font-title text-4xl italic text-evp-title">
                  {selectedTherapy.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedTherapy(null)}
                className="inline-flex h-9 w-9 items-center justify-center border border-evp-border text-evp-body transition hover:text-evp-accent"
                aria-label="Close details"
              >
                ×
              </button>
            </div>

            <div className="mt-5 space-y-4 text-evp-body/90">
              <p className="text-sm uppercase tracking-[0.12em] text-evp-body/70">
                {selectedTherapy.subtitle} · {selectedTherapy.price}
              </p>
              <p className="text-base leading-8">{selectedTherapy.summary}</p>
              <p className="leading-8">{selectedTherapy.details}</p>
            </div>
          </article>
        </div>
      ) : null}
    </section>
  );
}

export default ServicesSection;

