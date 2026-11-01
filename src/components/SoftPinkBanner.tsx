"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function SoftPinkBanner() {
  return (
    <section className="w-full py-14 px-6 max-w-[1240px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="w-full bg-gradient-to-b from-[#FCE8ED] via-[#F8DBE2] to-[#F5D2DB] rounded-[48px] sm:rounded-[64px] py-14 sm:py-16 px-6 sm:px-12 text-center shadow-sm relative overflow-hidden"
      >
        <div className="max-w-xl mx-auto flex flex-col items-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-normal text-stone-900 leading-snug">
            ¿Llegaste hasta aquí?
            <br />
            ¿Por qué no dar el siguiente paso?
            <span className="inline-block ml-2 text-2xl sm:text-3xl animate-bounce">
              🌸
            </span>
          </h2>

          <p className="mt-4 text-stone-700 text-sm sm:text-base font-normal max-w-md">
            Estamos listas para acompañarte en tu proceso de salud mental con calidez,
            empatía y sin presiones.
          </p>

          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href="#contacto"
            className="mt-8 inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-stone-900 text-stone-50 text-xs sm:text-sm font-medium tracking-wide shadow-md hover:bg-stone-800 transition-colors group"
          >
            <span>Agendar primera sesión</span>
            <div className="w-5 h-5 rounded-full bg-stone-700 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
              <ArrowRight className="w-3 h-3 text-stone-100" />
            </div>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
