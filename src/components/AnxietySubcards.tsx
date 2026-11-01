"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Heart,
  Wind,
  Compass,
  Sun,
  Shield,
  MessageSquare,
  Ear,
  CheckCircle2,
  X,
} from "lucide-react";

export type CategoryKey = "ansiedad" | "dependencia" | "relaciones";

export interface SubcardData {
  id: string;
  bubblyWord: string;
  textColor: string;
  textShadow: string;
  videoSrc: string;
  title: string;
  description: string;
  buttonText: string;
  stepChip: string;
  bgColor: string;
  borderColor: string;
  chipBg: string;
  chipText: string;
  buttonClass: string;
  accentColor: string;
}

export interface CategoryInfo {
  id: CategoryKey;
  label: string;
  badge: string;
  title: string;
  subtitle: string;
  themeColor: string;
}

export const CATEGORIES_INFO: Record<CategoryKey, CategoryInfo> = {
  ansiedad: {
    id: "ansiedad",
    label: "Ansiedad · Bolita azul",
    badge: "Ansiedad (3 Prácticas)",
    title: "Tres Caminos para Encontrar Calma",
    subtitle:
      "Herramientas para reconocer lo que sientes, bajar el ritmo y conectar con el presente paso a paso.",
    themeColor: "sky",
  },
  dependencia: {
    id: "dependencia",
    label: "Dependencia emocional · Lavanda",
    badge: "Dependencia Emocional (3 Prácticas)",
    title: "Tres Espacios para Volver a Ti",
    subtitle:
      "Un espacio para escucharte sin juicio, cuidar tus necesidades y fortalecer tu autonomía emocional.",
    themeColor: "purple",
  },
  relaciones: {
    id: "relaciones",
    label: "Relaciones · Coral",
    badge: "Relaciones (3 Prácticas)",
    title: "Tres Vías para Conectar desde el Cuidado",
    subtitle:
      "Ejercicios para reconocer tus emociones, expresar tus necesidades con claridad y cultivar vínculos saludables.",
    themeColor: "rose",
  },
};

export const SUBCARDS_BY_CATEGORY: Record<CategoryKey, SubcardData[]> = {
  ansiedad: [
    {
      id: "inquietud",
      bubblyWord: "inquietud",
      textColor: "#92CCFE",
      textShadow: "0 4px 18px rgba(146, 204, 254, 0.4)",
      videoSrc: "/videos/personalidades/ansiedad/inquietud_suave-1.mp4",
      title: "¿Y si todo sale mal?",
      description: "Tu mente se adelanta. Ordenemos esas preocupaciones.",
      buttonText: "Ordenar mis pensamientos",
      stepChip: "Paso 1 • Reconocimiento",
      bgColor: "#FAF5EB",
      borderColor: "#F3E9D5",
      chipBg: "bg-sky-100/80",
      chipText: "text-sky-800",
      buttonClass: "bg-sky-500 hover:bg-sky-600 text-white shadow-sky-500/25",
      accentColor: "#388AEB",
    },
    {
      id: "respiracion",
      bubblyWord: "respirar",
      textColor: "#92CCFE",
      textShadow: "0 4px 18px rgba(146, 204, 254, 0.4)",
      videoSrc: "/videos/personalidades/ansiedad/repiracion_tranquila-1.mp4",
      title: "Descansas. Pero sigues en alerta.",
      description: "Una pausa para notar tu cuerpo y respirar sin forzar.",
      buttonText: "Hacer una pausa",
      stepChip: "Paso 2 • Respiración Guiada",
      bgColor: "#FAF5EB",
      borderColor: "#F3E9D5",
      chipBg: "bg-sky-100/80",
      chipText: "text-sky-800",
      buttonClass: "bg-sky-500 hover:bg-sky-600 text-white shadow-sky-500/25",
      accentColor: "#388AEB",
    },
    {
      id: "serenidad",
      bubblyWord: "serenidad",
      textColor: "#92CCFE",
      textShadow: "0 4px 18px rgba(146, 204, 254, 0.4)",
      videoSrc: "/videos/personalidades/ansiedad/serenidad-1.mp4",
      title: "Aquí, pensando en mañana.",
      description: "Reconecta con lo que está pasando a tu alrededor.",
      buttonText: "Volver al presente",
      stepChip: "Paso 3 • Anclaje al Presente",
      bgColor: "#FAF5EB",
      borderColor: "#F3E9D5",
      chipBg: "bg-sky-100/80",
      chipText: "text-sky-800",
      buttonClass: "bg-sky-500 hover:bg-sky-600 text-white shadow-sky-500/25",
      accentColor: "#388AEB",
    },
  ],
  dependencia: [
    {
      id: "inseguridad",
      bubblyWord: "escucharte",
      textColor: "#C4A6F0",
      textShadow: "0 4px 18px rgba(196, 166, 240, 0.4)",
      videoSrc: "/videos/personalidades/dependencia_emocional/inseguridad_suave.mp4",
      title: "No responde. ¿Hice algo mal?",
      description: "Un silencio puede llenarse de suposiciones.",
      buttonText: "Explorar lo que siento",
      stepChip: "Paso 1 • Autoobservación",
      bgColor: "#F8F5FB",
      borderColor: "#EDE4F5",
      chipBg: "bg-purple-100/80",
      chipText: "text-purple-800",
      buttonClass: "bg-purple-600 hover:bg-purple-700 text-white shadow-purple-600/25",
      accentColor: "#8B5CF6",
    },
    {
      id: "cuidado_propio",
      bubblyWord: "cuidarte",
      textColor: "#B392E6",
      textShadow: "0 4px 18px rgba(179, 146, 230, 0.4)",
      videoSrc: "/videos/personalidades/dependencia_emocional/cuidado_propio.mp4",
      title: "¿Y tú cómo estás?",
      description:
        "Sabes qué necesita esa persona. Escucha también tus necesidades.",
      buttonText: "Escucharme a mí",
      stepChip: "Paso 2 • Autocuidado",
      bgColor: "#F6F1FA",
      borderColor: "#E7DCF2",
      chipBg: "bg-purple-100/80",
      chipText: "text-purple-800",
      buttonClass: "bg-purple-600 hover:bg-purple-700 text-white shadow-purple-600/25",
      accentColor: "#7C3AED",
    },
    {
      id: "confianza",
      bubblyWord: "tu voz",
      textColor: "#9E75D8",
      textShadow: "0 4px 18px rgba(158, 117, 216, 0.4)",
      videoSrc: "/videos/personalidades/dependencia_emocional/confianza_tranquila.mp4",
      title: "Dices sí. Querías decir no.",
      description: "Tu opinión también merece espacio en el vínculo.",
      buttonText: "Expresar lo que necesito",
      stepChip: "Paso 3 • Autonomía",
      bgColor: "#FAF5FD",
      borderColor: "#EFE3F7",
      chipBg: "bg-purple-100/80",
      chipText: "text-purple-800",
      buttonClass: "bg-purple-700 hover:bg-purple-800 text-white shadow-purple-700/25",
      accentColor: "#6D28D9",
    },
  ],
  relaciones: [
    {
      id: "escucha_interior",
      bubblyWord: "claridad",
      textColor: "#FBA18A",
      textShadow: "0 4px 18px rgba(251, 161, 138, 0.4)",
      videoSrc: "/videos/personalidades/relaciones/escucha_interior.mp4",
      title: "«No pasa nada». Sí pasa.",
      description: "Encuentra palabras para eso que te cuesta decir.",
      buttonText: "Ponerlo en palabras",
      stepChip: "Paso 1 • Claridad Emocional",
      bgColor: "#FDF5F2",
      borderColor: "#FBE4DD",
      chipBg: "bg-rose-100/80",
      chipText: "text-rose-800",
      buttonClass: "bg-rose-500 hover:bg-rose-600 text-white shadow-rose-500/25",
      accentColor: "#F43F5E",
    },
    {
      id: "expresion",
      bubblyWord: "expresión",
      textColor: "#F88A6F",
      textShadow: "0 4px 18px rgba(248, 138, 111, 0.4)",
      videoSrc: "/videos/personalidades/relaciones/expresion_con_confianza.mp4",
      title: "Querías hablar. Terminó en discusión.",
      description: "Prepara una forma clara y respetuosa de expresarte.",
      buttonText: "Preparar la conversación",
      stepChip: "Paso 2 • Expresión Asertiva",
      bgColor: "#FDF3EF",
      borderColor: "#F9DDD4",
      chipBg: "bg-rose-100/80",
      chipText: "text-rose-800",
      buttonClass: "bg-rose-600 hover:bg-rose-700 text-white shadow-rose-600/25",
      accentColor: "#E11D48",
    },
    {
      id: "conexion",
      bubblyWord: "conectar",
      textColor: "#F47250",
      textShadow: "0 4px 18px rgba(244, 114, 80, 0.4)",
      videoSrc: "/videos/personalidades/relaciones/conexion_y_apertura.mp4",
      title: "¿Escuchas o preparas tu defensa?",
      description: "Haz una pausa para comprender antes de responder.",
      buttonText: "Practicar la escucha",
      stepChip: "Paso 3 • Vínculo Consciente",
      bgColor: "#FEF6F3",
      borderColor: "#FBE7E1",
      chipBg: "bg-rose-100/80",
      chipText: "text-rose-800",
      buttonClass: "bg-rose-600 hover:bg-rose-700 text-white shadow-rose-600/25",
      accentColor: "#BE123C",
    },
  ],
};

// Universal High-Definition Canvas Keyer with Anti-Aliased Edge Feathering
export function MascotVideoCanvas({
  videoSrc,
  isPlaying,
  className = "",
  posterSrc,
  filterStyle,
  restTime,
  clipRange,
  playbackRate = 1.5,
  mirror = false,
}: {
  videoSrc: string;
  isPlaying: boolean;
  className?: string;
  posterSrc?: string;
  filterStyle?: string;
  restTime?: number;
  clipRange?: [number, number];
  playbackRate?: number;
  mirror?: boolean;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isPlayingRef = useRef(isPlaying);
  const restTimeRef = useRef(restTime);
  const clipRangeRef = useRef(clipRange);
  const playbackRateRef = useRef(playbackRate);
  const needsFrameDrawRef = useRef(true);
  const [hasDecodedFrame, setHasDecodedFrame] = useState(false);

  useEffect(() => {
    isPlayingRef.current = isPlaying;
    restTimeRef.current = restTime;
    clipRangeRef.current = clipRange;
    playbackRateRef.current = playbackRate;
  }, [isPlaying, restTime, clipRange, playbackRate]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.defaultPlaybackRate = playbackRate;
    video.playbackRate = playbackRate;
    if (isPlaying) {
      if (clipRange && video.readyState >= 1) {
        const [start, end] = clipRange;
        if (video.currentTime < start || video.currentTime >= end) {
          video.currentTime = start;
        }
      }
      video.play().catch(() => {});
    } else {
      video.pause();
      if (restTime !== undefined && video.readyState >= 1) {
        const target = Math.min(restTime, Math.max(0, (video.duration || 4) - 0.08));
        if (Math.abs(video.currentTime - target) > 0.04) {
          video.currentTime = target;
        } else {
          needsFrameDrawRef.current = true;
        }
      }
    }
  }, [isPlaying, restTime, clipRange, playbackRate]);

  useEffect(() => {
    let animId: number;
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (!canvas || !video) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    // 640x360 high-definition resolution (eliminates mobile screen pixelation)
    const width = 640;
    const height = 360;
    canvas.width = width;
    canvas.height = height;

    const total = width * height;
    const queue = new Int32Array(total);
    const visited = new Uint8Array(total);
    const boundary = new Uint8Array(total);
    const boundaryList = new Int32Array(total);
    let renderedOnce = false;

    const render = () => {
      const range = clipRangeRef.current;
      if (isPlayingRef.current && range && video.readyState >= 1) {
        if (video.currentTime >= range[1] || video.currentTime < range[0] - 0.05) {
          video.currentTime = range[0];
        }
      }

      const targetRest = restTimeRef.current;
      const atValidRestFrame =
        targetRest === undefined ||
        isPlayingRef.current ||
        Math.abs(video.currentTime - targetRest) < 0.25;

      if (
        video.readyState >= 2 &&
        atValidRestFrame &&
        (isPlayingRef.current || needsFrameDrawRef.current || !renderedOnce)
      ) {
        if (video.playbackRate !== playbackRateRef.current) {
          video.playbackRate = playbackRateRef.current;
        }

        ctx.clearRect(0, 0, width, height);
        ctx.drawImage(video, 0, 0, width, height);

        try {
          const imgData = ctx.getImageData(0, 0, width, height);
          const d = imgData.data;

          visited.fill(0);
          boundary.fill(0);
          let head = 0;
          let tail = 0;
          let boundaryCount = 0;

          // Seed 4 outer borders for BFS background flood fill
          for (let x = 0; x < width; x++) {
            visited[x] = 1;
            queue[tail++] = x;
            const b = (height - 1) * width + x;
            visited[b] = 1;
            queue[tail++] = b;
          }
          for (let y = 1; y < height - 1; y++) {
            const l = y * width;
            visited[l] = 1;
            queue[tail++] = l;
            const r = y * width + (width - 1);
            visited[r] = 1;
            queue[tail++] = r;
          }

          // Pass 1: BFS flood fill removing outer background and discovering character boundary
          while (head < tail) {
            const p = queue[head++];
            const idx = p * 4;
            d[idx + 3] = 0;

            const px = p % width;
            const py = (p / width) | 0;

            const n1 = px > 0 ? p - 1 : -1;
            const n2 = px < width - 1 ? p + 1 : -1;
            const n3 = py > 0 ? p - width : -1;
            const n4 = py < height - 1 ? p + width : -1;

            const neighbors = [n1, n2, n3, n4];
            for (let i = 0; i < 4; i++) {
              const np = neighbors[i];
              if (np === -1 || visited[np]) continue;

              const nidx = np * 4;
              const nr = d[nidx];
              const ng = d[nidx + 1];
              const nb = d[nidx + 2];
              const nBrightness = (nr + ng + nb) / 3;

              const isDarkBg = nBrightness < 68;
              const isGreenResidue =
                (ng > nr * 1.02 && ng > nb * 1.02 && ng > 45) ||
                (ng > (nr + nb) * 0.62 && ng > 55);

              if (isDarkBg || isGreenResidue) {
                visited[np] = 1;
                queue[tail++] = np;
              } else if (!boundary[np]) {
                boundary[np] = 1;
                boundaryList[boundaryCount++] = np;
              }
            }
          }

          // Pass 2: Anti-Aliased Edge Feathering (removes pixelated stair-steps)
          for (let i = 0; i < boundaryCount; i++) {
            const p = boundaryList[i];
            const idx = p * 4;

            const r = d[idx];
            const g = d[idx + 1];
            const b = d[idx + 2];
            const brightness = (r + g + b) / 3;

            // Preserve solid facial features (eyes, mouth) at 100% opacity
            if (brightness < 65) {
              d[idx + 3] = 255;
              continue;
            }

            const px = p % width;
            const py = (p / width) | 0;

            let bgNeighbors = 0;
            for (let dy = -1; dy <= 1; dy++) {
              const ny = py + dy;
              if (ny < 0 || ny >= height) continue;
              for (let dx = -1; dx <= 1; dx++) {
                const nx = px + dx;
                if (nx < 0 || nx >= width || (dx === 0 && dy === 0)) continue;
                if (visited[ny * width + nx]) bgNeighbors++;
              }
            }

            if (bgNeighbors >= 6) {
              d[idx + 3] = 0;
            } else {
              // Smooth feathered edge
              d[idx + 3] = Math.round(((8 - bgNeighbors) / 8) * 255);

              // Edge despill: completely neutralize green halo on outer border
              const maxEdgeNatural = Math.max(r * 0.9, b * 0.95);
              if (g > maxEdgeNatural) {
                d[idx + 1] = Math.round(maxEdgeNatural);
              }
            }
          }

          // Pass 3: Mascot Interior Despill
          for (let p = 0; p < total; p++) {
            const idx = p * 4;
            if (d[idx + 3] === 0 || boundary[p]) continue;

            const r = d[idx];
            const g = d[idx + 1];
            const b = d[idx + 2];
            const brightness = (r + g + b) / 3;

            if (brightness < 65) {
              d[idx + 3] = 255;
              continue;
            }

            const maxNaturalG = Math.max(r * 0.88, b * 0.94);
            if (g > maxNaturalG) {
              d[idx + 1] = Math.round(maxNaturalG);
            }
          }

          ctx.putImageData(imgData, 0, 0);
          if (total - tail > 500) {
            setHasDecodedFrame(true);
          }
        } catch {
          // If canvas security restriction occurs, clean direct frame remains
        }

        renderedOnce = true;
        needsFrameDrawRef.current = false;
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, [videoSrc]);

  const canvasStyle: React.CSSProperties = {
    ...(filterStyle ? { filter: filterStyle } : {}),
    ...(mirror ? { transform: "scaleX(-1)" } : {}),
  };

  return (
    <span className="relative block w-full h-full">
      {posterSrc && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={posterSrc}
          alt=""
          aria-hidden="true"
          style={mirror ? { transform: "scaleX(-1)" } : undefined}
          className={`${className} transition-opacity duration-200 ${
            hasDecodedFrame ? "opacity-0 absolute inset-0" : "opacity-100"
          }`}
        />
      )}
      <video
        ref={videoRef}
        src={videoSrc}
        muted
        loop
        playsInline
        crossOrigin="anonymous"
        preload="auto"
        onPlay={(e) => {
          e.currentTarget.playbackRate = playbackRateRef.current;
        }}
        onLoadedMetadata={(e) => {
          e.currentTarget.playbackRate = playbackRateRef.current;
        }}
        onLoadedData={(e) => {
          const v = e.currentTarget;
          v.playbackRate = playbackRateRef.current;
          if (!isPlayingRef.current && restTimeRef.current !== undefined) {
            const target = Math.min(restTimeRef.current, Math.max(0, (v.duration || 4) - 0.08));
            v.currentTime = target;
          } else if (isPlayingRef.current && clipRangeRef.current) {
            if (v.currentTime < clipRangeRef.current[0]) {
              v.currentTime = clipRangeRef.current[0];
            }
          }
          needsFrameDrawRef.current = true;
        }}
        onSeeked={() => {
          needsFrameDrawRef.current = true;
        }}
        onRateChange={(e) => {
          if (e.currentTarget.playbackRate !== playbackRateRef.current) {
            e.currentTarget.playbackRate = playbackRateRef.current;
          }
        }}
        onTimeUpdate={(e) => {
          const v = e.currentTarget;
          if (v.playbackRate !== playbackRateRef.current) {
            v.playbackRate = playbackRateRef.current;
          }
          const range = clipRangeRef.current;
          if (isPlayingRef.current && range) {
            if (v.currentTime >= range[1] || v.currentTime < range[0] - 0.05) {
              v.currentTime = range[0];
            }
          }
        }}
        className="fixed -left-[9999px] top-0 w-px h-px opacity-0 pointer-events-none"
      />
      <canvas
        ref={canvasRef}
        style={Object.keys(canvasStyle).length > 0 ? canvasStyle : undefined}
        className={`${className} ${
          posterSrc && !hasDecodedFrame ? "opacity-0 absolute inset-0" : "opacity-100"
        }`}
      />
    </span>
  );
}

// Modal for Interactive Practice Exercises across all categories
function ExerciseModal({
  activeExercise,
  onClose,
}: {
  activeExercise: string | null;
  onClose: () => void;
}) {
  const [breathPhase, setBreathPhase] = useState<"inhala" | "sosten" | "exhala">(
    "inhala"
  );
  const [breathCount, setBreathCount] = useState(4);
  const [cycle, setCycle] = useState(1);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  // Breathing timer for respiration
  useEffect(() => {
    if (activeExercise !== "respiracion") return;

    const interval = setInterval(() => {
      setBreathCount((prev) => {
        if (prev > 1) return prev - 1;
        if (breathPhase === "inhala") {
          setBreathPhase("sosten");
          return 4;
        } else if (breathPhase === "sosten") {
          setBreathPhase("exhala");
          return 6;
        } else {
          setBreathPhase("inhala");
          setCycle((c) => (c < 4 ? c + 1 : 1));
          return 4;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [activeExercise, breathPhase]);

  if (!activeExercise) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/40 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-lg bg-stone-50 border-2 border-stone-200 rounded-[2.5rem] shadow-2xl p-6 sm:p-8 flex flex-col items-center text-center max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-200/60 transition-colors cursor-pointer"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* 1. ANSIEDAD - Inquietud */}
        {activeExercise === "inquietud" && (
          <div className="w-full flex flex-col items-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 mb-3">
              <Compass className="w-3.5 h-3.5" />
              Exploración de la Inquietud
            </span>
            <h3 className="text-xl sm:text-2xl font-serif text-stone-800 font-bold mb-2">
              ¿Y si todo sale mal?
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mb-6 max-w-md">
              No tienes que corregir ni luchar contra esta emoción. Ponle nombre
              con calma para que tu sistema nervioso empiece a relajarse:
            </p>
            <div className="w-full flex flex-col gap-2.5 mb-6 text-left">
              {[
                "Siento una vibración o presión en el pecho",
                "Mi mente intenta anticipar lo que aún no pasa",
                "Tengo tensión en el cuello o la mandíbula",
                "Siento una urgencia por tener el control",
              ].map((feeling, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedItem(feeling)}
                  className={`w-full p-3.5 rounded-2xl text-xs sm:text-sm font-medium border text-left transition-all ${
                    selectedItem === feeling
                      ? "bg-sky-100/90 border-sky-400 text-sky-900 shadow-sm"
                      : "bg-white border-stone-200 text-stone-700 hover:border-sky-300 hover:bg-sky-50/50"
                  }`}
                >
                  {feeling}
                </button>
              ))}
            </div>
            {selectedItem && (
              <div className="w-full p-4 rounded-2xl bg-sky-50 border border-sky-200 text-sky-900 text-xs sm:text-sm leading-relaxed mb-6">
                ✨ <strong>Mensaje de Mochi:</strong> &ldquo;Es completamente válido
                sentirlo. Reconocerlo es el primer paso para soltarlo. Estás a salvo aquí.&rdquo;
              </div>
            )}
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
            >
              Me siento más en calma
            </button>
          </div>
        )}

        {/* 2. ANSIEDAD - Respiración */}
        {activeExercise === "respiracion" && (
          <div className="w-full flex flex-col items-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 mb-3">
              <Wind className="w-3.5 h-3.5" />
              Respiración Restaurativa • Ciclo {cycle} de 4
            </span>
            <h3 className="text-xl sm:text-2xl font-serif text-stone-800 font-bold mb-1">
              Descansas. Pero sigues en alerta.
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mb-6">
              Sincroniza tu respiración con la burbuja de aire:
            </p>
            <div className="relative w-44 h-44 sm:w-48 sm:h-48 my-3 flex items-center justify-center">
              <div
                className={`absolute inset-0 rounded-full transition-all duration-1000 ease-in-out ${
                  breathPhase === "inhala"
                    ? "scale-100 bg-emerald-200/60 ring-8 ring-emerald-300/40"
                    : breathPhase === "sosten"
                    ? "scale-100 bg-teal-200/70 ring-8 ring-teal-300/50"
                    : "scale-65 bg-emerald-100/50 ring-4 ring-emerald-200/30"
                }`}
              />
              <div className="relative z-10 flex flex-col items-center">
                <span className="text-sm font-bold text-emerald-900 uppercase tracking-widest">
                  {breathPhase === "inhala"
                    ? "Inhala"
                    : breathPhase === "sosten"
                    ? "Sostén"
                    : "Exhala"}
                </span>
                <span className="text-4xl font-serif font-black text-emerald-800 mt-1">
                  {breathCount}s
                </span>
              </div>
            </div>
            <p className="text-xs text-stone-500 mt-4 mb-6">
              Inhala calma por la nariz... exhala tensión lentamente por la boca.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
            >
              Completar pausa
            </button>
          </div>
        )}

        {/* 3. ANSIEDAD - Serenidad */}
        {activeExercise === "serenidad" && (
          <div className="w-full flex flex-col items-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 mb-3">
              <Sun className="w-3.5 h-3.5" />
              Anclaje Sensorial 3-2-1
            </span>
            <h3 className="text-xl sm:text-2xl font-serif text-stone-800 font-bold mb-2">
              Aquí, pensando en mañana.
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mb-6 max-w-md">
              Conecta con lo que ves, escuchas y sientes aquí y ahora:
            </p>
            <div className="w-full flex flex-col gap-3 mb-6 text-left">
              {[
                { step: "3", text: "Mira 3 formas o colores suaves a tu alrededor." },
                { step: "2", text: "Presta atención a 2 sonidos lejanos o cercanos." },
                { step: "1", text: "Siente 1 sensación física: tus manos o pies apoyados." },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-xs sm:text-sm text-stone-700"
                >
                  <span className="w-7 h-7 rounded-full bg-amber-500 text-white font-bold flex items-center justify-center shrink-0 text-xs">
                    {item.step}
                  </span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
            >
              Regresar al presente
            </button>
          </div>
        )}

        {/* 4. DEPENDENCIA EMOCIONAL - Inseguridad */}
        {activeExercise === "inseguridad" && (
          <div className="w-full flex flex-col items-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-800 mb-3">
              <Heart className="w-3.5 h-3.5" />
              Pausa de Autoobservación
            </span>
            <h3 className="text-xl sm:text-2xl font-serif text-stone-800 font-bold mb-2">
              No responde. ¿Hice algo mal?
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mb-6 max-w-md">
              Cuando aparece la necesidad de confirmación externa, dale voz a tu
              interior con gentileza:
            </p>
            <div className="w-full flex flex-col gap-2.5 mb-6 text-left">
              {[
                "Siento temor a que la distancia signifique desinterés",
                "Me cuesta poner una pausa y esperar con calma",
                "Siento que mi valor depende de la respuesta del otro",
                "Necesito recordar que soy suficiente tal como soy",
              ].map((feeling, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedItem(feeling)}
                  className={`w-full p-3.5 rounded-2xl text-xs sm:text-sm font-medium border text-left transition-all ${
                    selectedItem === feeling
                      ? "bg-purple-100 border-purple-400 text-purple-900 shadow-sm"
                      : "bg-white border-stone-200 text-stone-700 hover:border-purple-300 hover:bg-purple-50/50"
                  }`}
                >
                  {feeling}
                </button>
              ))}
            </div>
            {selectedItem && (
              <div className="w-full p-4 rounded-2xl bg-purple-50 border border-purple-200 text-purple-900 text-xs sm:text-sm leading-relaxed mb-6">
                🌿 <strong>Reflexión compasiva:</strong> &ldquo;Tus sentimientos son
                válidos. No necesitas la validación constante de nadie para tener
                un valor inmenso.&rdquo;
              </div>
            )}
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
            >
              Reconozco mi valor
            </button>
          </div>
        )}

        {/* 5. DEPENDENCIA EMOCIONAL - Cuidado Propio */}
        {activeExercise === "cuidado_propio" && (
          <div className="w-full flex flex-col items-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-800 mb-3">
              <Heart className="w-3.5 h-3.5" />
              Momento para Ti
            </span>
            <h3 className="text-xl sm:text-2xl font-serif text-stone-800 font-bold mb-2">
              ¿Y tú cómo estás?
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mb-6 max-w-md">
              Sabes qué necesita esa persona. Escucha también tus necesidades:
            </p>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-left">
              {[
                "Prepararme una infusión tibia con calma",
                "Escribir 3 cosas que aprecio de mí",
                "Darme un paseo de 10 minutos sin teléfono",
                "Descansar sin sentir culpa",
              ].map((act, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedItem(act)}
                  className={`p-3.5 rounded-2xl text-xs font-medium border text-left transition-all ${
                    selectedItem === act
                      ? "bg-purple-100 border-purple-400 text-purple-900 shadow-sm"
                      : "bg-white border-stone-200 text-stone-700 hover:border-purple-300"
                  }`}
                >
                  🌸 {act}
                </button>
              ))}
            </div>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
            >
              Me dedico este momento
            </button>
          </div>
        )}

        {/* 6. DEPENDENCIA EMOCIONAL - Confianza */}
        {activeExercise === "confianza" && (
          <div className="w-full flex flex-col items-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-800 mb-3">
              <Shield className="w-3.5 h-3.5" />
              Paso de Autonomía
            </span>
            <h3 className="text-xl sm:text-2xl font-serif text-stone-800 font-bold mb-2">
              Dices sí. Querías decir no.
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mb-6 max-w-md">
              Tu opinión también merece espacio en el vínculo:
            </p>
            <div className="w-full p-4 rounded-2xl bg-purple-50/80 border border-purple-200 text-stone-700 text-xs sm:text-sm text-left leading-relaxed mb-6">
              <p className="mb-2 font-bold text-purple-900">Pregunta de anclaje:</p>
              <p>&ldquo;Si supiera que todo va a estar bien, ¿qué elegiría hacer en este momento por mi propio bienestar?&rdquo;</p>
            </div>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
            >
              Confío en mi decisión
            </button>
          </div>
        )}

        {/* 7. RELACIONES - Escucha Interior */}
        {activeExercise === "escucha_interior" && (
          <div className="w-full flex flex-col items-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-100 text-rose-800 mb-3">
              <Compass className="w-3.5 h-3.5" />
              Claridad Previa
            </span>
            <h3 className="text-xl sm:text-2xl font-serif text-stone-800 font-bold mb-2">
              «No pasa nada». Sí pasa.
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mb-6 max-w-md">
              Identifica lo que sientes y lo que necesitas antes de iniciar una conversación importante:
            </p>
            <div className="w-full flex flex-col gap-2.5 mb-6 text-left">
              {[
                "1. Hecho concreto: ¿Qué ocurrió objetivamente?",
                "2. Emoción sentida: ¿Cómo me hizo sentir esa situación?",
                "3. Necesidad no cubierta: ¿Qué valor o respeto requiero?",
                "4. Petición clara: ¿Qué me gustaría proponer para mejorar?",
              ].map((step, i) => (
                <div
                  key={i}
                  className="p-3 rounded-2xl bg-rose-50/60 border border-rose-200/80 text-xs sm:text-sm text-stone-700"
                >
                  {step}
                </div>
              ))}
            </div>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-rose-500 hover:bg-rose-600 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
            >
              Tengo claridad para comunicar
            </button>
          </div>
        )}

        {/* 8. RELACIONES - Expresión con Confianza */}
        {activeExercise === "expresion" && (
          <div className="w-full flex flex-col items-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-100 text-rose-800 mb-3">
              <MessageSquare className="w-3.5 h-3.5" />
              Expresión Asertiva
            </span>
            <h3 className="text-xl sm:text-2xl font-serif text-stone-800 font-bold mb-2">
              Querías hablar. Terminó en discusión.
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mb-6 max-w-md">
              Prepara una forma clara y respetuosa de expresarte:
            </p>
            <div className="w-full p-4 rounded-2xl bg-rose-50 border border-rose-200 text-left text-xs sm:text-sm text-stone-800 space-y-2 mb-6">
              <p className="font-semibold text-rose-900">Estructura no violenta:</p>
              <p>&ldquo;Cuando sucede <em>[situación]</em>, me siento <em>[emoción]</em> porque para mí es importante <em>[necesidad]</em>. ¿Podríamos <em>[propuesta]</em>?&rdquo;</p>
            </div>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
            >
              Listo para expresarme
            </button>
          </div>
        )}

        {/* 9. RELACIONES - Conexión y Apertura */}
        {activeExercise === "conexion" && (
          <div className="w-full flex flex-col items-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-100 text-rose-800 mb-3">
              <Ear className="w-3.5 h-3.5" />
              Escucha Empática
            </span>
            <h3 className="text-xl sm:text-2xl font-serif text-stone-800 font-bold mb-2">
              ¿Escuchas o preparas tu defensa?
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mb-6 max-w-md">
              Practica hacer espacio para la otra persona sin dejar de reconocer tu propia perspectiva:
            </p>
            <div className="w-full flex flex-col gap-2.5 mb-6 text-left">
              {[
                "Escucho sin preparar mi respuesta mientras la otra persona habla",
                "Valido su emoción aunque tengamos puntos de vista distintos",
                "Pregunto con curiosidad sincera antes de defender mi postura",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 p-3 rounded-2xl bg-rose-50/70 border border-rose-200/70 text-xs sm:text-sm text-stone-700"
                >
                  <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
            >
              Abro espacio para escuchar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function AnxietySubcards({
  category = "ansiedad",
  onBack,
}: {
  category?: CategoryKey;
  onBack: () => void;
}) {
  const [activeExercise, setActiveExercise] = useState<string | null>(null);
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);
  const subcardsContainerRef = useRef<HTMLDivElement>(null);

  const subcards = SUBCARDS_BY_CATEGORY[category] || SUBCARDS_BY_CATEGORY.ansiedad;
  const categoryInfo = CATEGORIES_INFO[category] || CATEGORIES_INFO.ansiedad;

  // Sequential cycle: strictly Paso 1 (0) -> Paso 2 (1) -> Paso 3 (2) -> Paso 1 (0)
  useEffect(() => {
    if (activeExercise !== null) return;

    const timer = setInterval(() => {
      setActiveCardIndex((current) => {
        const next = current === 0 ? 1 : current === 1 ? 2 : 0;
        if (typeof window !== "undefined" && window.innerWidth < 768) {
          const el = subcardsContainerRef.current?.children[next] as HTMLElement | undefined;
          el?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
        }
        return next;
      });
    }, 3800);

    return () => clearInterval(timer);
  }, [activeExercise]);

  const handleSelectCard = (index: number) => {
    setActiveCardIndex(index);
    const el = subcardsContainerRef.current?.children[index] as HTMLElement | undefined;
    el?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  return (
    <div className="w-full flex flex-col items-center animate-in fade-in duration-300">
      {/* Top Navigation Bar with Back Button and Category Chip */}
      <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-bold bg-stone-100 hover:bg-stone-200 text-stone-700 shadow-sm border border-stone-200 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver a Colección Principal</span>
        </button>

        <div className="flex items-center gap-2 text-xs font-semibold text-stone-500">
          <span>Colección de Bienestar</span>
          <span>•</span>
          <span className="text-stone-800 font-bold">{categoryInfo.badge}</span>
        </div>
      </div>

      {/* Header for Category Practices */}
      <div className="text-center max-w-2xl mx-auto mb-6">
        <span
          className={`inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold mb-2 ${
            category === "ansiedad"
              ? "bg-sky-100/90 text-sky-800"
              : category === "dependencia"
              ? "bg-purple-100/90 text-purple-800"
              : "bg-rose-100/90 text-rose-800"
          }`}
        >
          {categoryInfo.label}
        </span>
        <h2 className="text-2xl sm:text-3xl font-serif text-stone-800 tracking-tight">
          {categoryInfo.title}
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed max-w-lg mx-auto">
          {categoryInfo.subtitle}
        </p>
      </div>

      {/* 3 Subcards: Horizontal Swipeable on Mobile, 3-Col Grid on Desktop */}
      <div
        ref={subcardsContainerRef}
        className="flex overflow-x-auto md:grid md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-stretch w-full mt-2 snap-x snap-mandatory scrollbar-none px-4 sm:px-6 md:px-0 -mx-4 sm:-mx-6 md:mx-0 py-7 sm:py-8 md:py-4"
      >
        {subcards.map((card, idx) => {
          const isActive = idx === activeCardIndex;

          const activeRingClass =
            category === "ansiedad"
              ? "ring-4 ring-offset-4 ring-offset-stone-50 ring-sky-400 shadow-2xl shadow-sky-300/40 scale-[1.025] z-20"
              : category === "dependencia"
              ? "ring-4 ring-offset-4 ring-offset-stone-50 ring-purple-400 shadow-2xl shadow-purple-300/40 scale-[1.025] z-20"
              : "ring-4 ring-offset-4 ring-offset-stone-50 ring-rose-400 shadow-2xl shadow-rose-300/40 scale-[1.025] z-20";

          return (
            <div
              key={card.id}
              onClick={() => handleSelectCard(idx)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && handleSelectCard(idx)}
              style={{
                backgroundColor: card.bgColor,
                borderColor: card.borderColor,
              }}
              className={`relative w-[82vw] max-w-[285px] sm:max-w-[310px] md:max-w-[365px] md:w-full min-h-[395px] sm:min-h-[425px] md:min-h-[465px] shrink-0 snap-center rounded-[2.2rem] md:rounded-[2.8rem] border-4 p-4 pb-5 sm:p-5 sm:pb-6 md:p-6 flex flex-col items-center justify-between overflow-hidden cursor-pointer group transition-all duration-500 select-none ${
                isActive
                  ? activeRingClass
                  : "shadow-md shadow-stone-200/50 opacity-80 md:opacity-75 scale-[0.98] hover:opacity-95 hover:scale-[1.0] z-10"
              }`}
            >
              {/* Top: Completely STATIC Retro Bubbly Typography (NO ® mark) */}
              <div className="relative z-10 w-full pt-0.5 sm:pt-1 flex flex-col items-center justify-center">
                <div className="relative w-full flex items-center justify-center px-2">
                  <h3
                    className="font-bubbly text-[1.85rem] sm:text-[2.1rem] md:text-[2.25rem] lg:text-[2.5rem] font-black leading-none tracking-tight text-center select-none"
                    style={{
                      color: card.textColor,
                      textShadow: card.textShadow,
                    }}
                  >
                    {card.bubblyWord}
                  </h3>
                </div>
              </div>

              {/* Center & Foreground: Mascot Video in Transparent Canvas */}
              <div className="relative z-20 w-full flex-1 flex flex-col items-center justify-center my-0 sm:-my-2">
                <div className="relative w-full max-w-[240px] sm:max-w-[270px] md:max-w-[320px] aspect-video flex items-center justify-center scale-100 sm:scale-[1.05] md:scale-[1.12] origin-center">
                  <MascotVideoCanvas
                    videoSrc={card.videoSrc}
                    isPlaying={isActive}
                    className="w-full h-full object-contain pointer-events-none block"
                  />
                </div>
              </div>

              {/* Bottom: Refined Editorial Step, Warm Human Advice, and Tactile Pill Button */}
              <div className="relative z-20 w-full flex flex-col items-center gap-1 sm:gap-1.5 pt-0.5 sm:pt-1 text-center">
                {/* Step indicator: clean, calm, editorial */}
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-stone-500 bg-stone-100/90 border border-stone-200/70">
                  {card.stepChip}
                </span>

                {/* "El consejo": Thoughtful, human-written editorial typography */}
                <div className="flex flex-col items-center gap-1 max-w-[280px] px-2">
                  <h4 className="font-serif text-[0.92rem] sm:text-[1.02rem] font-bold text-stone-800 leading-snug tracking-tight">
                    {card.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-stone-600 leading-relaxed font-sans font-normal">
                    {card.description}
                  </p>
                </div>

                {/* Button: Tactile, refined, natural width with ArrowRight */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveExercise(card.id);
                  }}
                  className={`inline-flex items-center justify-center gap-2 px-4 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs font-semibold shadow-sm transition-all duration-200 hover:scale-[1.03] active:scale-95 cursor-pointer mt-1 ${card.buttonClass}`}
                >
                  <span>{card.buttonText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile subcards pagination dots & hint */}
      <div className="flex flex-col items-center gap-1.5 md:hidden mt-4">
        <div className="flex items-center justify-center gap-2">
          {subcards.map((card, idx) => (
            <button
              key={card.id}
              onClick={() => handleSelectCard(idx)}
              aria-label={`Ver ${card.bubblyWord}`}
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

      {/* Bottom Back Button */}
      <div className="mt-8 text-center">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-white text-stone-600 hover:text-stone-900 border border-stone-200 shadow-sm hover:shadow transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver a Colección Principal</span>
        </button>
      </div>

      {/* Exercise Modal */}
      <ExerciseModal
        activeExercise={activeExercise}
        onClose={() => setActiveExercise(null)}
      />
    </div>
  );
}
