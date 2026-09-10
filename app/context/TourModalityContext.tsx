"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type TourModalityContextValue = {
  activeType: string;
  setActiveType: (type: string) => void;
};

const TourModalityContext = createContext<TourModalityContextValue | null>(
  null,
);

type TourModalityProviderProps = {
  initialType: string;
  children: ReactNode;
};

export function TourModalityProvider({
  initialType,
  children,
}: TourModalityProviderProps) {
  const [activeType, setActiveType] = useState(initialType);

  return (
    <TourModalityContext.Provider value={{ activeType, setActiveType }}>
      {children}
    </TourModalityContext.Provider>
  );
}

export function useTourModality() {
  const ctx = useContext(TourModalityContext);
  if (!ctx) {
    throw new Error(
      "useTourModality must be used within a TourModalityProvider",
    );
  }
  return ctx;
}
