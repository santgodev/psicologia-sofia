"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Video } from "lucide-react";
import { motion } from "framer-motion";
import {
  SPECIALTY_EVENT,
  SPECIALTY_LOOK,
  selectSpecialty,
  type SpecialtyId,
} from "@/lib/sofia";

const SERVICES: {
  id: SpecialtyId;
  title: string;
  subtitle: string;
  tags: string[];
  format: string;
  details: string;
}[] = [
  {
    id: "dependencia",
    title: "Dependencia emocional",
    subtitle: "Autonomía afectiva, límites y sanación de heridas de apego.",
    tags: ["Apego", "Límites"],
    format: "Individual",
    details: "Online · 50 min",
  },
  {
    id: "relaciones",
    title: "Relaciones y pareja",
    subtitle: "Vínculos conscientes, comunicación asertiva y acuerdos sanos.",
    tags: ["Pareja", "Comunicación"],
    format: "Individual o pareja",
    details: "Online · 50 min",
  },
  {
    id: "ansiedad",
    title: "Manejo de la ansiedad",
    subtitle: "Alivio del sobrepensamiento, calma y regulación del sistema nervioso.",
    tags: ["Sobrepensamiento", "Calma"],
    format: "Individual",
    details: "Online · 50 min",
  },
  {
    id: "integral",
    title: "Autoestima y crecimiento",
    subtitle: "Acompañamiento individual basado en evidencia y calidez humana.",
    tags: ["Autoestima", "Propósito"],
    format: "Individual",
    details: "Online · 50 min",
  },
];

/**
 * Servicios como lista editorial (inspirada en la tabla de iniciativas de la ref. 2):
 * tarjeta fotográfica inclinada con sombra lima en la fila activa/apuntada.
 */
export default function ServicesSofia() {
  const [highlight, setHighlight] = useState<SpecialtyId | null>(null);
  const [hovered, setHovered] = useState<SpecialtyId | null>(null);

  useEffect(() => {
    const onSelect = (e: Event) => setHighlight((e as CustomEvent<SpecialtyId>).detail);
    window.addEventListener(SPECIALTY_EVENT, onSelect);
    return () => window.removeEventListener(SPECIALTY_EVENT, onSelect);
  }, []);

  // Por defecto destaca la 2ª fila (como en la referencia visual) o la elegida en el hero
  const previewId: SpecialtyId = hovered ?? highlight ?? "relaciones";

  return (
    <section id="terapias" className="w-full py-20 sm:py-24 px-6 max-w-[1240px] mx-auto scroll-mt-24">
      {/* Ancla heredada usada en el footer */}
      <span id="servicios" className="block scroll-mt-24" aria-hidden="true" />

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
        <div className="max-w-2xl">
          <p className="eyebrow">Modalidades de acompañamiento</p>
          <h2 className="mt-5 font-serif font-medium text-4xl sm:text-6xl text-ink tracking-[-0.03em] leading-[1.02]">
            ¿En qué te puedo <span className="italic">acompañar</span>?
          </h2>
        </div>
        <p className="text-sm text-stone-600 max-w-[270px] md:text-right leading-relaxed">
          Sesiones individuales o de pareja, 100% online por videollamada privada de 50 minutos.
        </p>
      </div>

      {/* Cabecera de columnas (escritorio) */}
      <div className="hidden md:grid md:grid-cols-[2.1fr_1.3fr_0.95fr_auto] lg:grid-cols-[2fr_1.2fr_190px_0.9fr_auto] gap-6 px-4 pb-3 text-[12px] font-medium text-stone-500">
        <span>Modalidad</span>
        <span>Temas</span>
        <span className="hidden lg:block" aria-hidden="true" />
        <span>Formato</span>
        <span className="w-11" />
      </div>

      <ul className="border-t border-stone-300" onMouseLeave={() => setHovered(null)}>
        {SERVICES.map((s, i) => {
          const isChosen = highlight === s.id;
          const isFeatured = previewId === s.id;
          const look = SPECIALTY_LOOK[s.id];
          return (
            <motion.li
              key={s.id}
              id={`servicio-${s.id}`}
              onMouseEnter={() => setHovered(s.id)}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className={`group relative border-b border-stone-300 scroll-mt-28 transition-colors duration-300 ${
                isChosen ? "bg-white" : isFeatured ? "bg-white/60" : "hover:bg-white/70"
              }`}
            >
              {isChosen && (
                <span className="absolute left-0 top-3 bottom-3 w-1.5 rounded-full bg-lime-deep" aria-hidden="true" />
              )}

              <div className="grid grid-cols-1 md:grid-cols-[2.1fr_1.3fr_0.95fr_auto] lg:grid-cols-[2fr_1.2fr_190px_0.9fr_auto] gap-4 md:gap-6 items-center px-4 py-6 sm:py-7">
                <div className="flex items-start gap-4">
                  <span
                    className={`mt-2 w-3 h-3 rounded-full flex-shrink-0 ${look.bg} ring-4 ring-white`}
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-serif text-2xl sm:text-[28px] font-medium text-ink tracking-tight leading-tight flex flex-wrap items-center gap-3">
                      {s.title}
                      {isChosen && (
                        <span className="px-2.5 py-0.5 rounded-full bg-lime text-[11px] font-sans font-semibold text-ink tracking-normal">
                          Tu elección
                        </span>
                      )}
                    </h3>
                    <p className="mt-1.5 text-sm text-stone-600 leading-relaxed max-w-md">{s.subtitle}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 md:pl-0 pl-7">
                  {s.tags.map((t, idx) => (
                    <span
                      key={t}
                      className={`px-3 py-1 rounded-full border text-[11.5px] font-semibold transition-colors ${
                        isFeatured && idx === 0
                          ? "bg-lime text-ink border-lime-deep"
                          : `bg-white/60 ${look.chip}`
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Espacio reservado en escritorio grande para la tarjeta fotográfica flotante */}
                <div className="hidden lg:block" aria-hidden="true" />

                <div className="md:pl-0 pl-7">
                  <p className="font-serif text-lg sm:text-xl font-medium text-ink leading-snug">
                    {s.format}
                  </p>
                  <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-stone-500">
                    <Video className="w-3.5 h-3.5 text-stone-400" />
                    <span>{s.details}</span>
                  </p>
                </div>

                <a
                  href="#contacto"
                  onClick={() => selectSpecialty(s.id)}
                  aria-label={`Consultar sobre ${s.title}`}
                  className={`md:justify-self-end ml-7 md:ml-0 inline-flex items-center justify-center gap-2 md:w-11 md:h-11 px-5 py-2.5 md:p-0 rounded-full border text-sm font-medium transition-all self-start md:self-auto ${
                    isFeatured
                      ? "border-dashed border-ink bg-white text-ink group-hover:bg-ink group-hover:text-lime group-hover:border-solid"
                      : "border-stone-400 text-ink hover:border-ink hover:bg-ink hover:text-lime"
                  }`}
                >
                  <span className="md:hidden">Consultar</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                </a>
              </div>

              {/* Vista previa fotográfica inclinada con respaldo lima (ref. 2) */}
              <div
                aria-hidden="true"
                className={`hidden lg:block pointer-events-none absolute z-20 right-[26.5%] top-1/2 w-40 h-28 -translate-y-1/2 transition-all duration-300 ${
                  isFeatured
                    ? "opacity-100 scale-100 -rotate-[5deg]"
                    : "opacity-0 scale-90 rotate-[4deg]"
                }`}
              >
                <span className="absolute -inset-1.5 rounded-[22px] bg-lime -rotate-[5deg]" />
                <span className="relative block w-full h-full rounded-[20px] overflow-hidden ring-2 ring-white shadow-[0_24px_50px_-18px_rgba(26,26,23,0.45)]">
                  <Image src={look.image} alt="" fill sizes="160px" className="object-cover object-[center_25%]" />
                </span>
              </div>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}
