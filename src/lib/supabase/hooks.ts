"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "./client";
import type { BookingInsertInput, Transformation, Video } from "./queries";

export function useVideos() {
  return useQuery<Video[], Error>({
    queryKey: ["videos"],
    queryFn: async () => {
      const result = (await supabase
        .from("videos")
        .select("*")
        .order("featured", { ascending: false })
        .order("created_at", { ascending: false })
        .limit(3)) as {
        data: Video[] | null;
        error: Error | null;
      };

      if (result.error) {
        throw result.error;
      }

      return result.data ?? [];
    },
    staleTime: 1000 * 60 * 5,
  });
}

export function useTransformations() {
  return useQuery<Transformation[], Error>({
    queryKey: ["transformations"],
    queryFn: async () => {
      const result = (await supabase
        .from("transformations")
        .select("*")
        .order("featured", { ascending: false })
        .order("created_at", { ascending: false })
        .limit(4)) as {
        data: Transformation[] | null;
        error: Error | null;
      };

      if (result.error) {
        throw result.error;
      }

      return result.data ?? [];
    },
    staleTime: 1000 * 60 * 5,
  });
}

export function useTransformation(slug: string | null) {
  console.log(
    "useTransformation called with slug:",
    slug,
    "Type:",
    typeof slug,
  );
  return useQuery<Transformation | null, Error>({
    queryKey: ["transformation", slug],
    queryFn: async () => {
      if (!slug) {
        return null;
      }

      const result = (await supabase
        .from("transformations")
        .select("*")
        .eq("slug", slug)
        .maybeSingle()) as {
        data: Transformation | null;
        error: Error | null;
      };
      if (result.error) {
        console.error("Query error:", result.error);
        throw result.error;
      }

      return result.data ?? null;
    },
    enabled: Boolean(slug),
    staleTime: 1000 * 60 * 5,
  });
}
export type BookingResult =
  | {
      status: "created";
      message: string;
    }
  | {
      status: "alreadyBooked";
      message: string;
    };

export function useBooking() {
  const queryClient = useQueryClient();

  return useMutation<BookingResult, Error, BookingInsertInput, unknown>({
    mutationFn: async (bookingData) => {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });

      const result = (await res.json()) as {
        status?: string;
        message?: string;
        error?: string;
      };

      if (!res.ok) {
        if (res.status === 409) {
          return {
            status: "alreadyBooked",
            message: result.message || "You already have a booking.",
          };
        }

        throw new Error(result.error || "Booking failed");
      }

      queryClient.invalidateQueries({ queryKey: ["bookings"] });

      return {
        status: (result.status as "created" | "alreadyBooked") || "created",
        message:
          result.message ||
          "Your booking is confirmed! We'll reach out soon with next steps.",
      };
    },
  });
}
