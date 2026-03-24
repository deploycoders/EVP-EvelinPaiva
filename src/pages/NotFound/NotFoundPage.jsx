import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-evp-bg">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(173,93,67,0.12),transparent_48%),radial-gradient(circle_at_85%_80%,rgba(173,93,67,0.08),transparent_44%)]" />

      <section className="relative mx-auto flex min-h-screen w-[92%] max-w-4xl flex-col items-center justify-center py-12 text-center">
        <h1 className="font-title text-[5.5rem] leading-none text-evp-title/75 sm:text-[7.5rem]">
          404
        </h1>

        <div className="mt-2 w-full max-w-[380px] text-evp-title/80">
          <svg viewBox="0 0 360 220" className="mx-auto h-auto w-full animate-[float_6s_ease-in-out_infinite]">
            <defs>
              <linearGradient id="stone" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#7B838D" />
                <stop offset="100%" stopColor="#535B64" />
              </linearGradient>
              <linearGradient id="leaf" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#B6D5C0" />
                <stop offset="100%" stopColor="#8EB19B" />
              </linearGradient>
            </defs>

            <ellipse cx="165" cy="194" rx="118" ry="14" fill="#C5CDD7" opacity="0.55" />

            <ellipse cx="165" cy="148" rx="66" ry="28" fill="url(#stone)" />
            <ellipse cx="170" cy="116" rx="56" ry="24" fill="url(#stone)" />
            <ellipse cx="175" cy="88" rx="47" ry="20" fill="url(#stone)" />
            <ellipse cx="183" cy="63" rx="39" ry="17" fill="url(#stone)" />

            <path d="M239 191c3-38 1-63-2-77" stroke="#8EB19B" strokeWidth="5" fill="none" strokeLinecap="round" />
            <path d="M220 135c8-20 21-32 35-40-3 18-12 34-29 47" fill="#DCEADF" stroke="#8EB19B" strokeWidth="2" />
            <path d="M231 135c-6-19-17-33-31-43 2 20 10 33 23 47" fill="#EAF3ED" stroke="#8EB19B" strokeWidth="2" />
            <path d="M240 145c10-11 22-16 35-18-5 10-14 20-31 28" fill="url(#leaf)" stroke="#8EB19B" strokeWidth="2" />
            <path d="M234 145c-9-10-18-15-31-17 4 11 10 20 26 27" fill="url(#leaf)" stroke="#8EB19B" strokeWidth="2" />

            <circle cx="85" cy="63" r="3" fill="#C8D0D9" />
            <circle cx="101" cy="47" r="2" fill="#C8D0D9" />
            <circle cx="278" cy="51" r="3" fill="#C8D0D9" />
            <circle cx="300" cy="72" r="2" fill="#C8D0D9" />
          </svg>
        </div>

        <p className="mt-5 max-w-2xl font-title text-3xl leading-tight text-evp-title sm:text-4xl">
          Take a deep breath. This peaceful corner is still under preparation.
        </p>

        <Link
          to="/"
          className="mt-7 inline-flex items-center justify-center rounded-full border border-transparent bg-evp-accent px-7 py-3 text-base font-semibold text-white no-underline transition duration-300 hover:-translate-y-0.5 hover:bg-evp-accent-deep"
        >
          Explore our rituals
        </Link>

        <p className="mt-8 max-w-xl text-lg text-evp-body/90">
          To regain your balance, visit our home page and continue your experience.
        </p>
      </section>
    </main>
  );
}

export default NotFoundPage;
