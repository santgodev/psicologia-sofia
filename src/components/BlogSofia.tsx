"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, BookOpen, Compass, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";
import {
  BrandMark,
  LoopsDoodle,
  RainbowDoodle,
  SparkleDoodle,
  SquiggleDoodle,
} from "@/components/Doodles";

const DIMENSIONS = [
  {
    icon: HeartHandshake,
    title: "Vocación de servicio",
    detail: "Salud mental y cercanía humana",
    bg: "bg-peach/70",
    iconClass: "bg-white text-peach-ink",
  },
  {
    icon: BookOpen,
    title: "Psicología + Teología",
    detail: "Formación para una mirada integral",
    bg: "bg-lilac/75",
    iconClass: "bg-white text-lilac-ink",
  },
  {
    icon: Compass,
    title: "Sentido y propósito",
    detail: "La dimensión profunda de la vida",
    bg: "bg-butter/85",
    iconClass: "bg-white text-butter-ink",
  },
];

/**
 * Carta personal y propósito de Sofía Noriega (sustituye a la antigua sección de Blog).
 */
export default function BlogSofia() {
  return (
    <section
      id="proposito"
      aria-labelledby="proposito-titulo"
      className="w-full py-16 sm:py-24 px-4 sm:px-6 max-w-[1240px] mx-auto scroll-mt-24"
    >
      {/* Ancla heredada por compatibilidad con enlaces previos a #blog */}
      <span id="blog" className="block scroll-mt-24" aria-hidden="true" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="relative rounded-[36px] sm:rounded-[48px] bg-white border border-stone-200/90 p-6 sm:p-10 lg:p-14 overflow-hidden shadow-[0_24px_60px_-36px_rgba(26,26,23,0.28)]"
      >
        {/* Textura de cuadrícula sutil y trazos decorativos */}
        <div
          aria-hidden="true"
          className="absolute inset-0 grid-flat opacity-60 pointer-events-none [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]"
        />
        <LoopsDoodle className="hidden lg:block absolute -right-12 -top-10 w-[360px] text-lime-deep/55 pointer-events-none" />

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Columna izquierda: ancla visual, 3 dimensiones y firma */}
          <div className="lg:col-span-4 lg:self-stretch flex flex-col justify-between gap-8">
            <div>
              <p className="eyebrow">Mi historia &amp; propósito</p>
              <h2
                id="proposito-titulo"
                className="mt-5 font-serif font-medium text-3xl sm:text-4xl lg:text-[44px] text-ink tracking-[-0.025em] leading-[1.06]"
              >
                Una mirada <span className="italic">verdaderamente</span>{" "}
                <span className="relative inline-block">
                  integral
                  <SquiggleDoodle className="absolute left-0 -bottom-2 w-full h-2.5 text-lime-deep" />
                </span>
              </h2>

              {/* Retrato editorial de Sofía en estudio cálido */}
              <div className="mt-6 relative w-full aspect-[5/4] rounded-[28px] overflow-hidden bg-cream-2 ring-1 ring-stone-200 shadow-sm">
                <Image
                  src="/images/sofia-serene-purpose.jpg"
                  alt="Sofía Noriega en su estudio de psicología y lectura"
                  fill
                  sizes="(max-width: 1024px) 90vw, 380px"
                  className="object-cover object-[center_20%]"
                />
              </div>

              <ul className="mt-4 flex flex-col gap-2">
                {DIMENSIONS.map((d) => {
                  const Icon = d.icon;
                  return (
                    <li
                      key={d.title}
                      className={`flex items-center gap-3 p-2.5 pr-4 rounded-2xl ${d.bg}`}
                    >
                      <span
                        className={`w-9 h-9 flex-shrink-0 rounded-xl flex items-center justify-center shadow-xs ${d.iconClass}`}
                      >
                        <Icon className="w-4 h-4" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-[13px] font-semibold text-ink leading-tight">
                          {d.title}
                        </p>
                        <p className="text-[11.5px] text-stone-700/85 mt-0.5 leading-snug">
                          {d.detail}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Tarjeta de firma de Sofía */}
            <div className="flex items-center justify-between gap-3 p-2.5 pr-3.5 rounded-full bg-cream-2/90 border border-stone-200/80">
              <div className="flex items-center gap-3 min-w-0">
                <span className="relative w-11 h-11 flex-shrink-0 rounded-full overflow-hidden ring-2 ring-lime">
                  <Image
                    src="/images/sofia-studio-smile.jpg"
                    alt="Sofía Noriega"
                    fill
                    sizes="44px"
                    className="object-cover object-top scale-125"
                  />
                </span>
                <div className="min-w-0">
                  <p className="font-serif text-base font-semibold text-ink truncate">
                    Sofía Noriega
                  </p>
                  <p className="text-[11.5px] text-stone-600 truncate">
                    Psicóloga integral · 100% Online
                  </p>
                </div>
              </div>

              <a
                href="#contacto"
                aria-label="Escribir a Sofía Noriega"
                className="group w-10 h-10 flex-shrink-0 rounded-full bg-ink text-lime flex items-center justify-center hover:bg-forest transition-colors"
              >
                <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Columna derecha: carta personal (texto íntegro de Sofía) */}
          <div className="lg:col-span-8 flex flex-col gap-6 sm:gap-7">
            {/* Párrafo 1: Apertura editorial */}
            <div className="relative">
              <div className="flex items-center gap-2.5 mb-4">
                <BrandMark className="w-8 h-8" />
                <span className="text-xs font-semibold uppercase tracking-widest text-stone-500">
                  Carta personal
                </span>
              </div>
              <p className="font-serif text-2xl sm:text-3xl lg:text-[32px] font-normal text-ink leading-[1.26] tracking-[-0.02em]">
                Hola, mi nombre es{" "}
                <span className="font-medium">Sofía Noriega</span>. Soy psicóloga
                integral, especialista en{" "}
                <span className="italic hl">
                  dependencia emocional, relaciones y ansiedad
                </span>
                .
              </p>
            </div>

            {/* Párrafos 2 y 3: Dos columnas aireadas para lectura ligera */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-6 border-t border-stone-200">
              <div className="rounded-[24px] bg-cream-2/55 border border-stone-200/70 p-5 sm:p-6">
                <span className="inline-block font-serif italic text-xs font-semibold text-forest mb-2">
                  01 · Vocación
                </span>
                <p className="text-[15px] sm:text-[15.5px] text-stone-700 leading-[1.72]">
                  Desde pequeña he sentido una gran inclinación por el servicio a
                  los demás y el deseo de aportar mi granito de arena al bienestar
                  y la salud mental de las personas.
                </p>
              </div>

              <div className="rounded-[24px] bg-cream-2/55 border border-stone-200/70 p-5 sm:p-6">
                <span className="inline-block font-serif italic text-xs font-semibold text-forest mb-2">
                  02 · Formación integral
                </span>
                <p className="text-[15px] sm:text-[15.5px] text-stone-700 leading-[1.72]">
                  Actualmente, también me encuentro estudiando Teología en un
                  seminario cristiano, pues he querido complementar mi formación
                  desde otras áreas que me permitan comprender y acompañar al ser
                  humano de una manera más integral.
                </p>
              </div>
            </div>

            {/* Párrafo 4: Cierre sobre sentido y propósito */}
            <div className="relative rounded-[28px] sm:rounded-[32px] bg-forest text-white p-6 sm:p-8 lg:p-9 overflow-hidden">
              <RainbowDoodle className="absolute -right-5 -bottom-5 w-36 text-lime/15 pointer-events-none" />
              <SparkleDoodle className="absolute top-5 right-6 w-5 text-lime animate-float pointer-events-none" />

              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] font-semibold uppercase tracking-wider text-lime mb-4">
                03 · Sentido &amp; propósito
              </span>

              <p className="relative font-serif text-lg sm:text-xl lg:text-[22px] font-normal text-white/95 leading-[1.52] tracking-[-0.01em]">
                A través de la psicología puedo contribuir al bienestar emocional
                de las personas, pero también he comprendido que hay una dimensión
                mucho más profunda de nuestra existencia:{" "}
                <span className="italic text-lime">
                  encontrarle sentido a la vida
                </span>
                . Y creo que ese propósito, en última instancia, solo podemos
                encontrarlo en Dios.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
