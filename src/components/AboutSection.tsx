"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="sobre-mi" className="w-full py-16 sm:py-24 bg-[#FBF9F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Copy, Buttons & Stats */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[10px] font-semibold tracking-widest uppercase text-stone-700 bg-stone-100 border border-stone-200/80 mb-5">
              <span className="text-[9px]">♥</span>
              <span>QUIÉN SOY</span>
              <span className="text-[9px]">♥</span>
            </div>

            {/* Heading - Clean sans typography */}
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-[2.75rem] font-normal sm:font-medium tracking-tight text-stone-900 leading-[1.14] max-w-xl">
              Acompañamos los momentos que se sienten difíciles de atravesar en soledad
            </h2>

            {/* Paragraph */}
            <p className="mt-4 text-xs sm:text-sm text-stone-500 font-normal leading-relaxed max-w-lg">
              Ofrecemos cuidado emocional consciente para quienes navegan por la ansiedad, el sobrepensamiento, la dependencia afectiva y las heridas de apego. Cada sesión se modela alrededor de tu propio ritmo, tu confort y lo que se siente manejable para ti hoy.
            </p>

            {/* Buttons - matching Vellura design */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#metodologia"
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#27444F] hover:bg-[#1E363F] text-white text-xs sm:text-sm font-medium transition-all shadow-xs cursor-pointer active:scale-95"
              >
                <span>Conoce a Sofía Noriega</span>
                <span className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center">
                  <ArrowUpRight className="w-3 h-3 text-white" />
                </span>
              </a>

              <a
                href="#inversion"
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs sm:text-sm font-medium transition-all cursor-pointer active:scale-95"
              >
                <span>Agendar Cita</span>
                <span className="w-5 h-5 rounded-full bg-stone-300 flex items-center justify-center">
                  <ArrowUpRight className="w-3 h-3 text-stone-800" />
                </span>
              </a>
            </div>

            {/* Clean Stats Row */}
            <div className="mt-12 pt-8 border-t border-stone-200/70 grid grid-cols-3 gap-6 sm:gap-10 w-full max-w-md">
              <div>
                <span className="block font-sans text-3xl sm:text-4xl font-normal text-stone-900 tracking-tight">
                  97%
                </span>
                <span className="text-xs text-stone-400 font-normal mt-0.5 block">
                  Claridad y Calma
                </span>
              </div>

              <div>
                <span className="block font-sans text-3xl sm:text-4xl font-normal text-stone-900 tracking-tight">
                  5k+
                </span>
                <span className="text-xs text-stone-400 font-normal mt-0.5 block">
                  Horas de Sesión
                </span>
              </div>

              <div>
                <span className="block font-sans text-3xl sm:text-4xl font-normal text-stone-900 tracking-tight">
                  1hr
                </span>
                <span className="text-xs text-stone-400 font-normal mt-0.5 block">
                  Sesiones sin Prisas
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Rounded Photo Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-xl border border-stone-200/80 bg-stone-100">
              <Image
                src="/images/therapy_session.jpg"
                alt="Consulta cálida y confidencial con la Dra. Sofía"
                fill
                sizes="(max-width: 1024px) 100vw, 380px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
