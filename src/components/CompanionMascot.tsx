"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { RefreshCw, Hand, X } from "lucide-react";

/** Clave de sesión: si la persona cierra a Mochi, no vuelve en esta visita */
const DISMISS_KEY = "mochi-dismissed";
/** Tiempo mínimo en la página antes de que Mochi aparezca */
const APPEAR_DELAY_MS = 15000;

type MascotState = "reposo" | "alegre" | "saludo";

const TIPS_REPOSO = [
  "🌸 No tienes que cargar con todo sola. ¿Te gustaría hablar con Sofía?",
  "🌿 Respira profundo... Inhala calma y exhala cualquier prisa o exigencia.",
  "💬 ¿Sientes dudas en tus vínculos o ansiedad? Sofía está aquí para apoyarte.",
  "✨ Un paso a la vez. Cuidar de tu paz mental es tu mayor acto de valentía.",
  "🤍 Relaja la mandíbula y baja los hombros suavemente. Mereces este momento de pausa.",
  "💌 Si estás lista para dar el primer paso, puedes agendar tu primera sesión online con Sofía.",
  "🌸 Estoy acompañándote con mucho cariño en tu camino hacia el bienestar.",
];

const TIPS_ALEGRE = [
  "¡Qué alegría que dediques este momento a ti! Hablar con Sofía te dará mucha paz 🌸✨",
  "¡Eso es! ¡Celebrando cada pequeño paso hacia tu bienestar emocional! 🎉💖",
  "¡Abrazo gigante para ti! Mereces relaciones sanas, seguras y tranquilas 🤗✨",
  "¡Me hace muy feliz verte aquí! Recuerda que Sofía siempre te escuchará con el corazón 🌿",
];

const TIPS_SALUDO = [
  "¡Hola! Bienvenida a tu espacio seguro con Sofía 👋🌸",
  "¡Hola! Estoy aquí para acompañarte en calma. ¿Te gustaría consultar con Sofía? 🌿",
  "¡Qué lindo que estés aquí! Tómate un respiro, estás a salvo 🤍",
];

export default function CompanionMascot() {
  const [mascotState, setMascotState] = useState<MascotState>("saludo");
  const [dialogText, setDialogText] = useState(TIPS_SALUDO[0]);
  const [bubbleOpen, setBubbleOpen] = useState(false);

  // Hidden source video elements for seamless zero-latency switching
  const reposoRef = useRef<HTMLVideoElement>(null);
  const alegreRef = useRef<HTMLVideoElement>(null);
  const saludoRef = useRef<HTMLVideoElement>(null);

  // Visible canvas where the background-free mascot is rendered
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Ref tracking current state for the rendering loop
  const stateRef = useRef<MascotState>("saludo");
  useEffect(() => {
    stateRef.current = mascotState;
  }, [mascotState]);

  // Sequence state machine refs:
  // Step 0: "saludo"  (Saludo con la mano)
  // Step 1: "reposo"  (Quieto, respiración tranquila ~4.5s)
  // Step 2: "alegre"  (Alegría, salto celebratorio)
  // Step 3: "reposo"  (Quieto, pausa de descanso ~5s)
  const sequenceStepRef = useRef<number>(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const clearSequenceTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  // ---------------------------------------------------------------------
  // Visibilidad: Mochi NO está siempre presente.
  //  - Nunca en el hero (aparece tras pasarlo)
  //  - Solo tras APPEAR_DELAY_MS en la página
  //  - Se oculta en #contacto, #tarjetas-bienestar y el footer
  //  - Si se cierra, no vuelve en la sesión (sessionStorage, nada se envía)
  // ---------------------------------------------------------------------
  const [passedHero, setPassedHero] = useState(false);
  const [timeReady, setTimeReady] = useState(false);
  const [nearBlocked, setNearBlocked] = useState(false);
  const [dismissed, setDismissed] = useState(
    () => typeof window !== "undefined" && sessionStorage.getItem(DISMISS_KEY) === "1"
  );

  useEffect(() => {
    const timer = setTimeout(() => setTimeReady(true), APPEAR_DELAY_MS);

    const hero = document.getElementById("inicio");
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        setPassedHero(!entry.isIntersecting && entry.boundingClientRect.top < 0);
      },
      { threshold: 0 }
    );
    if (hero) heroObserver.observe(hero);

    const blocked = new Set<Element>();
    const blockObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) blocked.add(entry.target);
          else blocked.delete(entry.target);
        }
        setNearBlocked(blocked.size > 0);
      },
      { threshold: 0.05 }
    );
    [
      document.getElementById("contacto"),
      document.getElementById("tarjetas-bienestar"),
      document.querySelector("footer"),
    ].forEach((el) => el && blockObserver.observe(el));

    return () => {
      clearTimeout(timer);
      heroObserver.disconnect();
      blockObserver.disconnect();
    };
  }, []);

  const visible = passedHero && timeReady && !nearBlocked && !dismissed;
  const visibleRef = useRef(false);
  useEffect(() => {
    visibleRef.current = visible;
  }, [visible]);

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    setBubbleOpen(false);
    setDismissed(true);
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {
      // sessionStorage no disponible: se oculta solo en esta vista
    }
  };

  // Initialize reposo video playback at 1.5x speed in background
  useEffect(() => {
    const reposo = reposoRef.current;
    if (reposo) {
      reposo.defaultMuted = true;
      reposo.muted = true;
      reposo.loop = true;
      reposo.playsInline = true;
      reposo.crossOrigin = "anonymous";
      reposo.playbackRate = 1.5;
      reposo.play().catch((e) => console.log("Reposo autoplay wait:", e));
    }
  }, []);

  // HD Transparent Canvas Rendering Loop (480x270 for crisp, anti-aliased HD quality)
  useEffect(() => {
    let animId: number;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    // 640x360 (exact 16:9 ratio, High Definition)
    const width = 640;
    const height = 360;
    canvas.width = width;
    canvas.height = height;

    // Pre-allocated typed arrays for maximum performance and zero memory allocation per frame
    const total = width * height;
    const queue = new Int32Array(total);
    const visited = new Uint8Array(total);

    const render = () => {
      // Pick active video
      const currentState = stateRef.current;
      let activeVideo = reposoRef.current;
      if (currentState === "alegre") activeVideo = alegreRef.current;
      else if (currentState === "saludo") activeVideo = saludoRef.current;

      // Solo procesamos frames cuando Mochi está visible (ahorra CPU/batería)
      if (
        visibleRef.current &&
        activeVideo &&
        activeVideo.readyState >= 2 &&
        !activeVideo.paused
      ) {
        if (activeVideo.playbackRate !== 1.5) {
          activeVideo.playbackRate = 1.5;
        }

        ctx.clearRect(0, 0, width, height);
        ctx.drawImage(activeVideo, 0, 0, width, height);

        try {
          const imgData = ctx.getImageData(0, 0, width, height);
          const d = imgData.data;

          // Reset visited mask
          visited.fill(0);
          let head = 0;
          let tail = 0;

          // Seed boundary pixels (top, bottom, left, right borders)
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

          // Pass 1: BFS flood fill removing outer black & green-screen residue
          while (head < tail) {
            const p = queue[head++];
            const idx = p * 4;
            const r = d[idx];
            const g = d[idx + 1];
            const b = d[idx + 2];
            const brightness = (r + g + b) / 3;

            // Green screen residue / dark background detection
            const isGreenResidue =
              (g > r * 1.02 && g > b * 1.02 && g > 45) ||
              (g > (r + b) * 0.62 && g > 55);
            const isBlueMascot =
              !isGreenResidue && b >= r + 6 && b >= 125 && brightness >= 85;

            if (!isBlueMascot) {
              d[idx + 3] = 0;
              const px = p % width;
              const py = (p / width) | 0;

              if (px > 0 && !visited[p - 1]) {
                visited[p - 1] = 1;
                queue[tail++] = p - 1;
              }
              if (px < width - 1 && !visited[p + 1]) {
                visited[p + 1] = 1;
                queue[tail++] = p + 1;
              }
              if (py > 0 && !visited[p - width]) {
                visited[p - width] = 1;
                queue[tail++] = p - width;
              }
              if (py < height - 1 && !visited[p + width]) {
                visited[p + width] = 1;
                queue[tail++] = p + width;
              }
            } else {
              // Contour de-fringing: unmultiply color to restore pure pastel blue
              if (brightness < 155) {
                const scale = 190 / Math.max(brightness, 80);
                d[idx] = Math.min(255, Math.round(r * scale));
                d[idx + 1] = Math.min(255, Math.round(g * scale));
                d[idx + 2] = Math.min(255, Math.round(b * scale));
                if (brightness < 120) {
                  d[idx + 3] = Math.min(
                    255,
                    Math.round(((brightness - 95) / 25) * 255)
                  );
                }
              }
            }
          }

          // Pass 2: Despill & silhouette cleanup on remaining mascot pixels
          for (let p = 0; p < total; p++) {
            const idx = p * 4;
            if (d[idx + 3] === 0) continue;
            const r = d[idx];
            const g = d[idx + 1];
            const b = d[idx + 2];
            const brightness = (r + g + b) / 3;

            // Preserve facial features (eyes, mouth)
            if (brightness < 65) {
              d[idx + 3] = 255;
              continue;
            }

            // 1. Cut off green fringe residue
            if (
              (g > r * 1.10 && g > b * 1.10 && g > 55) ||
              (g > (r + b) * 0.65 && g > 65)
            ) {
              d[idx + 3] = 0;
              continue;
            }

            // 2. Suppress green spill on blue mascot
            if (g > b * 0.92) {
              d[idx + 1] = Math.round(b * 0.92);
            }
          }

          ctx.putImageData(imgData, 0, 0);
        } catch {
          // If canvas is restricted, keep clean direct video draw
        }
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Ref para que los timeouts llamen siempre a la versión actual (evita auto-referencia)
  const transitionRef = useRef<(step: number) => void>(() => {});

  // Core sequence transition function: strictly connects Saludo -> Quieto (Reposo) -> Alegre -> Quieto (Reposo)
  const transitionToStep = useCallback((step: number) => {
    clearSequenceTimer();
    sequenceStepRef.current = step;

    if (step === 0) {
      // Step 0: Saludo cordial con la mano 👋
      setMascotState("saludo");
      setDialogText(
        TIPS_SALUDO[Math.floor(Math.random() * TIPS_SALUDO.length)]
      );
      const saludo = saludoRef.current;
      if (saludo) {
        saludo.currentTime = 0;
        saludo.defaultMuted = true;
        saludo.muted = true;
        saludo.playbackRate = 1.5;
        saludo.play().catch(() => {});
      }
      // Safety fallback: advance if onEnded doesn't fire within 2.8s
      timeoutRef.current = setTimeout(() => {
        transitionRef.current(1);
      }, 2800);
    } else if (step === 1) {
      // Step 1: Quieto / Reposo tras el saludo (acompañamiento sereno ~5s) 🐾
      setMascotState("reposo");
      const tip1 = TIPS_REPOSO[Math.floor(Math.random() * TIPS_REPOSO.length)];
      setDialogText(tip1);
      const reposo = reposoRef.current;
      if (reposo) {
        reposo.defaultMuted = true;
        reposo.muted = true;
        reposo.loop = true;
        reposo.playbackRate = 1.5;
        reposo.play().catch(() => {});
      }
      timeoutRef.current = setTimeout(() => {
        transitionRef.current(2);
      }, 5500);
    } else if (step === 2) {
      // Step 2: Alegre (salto festivo y celebración del autocuidado) 🎉
      setMascotState("alegre");
      setDialogText(
        TIPS_ALEGRE[Math.floor(Math.random() * TIPS_ALEGRE.length)]
      );
      const alegre = alegreRef.current;
      if (alegre) {
        alegre.currentTime = 0;
        alegre.defaultMuted = true;
        alegre.muted = true;
        alegre.playbackRate = 1.5;
        alegre.play().catch(() => {});
      }
      // Safety fallback: advance if onEnded doesn't fire within 2.8s
      timeoutRef.current = setTimeout(() => {
        transitionRef.current(3);
      }, 2800);
    } else if (step === 3) {
      // Step 3: Quieto / Reposo tras la alegría (integración y descanso ~6s) 🌿
      setMascotState("reposo");
      const tip3 = TIPS_REPOSO[Math.floor(Math.random() * TIPS_REPOSO.length)];
      setDialogText(tip3);
      const reposo = reposoRef.current;
      if (reposo) {
        reposo.defaultMuted = true;
        reposo.muted = true;
        reposo.loop = true;
        reposo.playbackRate = 1.5;
        reposo.play().catch(() => {});
      }
      timeoutRef.current = setTimeout(() => {
        transitionRef.current(0);
      }, 6000);
    }
  }, []);

  useEffect(() => {
    transitionRef.current = transitionToStep;
  }, [transitionToStep]);

  // Video end callbacks
  const handleSaludoEnded = () => {
    transitionToStep(1);
  };

  const handleAlegreEnded = () => {
    transitionToStep(3);
  };

  // Lanza la secuencia (saludo) la primera vez que Mochi se hace visible
  const startedRef = useRef(false);
  useEffect(() => {
    if (!visible || startedRef.current) return;
    const startTimer = setTimeout(() => {
      startedRef.current = true;
      transitionToStep(0);
    }, 400);
    return () => clearTimeout(startTimer);
  }, [visible, transitionToStep]);

  useEffect(() => () => clearSequenceTimer(), []);

  // Al tocar a Mochi: abre/cierra el globo y celebra
  const handleClickMascot = () => {
    setBubbleOpen((open) => !open);
    transitionToStep(2);
  };

  // Trigger manual greeting wave
  const handleTriggerSaludo = (e: React.MouseEvent) => {
    e.stopPropagation();
    transitionToStep(0);
  };

  return (
    <aside
      aria-label="Compañero emocional Mochi"
      aria-hidden={!visible}
      className={`fixed bottom-3 right-3 sm:bottom-5 sm:right-5 z-40 flex flex-col items-end select-none pointer-events-none transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0 visible" : "opacity-0 translate-y-6 invisible"
      }`}
    >
      {/* 
        Preloaded hidden source videos (NOT display:none so Chrome decodes continuously at 60 FPS) 
      */}
      <video
        ref={reposoRef}
        src="/videos/reposo.mp4"
        autoPlay
        loop
        muted
        playsInline
        crossOrigin="anonymous"
        preload="auto"
        onPlay={(e) => {
          e.currentTarget.playbackRate = 1.5;
        }}
        onLoadedMetadata={(e) => {
          e.currentTarget.playbackRate = 1.5;
        }}
        onLoadedData={(e) => {
          e.currentTarget.playbackRate = 1.5;
        }}
        onRateChange={(e) => {
          if (e.currentTarget.playbackRate !== 1.5) {
            e.currentTarget.playbackRate = 1.5;
          }
        }}
        onTimeUpdate={(e) => {
          if (e.currentTarget.playbackRate !== 1.5) {
            e.currentTarget.playbackRate = 1.5;
          }
        }}
        style={{
          position: "fixed",
          top: -9999,
          left: -9999,
          width: 480,
          height: 270,
          opacity: 0.001,
          pointerEvents: "none",
        }}
      />

      <video
        ref={alegreRef}
        src="/videos/alegre.mp4"
        muted
        playsInline
        crossOrigin="anonymous"
        preload="auto"
        onPlay={(e) => {
          e.currentTarget.playbackRate = 1.5;
        }}
        onLoadedMetadata={(e) => {
          e.currentTarget.playbackRate = 1.5;
        }}
        onLoadedData={(e) => {
          e.currentTarget.playbackRate = 1.5;
        }}
        onRateChange={(e) => {
          if (e.currentTarget.playbackRate !== 1.5) {
            e.currentTarget.playbackRate = 1.5;
          }
        }}
        onTimeUpdate={(e) => {
          if (e.currentTarget.playbackRate !== 1.5) {
            e.currentTarget.playbackRate = 1.5;
          }
        }}
        onEnded={handleAlegreEnded}
        style={{
          position: "fixed",
          top: -9999,
          left: -9999,
          width: 480,
          height: 270,
          opacity: 0.001,
          pointerEvents: "none",
        }}
      />

      <video
        ref={saludoRef}
        src="/videos/saludo.mp4"
        muted
        playsInline
        crossOrigin="anonymous"
        preload="auto"
        onPlay={(e) => {
          e.currentTarget.playbackRate = 1.5;
        }}
        onLoadedMetadata={(e) => {
          e.currentTarget.playbackRate = 1.5;
        }}
        onLoadedData={(e) => {
          e.currentTarget.playbackRate = 1.5;
        }}
        onRateChange={(e) => {
          if (e.currentTarget.playbackRate !== 1.5) {
            e.currentTarget.playbackRate = 1.5;
          }
        }}
        onTimeUpdate={(e) => {
          if (e.currentTarget.playbackRate !== 1.5) {
            e.currentTarget.playbackRate = 1.5;
          }
        }}
        onEnded={handleSaludoEnded}
        style={{
          position: "fixed",
          top: -9999,
          left: -9999,
          width: 480,
          height: 270,
          opacity: 0.001,
          pointerEvents: "none",
        }}
      />

      {/* Globo de diálogo: solo se abre al tocar a Mochi */}
      {bubbleOpen && visible && (
      <div className="pointer-events-auto max-w-[230px] sm:max-w-[250px] mb-1 p-3 rounded-2xl rounded-br-sm bg-white border border-stone-200 shadow-lg shadow-stone-300/40 text-xs text-stone-700">
        {/* Header */}
        <div className="flex items-center justify-between gap-2 mb-1 pb-1 border-b border-stone-100">
          <span className="text-[11px] font-semibold text-stone-800">Mochi</span>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() =>
                setDialogText(
                  TIPS_REPOSO[Math.floor(Math.random() * TIPS_REPOSO.length)]
                )
              }
              className="p-1 rounded-full text-stone-400 hover:text-sky-700 hover:bg-sky-50 transition-colors cursor-pointer"
              title="Cambiar consejo"
            >
              <RefreshCw className="w-3 h-3" />
            </button>
            <button
              type="button"
              onClick={() => setBubbleOpen(false)}
              className="p-1 rounded-full text-stone-400 hover:text-stone-800 hover:bg-stone-100 transition-colors cursor-pointer"
              title="Cerrar mensaje"
              aria-label="Cerrar mensaje"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Dialog Text */}
        <p className="leading-relaxed text-[11px] sm:text-xs text-stone-600 font-sans">
          {dialogText}
        </p>

        {/* Action buttons */}
        <div className="mt-2 pt-1.5 border-t border-stone-100 flex items-center justify-between gap-1.5">
          <a
            href="#contacto"
            className="px-2.5 py-1 rounded-full bg-stone-900 hover:bg-stone-800 text-stone-50 text-[10px] sm:text-[11px] font-medium flex items-center gap-1 transition-all shadow-sm"
            title="Contactar con Sofía"
          >
            <span>Hablar con Sofía</span>
          </a>

          <button
            type="button"
            onClick={handleTriggerSaludo}
            className="px-2 py-0.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 text-[10px] sm:text-[11px] font-medium flex items-center gap-1 transition-all cursor-pointer"
            title="Saludar con la mano"
          >
            <Hand className="w-2.5 h-2.5 text-amber-600" />
            <span>Saludar</span>
          </button>
        </div>
      </div>
      )}

      {/* Mascot Main Interactive Display (100% PURE TRANSPARENT - NO BACKGROUND BOX) */}
      <div className={`${visible ? "pointer-events-auto" : "pointer-events-none"} relative flex items-end gap-2`}>
        {/* Cerrar a Mochi durante esta visita */}
        <button
          type="button"
          onClick={handleDismiss}
          className="absolute -top-1 right-1 z-10 w-5 h-5 rounded-full bg-white/90 border border-stone-200 text-stone-500 hover:text-stone-900 flex items-center justify-center shadow-sm"
          title="Ocultar a Mochi"
          aria-label="Ocultar a Mochi"
        >
          <X className="w-3 h-3" />
        </button>

        {/* 
          Mascot Avatar:
          - 100% transparent around the character (NO black box, NO dark rectangle)
          - Strict 16:9 widescreen ratio matching original video
          - HD rendering with smooth anti-aliased contour
        */}
        <div
          onClick={handleClickMascot}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && handleClickMascot()}
          aria-label="Mochi, compañero emocional. Toca para ver un mensaje"
          aria-expanded={bubbleOpen}
          className={`relative group cursor-pointer transition-transform duration-300 filter drop-shadow-md ${
            mascotState === "alegre"
              ? "scale-105"
              : "hover:scale-[1.03] active:scale-95"
          }`}
        >
          {/* Transparent container - reduced size */}
          <div className="w-[130px] sm:w-[160px] aspect-video bg-transparent flex items-center justify-center relative">
            <canvas
              ref={canvasRef}
              className="w-full h-full object-contain pointer-events-auto block bg-transparent"
            />
          </div>

        </div>
      </div>
    </aside>
  );
}
