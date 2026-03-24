import { useEffect, useRef, useState } from "react";
import { navLinks } from "@/data/siteContent";
import Button from "@/components/common/Button/Button";

const WHATSAPP_URL =
  "https://wa.me/584245883315?text=Hi%20Evelin%2C%20I%20am%20interested%20in%20your%20services.%20Can%20we%20talk%3F";

function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);
  const menuRef = useRef(null);
  const backdropRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      const heroThreshold = Math.max(window.innerHeight - 120, 120);
      setIsPastHero(window.scrollY > heroThreshold);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        backdropRef.current &&
        !backdropRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    }

    function handleEscapeKey(event) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "hidden";

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("keydown", handleEscapeKey);
        document.body.style.overflow = "unset";
      };
    }
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const headerSolid = isPastHero;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        headerSolid
          ? "border-evp-border bg-evp-bg/95 backdrop-blur"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-[92%] max-w-6xl items-center justify-between gap-4 py-4 lg:gap-8 lg:py-5">
        <a
          className={`font-title text-2xl no-underline transition-colors duration-300 lg:text-3xl ${
            headerSolid
              ? "text-evp-title hover:text-evp-accent"
              : "text-white hover:text-evp-accent"
          }`}
          href="#home"
        >
          Evelin Paiva
        </a>

        <nav aria-label="Main navigation" className="hidden flex-1 lg:block">
          <ul className="m-0 flex list-none justify-center gap-8 p-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`font-body font-medium no-underline transition-colors duration-300 ${
                    headerSolid
                      ? "text-evp-body hover:text-evp-accent"
                      : "text-white/85 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <Button
            href={WHATSAPP_URL}
            variant="primary"
            size="md"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book now
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`p-2 transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-evp-accent lg:hidden ${
            headerSolid
              ? "text-evp-title hover:text-evp-accent"
              : "text-white hover:text-evp-accent"
          }`}
        >
          {isMenuOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div
          ref={backdropRef}
          className="fixed inset-0 z-40 bg-black/45 transition-opacity duration-300 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <div
        ref={menuRef}
        className={`fixed right-0 top-0 z-50 h-screen w-4/5 max-w-sm transform bg-evp-bg transition-transform duration-300 ease-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-evp-border p-4">
          <span className="font-title text-xl text-evp-title">Menu</span>
          <button
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
            className="p-2 text-evp-title transition-colors duration-300 hover:text-evp-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-evp-accent"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col gap-1 p-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="rounded-lg px-4 py-3 font-body font-medium text-evp-body no-underline transition-colors duration-300 hover:bg-evp-section hover:text-evp-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mx-6 border-t border-evp-border" />

        <div className="p-6">
          <Button
            href={WHATSAPP_URL}
            variant="primary"
            size="md"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
            onClick={handleLinkClick}
          >
            Book now
          </Button>
          <p className="mt-4 text-center text-sm text-evp-body">
            Reach out on WhatsApp for inquiries
          </p>
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;
