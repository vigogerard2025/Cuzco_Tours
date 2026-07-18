"use client";

// =========================================================
// HeroImage — Urpi Wayra Tours
//
// Carrusel de imágenes para el hero de inicio. Las imágenes se
// barajan en un orden aleatorio al cargar, con navegación manual
// mediante flechas izquierda/derecha — ahora disparadas también
// al pasar el cursor (hover), no solo con clic.
//
// Transición: fade + slide direccional + Ken Burns sutil en la
// imagen activa.
// =========================================================

import { useState, useRef, useEffect, useCallback } from "react";

export interface HeroImageSlide {
  src: string;
  alt: string;
}

interface HeroImageProps {
  images: HeroImageSlide[];
  title?: string;
  subtitle?: string;
  heightClassName?: string;
}

// Baraja un array sin mutar el original (Fisher-Yates)
function barajar<T>(arr: T[]): T[] {
  const copia = [...arr];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

// Duración de la transición (ms) — usada tanto en CSS como en el
// "lock" que evita disparos repetidos mientras el mouse está encima.
const DURACION_TRANSICION = 850;

export default function HeroImage({
  images,
  title,
  subtitle,
  heightClassName = "h-[78vh] min-h-[520px]",
}: HeroImageProps) {
  const [orden, setOrden] = useState<HeroImageSlide[]>(images);
  const [indice, setIndice] = useState(0);
  const [direccion, setDireccion] = useState<"siguiente" | "anterior">(
    "siguiente",
  );
  const [animandoFlecha, setAnimandoFlecha] = useState<"izq" | "der" | null>(
    null,
  );
  const montado = useRef(false);

  // Guarda el índice que ACABA de dejar de estar activo, para poder
  // animarlo "saliendo" en la dirección correcta.
  const indiceSalienteRef = useRef<number | null>(null);

  // Evita que el hover dispare varias transiciones seguidas mientras
  // el cursor permanece sobre la flecha.
  const hoverLockRef = useRef(false);

  useEffect(() => {
    if (!montado.current && images.length > 0) {
      setOrden(barajar(images));
      montado.current = true;
    }
  }, [images]);

  const totalSlides = orden.length;

  const irA = useCallback(
    (nuevoIndice: number, dir: "siguiente" | "anterior") => {
      if (totalSlides === 0) return;
      setDireccion(dir);
      setIndice((actual) => {
        indiceSalienteRef.current = actual;
        return ((nuevoIndice % totalSlides) + totalSlides) % totalSlides;
      });
    },
    [totalSlides],
  );

  const irSiguiente = useCallback(() => {
    setAnimandoFlecha("der");
    irA(indice + 1, "siguiente");
    window.setTimeout(() => setAnimandoFlecha(null), 220);
  }, [indice, irA]);

  const irAnterior = useCallback(() => {
    setAnimandoFlecha("izq");
    irA(indice - 1, "anterior");
    window.setTimeout(() => setAnimandoFlecha(null), 220);
  }, [indice, irA]);

  // --- Disparo por HOVER (con lock para no encadenar transiciones) ---
  const manejarHoverSiguiente = useCallback(() => {
    if (hoverLockRef.current) return;
    hoverLockRef.current = true;
    irSiguiente();
    window.setTimeout(() => {
      hoverLockRef.current = false;
    }, DURACION_TRANSICION);
  }, [irSiguiente]);

  const manejarHoverAnterior = useCallback(() => {
    if (hoverLockRef.current) return;
    hoverLockRef.current = true;
    irAnterior();
    window.setTimeout(() => {
      hoverLockRef.current = false;
    }, DURACION_TRANSICION);
  }, [irAnterior]);

  // Navegación con teclado (accesibilidad)
  useEffect(() => {
    function manejarTecla(e: KeyboardEvent) {
      if (e.key === "ArrowRight") irSiguiente();
      if (e.key === "ArrowLeft") irAnterior();
    }
    window.addEventListener("keydown", manejarTecla);
    return () => window.removeEventListener("keydown", manejarTecla);
  }, [irSiguiente, irAnterior]);

  if (totalSlides === 0) {
    return (
      <div
        className={`relative ${heightClassName} w-full flex items-center justify-center bg-[var(--color-tierra,#3D2B1F)]`}
      >
        <p className="text-[var(--color-arena,#F4EDE2)] font-manrope text-sm opacity-70">
          Agrega imágenes en /public/images/hero/ para activar el carrusel.
        </p>
      </div>
    );
  }

  return (
    <section
      className={`relative ${heightClassName} w-full overflow-hidden bg-[#2B2118]`}
      aria-roledescription="carrusel"
      aria-label={title ?? "Imágenes destacadas de Urpi Wayra Tours"}
    >
      {/* --- Capas de imagen: fade + slide direccional + Ken Burns --- */}
      {orden.map((slide, i) => {
        const esActiva = i === indice;
        const esSaliente = indiceSalienteRef.current === i && !esActiva;

        // Desplazamiento horizontal (%) según el estado del slide.
        // - Activa: siempre en el centro (0%)
        // - Saliente: se desliza hacia el lado opuesto de la dirección
        // - Inactiva "en espera": permanece del lado por donde entrará
        let translateX = "0%";
        let transicion = "none";
        let zIndex = 0;

        if (esActiva) {
          translateX = "0%";
          transicion = `opacity ${DURACION_TRANSICION}ms cubic-bezier(0.22,0.61,0.36,1), transform ${DURACION_TRANSICION}ms cubic-bezier(0.22,0.61,0.36,1)`;
          zIndex = 2;
        } else if (esSaliente) {
          translateX = direccion === "siguiente" ? "-3.5%" : "3.5%";
          transicion = `opacity ${DURACION_TRANSICION}ms cubic-bezier(0.22,0.61,0.36,1), transform ${DURACION_TRANSICION}ms cubic-bezier(0.22,0.61,0.36,1)`;
          zIndex = 1;
        } else {
          translateX = direccion === "siguiente" ? "3.5%" : "-3.5%";
          transicion = "none";
          zIndex = 0;
        }

        return (
          <div
            key={`${slide.src}-${i}`}
            aria-hidden={!esActiva}
            className="absolute inset-0"
            style={{
              opacity: esActiva ? 1 : 0,
              transform: `translateX(${translateX}) scale(${esActiva ? 1 : 1.04})`,
              transition: transicion,
              zIndex,
            }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.src})`,
                animation: esActiva
                  ? "heroKenBurns 9s ease-out forwards"
                  : "none",
              }}
              role="img"
              aria-label={slide.alt}
            />
          </div>
        );
      })}

      {/* --- Overlay de legibilidad --- */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(43,33,24,0.15) 0%, rgba(43,33,24,0.35) 55%, rgba(43,33,24,0.7) 100%)",
        }}
      />

      {/* --- Contenido textual --- */}
      {(title || subtitle) && (
        <div className="relative z-[3] h-full flex flex-col items-start justify-end px-6 sm:px-12 pb-20 sm:pb-24 max-w-4xl">
          {subtitle && (
            <p className="font-manrope uppercase tracking-[0.18em] text-xs sm:text-sm text-[#E8C77E] mb-3 font-semibold">
              {subtitle}
            </p>
          )}
          {title && (
            // 👇 Tipografía tipo "display" bold, similar a la referencia
            <h1
              className="font-poppins font-black uppercase tracking-tight leading-[1.02]
                         text-4xl sm:text-5xl lg:text-6xl text-[#F4EDE2]
                         [text-shadow:0_2px_18px_rgba(0,0,0,0.35)]"
            >
              {title}
            </h1>
          )}
        </div>
      )}

      {/* --- Flecha izquierda --- */}
      <button
        type="button"
        onClick={irAnterior}
        onMouseEnter={manejarHoverAnterior}
        aria-label="Imagen anterior"
        className={`group absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-[4] flex items-center justify-center
          w-11 h-11 sm:w-14 sm:h-14 rounded-full
          bg-[#F4EDE2]/15 hover:bg-[#E8C77E]/25 backdrop-blur-md
          border border-[#F4EDE2]/30 hover:border-[#E8C77E]/70
          transition-all duration-300
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8C77E] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
          ${animandoFlecha === "izq" ? "scale-90" : "scale-100 hover:scale-110"}
        `}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          className="text-[#F4EDE2] transition-transform duration-300 group-hover:-translate-x-1"
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

      {/* --- Flecha derecha --- */}
      <button
        type="button"
        onClick={irSiguiente}
        onMouseEnter={manejarHoverSiguiente}
        aria-label="Imagen siguiente"
        className={`group absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-[4] flex items-center justify-center
          w-11 h-11 sm:w-14 sm:h-14 rounded-full
          bg-[#F4EDE2]/15 hover:bg-[#E8C77E]/25 backdrop-blur-md
          border border-[#F4EDE2]/30 hover:border-[#E8C77E]/70
          transition-all duration-300
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8C77E] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
          ${animandoFlecha === "der" ? "scale-90" : "scale-100 hover:scale-110"}
        `}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          className="text-[#F4EDE2] transition-transform duration-300 group-hover:translate-x-1"
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

      {/* --- Indicadores (puntos) --- */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-[4] flex items-center gap-2">
        {orden.map((slide, i) => (
          <button
            key={`indicador-${slide.src}-${i}`}
            type="button"
            onClick={() => irA(i, i > indice ? "siguiente" : "anterior")}
            aria-label={`Ir a la imagen ${i + 1} de ${totalSlides}`}
            aria-current={i === indice}
            className="p-1.5 -m-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8C77E] rounded-full"
          >
            <span
              className={`block rounded-full transition-all duration-300 ${
                i === indice
                  ? "w-6 h-1.5 bg-[#E8C77E]"
                  : "w-1.5 h-1.5 bg-[#F4EDE2]/50 hover:bg-[#F4EDE2]/80"
              }`}
            />
          </button>
        ))}
      </div>

      <style>{`
        @keyframes heroKenBurns {
          from { transform: scale(1); }
          to { transform: scale(1.08); }
        }
        @media (prefers-reduced-motion: reduce) {
          section[aria-roledescription="carrusel"] * {
            animation: none !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}
