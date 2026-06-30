// =========================================================
// CategoryShowcase — Urpi Wayra Tours
//
// Grid de categorías de experiencia (Aventura, Cultural,
// Místico, etc.) con imagen, título y descripción corta.
// Cada tarjeta enlaza a un listado filtrado por esa categoría.
//
// Uso:
//   <CategoryShowcase
//     title="Elige tu tipo de experiencia"
//     categories={[
//       {
//         href: "/tours?categoria=aventura",
//         imageSrc: "/images/categorias/aventura.jpg",
//         imageAlt: "Trekking de aventura en los Andes",
//         title: "Aventura",
//         description: "Treks de varios días por los caminos ancestrales de los Andes."
//       },
//       ...
//     ]}
//   />
// =========================================================

export interface CategoryItem {
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

interface CategoryShowcaseProps {
  eyebrow?: string;
  title: string;
  categories: CategoryItem[];
}

export default function CategoryShowcase({
  eyebrow,
  title,
  categories,
}: CategoryShowcaseProps) {
  return (
    <section className="w-full py-16 sm:py-24 px-6 sm:px-10 lg:px-16 bg-[#FBF8F2]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          {eyebrow && (
            <p className="font-manrope uppercase tracking-[0.16em] text-xs font-semibold text-[#2F6F4E] mb-3">
              {eyebrow}
            </p>
          )}
          <h2 className="font-fraunces text-3xl sm:text-4xl text-[#2B2118] font-medium">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {categories.map((cat) => (
            <a
              key={cat.href}
              href={cat.href}
              className="group relative flex flex-col justify-end overflow-hidden rounded-2xl aspect-[3/4] sm:aspect-[4/5]"
            >
              <img
                src={cat.imageSrc}
                alt={cat.imageAlt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#2B2118]/90 via-[#2B2118]/30 to-transparent"
                aria-hidden="true"
              />
              <div className="relative z-[1] p-5">
                <h3 className="font-fraunces text-xl text-[#F4EDE2] font-medium mb-1.5">
                  {cat.title}
                </h3>
                <p className="font-manrope text-[13px] leading-snug text-[#F4EDE2]/85 line-clamp-3">
                  {cat.description}
                </p>
                <span className="mt-3 inline-flex items-center gap-1.5 font-manrope text-xs font-semibold text-[#E8C77E] opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  Explorar
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
