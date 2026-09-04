import { X } from "lucide-react";

type TourExclude = {
  id: number;
  item: string;
};

type TourExcludesProps = {
  excludes: TourExclude[];
};

export default function TourExcludes({ excludes }: TourExcludesProps) {
  if (excludes.length === 0) {
    return null;
  }

  return (
    <section>
      <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-black/5">
        {/* HEADER */}
        <div className="flex items-center gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-50 text-red-600">
            <X size={21} />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-stone-400">
              Please note
            </p>

            <h2 className="text-2xl font-semibold text-[#3B2921]">
              Not included
            </h2>
          </div>
        </div>

        {/* LIST */}
        <ul className="mt-7 space-y-4">
          {excludes.map((exclude) => (
            <li
              key={exclude.id}
              className="flex items-start gap-3 border-b border-stone-100 pb-4 last:border-0 last:pb-0"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-500">
                <X size={14} />
              </span>

              <span className="leading-6 text-stone-600">{exclude.item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
