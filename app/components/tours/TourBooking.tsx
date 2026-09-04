import Link from "next/link";
import { Check, MessageCircle } from "lucide-react";

type TourPrice = {
  id: number;
  type: string;
  price: number;
  minPeople: number | null;
};

type TourBookingCardProps = {
  prices: TourPrice[];
  maxGroupSize: number | null;
};

export default function TourBookingCard({
  prices,
  maxGroupSize,
}: TourBookingCardProps) {
  const mainPrice = prices[0];

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
          <div className="space-y-3">
            <h3 className="font-semibold text-[#3B2921]">Available prices</h3>

            {prices.map((price) => (
              <div
                key={price.id}
                className="flex items-center justify-between border-b border-stone-100 py-3 last:border-0"
              >
                <div>
                  <p className="font-medium text-stone-700">{price.type}</p>

                  {price.minPeople && (
                    <p className="text-xs text-stone-400">
                      From {price.minPeople} people
                    </p>
                  )}
                </div>

                <span className="font-semibold text-[#8B641F]">
                  ${price.price.toFixed(0)}
                </span>
              </div>
            ))}
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
