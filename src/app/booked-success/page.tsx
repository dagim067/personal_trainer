"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function BookedSuccessPage() {
  const router = useRouter();
  const [allowed, setAllowed] = useState<boolean | null>(null);

  useEffect(() => {
    const booked = sessionStorage.getItem("bookingComplete") === "true";
    if (!booked) {
      router.replace("/booking");
      return;
    }

    setAllowed(true);
  }, [router]);

  if (allowed === null) {
    return null;
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute right-0 top-36 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto px-6 md:px-8 lg:px-12 py-24 text-center">
        <div className="inline-flex items-center justify-center rounded-full bg-emerald-100 text-emerald-700 p-4 mb-8 mx-auto w-20 h-20">
          <CheckCircle2 className="h-10 w-10" />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Booking Confirmed
        </h1>
        <p className="text-base leading-7 text-muted-foreground mb-8">
          Thank you! Your training request has been received and your booking is
          now confirmed. We&apos;ll be in touch soon with the next steps.
        </p>

        <div className="space-y-3">
          <Button className="w-full rounded-none" asChild>
            <Link href="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
