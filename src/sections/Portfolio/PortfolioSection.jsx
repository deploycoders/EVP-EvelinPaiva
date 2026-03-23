import SectionTitle from "@/components/common/SectionTitle/SectionTitle";
import { projects } from "@/data/siteContent";

function PortfolioSection() {
  return (
    <section id="portfolio" className="section-shell">
      <SectionTitle
        eyebrow="Portfolio"
        title="Portfolio Section | Cases and outcomes"
        description="Initial text to showcase projects, visual evidence, and impact outcomes."
      />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article key={project} className="rounded-xl border border-evp-border bg-evp-bg p-4">
            <h3 className="mt-0 font-title text-2xl text-evp-title">{project}</h3>
            <p className="mb-0">Initial project card ready to be replaced with real content.</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default PortfolioSection;
