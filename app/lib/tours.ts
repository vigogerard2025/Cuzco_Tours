// Reemplaza tu función getNavTours en app/lib/tours.ts por esta versión
// (o agrégala si aún no existe — no toques el resto del archivo)

import { prisma } from "./prisma"; // ajusta esta ruta si tu singleton está en otro lado

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

// Etiquetas y orden de despliegue de cada categoría en el Nav.
// Agrega aquí nuevas categorías cuando siembres tours con un category distinto.
const CATEGORY_LABELS: Record<string, string> = {
  "camino-inca": "Inca Trail",
  "cusco-valle-sagrado": "Cusco & Sacred Valley",
  "machu-picchu-tours": "Exclusive Tours to Machu Picchu", // <-- NUEVO
  "treks-alternativos": "Alternative Treks",
  "excursiones-culturales": "Cultural Excursions",
};

const CATEGORY_ORDER = [
  "camino-inca",
  "cusco-valle-sagrado",
  "machu-picchu-tours", // <-- NUEVO
  "treks-alternativos",
  "excursiones-culturales",
];

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
    // la página del tour (pestañas instantáneas, sin navegación), no desde
    // el Nav — así cada click en el Nav abre una sola página por tour,
    // en vez de disparar una carga distinta por cada modalidad.
    list.push({
      title: tour.title,
      slug: tour.slug,
      href: `/tours/${tour.slug}`,
    });

    grouped.set(tour.category, list);
  }

  // Solo devuelve categorías que realmente tienen tours sembrados,
  // en el orden definido arriba (evita dropdowns vacíos en el Nav).
  return CATEGORY_ORDER.filter((key) => grouped.has(key)).map((key) => ({
    key,
    label: CATEGORY_LABELS[key] ?? key,
    tours: grouped.get(key)!,
  }));
}
