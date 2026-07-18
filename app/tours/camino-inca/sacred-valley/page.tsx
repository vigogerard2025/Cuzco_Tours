import Image from "next/image";

const SacredValleyVIPPage = () => {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative h-[650px]">
        <Image
          src="/images/valle-sagrado-vip.jpg"
          alt="VIP Sacred Valley Tour"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/45 flex items-center">
          <div className="max-w-6xl mx-auto px-6 text-white">
            <span className="bg-amber-500 px-4 py-2 rounded-full">
              Premium Experience
            </span>

            <h1 className="text-6xl font-bold mt-6">VIP Sacred Valley Tour</h1>

            <p className="mt-5 text-xl max-w-2xl">
              Discover the highlights of the Sacred Valley in a single day,
              combining history, culture, breathtaking Andean landscapes, and
              outstanding Peruvian cuisine.
            </p>

            <button className="mt-8 bg-amber-500 hover:bg-amber-600 transition px-8 py-4 rounded-lg font-bold">
              Book Now
            </button>
          </div>
        </div>
      </section>

      {/* INFO */}
      <section className="max-w-6xl mx-auto -mt-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-5 px-6">
          <InfoCard title="Duration" value="11 Hours" />
          <InfoCard title="Maximum Altitude" value="3,762 m (12,342 ft)" />
          <InfoCard title="Difficulty" value="Easy to Moderate" />
          <InfoCard title="Schedule" value="07:00 AM - 06:00 PM" />
        </div>
      </section>

      {/* DESCRIPTION */}
      <section className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">
            Explore the Sacred Valley of the Incas
          </h2>

          <p className="text-gray-600 leading-8">
            Enjoy a premium journey through the Sacred Valley’s most iconic
            destinations. Visit Chinchero, Moray, the Maras Salt Mines, and
            Ollantaytambo while enjoying a gourmet buffet lunch in Urubamba,
            accompanied by a certified professional guide.
          </p>

          <div className="mt-8 space-y-3">
            <p>✓ Chinchero Archaeological Site</p>
            <p>✓ Moray Agricultural Terraces</p>
            <p>✓ Maras Salt Mines</p>
            <p>✓ Gourmet Buffet Lunch in Urubamba</p>
            <p>✓ Ollantaytambo Fortress</p>
          </div>
        </div>

        <Image
          src="/images/ollantaytambo.jpg"
          alt="Ollantaytambo Fortress"
          width={600}
          height={500}
          className="rounded-3xl object-cover"
        />
      </section>

      {/* ITINERARY */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Tour Itinerary
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-3xl shadow p-8">
              <h3 className="text-2xl font-bold text-amber-500">
                🧶 Chinchero
              </h3>

              <p className="mt-3 text-gray-600">
                Visit the archaeological site and enjoy a traditional Andean
                textile weaving demonstration by local artisans.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow p-8">
              <h3 className="text-2xl font-bold text-amber-500">🌿 Moray</h3>

              <p className="mt-3 text-gray-600">
                Explore the famous circular agricultural terraces once used by
                the Incas as an agricultural research center.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow p-8">
              <h3 className="text-2xl font-bold text-amber-500">
                🧂 Maras Salt Mines
              </h3>

              <p className="mt-3 text-gray-600">
                Discover thousands of salt pools that have been in continuous
                use since pre-Inca times.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow p-8">
              <h3 className="text-2xl font-bold text-amber-500">🍽️ Urubamba</h3>

              <p className="mt-3 text-gray-600">
                Enjoy a delicious gourmet buffet lunch featuring the best of
                Peruvian cuisine.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow p-8">
              <h3 className="text-2xl font-bold text-amber-500">
                🏛️ Ollantaytambo
              </h3>

              <p className="mt-3 text-gray-600">
                Explore one of the best-preserved Inca fortresses. Travelers
                continuing to Machu Picchu by train may stay here and board
                directly from Ollantaytambo Station.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INCLUDED */}
      <section className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-10">
        <div className="bg-green-50 rounded-3xl p-10">
          <h2 className="text-3xl font-bold text-green-700">Included</h2>

          <ul className="mt-6 space-y-3">
            <li>✓ Tourist transportation</li>
            <li>✓ Certified bilingual guide</li>
            <li>✓ Premium buffet lunch in Urubamba</li>
            <li>✓ Traditional textile demonstration in Chinchero</li>
          </ul>
        </div>

        <div className="bg-red-50 rounded-3xl p-10">
          <h2 className="text-3xl font-bold text-red-700">Not Included</h2>

          <ul className="mt-6 space-y-3">
            <li>✕ Cusco Tourist Ticket (BTC)</li>
            <li>✕ Entrance fee to the Maras Salt Mines</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-500 py-16 text-white text-center">
        <h2 className="text-5xl font-bold">Experience the VIP Sacred Valley</h2>

        <p className="mt-4 text-xl">
          History, culture, gastronomy, and breathtaking landscapes in one
          unforgettable journey.
        </p>

        <button className="mt-8 bg-white text-amber-600 px-10 py-4 rounded-xl font-bold hover:bg-gray-100 transition">
          Check Availability
        </button>
      </section>
    </main>
  );
};

function InfoCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
      <h3 className="font-bold text-gray-500">{title}</h3>
      <p className="text-xl font-bold mt-2">{value}</p>
    </div>
  );
}

export default SacredValleyVIPPage;
