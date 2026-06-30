// =========================================================
// WhyChooseUs — Urpi Wayra Tours
//
// Grid de razones para elegir la empresa (guías expertos,
// clientes satisfechos, apoyo a comunidades, etc.), cada una
// con un ícono inline (SVG, sin dependencias externas), título
// y descripción corta.
//
// Uso:
//   <WhyChooseUs
//     title="¿Por qué viajar con Urpi Wayra Tours?"
//     reasons={[
//       { icon: "guide", title: "Guías expertos", description: "..." },
//       { icon: "community", title: "Apoyo a comunidades andinas", description: "..." },
//     ]}
//   />
// =========================================================

import type { ReactElement } from "react";

export type WhyChooseUsIcon =
  | "guide"
  | "users"
  | "community"
  | "leaf"
  | "handshake"
  | "porters"
  | "food"
  | "tent";

export interface WhyChooseUsReason {
  icon: WhyChooseUsIcon;
  title: string;
  description: string;
}

interface WhyChooseUsProps {
  eyebrow?: string;
  title: string;
  reasons: WhyChooseUsReason[];
}

// Íconos inline (outline, trazo 1.6, 24x24) — evita dependencias externas
// y permite recolorear con currentColor según el contexto.
const ICONOS: Record<WhyChooseUsIcon, ReactElement> = {
  guide: (
    <>
      <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M5 20c0-3.3 3.1-6 7-6s7 2.7 7 6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M9 8l1.3-2.6L12 8l1.7-2.6L15 8"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  users: (
    <>
      <circle cx="8.5" cy="8" r="2.8" stroke="currentColor" strokeWidth="1.6" />
      <circle
        cx="16"
        cy="9.2"
        r="2.2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M3.5 19c0-2.8 2.3-5 5-5s5 2.2 5 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M14.5 14.5c2.1.2 3.8 2 3.8 4.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </>
  ),
  community: (
    <>
      <path
        d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="11" r="2.4" stroke="currentColor" strokeWidth="1.6" />
    </>
  ),
  leaf: (
    <>
      <path
        d="M19 5C13 5 6 9 6 16c0 1.5.5 2.5 1 3 1-4 4-9 12-12 0 0-1.5 6-6 9.5-2 1.5-4.2 2-6 2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  handshake: (
    <>
      <path
        d="M3 12l4-4 3 3 2-2 3 3 4-4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 11l3 3.5a1.6 1.6 0 0 0 2.4-2L10 10"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 11l3 3.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </>
  ),
  porters: (
    <>
      <circle cx="12" cy="6" r="2.3" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M8 10h8l1.5 4H6.5L8 10z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M9 14v6M15 14v6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </>
  ),
  food: (
    <>
      <path
        d="M6 3v8a3 3 0 0 0 6 0V3M9 3v8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M9 11v10"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M17 3c-1.7 0-3 2-3 4.5S15.3 12 17 12s3-2 3-4.5S18.7 3 17 3z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M17 12v9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </>
  ),
  tent: (
    <>
      <path
        d="M12 4l8 16H4l8-16z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M12 4v16M9 11.5L6.5 20M15 11.5L17.5 20"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
};

export default function WhyChooseUs({
  eyebrow,
  title,
  reasons,
}: WhyChooseUsProps) {
  return (
    <section className="w-full py-16 sm:py-24 px-6 sm:px-10 lg:px-16 bg-[#2B2118]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          {eyebrow && (
            <p className="font-manrope uppercase tracking-[0.16em] text-xs font-semibold text-[#E8C77E] mb-3">
              {eyebrow}
            </p>
          )}
          <h2 className="font-fraunces text-3xl sm:text-4xl text-[#F4EDE2] font-medium">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {reasons.map((razon, i) => (
            <div key={i} className="flex flex-col items-start">
              <div className="w-12 h-12 rounded-full bg-[#3D2B1F] flex items-center justify-center mb-4 text-[#E8C77E]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  {ICONOS[razon.icon]}
                </svg>
              </div>
              <h3 className="font-fraunces text-lg text-[#F4EDE2] font-medium mb-1.5">
                {razon.title}
              </h3>
              <p className="font-manrope text-sm leading-relaxed text-[#C9BEAE]">
                {razon.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
