import Image from "next/image";

const IncaTrailPage = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[500px] w-full">
        <Image
          src="/camino-inca.jpg"
          alt="Inca Trail Cusco"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center px-5">
          <h1 className="text-5xl font-bold mb-4">Inca Trail - Cusco</h1>

          <p className="text-xl max-w-2xl">
            One of the most famous trekking routes in the world, connecting
            breathtaking Andean landscapes, ancient history, and the incredible
            legacy of the Inca civilization.
          </p>
        </div>
      </section>

      {/* Tour Information */}
      <section className="max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold mb-6">About the Inca Trail</h2>

        <p className="text-gray-700 leading-relaxed">
          The Inca Trail is an ancient route that crosses mountains, cloud
          forests, and impressive archaeological sites before reaching Machu
          Picchu. During this unforgettable journey, travelers discover the
          history of the Inca Empire while enjoying some of the most spectacular
          landscapes in Peru.
        </p>

        {/* Details */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-xl mb-2">Duration</h3>

            <p>4 Days / 3 Nights</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-xl mb-2">Difficulty</h3>

            <p>Moderate - Challenging</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-xl mb-2">Location</h3>

            <p>Cusco, Peru</p>
          </div>
        </div>
      </section>

      {/* Price */}
      <section className="bg-green-700 text-white py-10">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Tour Price</h2>

          <p className="text-2xl">From $650 USD per person</p>

          <button className="mt-6 bg-white text-green-700 px-6 py-3 rounded-lg font-bold hover:bg-gray-100">
            Book Now
          </button>
        </div>
      </section>
    </main>
  );
};

export default IncaTrailPage;
