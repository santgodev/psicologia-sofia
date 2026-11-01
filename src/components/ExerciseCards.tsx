"use client";

import React, { useState, useEffect } from "react";
import {
  Wind,
  Sparkles,
  HeartHandshake,
  Play,
  RotateCcw,
  Check,
  ChevronRight,
  ArrowRight,
  Clock,
  Feather,
} from "lucide-react";

export default function ExerciseCards() {
  // Exercise 1: 4-7-8 Breathing state
  const [breathingActive, setBreathingActive] = useState(false);
  const [breathPhase, setBreathPhase] = useState<"Inhala" | "Sostén" | "Exhala">("Inhala");
  const [breathSeconds, setBreathSeconds] = useState(4);
  const [breathCycles, setBreathCycles] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (breathingActive) {
      timer = setInterval(() => {
        setBreathSeconds((prev) => {
          if (prev <= 1) {
            if (breathPhase === "Inhala") {
              setBreathPhase("Sostén");
              return 7;
            } else if (breathPhase === "Sostén") {
              setBreathPhase("Exhala");
              return 8;
            } else {
              setBreathPhase("Inhala");
              setBreathCycles((c) => c + 1);
              return 4;
            }
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [breathingActive, breathPhase]);

  // Exercise 2: Body Scan checkpoints
  const [checkedZones, setCheckedZones] = useState<number[]>([]);
  const bodyZones = [
    { title: "Frente y Mandíbula", hint: "Relaja el entrecejo y separa ligeramente los dientes." },
    { title: "Cuello y Trapecios", hint: "Baja los hombros suavemente, lejos de las orejas." },
    { title: "Pecho y Respiración", hint: "Permite que el pecho se expanda sin forzar la entrada de aire." },
    { title: "Zona Lumbar y Abdomen", hint: "Suelta la contracción del estómago y siente el apoyo de la silla." },
    { title: "Piernas y Apoyo en el Suelo", hint: "Siente el contacto firme de tus plantas sobre la tierra." },
  ];

  const toggleZone = (index: number) => {
    setCheckedZones((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  // Exercise 3: Cognitive Reframing
  const [selectedThoughtIndex, setSelectedThoughtIndex] = useState(0);
  const reframingExamples = [
    {
      category: "Perfeccionismo y Exigencia",
      automatic: "«Si no sale perfecto a la primera, no vale la pena o habré fallado.»",
      reframed: "«El aprendizaje es un proceso iterativo. Hacerlo lo mejor posible hoy ya es un gran avance.»",
      action: "Permítete cometer pequeños errores como parte natural del crecimiento.",
    },
    {
      category: "Sobrecarga y Ansiedad",
      automatic: "«Tengo demasiadas cosas pendientes y no voy a poder con todo.»",
      reframed: "«No necesito resolverlo todo al mismo tiempo. Voy a concentrarme en un solo paso ahora mismo.»",
      action: "Elige una sola tarea pequeña para los próximos 15 minutos y suelta el resto.",
    },
    {
      category: "Autocrítica",
      automatic: "«Otros van mucho más rápido o lo hacen mejor que yo.»",
      reframed: "«Cada persona tiene su ritmo y su propio camino. Compararme sólo me desconecta de mi presente.»",
      action: "Reconoce un logro propio de esta semana, por pequeño que parezca.",
    },
  ];

  return (
    <section id="ejercicios" className="w-full max-w-6xl mx-auto py-16 px-4 sm:px-6">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100/70 text-emerald-800 mb-3">
          <Feather className="w-3.5 h-3.5 text-emerald-600" />
          Herramientas de Autorregulación
        </span>
        <h2 className="text-2xl sm:text-3xl font-serif text-stone-800 tracking-tight">
          Tres Ejercicios para Cultivar la Calma
        </h2>
        <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
          Pequeñas prácticas basadas en la evidencia clínica para restaurar el equilibrio
          fisiológico, la presencia somática y la flexibilidad cognitiva.
        </p>
      </div>

      {/* Grid of 3 rounded cards with soft pastel colors */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        
        {/* CARD 1: Soft Sage / Mint (Respiración 4-7-8) */}
        <div className="bg-gradient-to-b from-[#f2f8f4] to-[#e7f1eb] rounded-3xl p-6 sm:p-7 border border-[#d2e5d9] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="p-2.5 rounded-2xl bg-emerald-600/10 text-emerald-800">
                <Wind className="w-5 h-5 text-emerald-700" />
              </span>
              <span className="flex items-center gap-1 text-[11px] font-medium text-emerald-800/80 bg-white/70 px-2.5 py-1 rounded-full border border-emerald-200/50">
                <Clock className="w-3 h-3 text-emerald-600" />
                3 - 5 min
              </span>
            </div>

            <h3 className="text-lg font-serif font-semibold text-stone-800 mb-2">
              Respiración 4-7-8
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed mb-6">
              Regula el nervio vago y disminuye la activación simpática. Inhala en 4s, sostén en 7s y exhala suavemente en 8s.
            </p>

            {/* Interactive Breathing Bubble */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-emerald-200/50 flex flex-col items-center justify-center text-center">
              <div
                className={`relative w-28 h-28 rounded-full flex flex-col items-center justify-center transition-all duration-1000 ${
                  breathingActive
                    ? breathPhase === "Inhala"
                      ? "scale-110 bg-emerald-200/70 shadow-lg shadow-emerald-200"
                      : breathPhase === "Sostén"
                      ? "scale-105 bg-amber-200/60"
                      : "scale-90 bg-teal-100/70"
                    : "bg-emerald-100/50"
                }`}
              >
                <span className="text-xs font-semibold text-emerald-900 tracking-wider uppercase">
                  {breathingActive ? breathPhase : "Listo"}
                </span>
                <span className="text-2xl font-bold text-stone-800">
                  {breathingActive ? `${breathSeconds}s` : "4-7-8"}
                </span>
                {breathingActive && (
                  <span className="text-[10px] text-stone-500">
                    Ciclo: {breathCycles + 1}
                  </span>
                )}
              </div>

              <div className="mt-4 flex gap-2">
                <button
                  type="button"
                  onClick={() => {
                    if (breathingActive) {
                      setBreathingActive(false);
                      setBreathPhase("Inhala");
                      setBreathSeconds(4);
                    } else {
                      setBreathingActive(true);
                      setBreathPhase("Inhala");
                      setBreathSeconds(4);
                    }
                  }}
                  className="px-4 py-1.5 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-medium transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
                >
                  {breathingActive ? (
                    <>Pausar</>
                  ) : (
                    <>
                      <Play className="w-3 h-3 fill-current" />
                      Iniciar Guía
                    </>
                  )}
                </button>
                {breathingActive && (
                  <button
                    type="button"
                    onClick={() => {
                      setBreathingActive(false);
                      setBreathPhase("Inhala");
                      setBreathSeconds(4);
                      setBreathCycles(0);
                    }}
                    className="p-1.5 rounded-full bg-stone-100 text-stone-600 hover:bg-stone-200 text-xs"
                    title="Reiniciar"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="mt-6 pt-3 border-t border-emerald-200/50 text-[11px] text-emerald-900/80">
            Consejo: Mantén la lengua tocando suavemente el paladar superior al exhalar.
          </div>
        </div>

        {/* CARD 2: Soft Lavender / Lilac (Escaneo Corporal Consciente) */}
        <div className="bg-gradient-to-b from-[#f5f3fa] to-[#ede9f5] rounded-3xl p-6 sm:p-7 border border-[#ded7ed] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="p-2.5 rounded-2xl bg-purple-600/10 text-purple-800">
                <Sparkles className="w-5 h-5 text-purple-700" />
              </span>
              <span className="flex items-center gap-1 text-[11px] font-medium text-purple-800/80 bg-white/70 px-2.5 py-1 rounded-full border border-purple-200/50">
                <Clock className="w-3 h-3 text-purple-600" />
                5 min
              </span>
            </div>

            <h3 className="text-lg font-serif font-semibold text-stone-800 mb-2">
              Escaneo Corporal Somático
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed mb-4">
              Pasa revista a cada grupo muscular y pulsa sobre ellos al soltar la tensión retenida.
            </p>

            {/* Checklist of body points */}
            <div className="space-y-2">
              {bodyZones.map((zone, idx) => {
                const isChecked = checkedZones.includes(idx);
                return (
                  <button
                    key={zone.title}
                    type="button"
                    onClick={() => toggleZone(idx)}
                    className={`w-full text-left p-2.5 rounded-xl border text-xs transition-all flex items-start justify-between gap-2 cursor-pointer ${
                      isChecked
                        ? "bg-purple-100/80 border-purple-300 text-purple-950 font-medium"
                        : "bg-white/80 border-stone-200/60 text-stone-700 hover:bg-white"
                    }`}
                  >
                    <div>
                      <p className="font-semibold text-xs leading-none mb-1">{zone.title}</p>
                      <p className="text-[11px] text-stone-500 font-normal leading-tight">
                        {zone.hint}
                      </p>
                    </div>
                    <span
                      className={`w-5 h-5 rounded-lg flex items-center justify-center shrink-0 border transition-all ${
                        isChecked
                          ? "bg-purple-600 border-purple-600 text-white"
                          : "border-stone-300 bg-stone-50 text-transparent"
                      }`}
                    >
                      <Check className="w-3 h-3 stroke-[3]" />
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-6 pt-3 border-t border-purple-200/50 flex items-center justify-between text-[11px] text-purple-900/80">
            <span>Progreso: {checkedZones.length} de {bodyZones.length} zonas relajadas</span>
            {checkedZones.length === bodyZones.length && (
              <span className="font-semibold text-purple-700">¡Cuerpo en calma! ✨</span>
            )}
          </div>
        </div>

        {/* CARD 3: Soft Peach / Warm Sand (Reencuadre Cognitivo) */}
        <div className="bg-gradient-to-b from-[#fdf6f0] to-[#f9ede3] rounded-3xl p-6 sm:p-7 border border-[#edd7c4] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="p-2.5 rounded-2xl bg-amber-600/10 text-amber-800">
                <HeartHandshake className="w-5 h-5 text-amber-700" />
              </span>
              <span className="flex items-center gap-1 text-[11px] font-medium text-amber-900/80 bg-white/70 px-2.5 py-1 rounded-full border border-amber-200/50">
                <Clock className="w-3 h-3 text-amber-600" />
                TCC Guiada
              </span>
            </div>

            <h3 className="text-lg font-serif font-semibold text-stone-800 mb-2">
              Reencuadre Cognitivo
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed mb-4">
              Identifica distorsiones cognitivas automáticas y reenfócalas desde la autocompasión y la realidad.
            </p>

            {/* Thought selector pill */}
            <div className="flex gap-1.5 mb-3 overflow-x-auto pb-1">
              {reframingExamples.map((item, idx) => (
                <button
                  key={item.category}
                  type="button"
                  onClick={() => setSelectedThoughtIndex(idx)}
                  className={`px-2.5 py-1 rounded-full text-[10px] font-medium whitespace-nowrap transition-all cursor-pointer ${
                    selectedThoughtIndex === idx
                      ? "bg-amber-700 text-white shadow-sm"
                      : "bg-white/70 text-stone-600 hover:bg-white"
                  }`}
                >
                  Ejemplo {idx + 1}
                </button>
              ))}
            </div>

            {/* Interactive Reframing Card */}
            <div className="bg-white/85 rounded-2xl p-4 border border-amber-200/60 space-y-3">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400">
                  Pensamiento Automático:
                </span>
                <p className="text-xs font-serif text-rose-800/90 italic mt-0.5">
                  {reframingExamples[selectedThoughtIndex].automatic}
                </p>
              </div>

              <div className="pt-2 border-t border-stone-100">
                <span className="text-[10px] uppercase font-bold tracking-wider text-amber-700 flex items-center gap-1">
                  <ArrowRight className="w-3 h-3 text-amber-600" />
                  Perspectiva Reencuadrada:
                </span>
                <p className="text-xs text-stone-800 font-medium mt-0.5">
                  {reframingExamples[selectedThoughtIndex].reframed}
                </p>
              </div>

              <div className="pt-2 border-t border-stone-100">
                <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-700">
                  Paso Práctico:
                </span>
                <p className="text-[11px] text-stone-600 mt-0.5">
                  {reframingExamples[selectedThoughtIndex].action}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-3 border-t border-amber-200/50 text-[11px] text-amber-900/80">
            Pregúntate siempre: <em>«¿Qué le diría a un buen amigo en esta misma situación?»</em>
          </div>
        </div>

      </div>
    </section>
  );
}
