"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function MethodAccordion() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "/001",
      title: "Tu elección y tu ritmo vienen primero",
      description:
        "Nos movemos al compás que sea cómodo y seguro para ti, asegurando que cada conversación permanezca libre de presiones y juicios.",
    },
    {
      number: "/002",
      title: "Herramientas prácticas para momentos cotidianos",
      description:
        "Ejercicios semanales, fichas de autorregulación y técnicas somáticas que puedes aplicar en tu trabajo, tu hogar y tus relaciones.",
    },
    {
      number: "/003",
      title: "Respeto absoluto por tu privacidad y límites",
      description:
        "Un espacio de estricta confidencialidad médica donde tú marcas la pauta sobre qué temas estás listo/a para explorar.",
    },
    {
      number: "/004",
      title: "Un espacio sereno para ser honesto/a",
      description:
        "La oportunidad de quitarte la máscara de «tener que poder con todo» y expresar tus dudas, miedos y emociones con libertad.",
    },
  ];

  return (
    <section id="metodologia" className="w-full py-16 sm:py-24 bg-[#FBF9F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[10px] font-semibold tracking-widest uppercase text-stone-700 bg-stone-100 border border-stone-200/80 mb-4">
            <span className="text-[9px]">♥</span>
            <span>CÓMO NOS ACERCAMOS A TI</span>
            <span className="text-[9px]">♥</span>
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-[2.6rem] font-normal sm:font-medium tracking-tight text-stone-900 leading-[1.15]">
            Priorizamos tu seguridad emocional, comunicación clara y libre elección
          </h2>
        </div>

        {/* 2 Columns: Accordion Left + Photo Right (Exact Vellura Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Numbered Accordion */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            {steps.map((step, idx) => {
              const isOpen = activeStep === idx;

              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className={`rounded-2xl transition-all duration-300 p-5 cursor-pointer border ${
                    isOpen
                      ? "bg-[#1E363F] text-white border-[#1E363F] shadow-xl shadow-[#1E363F]/15"
                      : "bg-white text-stone-800 border-stone-200 hover:border-stone-300 shadow-2xs"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span
                        className={`text-xs font-mono font-medium ${
                          isOpen ? "text-stone-300" : "text-stone-400"
                        }`}
                      >
                        {step.number}
                      </span>
                      <h3
                        className={`font-sans text-sm sm:text-base font-normal sm:font-medium tracking-tight ${
                          isOpen ? "text-white" : "text-stone-900"
                        }`}
                      >
                        {step.title}
                      </h3>
                    </div>

                    <div className="shrink-0 text-stone-400">
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-white" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-stone-400" />
                      )}
                    </div>
                  </div>

                  {isOpen && (
                    <div className="pt-3 mt-2 border-t border-white/10 animate-in fade-in duration-200">
                      <p className="text-xs sm:text-sm text-stone-300 font-normal leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: Rounded Portrait Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[360px] aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-xl border border-stone-200/80 bg-stone-100">
              <Image
                src="/images/mindful_balance.jpg"
                alt="Espacio de calma y bienestar"
                fill
                sizes="(max-width: 1024px) 100vw, 360px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
