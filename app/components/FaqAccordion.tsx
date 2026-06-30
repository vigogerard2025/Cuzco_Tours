"use client";

// =========================================================
// FaqAccordion — Urpi Wayra Tours
//
// Acordeón de preguntas frecuentes. Una sola pregunta abierta
// a la vez (acordeón clásico), con animación de altura suave
// y soporte de teclado/accesibilidad nativo vía <button>.
//
// Uso:
//   <FaqAccordion
//     title="Preguntas Frecuentes"
//     subtitle="Las preguntas más frecuentes en Urpi Wayra Tours"
//     items={[
//       { pregunta: "¿Es seguro viajar a Perú?", respuesta: "Sí, los destinos turísticos..." },
//     ]}
//   />
// =========================================================

import { useState } from "react";

export interface FaqAccordionItem {
  pregunta: string;
  respuesta: string;
}

interface FaqAccordionProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  items: FaqAccordionItem[];
  /** Índice abierto por defecto (null = todas cerradas) */
  indiceInicial?: number | null;
}

export default function FaqAccordion({
  eyebrow,
  title,
  subtitle,
  items,
  indiceInicial = null,
}: FaqAccordionProps) {
  const [abierto, setAbierto] = useState<number | null>(indiceInicial);

  function alternar(i: number) {
    setAbierto((actual) => (actual === i ? null : i));
  }

  return (
    <section className="w-full py-16 sm:py-24 px-6 sm:px-10 lg:px-16 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          {eyebrow && (
            <p className="font-manrope uppercase tracking-[0.16em] text-xs font-semibold text-[#2F6F4E] mb-3">
              {eyebrow}
            </p>
          )}
          <h2 className="font-fraunces text-3xl sm:text-4xl text-[#2B2118] font-medium mb-2">
            {title}
          </h2>
          {subtitle && (
            <p className="font-manrope text-[#6B5D4F] text-sm sm:text-base">
              {subtitle}
            </p>
          )}
        </div>

        <div className="divide-y divide-[#E8E2D5]">
          {items.map((item, i) => {
            const expandido = abierto === i;
            return (
              <div key={i} className="py-1">
                <button
                  type="button"
                  onClick={() => alternar(i)}
                  aria-expanded={expandido}
                  aria-controls={`faq-respuesta-${i}`}
                  className="w-full flex items-center justify-between gap-4 py-4 text-left group"
                >
                  <span className="font-manrope text-base sm:text-[17px] font-semibold text-[#2B2118] group-hover:text-[#A8512E] transition-colors">
                    {item.pregunta}
                  </span>
                  <span
                    className={`shrink-0 w-8 h-8 rounded-full border border-[#D9CFBC] flex items-center justify-center transition-transform duration-300 ${
                      expandido ? "rotate-45 bg-[#A8512E] border-[#A8512E]" : ""
                    }`}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      className={
                        expandido ? "text-[#F4EDE2]" : "text-[#2B2118]"
                      }
                    >
                      <path
                        d="M12 5v14M5 12h14"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </button>

                <div
                  id={`faq-respuesta-${i}`}
                  role="region"
                  className="overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out"
                  style={{
                    maxHeight: expandido ? "480px" : "0px",
                    opacity: expandido ? 1 : 0,
                  }}
                >
                  <p className="font-manrope text-[#5C4F42] text-sm sm:text-[15px] leading-relaxed pb-5 pr-10">
                    {item.respuesta}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
