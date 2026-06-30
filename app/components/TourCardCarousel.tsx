"use client";

// =========================================================
// TourCardCarousel — Urpi Wayra Tours
//
// Carrusel horizontal de tarjetas de tour (TourCard) con
// scroll-snap nativo y flechas de navegación. Pensado para
// secciones como "Rutas Camino Inca a Machu Picchu".
//
// Uso:
//   <TourCardCarousel
//     eyebrow="Camino Inca"
//     title="Rutas Camino Inca a Machu Picchu"
//     tours={[{ href: "...", imageSrc: "...", title: "...", priceFrom: 965, ... }]}
//   />
// =========================================================

import { useRef, useState, useEffect, useCallback } from "react";
import TourCard, { TourCardProps } from "./Tourcard";

interface TourCardCarouselProps {
  eyebrow?: string;
  title: string;
  tours: TourCardProps[];
  /** Texto del enlace "ver todos", opcional */
  verTodosHref?: string;
  verTodosLabel?: string;
}

export default function TourCardCarousel({
  eyebrow,
  title,
  tours,
  verTodosHref,
  verTodosLabel = "Ver todas las rutas",
}: TourCardCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [puedeIzq, setPuedeIzq] = useState(false);
  const [puedeDer, setPuedeDer] = useState(true);

  const actualizarFlechas = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setPuedeIzq(el.scrollLeft > 8);
    setPuedeDer(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  }, []);

  useEffect(() => {
    actualizarFlechas();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", actualizarFlechas, { passive: true });
    window.addEventListener("resize", actualizarFlechas);
    return () => {
      el.removeEventListener("scroll", actualizarFlechas);
      window.removeEventListener("resize", actualizarFlechas);
    };
  }, [actualizarFlechas, tours.length]);

  function desplazar(direccion: 1 | -1) {
    const el = scrollRef.current;
    if (!el) return;
    const tarjeta = el.querySelector<HTMLElement>("[data-tour-card]");
    const ancho = tarjeta ? tarjeta.offsetWidth + 20 : el.clientWidth * 0.8;
    el.scrollBy({ left: direccion * ancho, behavior: "smooth" });
  }

  if (tours.length === 0) return null;

  return (
    <section className="w-full py-14 sm:py-20 px-6 sm:px-10 lg:px-16 bg-[#FBF8F2]">
      <div className="max-w-7xl mx-auto">
        {/* --- Encabezado --- */}
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8 sm:mb-10">
          <div>
            {eyebrow && (
              <p className="font-manrope uppercase tracking-[0.16em] text-xs font-semibold text-[#2F6F4E] mb-2">
                {eyebrow}
              </p>
            )}
            <h2 className="font-fraunces text-3xl sm:text-4xl text-[#2B2118] font-medium">
              {title}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            {verTodosHref && (
              <a
                href={verTodosHref}
                className="hidden sm:inline-flex font-manrope text-sm font-semibold text-[#A8512E] hover:text-[#8A3F22] items-center gap-1.5 transition-colors"
              >
                {verTodosLabel}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            )}

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => desplazar(-1)}
                disabled={!puedeIzq}
                aria-label="Tours anteriores"
                className="w-10 h-10 rounded-full border border-[#D9CFBC] flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#2B2118] hover:border-[#2B2118] group"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-[#2B2118] group-hover:text-[#F4EDE2]"
                >
                  <path
                    d="M15 18l-6-6 6-6"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => desplazar(1)}
                disabled={!puedeDer}
                aria-label="Más tours"
                className="w-10 h-10 rounded-full border border-[#D9CFBC] flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#2B2118] hover:border-[#2B2118] group"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-[#2B2118] group-hover:text-[#F4EDE2]"
                >
                  <path
                    d="M9 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* --- Carrusel --- */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-2 snap-x snap-mandatory scroll-px-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {tours.map((tour, i) => (
            <div
              key={`${tour.href}-${i}`}
              data-tour-card
              className="snap-start shrink-0 w-[260px] sm:w-[290px]"
            >
              <TourCard {...tour} />
            </div>
          ))}
        </div>

        {verTodosHref && (
          <a
            href={verTodosHref}
            className="sm:hidden mt-6 inline-flex font-manrope text-sm font-semibold text-[#A8512E] items-center gap-1.5"
          >
            {verTodosLabel}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        )}
      </div>
    </section>
  );
}
