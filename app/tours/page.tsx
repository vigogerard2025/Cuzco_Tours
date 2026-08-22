import { prisma } from "@/app/lib/prisma";

const Page = async () => {
  const tours = await prisma.tour.findMany();

  return (
    <div>
      <h1 className="text-3xl font-bold">Tours disponibles</h1>

      <div className="grid gap-5 mt-5">
        {tours.map((tour) => (
          <div key={tour.id} className="border p-4 rounded-lg">
            <h2 className="text-xl font-semibold">{tour.name}</h2>

            <p>{tour.description}</p>

            <p className="font-bold">${tour.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
