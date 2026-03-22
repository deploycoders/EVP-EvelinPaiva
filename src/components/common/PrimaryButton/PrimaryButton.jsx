function PrimaryButton({ children, href = "#contacto" }) {
  return (
    <a
      className="inline-flex items-center justify-center rounded-full border border-transparent bg-evp-accent px-5 py-3 font-semibold text-white no-underline transition duration-200 hover:-translate-y-0.5 hover:bg-evp-accent-deep hover:shadow-soft"
      href={href}
    >
      {children}
    </a>
  );
}

export default PrimaryButton;
