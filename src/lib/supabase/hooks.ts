"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getBrowserSupabase } from "./client";
import type { BookingInsertInput, Transformation, Video } from "./queries";
import { fallbackTransformations } from "./fallback-transformations";

export function useVideos() {
  return useQuery<Video[], Error>({
    queryKey: ["videos"],
    queryFn: async () => {
      const supabase = getBrowserSupabase();
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
      try {
        const supabase = getBrowserSupabase();
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
      } catch (error) {
        console.error("useTransformations fallback error:", error);
        return fallbackTransformations;
      }
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
      const supabase = getBrowserSupabase();

      try {
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
          return fallbackTransformations.find((item) => item.slug === slug) ?? null;
        }

        return result.data ?? fallbackTransformations.find((item) => item.slug === slug) ?? null;
      } catch (error) {
        console.error("useTransformation fallback error:", error);
        return fallbackTransformations.find((item) => item.slug === slug) ?? null;
      }
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
      // Client-side booking via Supabase browser client.
      // NOTE: This requires a publishable/anon key and appropriate DB policies.

      const supabase = getBrowserSupabase();
      const { phone, ...rest } = bookingData as any;

      // Check for existing booking with same phone
      const existing = await supabase
        .from("bookings")
        .select("id")
        .eq("phone", phone)
        .maybeSingle();

      if (existing.error) {
        throw existing.error;
      }

      if (existing.data) {
        return {
          status: "alreadyBooked",
          message:
            "It looks like this phone number already has an active booking. Please contact us for help.",
        };
      }

      const { data, error } = await supabase
        .from("bookings")
        .insert([bookingData])
        .select()
        .single();

      if (error) {
        if ((error as any).code === "23505") {
          return {
            status: "alreadyBooked",
            message:
              "It looks like this phone number already has an active booking. Please contact us for help.",
          };
        }

        throw error;
      }

      queryClient.invalidateQueries({ queryKey: ["bookings"] });

      return {
        status: "created",
        message:
          "Your booking is confirmed! We'll reach out soon with next steps.",
      };
    },
  });
}
