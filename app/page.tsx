"use client";
import Link from "next/link";
import { Component } from "lucide-react";

import { Button } from "@/components/ui/button/button";

export default function Home() {
  const shoot = (message: string, e: any) => {
    console.log(message);
  };
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-r from-indigo-950 via-violet-950 to-fuchsia-950">
      <header className="container z-40">
        <div className="flex h-20 items-center justify-between py-6">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="items-center space-x-2 md:flex">
              <Component />
              <span className="hidden font-bold sm:inline-block">
                Synthomatic UI
              </span>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-28">
          <div className="container flex max-w-6xl flex-col items-center gap-4 text-center">
            <h1 className="text-3xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Crea memorables experiencias de usuario con Synthomatic UI.
            </h1>
            <p className="max-w-2xl leading-normal text-white sm:text-xl sm:leading-8">
              Da vida a tus diseños: Explora una amplia colección de componentes
              de interfaz de usuario totalmente personalizables, responsivos,
              animados y accesibles.
            </p>
            <div className="space-x-4">
              <Button asChild>
                <Link href="/">Comienza</Link>
              </Button>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-cyan-400 px-8 text-sm font-medium transition-colors"
                href="https://github.com/edureyesm/synthomatic"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
