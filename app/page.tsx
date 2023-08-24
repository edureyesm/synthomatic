import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-violet-950/75 backdrop-blur-sm backdrop-filter">
        <div className="flex h-20 items-center justify-between py-6">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="items-center space-x-2 md:flex">
              <Image
                src="/images/logo.png"
                alt="synthomatic"
                width={40}
                height={40}
              />
              <span className="hidden font-bold sm:inline-block">
                Synthomatic
              </span>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1 bg-slate-950">
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="container flex max-w-5xl flex-col items-center gap-4 text-center">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
              Componentes reutilizables, customizables y accesibles.
            </h1>
            <p className="max-w-2xl leading-normal text-blue-100 sm:text-xl sm:leading-8">
              Synthomatic es una aplicación de demostración completa que muestra
              componentes pre-construidos para React. Incluye botones,
              formularios, modales y muchos más.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
