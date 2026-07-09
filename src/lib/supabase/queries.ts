import { createClient } from "@supabase/supabase-js";

export type Video = {
  id: string;
  title: string;
  category: string;
  read_time: string | null;
  youtube_video_id: string;
  cover_image?: string | null;
  video_url?: string | null;
  featured: boolean;
  created_at: string;
};

export type Transformation = {
  id: string;
  slug: string;
  name: string;
  age: string;
  occupation: string;
  note: string;
  quote: string | null;
  image_url: string;
  before_image: string | null;
  after_image: string | null;
  duration_months: number | null;
  program: string | null;
  stats: unknown[];
  goals: unknown[];
  stories: unknown[];
  featured: boolean;
  created_at: string;
};

export type BookingInsertInput = {
  full_name: string;
  phone: string;
  age: string;
  gender: string;
  weight: string;
  fitness_level: string;
  fitness_goal: string;
  program: string;
  notes: string | null;
};

export type Booking = BookingInsertInput & {
  id: string;
  created_at: string;
};

function getServerSupabase() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY ??
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error("supabaseUrl is required.");
  }

  return createClient(supabaseUrl, serviceRoleKey);
}

export async function findBookingByPhone(
  phone: string,
): Promise<Booking | null> {
  const serverSupabase = getServerSupabase();
  const { data, error } = await serverSupabase
    .from("bookings")
    .select("*")
    .eq("phone", phone)
    .maybeSingle();

  if (error) {
    throw error;
  }

  return data ?? null;
}

export async function createBooking(
  booking: BookingInsertInput,
): Promise<Booking> {
  const serverSupabase = getServerSupabase();
  const { data, error } = await serverSupabase
    .from("bookings")
    .insert([booking])
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function getVideos(): Promise<Video[]> {
  const serverSupabase = getServerSupabase();
  const result = (await serverSupabase
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
}

export async function getTransformations(): Promise<Transformation[]> {
  const serverSupabase = getServerSupabase();
  const result = (await serverSupabase
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
}

export async function getTransformationBySlug(
  slug: string,
): Promise<Transformation | null> {
  const serverSupabase = getServerSupabase();
  const { data, error } = await serverSupabase
    .from("transformations")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  if (error) {
    throw error;
  }

  return data ?? null;
}
