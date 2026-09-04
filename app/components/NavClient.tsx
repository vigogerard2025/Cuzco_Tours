"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import {
  Mail,
  Phone,
  MessageCircle,
  ChevronDown,
  Menu,
  X,
  Star,
  CalendarCheck,
  Users,
} from "lucide-react";
import Image from "next/image";
// ---------------------------------------------------------------------------
// Iconos de marca — lucide-react ya no exporta logos de redes sociales,
// así que se definen aquí como SVGs propios con la misma firma de props
// (size, className) para poder usarlos igual que un icono de lucide.
// ---------------------------------------------------------------------------

type BrandIconProps = {
  size?: number;
  className?: string;
};

function FacebookIcon({ size = 16, className }: BrandIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.58v1.9h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94z" />
    </svg>
  );
}

function InstagramIcon({ size = 16, className }: BrandIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YoutubeIcon({ size = 16, className }: BrandIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M21.8 8.001s-.2-1.4-.8-2.02c-.77-.8-1.63-.81-2.03-.86C16.1 5 12 5 12 5h-.01s-4.1 0-6.97.12c-.4.05-1.26.06-2.03.86-.6.62-.8 2.02-.8 2.02S2 9.64 2 11.28v1.44c0 1.64.2 3.28.2 3.28s.2 1.4.8 2.02c.77.8 1.78.78 2.23.86C6.74 18.98 12 19 12 19s4.1-.01 6.97-.13c.4-.05 1.26-.06 2.03-.86.6-.62.8-2.02.8-2.02s.2-1.64.2-3.28v-1.44c0-1.64-.2-3.28-.2-3.28zM9.8 14.6V9.4l5.4 2.6-5.4 2.6z" />
    </svg>
  );
}

const TOPBAR_CONTACT = {
  email: "info@urpiwayratours.com", // placeholder — reemplazar con dato real
  phoneLabel: "+51 900 000 000", // placeholder — reemplazar con dato real
  whatsapp: "51900000000", // placeholder — solo dígitos, con código de país
};

const SOCIALS = [
  { icon: FacebookIcon, href: "https://facebook.com", label: "Facebook" },
  { icon: InstagramIcon, href: "https://instagram.com", label: "Instagram" },
  { icon: YoutubeIcon, href: "https://youtube.com", label: "YouTube" },
];

// ---------------------------------------------------------------------------

type NavCategoryData = {
  key: string;
  label: string;
  tours: { title: string; slug: string }[];
};

type NavClientProps = {
  categories: NavCategoryData[];
};

export default function NavClient({ categories }: NavClientProps) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleEnter = (key: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(key);
  };

  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120);
  };

  return (
    <header className="sticky top-0 z-50 font-manrope">
      {/* ---------------- Nivel 1: Topbar de contacto ---------------- */}
      <div className="bg-stone-950 text-stone-200">
        {" "}
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {" "}
          {/* Contacto */}{" "}
          <div className="hidden items-center gap-6 sm:flex">
            {" "}
            <a
              href={`mailto:${TOPBAR_CONTACT.email}`}
              className="flex items-center gap-2 text-[11px] font-medium tracking-wide text-stone-300 transition-colors hover:text-amber-400"
            >
              {" "}
              <Mail
                size={13}
                strokeWidth={1.8}
                className="shrink-0 text-amber-400"
              />{" "}
              <span>{TOPBAR_CONTACT.email}</span>{" "}
            </a>{" "}
            <a
              href={`tel:${TOPBAR_CONTACT.phoneLabel.replace(/\s/g, "")}`}
              className="flex items-center gap-2 text-[11px] font-medium tracking-wide text-stone-300 transition-colors hover:text-amber-400"
            >
              {" "}
              <Phone
                size={13}
                strokeWidth={1.8}
                className="shrink-0 text-amber-400"
              />{" "}
              <span>{TOPBAR_CONTACT.phoneLabel}</span>{" "}
            </a>{" "}
            <a
              href={`https://wa.me/${TOPBAR_CONTACT.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[11px] font-medium tracking-wide text-stone-300 transition-colors hover:text-amber-400"
            >
              {" "}
              <MessageCircle
                size={13}
                strokeWidth={1.8}
                className="shrink-0 text-amber-400"
              />{" "}
              <span>WhatsApp</span>{" "}
            </a>{" "}
          </div>{" "}
          {/* Mobile — solo WhatsApp */}{" "}
          <a
            href={`https://wa.me/${TOPBAR_CONTACT.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[11px] font-medium tracking-wide text-stone-300 transition-colors hover:text-amber-400 sm:hidden"
          >
            {" "}
            <MessageCircle
              size={13}
              strokeWidth={1.8}
              className="text-amber-400"
            />{" "}
            <span>WhatsApp</span>{" "}
          </a>{" "}
          {/* Redes sociales */}{" "}
          <div className="flex items-center gap-3.5">
            {" "}
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-stone-400 transition-all duration-200 hover:-translate-y-0.5 hover:text-amber-400"
              >
                {" "}
                <Icon size={14} />
              </a>
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </div>
      {/* ---------------- Nivel 2: Logo + utilidades ---------------- */}
      <div
        className={`bg-white transition-shadow ${scrolled ? "shadow-sm" : ""}`}
      >
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center gap-3">
            <Image
              src="/logo.jpg"
              alt="Urpi Wayra"
              width={68}
              height={68}
              priority
              className="h-16 w-16 rounded-full object-cover ring-1 ring-stone-200"
            />

            <div className="flex flex-col justify-center">
              <span className="font-fraunces text-[19px] font-semibold leading-[1.1] tracking-[-0.01em] text-stone-900">
                URPI WAYRA
              </span>

              <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.25em] text-stone-500">
                Adventures
              </span>
            </div>
          </Link>

          {/* Utilidades — desktop */}
          <div className="hidden items-center gap-7 lg:flex">
            <a
              href="https://www.tripadvisor.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-[13px] font-medium text-stone-700 transition-colors hover:text-terracotta-600"
            >
              <Star
                size={16}
                strokeWidth={2}
                className="text-amber-500 transition-transform group-hover:scale-110"
              />
              <span>Reseñas</span>
            </a>

            <Link
              href="/permiso-camino-inca"
              className="group flex items-center gap-2 text-[13px] font-medium text-stone-700 transition-colors hover:text-terracotta-600"
            >
              <CalendarCheck
                size={16}
                strokeWidth={2}
                className="text-amber-500 transition-transform group-hover:scale-110"
              />
              <span>Disponibilidad Camino Inca</span>
            </Link>

            <Link
              href="/quienes-somos"
              className="group flex items-center gap-2 text-[13px] font-medium text-stone-700 transition-colors hover:text-terracotta-600"
            >
              <Users
                size={16}
                strokeWidth={2}
                className="text-amber-500 transition-transform group-hover:scale-110"
              />
              <span>Quiénes Somos</span>
            </Link>
          </div>

          {/* Acciones */}
          <div className="flex items-center gap-3">
            <Link
              href="/contacto"
              className="hidden rounded-full bg-terracotta-600 px-5 py-2.5 text-[13px] font-semibold text-black shadow-sm transition-all hover:bg-terracotta-700 hover:shadow-md sm:inline-flex"
            >
              Contáctenos
            </Link>

            {/* Menú mobile */}
            <button
              type="button"
              aria-label="Abrir menú"
              onClick={() => setMobileOpen(true)}
              className="rounded-full p-2.5 text-stone-700 transition-colors hover:bg-stone-100 lg:hidden"
            >
              <Menu size={25} strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
      {/* ---------------- Nivel 3: Navegación principal ---------------- */}
      {/* =========================================================
    Nivel 3: Navegación principal
========================================================= */}
      <nav className="hidden bg-[#3B2921] lg:block">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ul className="flex h-[54px] items-stretch">
            {/* ============================
          CATEGORÍAS
      ============================ */}
            {categories.map((category) => (
              <li
                key={category.key}
                className="group relative"
                onMouseEnter={() => handleEnter(category.key)}
                onMouseLeave={handleLeave}
              >
                <Link
                  href={`/tours/${category.key}`}
                  className={`
              relative
              flex h-full items-center gap-2
              px-5
              text-[11px]
              font-bold
              uppercase
              tracking-[0.13em]
              transition-all
              duration-200

              ${
                openMenu === category.key
                  ? "bg-[#4B3429] text-[#F5C76A]"
                  : "text-white hover:bg-[#4B3429] hover:text-[#F5C76A]"
              }
            `}
                >
                  {/* Indicador inferior */}
                  <span
                    className={`
                absolute bottom-0 left-1/2 h-[2px]
                -translate-x-1/2
                bg-[#D9A441]
                transition-all duration-300
                ${
                  openMenu === category.key
                    ? "w-[55%]"
                    : "w-0 group-hover:w-[55%]"
                }
              `}
                  />

                  <span>{category.label}</span>

                  <ChevronDown
                    size={14}
                    strokeWidth={2}
                    className={`
                transition-transform duration-300
                ${
                  openMenu === category.key
                    ? "rotate-180"
                    : "group-hover:translate-y-0.5"
                }
              `}
                  />
                </Link>

                {/* =================================================
              DROPDOWN
          ================================================= */}
                {openMenu === category.key && category.tours.length > 0 && (
                  <div
                    className="
                  absolute
                  left-0
                  top-full
                  z-50
                  w-[400px]
                  overflow-hidden
                  rounded-b-2xl
                  border
                  border-stone-200
                  bg-[#F2F1EF]
                  shadow-[0_18px_45px_rgba(30,20,15,0.25)]
                  animate-in
                  fade-in
                  slide-in-from-top-1
                  duration-200
                "
                  >
                    {/* ============================
                    CABECERA
                ============================ */}
                    <div
                      className="
                    relative
                    border-b
                    border-stone-200
                    bg-[#E7E3DE]
                    px-6
                    py-5
                  "
                    >
                      {/* pequeña línea decorativa */}
                      <div className="absolute left-6 top-0 h-[3px] w-10 bg-[#C6923A]" />

                      <p
                        className="
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.22em]
                      text-[#9A806B]
                    "
                      >
                        Explora nuestros tours
                      </p>

                      <p
                        className="
                      mt-1.5
                      font-heading
                      text-[22px]
                      font-semibold
                      leading-tight
                      text-[#3B2921]
                    "
                      >
                        {category.label}
                      </p>
                    </div>

                    {/* ============================
                    LISTA DE TOURS
                ============================ */}
                    <ul className="max-h-[65vh] overflow-y-auto p-3">
                      {category.tours.map((tour) => (
                        <li key={tour.slug}>
                          <Link
                            href={`/tours/${tour.slug}`}
                            onClick={() => setOpenMenu(null)}
                            className="
                          group/tour
                          flex
                          items-center
                          gap-3
                          rounded-xl
                          px-4
                          py-3
                          text-[13px]
                          font-medium
                          leading-snug
                          text-[#514943]
                          transition-all
                          duration-200
                          hover:bg-white
                          hover:text-[#8B4A32]
                          hover:shadow-[0_3px_12px_rgba(60,40,25,0.07)]
                        "
                          >
                            {/* Número / indicador */}
                            <span
                              className="
                            flex
                            h-6
                            w-6
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            bg-[#E3DFDA]
                            text-[9px]
                            font-bold
                            text-[#90745E]
                            transition-all
                            duration-200
                            group-hover/tour:bg-[#D9A441]
                            group-hover/tour:text-white
                          "
                            >
                              {String(
                                category.tours.indexOf(tour) + 1,
                              ).padStart(2, "0")}
                            </span>

                            {/* Nombre */}
                            <span className="flex-1">{tour.title}</span>

                            {/* Flecha */}
                            <span
                              className="
                            translate-x-[-4px]
                            text-[#B7ADA5]
                            opacity-0
                            transition-all
                            duration-200
                            group-hover/tour:translate-x-0
                            group-hover/tour:opacity-100
                            group-hover/tour:text-[#C6923A]
                          "
                            >
                              →
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>

                    {/* ============================
                    FOOTER DEL DROPDOWN
                ============================ */}
                    <div
                      className="
                    border-t
                    border-stone-200
                    bg-[#EAE7E3]
                    px-5
                    py-3
                  "
                    >
                      <Link
                        href={`/tours/${category.key}`}
                        onClick={() => setOpenMenu(null)}
                        className="
                      flex
                      items-center
                      justify-between
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.14em]
                      text-[#7D6655]
                      transition-colors
                      hover:text-[#A45A38]
                    "
                      >
                        <span>Ver todos los tours</span>

                        <span className="text-sm">→</span>
                      </Link>
                    </div>
                  </div>
                )}
              </li>
            ))}

            {/* =================================================
          OFERTAS
      ================================================= */}
            <li className="ml-auto">
              <Link
                href="/ofertas"
                className="
            relative
            flex
            h-full
            items-center
            gap-2
            px-5
            text-[11px]
            font-bold
            uppercase
            tracking-[0.13em]
            text-[#F5C76A]
            transition-all
            duration-200
            hover:bg-[#4B3429]
            hover:text-[#FFD98A]
          "
              >
                <span
                  className="
              h-1.5
              w-1.5
              animate-pulse
              rounded-full
              bg-[#D9A441]
            "
                />
                Ofertas
              </Link>
            </li>

            {/* =================================================
          BLOG
      ================================================= */}
            <li>
              <Link
                href="/blog"
                className="
            relative
            flex
            h-full
            items-center
            px-5
            text-[11px]
            font-semibold
            uppercase
            tracking-[0.13em]
            text-[#E8DDD5]
            transition-all
            duration-200
            hover:bg-[#4B3429]
            hover:text-[#F5C76A]
          "
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* ---------------- Menú mobile (off-canvas) ---------------- */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          {/* Fondo oscuro */}
          <div
            className="absolute inset-0 bg-stone-950/50"
            onClick={() => setMobileOpen(false)}
          />

          {/* Panel */}
          <div className="absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col overflow-y-auto bg-white">
            <div className="flex items-center justify-between border-b border-stone-100 px-5 py-4">
              <span className="font-fraunces text-lg font-semibold text-stone-900">
                Urpi Wayra Tours
              </span>
              <button
                type="button"
                aria-label="Cerrar menú"
                onClick={() => setMobileOpen(false)}
                className="rounded-md p-2 text-stone-700 hover:bg-stone-100"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 px-5 py-4">
              <ul className="space-y-1">
                {categories.map((category) => (
                  <li
                    key={category.key}
                    className="border-b border-stone-100 py-1"
                  >
                    <button
                      type="button"
                      className="flex w-full items-center justify-between py-2.5 text-left text-sm font-bold uppercase tracking-wide text-stone-800"
                      onClick={() =>
                        setMobileSubmenu(
                          mobileSubmenu === category.key ? null : category.key,
                        )
                      }
                    >
                      {category.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          mobileSubmenu === category.key ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {mobileSubmenu === category.key &&
                      category.tours.length > 0 && (
                        <ul className="space-y-1.5 pb-3 pl-2">
                          {category.tours.map((tour) => (
                            <li key={tour.slug}>
                              <Link
                                href={`/tours/${tour.slug}`}
                                className="block py-1 text-sm text-stone-600"
                                onClick={() => setMobileOpen(false)}
                              >
                                {tour.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                  </li>
                ))}

                <li className="border-b border-stone-100 py-2.5">
                  <Link
                    href="/ofertas"
                    className="text-sm font-bold uppercase tracking-wide text-amber-600"
                    onClick={() => setMobileOpen(false)}
                  >
                    Ofertas
                  </Link>
                </li>
                <li className="border-b border-stone-100 py-2.5">
                  <Link
                    href="/blog"
                    className="text-sm font-bold uppercase tracking-wide text-stone-800"
                    onClick={() => setMobileOpen(false)}
                  >
                    Blog
                  </Link>
                </li>
                <li className="py-2.5">
                  <Link
                    href="/quienes-somos"
                    className="text-sm font-semibold text-stone-700"
                    onClick={() => setMobileOpen(false)}
                  >
                    Quiénes Somos
                  </Link>
                </li>
                <li className="py-2.5">
                  <Link
                    href="/permiso-camino-inca"
                    className="text-sm font-semibold text-stone-700"
                    onClick={() => setMobileOpen(false)}
                  >
                    Disponibilidad Camino Inca
                  </Link>
                </li>
              </ul>
            </div>

            <div className="border-t border-stone-100 p-5">
              <Link
                href="/contacto"
                className="block w-full rounded-full bg-terracotta-600 px-5 py-3 text-center text-sm font-bold text-white"
                onClick={() => setMobileOpen(false)}
              >
                Contáctenos
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
