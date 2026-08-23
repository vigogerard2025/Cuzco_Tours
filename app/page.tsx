// =========================================================
// app/page.tsx
// SERVER COMPONENT — consulta Prisma/Neon en el servidor y
// pasa los tours reales al HomeClient (que sigue siendo
// "use client" porque necesita el selector de idioma).
// =========================================================

import HomeClient from "./components/HomeClient";
import { getHomepageCategoryTours, getHomepageTopTours } from "./lib/tours";

export default async function Home() {
  const [caminoIncaTours, topTours] = await Promise.all([
    getHomepageCategoryTours("Camino Inca", 4),
    getHomepageTopTours("Camino Inca", 4),
  ]);

  return <HomeClient caminoIncaTours={caminoIncaTours} topTours={topTours} />;
}
