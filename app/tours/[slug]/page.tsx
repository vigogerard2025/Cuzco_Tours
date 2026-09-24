import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { prisma } from "@/app/lib/prisma";
import { isCategoryKey, CATEGORY_LABELS } from "@/app/lib/categories";
import { getToursByCategory } from "@/app/lib/tours";

import TourHero from "@/app/components/tours/TourHero";
import TourOverview from "@/app/components/tours/TourOverview";
import TourItinerary from "@/app/components/tours/TourItinerary";
import TourIncludes from "@/app/components/tours/TourIncludes";
import TourBookingCard from "@/app/components/tours/TourBooking";
import CategoryToursGrid from "@/app/components/tours/CategoryToursGrid";
import { TourModalityProvider } from "@/app/context/TourModalityContext";

type TourPageProps = {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{
    type?: string;
  }>;
};

async function getTour(slug: string) {
  return prisma.tour.findUnique({
    where: {
      slug,
    },
    include: {
      prices: {
        orderBy: {
          price: "asc",
        },
      },
      itineraries: {
        orderBy: {
          day: "asc",
        },
      },
      includes: {
        orderBy: {
          id: "asc",
        },
      },
      excludes: {
        orderBy: {
          id: "asc",
        },
      },
      images: {
        orderBy: {
          id: "asc",
        },
      },
    },
  });
}

export async function generateMetadata({
  params,
}: TourPageProps): Promise<Metadata> {
  const { slug } = await params;

  if (isCategoryKey(slug)) {
    return {
      title: `${CATEGORY_LABELS[slug] ?? slug} | Urpi Wayra Adventures`,
    };
  }

  const tour = await getTour(slug);

  if (!tour) {
    return {
      title: "Tour not found | Urpi Wayra Adventures",
    };
  }

  return {
    title: `${tour.title} | Urpi Wayra Adventures`,
    description: tour.description,
  };
}

export default async function TourPage({
  params,
  searchParams,
}: TourPageProps) {
  const { slug } = await params;

  // --- Caso 1: es una categoría (ej. /tours/camino-inca) -----------------
  if (isCategoryKey(slug)) {
    const tours = await getToursByCategory(slug);

    return (
      <main className="min-h-screen bg-[#F7F4EF] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B27A22]">
            Explore our tours
          </p>
          <h1 className="mt-2 font-heading text-3xl font-semibold text-[#3B2921] sm:text-4xl">
            {CATEGORY_LABELS[slug] ?? slug}
          </h1>

          <CategoryToursGrid tours={tours} />
        </div>
      </main>
    );
  }

  // --- Caso 2: es un tour individual (ej. /tours/city-tour-cusco) --------
  const { type } = await searchParams;
  const tour = await getTour(slug);

  if (!tour) {
    notFound();
  }

  const initialType = tour.prices.some((p) => p.type === type)
    ? (type as string)
    : (tour.prices[0]?.type ?? "");

  return (
    <TourModalityProvider initialType={initialType}>
      <main className="min-h-screen bg-[#F7F4EF]">
        <TourHero tour={tour} />

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
            <div className="space-y-12">
              <TourOverview tour={tour} />

              <TourItinerary itinerary={tour.itineraries} />

              <TourIncludes includes={tour.includes} excludes={tour.excludes} />
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <TourBookingCard
                prices={tour.prices}
                maxGroupSize={tour.maxGroupSize}
              />
            </aside>
          </div>
        </section>
      </main>
    </TourModalityProvider>
  );
}
