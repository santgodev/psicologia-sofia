"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "¿Cómo sé si lo que tengo es ansiedad o dependencia emocional?",
      a: "Suelen retroalimentarse. La dependencia emocional suele detonar una ansiedad muy específica (angustia física cuando la otra persona tarda en responder, miedo visceral al abandono, hipervigilancia). En la primera sesión mapeamos tus disparadores para identificar con precisión de dónde nace tu malestar.",
    },
    {
      q: "¿Cómo es exactamente la primera sesión? No sé por dónde empezar.",
      a: "No necesitas llevar un discurso preparado ni tener todo claro. Mi trabajo es guiarte con preguntas suaves y darte un espacio sin prisas. Hablamos de lo que más te pesa hoy y te vas con claridad sobre los siguientes pasos.",
    },
    {
      q: "¿Qué tan efectivas son las sesiones de terapia 100% online?",
      a: "Totalmente efectivas. La evidencia clínica avalada por la Asociación Americana de Psicología demuestra plena eficacia en procesos de psicoterapia individual online, con la ventaja de que estás en la comodidad de tu espacio seguro y practicas las herramientas en tu entorno cotidiano.",
    },
    {
      q: "¿Cómo recibo y practico los ejercicios semanales?",
      a: "Al finalizar cada sesión, seleccionamos juntos 1 o 2 herramientas prácticas acordes a lo trabajado (un ejercicio somático de respiración, una ficha de reestructuración de pensamientos o una pauta vincular). Te las comparto en formato digital limpio y visual para que las integres a tu ritmo.",
    },
    {
      q: "¿Qué pasa si lloro o me bloqueo durante la sesión?",
      a: "Las emociones no se apresuran ni se juzgan en consulta. Llorar es una respuesta somática natural de descompresión del sistema nervioso. Es un espacio creado precisamente para que no tengas que fingir que puedes con todo.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="w-full py-16 sm:py-24 bg-[#FBF9F5]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[10px] font-semibold tracking-widest uppercase text-stone-700 bg-stone-100 border border-stone-200/80 mb-3">
            <span className="text-[9px]">♥</span>
            <span>PREGUNTAS FRECUENTES</span>
            <span className="text-[9px]">♥</span>
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl font-normal sm:font-medium tracking-tight text-stone-900 leading-snug">
            Despejando dudas antes de comenzar
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={faq.q}
                onClick={() => toggle(idx)}
                className={`rounded-2xl border transition-all duration-200 p-5 cursor-pointer ${
                  isOpen
                    ? "bg-white border-stone-300 shadow-sm"
                    : "bg-white/80 border-stone-200 hover:border-stone-300 shadow-2xs"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-sans font-medium text-sm sm:text-base text-stone-900 leading-snug">
                    {faq.q}
                  </h3>
                  <div className="text-stone-400 shrink-0">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-stone-700" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </div>

                {isOpen && (
                  <p className="mt-3 pt-3 border-t border-stone-100 text-xs sm:text-sm text-stone-600 leading-relaxed font-normal animate-in fade-in duration-200">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
