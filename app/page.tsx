"use client";

import Nav from "./components/Nav";
import HeroImage from "./components/HeroImage";
import AboutIntro from "./components/AboutIntro";
import TourCardCarousel from "./components/TourCardCarousel";
import CategoryShowcase from "./components/CategoryShowcase";
import WhyChooseUs from "./components/WhyChooseUs ";
import FaqAccordion from "./components/FaqAccordion";
import { useLanguage } from "./context/LanguageContext";
import { homeContent } from "./lib/homeContent";

// ---------------------------------------------------------------------------
// Datos que NO cambian por idioma: precios, rutas, imágenes, ratings.
// Se combinan por índice con el texto traducido de homeContent.
// ---------------------------------------------------------------------------

const INCA_TRAIL_FIXED = [
  {
    href: "/tours/camino-inca-clasico-4-dias-privado",
    imageSrc: "/images/tours/camino-inca-clasico-4-dias/01-portada.jpg",
    badge: "04D / 03N",
    groupSize: "2-8",
    rating: 5,
    reviewCount: 51,
    priceFrom: 1250,
  },
  {
    href: "/tours/camino-inca-2-dias-grupal",
    imageSrc: "/images/tours/camino-inca-2-dias/01-portada.jpg",
    badge: "02D / 01N",
    groupSize: "2-12",
    rating: 5,
    reviewCount: 28,
    priceFrom: 720,
  },
  {
    href: "/tours/salkantay-trek-5-dias-privado",
    imageSrc: "/images/tours/salkantay-trek-5-dias/01-portada.jpg",
    badge: "05D / 04N",
    groupSize: "2-8",
    rating: 5,
    reviewCount: 33,
    priceFrom: 1100,
  },
  {
    href: "/tours/choquequirao-trek-5-dias-privado",
    imageSrc: "/images/tours/choquequirao-trek-5-dias/01-portada.jpg",
    badge: "05D / 04N",
    groupSize: "2-8",
    rating: 5,
    reviewCount: 22,
    priceFrom: 980,
  },
];

const TOP_TOURS_FIXED = [
  {
    href: "/tours/machupicchu-full-day-grupal",
    imageSrc: "/images/tours/machupicchu-full-day/01-portada.jpg",
    badge: "Full Day",
    groupSize: "1-15",
    rating: 5,
    reviewCount: 48,
    priceFrom: 320,
  },
  {
    href: "/tours/montana-7-colores-grupal",
    imageSrc: "/images/tours/montana-7-colores/01-portada.jpg",
    badge: "Full Day",
    groupSize: "1-15",
    rating: 5,
    reviewCount: 60,
    priceFrom: 85,
  },
  {
    href: "/tours/laguna-humantay-dia-grupal",
    imageSrc: "/images/tours/laguna-humantay-dia/01-portada.jpg",
    badge: "Full Day",
    groupSize: "1-15",
    rating: 5,
    reviewCount: 38,
    priceFrom: 80,
  },
  {
    href: "/tours/valle-sagrado-grupal",
    imageSrc: "/images/tours/valle-sagrado/01-portada.jpg",
    badge: "Full Day",
    groupSize: "1-15",
    rating: 5,
    reviewCount: 52,
    priceFrom: 60,
  },
];

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
  { src: "./slides-images/cuzco2.jpg" },
  { src: "/images/hero/02-machupicchu.jpg" },
  { src: "/images/hero/03-valle-sagrado.jpg" },
  { src: "/images/hero/04-humantay.jpg" },
];

export default function Home() {
  const { language } = useLanguage();
  const content = homeContent[language];

  return (
    <>
      <main>
        {/* --- 1. Hero --- */}
        <HeroImage
          title={content.hero.title}
          subtitle={content.hero.subtitle}
          images={HERO_IMAGES_FIXED.map((img, i) => ({
            src: img.src,
            alt: content.hero.title, // texto alternativo genérico traducido
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

        {/* --- 3. Carrusel: Camino Inca y treks principales --- */}
        <TourCardCarousel
          eyebrow={content.incaTrailCarousel.eyebrow}
          title={content.incaTrailCarousel.title}
          verTodosHref="/tours?categoria=CAMINO_INCA"
          tours={INCA_TRAIL_FIXED.map((fixed, i) => ({
            ...fixed,
            imageAlt: content.incaTrailCarousel.tours[i].imageAlt,
            title: content.incaTrailCarousel.tours[i].title,
            difficulty: content.incaTrailCarousel.tours[i].difficulty,
          }))}
        />

        {/* --- 4. Top tours recomendados (día único) --- */}
        <TourCardCarousel
          eyebrow={content.topToursCarousel.eyebrow}
          title={content.topToursCarousel.title}
          verTodosHref="/tours"
          tours={TOP_TOURS_FIXED.map((fixed, i) => ({
            ...fixed,
            imageAlt: content.topToursCarousel.tours[i].imageAlt,
            title: content.topToursCarousel.tours[i].title,
            difficulty: content.topToursCarousel.tours[i].difficulty,
          }))}
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
