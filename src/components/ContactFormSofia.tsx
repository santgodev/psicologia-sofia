"use client";

import React, { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, Check, Copy, Lock } from "lucide-react";
import { motion } from "framer-motion";
import {
  SOFIA_CONTACT,
  SPECIALTIES,
  SPECIALTY_EVENT,
  type SpecialtyId,
} from "@/lib/sofia";
import { RainbowDoodle, SparkleDoodle, StarDoodle } from "@/components/Doodles";

type Status = "idle" | "opened" | "copy";

const OTHER = "Otro / aún no lo tengo claro";

/**
 * Formulario sin backend: NO guarda ni envía datos a ningún servidor.
 * Compone el mensaje y abre WhatsApp (o el correo) para que la persona
 * lo envíe desde su propio dispositivo.
 */
export default function ContactFormSofia() {
  const [name, setName] = useState("");
  const [motive, setMotive] = useState("");
  const [details, setDetails] = useState("");
  const [touched, setTouched] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [copied, setCopied] = useState(false);

  // Rellena el motivo cuando se elige una especialidad en el hero o en Servicios
  useEffect(() => {
    const onSelect = (e: Event) => {
      const id = (e as CustomEvent<SpecialtyId>).detail;
      const s = SPECIALTIES.find((x) => x.id === id);
      if (s) setMotive(s.motive);
    };
    window.addEventListener(SPECIALTY_EVENT, onSelect);
    return () => window.removeEventListener(SPECIALTY_EVENT, onSelect);
  }, []);

  const message = useMemo(() => {
    const lines = [`Hola Sofía, soy ${name.trim() || "…"}.`];
    if (motive) lines.push(`Me gustaría consultar sobre: ${motive}.`);
    if (details.trim()) lines.push("", details.trim());
    return lines.join("\n");
  }, [name, motive, details]);

  const channel = SOFIA_CONTACT.whatsapp ? "WhatsApp" : SOFIA_CONTACT.email ? "correo" : null;
  const nameError = touched && !name.trim();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (!name.trim()) return;

    if (SOFIA_CONTACT.whatsapp) {
      const url = `https://wa.me/${SOFIA_CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank", "noopener,noreferrer");
      setStatus("opened");
    } else if (SOFIA_CONTACT.email) {
      const subject = encodeURIComponent(`Consulta${motive ? `: ${motive}` : ""}`);
      window.location.href = `mailto:${SOFIA_CONTACT.email}?subject=${subject}&body=${encodeURIComponent(message)}`;
      setStatus("opened");
    } else {
      setStatus("copy");
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const fieldClass =
    "w-full px-5 py-4 rounded-2xl bg-cream-2/70 border text-[15px] text-ink placeholder-stone-400 focus:outline-none focus:bg-white focus-visible:ring-2 focus-visible:ring-ink transition-all";

  const motiveOptions = [...SPECIALTIES.map((s) => ({ value: s.motive, label: s.label })), { value: OTHER, label: "Aún no lo tengo claro" }];

  return (
    <section id="contacto" className="w-full py-10 sm:py-16 px-4 sm:px-6 max-w-[1240px] mx-auto scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative rounded-[36px] sm:rounded-[48px] bg-lime p-6 sm:p-12 lg:p-16 overflow-hidden"
      >
        <RainbowDoodle className="absolute -right-6 -bottom-4 w-56 text-ink/10 pointer-events-none" />

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5">
            <p className="eyebrow !bg-white/60 !border-ink/15">Contacto</p>
            <h2 className="mt-5 font-serif font-medium text-4xl sm:text-6xl text-ink tracking-[-0.03em] leading-[1.02]">
              ¿No sabes si es el momento? <span className="italic">Escríbeme igual.</span>
            </h2>
            <p className="mt-6 text-ink/75 text-base sm:text-[17px] leading-relaxed max-w-md">
              Cuéntame brevemente qué te trae. Te responderé con calma para resolver tus dudas y
              coordinar tu primera sesión online.
            </p>
            <p className="mt-6 inline-flex items-start gap-2.5 p-3 pr-4 rounded-2xl bg-white/50 text-[12.5px] text-ink/70 max-w-sm">
              <Lock className="w-4 h-4 mt-0.5 flex-shrink-0" />
              Tus datos no se guardan en esta web: el mensaje se envía directamente desde tu
              {channel ? ` ${channel}` : " dispositivo"}.
            </p>
            <div className="hidden lg:flex items-center gap-3 mt-10">
              <StarDoodle className="w-10 text-ink animate-float" />
              <SparkleDoodle className="w-6 text-ink/60" />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-[28px] sm:rounded-[32px] bg-white p-5 sm:p-8 shadow-[0_30px_60px_-30px_rgba(26,26,23,0.45)]">
              {status === "opened" ? (
                <div role="status" className="py-8 text-center">
                  <div className="w-14 h-14 rounded-full bg-lime text-ink flex items-center justify-center mx-auto mb-4">
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif text-2xl text-ink">Abrimos {channel} con tu mensaje</h3>
                  <p className="mt-2 text-stone-600 text-sm max-w-md mx-auto">
                    Solo falta que pulses enviar allí. Si no se abrió, puedes intentarlo de nuevo.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-sm font-medium underline underline-offset-4 text-ink"
                  >
                    Volver al formulario
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-semibold text-ink mb-2">
                      ¿Cómo te llamas? <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      autoComplete="given-name"
                      placeholder="Tu nombre"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      onBlur={() => setTouched(true)}
                      aria-invalid={nameError}
                      aria-describedby={nameError ? "contact-name-error" : undefined}
                      className={`${fieldClass} ${nameError ? "border-rose-500" : "border-transparent"}`}
                    />
                    {nameError && (
                      <p id="contact-name-error" className="mt-1.5 text-xs text-rose-700">
                        Escribe tu nombre para que Sofía sepa cómo dirigirse a ti.
                      </p>
                    )}
                  </div>

                  <fieldset>
                    <legend className="block text-sm font-semibold text-ink mb-2">
                      ¿Sobre qué te gustaría consultar?{" "}
                      <span className="font-normal text-stone-500">(opcional)</span>
                    </legend>
                    <div className="flex flex-wrap gap-2">
                      {motiveOptions.map((o) => {
                        const on = motive === o.value;
                        return (
                          <label
                            key={o.value}
                            className={`cursor-pointer px-4 py-2.5 rounded-full border text-[13.5px] font-medium transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ink ${
                              on
                                ? "bg-ink text-white border-ink"
                                : "bg-white text-stone-700 border-stone-300 hover:border-ink"
                            }`}
                          >
                            <input
                              type="radio"
                              name="contact-motive"
                              value={o.value}
                              checked={on}
                              onChange={() => setMotive(o.value)}
                              onClick={() => on && setMotive("")}
                              className="sr-only"
                            />
                            {on && <Check className="inline w-3.5 h-3.5 mr-1 -mt-0.5 text-lime" />}
                            {o.label}
                          </label>
                        );
                      })}
                    </div>
                  </fieldset>

                  <div>
                    <label htmlFor="contact-details" className="block text-sm font-semibold text-ink mb-2">
                      Mensaje
                    </label>
                    <textarea
                      id="contact-details"
                      rows={4}
                      placeholder="Lo que quieras contar, con tus palabras…"
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      className={`${fieldClass} border-transparent resize-none`}
                    />
                  </div>

                  <button
                    id="contact-submit"
                    type="submit"
                    className="group w-full flex items-center justify-between gap-2 pl-7 pr-2 py-2 rounded-full bg-ink text-white font-medium text-[15px] hover:bg-stone-800 transition-colors"
                  >
                    <span>{channel ? `Enviar por ${channel}` : "Preparar mensaje"}</span>
                    <span className="w-11 h-11 rounded-full bg-lime text-ink flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                      <ArrowUpRight className="w-5 h-5" />
                    </span>
                  </button>

                  {status === "copy" && (
                    <div role="status" className="rounded-2xl bg-cream-2 p-5 text-sm text-stone-700">
                      <p className="font-semibold text-ink">Tu mensaje está listo</p>
                      <pre className="mt-3 whitespace-pre-wrap font-sans text-stone-600 bg-white rounded-xl p-4">
                        {message}
                      </pre>
                      <button
                        type="button"
                        onClick={handleCopy}
                        className="mt-3 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-ink text-white text-sm font-medium"
                      >
                        {copied ? <Check className="w-4 h-4 text-lime" /> : <Copy className="w-4 h-4" />}
                        {copied ? "Copiado" : "Copiar mensaje"}
                      </button>
                    </div>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
