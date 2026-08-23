/*
  Warnings:

  - The values [INCLUYE,NO_INCLUYE] on the enum `InclusionType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the `Pago` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Reserva` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "BookingStatus" AS ENUM ('PENDING', 'CONFIRMED', 'CANCELLED', 'COMPLETED');

-- AlterEnum
BEGIN;
CREATE TYPE "InclusionType_new" AS ENUM ('INCLUDED', 'NOT_INCLUDED');
ALTER TABLE "TourInclusion" ALTER COLUMN "type" TYPE "InclusionType_new" USING ("type"::text::"InclusionType_new");
ALTER TYPE "InclusionType" RENAME TO "InclusionType_old";
ALTER TYPE "InclusionType_new" RENAME TO "InclusionType";
DROP TYPE "public"."InclusionType_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "Pago" DROP CONSTRAINT "Pago_reservaId_fkey";

-- DropForeignKey
ALTER TABLE "Reserva" DROP CONSTRAINT "Reserva_tourId_fkey";

-- DropForeignKey
ALTER TABLE "Reserva" DROP CONSTRAINT "Reserva_tourOptionId_fkey";

-- AlterTable
ALTER TABLE "Tour" ADD COLUMN     "imageUrl" TEXT;

-- DropTable
DROP TABLE "Pago";

-- DropTable
DROP TABLE "Reserva";

-- DropEnum
DROP TYPE "ReservaEstado";

-- CreateTable
CREATE TABLE "Booking" (
    "id" TEXT NOT NULL,
    "tourId" TEXT NOT NULL,
    "tourOptionId" TEXT NOT NULL,
    "customerName" TEXT NOT NULL,
    "customerEmail" TEXT NOT NULL,
    "customerPhone" TEXT,
    "numberOfPeople" INTEGER NOT NULL,
    "travelDate" TIMESTAMP(3) NOT NULL,
    "totalAmount" DECIMAL(10,2) NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'USD',
    "status" "BookingStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payment" (
    "id" TEXT NOT NULL,
    "bookingId" TEXT NOT NULL,
    "mercadoPagoId" TEXT NOT NULL,
    "preferenceId" TEXT,
    "status" TEXT NOT NULL,
    "statusDetail" TEXT,
    "amount" DECIMAL(10,2) NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'USD',
    "webhookVerified" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Booking_tourId_idx" ON "Booking"("tourId");

-- CreateIndex
CREATE INDEX "Booking_status_idx" ON "Booking"("status");

-- CreateIndex
CREATE UNIQUE INDEX "Payment_bookingId_key" ON "Payment"("bookingId");

-- CreateIndex
CREATE UNIQUE INDEX "Payment_mercadoPagoId_key" ON "Payment"("mercadoPagoId");

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "Tour"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_tourOptionId_fkey" FOREIGN KEY ("tourOptionId") REFERENCES "TourOption"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "Booking"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
