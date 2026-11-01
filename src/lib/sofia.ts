// =========================================================================
// Datos compartidos de la web de Sofía
// =========================================================================

/**
 * Datos de contacto. El formulario NO guarda ni envía datos a ningún servidor:
 * abre WhatsApp (o el correo) con el mensaje redactado para que la persona
 * lo envíe desde su propio dispositivo.
 *
 * TODO: completar con los datos reales de Sofía.
 *  - whatsapp: solo dígitos con indicativo de país, p. ej. "573001234567"
 *  - email: p. ej. "hola@dominio.com"
 * Si ambos quedan vacíos, el formulario ofrece copiar el mensaje.
 */
export const SOFIA_CONTACT = {
  whatsapp: "",
  email: "",
};

export type SpecialtyId = "dependencia" | "relaciones" | "ansiedad" | "integral";

export interface Specialty {
  id: SpecialtyId;
  label: string;
  /** Frase breve que se muestra en el hero al elegir la especialidad */
  blurb: string;
  /** Texto con el que se rellena el motivo en el formulario */
  motive: string;
}

export const SPECIALTIES: Specialty[] = [
  {
    id: "dependencia",
    label: "Dependencia emocional",
    blurb:
      "Trabajamos los patrones de apego que te hacen sentir que tu bienestar depende de otra persona, para recuperar autonomía y límites sanos.",
    motive: "Dependencia emocional",
  },
  {
    id: "relaciones",
    label: "Relaciones y vínculos",
    blurb:
      "Exploramos cómo te vinculas, qué necesitas y cómo comunicarlo, para construir relaciones más tranquilas y recíprocas.",
    motive: "Relaciones y vínculos",
  },
  {
    id: "ansiedad",
    label: "Ansiedad",
    blurb:
      "Entendemos qué activa tu ansiedad y practicamos herramientas concretas para calmar el sobrepensamiento y regular el cuerpo.",
    motive: "Manejo de la ansiedad",
  },
  {
    id: "integral",
    label: "Autoestima y crecimiento",
    blurb:
      "Un acompañamiento individual para mirarte con más amabilidad, ordenar lo que sientes y decidir hacia dónde quieres ir.",
    motive: "Autoestima y crecimiento personal",
  },
];

/** Evento que conecta el selector del hero con Servicios y Contacto */
export const SPECIALTY_EVENT = "sofia:specialty";

/**
 * Identidad visual de cada especialidad: color pastel, tinta de contraste,
 * mascota animada (video con fondo verde, recortado en canvas) y una pregunta
 * gancho en lenguaje cotidiano.
 */
export const SPECIALTY_LOOK: Record<
  SpecialtyId,
  {
    short: string;
    hook: string;
    line: string;
    video: string;
    poster: string;
    restTime: number;
    clipRange: [number, number];
    mirror?: boolean;
    filter?: string;
    bg: string;
    ink: string;
    chip: string;
    image: string;
  }
> = {
  ansiedad: {
    short: "Ansiedad",
    hook: "¿Tu cabeza no tiene pausa?",
    line: "El día termina. Las vueltas en tu mente, no.",
    video: "/videos/personalidades/ansiedad/inquietud_suave-1.mp4",
    poster: "/images/mascots/ansiedad-vulnerable.png",
    restTime: 2.55,
    clipRange: [1.95, 3.95],
    bg: "bg-sky",
    ink: "text-sky-ink",
    chip: "border-sky-ink/30 text-sky-ink",
    image: "/images/sofia-journaling-notes.jpg",
  },
  dependencia: {
    short: "Dependencia",
    hook: "¿Tu calma depende de un mensaje?",
    line: "Si no responde, te preguntas qué hiciste mal.",
    video: "/videos/personalidades/dependencia_emocional/inseguridad_suave.mp4",
    poster: "/images/mascots/dependencia-vulnerable.png",
    restTime: 2.8,
    clipRange: [1.25, 3.95],
    bg: "bg-lilac",
    ink: "text-lilac-ink",
    chip: "border-lilac-ink/30 text-lilac-ink",
    image: "/images/sofia-serene-purpose.jpg",
  },
  relaciones: {
    short: "Relaciones",
    hook: "¿Callas para no discutir?",
    line: "Dices «no pasa nada», pero se te queda dentro.",
    video: "/videos/personalidades/relaciones/escucha_interior.mp4",
    poster: "/images/mascots/relaciones-vulnerable.png",
    restTime: 2.2,
    clipRange: [1.45, 2.85],
    bg: "bg-peach",
    ink: "text-peach-ink",
    chip: "border-peach-ink/30 text-peach-ink",
    image: "/images/sofia-terapia-online-sesion.jpg",
  },
  integral: {
    short: "Autoestima",
    hook: "¿Te hablas peor que a nadie?",
    line: "Mereces la misma amabilidad que das a otros.",
    video: "/videos/personalidades/ansiedad/inquietud_suave-1.mp4",
    poster: "/images/mascots/autoestima-vulnerable.png",
    restTime: 3.75,
    clipRange: [2.05, 3.95],
    mirror: true,
    filter: "hue-rotate(-95deg) saturate(1.08) brightness(1.03)",
    bg: "bg-butter",
    ink: "text-butter-ink",
    chip: "border-butter-ink/30 text-butter-ink",
    image: "/images/sofia-studio-casual.jpg",
  },
};

export function selectSpecialty(id: SpecialtyId) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent<SpecialtyId>(SPECIALTY_EVENT, { detail: id }));
}
