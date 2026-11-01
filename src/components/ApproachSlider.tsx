"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ApproachSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const approaches = [
    {
      title: "Tu Proceso, A Tu Ritmo",
      description:
        "Te situamos en el centro de tu terapia, brindando un espacio seguro, cercano y libre de juicios donde tu voz es escuchada, respetada y validada en cada etapa.",
      image:
        "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80",
      tag: "Espacio Seguro",
    },
    {
      title: "Vínculos Conscientes y Apego Seguro",
      description:
        "Integramos la Terapia Focalizada en las Emociones (TFE) para sanar heridas afectivas, comprender la dependencia emocional y forjar relaciones auténticas.",
      image:
        "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
      tag: "Relaciones Sanas",
    },
    {
      title: "Regulación Emocional y Calma Interior",
      description:
        "Herramientas basadas en evidencia científica y psicología cognitivo-conductual para calmar el sobrepensamiento, gestionar la ansiedad y reconectar con la serenidad.",
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
      tag: "Gestión de Ansiedad",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % approaches.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + approaches.length) % approaches.length);
  };

  return (
    <section id="enfoque" className="w-full py-20 px-6 max-w-[1240px] mx-auto overflow-hidden">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-semibold uppercase tracking-widest text-stone-500 mb-3"
        >
          Metodología Basada en Evidencia
        </motion.p>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 tracking-tight">
          Nuestro Enfoque
        </h2>
        <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed">
          Ofrecemos una combinación dinámica de terapia centrada en la persona, unida a los principios
          transformadores de la Terapia Focalizada en las Emociones (TFE) y Cognitivo-Conductual.
        </p>
      </div>

      {/* Dynamic Title & Description for the Active Slide */}
      <div className="text-center max-w-xl mx-auto mb-10 min-h-[90px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
          >
            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-stone-900">
              {approaches[currentIndex].title}
            </h3>
            <p className="mt-2 text-stone-600 text-sm leading-relaxed">
              {approaches[currentIndex].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Hourglass Slider Display */}
      <div className="relative flex items-center justify-center gap-6 sm:gap-10 py-4">
        {/* Navigation Arrow Left */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-12 z-20 w-11 h-11 rounded-full bg-white/90 shadow-md border border-stone-200/80 flex items-center justify-center text-stone-700 hover:bg-stone-900 hover:text-white transition-colors"
          aria-label="Anterior enfoque"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Cards Row with Centered Active Card */}
        <div className="flex items-center justify-center gap-4 sm:gap-8 w-full max-w-4xl px-4">
          {approaches.map((item, index) => {
            const isActive = index === currentIndex;
            return (
              <motion.div
                key={index}
                onClick={() => setCurrentIndex(index)}
                animate={{
                  scale: isActive ? 1 : 0.85,
                  opacity: isActive ? 1 : 0.45,
                }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className={`cursor-pointer transition-all ${
                  isActive ? "w-[280px] sm:w-[360px]" : "hidden sm:block w-[180px] sm:w-[220px]"
                }`}
              >
                {/* Hourglass Shape Mask Container */}
                <div
                  className="relative aspect-[3/4] w-full overflow-hidden shadow-lg border-2 border-stone-100 bg-stone-300 transition-transform duration-500 hover:scale-[1.02]"
                  style={{
                    borderRadius: "36px",
                    maskImage:
                      "radial-gradient(circle 32px at 0% 50%, transparent 98%, black 100%), radial-gradient(circle 32px at 100% 50%, transparent 98%, black 100%)",
                    WebkitMaskImage:
                      "radial-gradient(circle 32px at 0% 50%, transparent 98%, black 100%), radial-gradient(circle 32px at 100% 50%, transparent 98%, black 100%)",
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-stone-900/15" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Navigation Arrow Right */}
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-12 z-20 w-11 h-11 rounded-full bg-white/90 shadow-md border border-stone-200/80 flex items-center justify-center text-stone-700 hover:bg-stone-900 hover:text-white transition-colors"
          aria-label="Siguiente enfoque"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center items-center gap-2 mt-8">
        {approaches.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`transition-all rounded-full ${
              i === currentIndex ? "w-8 h-2 bg-stone-900" : "w-2 h-2 bg-stone-300"
            }`}
            aria-label={`Ir al enfoque ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
