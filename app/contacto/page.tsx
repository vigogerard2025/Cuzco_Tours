import type { Metadata } from "next";
import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";
import ContactForm from "@/app/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Urpi Wayra Adventures",
  description:
    "Get in touch with Urpi Wayra Adventures to plan your trip to Cusco, the Sacred Valley and Machu Picchu.",
};

const CONTACT = {
  email: "info@urpiwayratours.com",
  phoneLabel: "+51 900 000 000",
  whatsapp: "51900000000",
  address: "Cusco, Peru",
};

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-[#F7F4EF] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B27A22]">
          Get in touch
        </p>
        <h1 className="mt-2 font-heading text-3xl font-semibold text-[#3B2921] sm:text-4xl">
          Let&apos;s plan your journey
        </h1>
        <p className="mt-3 max-w-2xl text-stone-600">
          Have a question about a tour, dates, or a custom itinerary? Send us a
          message and we&apos;ll get back to you as soon as possible.
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          {/* Contact info */}
          <div className="space-y-5">
            <ContactItem
              icon={<Mail size={20} />}
              label="Email"
              value={CONTACT.email}
              href={`mailto:${CONTACT.email}`}
            />
            <ContactItem
              icon={<Phone size={20} />}
              label="Phone"
              value={CONTACT.phoneLabel}
              href={`tel:${CONTACT.phoneLabel.replace(/\s/g, "")}`}
            />
            <ContactItem
              icon={<MessageCircle size={20} />}
              label="WhatsApp"
              value="Chat with us"
              href={`https://wa.me/${CONTACT.whatsapp}`}
              external
            />
            <ContactItem
              icon={<MapPin size={20} />}
              label="Location"
              value={CONTACT.address}
            />
          </div>

          {/* Form */}
          <ContactForm recipientEmail={CONTACT.email} />
        </div>
      </div>
    </main>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const content = (
    <div className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F3E4C4] text-[#8B641F]">
        {icon}
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-stone-400">
          {label}
        </p>
        <p className="mt-1 font-semibold text-[#3B2921]">{value}</p>
      </div>
    </div>
  );

  if (!href) return content;

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="block transition hover:-translate-y-0.5"
    >
      {content}
    </a>
  );
}
