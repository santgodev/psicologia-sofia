"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BrandMark } from "@/components/Doodles";

const LINKS = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#enfoque", label: "Cómo trabajo" },
  { href: "#terapias", label: "Modalidades" },
  { href: "#como-empezar", label: "Empezar" },
  { href: "#preguntas", label: "Preguntas" },
  { href: "#proposito", label: "Mi propósito" },
];

/** Navegación flotante en píldora: logo, enlaces centrados y CTA. */
export default function NavbarSofia() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full px-3 sm:px-6 pt-3 sm:pt-4">
      <div
        className={`max-w-[1240px] mx-auto h-16 pl-3 pr-2 sm:pl-4 flex items-center justify-between rounded-full border transition-all duration-300 ${
          scrolled
            ? "bg-white/85 backdrop-blur-md border-stone-200 shadow-[0_8px_30px_-12px_rgba(26,26,23,0.18)]"
            : "bg-transparent border-transparent"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2.5" aria-label="Sofía Noriega, Psicología Integral — inicio">
          <BrandMark className="w-9 h-9 group-hover:rotate-90 transition-transform duration-500" />
          <span className="flex flex-col leading-none">
            <span className="font-serif text-[20px] sm:text-[21px] font-semibold tracking-tight text-ink">
              Sofía Noriega
            </span>
            <span className="text-[10.5px] font-medium tracking-wide text-stone-500 mt-0.5">
              Psicología integral
            </span>
          </span>
        </Link>

        {/* Enlaces (escritorio) */}
        <nav
          aria-label="Principal"
          className="hidden lg:flex items-center gap-1 p-1 rounded-full border border-stone-900/10 bg-white/70"
        >
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-4 py-2 rounded-full text-[13.5px] font-medium text-stone-600 hover:text-ink hover:bg-cream-2 transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-2">
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="#contacto"
            className="hidden sm:inline-flex items-center gap-2 pl-5 pr-1.5 py-1.5 rounded-full bg-ink text-white text-[13px] font-medium"
          >
            <span>Hablemos</span>
            <span className="w-8 h-8 rounded-full bg-lime text-ink flex items-center justify-center">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </motion.a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-11 h-11 rounded-full bg-white border border-stone-200 text-ink flex items-center justify-center"
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            aria-label="Principal móvil"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden max-w-[1240px] mx-auto mt-2 p-3 rounded-[28px] bg-white border border-stone-200 shadow-xl shadow-stone-900/10 flex flex-col"
          >
            {LINKS.map((l) => (
              <Link
                key={l.href}
                onClick={() => setMobileMenuOpen(false)}
                href={l.href}
                className="px-4 py-3 rounded-2xl text-stone-800 font-medium hover:bg-cream-2"
              >
                {l.label}
              </Link>
            ))}
            <Link
              onClick={() => setMobileMenuOpen(false)}
              href="#contacto"
              className="mt-2 flex items-center justify-center gap-2 py-3.5 rounded-full bg-ink text-white font-medium text-sm"
            >
              Hablemos <ArrowUpRight className="w-4 h-4 text-lime" />
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
