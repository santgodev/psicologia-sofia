"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function HeroVellura() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#253F4A] via-[#2D4D59] to-[#395D6B] text-white pt-28 sm:pt-36 pb-28 lg:pb-36">
      {/* Subtle atmospheric light orbs in the background */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-10 w-80 h-80 bg-sky-300/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs (Vellura style) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] font-medium tracking-widest uppercase bg-white/10 text-white/90 border border-white/20 mb-6 shadow-xs">
              <span className="text-[10px]">♥</span>
              <span>CUIDADO QUE TE ENCUENTRA CON CALMA</span>
              <span className="text-[10px]">♥</span>
            </div>

            {/* Main Headline - Clean, modern sans, not AI-serif */}
            <h1 className="font-sans text-4xl sm:text-5xl lg:text-[4rem] font-normal sm:font-medium tracking-tight text-white leading-[1.08] max-w-2xl">
              Una forma más serena de comenzar a sanar
            </h1>

            {/* Subtitle - Clean sans-serif, warm and grounded */}
            <p className="mt-5 text-sm sm:text-base text-white/80 leading-relaxed max-w-lg font-normal">
              Ya sea que sientas que la mente no para por la ansiedad, que tu tranquilidad depende de un mensaje o que te cueste poner límites en tus relaciones, ofrecemos un acompañamiento respetuoso y seguro a tu propio ritmo.
            </p>

            {/* CTAs matching the image buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              {/* Primary Pill Button with Arrow in Circle */}
              <a
                href="#inversion"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white hover:bg-stone-100 text-[#1D353F] text-xs sm:text-sm font-medium shadow-md transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <span>Agendar una Sesión</span>
                <span className="w-5 h-5 rounded-full bg-[#1D353F] text-white flex items-center justify-center">
                  <ArrowUpRight className="w-3 h-3" />
                </span>
              </a>

              {/* Secondary Outlined Pill */}
              <a
                href="#tarjetas-bienestar"
                className="inline-flex items-center px-6 py-3.5 rounded-full border border-white/30 text-white hover:bg-white/10 text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer"
              >
                <span>Explorar Enfoques</span>
              </a>
            </div>

            {/* Social Proof Strip - Avatars and clean text */}
            <div className="mt-12 flex items-center gap-4">
              <div className="flex -space-x-2.5 overflow-hidden">
                <span className="inline-block h-8 w-8 rounded-full ring-2 ring-[#2D4D59] bg-[#E8D9C8] text-[#3D2F22] text-[10px] font-bold flex items-center justify-center">
                  SO
                </span>
                <span className="inline-block h-8 w-8 rounded-full ring-2 ring-[#2D4D59] bg-[#D4E3E5] text-[#1E3B42] text-[10px] font-bold flex items-center justify-center">
                  CR
                </span>
                <span className="inline-block h-8 w-8 rounded-full ring-2 ring-[#2D4D59] bg-[#E7D6DF] text-[#4A2438] text-[10px] font-bold flex items-center justify-center">
                  ML
                </span>
                <span className="inline-block h-8 w-8 rounded-full ring-2 ring-[#2D4D59] bg-stone-900 text-stone-200 text-[10px] font-semibold flex items-center justify-center">
                  1M+
                </span>
              </div>
              <p className="text-xs text-white/80 font-normal">
                Más de 500 personas acompañadas hacia su bienestar interior
              </p>
            </div>
          </div>

          {/* Right Column: Hero Portrait integrated into the slate atmosphere */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] sm:max-w-[390px] aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 bg-[#243F4A]">
              <Image
                src="/images/sofia_portrait.jpg"
                alt="Retrato de Sofía Noriega, Psicóloga Integral"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 400px"
                className="object-cover object-[center_20%]"
              />
              {/* Soft bottom vignette overlay */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#253F4A] via-[#253F4A]/40 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Seamless bottom fade that melts the slate-teal hero into the white background below */}
      <div className="absolute inset-x-0 bottom-0 h-24 sm:h-32 bg-gradient-to-t from-[#FBF9F5] via-[#FBF9F5]/70 to-transparent pointer-events-none" />
    </section>
  );
}
