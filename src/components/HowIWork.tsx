"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { BrandMark, LoopsDoodle } from "@/components/Doodles";

const PILLARS = [
  {
    tag: "Seguridad",
    title: "A tu ritmo",
    text: "Tú estás en el centro. Avanzamos sin prisa, en un espacio online seguro donde tu historia se escucha sin juicios.",
    card: "bg-lime text-ink",
    inverted: false,
    image: "/images/sofia-terapia-online-escucha.jpg",
    imageAlt: "Sofía Noriega escuchando con atención en un espacio de terapia online seguro",
    imagePos: "object-[center_24%]",
  },
  {
    tag: "Vínculos",
    title: "Relaciones más seguras",
    text: "Con la Terapia Focalizada en las Emociones entendemos tus patrones de apego y construimos vínculos tranquilos.",
    card: "bg-[#FFB997] text-ink",
    inverted: true,
    image: "/images/sofia-terapia-online-sesion.jpg",
    imageAlt: "Sofía Noriega conversando con cercanía en sesión de psicoterapia online",
    imagePos: "object-[center_26%]",
  },
  {
    tag: "Herramientas",
    title: "Calma que se practica",
    text: "Recursos cognitivo-conductuales y de regulación corporal para el sobrepensamiento y la ansiedad del día a día.",
    card: "bg-[#C8E1FF] text-ink",
    inverted: false,
    image: "/images/sofia-journaling-notes.jpg",
    imageAlt: "Sofía Noriega trabajando con ejercicios escritos y herramientas prácticas de regulación",
    imagePos: "object-center",
  },
];

/**
 * "Cómo trabajo": tres tarjetas editoriales con composición alternada
 * (inspiradas en la referencia de LabAcademy).
 */
export default function HowIWork() {
  return (
    <section id="enfoque" className="relative w-full py-20 sm:py-28 px-6 max-w-[1240px] mx-auto scroll-mt-24">
      <LoopsDoodle className="hidden lg:block absolute right-0 -top-6 w-[380px] text-lime-deep/80 pointer-events-none" />

      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end">
        <div className="lg:col-span-4 order-2 lg:order-1">
          <BrandMark className="w-11 h-11" />
          <p className="mt-5 text-[15px] text-stone-600 leading-relaxed max-w-sm">
            Cada sesión combina escucha cálida con método clínico. Nada de fórmulas genéricas:
            adaptamos el camino a lo que tú necesitas.
          </p>
        </div>
        <div className="lg:col-span-8 order-1 lg:order-2">
          <p className="eyebrow">Cómo trabajo</p>
          <h2 className="mt-5 font-serif font-medium text-4xl sm:text-6xl lg:text-[72px] text-ink tracking-[-0.03em] leading-[1]">
            Calidez humana y método, <span className="italic hl">en la misma sesión</span>
          </h2>
        </div>
      </div>

      <ol className="relative mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
        {PILLARS.map((p, i) => (
          <motion.li
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={`group relative rounded-[34px] p-6 sm:p-7 min-h-[340px] flex flex-col justify-between overflow-hidden hover:-translate-y-1.5 transition-transform duration-300 ${p.card}`}
          >
            {p.inverted ? (
              <>
                {/* Composición invertida (tarjeta central): texto arriba-izquierda, foto abajo-derecha */}
                <div className="relative z-10 max-w-[78%]">
                  <span className="inline-block px-3 py-1 rounded-full border border-ink/35 text-[11.5px] font-semibold">
                    {p.tag}
                  </span>
                  <h3 className="mt-3 font-serif text-2xl sm:text-[27px] font-medium tracking-tight leading-tight">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] text-ink/75 leading-relaxed">{p.text}</p>
                </div>

                <div className="relative z-10 mt-6 flex items-end justify-between gap-4">
                  <a
                    href="#terapias"
                    aria-label={`Ver modalidades sobre ${p.title}`}
                    className="w-11 h-11 flex-shrink-0 rounded-full bg-white text-ink flex items-center justify-center shadow-sm group-hover:bg-ink group-hover:text-lime transition-colors"
                  >
                    <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                  </a>

                  <div className="relative w-44 sm:w-48 h-32 sm:h-36 rounded-[24px] overflow-hidden shadow-md ring-2 ring-white/50">
                    <Image
                      src={p.image}
                      alt={p.imageAlt}
                      fill
                      sizes="200px"
                      className={`object-cover photo-warm group-hover:scale-105 transition-transform duration-500 ${p.imagePos}`}
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Composición estándar (tarjetas 1 y 3): flecha + foto arriba, texto abajo */}
                <div className="relative z-10 flex items-start justify-between gap-4">
                  <a
                    href="#terapias"
                    aria-label={`Ver modalidades sobre ${p.title}`}
                    className="w-11 h-11 flex-shrink-0 rounded-full bg-white text-ink flex items-center justify-center shadow-sm group-hover:bg-ink group-hover:text-lime transition-colors"
                  >
                    <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                  </a>

                  <div className="relative w-44 sm:w-48 h-32 sm:h-36 rounded-[24px] overflow-hidden shadow-md ring-2 ring-white/50">
                    <Image
                      src={p.image}
                      alt={p.imageAlt}
                      fill
                      sizes="200px"
                      className={`object-cover photo-warm group-hover:scale-105 transition-transform duration-500 ${p.imagePos}`}
                    />
                  </div>
                </div>

                <div className="relative z-10 mt-6">
                  <span className="inline-block px-3 py-1 rounded-full border border-ink/35 text-[11.5px] font-semibold">
                    {p.tag}
                  </span>
                  <h3 className="mt-3 font-serif text-2xl sm:text-[27px] font-medium tracking-tight leading-tight">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] text-ink/75 leading-relaxed">{p.text}</p>
                </div>
              </>
            )}
          </motion.li>
        ))}
      </ol>

      {/* Barra editorial inferior (ref. 3) */}
      <div aria-hidden="true" className="mt-8 h-1.5 w-full rounded-full bg-stone-200/80 flex justify-center overflow-hidden">
        <span className="h-full w-1/3 rounded-full bg-forest" />
      </div>
    </section>
  );
}
