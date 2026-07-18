import Image from "next/image";

const CityTourArchaeologicalPage = () => {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative h-[650px]">
        <Image
          src="/images/city-tour-cusco.jpg"
          alt="Cusco Archaeological City Tour"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/45 flex items-center">
          <div className="max-w-6xl mx-auto px-6 text-white">
            <span className="bg-amber-500 px-5 py-2 rounded-full text-sm font-semibold">
              Cusco Cultural Experience
            </span>

            <h1 className="text-5xl md:text-6xl font-bold mt-6 leading-tight">
              Traditional Archaeological City Tour
            </h1>

            <p className="text-xl mt-6 max-w-2xl text-gray-100">
              Discover the most important temples, fortresses, and ceremonial
              centers of the Inca Empire on an unforgettable cultural journey.
            </p>

            <button className="mt-8 bg-amber-500 hover:bg-amber-600 px-8 py-4 rounded-xl font-bold transition">
              Book Your Experience
            </button>
          </div>
        </div>
      </section>

      {/* INFO CARDS */}
      <section className="max-w-6xl mx-auto px-6 -mt-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-5">
          <InfoCard icon="⏱️" title="Duration" value="5 Hours" />

          <InfoCard
            icon="🏔️"
            title="Maximum Altitude"
            value="3,700 m (12,139 ft)"
          />

          <InfoCard icon="🥾" title="Difficulty" value="Easy" />

          <InfoCard icon="📍" title="Location" value="Cusco, Peru" />
        </div>
      </section>

      {/* DESCRIPTION */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold text-gray-900">
            Explore the History of the Inca Empire
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            Visit the most remarkable archaeological sites surrounding Cusco,
            the ancient capital of the Inca Empire. Discover sacred temples,
            impressive fortresses, and ceremonial centers while accompanied by a
            certified professional guide.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex gap-3">
              <span>✓</span>
              <p>Certified bilingual guide</p>
            </div>

            <div className="flex gap-3">
              <span>✓</span>
              <p>Shared tourist transportation</p>
            </div>

            <div className="flex gap-3">
              <span>✓</span>
              <p>Visit to the main archaeological sites</p>
            </div>
          </div>
        </div>

        <div className="relative h-[450px]">
          <Image
            src="/images/sacsayhuaman.jpg"
            alt="Sacsayhuaman Fortress"
            fill
            className="rounded-3xl object-cover shadow-xl"
          />
        </div>
      </section>

      {/* PLACES */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Places You'll Visit
          </h2>

          <div className="grid md:grid-cols-5 gap-5">
            {[
              {
                name: "Qorikancha",
                emoji: "☀️",
              },
              {
                name: "Sacsayhuamán",
                emoji: "🏛️",
              },
              {
                name: "Q'enqo",
                emoji: "🪨",
              },
              {
                name: "Puka Pukara",
                emoji: "🏰",
              },
              {
                name: "Tambomachay",
                emoji: "💧",
              },
            ].map((place) => (
              <div
                key={place.name}
                className="bg-white rounded-2xl p-6 text-center shadow hover:-translate-y-2 transition"
              >
                <div className="text-4xl">{place.emoji}</div>

                <h3 className="font-bold mt-4">{place.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ITINERARY */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Tour Itinerary</h2>

        <div className="space-y-6">
          <Timeline
            number="01"
            title="Qorikancha – Temple of the Sun"
            text="Begin your journey by visiting one of the most sacred temples of the ancient Andean world."
          />

          <Timeline
            number="02"
            title="Sacsayhuamán Fortress"
            text="Explore the impressive Inca fortress famous for its gigantic perfectly carved stone blocks."
          />

          <Timeline
            number="03"
            title="Q'enqo & Puka Pukara"
            text="Visit fascinating ceremonial centers and ancient military fortresses of the Inca civilization."
          />

          <Timeline
            number="04"
            title="Tambomachay"
            text="Finish the tour at the sacred water fountains, an important ceremonial site of the Incas."
          />
        </div>
      </section>

      {/* INCLUDED */}
      <section className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-8">
        <div className="bg-green-50 rounded-3xl p-8">
          <h2 className="text-3xl font-bold text-green-700">Included</h2>

          <ul className="mt-6 space-y-3">
            <li>✓ Shared tourist transportation</li>
            <li>✓ Certified bilingual guide (English/Spanish)</li>
            <li>✓ Personalized assistance throughout the tour</li>
          </ul>
        </div>

        <div className="bg-red-50 rounded-3xl p-8">
          <h2 className="text-3xl font-bold text-red-700">Not Included</h2>

          <ul className="mt-6 space-y-3">
            <li>✕ Cusco Tourist Ticket (BTC)</li>
            <li>✕ Qorikancha entrance fee</li>
            <li>✕ Personal expenses</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-amber-600 to-orange-500 py-16 text-white text-center">
        <h2 className="text-5xl font-bold">Experience the Best of Cusco</h2>

        <p className="mt-5 text-xl">
          Book your Traditional Archaeological City Tour today.
        </p>

        <button className="mt-8 bg-white text-orange-600 px-10 py-4 rounded-xl font-bold">
          Check Availability
        </button>
      </section>
    </main>
  );
};

function InfoCard({
  icon,
  title,
  value,
}: {
  icon: string;
  title: string;
  value: string;
}) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 text-center">
      <div className="text-3xl">{icon}</div>

      <h3 className="font-semibold text-gray-500 mt-3">{title}</h3>

      <p className="font-bold text-lg mt-2">{value}</p>
    </div>
  );
}

function Timeline({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-6 bg-white shadow rounded-2xl p-6">
      <div className="bg-amber-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold">
        {number}
      </div>

      <div>
        <h3 className="text-xl font-bold">{title}</h3>

        <p className="text-gray-600 mt-2">{text}</p>
      </div>
    </div>
  );
}

export default CityTourArchaeologicalPage;
