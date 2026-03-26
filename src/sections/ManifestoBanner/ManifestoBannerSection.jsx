function ManifestoBannerSection() {
  return (
    <section
      id="manifesto"
      className="w-full border-y border-evp-border bg-[#f3efeb] py-16 md:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-6">
        {/* H2 centrado con mx-auto */}
        <h2 className="mx-auto max-w-3xl text-center font-title text-4xl italic leading-tight text-evp-title md:text-6xl">
          The beauty of the raw. The strength of simplicity.
        </h2>

        {/* Grid centrado: justify-items-center hace que los hijos se centren en sus columnas */}
        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 md:justify-items-center">
          <p className="mx-auto m-0 max-w-sm text-center text-base leading-8 text-evp-body/90 md:text-left">
            Our philosophy is grounded in removing the unnecessary. We seek the
            essence in every material, every line, and every shadow. It is not
            just design, it is a statement of intent.
          </p>

          <p className="mx-auto m-0 max-w-sm text-center text-base leading-8 text-evp-body/90 md:text-left">
            Every piece in our collection is selected for its ability to endure.
            Refined utility that challenges passing trends and stands the test
            of time.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ManifestoBannerSection;
