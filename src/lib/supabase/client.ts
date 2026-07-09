import { createBrowserClient } from "@supabase/ssr";

let _supabase: ReturnType<typeof createBrowserClient> | null = null;

function getPublicSupabaseKey() {
  return (
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ??
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
}

export function getBrowserSupabase() {
  if (typeof window === "undefined") {
    throw new Error("getBrowserSupabase must be called in the browser");
  }

  if (_supabase) return _supabase;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = getPublicSupabaseKey();

  if (!url || !key) {
    throw new Error("Missing Supabase browser env vars");
  }

  _supabase = createBrowserClient(url, key);
  return _supabase;
}
