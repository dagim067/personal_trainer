import TransformationPageClient from "../../../components/TransformationPageClient";
import type { Metadata } from "next";

type TransformationPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const metadata: Metadata = {
  title: "Transformation Details",
};

export default async function TransformationPage({
  params,
}: TransformationPageProps) {
  const { slug } = await params;
  return <TransformationPageClient slug={slug} />;
}
