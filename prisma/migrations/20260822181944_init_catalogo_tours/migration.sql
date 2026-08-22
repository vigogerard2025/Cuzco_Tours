-- CreateEnum
CREATE TYPE "InclusionType" AS ENUM ('INCLUYE', 'NO_INCLUYE');

-- CreateEnum
CREATE TYPE "ReservaEstado" AS ENUM ('PENDIENTE', 'CONFIRMADA', 'CANCELADA', 'COMPLETADA');

-- CreateTable
CREATE TABLE "Tour" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "shortDescription" TEXT,
    "description" TEXT,
    "durationDays" INTEGER NOT NULL,
    "durationNights" INTEGER,
    "difficulty" TEXT,
    "maxAltitudeM" INTEGER,
    "minGroupSize" INTEGER,
    "maxGroupSize" INTEGER,
    "guideLanguages" TEXT,
    "placesVisited" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tour_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TourItinerary" (
    "id" TEXT NOT NULL,
    "tourId" TEXT NOT NULL,
    "dayNumber" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "route" TEXT,
    "description" TEXT NOT NULL,
    "distanceKm" DOUBLE PRECISION,
    "durationText" TEXT,
    "altitudeM" INTEGER,
    "accommodationType" TEXT,
    "accommodationName" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TourItinerary_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TourOption" (
    "id" TEXT NOT NULL,
    "tourId" TEXT NOT NULL,
    "modality" TEXT NOT NULL,
    "pricePerPerson" DECIMAL(10,2),
    "currency" TEXT NOT NULL DEFAULT 'USD',
    "minPeople" INTEGER DEFAULT 1,
    "maxPeople" INTEGER,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "TourOption_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TourInclusion" (
    "id" TEXT NOT NULL,
    "tourId" TEXT NOT NULL,
    "type" "InclusionType" NOT NULL,
    "item" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "TourInclusion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reserva" (
    "id" TEXT NOT NULL,
    "tourId" TEXT NOT NULL,
    "tourOptionId" TEXT NOT NULL,
    "clienteNombre" TEXT NOT NULL,
    "clienteEmail" TEXT NOT NULL,
    "clienteTelefono" TEXT,
    "numPersonas" INTEGER NOT NULL,
    "fechaViaje" TIMESTAMP(3) NOT NULL,
    "montoTotal" DECIMAL(10,2) NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'USD',
    "estado" "ReservaEstado" NOT NULL DEFAULT 'PENDIENTE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Reserva_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pago" (
    "id" TEXT NOT NULL,
    "reservaId" TEXT NOT NULL,
    "mercadoPagoId" TEXT NOT NULL,
    "preferenceId" TEXT,
    "status" TEXT NOT NULL,
    "statusDetail" TEXT,
    "monto" DECIMAL(10,2) NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'USD',
    "webhookVerified" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pago_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tour_slug_key" ON "Tour"("slug");

-- CreateIndex
CREATE INDEX "Tour_category_idx" ON "Tour"("category");

-- CreateIndex
CREATE INDEX "Tour_published_idx" ON "Tour"("published");

-- CreateIndex
CREATE UNIQUE INDEX "TourItinerary_tourId_dayNumber_key" ON "TourItinerary"("tourId", "dayNumber");

-- CreateIndex
CREATE UNIQUE INDEX "TourOption_tourId_modality_key" ON "TourOption"("tourId", "modality");

-- CreateIndex
CREATE INDEX "TourInclusion_tourId_type_idx" ON "TourInclusion"("tourId", "type");

-- CreateIndex
CREATE INDEX "Reserva_tourId_idx" ON "Reserva"("tourId");

-- CreateIndex
CREATE INDEX "Reserva_estado_idx" ON "Reserva"("estado");

-- CreateIndex
CREATE UNIQUE INDEX "Pago_reservaId_key" ON "Pago"("reservaId");

-- CreateIndex
CREATE UNIQUE INDEX "Pago_mercadoPagoId_key" ON "Pago"("mercadoPagoId");

-- AddForeignKey
ALTER TABLE "TourItinerary" ADD CONSTRAINT "TourItinerary_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "Tour"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TourOption" ADD CONSTRAINT "TourOption_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "Tour"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TourInclusion" ADD CONSTRAINT "TourInclusion_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "Tour"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reserva" ADD CONSTRAINT "Reserva_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "Tour"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reserva" ADD CONSTRAINT "Reserva_tourOptionId_fkey" FOREIGN KEY ("tourOptionId") REFERENCES "TourOption"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pago" ADD CONSTRAINT "Pago_reservaId_fkey" FOREIGN KEY ("reservaId") REFERENCES "Reserva"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
