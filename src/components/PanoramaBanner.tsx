"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function PanoramaBanner() {
  return (
    <section className="w-full py-12 px-6 max-w-[1240px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative w-full rounded-[36px] sm:rounded-[44px] overflow-hidden min-h-[260px] sm:min-h-[290px] flex items-center shadow-lg bg-stone-900"
      >
        {/* Background Meadow Photo */}
        <Image
          src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1600&q=80"
          alt="Paisaje en calma y serenidad"
          fill
          className="object-cover object-center brightness-75 contrast-95"
        />

        {/* Soft Ambient Overlay */}
        <div className="absolute inset-0 bg-stone-950/40 backdrop-blur-[1px]" />

        {/* Content Container */}
        <div className="relative z-10 w-full px-8 sm:px-14 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-white leading-snug">
              ¿Sientes que estás sobrellevando demasiado por tu cuenta?
              <br />
              <span className="italic text-stone-200">Descubre cómo podemos ayudarte</span>
            </h3>
          </div>

          {/* Dual Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="#contacto"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white text-stone-900 text-xs sm:text-sm font-medium tracking-wide shadow-md hover:bg-stone-100 transition-colors"
            >
              <span>Agendar primera sesión</span>
              <div className="w-5 h-5 rounded-full bg-stone-200 flex items-center justify-center">
                <ArrowRight className="w-3 h-3 text-stone-900" />
              </div>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="#equipo"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-stone-900/70 border border-white/20 text-white text-xs sm:text-sm font-medium tracking-wide hover:bg-stone-900 transition-colors"
            >
              <span>Conoce a Sofía</span>
              <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                <ArrowRight className="w-3 h-3 text-white" />
              </div>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
