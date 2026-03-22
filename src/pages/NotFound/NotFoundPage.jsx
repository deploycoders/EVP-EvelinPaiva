import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <main className="mx-auto flex min-h-[70vh] w-[92%] max-w-4xl flex-col items-center justify-center gap-4 text-center">
      <h1 className="m-0 font-title text-5xl text-evp-title">Página no encontrada</h1>
      <p className="m-0 max-w-xl">
        La ruta que buscaste no existe en esta versión inicial.
      </p>
      <Link className="font-semibold text-evp-accent hover:text-evp-accent-deep" to="/">
        Volver al inicio
      </Link>
    </main>
  );
}

export default NotFoundPage;
