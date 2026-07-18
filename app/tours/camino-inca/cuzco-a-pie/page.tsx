import Image from "next/image";

const WalkingTourPage = () => {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative h-[650px]">
        <Image
          src="/images/camino-inca1.jpg"
          alt="Walking Tour Cusco"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 flex items-center bg-black/40">
          <div className="mx-auto max-w-6xl px-6 text-white">
            <span className="rounded-full bg-orange-500 px-4 py-2">
              Cultural Tour
            </span>

            <h1 className="mt-6 text-6xl font-bold">Walking Tour Cusco</h1>

            <p className="mt-5 max-w-xl text-xl">
              Discover the history and culture of the ancient capital of the
              Inca Empire while walking through its most iconic streets and
              landmarks.
            </p>

            <button className="mt-8 rounded-lg bg-orange-500 px-8 py-4 font-bold transition hover:bg-orange-600">
              Book Now
            </button>
          </div>
        </div>
      </section>

      {/* INFO */}
      <section className="relative z-10 mx-auto -mt-16 max-w-6xl">
        <div className="grid gap-5 px-6 md:grid-cols-4">
          <InfoCard title="Duration" value="2.5 - 3 Hours" />
          <InfoCard title="Maximum Altitude" value="3,400 m.a.s.l." />
          <InfoCard title="Difficulty" value="Very Easy" />
          <InfoCard title="Schedule" value="Morning or Afternoon" />
        </div>
      </section>

      {/* DESCRIPTION */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2">
        <div>
          <h2 className="mb-6 text-4xl font-bold">
            Walking Tour Through Cusco's Historic Center
          </h2>

          <p className="leading-8 text-gray-600">
            Explore the city of Cusco with a professional guide. Discover the
            impressive Inca architecture, learn about its fascinating history
            and legends, stroll through the traditional San Blas neighborhood,
            and finish your experience at the famous San Pedro Central Market.
          </p>

          <div className="mt-8 space-y-3">
            <p>✓ Plaza de Armas</p>
            <p>✓ Loreto Street</p>
            <p>✓ Twelve-Angled Stone</p>
            <p>✓ San Blas Neighborhood</p>
            <p>✓ San Pedro Central Market</p>
          </div>
        </div>

        <Image
          src="/images/plaza-armas-cusco.jpg"
          alt="Historic Center of Cusco"
          width={600}
          height={500}
          className="rounded-3xl object-cover"
        />
      </section>

      {/* ITINERARY */}
      <section className="bg-gray-100 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-12 text-center text-4xl font-bold">
            Tour Itinerary
          </h2>

          <div className="space-y-6">
            <div className="rounded-3xl bg-white p-8 shadow">
              <h3 className="text-2xl font-bold text-orange-500">
                📍 Plaza de Armas
              </h3>

              <p className="mt-3 text-gray-600">
                Meet your guide and receive an introduction to the tour before
                beginning your walking adventure.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow">
              <h3 className="text-2xl font-bold text-orange-500">
                🏛️ Inca Streets
              </h3>

              <p className="mt-3 text-gray-600">
                Walk along the ancient Inca streets of Loreto and Hatun Rumiyoc
                to admire the world-famous Twelve-Angled Stone.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow">
              <h3 className="text-2xl font-bold text-orange-500">
                🎨 San Blas Neighborhood
              </h3>

              <p className="mt-3 text-gray-600">
                Explore Cusco's charming artistic district, famous for its
                narrow streets, artisan workshops, and colonial architecture.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow">
              <h3 className="text-2xl font-bold text-orange-500">
                🛍️ San Pedro Central Market
              </h3>

              <p className="mt-3 text-gray-600">
                End your tour at Cusco's most traditional market, where you can
                discover local fruits, Peruvian cuisine, handicrafts, and daily
                life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INCLUDED */}
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2">
        <div className="rounded-3xl bg-green-50 p-10">
          <h2 className="text-3xl font-bold text-green-700">
            ✅ What's Included
          </h2>

          <ul className="mt-6 space-y-3">
            <li>✓ Professional bilingual guide.</li>
            <li>✓ Local history expert.</li>
            <li>✓ Radio headsets (optional for large groups).</li>
          </ul>
        </div>

        <div className="rounded-3xl bg-red-50 p-10">
          <h2 className="text-3xl font-bold text-red-700">❌ Not Included</h2>

          <ul className="mt-6 space-y-3">
            <li>✕ Tips for the tour guide.</li>
            <li>✕ Personal expenses at the market.</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-500 py-16 text-center text-white">
        <h2 className="text-5xl font-bold">Discover Cusco on Foot</h2>

        <p className="mt-4 text-xl">
          Enjoy an authentic experience exploring the historic capital of the
          Inca Empire with our expert local guides.
        </p>

        <button className="mt-8 rounded-xl bg-white px-10 py-4 font-bold text-orange-600 transition hover:bg-gray-100">
          Check Availability
        </button>
      </section>
    </main>
  );
};

function InfoCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl bg-white p-6 text-center shadow-lg">
      <h3 className="font-bold text-gray-500">{title}</h3>
      <p className="mt-2 text-xl font-bold">{value}</p>
    </div>
  );
}

export default WalkingTourPage;
