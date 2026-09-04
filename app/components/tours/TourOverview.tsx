import { Mountain, Users, Languages, MapPin } from "lucide-react";

type TourOverviewProps = {
  tour: {
    duration: string;
    difficulty: string;
    maxAltitude: number | null;
    maxGroupSize: number | null;
    languages: string;
    description: string;
  };
};

export default function TourOverview({ tour }: TourOverviewProps) {
  return (
    <section>
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B27A22]">
          Tour overview
        </p>

        <h2 className="mt-2 font-heading text-3xl font-semibold text-[#3B2921] sm:text-4xl">
          Everything you need to know
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <InfoCard
          icon={<MapPin size={21} />}
          label="Duration"
          value={tour.duration}
        />

        <InfoCard
          icon={<Mountain size={21} />}
          label="Difficulty"
          value={tour.difficulty}
        />

        <InfoCard
          icon={<Mountain size={21} />}
          label="Max altitude"
          value={
            tour.maxAltitude ? `${tour.maxAltitude.toLocaleString()} m` : "—"
          }
        />

        <InfoCard
          icon={<Users size={21} />}
          label="Group size"
          value={tour.maxGroupSize ? `Up to ${tour.maxGroupSize} people` : "—"}
        />
      </div>

      <div className="mt-8 rounded-2xl bg-white p-7 shadow-sm ring-1 ring-black/5">
        <div className="flex items-start gap-4">
          <div className="rounded-xl bg-[#F3E4C4] p-3 text-[#8B641F]">
            <Languages size={22} />
          </div>

          <div>
            <h3 className="font-semibold text-[#3B2921]">Languages</h3>

            <p className="mt-1 text-stone-600">{tour.languages}</p>
          </div>
        </div>

        <div className="mt-7 border-t border-stone-200 pt-7">
          <h3 className="text-xl font-semibold text-[#3B2921]">
            About this experience
          </h3>

          <p className="mt-3 leading-7 text-stone-600">{tour.description}</p>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
      <div className="mb-3 inline-flex rounded-xl bg-[#F3E4C4] p-2.5 text-[#8B641F]">
        {icon}
      </div>

      <p className="text-xs font-semibold uppercase tracking-wide text-stone-400">
        {label}
      </p>

      <p className="mt-1 font-semibold text-[#3B2921]">{value}</p>
    </div>
  );
}
