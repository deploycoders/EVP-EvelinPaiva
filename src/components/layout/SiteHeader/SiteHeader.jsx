import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom"; // Importante para el Portal
import { navLinks, siteInfo } from "@/data/siteContent";
import Button from "@/components/common/Button/Button";

const WHATSAPP_URL = "https://wa.me/584245883315?text=Hi...";

/* ──────────────────────────────────────────────
   LogoArea — Coloca tu logo en siteContent.js
   → siteInfo.logo = "/images/tu-logo.svg"
   ────────────────────────────────────────────── */
function LogoArea({ isSolid }) {
  if (siteInfo?.logo) {
    return (
      <a href="#home" className="flex-shrink-0 bg-evp-accent p-1 rounded-md">
        <img
          src={siteInfo.logo}
          alt={siteInfo.name ?? "Logo"}
          className="h-10 w-auto object-contain lg:h-12"
        />
      </a>
    );
  }

  /* ← COLOCA TU LOGO AQUÍ */
  return (
    <a
      href="#home"
      className={`flex h-10 w-36 flex-shrink-0 items-center justify-center rounded-lg border-2 border-dashed transition-colors lg:h-12 lg:w-44 ${
        isSolid
          ? "border-evp-sand text-evp-accent"
          : "border-white/50 text-white/70"
      }`}
    >
      <span className="font-secondary text-xs font-semibold tracking-widest uppercase">
        Tu logo aquí
      </span>
    </a>
  );
}

function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);
  const [mounted, setMounted] = useState(false); // Para evitar errores de SSR

  useEffect(() => {
    setMounted(true);
    function handleScroll() {
      const heroThreshold = Math.max(window.innerHeight - 120, 120);
      setIsPastHero(window.scrollY > heroThreshold);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const headerSolid = isPastHero;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          headerSolid
            ? "border-evp-border bg-evp-bg/95 backdrop-blur"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex w-[92%] max-w-6xl items-center justify-between gap-4 py-4 lg:gap-8 lg:py-5">

          {/* ← LOGO HEADER */}
          <LogoArea isSolid={headerSolid} />

          {/* Desktop Nav */}
          <nav className="hidden flex-1 lg:block">
            <ul className="flex justify-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`font-secondary text-sm tracking-wide transition-colors hover:text-evp-accent ${
                      headerSolid ? "text-evp-body" : "text-white/85"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden lg:block">
            <Button href={WHATSAPP_URL} variant="primary" size="md">
              Book now
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className={`p-2 lg:hidden ${headerSolid ? "text-evp-title" : "text-white"}`}
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* --- EL PORTAL (Aquí es donde ocurre la magia) --- */}
      {mounted &&
        isMenuOpen &&
        createPortal(
          <div className="fixed inset-0 z-[9999] lg:hidden">
            {/* Backdrop: Ahora sí cubre TODO */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menú Lateral */}
            <div className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-evp-bg shadow-2xl transition-transform">
              <div className="flex items-center justify-between border-b border-evp-border p-4">
                {/* ← LOGO MENÚ MÓVIL */}
                <LogoArea isSolid={true} />
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-evp-title"
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
                    onClick={() => setIsMenuOpen(false)}
                    className="rounded-lg px-4 py-3 font-secondary text-sm font-medium text-evp-body hover:bg-evp-section hover:text-evp-accent"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="p-6">
                <Button
                  href={WHATSAPP_URL}
                  variant="primary"
                  size="md"
                  className="w-full"
                >
                  Book now
                </Button>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}

export default SiteHeader;

