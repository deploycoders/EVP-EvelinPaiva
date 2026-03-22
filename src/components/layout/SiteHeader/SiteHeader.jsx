import { navLinks } from "@/data/siteContent";

function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-evp-border bg-evp-bg/90 backdrop-blur">
      <div className="mx-auto flex min-h-[72px] w-[92%] max-w-6xl flex-col items-center justify-center gap-3 py-3 md:flex-row md:justify-between md:py-0">
        <a className="font-title text-3xl text-evp-title no-underline" href="#inicio">
          Evelin Paiva
        </a>
        <nav aria-label="Navegación principal">
          <ul className="m-0 flex list-none flex-wrap justify-center gap-4 p-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-medium text-evp-body no-underline transition-colors hover:text-evp-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default SiteHeader;
