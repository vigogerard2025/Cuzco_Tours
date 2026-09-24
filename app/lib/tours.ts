import { prisma } from "./prisma"; // ajusta esta ruta si tu singleton está en otro lado
import { CATEGORY_LABELS, CATEGORY_ORDER } from "@/app/lib/categories";

// ---------------------------------------------------------------------------
// getTourBySlug — trae un tour individual completo (precios, itinerario,
// incluye/no incluye, imágenes). Tu página de tour actual usa su propia
// función local getTour(), así que esta queda disponible por si la
// necesitas en otro lugar (por ejemplo, una vista previa o un admin panel).
// ---------------------------------------------------------------------------

export async function getTourBySlug(slug: string) {
  return prisma.tour.findUnique({
    where: { slug },
    include: {
      prices: {
        orderBy: { type: "asc" }, // "Group" antes que "Private"
      },
      itineraries: {
        orderBy: { day: "asc" },
      },
      includes: true,
      excludes: true,
      images: true,
    },
  });
}

// ---------------------------------------------------------------------------
// getNavTours — arma la estructura del menú de navegación: una entrada por
// categoría (Inca Trail, Cusco & Sacred Valley, etc.), cada una con la
// lista de tours que le pertenecen. Solo devuelve categorías que
// realmente tienen tours sembrados, en el orden definido en categories.ts.
// ---------------------------------------------------------------------------

export type NavTourLink = {
  title: string;
  slug: string;
  href: string;
};

export type NavCategoryData = {
  key: string;
  label: string;
  tours: NavTourLink[];
};

export async function getNavTours(): Promise<NavCategoryData[]> {
  const tours = await prisma.tour.findMany({
    select: {
      title: true,
      slug: true,
      category: true,
    },
    orderBy: {
      title: "asc",
    },
  });

  const grouped = new Map<string, NavTourLink[]>();

  for (const tour of tours) {
    const list = grouped.get(tour.category) ?? [];

    // Un solo link por tour. La elección Grupal/Privado se hace DENTRO de
    // la página del tour (pestañas instantáneas), no desde el Nav.
    list.push({
      title: tour.title,
      slug: tour.slug,
      href: `/tours/${tour.slug}`,
    });

    grouped.set(tour.category, list);
  }

  return CATEGORY_ORDER.filter((key) => grouped.has(key)).map((key) => ({
    key,
    label: CATEGORY_LABELS[key] ?? key,
    tours: grouped.get(key)!,
  }));
}

// ---------------------------------------------------------------------------
// getToursByCategory — trae todos los tours de una categoría, con lo
// necesario para pintar la grilla de tarjetas en /tours/[category].
// ---------------------------------------------------------------------------

export async function getToursByCategory(category: string) {
  return prisma.tour.findMany({
    where: { category },
    select: {
      title: true,
      slug: true,
      description: true,
      duration: true,
      difficulty: true,
      price: true,
      prices: {
        select: { type: true, price: true },
        orderBy: { price: "asc" },
      },
      images: {
        select: { url: true, alt: true },
        take: 1,
      },
    },
    orderBy: { title: "asc" },
  });
}
