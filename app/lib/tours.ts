// =========================================================
// app/lib/tours.ts
// Capa de datos: consultas a Prisma para poblar el homepage
// y otras páginas con datos reales de Neon (reemplaza los
// arrays *_FIXED hardcodeados en page.tsx).
// =========================================================

import { prisma } from "./prisma";
import { Prisma } from "@prisma/client";

// ---------------------------------------------------------
// Forma de datos que consume <TourCard /> / <TourCardCarousel />
// (debe coincidir con TourCardProps en app/components/Tourcard.tsx)
// ---------------------------------------------------------
export interface TourCardData {
  href: string;
  imageSrc: string;
  imageAlt: string;
  badge?: string;
  title: string;
  difficulty?: string;
  groupSize?: string;
  priceFrom: number;
}

type TourWithOptions = Prisma.TourGetPayload<{
  include: { options: true };
}>;

// ---------------------------------------------------------
// Convierte un Tour de Prisma a la forma que espera TourCard.
// Devuelve null si el tour no tiene ningún precio confirmado
// todavía (para no romper la tarjeta con "Desde USD undefined").
// ---------------------------------------------------------
function toCardData(tour: TourWithOptions): TourCardData | null {
  const precios = tour.options
    .filter((o) => o.active && o.pricePerPerson !== null)
    .map((o) => o.pricePerPerson!.toNumber());

  if (precios.length === 0) return null;

  const priceFrom = Math.min(...precios);

  const badge =
    tour.durationDays === 1
      ? "Full Day"
      : tour.durationNights
        ? `${tour.durationDays}D / ${tour.durationNights}N`
        : `${tour.durationDays}D`;

  const groupSize =
    tour.minGroupSize && tour.maxGroupSize
      ? `${tour.minGroupSize}-${tour.maxGroupSize}`
      : undefined;

  return {
    href: `/tours/${tour.slug}`,
    // Usa la imagen real del tour; si aún no se asignó, cae a un placeholder.
    imageSrc: tour.imageUrl ?? "/images/camino-inca1.jpg",
    imageAlt: tour.name,
    badge,
    title: tour.name,
    difficulty: tour.difficulty ?? undefined,
    groupSize,
    priceFrom,
  };
}

// ---------------------------------------------------------
// Tours publicados de una categoría específica (ej: "Camino Inca")
// Útil para el carrusel de Camino Inca del homepage.
// ---------------------------------------------------------
export async function getHomepageCategoryTours(
  category: string,
  limit = 4,
): Promise<TourCardData[]> {
  const tours = await prisma.tour.findMany({
    where: { category, published: true },
    orderBy: [{ featured: "desc" }, { createdAt: "asc" }],
    take: limit,
    include: { options: true },
  });

  return tours.map(toCardData).filter((t): t is TourCardData => t !== null);
}

// ---------------------------------------------------------
// Tours publicados destacados de CUALQUIER categoría, excluyendo
// una en particular. Útil para "Top Tours Recomendados".
// ---------------------------------------------------------
export async function getHomepageTopTours(
  excludeCategory?: string,
  limit = 4,
): Promise<TourCardData[]> {
  const tours = await prisma.tour.findMany({
    where: {
      published: true,
      ...(excludeCategory ? { category: { not: excludeCategory } } : {}),
    },
    orderBy: [{ featured: "desc" }, { createdAt: "asc" }],
    take: limit,
    include: { options: true },
  });

  return tours.map(toCardData).filter((t): t is TourCardData => t !== null);
}

// ---------------------------------------------------------
// Tours publicados agrupados por categoría, para el menú Nav.
// Devuelve algo como:
//   { "Camino Inca": [{ label, href }, ...], "Treks Alternativos": [...] }
// ---------------------------------------------------------
export interface NavTourLink {
  label: string;
  href: string;
}

export async function getNavToursByCategory(): Promise<
  Record<string, NavTourLink[]>
> {
  const tours = await prisma.tour.findMany({
    where: { published: true },
    orderBy: [{ category: "asc" }, { durationDays: "asc" }],
    select: { name: true, slug: true, category: true },
  });

  const grouped: Record<string, NavTourLink[]> = {};
  for (const tour of tours) {
    if (!grouped[tour.category]) grouped[tour.category] = [];
    grouped[tour.category].push({
      label: tour.name,
      href: `/tours/${tour.slug}`,
    });
  }
  return grouped;
}

// ---------------------------------------------------------
// Un tour completo por slug (para la futura página [slug])
// ---------------------------------------------------------
export async function getTourBySlug(slug: string) {
  return prisma.tour.findUnique({
    where: { slug, published: true },
    include: {
      options: { where: { active: true } },
      itinerary: { orderBy: { dayNumber: "asc" } },
      inclusions: { orderBy: { order: "asc" } },
    },
  });
}

// ---------------------------------------------------------
// Todos los tours publicados (para /tours y para generar
// los params estáticos de /tours/[slug])
// ---------------------------------------------------------
export async function getAllPublishedTours() {
  return prisma.tour.findMany({
    where: { published: true },
    orderBy: [{ category: "asc" }, { featured: "desc" }],
    include: { options: { where: { active: true } } },
  });
}
