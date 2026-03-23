function ManifestoBannerSection() {
  return (
    <section id="manifesto" className="w-full border-y border-evp-border bg-[#f3efeb] py-16 md:py-20">
      <div className="mx-auto w-[92%] max-w-4xl">
        <h2 className="max-w-2xl font-title text-4xl italic leading-tight text-evp-title md:text-6xl">
          The beauty of the raw. The strength of simplicity.
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          <p className="m-0 max-w-sm text-base leading-8 text-evp-body/90">
            Our philosophy is grounded in removing the unnecessary. We seek the essence in every
            material, every line, and every shadow. It is not just design, it is a statement of
            intent.
          </p>

          <p className="m-0 max-w-sm text-base leading-8 text-evp-body/90">
            Every piece in our collection is selected for its ability to endure. Refined utility
            that challenges passing trends and stands the test of time.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ManifestoBannerSection;
