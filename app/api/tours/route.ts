import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const tours = await prisma.tour.findMany();

  return NextResponse.json(tours);
}
export async function POST(request: Request) {
  const body = await request.json();

  const tour = await prisma.tour.create({
    data: body,
  });

  return NextResponse.json(tour);
}
