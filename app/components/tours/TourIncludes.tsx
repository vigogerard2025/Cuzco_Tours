import { Check, X } from "lucide-react";

type TourIncludesProps = {
  includes: {
    id: number;
    item: string;
  }[];

  excludes: {
    id: number;
    item: string;
  }[];
};

export default function TourIncludes({
  includes,
  excludes,
}: TourIncludesProps) {
  return (
    <section>
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B27A22]">
          Good to know
        </p>

        <h2 className="mt-2 font-heading text-3xl font-semibold text-[#3B2921] sm:text-4xl">
          Included in your tour
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-black/5">
          <h3 className="flex items-center gap-3 text-xl font-semibold text-[#3B2921]">
            <span className="rounded-full bg-green-100 p-2 text-green-700">
              <Check size={19} />
            </span>
            Included
          </h3>

          <ul className="mt-6 space-y-4">
            {includes.map((item) => (
              <li
                key={item.id}
                className="flex items-start gap-3 text-stone-600"
              >
                <Check size={18} className="mt-0.5 shrink-0 text-green-600" />

                <span>{item.item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-black/5">
          <h3 className="flex items-center gap-3 text-xl font-semibold text-[#3B2921]">
            <span className="rounded-full bg-red-100 p-2 text-red-700">
              <X size={19} />
            </span>
            Not included
          </h3>

          <ul className="mt-6 space-y-4">
            {excludes.map((item) => (
              <li
                key={item.id}
                className="flex items-start gap-3 text-stone-600"
              >
                <X size={18} className="mt-0.5 shrink-0 text-red-500" />

                <span>{item.item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
