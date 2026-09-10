"use client";

import { Users } from "lucide-react";
import { useTourModality } from "@/app/context/TourModalityContext"; // ajusta la ruta si tu context vive en otro lado

type PriceInfo = {
  type: string;
  minPeople: number | null;
};

type GroupSizeInfoCardProps = {
  maxGroupSize: number | null;
  prices: PriceInfo[];
};

export default function GroupSizeInfoCard({
  maxGroupSize,
  prices,
}: GroupSizeInfoCardProps) {
  const { activeType } = useTourModality();

  const isPrivate = activeType === "Private";
  const privatePrice = prices.find((p) => p.type === "Private");

  const value = isPrivate
    ? privatePrice?.minPeople
      ? `Min ${privatePrice.minPeople} people`
      : "Private / exclusive"
    : maxGroupSize
      ? `Up to ${maxGroupSize} people`
      : "—";

  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
      <div className="mb-3 inline-flex rounded-xl bg-[#F3E4C4] p-2.5 text-[#8B641F]">
        <Users size={21} />
      </div>

      <p className="text-xs font-semibold uppercase tracking-wide text-stone-400">
        Group size
      </p>

      <p className="mt-1 font-semibold text-[#3B2921]">{value}</p>
    </div>
  );
}
