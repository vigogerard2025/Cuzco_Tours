-- AlterTable
ALTER TABLE "Tour" ALTER COLUMN "maxAltitude" DROP NOT NULL,
ALTER COLUMN "maxGroupSize" DROP NOT NULL;

-- CreateTable
CREATE TABLE "TourPrice" (
    "id" SERIAL NOT NULL,
    "tourId" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "minPeople" INTEGER,

    CONSTRAINT "TourPrice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TourItinerary" (
    "id" SERIAL NOT NULL,
    "tourId" INTEGER NOT NULL,
    "day" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "distance" TEXT,
    "hikingTime" TEXT,
    "accommodation" TEXT,

    CONSTRAINT "TourItinerary_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TourInclude" (
    "id" SERIAL NOT NULL,
    "tourId" INTEGER NOT NULL,
    "item" TEXT NOT NULL,

    CONSTRAINT "TourInclude_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TourExclude" (
    "id" SERIAL NOT NULL,
    "tourId" INTEGER NOT NULL,
    "item" TEXT NOT NULL,

    CONSTRAINT "TourExclude_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TourImage" (
    "id" SERIAL NOT NULL,
    "tourId" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    "alt" TEXT,

    CONSTRAINT "TourImage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TourItinerary_tourId_day_key" ON "TourItinerary"("tourId", "day");

-- AddForeignKey
ALTER TABLE "TourPrice" ADD CONSTRAINT "TourPrice_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "Tour"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TourItinerary" ADD CONSTRAINT "TourItinerary_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "Tour"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TourInclude" ADD CONSTRAINT "TourInclude_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "Tour"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TourExclude" ADD CONSTRAINT "TourExclude_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "Tour"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TourImage" ADD CONSTRAINT "TourImage_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "Tour"("id") ON DELETE CASCADE ON UPDATE CASCADE;
