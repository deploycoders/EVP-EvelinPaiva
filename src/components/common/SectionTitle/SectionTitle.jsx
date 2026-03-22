function SectionTitle({ eyebrow, title, description }) {
  return (
    <header className="mb-5">
      {eyebrow ? (
        <p className="mb-1 text-xs uppercase tracking-[0.1em] text-evp-accent">{eyebrow}</p>
      ) : null}
      <h2 className="m-0 font-title text-3xl text-evp-title md:text-4xl">{title}</h2>
      {description ? <p className="mt-2 max-w-3xl">{description}</p> : null}
    </header>
  );
}

export default SectionTitle;
