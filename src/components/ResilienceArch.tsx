"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ResilienceArch() {
  return (
    <section id="sobre-mi" className="w-full py-16 px-6 max-w-[1240px] mx-auto">
      {/* Arched Sage Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="w-full bg-gradient-to-b from-[#E6EFE9] to-[#D9E6DE] rounded-[48px] sm:rounded-[64px] pt-16 sm:pt-20 pb-12 sm:pb-16 px-6 sm:px-12 flex flex-col items-center text-center shadow-sm relative overflow-hidden"
        style={{
          borderRadius: "180px 180px 48px 48px",
        }}
      >
        {/* Section Headline */}
        <div className="max-w-2xl mx-auto mb-10 z-10">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 tracking-tight leading-tight">
            Construyendo resiliencia juntos con Sofía Terapia
            <span className="inline-block mx-2 animate-pulse text-2xl sm:text-3xl">
              🌸
            </span>
            <span className="italic block sm:inline">en tu camino hacia el bienestar</span>
          </h2>
          <p className="mt-4 text-stone-600 text-sm sm:text-base max-w-lg mx-auto font-normal">
            Un espacio donde cada sesión te brinda claridad, validación y herramientas prácticas
            para recuperar tu serenidad y vivir con mayor plenitud.
          </p>
        </div>

        {/* Central Rounded Family / Session Photograph */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.4 }}
          className="relative w-full max-w-[780px] aspect-[16/9] sm:aspect-[16/8.5] rounded-3xl overflow-hidden shadow-xl border-4 border-white z-10"
        >
          <Image
            src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=80"
            alt="Familia en calma y bienestar"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-stone-900/10 pointer-events-none" />
        </motion.div>
      </motion.div>
    </section>
  );
}
