import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";

import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";
import { getNavToursByCategory } from "./lib/tours";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Urpi Wayra Tours",
  description: "Discover Cusco, Machu Picchu and Peru with Urpi Wayra Tours.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Consulta Prisma UNA VEZ en el servidor para armar el menú de navegación.
  // Se ejecuta en cada request (layout no está cacheado por defecto en App Router
  // salvo que agregues `export const revalidate = ...` más adelante).
  const toursByCategory = await getNavToursByCategory();

  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${cormorant.variable} font-sans antialiased`}
      >
        <LanguageProvider>
          <Nav
            caminoIncaTours={toursByCategory["Camino Inca"] ?? []}
            altTreksTours={toursByCategory["Treks Alternativos"] ?? []}
            sacredValleyTours={toursByCategory["Cusco & Valle Sagrado"] ?? []}
          />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
