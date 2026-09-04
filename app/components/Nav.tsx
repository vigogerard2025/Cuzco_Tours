import { getNavTours } from "@/app/lib/tours"; // ajusta la ruta si tu helper vive en otro archivo
import NavClient from "./NavClient";

// Nav ahora es un Server Component: hace el fetch de los tours (ya agrupados
// por categoría) en el servidor y se los pasa como prop al NavClient, que
// mantiene toda la interactividad (dropdowns, menú mobile, etc).
export default async function Nav() {
  const categories = await getNavTours();

  return <NavClient categories={categories} />;
}
