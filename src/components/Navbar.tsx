"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X, Sparkles } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Sobre mí", href: "#sobre-mi" },
    { label: "Enfoques", href: "#tarjetas-bienestar" },
    { label: "Metodología", href: "#metodologia" },
    { label: "Herramientas", href: "#ejercicios-semanales" },
    { label: "Testimonios", href: "#testimonios" },
    { label: "Inversión", href: "#inversion" },
    { label: "Preguntas", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#243F49]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo - clean and refined */}
        <a href="#" className="flex items-center gap-2.5 group focus:outline-none">
          <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
          <span className="font-sans font-medium text-white text-lg tracking-tight">
            Sofía Noriega
          </span>
          <span className="text-white/40 text-xs font-normal hidden sm:inline">
            · Psicología Integral
          </span>
        </a>

        {/* Center Navigation Links - Sans font, airy and light */}
        <nav className="hidden lg:flex items-center gap-7 text-[13px] font-normal text-white/80">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors duration-150 py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Button - Exact Pill with Arrow in circle from the image */}
        <div className="flex items-center gap-3">
          <a
            href="#inversion"
            className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white hover:bg-stone-100 text-[#1E363F] text-xs sm:text-sm font-medium shadow-sm transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <span>Agendar Cita</span>
            <span className="w-5 h-5 rounded-full bg-[#1E363F]/10 flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-[#1E363F]" />
            </span>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-white/90 hover:bg-white/10 transition-colors focus:outline-none"
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#243F49] border-b border-white/10 px-6 py-6 flex flex-col gap-3 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/80 hover:text-white py-2 text-sm font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#inversion"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 w-full py-3 rounded-full bg-white text-[#1E363F] text-center text-sm font-medium flex items-center justify-center gap-2"
          >
            <span>Agendar Cita</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
}
