
import db from "@/db/drizzle";
import { donations } from "@/db/schema";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      amount,
      frequency,
      contactPreference,
    } = await req.json();

    if (!firstName || !lastName || !email || !amount || !frequency) {
      return NextResponse.json(
        { error: "Required fields are missing." },
        { status: 400 }
      );
    }

    await db.insert(donations).values({
      firstName,
      lastName,
      email,
      phone,
      amount: Number(amount),
      frequency,
      contactEmail: contactPreference?.email || false,
      contactText: contactPreference?.text || false,
    });

    return NextResponse.json({
      success: true,
      message: "Donation recorded successfully!",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}