const pillars = [
  {
    id: "01",
    label: "METHOD",
    title: "Bespoke Integration",
    text: "Each process is adapted to your rhythm, goals, and identity to build coherent, lasting transformation.",
  },
  {
    id: "02",
    label: "PRODUCTS",
    title: "Curated Selection",
    text: "Every element is chosen with intention, prioritizing quality, longevity, and refined functionality.",
  },
  {
    id: "03",
    label: "SPACE",
    title: "Sensory Stillness",
    text: "Calm, structured environments improve clarity and support consistent personal expression.",
  },
  {
    id: "04",
    label: "ETHICS",
    title: "Transparent Care",
    text: "We focus on long-term outcomes with honest guidance and measurable progress over time.",
  },
];

function AboutSection() {
  return (
    <section id="about" className="overflow-hidden bg-evp-section">
      <div className="mx-auto w-[92%] max-w-6xl py-14 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <article className="max-w-xl">
            <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-evp-accent">
              Our ethos
            </p>
            <h2 className="font-title text-5xl leading-[0.95] text-evp-title md:text-6xl">
              Preserving the
              <span className="block italic text-evp-title/90">
                Natural Self.
              </span>
            </h2>

            <div className="mt-8 space-y-5 text-[15px] leading-8 text-evp-body/90">
              <p>
                We design identity systems where elegance comes from precision,
                restraint, and intention. The goal is not to add more, but to
                reveal what is already authentic.
              </p>
              <p>
                Every decision is guided by longevity: a visual language that
                feels elevated, personal, and consistently aligned across time.
              </p>
            </div>

            <p className="mt-8 border-t border-evp-border pt-5 font-title text-xl italic text-evp-title/75">
              A Legacy of Care
            </p>
          </article>

          <article className="relative w-full md:max-w-[430px] lg:justify-self-end">
            <div className="aspect-[4/5] w-full overflow-hidden border border-evp-border bg-evp-section">
              <img
                src="/images/home/home.png"
                alt="Editorial portrait placeholder for the about section"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="relative mt-4 w-[82%] border border-evp-border border-l-2 border-l-evp-accent/70 bg-evp-section p-4 shadow-soft md:absolute md:-bottom-7 md:left-6 md:mt-0 md:w-[72%]">
              <p className="text-[10px] uppercase tracking-[0.14em] text-evp-body/60">
                Identity Protocol
              </p>
              <p className="mt-1 font-title text-2xl italic text-evp-title">
                The Archive 01.02
              </p>
              <div className="mt-3 grid grid-cols-2 gap-3 text-[11px] uppercase tracking-[0.08em] text-evp-body/65">
                <span>Method: Adaptive</span>
                <span>Cycle: Long-term</span>
              </div>
            </div>
          </article>
        </div>
      </div>

      <div className="border-t border-evp-border">
        <div className="mx-auto grid w-[92%] max-w-6xl grid-cols-1 gap-7 py-12 md:grid-cols-2">
          {pillars.map((item) => (
            <article
              key={item.id}
              className="border-l-2 border-evp-accent/70 pl-5"
            >
              <p className="text-[10px] uppercase tracking-[0.12em] text-evp-body/60">
                {item.id} {item.label}
              </p>
              <h3 className="mt-1 font-title text-3xl italic text-evp-title">
                {item.title}
              </h3>
              <p className="mt-2 max-w-md text-sm leading-7 text-evp-body/90">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>

      <div className="border-t border-evp-border bg-evp-bg">
        <div className="mx-auto w-[92%] max-w-5xl py-16 text-center md:py-20">
          <div className="mx-auto mb-6 flex h-7 w-7 items-center justify-center text-evp-accent">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="h-6 w-6"
            >
              <path d="M12 2c1.6 2.1 1.6 4.1 0 6.2C10.4 6.1 10.4 4.1 12 2Zm0 13.8c1.6 2.1 1.6 4.1 0 6.2-1.6-2.1-1.6-4.1 0-6.2ZM2 12c2.1-1.6 4.1-1.6 6.2 0-2.1 1.6-4.1 1.6-6.2 0Zm13.8 0c2.1-1.6 4.1-1.6 6.2 0-2.1 1.6-4.1 1.6-6.2 0ZM5.1 5.1c2.4-.2 4.1.6 5.2 2.6-2.3.5-4.2-.2-5.2-2.6Zm8.6 11.2c2.4-.2 4.1.6 5.2 2.6-2.3.5-4.2-.2-5.2-2.6ZM5.1 18.9c1-2.4 2.9-3.1 5.2-2.6-1.1 2-2.8 2.8-5.2 2.6Zm8.6-11.2c1-2.4 2.9-3.1 5.2-2.6-1.1 2-2.8 2.8-5.2 2.6Z" />
            </svg>
          </div>
          <p className="font-title text-4xl italic leading-tight text-evp-title md:text-5xl">
            "True elegance is the absence of noise. We return to the source to
            design what endures."
          </p>
          <p className="mt-6 text-[11px] uppercase tracking-[0.16em] text-evp-body/60">
            Dr. Elena Aris, Founder
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
