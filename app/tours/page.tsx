import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";

import { prisma } from "@/app/lib/prisma";
import TourCard from "@/app/components/tours/TourCard";

export const metadata: Metadata = {
  title: "Tours in Peru | Urpi Wayra Adventures",
  description:
    "Explore our tours in Cusco, Machu Picchu, the Inca Trail and the Sacred Valley.",
};

async function getTours() {
  return prisma.tour.findMany({
    orderBy: {
      title: "asc",
    },
    include: {
      images: {
        orderBy: {
          id: "asc",
        },
        take: 1,
      },
    },
  });
}

export default async function ToursPage() {
  const tours = await getTours();

  return (
    <main className="min-h-screen bg-[#F7F4EF]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#3B2921]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#D9A441] blur-3xl" />
          <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[#B85C38] blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#F5C76A]">
              <Compass size={18} />
              <span>Explore Peru</span>
            </div>

            <h1 className="font-fraunces text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Discover your next
              <span className="block text-[#F5C76A]">
                unforgettable journey.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
              Explore Cusco, Machu Picchu, the Sacred Valley and the legendary
              trails of the Andes with experiences designed by local experts.
            </p>
          </div>
        </div>
      </section>

      {/* TOURS */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {/* HEADER */}
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B27A22]">
              Our experiences
            </p>

            <h2 className="mt-2 font-fraunces text-3xl font-semibold text-[#3B2921] sm:text-4xl">
              Explore our tours
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-stone-600">
              Choose an adventure and discover the landscapes, history and
              culture that make Peru unforgettable.
            </p>
          </div>

          <div className="text-sm text-stone-500">
            {tours.length} {tours.length === 1 ? "experience" : "experiences"}
          </div>
        </div>

        {/* TOUR GRID */}
        {tours.length > 0 ? (
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {tours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl bg-white px-6 py-16 text-center shadow-sm ring-1 ring-black/5">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#F3E4C4] text-[#8B641F]">
              <Compass size={26} />
            </div>

            <h3 className="mt-5 font-fraunces text-2xl font-semibold text-[#3B2921]">
              No tours available yet
            </h3>

            <p className="mx-auto mt-3 max-w-md text-stone-500">
              We are preparing unforgettable experiences for your next adventure
              in Peru.
            </p>

            <Link
              href="/"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#3B2921] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#4A3328]"
            >
              Back to home
              <ArrowRight size={17} />
            </Link>
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="bg-[#3B2921]">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F5C76A]">
            Your adventure starts here
          </p>

          <h2 className="mx-auto mt-3 max-w-3xl font-fraunces text-3xl font-semibold text-white sm:text-4xl">
            Not sure which tour is right for you?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/70">
            Tell us what kind of experience you are looking for and we can help
            you find the perfect adventure.
          </p>

          <Link
            href="/contacto"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#D9A441] px-6 py-3.5 font-semibold text-[#3B2921] transition hover:bg-[#F5C76A]"
          >
            Talk to us
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
