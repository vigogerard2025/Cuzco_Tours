"use client";

// =========================================================
// app/components/HomeClient.tsx
// Antes era el contenido de app/page.tsx. Se movió aquí porque
// sigue siendo "use client" (usa useLanguage), pero ahora recibe
// los tours reales de Neon como props en vez de arrays *_FIXED.
// =========================================================

import HeroImage from "./HeroImage";
import AboutIntro from "./AboutIntro";
import TourCardCarousel from "./TourCardCarousel";
import CategoryShowcase from "./CategoryShowcase";
import WhyChooseUs from "./WhyChooseUs ";
import FaqAccordion from "./FaqAccordion";
import { useLanguage } from "../context/LanguageContext";
import { homeContent } from "../lib/homeContent";
import { TourCardData } from "../lib/tours";

// ---------------------------------------------------------------------------
// Estos datos NO vienen de la base de datos todavía: son elementos
// puramente visuales/estructurales (categorías de marketing, iconos,
// imágenes del hero) que no corresponden 1 a 1 con el modelo Tour.
// ---------------------------------------------------------------------------

const CATEGORIES_FIXED = [
  {
    href: "/tours?categoria=aventura",
    imageSrc: "/images/categorias/aventura.jpg",
  },
  {
    href: "/tours?categoria=cultural",
    imageSrc: "/images/categorias/cultural.jpg",
  },
  {
    href: "/tours?categoria=gastronomia",
    imageSrc: "/images/categorias/gastronomia.jpg",
  },
  {
    href: "/tours?categoria=mistico",
    imageSrc: "/images/categorias/mistico.jpg",
  },
  {
    href: "/tours?categoria=vivencial",
    imageSrc: "/images/categorias/vivencial.jpg",
  },
];

const REASONS_FIXED_ICONS = [
  "guide",
  "users",
  "community",
  "leaf",
  "handshake",
  "porters",
  "food",
  "tent",
] as const;

const HERO_IMAGES_FIXED = [
  { src: "/slides-images/cuzco2.jpg" },
  { src: "/images/hero/02-machupicchu.jpg" },
  { src: "/images/hero/03-valle-sagrado.jpg" },
  { src: "/images/hero/04-humantay.jpg" },
];

interface HomeClientProps {
  caminoIncaTours: TourCardData[];
  topTours: TourCardData[];
}

export default function HomeClient({
  caminoIncaTours,
  topTours,
}: HomeClientProps) {
  const { language } = useLanguage();
  const content = homeContent[language];

  return (
    <>
      <main>
        {/* --- 1. Hero --- */}
        <HeroImage
          title={content.hero.title}
          subtitle={content.hero.subtitle}
          images={HERO_IMAGES_FIXED.map((img) => ({
            src: img.src,
            alt: content.hero.title,
          }))}
        />

        {/* --- 2. Quiénes somos --- */}
        <AboutIntro
          eyebrow={content.about.eyebrow}
          title={content.about.title}
          paragraphs={content.about.paragraphs}
          ctaLabel={content.about.ctaLabel}
          ctaHref="/nosotros"
          imageSrc="/images/about/equipo-urpi-wayra.jpg"
          imageAlt={content.about.title}
          imagePosition="right"
        />

        {/* --- 3. Carrusel: Camino Inca y treks principales ---
            Nota: título/dificultad ahora vienen de la base de datos
            (solo en español por ahora), no del texto traducido. */}
        <TourCardCarousel
          eyebrow={content.incaTrailCarousel.eyebrow}
          title={content.incaTrailCarousel.title}
          verTodosHref="/tours?categoria=Camino Inca"
          tours={caminoIncaTours}
        />

        {/* --- 4. Top tours recomendados --- */}
        <TourCardCarousel
          eyebrow={content.topToursCarousel.eyebrow}
          title={content.topToursCarousel.title}
          verTodosHref="/tours"
          tours={topTours}
        />

        {/* --- 5. Categorías de experiencia --- */}
        <CategoryShowcase
          eyebrow={content.categories.eyebrow}
          title={content.categories.title}
          categories={CATEGORIES_FIXED.map((fixed, i) => ({
            ...fixed,
            imageAlt: content.categories.items[i].imageAlt,
            title: content.categories.items[i].title,
            description: content.categories.items[i].description,
          }))}
        />

        {/* --- 6. Por qué viajar con nosotros --- */}
        <WhyChooseUs
          eyebrow={content.whyChooseUs.eyebrow}
          title={content.whyChooseUs.title}
          reasons={REASONS_FIXED_ICONS.map((icon, i) => ({
            icon,
            title: content.whyChooseUs.reasons[i].title,
            description: content.whyChooseUs.reasons[i].description,
          }))}
        />

        {/* --- 7. Preguntas frecuentes --- */}
        <FaqAccordion
          eyebrow={content.faq.eyebrow}
          title={content.faq.title}
          subtitle={content.faq.subtitle}
          items={content.faq.items}
        />
      </main>
    </>
  );
}
