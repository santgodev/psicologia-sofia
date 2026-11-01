"use client";

import React from "react";

export default function GentleBanner() {
  return (
    <section className="w-full py-16 sm:py-24 px-4 sm:px-6 text-center bg-[#FBF9F5]">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[10px] font-semibold tracking-widest uppercase text-stone-700 bg-stone-100 border border-stone-200/80 mb-6">
          <span className="text-[9px]">♥</span>
          <span>UN LUGAR AMABLE PARA COMENZAR</span>
          <span className="text-[9px]">♥</span>
        </div>

        {/* Two-tone typography matching the reference image */}
        <h2 className="font-sans text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.2] max-w-3xl">
          <span className="text-stone-900 font-semibold">
            Creamos un espacio seguro para las emociones, preguntas e historias{" "}
          </span>
          <span className="text-stone-400 font-normal">
            que ya no tienes por qué cargar a solas.
          </span>
        </h2>
      </div>
    </section>
  );
}
