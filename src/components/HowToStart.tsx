"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, CalendarCheck, MessageCircle, Video } from "lucide-react";
import { motion } from "framer-motion";
import { LoopsDoodle, StarDoodle } from "@/components/Doodles";

const STEPS = [
  {
    icon: MessageCircle,
    title: "Me escribes",
    text: "Por el formulario o WhatsApp, con tus palabras. No necesitas tenerlo todo claro para empezar.",
  },
  {
    icon: CalendarCheck,
    title: "Coordinamos tu sesión",
    text: "Resuelvo cualquier duda sobre el proceso y elegimos el día y horario online que mejor se ajuste a ti.",
  },
  {
    icon: Video,
    title: "Primera sesión online",
    text: "Nos conectamos por videollamada privada desde tu espacio seguro: entendemos qué te trae y definimos el camino.",
  },
];

/** "Cómo empezar": tres pasos 100% online sobre bloque bosque. */
export default function HowToStart() {
  return (
    <section id="como-empezar" className="w-full py-10 sm:py-16 px-4 sm:px-6 max-w-[1240px] mx-auto scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="relative rounded-[36px] sm:rounded-[48px] bg-forest text-white p-6 sm:p-12 lg:p-16 overflow-hidden"
      >
        <LoopsDoodle className="hidden lg:block absolute -right-12 -top-10 w-[400px] text-lime/20 pointer-events-none" />

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          <div className="lg:col-span-7">
            <p className="eyebrow eyebrow-dark">Cómo empezar</p>
            <h2 className="mt-5 font-serif font-medium text-4xl sm:text-6xl text-white tracking-[-0.03em] leading-[1.02]">
              Dar el primer paso desde casa es <span className="italic text-lime">sencillo</span>
            </h2>

            <ol className="mt-9 flex flex-col gap-3">
              {STEPS.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.li
                    key={s.title}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.1 + i * 0.08 }}
                    className="group relative rounded-[24px] bg-white/[0.07] border border-white/10 px-5 py-4 sm:px-6 sm:py-5 flex items-start gap-4 hover:bg-white/[0.12] transition-colors"
                  >
                    <span className="w-11 h-11 flex-shrink-0 rounded-full bg-lime text-forest flex items-center justify-center mt-0.5">
                      <Icon className="w-[18px] h-[18px]" />
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline justify-between gap-3">
                        <h3 className="font-serif text-xl sm:text-[22px] font-medium text-white">
                          {s.title}
                        </h3>
                        <span className="font-serif italic text-xs text-lime/80 flex-shrink-0">
                          0{i + 1}
                        </span>
                      </div>
                      <p className="mt-1 text-[14px] text-white/75 leading-relaxed max-w-lg">
                        {s.text}
                      </p>
                    </div>
                  </motion.li>
                );
              })}
            </ol>

            <a
              href="#contacto"
              className="group mt-9 inline-flex items-center gap-3 pl-6 pr-1.5 py-1.5 rounded-full bg-lime text-ink text-[15px] font-semibold hover:bg-white transition-colors"
            >
              <span>Agendar primera sesión</span>
              <span className="w-10 h-10 rounded-full bg-ink text-lime flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </a>
          </div>

          <div className="lg:col-span-5">
            <div className="relative max-w-[390px] mx-auto mb-2 sm:mb-5 lg:mb-0">
              {/* Retrato principal: Sofía escuchando en sesión remota */}
              <div className="arch relative w-full aspect-[3/4] overflow-hidden bg-forest-2 ring-1 ring-white/20 shadow-[0_26px_60px_-24px_rgba(0,0,0,0.55)]">
                <Image
                  src="/images/sofia-terapia-online-escucha.jpg"
                  alt="Sofía Noriega escuchando atentamente durante una sesión de terapia online"
                  fill
                  sizes="(max-width: 1024px) 90vw, 390px"
                  className="object-cover object-top"
                />
              </div>

              {/* Segundo momento de la sesión online (dúo editorial en tablet/escritorio) */}
              <motion.div
                initial={{ opacity: 0, y: 14, rotate: 6 }}
                whileInView={{ opacity: 1, y: 0, rotate: 5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.2 }}
                className="hidden sm:block absolute -bottom-5 -right-3 lg:-right-4 z-20 w-32 lg:w-36 aspect-[3/4] rounded-[24px] bg-white p-1.5 shadow-[0_20px_45px_-15px_rgba(0,0,0,0.55)] ring-1 ring-stone-200/80"
              >
                <div className="relative w-full h-full rounded-[18px] overflow-hidden bg-forest-2">
                  <Image
                    src="/images/sofia-terapia-online-sesion.jpg"
                    alt="Sofía Noriega acompañando y conversando en sesión de terapia remota"
                    fill
                    sizes="150px"
                    className="object-cover object-top"
                  />
                </div>
              </motion.div>

              <span className="absolute -left-2 sm:-left-7 bottom-5 z-30 inline-flex items-center gap-3 pl-2 pr-5 py-2 rounded-full bg-white text-ink shadow-xl">
                <span className="w-9 h-9 rounded-full bg-lime flex items-center justify-center">
                  <Video className="w-4 h-4" />
                </span>
                <span className="leading-tight">
                  <span className="block text-sm font-semibold">100% Online</span>
                  <span className="block text-[11.5px] text-stone-500">Videollamada privada · 50 min</span>
                </span>
              </span>
              <StarDoodle className="absolute -top-5 right-4 w-12 text-lime animate-float" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
