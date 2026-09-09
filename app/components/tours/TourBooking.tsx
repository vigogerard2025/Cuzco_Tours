"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, MessageCircle } from "lucide-react";

type TourPrice = {
  id: number;
  type: string;
  price: number;
  minPeople: number | null;
  bestSeller?: boolean;
};

type TourBookingCardProps = {
  prices: TourPrice[];
  maxGroupSize: number | null;
};

// Título mostrado en cada pestaña, según el "type" guardado en TourPrice.
const TYPE_LABELS: Record<string, string> = {
  Group: "Group Service",
  Private: "Private Service",
};

// Descripción mostrada debajo de la pestaña activa.
const TYPE_DESCRIPTIONS: Record<string, (opt: TourPrice) => string> = {
  Group: () =>
    "Join other travelers on a small-group departure. Great value without losing quality or attention on the trail.",
  Private: (opt) =>
    `An exclusive tour just for your group${
      opt.minPeople ? ` (minimum ${opt.minPeople} people)` : ""
    }. Flexible schedule and a guide dedicated only to you.`,
};

export default function TourBookingCard({
  prices,
  maxGroupSize,
}: TourBookingCardProps) {
  // prices ya viene ordenado por price ascendente (orderBy en la query),
  // así que prices[0] sigue siendo el precio "desde" más bajo.
  const mainPrice = prices[0];

  const [activeType, setActiveType] = useState(prices[0]?.type ?? "");
  const active = prices.find((p) => p.type === activeType) ?? prices[0];

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-black/5">
      <div className="bg-[#3B2921] px-6 py-6 text-white">
        <p className="text-sm uppercase tracking-wider text-white/60">
          Starting from
        </p>

        {mainPrice ? (
          <div className="mt-1 flex items-end gap-2">
            <span className="text-4xl font-bold">
              ${mainPrice.price.toFixed(0)}
            </span>

            <span className="mb-1 text-sm text-white/70">per person</span>
          </div>
        ) : (
          <p className="mt-1 text-2xl font-bold">Contact us</p>
        )}
      </div>

      <div className="p-6">
        {prices.length > 0 && (
          <div>
            <h3 className="font-semibold text-[#3B2921]">
              Choose your modality
            </h3>

            {/* Pestañas */}
            <div className="mt-3 flex gap-2 border-b border-stone-100">
              {prices.map((price) => (
                <button
                  key={price.id}
                  type="button"
                  onClick={() => setActiveType(price.type)}
                  className={`relative flex items-center gap-1.5 px-3 py-2.5 text-sm font-semibold transition-colors ${
                    activeType === price.type
                      ? "border-b-2 border-[#D9A441] text-[#3B2921]"
                      : "text-stone-400 hover:text-stone-600"
                  }`}
                >
                  {TYPE_LABELS[price.type] ?? price.type}
                  {price.bestSeller && (
                    <span className="rounded-full bg-[#D9A441] px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-[#3B2921]">
                      Best Seller
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Detalle de la pestaña activa */}
            {active && (
              <div className="py-4">
                <p className="text-sm leading-5 text-stone-500">
                  {TYPE_DESCRIPTIONS[active.type]?.(active) ??
                    "Contact us for details about this modality."}
                </p>

                <div className="mt-3 flex items-center justify-between border-t border-stone-100 pt-3">
                  <div>
                    <p className="font-medium text-stone-700">
                      {TYPE_LABELS[active.type] ?? active.type}
                    </p>
                    {active.minPeople && (
                      <p className="text-xs text-stone-400">
                        From {active.minPeople} people
                      </p>
                    )}
                  </div>

                  <span className="font-semibold text-[#8B641F]">
                    ${active.price.toFixed(0)}
                  </span>
                </div>
              </div>
            )}
          </div>
        )}

        {maxGroupSize && (
          <div className="mt-5 flex items-center gap-2 text-sm text-stone-600">
            <Check size={17} className="text-green-600" />
            Maximum group size: {maxGroupSize}
          </div>
        )}

        <Link
          href="https://wa.me/51900000000"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#D9A441] px-5 py-3.5 font-semibold text-[#3B2921] transition hover:bg-[#C99531]"
        >
          <MessageCircle size={19} />
          Ask about this tour
        </Link>

        <p className="mt-4 text-center text-xs leading-5 text-stone-400">
          Contact us to confirm availability, dates and personalized options.
        </p>
      </div>
    </div>
  );
}
