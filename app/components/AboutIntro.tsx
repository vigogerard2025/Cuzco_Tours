// =========================================================
// AboutIntro — Urpi Wayra Tours
//
// Sección de introducción/presentación de la empresa: eyebrow +
// título + párrafo destacado + CTA, con una imagen a un lado.
// Equivalente a la sección "Vive la mejor aventura de trekking
// en los Andes" de la referencia.
//
// Uso:
//   <AboutIntro
//     eyebrow="Sobre nosotros"
//     title="Urpi Wayra Tours: vive los Andes con expertos locales"
//     paragraphs={[
//       "Explora las rutas más impresionantes del Cusco con guías locales...",
//       "Prepárate para una travesía que transformará tu manera de viajar."
//     ]}
//     ctaLabel="Conoce más sobre nosotros"
//     ctaHref="/nosotros"
//     imageSrc="/images/about/equipo-urpi-wayra.jpg"
//     imageAlt="Equipo de guías de Urpi Wayra Tours"
//     imagePosition="right"
//   />
// =========================================================

interface AboutIntroProps {
  eyebrow?: string;
  title: string;
  /** Uno o varios párrafos; las palabras entre **dobles asteriscos** se resaltan */
  paragraphs: string[];
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
}

// Convierte **texto** en <strong> de forma segura (sin dangerouslySetInnerHTML
// arbitrario): solo dividimos por el delimitador, sin interpretar HTML.
function resaltarTexto(texto: string) {
  const partes = texto.split(/\*\*(.+?)\*\*/g);
  return partes.map((parte, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-[#2B2118]">
        {parte}
      </strong>
    ) : (
      <span key={i}>{parte}</span>
    ),
  );
}

export default function AboutIntro({
  eyebrow,
  title,
  paragraphs,
  ctaLabel,
  ctaHref,
  imageSrc,
  imageAlt,
  imagePosition = "right",
}: AboutIntroProps) {
  const imagenPrimero = imagePosition === "left";

  return (
    <section className="w-full py-16 sm:py-24 px-6 sm:px-10 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* --- Imagen --- */}
        <div
          className={`relative ${imagenPrimero ? "lg:order-1" : "lg:order-2"}`}
        >
          <div className="relative aspect-[5/4] rounded-2xl overflow-hidden">
            <img
              src={imageSrc}
              alt={imageAlt}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          {/* Acento decorativo: marco terracota detrás de la imagen */}
          <div
            className={`hidden sm:block absolute -z-10 w-24 h-24 rounded-2xl bg-[#D9A24B]/20 ${
              imagenPrimero ? "-bottom-5 -right-5" : "-bottom-5 -left-5"
            }`}
            aria-hidden="true"
          />
        </div>

        {/* --- Texto --- */}
        <div className={imagenPrimero ? "lg:order-2" : "lg:order-1"}>
          {eyebrow && (
            <p className="font-manrope uppercase tracking-[0.16em] text-xs font-semibold text-[#2F6F4E] mb-3">
              {eyebrow}
            </p>
          )}
          <h2 className="font-fraunces text-3xl sm:text-4xl lg:text-[2.65rem] leading-[1.1] text-[#2B2118] font-medium mb-5">
            {title}
          </h2>

          <div className="font-manrope text-[#5C4F42] text-base leading-relaxed space-y-4">
            {paragraphs.map((p, i) => (
              <p key={i}>{resaltarTexto(p)}</p>
            ))}
          </div>

          {ctaLabel && ctaHref && (
            <a
              href={ctaHref}
              className="mt-7 inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#A8512E] hover:bg-[#8A3F22] text-[#F4EDE2] font-manrope text-sm font-semibold transition-colors"
            >
              {ctaLabel}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
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
      </div>
    </section>
  );
}
