"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import BookingForm from "@/components/booking/BookingForm";

export default function BookingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-12 pt-24">
        {/* Back Button */}
        <Button
          asChild
          variant="outline"
          className="mb-8 rounded-full bg-background/70 backdrop-blur"
        >
          <Link href="/">
            <ArrowLeft className="size-4" />
            Back
          </Link>
        </Button>

        {/* Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-5">
            Start Your Transformation
          </div>

          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            Book Your{" "}
            <span className="text-primary">Personal Training Session</span>
          </h1>

          <p className="mt-5 text-muted-foreground leading-relaxed text-sm">
            Complete the form below to share your goals, training preferences,
            and package selection. We&apos;ll create a personalized fitness plan
            designed around your lifestyle and objectives.
          </p>
        </div>

        <BookingForm />
      </div>
    </div>
  );
}
