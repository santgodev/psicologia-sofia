"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, Video } from "lucide-react";
import { BrandMark } from "@/components/Doodles";

export default function FooterSofia() {
  const therapyLinks = [
    "Terapia Individual",
    "Terapia de Pareja",
    "Dependencia Emocional",
    "Ansiedad & Sobrepensamiento",
    "Terapia para Adolescentes",
    "Regulación Somática & Estrés",
  ];

  const issuesLinks = [
    "Apego Ansioso & Evitativo",
    "Autoestima y Límites",
    "Duelo y Rupturas Amorosas",
    "Gestión de Conflictos",
    "Trastornos de Pánico",
    "Perfeccionismo & Burnout",
  ];

  return (
    <footer className="relative w-full bg-ink text-stone-300 pt-16 pb-0 mt-12 rounded-t-[40px] sm:rounded-t-[56px] overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        {/* Top Header Banner in Footer */}
        <div className="pb-12 border-b border-stone-800 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          <div className="max-w-xl">
            <h3 className="flex items-center gap-3 font-serif text-3xl sm:text-4xl text-white font-medium tracking-tight">
              <BrandMark className="w-10 h-10" />
              Sofía Noriega
            </h3>
            <p className="mt-3 text-stone-400 text-sm leading-relaxed font-normal">
              Acompañamiento psicológico especializado en ansiedad, dependencia emocional y vínculos
              sanos. Psicoterapia 100% online por videollamada desde cualquier lugar.
            </p>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 text-xs text-stone-300">
            <a
              href="mailto:hola@sofiapsicologia.com"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4 text-stone-400" />
              <span>hola@sofiapsicologia.com</span>
            </a>
            <a
              href="tel:+34910000000"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4 text-stone-400" />
              <span>+34 910 00 00 00</span>
            </a>
            <div className="flex items-center gap-2 text-stone-400">
              <Video className="w-4 h-4 text-stone-400" />
              <span>Consulta 100% Online</span>
            </div>
          </div>
        </div>

        {/* Middle Navigation & Socials */}
        <div className="py-10 border-b border-stone-800/80 flex flex-col md:flex-row justify-between items-center gap-6">
          <nav className="flex flex-wrap justify-center gap-6 text-xs text-stone-300 font-medium">
            <Link href="#sobre-mi" className="hover:text-white transition-colors">
              Sobre Mí
            </Link>
            <Link href="#enfoque" className="hover:text-white transition-colors">
              Cómo trabajo
            </Link>
            <Link href="#terapias" className="hover:text-white transition-colors">
              Modalidades
            </Link>
            <Link href="#como-empezar" className="hover:text-white transition-colors">
              Cómo empezar
            </Link>
            <Link href="#preguntas" className="hover:text-white transition-colors">
              Preguntas Frecuentes
            </Link>
            <Link href="#proposito" className="hover:text-white transition-colors">
              Mi propósito
            </Link>
            <Link href="#contacto" className="hover:text-white transition-colors">
              Contacto
            </Link>
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-stone-800/80 flex items-center justify-center text-stone-400 hover:text-white hover:bg-stone-700 transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-stone-800/80 flex items-center justify-center text-stone-400 hover:text-white hover:bg-stone-700 transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-stone-800/80 flex items-center justify-center text-stone-400 hover:text-white hover:bg-stone-700 transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-stone-800/80 flex items-center justify-center text-stone-400 hover:text-white hover:bg-stone-700 transition-colors"
              aria-label="Twitter / X"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Directory Categorized Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 text-xs">
          <div>
            <h4 className="font-semibold text-white uppercase tracking-wider mb-3 text-[11px]">
              Especialidades
            </h4>
            <ul className="space-y-2 text-stone-400">
              {therapyLinks.slice(0, 3).map((item, i) => (
                <li key={i}>
                  <a href="#servicios" className="hover:text-stone-200 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white uppercase tracking-wider mb-3 text-[11px]">
              Áreas de Intervención
            </h4>
            <ul className="space-y-2 text-stone-400">
              {therapyLinks.slice(3).map((item, i) => (
                <li key={i}>
                  <a href="#servicios" className="hover:text-stone-200 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white uppercase tracking-wider mb-3 text-[11px]">
              Motivos de Consulta
            </h4>
            <ul className="space-y-2 text-stone-400">
              {issuesLinks.slice(0, 3).map((item, i) => (
                <li key={i}>
                  <a href="#preguntas" className="hover:text-stone-200 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white uppercase tracking-wider mb-3 text-[11px]">
              Legal & Ética
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li>
                <a href="#" className="hover:text-stone-200 transition-colors">
                  Aviso Legal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-stone-200 transition-colors">
                  Política de Privacidad (RGPD)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-stone-200 transition-colors">
                  Código Deontológico
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-stone-200 transition-colors">
                  Política de Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-stone-800/60 flex flex-col sm:flex-row justify-between items-center text-[11px] text-stone-500 gap-4">
          <p>© 2026 Sofía Noriega · Psicología Integral. Todos los derechos reservados.</p>
          <p>Psicología Clínica Colegiada · Registro Sanitario Oficial</p>
        </div>
      </div>

      {/* Wordmark gigante de cierre */}
      <div aria-hidden="true" className="relative mt-6 select-none pointer-events-none">
        <p className="font-serif font-medium italic text-center text-[14.5vw] leading-[0.82] tracking-[-0.04em] text-white/[0.06] translate-y-[10%] whitespace-nowrap">
          Sofía Noriega
        </p>
        <span className="absolute left-1/2 top-[12%] -translate-x-1/2 w-[7vw] max-w-[90px] aspect-square">
          <BrandMark className="w-full h-full animate-spin-slow" />
        </span>
      </div>
    </footer>
  );
}
