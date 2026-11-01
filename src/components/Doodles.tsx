// =========================================================================
// Doodles de marca: pequeños gestos gráficos dibujados a mano que dan
// personalidad (inspirados en la estrella y el arcoíris de las referencias).
// Todos son decorativos → aria-hidden.
// =========================================================================
import React from "react";

type DoodleProps = React.SVGProps<SVGSVGElement>;

/** Estrella redondeada rellena */
export function StarDoodle(props: DoodleProps) {
  return (
    <svg viewBox="0 0 48 48" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M24 3.5c1.3 0 2.2 1 2.8 2.5l4 9.4 10.1 1c1.7.2 2.9.8 3.2 2 .4 1.2-.3 2.4-1.6 3.5l-7.6 6.6 2.3 9.9c.4 1.7.2 3-.8 3.7-1 .7-2.3.4-3.8-.5L24 36.4l-8.6 5.2c-1.5.9-2.8 1.2-3.8.5-1-.7-1.2-2-.8-3.7l2.3-9.9-7.6-6.6c-1.3-1.1-2-2.3-1.6-3.5.3-1.2 1.5-1.8 3.2-2l10.1-1 4-9.4c.6-1.5 1.5-2.5 2.8-2.5Z" />
    </svg>
  );
}

/** Arcoíris de tres trazos: eco del arco, gesto gráfico de la marca */
export function RainbowDoodle(props: DoodleProps) {
  return (
    <svg
      viewBox="0 0 120 80"
      fill="none"
      stroke="currentColor"
      strokeWidth="9"
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M10 74V60a50 50 0 0 1 100 0v14" />
      <path d="M30 74V61a30 30 0 0 1 60 0v13" />
      <path d="M50 74V63a10 10 0 0 1 20 0v11" />
    </svg>
  );
}

/** Destello de 4 puntas */
export function SparkleDoodle(props: DoodleProps) {
  return (
    <svg viewBox="0 0 40 40" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20 1c.9 9.6 3.9 15.6 19 19-15.1 3.4-18.1 9.4-19 19-.9-9.6-3.9-15.6-19-19C16.1 16.6 19.1 10.6 20 1Z" />
    </svg>
  );
}

/** Garabato ondulado para subrayar */
export function SquiggleDoodle(props: DoodleProps) {
  return (
    <svg
      viewBox="0 0 200 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
      preserveAspectRatio="none"
      aria-hidden="true"
      {...props}
    >
      <path d="M3 13c14-9 24-9 36 0s24 9 36 0 24-9 36 0 24 9 36 0 24-9 36 0 13 7 14 6" />
    </svg>
  );
}

/** Lazos de línea fina (ref. 3) */
export function LoopsDoodle(props: DoodleProps) {
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M-10 40C90 10 210 30 250 110s-40 170-110 130-20-170 90-170 190 120 190 230" />
    </svg>
  );
}

/** Flecha dibujada a mano */
export function ArrowDoodle(props: DoodleProps) {
  return (
    <svg
      viewBox="0 0 120 60"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M4 10c20 34 56 44 100 30" />
      <path d="M92 28l14 11-16 8" />
    </svg>
  );
}

/** Insignia de marca: círculo bosque con asterisco lima (ref. 3) */
export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex items-center justify-center rounded-full bg-forest text-lime ${className}`}
    >
      <svg viewBox="0 0 24 24" className="w-[55%] h-[55%]" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
        <path d="M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9" />
      </svg>
    </span>
  );
}

