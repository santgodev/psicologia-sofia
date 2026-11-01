"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="w-full py-20 bg-[#1E363F] text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[10px] font-semibold tracking-widest uppercase bg-white/10 text-white/90 border border-white/20 mb-6">
          <span className="text-[9px]">♥</span>
          <span>EL PRIMER PASO SIEMPRE ES EL MÁS VALIENTE</span>
          <span className="text-[9px]">♥</span>
        </div>

        <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-normal sm:font-medium tracking-tight leading-[1.12] max-w-2xl mx-auto">
          No tienes que resolver todo hoy. Solo necesitas dar un primer paso.
        </h2>

        <p className="mt-4 text-xs sm:text-sm text-white/75 max-w-lg mx-auto leading-relaxed font-normal">
          Si sientes que la ansiedad o el miedo a perder a alguien están ocupando demasiado espacio en tu día, hablemos. Encontremos juntos tu calma.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <a
            href="https://wa.me/?text=Hola%20Dra.%20Sofía,%20quisiera%20agendar%20una%20sesión%20de%20psicología."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white hover:bg-stone-100 text-[#1E363F] font-medium text-xs sm:text-sm shadow-md transition-all active:scale-95 cursor-pointer"
          >
            <span>Escríbeme por WhatsApp</span>
            <span className="w-5 h-5 rounded-full bg-[#1E363F] text-white flex items-center justify-center">
              <ArrowUpRight className="w-3 h-3" />
            </span>
          </a>

          <a
            href="#inversion"
            className="inline-flex items-center px-6 py-3.5 rounded-full border border-white/30 text-white hover:bg-white/10 text-xs sm:text-sm font-medium transition-all"
          >
            <span>Ver Tarifas & Opciones</span>
          </a>
        </div>

        <p className="mt-6 text-[11px] text-white/50 font-normal">
          Atención estrictamente confidencial · Modalidad online disponible para todo el mundo
        </p>
      </div>
    </section>
  );
}
