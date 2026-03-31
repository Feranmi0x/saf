
import db from "@/db/drizzle";
import { contacts } from "@/db/schema";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, month, day, year, pledgeReminder } =
      await req.json();

    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: "First name, last name, and email are required." },
        { status: 400 }
      );
    }

    await db.insert(contacts).values({
      firstName,
      lastName,
      email,
      month,
      day,
      year,
      pledgeReminder,
    });

    return NextResponse.json({
      success: true,
      message: "Form submitted successfully!",
    });
  } catch (error: unknown) {
    console.error(error);

    const message =
      typeof error === "object" && error !== null && "message" in error && typeof ((error as { message?: unknown }).message) === "string"
        ? ((error as { message?: unknown }).message as string)
        : String(error);

    if (message.includes("duplicate key")) {
      return NextResponse.json(
        { error: "This email is already in our records." },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}