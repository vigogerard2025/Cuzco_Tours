import type { Metadata } from "next";
import { getAllTours } from "@/app/lib/tours";
import CategoryToursGrid from "@/app/components/tours/CategoryToursGrid";

export const metadata: Metadata = {
  title: "Ofertas | Urpi Wayra Adventures",
  description: "Explore all our tours and current pricing.",
};

export default async function OfertasPage() {
  const tours = await getAllTours();

  return (
    <main className="min-h-screen bg-[#F7F4EF] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B27A22]">
          Ofertas
        </p>
        <h1 className="mt-2 font-heading text-3xl font-semibold text-[#3B2921] sm:text-4xl">
          All our tours
        </h1>
        <p className="mt-3 max-w-2xl text-stone-600">
          Browse our full catalog of tours and treks across Cusco and the Sacred
          Valley.
        </p>

        <CategoryToursGrid tours={tours} />
      </div>
    </main>
  );
}
