import React from "react";
import Link from "next/link";
import { CalendarDays, BadgeInfo } from "lucide-react";

import { FaTripadvisor } from "react-icons/fa";
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
import { FaWhatsapp } from "react-icons/fa6";
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

// ---------------------------------------------------------------------------
// Datos de navegación — ajusta estos arrays a tus 24 tours / categorías reales
// ---------------------------------------------------------------------------

type TourLink = {
  label: string;
  href: string;
};

type NavCategory = {
  label: string;
  href: string;
  groups: {
    title: string;
    links: TourLink[];
  }[];
};

const NAV_DATA: NavCategory[] = [
  {
    label: "Camino Inca",
    href: "/tours/camino-inca",
    groups: [
      {
        title: "El Camino Inca Clásico",
        links: [
          {
            label: "Camino Inca Corto 2 Días — Grupal",
            href: "/tours/camino-inca-corto-2-dias-grupal",
          },
          {
            label: "Camino Inca Corto 2 Días — Privado",
            href: "/tours/camino-inca-corto-2-dias-privado",
          },
          {
            label: "Camino Inca Clásico 4 Días — Grupal",
            href: "/tours/camino-inca-clasico-4-dias-grupal",
          },
          {
            label: "Camino Inca 4 Días — Privado",
            href: "/tours/camino-inca-4-dias-privado",
          },
          {
            label: "Camino Inca 5 Días — Grupal",
            href: "/tours/camino-inca-5-dias-grupal",
          },
        ],
      },
    ],
  },
  {
    label: "Treks Alternativos",
    href: "/tours/treks-alternativos",
    groups: [
      {
        title: "Salkantay",
        links: [
          {
            label: "Salkantay 5 Días — Grupal",
            href: "/tours/salkantay-5-dias-grupal",
          },
          {
            label: "Salkantay 4 Días — Grupal",
            href: "/tours/salkantay-4-dias-grupal",
          },
        ],
      },
      {
        title: "Inca Jungle & Montaña de Colores",
        links: [
          { label: "Inca Jungle 4 Días", href: "/tours/inca-jungle-4-dias" },
          {
            label: "Montaña de Colores — Full Day",
            href: "/tours/montana-de-colores-full-day",
          },
        ],
      },
      {
        title: "Lares & Choquequirao",
        links: [
          { label: "Lares 4 Días", href: "/tours/lares-4-dias" },
          { label: "Choquequirao 5 Días", href: "/tours/choquequirao-5-dias" },
        ],
      },
    ],
  },
  {
    label: "Cusco & Valle Sagrado",
    href: "/tours/cusco-valle-sagrado",
    groups: [
      {
        title: "Tours de un día",
        links: [
          { label: "City Tour Cusco", href: "/tours/city-tour-cusco" },
          {
            label: "Valle Sagrado — Privado",
            href: "/tours/valle-sagrado-privado",
          },
          {
            label: "Maras, Moray y Chinchero",
            href: "/tours/maras-moray-chinchero",
          },
        ],
      },
      {
        title: "Excursiones de varios días",
        links: [
          {
            label: "Cusco Esencial 6 Días",
            href: "/tours/cusco-esencial-6-dias",
          },
          {
            label: "Cusco y Machu Picchu 5 Días",
            href: "/tours/cusco-machu-picchu-5-dias",
          },
        ],
      },
    ],
  },
  {
    label: "Paquetes Multi-día",
    href: "/tours/paquetes",
    groups: [
      {
        title: "Paquetes de aventura",
        links: [
          {
            label: "Lo Mejor de los Andes 12 Días",
            href: "/tours/lo-mejor-de-los-andes-12-dias",
          },
          { label: "Cusco y Puno 10 Días", href: "/tours/cusco-puno-10-dias" },
        ],
      },
      {
        title: "Paquetes culturales",
        links: [
          {
            label: "Perú Esencial 11 Días",
            href: "/tours/peru-esencial-11-dias",
          },
          {
            label: "Machu Picchu, Cusco y Puno 8 Días",
            href: "/tours/machu-picchu-cusco-puno-8-dias",
          },
        ],
      },
    ],
  },
  {
    label: "Tours de Lujo",
    href: "/tours/lujo",
    groups: [
      {
        title: "Experiencias premium",
        links: [
          {
            label: "Tren Hiram Bingham a Machu Picchu",
            href: "/tours/tren-hiram-bingham",
          },
          { label: "Cusco Lujoso 6 Días", href: "/tours/cusco-lujoso-6-dias" },
        ],
      },
    ],
  },
];

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

export function Nav() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [languageOpen, setLanguageOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(label);
  };

  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120);
  };

  return (
    <header className="sticky top-0 z-50 font-medium">
      {/* ---------------- Nivel 1: Topbar de contacto ---------------- */}
      <div className="bg-stone-950 text-stone-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-sm sm:px-6 lg:px-8">
          <div className="hidden items-center gap-5 sm:flex">
            <a
              href={`mailto:${TOPBAR_CONTACT.email}`}
              className="flex items-center gap-1.5 transition-colors hover:text-amber-400"
            >
              <Mail size={13} className="text-amber-400" />
              {TOPBAR_CONTACT.email}
            </a>
            <a
              href={`tel:${TOPBAR_CONTACT.phoneLabel.replace(/\s/g, "")}`}
              className="flex items-center gap-1.5 transition-colors hover:text-amber-400"
            >
              <Phone size={13} className="text-amber-400" />
              {TOPBAR_CONTACT.phoneLabel}
            </a>
            <a
              href={`https://wa.me/${TOPBAR_CONTACT.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-amber-400"
            >
              <MessageCircle size={15} className="text-amber-400" />
              WhatsApp
            </a>
          </div>

          {/* En mobile mostramos solo WhatsApp para no saturar */}
          <a
            href={`https://wa.me/${TOPBAR_CONTACT.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 sm:hidden"
          >
            <MessageCircle size={13} className="text-amber-400" />
            WhatsApp
          </a>
          <a
            href={`https://wa.me/${TOPBAR_CONTACT.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 sm:hidden"
          >
            <MessageCircle size={13} className="text-amber-400" />
            WhatsApp
          </a>

          <div className="flex items-center gap-3">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-stone-300 transition-colors hover:text-amber-400"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ---------------- Nivel 2: Logo + utilidades ---------------- */}
      <div
        className={`bg-white transition-shadow ${scrolled ? "shadow-sm" : ""}`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-terracotta-600 text-lg font-bold text-white">
              UW
            </span>
            <span className="flex flex-col leading-tight">
              <img src="/logo.png" alt="" />
              <span className="font-fraunces text-2xl font-bold tracking-tight text-stone-900">
                URPI WAYRA
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700">
                Cuzco Tours
              </span>
            </span>
          </Link>

          {/* Utilidades — visibles solo en desktop */}
          <div className="hidden items-center gap-6 lg:flex">
            <a
              href="https://www.tripadvisor.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-semibold text-stone-700 transition-colors hover:text-terracotta-600"
            >
              <FaTripadvisor className="h-5 w-5" />
              Reseñas
            </a>
            <Link
              href="/permiso-camino-inca"
              className="flex items-center gap-1.5 text-sm font-semibold text-stone-700 transition-colors hover:text-terracotta-600"
            >
              <CalendarDays className="h-5 w-5" />
              Disponibilidad Camino Inca
            </Link>
            <Link
              href="/quienes-somos"
              className="flex items-center gap-1.5 text-sm font-semibold text-stone-700 transition-colors hover:text-terracotta-600"
            >
              <Users size={16} className="text-black" />
              Quiénes Somos
            </Link>
          </div>

          <div className="flex items-center gap-4">
            {/* Selector de idioma */}
            <div className="relative hidden lg:block">
              <button
                onClick={() => setLanguageOpen(!languageOpen)}
                className="flex items-center gap-2 text-sm font-semibold text-stone-700 transition hover:text-terracotta-600"
              >
                <img
                  src="https://flagcdn.com/w20/es.png"
                  alt="Español"
                  className="h-4 w-6 rounded-sm object-cover"
                />
                ES
                <ChevronDown size={16} />
              </button>

              {languageOpen && (
                <div className="absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-lg border bg-white shadow-xl">
                  <button className="flex w-full items-center gap-3 px-4 py-3 text-sm hover:bg-gray-100">
                    <img
                      src="https://flagcdn.com/w20/es.png"
                      className="h-4 w-6"
                    />
                    Español
                  </button>

                  <button className="flex w-full items-center gap-3 px-4 py-3 text-sm hover:bg-gray-100">
                    <img
                      src="https://flagcdn.com/w20/us.png"
                      className="h-4 w-6"
                    />
                    English
                  </button>

                  <button className="flex w-full items-center gap-3 px-4 py-3 text-sm hover:bg-gray-100">
                    <img
                      src="https://flagcdn.com/w20/fr.png"
                      className="h-4 w-6"
                    />
                    Français
                  </button>

                  <button className="flex w-full items-center gap-3 px-4 py-3 text-sm hover:bg-gray-100">
                    <img
                      src="https://flagcdn.com/w20/de.png"
                      className="h-4 w-6"
                    />
                    Deutsch
                  </button>
                </div>
              )}
            </div>

            <Link
              href="/contacto"
              className="hidden bg-blue-900 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-terracotta-700 sm:inline-block"
            >
              CONTÁCTENOS
            </Link>

            {/* Botón menú */}
            <button
              type="button"
              aria-label="Abrir menú"
              onClick={() => setMobileOpen(true)}
              className="rounded-md p-2 text-stone-700 hover:bg-stone-100 lg:hidden"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </div>

      {/* ---------------- Nivel 3: Navegación principal con dropdowns ---------------- */}
      <nav className="hidden border-t border-stone-100 bg-white lg:block">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ul className="flex items-center gap-1">
            {NAV_DATA.map((category) => (
              <li
                key={category.label}
                className="relative"
                onMouseEnter={() => handleEnter(category.label)}
                onMouseLeave={handleLeave}
              >
                <Link
                  href={category.href}
                  className="flex items-center gap-1 px-4 py-3.5 text-sm font-bold uppercase tracking-wide text-stone-800 transition-colors hover:text-terracotta-600"
                >
                  {category.label}
                  <ChevronDown
                    size={15}
                    className={`transition-transform ${
                      openMenu === category.label ? "rotate-180" : ""
                    }`}
                  />
                </Link>

                {/* Dropdown */}
                {openMenu === category.label && (
                  <div className="absolute left-0 top-full z-50 flex w-[640px] gap-8 rounded-xl border border-stone-100 bg-white p-6 shadow-xl">
                    {category.groups.map((group) => (
                      <div key={group.title} className="flex-1">
                        <p className="mb-3 font-fraunces text-sm font-semibold text-emerald-700">
                          {group.title}
                        </p>
                        <ul className="space-y-2">
                          {group.links.map((link) => (
                            <li key={link.href}>
                              <Link
                                href={link.href}
                                className="text-sm text-stone-600 transition-colors hover:text-terracotta-600"
                                onClick={() => setOpenMenu(null)}
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}

            <li>
              <Link
                href="/ofertas"
                className="px-4 py-3.5 text-sm font-bold uppercase tracking-wide text-amber-600 transition-colors hover:text-amber-700"
              >
                Ofertas
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="px-4 py-3.5 text-sm font-bold uppercase tracking-wide text-stone-800 transition-colors hover:text-terracotta-600"
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
                {NAV_DATA.map((category) => (
                  <li
                    key={category.label}
                    className="border-b border-stone-100 py-1"
                  >
                    <button
                      type="button"
                      className="flex w-full items-center justify-between py-2.5 text-left text-sm font-bold uppercase tracking-wide text-stone-800"
                      onClick={() =>
                        setMobileSubmenu(
                          mobileSubmenu === category.label
                            ? null
                            : category.label,
                        )
                      }
                    >
                      {category.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          mobileSubmenu === category.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {mobileSubmenu === category.label && (
                      <div className="space-y-4 pb-3 pl-2">
                        {category.groups.map((group) => (
                          <div key={group.title}>
                            <p className="mb-1.5 font-fraunces text-xs font-semibold text-emerald-700">
                              {group.title}
                            </p>
                            <ul className="space-y-1.5">
                              {group.links.map((link) => (
                                <li key={link.href}>
                                  <Link
                                    href={link.href}
                                    className="text-sm text-stone-600"
                                    onClick={() => setMobileOpen(false)}
                                  >
                                    {link.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
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

export default Nav;
