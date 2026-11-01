"use client";

import React, { useState, useEffect } from "react";
import {
  Wind,
  FileText,
  HeartHandshake,
  Activity,
  Play,
  Pause,
  RotateCcw,
  Check,
} from "lucide-react";

export default function WeeklyToolsPinterest() {
  const [activeTab, setActiveTab] = useState<"respiracion" | "reestructuracion" | "dependencia" | "somatica">("respiracion");

  // --- 1. Breathing Exercise (4-7-8 Somatic) ---
  const [breathingActive, setBreathingActive] = useState(false);
  const [breathPhase, setBreathPhase] = useState<"Inhala por la nariz" | "Sostén con calma" | "Exhala suave por la boca">("Inhala por la nariz");
  const [breathSeconds, setBreathSeconds] = useState(4);
  const [breathCycles, setBreathCycles] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (breathingActive) {
      timer = setInterval(() => {
        setBreathSeconds((prev) => {
          if (prev <= 1) {
            if (breathPhase === "Inhala por la nariz") {
              setBreathPhase("Sostén con calma");
              return 7;
            } else if (breathPhase === "Sostén con calma") {
              setBreathPhase("Exhala suave por la boca");
              return 8;
            } else {
              setBreathPhase("Inhala por la nariz");
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

  const resetBreathing = () => {
    setBreathingActive(false);
    setBreathPhase("Inhala por la nariz");
    setBreathSeconds(4);
  };

  // --- 2. Cognitive Reframing Cards ---
  const [activeScenario, setActiveScenario] = useState(0);
  const scenarios = [
    {
      category: "Dependencia & Mensajes",
      trigger: "Tarda horas en responder a un mensaje de texto.",
      intrusive: "«Seguro ya no le intereso, hice algo mal o me va a dejar.»",
      evidence: "Las personas tienen días ocupados y ritmos distintos. Tu valor no fluctúa según el tiempo de respuesta de otra persona.",
      healthyAction: "Deja el teléfono en otra habitación por 30 minutos y haz una actividad que te nutra solo a ti.",
    },
    {
      category: "Ansiedad & Anticipación",
      trigger: "Pensamiento recurrente sobre un evento de la próxima semana.",
      intrusive: "«Todo va a salir mal y voy a hacer el ridículo frente a todos.»",
      evidence: "El sobrepensamiento no es intuición, es un mecanismo de alerta sobreactivado. Ya has atravesado retos antes.",
      healthyAction: "Anota los 3 hechos concretos que sí puedes gestionar hoy y suelta las 20 hipótesis que no han ocurrido.",
    },
    {
      category: "Límites & Relaciones",
      trigger: "Decir «no» a un compromiso que te agota.",
      intrusive: "«Si digo que no, soy egoísta y la otra persona se enojará conmigo.»",
      evidence: "Poner un límite no es agredir; es proteger el vínculo para no acumular resentimiento en silencio.",
      healthyAction: "Frase de apoyo: «Gracias por pensar en mí, esta vez no podré sumarme pero te aprecio mucho».",
    },
  ];

  // --- 3. Emotional Dependency Thermometer ---
  const [selectedBehavior, setSelectedBehavior] = useState<number | null>(0);
  const behaviors = [
    {
      title: "Buscar validación inmediata tras un desacuerdo",
      reactive: "Bombardear con mensajes o llamadas para calmar la angustia del abandono.",
      regulated: "Dar un respiro de 2 horas. Calmar primero tu propio sistema nervioso antes de reiniciar la conversación.",
      tag: "Regulación Vincular",
    },
    {
      title: "Cancelar tus propios planes para acomodarte siempre a la otra persona",
      reactive: "Postergar amistades, trabajo o proyectos por miedo a generar distancia.",
      regulated: "Sostener tu propio espacio vital. Una relación sana celebra tu individualidad, no exige tu renuncia.",
      tag: "Espacio Propio",
    },
    {
      title: "Interpretar cualquier cambio de tono como una señal de ruptura",
      reactive: "Entrar en modo hipervigilancia y pedir reafirmaciones constantes de afecto.",
      regulated: "Recordar: el cansancio o el estrés laboral de tu pareja no siempre tienen que ver contigo.",
      tag: "Diferenciación Emocional",
    },
  ];

  // --- 4. Somatic Scan Checkpoints ---
  const [checkedPoints, setCheckedPoints] = useState<number[]>([0]);
  const somaticPoints = [
    { title: "Mandíbula y Rostro", action: "Separa los dientes suavemente y pasa la lengua por el paladar para soltar la mandíbula." },
    { title: "Hombros y Trapecios", action: "Inhala subiéndolos a las orejas y suéltalos de golpe con un suspiro audible." },
    { title: "Diafragma y Abdomen", action: "Afloja el estómago; permite que el vientre se expanda suavemente al tomar aire." },
    { title: "Plantas de los Pies", action: "Siente el peso de la gravedad sosteniéndote. No tienes que sostener todo tú solo/a." },
  ];

  const togglePoint = (idx: number) => {
    setCheckedPoints((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <section id="ejercicios-semanales" className="w-full py-16 sm:py-24 bg-[#FBF9F5] border-t border-stone-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[10px] font-semibold tracking-widest uppercase text-stone-700 bg-stone-100 border border-stone-200/80 mb-3">
            <span className="text-[9px]">♥</span>
            <span>HERRAMIENTAS Y EJERCICIOS SEMANALES</span>
            <span className="text-[9px]">♥</span>
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl font-normal sm:font-medium tracking-tight text-stone-900 leading-snug">
            Lo que trabajamos no se queda en la consulta
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-stone-500 font-normal leading-relaxed">
            Entre sesión y sesión, recibes fichas prácticas y ejercicios de autorregulación. Puedes interactuar con algunos ejemplos a continuación:
          </p>
        </div>

        {/* Minimalist Pill Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveTab("respiracion")}
            className={`px-4 sm:px-5 py-2 rounded-full text-xs font-medium transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === "respiracion"
                ? "bg-[#1E363F] text-white shadow-xs"
                : "bg-white text-stone-600 hover:text-stone-900 border border-stone-200"
            }`}
          >
            <Wind className="w-3.5 h-3.5" />
            <span>Respiración Somática 4-7-8</span>
          </button>

          <button
            onClick={() => setActiveTab("reestructuracion")}
            className={`px-4 sm:px-5 py-2 rounded-full text-xs font-medium transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === "reestructuracion"
                ? "bg-[#1E363F] text-white shadow-xs"
                : "bg-white text-stone-600 hover:text-stone-900 border border-stone-200"
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Ficha de Reestructuración TCC</span>
          </button>

          <button
            onClick={() => setActiveTab("dependencia")}
            className={`px-4 sm:px-5 py-2 rounded-full text-xs font-medium transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === "dependencia"
                ? "bg-[#1E363F] text-white shadow-xs"
                : "bg-white text-stone-600 hover:text-stone-900 border border-stone-200"
            }`}
          >
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Diferenciación Vincular</span>
          </button>

          <button
            onClick={() => setActiveTab("somatica")}
            className={`px-4 sm:px-5 py-2 rounded-full text-xs font-medium transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === "somatica"
                ? "bg-[#1E363F] text-white shadow-xs"
                : "bg-white text-stone-600 hover:text-stone-900 border border-stone-200"
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>Escaneo de Tensión</span>
          </button>
        </div>

        {/* Tab 1: Somatic Breathing */}
        {activeTab === "respiracion" && (
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 max-w-2xl mx-auto flex flex-col items-center text-center shadow-2xs animate-in fade-in duration-200">
            <span className="text-[10px] uppercase tracking-widest font-semibold text-stone-400 mb-2">
              Regulación del Nervio Vago
            </span>
            <h3 className="font-sans font-medium text-stone-900 text-lg sm:text-xl mb-1">
              Respiración 4-7-8 para Picos de Ansiedad
            </h3>
            <p className="text-xs text-stone-500 max-w-md mb-8">
              Desacelera el ritmo cardíaco y comunica seguridad directa a tu cuerpo en menos de 2 minutos.
            </p>

            {/* Clean Breathing Orb */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center my-2">
              <div
                className={`absolute inset-0 rounded-full transition-all duration-1000 ${
                  breathingActive
                    ? breathPhase.includes("Inhala")
                      ? "scale-105 bg-[#2A4B56]/10 ring-4 ring-[#2A4B56]/20"
                      : breathPhase.includes("Sostén")
                      ? "scale-100 bg-[#2A4B56]/15 ring-4 ring-[#2A4B56]/30"
                      : "scale-85 bg-stone-100 ring-2 ring-stone-200"
                    : "scale-90 bg-stone-100"
                }`}
              />

              <div className="relative z-10 w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-[#1E363F] text-white flex flex-col items-center justify-center shadow-lg p-3">
                <span className="text-3xl sm:text-4xl font-sans font-light tracking-tight">
                  {breathingActive ? breathSeconds : "4-7-8"}
                </span>
                <span className="text-[11px] font-normal text-stone-300 mt-1">
                  {breathingActive ? breathPhase : "Listo para iniciar"}
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-3 mt-6">
              {!breathingActive ? (
                <button
                  onClick={() => setBreathingActive(true)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#1E363F] hover:bg-[#15252C] text-white font-medium text-xs shadow-xs transition-all cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span>Iniciar Ejercicio</span>
                </button>
              ) : (
                <button
                  onClick={() => setBreathingActive(false)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-stone-800 text-white font-medium text-xs shadow-xs transition-all cursor-pointer"
                >
                  <Pause className="w-3.5 h-3.5 fill-white" />
                  <span>Pausar</span>
                </button>
              )}

              <button
                onClick={resetBreathing}
                className="p-2.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 transition-colors cursor-pointer"
                title="Reiniciar"
                aria-label="Reiniciar respiración"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Tab 2: Cognitive Reframing */}
        {activeTab === "reestructuracion" && (
          <div className="max-w-3xl mx-auto animate-in fade-in duration-200">
            <div className="flex flex-wrap gap-2 justify-center mb-6">
              {scenarios.map((s, idx) => (
                <button
                  key={s.category}
                  onClick={() => setActiveScenario(idx)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                    activeScenario === idx
                      ? "bg-[#1E363F] text-white"
                      : "bg-white text-stone-600 hover:text-stone-900 border border-stone-200"
                  }`}
                >
                  {s.category}
                </button>
              ))}
            </div>

            <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-2xs">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-stone-100 text-[10px] font-semibold text-stone-400 uppercase tracking-widest">
                <span>Ficha Semanal · Terapia Cognitiva</span>
                <span className="text-stone-600 bg-stone-100 px-2.5 py-0.5 rounded-full">
                  {scenarios[activeScenario].category}
                </span>
              </div>

              <div className="mb-5">
                <span className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider block mb-1">
                  1. Detonante Real
                </span>
                <p className="text-sm font-medium text-stone-900 bg-stone-50 p-3 rounded-xl border border-stone-100">
                  {scenarios[activeScenario].trigger}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/70">
                  <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider block mb-1">
                    2. Pensamiento Intrusivo (Alerta)
                  </span>
                  <p className="text-xs text-stone-700 leading-relaxed">
                    {scenarios[activeScenario].intrusive}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#2A4B56]/5 border border-[#2A4B56]/20">
                  <span className="text-[10px] font-bold text-[#2A4B56] uppercase tracking-wider block mb-1">
                    3. Hechos & Evidencia Objetiva
                  </span>
                  <p className="text-xs text-stone-700 leading-relaxed">
                    {scenarios[activeScenario].evidence}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#1E363F] text-white">
                <span className="text-[10px] font-bold text-stone-300 uppercase tracking-wider block mb-1">
                  4. Micro-Acción de Autorregulación
                </span>
                <p className="text-xs text-stone-200 leading-relaxed">
                  {scenarios[activeScenario].healthyAction}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Attachment Guide */}
        {activeTab === "dependencia" && (
          <div className="max-w-3xl mx-auto space-y-3 animate-in fade-in duration-200">
            {behaviors.map((b, idx) => {
              const isSelected = selectedBehavior === idx;
              return (
                <div
                  key={b.title}
                  onClick={() => setSelectedBehavior(idx)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? "bg-white border-stone-400 shadow-sm"
                      : "bg-white/70 border-stone-200 hover:border-stone-300"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <h4 className="font-sans font-medium text-stone-900 text-sm">
                      {b.title}
                    </h4>
                    <span className="text-[10px] font-semibold text-stone-500 bg-stone-100 px-2 py-0.5 rounded-full shrink-0">
                      {b.tag}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 text-xs">
                    <div className="p-3 rounded-xl bg-stone-50 text-stone-600 border border-stone-100">
                      <span className="text-[10px] font-bold text-stone-500 block mb-0.5">
                        ✕ Reacción impulsiva (miedo):
                      </span>
                      {b.reactive}
                    </div>

                    <div className="p-3 rounded-xl bg-[#2A4B56]/5 text-stone-800 border border-[#2A4B56]/15">
                      <span className="text-[10px] font-bold text-[#2A4B56] block mb-0.5">
                        ✓ Respuesta desde tu paz:
                      </span>
                      {b.regulated}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 4: Somatic Scan */}
        {activeTab === "somatica" && (
          <div className="max-w-xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-2xs text-left animate-in fade-in duration-200">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-stone-100">
              <h4 className="font-sans font-medium text-stone-900 text-sm sm:text-base">
                Checklist Somático de Descompresión
              </h4>
              <span className="text-[11px] text-stone-400 font-medium">
                {checkedPoints.length} de {somaticPoints.length} liberados
              </span>
            </div>

            <div className="space-y-2.5">
              {somaticPoints.map((pt, idx) => {
                const isChecked = checkedPoints.includes(idx);
                return (
                  <div
                    key={pt.title}
                    onClick={() => togglePoint(idx)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                      isChecked
                        ? "bg-[#2A4B56]/5 border-[#2A4B56]/30 text-stone-900"
                        : "bg-stone-50/70 border-stone-200 text-stone-600 hover:bg-stone-50"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                        isChecked
                          ? "bg-[#1E363F] text-white"
                          : "border border-stone-300 bg-white"
                      }`}
                    >
                      {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                    <div>
                      <p className="text-xs font-medium text-stone-900">
                        {pt.title}
                      </p>
                      <p className="text-[11px] text-stone-500 mt-0.5">
                        {pt.action}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
