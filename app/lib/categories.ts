// Fuente única de verdad para las categorías de tours.
// getNavTours.ts y app/tours/[slug]/page.tsx importan de aquí para no
// duplicar (y desincronizar) esta lista en dos lugares.

export const CATEGORY_LABELS: Record<string, string> = {
  "camino-inca": "Inca Trail",
  "cusco-valle-sagrado": "Cusco & Sacred Valley",
  "machu-picchu-tours": "Exclusive Tours to Machu Picchu",
  "treks-alternativos": "Alternative Treks",
  "excursiones-culturales": "Cultural Excursions",
};

export const CATEGORY_ORDER = [
  "camino-inca",
  "cusco-valle-sagrado",
  "machu-picchu-tours",
  "treks-alternativos",
  "excursiones-culturales",
];

export function isCategoryKey(value: string): boolean {
  return CATEGORY_ORDER.includes(value);
}
