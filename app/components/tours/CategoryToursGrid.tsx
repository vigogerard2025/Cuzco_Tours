import Link from "next/link";
import Image from "next/image";

type CategoryTour = {
  title: string;
  slug: string;
  description: string;
  duration: string;
  difficulty: string;
  price: number | null;
  prices: { type: string; price: number }[];
  images: { url: string; alt: string | null }[];
};

type CategoryToursGridProps = {
  tours: CategoryTour[];
};

export default function CategoryToursGrid({ tours }: CategoryToursGridProps) {
  if (tours.length === 0) {
    return (
      <p className="mt-10 text-stone-500">
        No tours available in this category yet.
      </p>
    );
  }

  return (
    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {tours.map((tour) => {
        // Precio "desde": el más bajo entre las modalidades (Group/Private),
        // o el precio plano del tour, o null si no hay ninguno todavía.
        const fromPrice = tour.prices[0]?.price ?? tour.price ?? null;
        const image = tour.images[0];

        return (
          <Link
            key={tour.slug}
            href={`/tours/${tour.slug}`}
            className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition hover:shadow-lg"
          >
            <div className="relative h-48 w-full overflow-hidden bg-[#4A3328]">
              {image ? (
                <Image
                  src={image.url}
                  alt={image.alt || tour.title}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              ) : null}
            </div>

            <div className="p-5">
              <div className="flex flex-wrap gap-2 text-xs font-semibold text-[#8B641F]">
                <span>{tour.duration}</span>
                <span>·</span>
                <span>{tour.difficulty}</span>
              </div>

              <h3 className="mt-2 font-heading text-lg font-semibold text-[#3B2921]">
                {tour.title}
              </h3>

              <p className="mt-2 line-clamp-2 text-sm text-stone-600">
                {tour.description}
              </p>

              <p className="mt-4 text-sm font-semibold text-[#3B2921]">
                {fromPrice ? `From $${fromPrice.toFixed(0)}` : "Contact us"}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
