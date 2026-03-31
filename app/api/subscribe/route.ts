
import db from "@/db/drizzle";
import { subscribers } from "@/db/schema";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email } = await req.json();

    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    await db.insert(subscribers).values({
      firstName,
      lastName,
      email,
    });

    return NextResponse.json({
      success: true,
      message: "Thank you for subscribing!",
    });
  } catch (error: unknown) {
    console.error(error);

    const message = error instanceof Error ? error.message : String(error);

    if (message.includes("duplicate key")) {
      return NextResponse.json(
        { error: "This email is already subscribed." },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Something went wrong, please try again." },
      { status: 500 }
    );
  }
}