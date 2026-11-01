"use client";

import React, { useState } from "react";
import { Check, ArrowUpRight } from "lucide-react";

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState<"mensual" | "individual">("mensual");

  const plans = [
    {
      name: "Sesión Inicial",
      badge: "Primer Paso",
      subtitle: "Una sesión individual para evaluar tu motivo de consulta y trazar un plan.",
      price: activeTab === "mensual" ? "$45" : "$50",
      period: "sesión",
      isPopular: false,
      features: [
        "Evaluación clínica integral de 60 minutos",
        "Mapeo de detonantes de ansiedad y apego",
        "Primera herramienta de autorregulación",
        "Plan terapéutico personalizado",
      ],
      buttonText: "Agendar Sesión",
    },
    {
      name: "Acompañamiento Integral",
      badge: "Cuidado Continuo",
      popularBadge: "Más Elegido",
      subtitle: "Atención profunda y constante para desarticular patrones de raíz.",
      price: activeTab === "mensual" ? "$150" : "$180",
      period: "mes",
      isPopular: true,
      features: [
        "4 sesiones individuales al mes (1 por semana)",
        "Fichas y ejercicios prácticos semanales",
        "Acompañamiento puntual por WhatsApp",
        "Seguimiento somático y cognitivo",
      ],
      buttonText: "Comenzar Proceso",
    },
    {
      name: "Terapia de Pareja",
      badge: "Para Vínculos",
      subtitle: "Espacio neutral y facilitado para sanar dinámicas relacionales.",
      price: activeTab === "mensual" ? "$70" : "$85",
      period: "sesión",
      isPopular: false,
      features: [
        "Sesión compartida de 75 minutos",
        "Detección del ciclo negativo de discusión",
        "Herramientas de comunicación asertiva",
        "Dinámicas de reconexión íntima",
      ],
      buttonText: "Agendar Pareja",
    },
  ];

  return (
    <section id="inversion" className="w-full py-16 sm:py-24 bg-[#FBF9F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header matching Vellura */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[10px] font-semibold tracking-widest uppercase text-stone-700 bg-stone-100 border border-stone-200/80 mb-3">
            <span className="text-[9px]">♥</span>
            <span>OPCIONES DE ATENCIÓN FLEXIBLE</span>
            <span className="text-[9px]">♥</span>
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl font-normal sm:font-medium tracking-tight text-stone-900 leading-snug">
            Inversión simple y transparente
          </h2>

          {/* Toggle pill matching Vellura's "Most Chosen / Flexible" */}
          <div className="mt-6 inline-flex p-1 rounded-full bg-stone-100 border border-stone-200">
            <button
              onClick={() => setActiveTab("mensual")}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                activeTab === "mensual"
                  ? "bg-[#1E363F] text-white shadow-xs"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              Planes Mensuales (Ahorro)
            </button>
            <button
              onClick={() => setActiveTab("individual")}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                activeTab === "individual"
                  ? "bg-[#1E363F] text-white shadow-xs"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              Sesiones Individuales
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid matching Vellura */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`bg-white rounded-3xl p-6 sm:p-7 border flex flex-col justify-between transition-all duration-300 ${
                p.isPopular
                  ? "border-stone-400 shadow-lg relative ring-1 ring-stone-300"
                  : "border-stone-200/90 shadow-2xs hover:border-stone-300"
              }`}
            >
              <div>
                {/* Header tags */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-stone-500 bg-stone-100 px-2.5 py-1 rounded-full">
                    {p.badge}
                  </span>
                  {p.popularBadge && (
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#1E363F] bg-teal-50 border border-teal-200/60 px-2.5 py-0.5 rounded-full">
                      {p.popularBadge}
                    </span>
                  )}
                </div>

                <h3 className="font-sans font-medium text-stone-900 text-lg mb-1 tracking-tight">
                  {p.name}
                </h3>
                <p className="text-xs text-stone-400 font-normal leading-relaxed mb-5">
                  {p.subtitle}
                </p>

                {/* Price */}
                <div className="mb-6 pb-5 border-b border-stone-100 flex items-baseline gap-1">
                  <span className="font-sans text-3xl sm:text-4xl font-normal text-stone-900 tracking-tight">
                    {p.price}
                  </span>
                  <span className="text-xs text-stone-400 font-normal">
                    /{p.period}
                  </span>
                </div>

                {/* Features checklist */}
                <ul className="space-y-2.5 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-xs text-stone-600 font-normal">
                      <span className="w-4 h-4 rounded-full bg-stone-100 text-stone-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" />
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Button matching Vellura */}
              <a
                href={`https://wa.me/?text=Hola%20Dra.%20Sofía,%20quisiera%20agendar%20información%20para%20el%20plan:%20${encodeURIComponent(
                  p.name
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 rounded-full text-xs font-medium flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer ${
                  p.isPopular
                    ? "bg-[#1E363F] hover:bg-[#15252C] text-white shadow-sm"
                    : "bg-stone-100 hover:bg-stone-200 text-stone-800"
                }`}
              >
                <span>{p.buttonText}</span>
                <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center">
                  <ArrowUpRight className="w-2.5 h-2.5" />
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
