import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3, Mountain } from "lucide-react";

type TourCardProps = {
  tour: {
    title: string;
    slug: string;
    description: string;
    duration: string;
    difficulty: string;
    price: number | null;
    images: {
      id: number;
      url: string;
      alt: string | null;
    }[];
  };
};

export default function TourCard({ tour }: TourCardProps) {
  const image = tour.images[0];

  return (
    <article className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* IMAGE */}
      <Link href={`/tours/${tour.slug}`} className="block">
        <div className="relative h-64 overflow-hidden">
          {image ? (
            <Image
              src={image.url}
              alt={image.alt || tour.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          ) : (
            <div className="absolute inset-0 bg-[#4A3328]" />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          {/* DIFFICULTY */}
          <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-[#3B2921] shadow-sm">
            {tour.difficulty}
          </span>

          {/* PRICE */}
          {tour.price !== null && (
            <div className="absolute bottom-4 right-4 rounded-xl bg-[#3B2921]/90 px-4 py-2 text-white backdrop-blur-sm">
              <span className="text-xs text-white/70">From</span>

              <span className="ml-1 text-lg font-bold text-[#F5C76A]">
                ${tour.price.toFixed(0)}
              </span>
            </div>
          )}
        </div>
      </Link>

      {/* CONTENT */}
      <div className="p-6">
        <Link href={`/tours/${tour.slug}`}>
          <h3 className="font-heading text-2xl font-semibold leading-tight text-[#3B2921] transition-colors group-hover:text-[#B27A22]">
            {tour.title}
          </h3>
        </Link>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-stone-600">
          {tour.description}
        </p>

        {/* DETAILS */}
        <div className="mt-5 flex flex-wrap gap-4 border-t border-stone-100 pt-4">
          <div className="flex items-center gap-2 text-sm text-stone-500">
            <Clock3 size={17} className="text-[#B27A22]" />
            {tour.duration}
          </div>

          <div className="flex items-center gap-2 text-sm text-stone-500">
            <Mountain size={17} className="text-[#B27A22]" />
            {tour.difficulty}
          </div>
        </div>

        {/* LINK */}
        <Link
          href={`/tours/${tour.slug}`}
          className="mt-5 flex items-center justify-between border-t border-stone-100 pt-4 text-sm font-semibold text-[#8B641F] transition-colors hover:text-[#3B2921]"
        >
          <span>Explore this tour</span>

          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </article>
  );
}
