"use client";

import React, { useState } from "react";
import { MessageCircleQuestion, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SparkleDoodle } from "@/components/Doodles";

export default function FaqSofia() {
  const [openIndex, setOpenIndex] = useState<number | null>(1); // 2nd item open by default like in video

  const faqs = [
    {
      question: "¿Cómo sé si necesito comenzar un proceso de terapia?",
      answer:
        "Si sientes que la ansiedad, el sobrepensamiento continuo, la tristeza o los conflictos recurrentes en tus relaciones están afectando tu bienestar diario, la terapia te ofrece un espacio seguro para desenredar lo que sientes y recuperar el equilibrio.",
    },
    {
      question: "¿Cómo es la primera sesión online?",
      answer:
        "Es nuestro primer encuentro de 50 minutos por videollamada. Conversamos con calma sobre lo que estás viviendo, tu historia y lo que necesitas hoy, para empezar a definir objetivos claros desde el primer día.",
    },
    {
      question: "¿Cómo funcionan las sesiones virtuales y qué necesito?",
      answer:
        "Toda la atención es 100% online por videollamada. La evidencia clínica respalda plenamente su eficacia terapéutica, y solo necesitas un dispositivo con cámara, conexión estable y un espacio tranquilo donde sientas privacidad para hablar.",
    },
    {
      question: "¿Cuánto dura un proceso terapéutico habitual?",
      answer:
        "Cada persona es única. Los procesos de terapia focalizada suelen oscilar entre 8 y 20 sesiones dependiendo de tus objetivos, trabajando con pautas prácticas desde el primer día.",
    },
    {
      question: "¿Qué enfoque metodológico aplican en las sesiones?",
      answer:
        "Integramos la Terapia Cognitivo-Conductual (TCC), la Terapia Focalizada en las Emociones (TFE) y herramientas somáticas de regulación del sistema nervioso.",
    },
    {
      question: "¿Cómo se gestiona la privacidad y confidencialidad?",
      answer:
        "Toda la información compartida está estrictamente protegida por el secreto profesional deontológico y la normativa sanitaria europea de protección de datos (RGPD).",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="preguntas" className="w-full py-20 sm:py-28 px-6 max-w-[1240px] mx-auto scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Encabezado */}
        <div className="lg:col-span-4 lg:sticky lg:top-28">
          <p className="eyebrow">Preguntas frecuentes</p>
          <h2 className="mt-5 font-serif font-medium text-4xl sm:text-5xl text-ink tracking-[-0.03em] leading-[1.04]">
            Lo que suele preguntarse <span className="italic">antes de empezar</span>
          </h2>
          <div className="mt-8 relative inline-flex items-center gap-3 p-2 pr-5 rounded-full bg-white border border-stone-200">
            <span className="w-10 h-10 rounded-full bg-lilac flex items-center justify-center">
              <MessageCircleQuestion className="w-5 h-5 text-lilac-ink" />
            </span>
            <span className="text-sm text-stone-600">
              ¿Otra duda?{" "}
              <a href="#contacto" className="font-semibold text-ink underline decoration-lime-deep decoration-2 underline-offset-4">
                Escríbeme
              </a>
            </span>
            <SparkleDoodle className="absolute -top-3 -right-3 w-6 text-lime-deep" />
          </div>
        </div>

        {/* Lista de preguntas */}
        <div className="lg:col-span-8 flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-[26px] border transition-colors duration-300 ${
                  isOpen ? "bg-white border-stone-200 shadow-[0_18px_40px_-28px_rgba(26,26,23,0.4)]" : "bg-white/50 border-stone-200/80 hover:bg-white"
                }`}
              >
                <button
                  id={`faq-${index}`}
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  className="w-full pl-6 pr-3 py-3 flex items-center justify-between text-left gap-4 min-h-[68px]"
                >
                  <span className="font-serif text-lg sm:text-xl font-medium text-ink leading-snug">
                    {faq.question}
                  </span>
                  <span
                    className={`w-10 h-10 flex-shrink-0 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen ? "bg-ink text-lime rotate-45" : "bg-cream-2 text-ink"
                    }`}
                  >
                    <Plus className="w-4 h-4" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${index}`}
                      role="region"
                      aria-labelledby={`faq-${index}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 pr-16 text-stone-600 text-[15px] leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
