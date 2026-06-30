// =========================================================
// TourCard — Urpi Wayra Tours
//
// Tarjeta de tour reutilizable (estilo "Rutas Camino Inca" /
// "Top Tours Recomendados" de la referencia). Recibe props
// genéricas; no depende del modelo de Prisma para que puedas
// usarla con datos mock o reales indistintamente.
//
// Uso:
//   <TourCard
//     href="/tours/camino-inca-clasico-4-dias-privado"
//     imageSrc="/images/tours/camino-inca-clasico-4-dias/01-portada.jpg"
//     imageAlt="Camino Inca Clásico 4 días"
//     badge="04D / 03N"
//     title="Camino Inca Clásico a Machu Picchu"
//     difficulty="Moderado"
//     groupSize="2-8"
//     rating={5}
//     reviewCount={51}
//     priceFrom={965}
//   />
// =========================================================

export interface TourCardProps {
  href: string;
  imageSrc: string;
  imageAlt: string;
  /** Etiqueta corta sobre la imagen, ej: "04D / 03N" o "Full Day" */
  badge?: string;
  title: string;
  /** Ej: "Fácil", "Moderado", "Moderado a exigente", "Exigente" */
  difficulty?: string;
  /** Ej: "2-8" (rango de tamaño de grupo) */
  groupSize?: string;
  /** Rating de 1 a 5 (se muestra como estrellas) */
  rating?: number;
  reviewCount?: number;
  /** Precio "desde" en USD, sin formatear */
  priceFrom: number;
  /** Moneda — por defecto USD */
  currency?: string;
}

function Estrellas({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="13"
          height="13"
          viewBox="0 0 20 20"
          fill={i < Math.round(rating) ? "#2F6F4E" : "#E0DACD"}
        >
          <path d="M10 1.5l2.6 5.3 5.8.8-4.2 4.1 1 5.8L10 14.7l-5.2 2.8 1-5.8L1.6 7.6l5.8-.8L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function TourCard({
  href,
  imageSrc,
  imageAlt,
  badge,
  title,
  difficulty,
  groupSize,
  rating,
  reviewCount,
  priceFrom,
  currency = "USD",
}: TourCardProps) {
  return (
    <a
      href={href}
      className="group flex flex-col w-full bg-white rounded-2xl overflow-hidden border border-[#E8E2D5] hover:border-[#D9A24B]/50 hover:shadow-lg hover:shadow-[#3D2B1F]/8 transition-all duration-300"
    >
      {/* --- Imagen --- */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#E8E2D5]">
        <img
          src={imageSrc}
          alt={imageAlt}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {badge && (
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#2B2118]/80 backdrop-blur-sm text-[11px] font-manrope font-semibold tracking-wide text-[#F4EDE2]">
            {badge}
          </span>
        )}
        <span className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gradient-to-t from-[#2B2118]/85 to-transparent">
          <span className="font-manrope text-xs font-semibold text-[#E8C77E]">
            Desde {currency} {priceFrom.toLocaleString("en-US")}
          </span>
        </span>
      </div>

      {/* --- Contenido --- */}
      <div className="flex flex-col flex-1 px-4 pt-4 pb-5 gap-2">
        <h3 className="font-fraunces text-lg leading-snug text-[#2B2118] font-medium line-clamp-2 group-hover:text-[#A8512E] transition-colors">
          {title}
        </h3>

        {(difficulty || groupSize) && (
          <div className="flex items-center gap-3 font-manrope text-xs text-[#6B5D4F]">
            {groupSize && (
              <span className="flex items-center gap-1">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M17 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 5 18.5V20M11 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    stroke="#A8512E"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
                {groupSize} pax
              </span>
            )}
            {difficulty && (
              <span className="flex items-center gap-1">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 20L9 8l4 7 2-3 6 8H3Z"
                    stroke="#A8512E"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {difficulty}
              </span>
            )}
          </div>
        )}

        {rating !== undefined && (
          <div className="flex items-center gap-1.5 mt-0.5">
            <Estrellas rating={rating} />
            {reviewCount !== undefined && (
              <span className="font-manrope text-xs text-[#6B5D4F]">
                de +{reviewCount} opiniones
              </span>
            )}
          </div>
        )}

        <span className="mt-auto pt-3 font-manrope text-sm font-semibold text-[#A8512E] inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
          Ver detalles
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </a>
  );
}
