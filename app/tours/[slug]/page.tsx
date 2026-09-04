import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { prisma } from "@/app/lib/prisma";

import TourHero from "@/app/components/tours/TourHero";
import TourOverview from "@/app/components/tours/TourOverview";
import TourItinerary from "@/app/components/tours/TourItinerary";
import TourIncludes from "@/app/components/tours/TourIncludes";
import TourBookingCard from "@/app/components/tours/TourBooking";

type TourPageProps = {
  params: Promise<{
    slug: string;
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

export default async function TourPage({ params }: TourPageProps) {
  const { slug } = await params;

  const tour = await getTour(slug);

  if (!tour) {
    notFound();
  }

  return (
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
  );
}
