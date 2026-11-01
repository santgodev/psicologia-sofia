"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#13242A] text-stone-400 py-14 border-t border-white/5 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/10">
          {/* Brand & Bio */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="font-sans font-medium text-white text-base tracking-tight">
                Sofía Noriega · Psicóloga
              </span>
            </div>
            <p className="text-stone-400 leading-relaxed pr-6 font-normal">
              Acompañamiento psicoterapéutico especializado en procesos de dependencia emocional, ansiedad y relaciones sanas. Un espacio clínico con alma humana para recuperar tu paz.
            </p>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3">
            <h4 className="font-sans font-medium text-stone-200 mb-3 text-xs uppercase tracking-wider">
              Navegación
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li>
                <a href="#sobre-mi" className="hover:text-white transition-colors">
                  Sobre la Dra. Sofía
                </a>
              </li>
              <li>
                <a href="#tarjetas-bienestar" className="hover:text-white transition-colors">
                  Áreas de Especialidad
                </a>
              </li>
              <li>
                <a href="#metodologia" className="hover:text-white transition-colors">
                  Metodología en 4 Pasos
                </a>
              </li>
              <li>
                <a href="#ejercicios-semanales" className="hover:text-white transition-colors">
                  Herramientas y Ejercicios
                </a>
              </li>
              <li>
                <a href="#inversion" className="hover:text-white transition-colors">
                  Tarifas e Inversión
                </a>
              </li>
            </ul>
          </div>

          {/* Medical disclaimer & emergencies */}
          <div className="md:col-span-4">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-2 text-stone-200 font-medium mb-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Atención en Crisis y Urgencias</span>
              </div>
              <p className="text-[11px] text-stone-400 leading-relaxed font-normal">
                Este sitio ofrece psicoterapia programada. Si te encuentras en una crisis aguda con riesgo vital, por favor acude a un centro de urgencias médicas o contacta la línea de emergencia local (123 / 911 / Línea 106).
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-400 text-[11px]">
          <p>© 2026 Dra. Sofía · Todos los derechos reservados. Registro Profesional de Salud.</p>
          <p className="flex items-center gap-1 text-stone-400">
            Diseñado con serenidad, evidencia clínica y calidez ♥
          </p>
        </div>
      </div>
    </footer>
  );
}
