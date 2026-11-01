"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Video } from "lucide-react";
import { motion } from "framer-motion";
import { RainbowDoodle, SquiggleDoodle, StarDoodle } from "@/components/Doodles";

/** Anotaciones flotantes alrededor del marco (estilo "pins" de la ref. 2, sin tapar el rostro) */
const PINS = [
  { label: "Terapia Focalizada en las Emociones", className: "-top-4 -left-2 lg:-left-6", delay: 0.2 },
  { label: "Herramientas cognitivo-conductuales", className: "top-[42%] -left-3 lg:-left-8", delay: 0.32 },
  { label: "Regulación del sistema nervioso", className: "-bottom-4 left-4", delay: 0.44 },
];

/**
 * "Conoce a Sofía Noriega": collage con sus retratos reales de estudio y bio a la vista.
 */
export default function AboutSofia() {
  return (
    <section id="sobre-mi" className="w-full py-10 sm:py-16 px-4 sm:px-6 max-w-[1240px] mx-auto scroll-mt-24">
      {/* Ancla heredada usada por la navegación ("Conoce a Sofía") */}
      <span id="equipo" className="block scroll-mt-24" aria-hidden="true" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="relative rounded-[36px] sm:rounded-[48px] bg-white border border-stone-200/80 p-6 sm:p-10 lg:p-14 overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Retratos reales de Sofía (dúo editorial) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-[390px] sm:px-4">
              {/* Marco principal */}
              <div className="relative rounded-[34px] bg-lime p-3 sm:p-4 rotate-[-2deg] shadow-[0_22px_50px_-28px_rgba(26,26,23,0.45)]">
                <div className="arch relative w-full aspect-[4/5] overflow-hidden bg-cream-2 rotate-[2deg]">
                  <Image
                    src="/images/sofia-studio-smile.jpg"
                    alt="Sofía Noriega, psicóloga integral"
                    fill
                    sizes="(max-width: 1024px) 80vw, 400px"
                    className="object-cover object-top"
                    fetchPriority="high"
                  />
                  <span className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-ink/75 via-ink/35 to-transparent pointer-events-none" />
                  <span className="absolute bottom-3.5 left-4 right-28 flex flex-col text-white pointer-events-none">
                    <span className="font-serif text-base font-medium tracking-tight">Sofía Noriega</span>
                    <span className="text-[11px] text-white/85">Psicóloga integral · Online</span>
                  </span>
                </div>
              </div>

              {/* Segundo retrato real de estudio en tarjeta polaroid superpuesta */}
              <motion.div
                initial={{ opacity: 0, y: 14, rotate: 6 }}
                whileInView={{ opacity: 1, y: 0, rotate: 5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.25 }}
                className="absolute -bottom-5 -right-2 sm:-right-4 z-20 w-28 sm:w-32 aspect-square rounded-[24px] bg-white p-1.5 shadow-[0_18px_40px_-14px_rgba(26,26,23,0.4)] border border-stone-200"
              >
                <div className="relative w-full h-full rounded-[18px] overflow-hidden bg-cream-2">
                  <Image
                    src="/images/sofia-studio-casual.jpg"
                    alt="Retrato de Sofía Noriega"
                    fill
                    sizes="130px"
                    className="object-cover object-[center_18%] scale-[1.04]"
                  />
                </div>
              </motion.div>

              <RainbowDoodle className="absolute -top-7 right-1 w-16 sm:w-20 text-ink rotate-[12deg]" />
              <StarDoodle className="absolute top-[52%] -right-3 w-8 text-lilac-ink hidden sm:block" />

              {/* Pins flotantes en escritorio/tablet */}
              {PINS.map((p) => (
                <motion.span
                  key={p.label}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: p.delay }}
                  className={`hidden sm:inline-flex absolute z-10 ${p.className} max-w-[215px] items-center gap-2 pl-1.5 pr-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur border border-stone-200 shadow-[0_12px_30px_-12px_rgba(26,26,23,0.35)] text-[12px] font-medium text-ink leading-tight`}
                >
                  <span className="w-6 h-6 flex-shrink-0 rounded-full bg-lime flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-ink" />
                  </span>
                  {p.label}
                </motion.span>
              ))}
            </div>

            {/* En móvil: chips ordenados debajo del retrato */}
            <div className="flex sm:hidden flex-wrap justify-center gap-2 mt-9">
              {PINS.map((p) => (
                <span
                  key={p.label}
                  className="inline-flex items-center gap-1.5 pl-2 pr-3 py-1 rounded-full bg-cream-2 border border-stone-200 text-[11.5px] font-medium text-ink"
                >
                  <span className="w-2 h-2 rounded-full bg-lime-deep" />
                  {p.label}
                </span>
              ))}
            </div>
          </div>

          {/* Texto */}
          <div className="lg:col-span-7">
            <p className="eyebrow">Conoce a Sofía Noriega</p>
            <h2 className="mt-5 font-serif font-medium text-[2.1rem] sm:text-5xl lg:text-[58px] text-ink tracking-[-0.025em] leading-[1.04]">
              Hola, soy Sofía. Te acompaño a{" "}
              <span className="relative inline-block italic">
                desenredar
                <SquiggleDoodle className="absolute left-0 -bottom-2 w-full h-3 text-lime-deep" />
              </span>{" "}
              lo que sientes.
            </h2>

            <div className="mt-7 space-y-4 text-stone-600 text-base sm:text-[17px] leading-relaxed max-w-xl">
              <p>
                Acompaño de forma 100% online a personas y parejas que atraviesan dependencia
                emocional, incertidumbre en sus relaciones o sobrepensamiento continuo.
              </p>
              <p>
                Mi enfoque de psicología integral une la Terapia Focalizada en las Emociones,
                herramientas cognitivo-conductuales y regulación del sistema nervioso. La meta es
                que tengas claridad y sostén para vivir en paz contigo.
              </p>
            </div>

            <dl className="mt-8 flex flex-wrap gap-2.5">
              {[
                ["Enfoque", "Psicología integral", "bg-cream-2"],
                ["Modalidad", "100% Online", "bg-lilac"],
                ["Sesiones", "50 minutos", "bg-sky"],
              ].map(([dt, dd, bg]) => (
                <div key={dt} className={`px-4 py-2.5 rounded-2xl ${bg}`}>
                  <dt className="text-[11px] uppercase tracking-wider text-stone-500 font-semibold">{dt}</dt>
                  <dd className="text-sm font-semibold text-ink flex items-center gap-1.5">
                    {dt === "Modalidad" && <Video className="w-3.5 h-3.5 text-lilac-ink" />}
                    {dd}
                  </dd>
                </div>
              ))}
            </dl>

            <a
              href="#contacto"
              className="group mt-9 inline-flex items-center gap-3 pl-6 pr-1.5 py-1.5 rounded-full bg-ink text-white text-sm font-medium hover:bg-stone-800 transition-colors"
            >
              <span>Hablar con Sofía</span>
              <span className="w-9 h-9 rounded-full bg-lime text-ink flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
