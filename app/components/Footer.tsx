"use client";

import Link from "next/link";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
  FaTripadvisor,
} from "react-icons/fa";

const socialLinks = [
  {
    icon: FaFacebookF,
    url: "https://facebook.com",
    label: "Facebook",
  },
  {
    icon: FaInstagram,
    url: "https://instagram.com",
    label: "Instagram",
  },
  {
    icon: FaYoutube,
    url: "https://youtube.com",
    label: "Youtube",
  },
  {
    icon: FaTripadvisor,
    url: "https://tripadvisor.com",
    label: "Tripadvisor",
  },
];

const popularTours = [
  {
    title: "Walking Tour Cusco",
    url: "/tours/camino-inca/cuzco-a-pie",
  },
  {
    title: "Traditional City Tour",
    url: "/tours/city-tour-cusco",
  },
  {
    title: "Sacred Valley VIP",
    url: "/tours/valle-sagrado-vip",
  },
  {
    title: "Inca Trail",
    url: "/tours/camino-inca",
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#3D2B1F] text-[#F5EBDD]">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold tracking-wide">
            Urpi Wayra <span className="text-[#C79A63]">Tours</span>
          </h2>

          <p className="mt-5 leading-7 text-[#D8C6B5]">
            Discover the magic of Cusco and Machu Picchu through authentic
            experiences, professional guides and personalized service.
          </p>

          <div className="flex gap-4 mt-8">
            {socialLinks.map(({ icon: Icon, url, label }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="
                  w-11 h-11 rounded-full
                  bg-[#4E3828]
                  flex items-center justify-center
                  hover:bg-[#8B5E3C]
                  transition
                  "
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Tours */}

        <div>
          <h3 className="text-xl font-semibold text-white mb-6">
            Popular Tours
          </h3>

          <ul className="space-y-4">
            {popularTours.map((tour) => (
              <li key={tour.title}>
                <Link
                  href={tour.url}
                  className="
                  text-[#D8C6B5]
                  hover:text-[#C79A63]
                  transition
                  "
                >
                  {tour.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}

        <div>
          <h3 className="text-xl font-semibold text-white mb-6">Contact Us</h3>

          <div className="space-y-5">
            <ContactItem icon={<FaMapMarkerAlt />} text="Cusco, Peru" />

            <ContactItem icon={<FaPhoneAlt />} text="+51 900 000 000" />

            <ContactItem icon={<FaEnvelope />} text="info@urpiwayratours.com" />

            <ContactItem
              icon={<FaClock />}
              text="Monday - Sunday | 7:00 AM - 8:00 PM"
            />
          </div>
        </div>

        {/* Newsletter */}

        <div>
          <h3 className="text-xl font-semibold text-white mb-6">
            Stay Updated
          </h3>

          <p className="text-[#D8C6B5] leading-7 mb-6">
            Receive exclusive promotions and travel updates.
          </p>

          <div className="flex overflow-hidden rounded-xl">
            <input
              type="email"
              placeholder="Email address"
              className="
              flex-1
              px-4 py-3
              text-white
              outline-none
              "
            />

            <button
              className="
              bg-[#8B5E3C]
              hover:bg-[#6B4423]
              px-5
              transition
              "
            >
              <FaPaperPlane />
            </button>
          </div>

          <a
            href="https://wa.me/51900000000"
            target="_blank"
            rel="noopener noreferrer"
            className="
            mt-8
            flex items-center justify-center gap-3
            bg-green-600
            hover:bg-green-700
            py-4
            rounded-xl
            font-semibold
            transition
            "
          >
            <FaWhatsapp size={20} />
            WhatsApp
          </a>
        </div>
      </div>

      {/* Bottom */}

      <div className="border-t border-[#5A4330]">
        <div
          className="
          max-w-7xl mx-auto
          px-6 py-6
          flex flex-col
          md:flex-row
          justify-between
          items-center
          gap-5
          "
        >
          <p className="text-sm text-[#B89C86]">
            © {new Date().getFullYear()} Urpi Wayra Tours. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-6 text-sm">
            <Link href="/privacy-policy" className="hover:text-[#C79A63]">
              Privacy Policy
            </Link>

            <Link href="/terms" className="hover:text-[#C79A63]">
              Terms & Conditions
            </Link>

            <Link href="/complaints-book" className="hover:text-[#C79A63]">
              Complaints Book
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

function ContactItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex gap-3 items-start">
      <span className="text-[#C79A63] mt-1">{icon}</span>

      <span>{text}</span>
    </div>
  );
}

export default Footer;
