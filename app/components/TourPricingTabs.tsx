"use client";

import { useState } from "react";

type PriceOption = {
  id: number;
  type: string;
  price: number;
  minPeople?: number | null;
  bestSeller: boolean;
};

// Título mostrado en cada pestaña, según el "type" guardado en TourPrice.
const TYPE_LABELS: Record<string, string> = {
  Group: "Servicio Grupal",
  Private: "Servicio Privado",
};

// Descripción mostrada debajo de cada pestaña al seleccionarla.
// Se genera dinámicamente a partir de los datos reales del precio
// (minPeople, etc.) en vez de ser texto fijo por tour.
const TYPE_DESCRIPTIONS: Record<string, (opt: PriceOption) => string> = {
  Group: () =>
    "Comparte la experiencia con otros viajeros en un grupo reducido. Ideal si buscas la mejor relación calidad-precio sin perder atención personalizada.",
  Private: (opt) =>
    `Tour exclusivo solo para ti y las personas que elijas${
      opt.minPeople ? ` (mínimo ${opt.minPeople} personas)` : ""
    }. Horarios flexibles y guía dedicado únicamente a tu grupo.`,
};

type TourPricingTabsProps = {
  prices: PriceOption[];
};

export default function TourPricingTabs({ prices }: TourPricingTabsProps) {
  const [activeType, setActiveType] = useState(prices[0]?.type ?? "");

  const active = prices.find((p) => p.type === activeType) ?? prices[0];

  if (!prices.length) return null;

  return (
    <div className="mt-4">
      {/* Pestañas */}
      <div className="flex gap-2 border-b border-stone-200">
        {prices.map((option) => (
          <button
            key={option.type}
            type="button"
            onClick={() => setActiveType(option.type)}
            className={`relative flex items-center gap-2 px-5 py-3 text-sm font-bold uppercase tracking-wide transition-colors ${
              activeType === option.type
                ? "border-b-2 border-terracotta-600 text-terracotta-600"
                : "text-stone-500 hover:text-stone-800"
            }`}
          >
            {TYPE_LABELS[option.type] ?? option.type}
            {option.bestSeller && (
              <span className="rounded-full bg-amber-400 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-stone-900">
                Más Vendido
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Contenido de la pestaña activa */}
      {active && (
        <div className="rounded-b-xl border border-t-0 border-stone-200 bg-white p-6">
          <h3 className="font-fraunces text-xl font-semibold text-stone-900">
            {TYPE_LABELS[active.type] ?? active.type}
          </h3>
          <p className="mt-2 text-stone-600">
            {TYPE_DESCRIPTIONS[active.type]?.(active) ??
              "Consulta los detalles de esta modalidad con nuestro equipo."}
          </p>

          <div className="mt-4 flex items-baseline gap-2">
            <span className="font-fraunces text-3xl font-bold text-stone-900">
              ${active.price}
            </span>
            <span className="text-sm text-stone-500">USD por persona</span>
          </div>

          {active.minPeople && (
            <p className="mt-1 text-xs text-stone-500">
              Mínimo {active.minPeople} personas
            </p>
          )}
        </div>
      )}
    </div>
  );
}
