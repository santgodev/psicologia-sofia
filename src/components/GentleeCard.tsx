"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import AnxietySubcards, { MascotVideoCanvas, CategoryKey } from "./AnxietySubcards";

export interface CardConfig {
  id: CategoryKey;
  word: string;
  title: string;
  areaTitle: string;
  description: string;
  videoSrc: string;
  posterSrc: string;
  restTime: number;
  clipRange: [number, number];
  buttonText: string;
  textColor: string;
  textShadow: string;
  bgColor: string;
  borderColor: string;
  tagBg: string;
  tagText: string;
  accentColor: string;
  ringClass: string;
  buttonClass: string;
}

export const MAIN_CARDS_DATA: CardConfig[] = [
  {
    id: "ansiedad",
    word: "ansiedad",
    title: "¿Tu cabeza no tiene pausa?",
    areaTitle: "Ansiedad",
    description: "El día termina. Las vueltas en tu mente, no.",
    videoSrc: "/videos/personalidades/ansiedad/inquietud_suave-1.mp4",
    posterSrc: "/images/mascots/ansiedad-vulnerable.png",
    restTime: 2.55,
    clipRange: [1.95, 3.95],
    buttonText: "Explorar ejercicios",
    textColor: "#92CCFE",
    textShadow: "0 4px 18px rgba(146, 204, 254, 0.4)",
    bgColor: "#FAF5EB",
    borderColor: "#F3E9D5",
    tagBg: "bg-sky-100/70",
    tagText: "text-sky-800",
    accentColor: "#388AEB",
    ringClass:
      "ring-4 ring-offset-4 ring-offset-stone-50 ring-sky-400 shadow-2xl shadow-sky-300/40 scale-[1.025] z-20",
    buttonClass: "bg-sky-500 hover:bg-sky-600 text-white shadow-sky-500/25",
  },
  {
    id: "dependencia",
    word: "dependencia",
    title: "¿Tu tranquilidad depende de un mensaje?",
    areaTitle: "Dependencia emocional",
    description: "Si no responde, empiezas a preguntarte qué hiciste mal.",
    videoSrc: "/videos/personalidades/dependencia_emocional/inseguridad_suave.mp4",
    posterSrc: "/images/mascots/dependencia-vulnerable.png",
    restTime: 2.8,
    clipRange: [1.25, 3.95],
    buttonText: "Explorar ejercicios",
    textColor: "#BFA2EA",
    textShadow: "0 4px 18px rgba(191, 162, 234, 0.4)",
    bgColor: "#F8F5FB",
    borderColor: "#EDE4F5",
    tagBg: "bg-purple-100/70",
    tagText: "text-purple-800",
    accentColor: "#8B5CF6",
    ringClass:
      "ring-4 ring-offset-4 ring-offset-stone-50 ring-purple-400 shadow-2xl shadow-purple-300/40 scale-[1.025] z-20",
    buttonClass: "bg-purple-600 hover:bg-purple-700 text-white shadow-purple-600/25",
  },
  {
    id: "relaciones",
    word: "relaciones",
    title: "¿Callas para no discutir?",
    areaTitle: "Relaciones",
    description: "Dices «no pasa nada», pero se te queda dentro.",
    videoSrc: "/videos/personalidades/relaciones/escucha_interior.mp4",
    posterSrc: "/images/mascots/relaciones-vulnerable.png",
    restTime: 2.2,
    clipRange: [1.45, 2.85],
    buttonText: "Explorar ejercicios",
    textColor: "#F9A48C",
    textShadow: "0 4px 18px rgba(249, 164, 140, 0.4)",
    bgColor: "#FDF5F2",
    borderColor: "#FBE4DD",
    tagBg: "bg-rose-100/70",
    tagText: "text-rose-800",
    accentColor: "#F43F5E",
    ringClass:
      "ring-4 ring-offset-4 ring-offset-stone-50 ring-rose-400 shadow-2xl shadow-rose-300/40 scale-[1.025] z-20",
    buttonClass: "bg-rose-500 hover:bg-rose-600 text-white shadow-rose-500/25",
  },
];

// Single Main Wellbeing Card
function SingleWellbeingCard({
  config,
  isActive,
  onOpenCategory,
  onSelect,
}: {
  config: CardConfig;
  isActive: boolean;
  onOpenCategory: (category: CategoryKey) => void;
  onSelect: () => void;
}) {
  const handleCardClick = () => {
    onSelect();
    onOpenCategory(config.id);
  };

  return (
    <div
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && handleCardClick()}
      title={`Toca para explorar los 3 ejercicios de ${config.word}`}
      style={{
        backgroundColor: config.bgColor,
        borderColor: config.borderColor,
      }}
      className={`relative w-[82vw] max-w-[285px] sm:max-w-[310px] md:max-w-[365px] md:w-full min-h-[395px] sm:min-h-[425px] md:min-h-[465px] shrink-0 snap-center rounded-[2.2rem] md:rounded-[2.8rem] border-4 p-4 pb-5 sm:p-5 sm:pb-6 md:p-6 flex flex-col items-center justify-between overflow-hidden cursor-pointer group transition-all duration-500 select-none ${
        isActive
          ? config.ringClass
          : "shadow-md shadow-stone-200/50 opacity-80 md:opacity-75 scale-[0.98] hover:opacity-95 hover:scale-[1.0] z-10"
      }`}
    >
      {/* Top: Completely STATIC Retro Bubbly Typography (NO ® mark) */}
      <div className="relative z-10 w-full pt-0.5 sm:pt-1 flex flex-col items-center justify-center">
        <div className="relative w-full flex items-center justify-center px-2">
          <h3
            className="font-bubbly text-[1.85rem] sm:text-[2.1rem] md:text-[2.25rem] lg:text-[2.5rem] font-black leading-none tracking-tight text-center select-none"
            style={{
              color: config.textColor,
              textShadow: config.textShadow,
            }}
          >
            {config.word}
          </h3>
        </div>
      </div>

      {/* Center & Foreground: Mascot Video in Transparent Canvas at 1.5x speed */}
      <div className="relative z-20 w-full flex-1 flex flex-col items-center justify-center my-0 sm:-my-2">
        <div className="relative w-full max-w-[240px] sm:max-w-[270px] md:max-w-[320px] aspect-video flex items-center justify-center scale-100 sm:scale-[1.05] md:scale-[1.12] origin-center">
          <MascotVideoCanvas
            videoSrc={config.videoSrc}
            posterSrc={config.posterSrc}
            restTime={config.restTime}
            clipRange={config.clipRange}
            playbackRate={1.1}
            isPlaying={isActive}
            className="w-full h-full object-contain pointer-events-none block"
          />
        </div>
      </div>

      {/* Bottom Information and Peaceful Microcopy */}
      <div className="relative z-20 w-full flex flex-col items-center gap-1 sm:gap-1.5 pt-0.5 sm:pt-1 text-center">
        <h4 className="font-serif text-[0.92rem] sm:text-[1.02rem] font-bold text-stone-800 leading-snug tracking-tight max-w-[280px]">
          {config.title}
        </h4>

        <p className="text-[11px] sm:text-xs text-stone-600/90 leading-relaxed max-w-[270px] font-sans">
          {config.description}
        </p>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onOpenCategory(config.id);
          }}
          className={`inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs font-bold shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer mt-1 ${config.buttonClass}`}
        >
          <span>{config.buttonText}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

export default function GentleeCard() {
  const [activeView, setActiveView] = useState<"all" | CategoryKey>("all");
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  // Sequential cycle: strictly Card 1 (Ansiedad) -> Card 2 (Dependencia) -> Card 3 (Relaciones) -> Card 1
  useEffect(() => {
    if (activeView !== "all") return;

    const timer = setInterval(() => {
      setActiveCardIndex((current) => {
        const next = current === 0 ? 1 : current === 1 ? 2 : 0;
        if (typeof window !== "undefined" && window.innerWidth < 768) {
          const el = cardsContainerRef.current?.children[next] as HTMLElement | undefined;
          el?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
        }
        return next;
      });
    }, 3800);

    return () => clearInterval(timer);
  }, [activeView]);

  const handleOpenCategory = (cat: CategoryKey) => {
    setActiveView(cat);
    const el = document.getElementById("tarjetas-bienestar");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleSelectCard = (index: number) => {
    setActiveCardIndex(index);
    const el = cardsContainerRef.current?.children[index] as HTMLElement | undefined;
    el?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  return (
    <section
      id="tarjetas-bienestar"
      className="w-full max-w-[1240px] mx-auto py-8 px-2 sm:px-4 lg:px-6"
    >
      {/* View Switcher Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
        <button
          onClick={() => setActiveView("all")}
          className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
            activeView === "all"
              ? "bg-stone-800 text-white shadow-md shadow-stone-800/20"
              : "bg-white text-stone-600 hover:bg-stone-100 border border-stone-200"
          }`}
        >
          Colección Principal
        </button>

        <button
          onClick={() => handleOpenCategory("ansiedad")}
          className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
            activeView === "ansiedad"
              ? "bg-sky-500 text-white shadow-md shadow-sky-500/20 ring-2 ring-sky-300"
              : "bg-sky-50 text-sky-800 hover:bg-sky-100 border border-sky-200"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-sky-400" />
          <span>Ansiedad · Azul</span>
        </button>

        <button
          onClick={() => handleOpenCategory("dependencia")}
          className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
            activeView === "dependencia"
              ? "bg-purple-600 text-white shadow-md shadow-purple-600/20 ring-2 ring-purple-300"
              : "bg-purple-50 text-purple-800 hover:bg-purple-100 border border-purple-200"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-purple-400" />
          <span>Dependencia · Lavanda</span>
        </button>

        <button
          onClick={() => handleOpenCategory("relaciones")}
          className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
            activeView === "relaciones"
              ? "bg-rose-500 text-white shadow-md shadow-rose-500/20 ring-2 ring-rose-300"
              : "bg-rose-50 text-rose-800 hover:bg-rose-100 border border-rose-200"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-rose-400" />
          <span>Relaciones · Coral</span>
        </button>
      </div>

      {activeView !== "all" ? (
        <AnxietySubcards
          category={activeView}
          onBack={() => setActiveView("all")}
        />
      ) : (
        <>
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-stone-100 text-stone-700 mb-2">
              Secuencia de Acompañamiento
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-stone-800 tracking-tight">
              Tres Espacios para Escuchar tu Interior
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-stone-600">
              Cada tarjeta se reproduce una a la vez. Toca cualquier tarjeta o
              presiona su botón para explorar sus 3 ejercicios guiados.
            </p>
          </div>

          {/* Cards Container: Horizontal swipeable on mobile, 3-column grid on desktop */}
          <div
            ref={cardsContainerRef}
            className="flex overflow-x-auto md:grid md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-stretch mt-4 md:mt-8 snap-x snap-mandatory scrollbar-none px-4 sm:px-6 md:px-0 -mx-4 sm:-mx-6 md:mx-0 py-7 sm:py-8 md:py-4"
          >
            {MAIN_CARDS_DATA.map((card, idx) => (
              <SingleWellbeingCard
                key={card.id}
                config={card}
                isActive={idx === activeCardIndex}
                onOpenCategory={handleOpenCategory}
                onSelect={() => handleSelectCard(idx)}
              />
            ))}
          </div>

          {/* Mobile carousel indicator dots */}
          <div className="flex flex-col items-center gap-1.5 md:hidden mt-4">
            <div className="flex items-center justify-center gap-2">
              {MAIN_CARDS_DATA.map((card, idx) => (
                <button
                  key={card.id}
                  onClick={() => handleSelectCard(idx)}
                  aria-label={`Ver ${card.word}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === activeCardIndex
                      ? "w-7 bg-stone-800"
                      : "w-2.5 bg-stone-300 hover:bg-stone-400"
                  }`}
                />
              ))}
            </div>
            <span className="text-[10.5px] text-stone-600 font-medium">
              Desliza horizontalmente ↔
            </span>
          </div>
        </>
      )}
    </section>
  );
}
