"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Play, Plus, Minus, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function TeamSofia() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="equipo" className="w-full py-20 px-6 max-w-[1240px] mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs font-semibold uppercase tracking-widest text-stone-500 mb-2 inline-block">
          Acompañamiento Personalizado
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 tracking-tight">
          Conoce a tu psicóloga
        </h2>
        <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed">
          Un espacio donde tu historia es recibida con calidez, respeto y sin juicios.
          Mi vocación es brindarte un refugio de seguridad para desenredar lo que sientes
          y reconectar con tu paz interior.
        </p>
      </div>

      {/* Centered Solo Card for Dra. Sofía */}
      <div className="flex justify-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center w-full max-w-md"
        >
          {/* Hourglass Silhouette Photo with Video Bio Badge */}
          <div className="relative w-full max-w-[360px] aspect-[4/4.6] flex items-center justify-center">
            <div
              className="relative w-full h-full overflow-hidden bg-stone-200 shadow-md transition-transform duration-500 hover:scale-[1.02]"
              style={{
                borderRadius: "36px",
                maskImage:
                  "radial-gradient(circle 34px at 0% 50%, transparent 98%, black 100%), radial-gradient(circle 34px at 100% 50%, transparent 98%, black 100%)",
                WebkitMaskImage:
                  "radial-gradient(circle 34px at 0% 50%, transparent 98%, black 100%), radial-gradient(circle 34px at 100% 50%, transparent 98%, black 100%)",
              }}
            >
              <Image
                src="/images/sofia_portrait.jpg"
                alt="Sofía Noriega"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-stone-900/10 pointer-events-none" />
            </div>

            {/* "Watch my video bio" pill button */}
            <button
              type="button"
              className="absolute bottom-4 left-6 bg-white/95 backdrop-blur-sm text-stone-800 text-xs font-medium px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-1.5 hover:bg-stone-900 hover:text-white transition-colors"
            >
              <span>Ver mi video de presentación</span>
              <Play className="w-3 h-3 fill-current text-stone-700 hover:text-white" />
            </button>
          </div>

          {/* Bottom Card Content in warm cream container */}
          <div className="w-full max-w-[360px] bg-[#F7F3EB] rounded-3xl p-6 mt-4 border border-stone-200/80 shadow-sm transition-all duration-300">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-serif text-2xl font-medium text-stone-900">
                  Sofía Noriega
                </h3>
                <p className="text-xs font-medium text-emerald-800 mt-1 flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Psicología Integral · Colegiada</span>
                </p>
                <p className="text-[11px] text-stone-500 mt-1">
                  Especialista en Dependencia Emocional, Relaciones y Ansiedad
                </p>
              </div>

              {/* LinkedIn Icon */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-stone-200/70 hover:bg-[#0077B5] hover:text-white text-stone-700 flex items-center justify-center transition-colors flex-shrink-0"
                aria-label="LinkedIn de Sofía"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
            </div>

            {/* Booking Button */}
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#contacto"
              className="mt-5 w-full py-3.5 rounded-full bg-stone-900 text-stone-50 text-xs font-medium tracking-wide flex items-center justify-center gap-2 hover:bg-stone-800 transition-colors shadow-sm"
            >
              <span>Reservar consulta con Sofía</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.a>

            {/* Interactive Drawer: Conoce más sobre mi enfoque */}
            <div className="mt-4 pt-4 border-t border-stone-300/60">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full flex items-center justify-between text-xs font-semibold text-stone-700 hover:text-stone-950 transition-colors"
              >
                <span>Conoce más sobre mi trayectoria y enfoque</span>
                <div className="w-5 h-5 rounded-full bg-stone-200/80 flex items-center justify-center">
                  {isExpanded ? (
                    <Minus className="w-3 h-3" />
                  ) : (
                    <Plus className="w-3 h-3" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="mt-3 text-xs text-stone-600 leading-relaxed font-normal bg-stone-100/70 p-4 rounded-2xl border border-stone-200/60 space-y-2">
                      <p>
                        Hola, soy Sofía. Acompaño a personas y parejas que atraviesan procesos de
                        dependencia emocional, incertidumbre en sus relaciones o sobrepensamiento continuo.
                      </p>
                      <p>
                        Mi enfoque de <strong>psicología integral</strong> une herramientas de la
                        Terapia Focalizada en las Emociones (TFE), técnicas cognitivo-conductuales y
                        regulación del sistema nervioso. Mi meta es que te sientas con el sostén
                        y la claridad necesarios para vivir en paz contigo misma.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
