import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Urpi Wayra Adventures",
  description: "Travel tips, stories and guides about Cusco and Machu Picchu.",
};

// ---------------------------------------------------------------------------
// Contenido estático del blog. Para agregar un post nuevo, solo agrega un
// objeto más a este array — no necesitas tocar la base de datos ni ningún
// otro archivo. El orden en que los escribes aquí es el orden en que
// aparecen en la página.
// ---------------------------------------------------------------------------

type BlogPost = {
  title: string;
  excerpt: string;
  date: string; // texto libre, ej. "March 2026"
  category: string;
};

const posts: BlogPost[] = [
  {
    title: "How to Prepare for the Inca Trail: A Complete Guide",
    excerpt:
      "Everything you need to know before hiking the Inca Trail — training, altitude acclimatization, packing list and permits.",
    date: "Coming soon",
    category: "Trekking Tips",
  },
  {
    title: "Best Time to Visit Machu Picchu",
    excerpt:
      "A season-by-season breakdown of weather, crowds and pricing to help you plan the perfect trip to Machu Picchu.",
    date: "Coming soon",
    category: "Travel Planning",
  },
  {
    title: "5 Hidden Gems in the Sacred Valley",
    excerpt:
      "Beyond Pisac and Ollantaytambo — the lesser-known spots in the Sacred Valley worth adding to your itinerary.",
    date: "Coming soon",
    category: "Destinations",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#F7F4EF] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B27A22]">
          Blog
        </p>
        <h1 className="mt-2 font-heading text-3xl font-semibold text-[#3B2921] sm:text-4xl">
          Stories from the Andes
        </h1>
        <p className="mt-3 max-w-2xl text-stone-600">
          Travel tips, guides and stories about Cusco, the Sacred Valley and
          Machu Picchu.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.title}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-[#8B641F]">
                {post.category} · {post.date}
              </p>
              <h2 className="mt-2 font-heading text-xl font-semibold text-[#3B2921]">
                {post.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-stone-600">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
