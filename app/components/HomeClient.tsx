"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  MapPin,
  Compass,
  Mountain,
  Users,
  Heart,
  ShieldCheck,
  Star,
} from "lucide-react";

const slides = [
  {
    image: "/images/machu-picchu.jpg",
    eyebrow: "DISCOVER PERU",
    title: "Where every journey",
    highlight: "becomes a story.",
    description:
      "Explore Cusco, Machu Picchu and the ancient wonders of the Andes with unforgettable experiences.",
  },
  {
    image: "/images/cusco.jpg",
    eyebrow: "EXPLORE CUSCO",
    title: "Walk through",
    highlight: "living history.",
    description:
      "Discover the streets, traditions and landscapes that make Cusco one of the world's most fascinating destinations.",
  },
  {
    image: "/images/inca-trail.jpg",
    eyebrow: "THE INCA TRAIL",
    title: "Follow the path",
    highlight: "of the Incas.",
    description:
      "Experience breathtaking mountains, ancient trails and the legendary journey to Machu Picchu.",
  },
  {
    image: "/images/sacred-valley.jpg",
    eyebrow: "SACRED VALLEY",
    title: "Beyond the",
    highlight: "ordinary.",
    description:
      "Discover spectacular landscapes, archaeological sites and authentic Andean culture.",
  },
];

const destinations = [
  {
    title: "Machu Picchu",
    subtitle: "The lost city of the Incas",
    image: "/images/machu-picchu.jpg",
    href: "/tours/machu-picchu",
  },
  {
    title: "Cusco",
    subtitle: "History at every corner",
    image: "/images/cusco.jpg",
    href: "/tours/cusco",
  },
  {
    title: "Inca Trail",
    subtitle: "Walk in the footsteps of the Incas",
    image: "/images/inca-trail.jpg",
    href: "/tours/camino-inca",
  },
  {
    title: "Sacred Valley",
    subtitle: "Nature, culture and ancient traditions",
    image: "/images/sacred-valley.jpg",
    href: "/tours/cusco-valle-sagrado",
  },
];

const featuredTours = [
  {
    title: "Classic Inca Trail",
    description:
      "An unforgettable journey through ancient Inca paths, dramatic mountains and spectacular landscapes.",
    image: "/images/inca-trail.jpg",
    duration: "4 Days",
    difficulty: "Moderate",
    href: "/tours/camino-inca-4-dias",
  },
  {
    title: "Machu Picchu Experience",
    description:
      "Discover one of the world's most iconic archaeological wonders with an unforgettable journey.",
    image: "/images/machu-picchu.jpg",
    duration: "1 Day",
    difficulty: "Easy",
    href: "/tours/machu-picchu",
  },
  {
    title: "Sacred Valley",
    description:
      "Explore ancient ruins, colorful villages and breathtaking landscapes across the Sacred Valley.",
    image: "/images/sacred-valley.jpg",
    duration: "1 Day",
    difficulty: "Easy",
    href: "/tours/cusco-valle-sagrado",
  },
];

export default function HomeClient() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[current];

  return (
    <main className="bg-stone-50">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative h-[calc(100vh-145px)] min-h-[620px] overflow-hidden">
        {slides.map((item, index) => (
          <div
            key={item.image}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              priority={index === 0}
              className="object-cover"
              sizes="100vw"
            />

            <div className="absolute inset-0 bg-black/35" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/10" />

            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
          </div>
        ))}

        {/* HERO CONTENT */}

        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl text-white">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-amber-400" />

                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">
                  {slide.eyebrow}
                </span>
              </div>

              <h1 className="font-fraunces text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">
                {slide.title}

                <br />

                <span className="italic text-amber-300">{slide.highlight}</span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-7 text-stone-200 sm:text-lg">
                {slide.description}
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/tours"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#b85c38] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#9e4b2e] hover:shadow-xl"
                >
                  Explore our tours
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/contacto"
                  className="inline-flex items-center rounded-full border border-white/60 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-stone-900"
                >
                  Plan your journey
                </Link>
              </div>

              <div className="mt-9 flex items-center gap-2 text-sm text-stone-300">
                <MapPin size={15} className="text-amber-400" />

                <span>Cusco · Peru</span>
              </div>
            </div>
          </div>
        </div>

        {/* ARROWS */}

        <button
          type="button"
          onClick={previousSlide}
          aria-label="Previous slide"
          className="absolute left-5 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-white/30 bg-black/20 p-3 text-white backdrop-blur-sm transition-all hover:bg-white hover:text-stone-900 md:block"
        >
          <ChevronLeft size={22} />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-5 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-white/30 bg-black/20 p-3 text-white backdrop-blur-sm transition-all hover:bg-white hover:text-stone-900 md:block"
        >
          <ChevronRight size={22} />
        </button>

        {/* INDICATORS */}

        <div className="absolute bottom-9 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setCurrent(index)}
              className={`h-1 rounded-full transition-all duration-500 ${
                index === current
                  ? "w-10 bg-amber-300"
                  : "w-5 bg-white/50 hover:bg-white"
              }`}
            />
          ))}
        </div>

        {/* NUMBER */}

        <div className="absolute bottom-8 right-8 z-20 hidden items-center gap-3 text-white md:flex">
          <span className="font-fraunces text-2xl">0{current + 1}</span>

          <span className="h-px w-8 bg-white/40" />

          <span className="text-xs text-white/60">0{slides.length}</span>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#b85c38]">
              Your journey starts here
            </p>

            <h2 className="font-fraunces text-4xl leading-tight text-stone-900 sm:text-5xl">
              Discover the magic
              <br />
              <span className="italic text-[#b85c38]">of the Andes</span>
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-stone-600">
              From the ancient streets of Cusco to the legendary paths of the
              Incas, we create meaningful travel experiences that connect you
              with Peru&apos;s landscapes, history and culture.
            </p>

            <Link
              href="/quienes-somos"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-stone-900 transition-colors hover:text-[#b85c38]"
            >
              Learn more about us
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          DESTINATIONS
      ====================================================== */}

      <section className="bg-[#E9E4DD] py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#b85c38]">
                Explore Peru
              </p>

              <h2 className="font-fraunces text-4xl text-stone-900 sm:text-5xl">
                Places that stay
                <span className="italic text-[#b85c38]"> with you</span>
              </h2>
            </div>

            <Link
              href="/tours"
              className="inline-flex items-center gap-2 text-sm font-semibold text-stone-800 hover:text-[#b85c38]"
            >
              View all destinations
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {destinations.map((destination) => (
              <Link
                key={destination.title}
                href={destination.href}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="relative h-[390px]">
                  <Image
                    src={destination.image}
                    alt={destination.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <p className="mb-2 text-xs uppercase tracking-widest text-amber-300">
                      Discover
                    </p>

                    <h3 className="font-fraunces text-2xl">
                      {destination.title}
                    </h3>

                    <p className="mt-1 text-sm text-white/75">
                      {destination.subtitle}
                    </p>

                    <div className="mt-4 flex items-center gap-2 text-sm font-semibold opacity-0 transition-all duration-300 group-hover:opacity-100">
                      Explore
                      <ArrowRight size={15} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY US
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#b85c38]">
              Why Urpi Wayra
            </p>

            <h2 className="font-fraunces text-4xl leading-tight text-stone-900 sm:text-5xl">
              Travel with
              <br />
              <span className="italic text-[#b85c38]">purpose.</span>
            </h2>

            <p className="mt-6 max-w-md leading-7 text-stone-600">
              We believe the best journeys are more than places you visit. They
              are moments, connections and stories that stay with you long after
              you return home.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <FeatureCard
              icon={<Compass size={23} />}
              title="Authentic experiences"
              description="Discover Peru beyond the usual tourist routes."
            />

            <FeatureCard
              icon={<Mountain size={23} />}
              title="Local knowledge"
              description="Explore the Andes with people who know and love the region."
            />

            <FeatureCard
              icon={<Users size={23} />}
              title="Personal attention"
              description="Small groups and experiences designed around you."
            />

            <FeatureCard
              icon={<ShieldCheck size={23} />}
              title="Travel with confidence"
              description="Thoughtful planning and support throughout your journey."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURED TOURS
      ====================================================== */}

      <section className="bg-[#3B2921] py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">
                Handpicked experiences
              </p>

              <h2 className="font-fraunces text-4xl text-white sm:text-5xl">
                Start your
                <span className="italic text-amber-300"> adventure</span>
              </h2>
            </div>

            <Link
              href="/tours"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition hover:text-amber-300"
            >
              Explore all tours
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {featuredTours.map((tour) => (
              <article
                key={tour.title}
                className="group overflow-hidden rounded-2xl bg-white"
              >
                <Link href={tour.href}>
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={tour.image}
                      alt={tour.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    <div className="absolute bottom-4 left-4 flex gap-2">
                      <span className="rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-stone-800">
                        {tour.duration}
                      </span>

                      <span className="rounded-full bg-[#D9A441] px-3 py-1.5 text-xs font-semibold text-[#3B2921]">
                        {tour.difficulty}
                      </span>
                    </div>
                  </div>
                </Link>

                <div className="p-6">
                  <Link href={tour.href}>
                    <h3 className="font-fraunces text-2xl text-[#3B2921] transition-colors group-hover:text-[#b85c38]">
                      {tour.title}
                    </h3>
                  </Link>

                  <p className="mt-3 text-sm leading-6 text-stone-600">
                    {tour.description}
                  </p>

                  <Link
                    href={tour.href}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#8B641F]"
                  >
                    Discover this tour
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          TESTIMONIAL / QUOTE
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#F1ECE5] py-24">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-[#b85c38]/10" />

        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full border border-[#b85c38]/10" />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="mb-6 flex justify-center gap-1 text-[#D9A441]">
            <Star size={18} fill="currentColor" />
            <Star size={18} fill="currentColor" />
            <Star size={18} fill="currentColor" />
            <Star size={18} fill="currentColor" />
            <Star size={18} fill="currentColor" />
          </div>

          <p className="font-fraunces text-3xl leading-relaxed text-[#3B2921] sm:text-4xl">
            &ldquo;The greatest journeys are not measured in miles, but in the
            memories we bring home.&rdquo;
          </p>

          <div className="mx-auto mt-8 h-px w-12 bg-[#b85c38]" />

          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.25em] text-stone-500">
            Travel · Discover · Connect
          </p>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#2B1D17] py-24">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/machu-picchu.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        <div className="absolute inset-0 bg-[#2B1D17]/85" />

        <div className="relative mx-auto max-w-4xl px-6 text-center text-white">
          <Heart size={30} className="mx-auto mb-6 text-amber-300" />

          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">
            Your Peruvian adventure awaits
          </p>

          <h2 className="font-fraunces text-4xl leading-tight sm:text-6xl">
            Ready to discover
            <br />
            <span className="italic text-amber-300">Peru differently?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-stone-300">
            Let us help you create a journey through the Andes that you will
            remember for years to come.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              href="/tours"
              className="inline-flex items-center gap-3 rounded-full bg-[#b85c38] px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-[#9e4b2e] hover:shadow-xl"
            >
              Explore our tours
              <ArrowRight size={17} />
            </Link>

            <Link
              href="/contacto"
              className="inline-flex items-center rounded-full border border-white/40 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#3B2921]"
            >
              Talk to us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* =========================================================
   FEATURE CARD
========================================================= */

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-2xl border border-stone-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F3E4C4] text-[#8B641F] transition-colors group-hover:bg-[#D9A441] group-hover:text-[#3B2921]">
        {icon}
      </div>

      <h3 className="text-lg font-semibold text-[#3B2921]">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-stone-600">{description}</p>
    </div>
  );
}
