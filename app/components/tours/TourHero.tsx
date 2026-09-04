import Image from "next/image";
import { CalendarDays, Mountain, Users, Languages } from "lucide-react";

type TourHeroProps = {
  tour: {
    title: string;
    description: string;
    duration: string;
    difficulty: string;
    maxAltitude: number | null;
    maxGroupSize: number | null;
    languages: string;
    images: {
      id: number;
      url: string;
      alt: string | null;
    }[];
  };
};

export default function TourHero({ tour }: TourHeroProps) {
  const mainImage = tour.images[0];

  return (
    <section className="relative bg-[#3B2921]">
      {/* HERO IMAGE */}
      <div className="relative h-[560px] w-full overflow-hidden">
        {mainImage ? (
          <Image
            src={mainImage.url}
            alt={mainImage.alt || tour.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        ) : (
          <div className="absolute inset-0 bg-[#4A3328]" />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#241712] via-black/40 to-black/10" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-4 pb-16 sm:px-6 lg:px-8">
          <div className="max-w-4xl text-white">
            {/* Badge */}
            <div className="mb-5 flex flex-wrap gap-3">
              <span className="rounded-full bg-[#D9A441] px-4 py-2 text-sm font-bold text-[#3B2921]">
                {tour.duration}
              </span>

              <span className="rounded-full border border-white/40 bg-black/20 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                {tour.difficulty}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {tour.title}
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-3xl text-base leading-7 text-white/90 sm:text-lg">
              {tour.description}
            </p>
          </div>
        </div>
      </div>

      {/* QUICK INFORMATION BAR */}
      <div className="relative z-20 mx-auto -mt-1 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-2xl bg-white shadow-xl sm:grid-cols-2 lg:grid-cols-4">
          <QuickInfo
            icon={<CalendarDays size={21} />}
            label="Duration"
            value={tour.duration}
          />

          <QuickInfo
            icon={<Mountain size={21} />}
            label="Difficulty"
            value={tour.difficulty}
          />

          <QuickInfo
            icon={<Mountain size={21} />}
            label="Maximum altitude"
            value={
              tour.maxAltitude
                ? `${tour.maxAltitude.toLocaleString()} m`
                : "Not specified"
            }
          />

          <QuickInfo
            icon={<Users size={21} />}
            label="Group size"
            value={
              tour.maxGroupSize
                ? `Up to ${tour.maxGroupSize} people`
                : "Not specified"
            }
          />
        </div>
      </div>

      {/* LANGUAGE INFORMATION */}
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-6 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-sm text-white/70">
          <Languages size={17} />
          <span>Available languages:</span>
          <span className="font-medium text-white">{tour.languages}</span>
        </div>
      </div>
    </section>
  );
}

function QuickInfo({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-4 border-b border-stone-200 p-5 last:border-b-0 sm:border-r sm:last:border-r-0 lg:border-b-0">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F3E4C4] text-[#8B641F]">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wider text-stone-400">
          {label}
        </p>

        <p className="mt-1 truncate font-semibold text-[#3B2921]">{value}</p>
      </div>
    </div>
  );
}
