import { Link } from "react-router-dom";

function ServerErrorPage({
  title = "Something went wrong",
  description = "An unexpected error happened while loading this page.",
  showReload = true,
}) {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-evp-bg">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(173,93,67,0.12),_transparent_46%)]" />

      <section className="relative mx-auto flex min-h-screen w-[92%] max-w-5xl items-center justify-center py-16">
        <div className="w-full border border-evp-border bg-evp-section/85 p-8 shadow-soft backdrop-blur-[1px] sm:p-12">
          <div className="mb-4 flex items-center gap-3 text-evp-accent">
            <span className="inline-flex h-9 w-9 animate-pulse items-center justify-center border border-evp-accent/50">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 8v5m0 4h.01M12 3l9 16H3l9-16Z" />
              </svg>
            </span>
            <p className="text-[11px] uppercase tracking-[0.16em]">Server response error</p>
          </div>

          <div className="relative">
            <p className="pointer-events-none absolute -top-6 left-0 select-none font-title text-[7rem] leading-none text-evp-accent/10 sm:text-[9rem] md:text-[11rem]">
              500
            </p>
            <h1 className="relative z-10 pt-16 font-title text-5xl leading-[0.95] text-evp-title sm:text-6xl md:text-7xl">
              {title}
            </h1>
          </div>

          <p className="mt-6 max-w-2xl text-base leading-8 text-evp-body/90 sm:text-lg">
            {description}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center justify-center border border-transparent bg-evp-accent px-6 py-3 font-semibold text-white no-underline transition duration-300 hover:-translate-y-0.5 hover:bg-evp-accent-deep"
            >
              Back home
            </Link>

            {showReload ? (
              <button
                type="button"
                onClick={() => window.location.reload()}
                className="inline-flex items-center justify-center border border-evp-border bg-transparent px-6 py-3 font-semibold text-evp-title transition duration-300 hover:bg-evp-bg"
              >
                Reload page
              </button>
            ) : null}
          </div>
        </div>
      </section>
    </main>
  );
}

export default ServerErrorPage;
