"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { SparkleDoodle } from "@/components/Doodles";

const fade = (i: number) => ({
  initial: { opacity: 0, y: 24, scale: 0.96 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
});

/**
 * Manifiesto en píldoras (inspirado en "We · Protect · → · Nature"):
 * resume el proceso terapéutico en cuatro gestos visuales.
 */
export default function ManifestoStrip() {
  return (
    <section aria-labelledby="manifiesto-titulo" className="w-full py-16 sm:py-24 px-6 max-w-[1240px] mx-auto">
      <div className="relative text-center max-w-2xl mx-auto">
        {/* Fotos redondas flotantes alrededor del titular */}
        <span className="hidden md:block absolute -left-24 top-0 w-14 h-14 rounded-full overflow-hidden ring-4 ring-background shadow-md animate-float">
          <Image src="/images/sofia-studio-smile.jpg" alt="" fill sizes="56px" className="object-cover object-top" />
        </span>
        <span className="hidden md:block absolute -right-20 -top-4 w-12 h-12 rounded-full overflow-hidden ring-4 ring-background shadow-md animate-float-slow">
          <Image src="/images/sofia-journaling-notes.jpg" alt="" fill sizes="48px" className="object-cover object-top" />
        </span>
        <span className="hidden md:block absolute -left-8 bottom-[-10px] w-10 h-10 rounded-full overflow-hidden ring-4 ring-background shadow-md animate-float-slow">
          <Image src="/images/sofia-studio-casual.jpg" alt="" fill sizes="40px" className="object-cover object-top" />
        </span>
        <SparkleDoodle className="hidden md:block absolute -right-28 bottom-0 w-6 text-lime-deep animate-float" />

        <h2
          id="manifiesto-titulo"
          className="font-serif font-medium text-3xl sm:text-5xl text-ink tracking-[-0.02em] leading-[1.08]"
        >
          La terapia no es arreglarte. <span className="italic">Es comprenderte.</span>
        </h2>
        <p className="mt-4 text-stone-600 text-base leading-relaxed">
          Un proceso a tu medida, con pasos que se sienten pequeños y cambios que se notan.
        </p>
      </div>

      {/* Fila de píldoras */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-[1fr_1.35fr_0.9fr_1.35fr] gap-3 sm:gap-4">
        <motion.div
          {...fade(0)}
          className="h-28 sm:h-36 rounded-full bg-white border border-stone-200 flex items-center justify-center"
        >
          <span className="font-serif text-3xl sm:text-5xl text-ink tracking-tight">Sentir</span>
        </motion.div>

        <motion.div {...fade(1)} className="relative h-28 sm:h-36 rounded-full overflow-hidden">
          <Image
            src="/images/sofia-terapia-online-escucha.jpg"
            alt="Sofía Noriega acompañando con escucha activa para comprender tu historia"
            fill
            sizes="(max-width: 768px) 50vw, 360px"
            className="object-cover object-[center_28%]"
          />
          <span className="absolute inset-0 bg-ink/30" />
          <span className="absolute inset-0 flex items-center justify-center font-serif italic text-3xl sm:text-5xl text-white tracking-tight">
            entender
          </span>
        </motion.div>

        <motion.div
          {...fade(2)}
          className="h-28 sm:h-36 rounded-full bg-lime flex items-center justify-center"
        >
          <ArrowRight className="w-12 h-12 sm:w-16 sm:h-16 text-ink" strokeWidth={1.6} />
        </motion.div>

        <motion.div {...fade(3)} className="relative h-28 sm:h-36 rounded-full overflow-hidden">
          <Image
            src="/images/sofia-serene-purpose.jpg"
            alt="Sofía Noriega transmitiendo serenidad, calma y bienestar emocional"
            fill
            sizes="(max-width: 768px) 50vw, 360px"
            className="object-cover object-[center_28%] photo-warm"
          />
          <span className="absolute inset-0 bg-ink/30" />
          <span className="absolute inset-0 flex items-center justify-center font-serif text-3xl sm:text-5xl text-white tracking-tight">
            sanar
          </span>
        </motion.div>
      </div>
    </section>
  );
}

