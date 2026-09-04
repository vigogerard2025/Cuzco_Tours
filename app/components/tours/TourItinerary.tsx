import { Clock3, Footprints, Home, MapPin } from "lucide-react";

type ItineraryItem = {
  id: number;
  day: number;
  title: string;
  description: string;
  distance: string | null;
  hikingTime: string | null;
  accommodation: string | null;
};

type TourItineraryProps = {
  itinerary: ItineraryItem[];
};

export default function TourItinerary({ itinerary }: TourItineraryProps) {
  if (itinerary.length === 0) {
    return null;
  }

  return (
    <section id="itinerary">
      {/* SECTION HEADER */}
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B27A22]">
          Your journey
        </p>

        <h2 className="mt-2 font-heading text-3xl font-semibold text-[#3B2921] sm:text-4xl">
          Tour itinerary
        </h2>

        <p className="mt-3 max-w-2xl leading-7 text-stone-600">
          Discover what each day of your adventure has in store, from
          unforgettable landscapes to authentic experiences in the Andes.
        </p>
      </div>

      {/* ITINERARY */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[27px] top-8 hidden h-[calc(100%-64px)] w-px bg-[#D9A441]/50 sm:block" />

        <div className="space-y-7">
          {itinerary.map((item) => (
            <article
              key={item.id}
              className="relative rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition-shadow duration-300 hover:shadow-md"
            >
              <div className="p-6 sm:p-7 sm:pl-20">
                {/* DAY NUMBER */}
                <div className="absolute left-5 top-7 hidden h-7 w-7 items-center justify-center rounded-full border-4 border-[#F7F4EF] bg-[#D9A441] text-xs font-bold text-[#3B2921] sm:flex">
                  {item.day}
                </div>

                {/* MOBILE DAY */}
                <div className="mb-4 flex items-center gap-3 sm:hidden">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#D9A441] text-sm font-bold text-[#3B2921]">
                    {item.day}
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-[#B27A22]">
                    Day {item.day}
                  </span>
                </div>

                {/* DAY LABEL */}
                <p className="hidden text-xs font-bold uppercase tracking-[0.15em] text-[#B27A22] sm:block">
                  Day {item.day}
                </p>

                {/* TITLE */}
                <h3 className="mt-1 text-xl font-semibold text-[#3B2921] sm:text-2xl">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-4 leading-7 text-stone-600">
                  {item.description}
                </p>

                {/* DETAILS */}
                {(item.distance || item.hikingTime || item.accommodation) && (
                  <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 border-t border-stone-100 pt-5">
                    {item.distance && (
                      <Detail
                        icon={<Footprints size={17} />}
                        label="Distance"
                        value={item.distance}
                      />
                    )}

                    {item.hikingTime && (
                      <Detail
                        icon={<Clock3 size={17} />}
                        label="Hiking time"
                        value={item.hikingTime}
                      />
                    )}

                    {item.accommodation && (
                      <Detail
                        icon={<Home size={17} />}
                        label="Accommodation"
                        value={item.accommodation}
                      />
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* END OF ITINERARY */}
      <div className="mt-8 flex items-center gap-3 rounded-xl bg-[#F3E4C4]/60 px-5 py-4 text-sm text-[#5B4738]">
        <MapPin size={18} className="shrink-0 text-[#B27A22]" />

        <p>
          Your itinerary may be adjusted slightly depending on weather and local
          conditions.
        </p>
      </div>
    </section>
  );
}

function Detail({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-[#B27A22]">{icon}</span>

      <div>
        <span className="mr-1 text-xs text-stone-400">{label}:</span>

        <span className="text-sm font-medium text-stone-600">{value}</span>
      </div>
    </div>
  );
}
