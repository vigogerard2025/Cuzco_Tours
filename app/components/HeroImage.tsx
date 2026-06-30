"use client";

// =========================================================
// HeroImage — Urpi Wayra Tours
//
// Carrusel de imágenes para el hero de inicio. Las imágenes se
// barajan en un orden aleatorio al cargar (sin repetir el mismo
// orden cada vez que se monta el componente), con navegación
// 100% manual mediante flechas izquierda/derecha.
//
// Transición: cross-fade + "Ken Burns" sutil (zoom lento) en la
// imagen activa, y un micro-rebote en la flecha al hacer clic
// para dar feedback táctil inmediato.
//
// Uso:
//   <HeroImage
//     images={[
//       { src: "/images/hero/01-vinicunca.jpg", alt: "Montaña de 7 Colores" },
//       { src: "/images/hero/02-machupicchu.jpg", alt: "Machu Picchu al amanecer" },
//     ]}
//     title="Vive los Andes a tu manera"
//     subtitle="Tours grupales y privados desde Cusco"
//   />
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
  /** Altura del hero. Por defecto ocupa el viewport menos el topbar. */
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

export default function HeroImage({
  images,
  title,
  subtitle,
  heightClassName = "h-[78vh] min-h-[520px]",
}: HeroImageProps) {
  // Orden aleatorio calculado una sola vez al montar el componente
  const [orden, setOrden] = useState<HeroImageSlide[]>(images);
  const [indice, setIndice] = useState(0);
  const [direccion, setDireccion] = useState<"siguiente" | "anterior">(
    "siguiente",
  );
  const [animandoFlecha, setAnimandoFlecha] = useState<"izq" | "der" | null>(
    null,
  );
  const montado = useRef(false);

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
      // módulo positivo para envolver correctamente en ambos sentidos
      setIndice(((nuevoIndice % totalSlides) + totalSlides) % totalSlides);
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
      {/* --- Capas de imagen con cross-fade + Ken Burns --- */}
      {orden.map((slide, i) => {
        const esActiva = i === indice;
        return (
          <div
            key={`${slide.src}-${i}`}
            aria-hidden={!esActiva}
            className="absolute inset-0 transition-opacity duration-[1100ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{ opacity: esActiva ? 1 : 0, zIndex: esActiva ? 1 : 0 }}
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

      {/* --- Overlay de legibilidad (gradiente terracota oscuro) --- */}
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
            <h1 className="font-fraunces text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-[#F4EDE2] font-medium">
              {title}
            </h1>
          )}
        </div>
      )}

      {/* --- Flecha izquierda --- */}
      <button
        type="button"
        onClick={irAnterior}
        aria-label="Imagen anterior"
        className={`group absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-[4] flex items-center justify-center
          w-11 h-11 sm:w-14 sm:h-14 rounded-full
          bg-[#F4EDE2]/15 hover:bg-[#F4EDE2]/25 backdrop-blur-md
          border border-[#F4EDE2]/30
          transition-all duration-200
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8C77E] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
          ${animandoFlecha === "izq" ? "scale-90" : "scale-100 hover:scale-105"}
        `}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          className="text-[#F4EDE2] transition-transform duration-200 group-hover:-translate-x-0.5"
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
        aria-label="Imagen siguiente"
        className={`group absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-[4] flex items-center justify-center
          w-11 h-11 sm:w-14 sm:h-14 rounded-full
          bg-[#F4EDE2]/15 hover:bg-[#F4EDE2]/25 backdrop-blur-md
          border border-[#F4EDE2]/30
          transition-all duration-200
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8C77E] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
          ${animandoFlecha === "der" ? "scale-90" : "scale-100 hover:scale-105"}
        `}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          className="text-[#F4EDE2] transition-transform duration-200 group-hover:translate-x-0.5"
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

      {/* Keyframes del Ken Burns sutil (zoom lento sin mover el encuadre demasiado).
          Nota: usamos <style> estándar (no styled-jsx) para máxima compatibilidad
          de tipos; los nombres de la animación son lo bastante específicos
          (heroKenBurns) para no chocar con otros estilos del proyecto. */}
      <style>{`
        @keyframes heroKenBurns {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.08);
          }
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
