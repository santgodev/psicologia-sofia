"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, ArrowDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SPECIALTIES,
  SPECIALTY_LOOK,
  selectSpecialty,
  type SpecialtyId,
} from "@/lib/sofia";
import { MascotVideoCanvas } from "@/components/AnxietySubcards";
import {
  StarDoodle,
  RainbowDoodle,
  SparkleDoodle,
  ArrowDoodle,
} from "@/components/Doodles";

/** Inclinación de cada tarjeta (se endereza al pasar el ratón) */
const TILT = ["-rotate-[5deg]", "rotate-[3deg]", "-rotate-[2deg]", "rotate-[5deg]"];
const LIFT = ["md:translate-y-6", "md:-translate-y-2", "md:translate-y-3", "md:translate-y-8"];

export default function HeroSofia() {
  const [selected, setSelected] = useState<SpecialtyId | null>(null);
  const [hovered, setHovered] = useState<SpecialtyId | null>(null);
  const [autoIndex, setAutoIndex] = useState(0);
  const active = SPECIALTIES.find((s) => s.id === selected) ?? null;

  // Solo una mascota se anima a la vez (rendimiento): recorre las tarjetas
  // hasta que la persona elige o pasa el ratón por una.
  useEffect(() => {
    if (selected || hovered) return;
    const t = setInterval(() => setAutoIndex((i) => (i + 1) % SPECIALTIES.length), 3600);
    return () => clearInterval(t);
  }, [selected, hovered]);

  const playing = hovered ?? selected ?? SPECIALTIES[autoIndex].id;

  const handleSelect = (id: SpecialtyId) => {
    setSelected(id);
    // Avisa a Servicios (resalta la fila) y a Contacto (rellena el motivo)
    selectSpecialty(id);
  };

  const goToService = () => {
    if (!selected) return;
    document
      .getElementById(`servicio-${selected}`)
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section
      id="inicio"
      className="relative w-full overflow-hidden pt-6 sm:pt-10 pb-14 sm:pb-20"
    >
      {/* Doodles flotantes */}
      <StarDoodle
        className="absolute left-[6%] top-[20%] w-10 sm:w-14 text-ink animate-float hidden sm:block"
        style={{ ["--r" as string]: "-12deg" }}
      />
      <RainbowDoodle
        className="absolute right-[5%] top-[27%] w-20 sm:w-28 text-ink animate-float-slow hidden sm:block"
        style={{ ["--r" as string]: "14deg" }}
      />
      <SparkleDoodle className="absolute left-[14%] top-[44%] w-6 text-lime-deep animate-float hidden md:block" />
      <SparkleDoodle className="absolute right-[16%] top-[10%] w-5 text-lilac-ink/60 animate-float-slow hidden md:block" />

      <div className="relative max-w-[1240px] mx-auto px-6 flex flex-col items-center text-center">
        {/* Chip de presentación con avatar (prueba humana, sin cifras inventadas) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 pl-1.5 pr-4 py-1.5 rounded-full bg-white border border-stone-200 shadow-sm"
        >
          <span className="relative w-8 h-8 rounded-full overflow-hidden ring-2 ring-lime">
            <Image
              src="/images/sofia-studio-smile.jpg"
              alt=""
              fill
              sizes="32px"
              className="object-cover object-top scale-125"
            />
          </span>
          <span className="text-[13px] text-stone-700">
            Hola, soy <strong className="font-semibold text-ink">Sofía Noriega</strong>, psicóloga clínica
          </span>
          <span className="hidden sm:inline-flex items-center gap-1.5 text-[12px] text-stone-500 pl-3 border-l border-stone-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Terapia 100% online
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-5 sm:mt-6 font-serif font-medium text-ink tracking-[-0.03em] leading-[1.02] text-[2.45rem] sm:text-6xl lg:text-[74px] max-w-[15.5ch]"
        >
          Un espacio para entender lo que sientes y{" "}
          <span className="italic hl">volver a ti</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="mt-5 text-stone-600 text-base sm:text-lg leading-relaxed max-w-xl"
        >
          Acompaño ansiedad, dependencia emocional y relaciones con calidez, sin juicios y con
          herramientas basadas en evidencia.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.22 }}
          className="mt-7 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            id="hero-cta"
            href="#contacto"
            className="group inline-flex items-center gap-3 pl-6 pr-1.5 py-1.5 rounded-full bg-ink text-white font-medium text-[15px] hover:bg-stone-800 transition-colors"
          >
            <span>Agendar primera sesión</span>
            <span className="w-10 h-10 rounded-full bg-lime text-ink flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
              <ArrowUpRight className="w-5 h-5" />
            </span>
          </a>
          <a
            href="#como-empezar"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-stone-300 bg-white/70 text-[15px] font-medium text-ink hover:border-ink transition-colors"
          >
            Cómo es empezar
          </a>
        </motion.div>
      </div>

      {/* ============ Escenario de mascotas (selector de especialidad) ============ */}
      <div className="relative mt-11 sm:mt-14">
        {/* Suelo de cuadrícula en perspectiva */}
        <div aria-hidden="true" className="absolute inset-x-0 top-20 h-[520px] grid-floor pointer-events-none" />

        <div className="relative max-w-[1120px] mx-auto px-5 sm:px-6">
          <div className="flex items-end justify-center gap-3 mb-5 sm:mb-7">
            <p id="selector-label" className="font-serif italic text-xl sm:text-2xl text-ink">
              ¿Con qué te gustaría trabajar?
            </p>
            <ArrowDoodle className="w-16 sm:w-20 text-stone-500 translate-y-3 rotate-[20deg]" />
          </div>

          <div
            role="radiogroup"
            aria-labelledby="selector-label"
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
          >
            {SPECIALTIES.map((s, i) => {
              const look = SPECIALTY_LOOK[s.id];
              const isActive = selected === s.id;
              const dim = selected !== null && !isActive;
              return (
                <motion.button
                  key={s.id}
                  id={`selector-${s.id}`}
                  type="button"
                  role="radio"
                  aria-checked={isActive}
                  onClick={() => handleSelect(s.id)}
                  onMouseEnter={() => setHovered(s.id)}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setHovered(s.id)}
                  onBlur={() => setHovered(null)}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className={`group relative text-left rounded-[28px] sm:rounded-[32px] ${look.bg} p-3.5 sm:p-5 aspect-[3/4] flex flex-col overflow-hidden transition-all duration-500 ease-out focus:outline-none focus-visible:ring-4 focus-visible:ring-ink/30 ${
                    isActive
                      ? "rotate-0 -translate-y-3 shadow-[0_24px_50px_-18px_rgba(26,26,23,0.45)] ring-2 ring-ink"
                      : `${TILT[i]} ${LIFT[i]} hover:rotate-0 hover:-translate-y-2 shadow-[0_14px_40px_-20px_rgba(26,26,23,0.35)]`
                  } ${dim ? "opacity-60 hover:opacity-100" : ""}`}
                >
                  {/* Cabecera: etiqueta + flecha */}
                  <span className="relative z-10 flex items-center justify-between">
                    <span
                      className={`px-2.5 py-1 rounded-full border bg-white/50 text-[10.5px] sm:text-[11px] font-semibold ${look.chip}`}
                    >
                      {look.short}
                    </span>
                    <span
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-colors ${
                        isActive ? "bg-ink text-lime" : "bg-white text-ink group-hover:bg-ink group-hover:text-white"
                      }`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </span>

                  {/* Mascota */}
                  <span className="relative flex-1 flex items-center justify-center -mx-7 pointer-events-none">
                    <SparkleDoodle className="absolute top-1 left-7 w-4 text-white/95" />
                    <SparkleDoodle className="absolute bottom-4 right-8 w-3.5 text-white/90" />
                    <span
                      aria-hidden="true"
                      className="absolute bottom-3 w-20 sm:w-24 h-3.5 rounded-full bg-ink/10 blur-[5px]"
                    />
                    <span className="relative block w-[152%] aspect-video group-hover:scale-105 transition-transform duration-500">
                      <MascotVideoCanvas
                        videoSrc={look.video}
                        posterSrc={look.poster}
                        filterStyle={look.filter}
                        restTime={look.restTime}
                        clipRange={look.clipRange}
                        mirror={look.mirror}
                        playbackRate={1.1}
                        isPlaying={playing === s.id}
                        className="w-full h-full object-contain block"
                      />
                    </span>
                  </span>

                  {/* Pregunta gancho */}
                  <span className="relative z-10 block">
                    <span className="block font-serif text-[15px] sm:text-xl font-semibold leading-tight text-ink">
                      {look.hook}
                    </span>
                    <span className="hidden sm:block mt-1.5 text-[12.5px] text-stone-700/80 leading-snug">
                      {look.line}
                    </span>
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* Respuesta del selector */}
          <div aria-live="polite" className="relative mt-8 sm:mt-12 min-h-[96px] flex justify-center">
            <AnimatePresence mode="wait">
              {active ? (
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="w-full max-w-2xl p-5 sm:p-6 rounded-[28px] bg-white border border-stone-200 shadow-[0_20px_50px_-30px_rgba(26,26,23,0.4)] text-left"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-stone-500">
                    {active.label}
                  </p>
                  <p className="mt-2 text-[15px] text-stone-700 leading-relaxed">{active.blurb}</p>
                  <div className="mt-4 flex flex-wrap gap-2 text-sm font-medium">
                    <button
                      type="button"
                      onClick={goToService}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-cream-2 text-ink hover:bg-lime transition-colors"
                    >
                      Ver modalidad <ArrowDown className="w-3.5 h-3.5" />
                    </button>
                    <a
                      href="#contacto"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-ink text-white hover:bg-stone-800 transition-colors"
                    >
                      Escribir a Sofía sobre esto <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.div>
              ) : (
                <motion.p
                  key="hint"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="self-center text-sm text-stone-500"
                >
                  Toca una tarjeta y te cuento cómo trabajamos ese tema.
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
