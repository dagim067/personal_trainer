import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    // Validate environment variables
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !serviceRoleKey) {
      console.error("Missing Supabase environment variables");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 },
      );
    }

    const supabase = createClient(supabaseUrl, serviceRoleKey);
    const body = await req.json();

    console.log("Booking request received:", { phone: body.phone });

    const existingBooking = await supabase
      .from("bookings")
      .select("id")
      .eq("phone", body.phone)
      .maybeSingle();

    if (existingBooking.error) {
      console.error("Supabase lookup error:", existingBooking.error);
      return NextResponse.json(
        { error: existingBooking.error.message },
        { status: 500 },
      );
    }

    if (existingBooking.data) {
      return NextResponse.json(
        {
          status: "alreadyBooked",
          message:
            "It looks like this phone number already has an active booking. Please contact us for help.",
        },
        { status: 409 },
      );
    }

    const { data, error } = await supabase
      .from("bookings")
      .insert([body])
      .select()
      .single();

    if (error) {
      console.error("Supabase insert error:", error);
      if (error.code === "23505") {
        return NextResponse.json(
          {
            status: "alreadyBooked",
            message:
              "It looks like this phone number already has an active booking. Please contact us for help.",
          },
          { status: 409 },
        );
      }

      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json(
      {
        status: "created",
        message:
          "Your booking is confirmed! We'll reach out soon with next steps.",
        data,
      },
      { status: 201 },
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
