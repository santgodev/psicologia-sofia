"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      tag: "Apoyo Emocional",
      quote:
        "El espacio fue increíblemente calmado y respetuoso. No sentí ninguna presión por compartir nada para lo que no estuviera lista, y salí con técnicas prácticas reales que aplico en mi día a día cuando me gana la sobrepensadera.",
      author: "Camila R.",
      role: "Diseñadora de Marca",
      initials: "CR",
    },
    {
      tag: "Dependencia & Apego",
      quote:
        "Mi tranquilidad dependía de que me respondieran un mensaje al minuto. Con las fichas semanales aprendí a sostener mi propia calma y dejar de mendigar validación. Fue un antes y un después en mi autoestima.",
      author: "Mateo G.",
      role: "Ingeniero de Software",
      initials: "MG",
    },
    {
      tag: "Vínculos de Pareja",
      quote:
        "Siempre callaba para evitar conflictos hasta que terminaba explotando. El trabajo con la Dra. Sofía me devolvió mi voz sin necesidad de atacar ni de sentir culpa por poner límites sanos.",
      author: "Valeria M.",
      role: "Docente Universitaria",
      initials: "VM",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonios" className="w-full py-16 sm:py-24 bg-[#FBF9F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Navigation Arrows matching Vellura */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[10px] font-semibold tracking-widest uppercase text-stone-700 bg-stone-100 border border-stone-200/80 mb-3">
              <span className="text-[9px]">♥</span>
              <span>TESTIMONIOS</span>
              <span className="text-[9px]">♥</span>
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl font-normal sm:font-medium tracking-tight text-stone-900 leading-snug">
              Palabras de nuestros pacientes
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-stone-400 font-normal">
              Reflexiones sinceras sobre lo que se siente ser acompañado con calma, respeto y sin presiones.
            </p>
          </div>

          {/* Clean Circular Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="w-9 h-9 rounded-full border border-stone-300 bg-white hover:bg-stone-50 text-stone-700 flex items-center justify-center transition-all shadow-2xs cursor-pointer active:scale-95"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              className="w-9 h-9 rounded-full border border-[#1E363F] bg-[#1E363F] text-white flex items-center justify-center transition-all shadow-2xs cursor-pointer active:scale-95"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Clean Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={t.author}
              className={`bg-white rounded-3xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between ${
                idx === currentIndex
                  ? "border-stone-400/80 shadow-md"
                  : "border-stone-200/90 shadow-2xs hover:border-stone-300"
              }`}
            >
              <div>
                {/* Quotation mark & Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-serif text-stone-400 font-bold leading-none select-none">
                    “
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-stone-500 bg-stone-100 px-2.5 py-1 rounded-full">
                    {t.tag}
                  </span>
                </div>

                <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed font-normal mb-6">
                  {t.quote}
                </p>
              </div>

              {/* Author Row */}
              <div className="pt-4 border-t border-stone-100 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-stone-100 text-stone-700 font-medium text-xs flex items-center justify-center shrink-0">
                  {t.initials}
                </div>
                <div>
                  <h3 className="font-sans font-medium text-stone-900 text-xs">
                    {t.author}
                  </h3>
                  <p className="text-[11px] text-stone-400 font-normal">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
