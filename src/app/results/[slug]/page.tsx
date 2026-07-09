import TransformationPageClient from "../../../components/TransformationPageClient";
import type { Metadata } from "next";
import { getTransformations } from "@/lib/supabase/queries";

type TransformationPageProps = {
  params: {
    slug: string;
  };
};

export const metadata: Metadata = {
  title: "Transformation Details",
};

export async function generateStaticParams() {
  // Fetch all transformations at build time to generate static pages.
  // If Supabase environment variables are not set at build time, skip
  // generating dynamic pages to avoid build failure. For full export,
  // set `NEXT_PUBLIC_SUPABASE_URL` and either `SUPABASE_SERVICE_ROLE_KEY` or
  // `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` before building.
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    console.warn(
      "Skipping generateStaticParams: NEXT_PUBLIC_SUPABASE_URL not set.",
    );
    // Return a placeholder slug so `next export` can succeed when
    // build-time env vars are not available. Prefer setting the
    // Supabase env vars for full export of real pages.
    return [{ slug: "placeholder" }];
  }

  const items = await getTransformations();
  return (items ?? []).map((t) => ({ slug: String(t.slug) }));
}

export default async function TransformationPage({ params }: TransformationPageProps) {
  const { slug } = params;
  return <TransformationPageClient slug={slug} />;
}
