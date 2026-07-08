"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Target, TrendingUp, Quote } from "lucide-react";
import { useTransformation } from "@/lib/supabase/hooks";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

type TransformationPageClientProps = {
  slug: string;
};

// ─── Skeleton Components ──────────────────────────────────────────────────────

function HeroSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="flex items-center gap-3">
        <Skeleton className="h-6 w-36 rounded-full" />
        <Skeleton className="h-1.5 w-16 rounded-full" />
      </div>
      <div className="space-y-3">
        <Skeleton className="h-12 w-3/4 rounded-lg" />
        <Skeleton className="h-12 w-1/2 rounded-lg" />
      </div>
      <Skeleton className="h-5 w-full rounded-md" />
      <Skeleton className="h-5 w-4/5 rounded-md" />
    </div>
  );
}

function MetaBadgeSkeleton() {
  return <Skeleton className="h-16 w-full rounded-2xl" />;
}

function ImageSkeleton() {
  return (
    <Skeleton className="w-full rounded-3xl" style={{ aspectRatio: "16/9" }} />
  );
}

function GoalsSkeleton() {
  return (
    <div className="space-y-3">
      {[80, 65, 90].map((w, i) => (
        <Skeleton
          key={i}
          className={`h-14 rounded-2xl`}
          style={{ width: `${w}%` }}
        />
      ))}
    </div>
  );
}

function StatsSkeleton() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {[1, 2, 3, 4].map((i) => (
        <Skeleton key={i} className="h-24 rounded-2xl" />
      ))}
    </div>
  );
}

function StorySkeleton() {
  return (
    <div className="space-y-3">
      {[100, 95, 88, 72].map((w, i) => (
        <Skeleton
          key={i}
          className="h-4 rounded-full"
          style={{ width: `${w}%` }}
        />
      ))}
    </div>
  );
}

// ─── Section Wrapper ──────────────────────────────────────────────────────────

function Section({
  title,
  subtitle,
  icon: Icon,
  children,
  className,
}: {
  title: string;
  subtitle?: string;
  icon?: React.ElementType;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("space-y-5", className)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          {Icon && (
            <span className="flex items-center justify-center h-8 w-8 rounded-xl bg-primary/10 text-primary">
              <Icon size={15} strokeWidth={2.5} />
            </span>
          )}
          <h2 className="text-lg font-semibold tracking-tight text-foreground">
            {title}
          </h2>
        </div>
        {subtitle && (
          <span className="text-xs text-muted-foreground uppercase tracking-widest font-medium">
            {subtitle}
          </span>
        )}
      </div>
      {children}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function TransformationPageClient({
  slug,
}: TransformationPageClientProps) {
  console.log("Fetching transformation with slug:", slug);
  const { data: transformation, isLoading, error } = useTransformation(slug);

  return (
    <main className="min-h-screen bg-background py-20 text-foreground">
      {/* ── Top Nav ── */}
      <div className="sticky top-0 z-20 border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-6 md:px-10 h-14 flex items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={15} />
            Back to Home
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-10 py-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px] items-start">
          {/* ════════════════ LEFT COLUMN ════════════════ */}
          <div className="space-y-10 min-w-0">
            {/* ── Hero Header ── */}
            <div className="space-y-6">
              {isLoading ? (
                <HeroSkeleton />
              ) : (
                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/8 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                      Transformation
                    </span>
                    <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-primary/40 to-transparent" />
                  </div>

                  <div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground leading-[1.05]">
                      {transformation?.name}
                    </h1>
                    {transformation?.note && (
                      <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-2xl">
                        {transformation.note}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* ── Meta Badges ── */}
            <div className="grid grid-cols-2 gap-3">
              {isLoading ? (
                <>
                  <MetaBadgeSkeleton />
                  <MetaBadgeSkeleton />
                </>
              ) : (
                [
                  {
                    icon: Target,
                    label: "Program",
                    value: transformation?.program ?? "Personal Coaching",
                  },
                  {
                    icon: Clock,
                    label: "Duration",
                    value: transformation?.duration_months
                      ? `${transformation.duration_months} months`
                      : "Ongoing",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 rounded-2xl border border-border/50 bg-card px-5 py-4"
                  >
                    <span className="flex-shrink-0 flex items-center justify-center h-9 w-9 rounded-xl bg-primary/10 text-primary">
                      <item.icon size={16} strokeWidth={2} />
                    </span>
                    <div>
                      <p className="text-[11px] uppercase tracking-widest text-muted-foreground font-medium mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-sm font-semibold text-foreground">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* ── Hero Image ── */}
            {isLoading ? (
              <ImageSkeleton />
            ) : transformation?.image_url ? (
              <div className="relative w-full overflow-hidden rounded-3xl border border-border/30 shadow-xl">
                <div style={{ aspectRatio: "16/12" }} className="relative">
                  <Image
                    src={transformation.image_url}
                    alt={transformation?.name ?? "Transformation"}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    priority
                  />
                  {/* Cinematic vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
              </div>
            ) : null}

            {/* ── Before & After ── */}
            {(transformation?.before_image || transformation?.after_image) && (
              <Section
                title="Before & After"
                subtitle="Progress photos"
                icon={TrendingUp}
              >
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl overflow-hidden border border-border/30 bg-card">
                    {transformation?.before_image ? (
                      <div
                        style={{ aspectRatio: "16/14" }}
                        className="relative"
                      >
                        <Image
                          src={transformation.before_image}
                          alt={`${transformation.name} before`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw"
                        />
                      </div>
                    ) : (
                      <div className="p-4 text-muted-foreground">
                        No before image
                      </div>
                    )}
                  </div>

                  <div className="rounded-2xl overflow-hidden border border-border/30 bg-card">
                    {transformation?.after_image ? (
                      <div
                        style={{ aspectRatio: "16/14" }}
                        className="relative"
                      >
                        <Image
                          src={transformation.after_image}
                          alt={`${transformation.name} after`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw"
                        />
                      </div>
                    ) : (
                      <div className="p-4 text-muted-foreground">
                        No after image
                      </div>
                    )}
                  </div>
                </div>
              </Section>
            )}

            {/* ── Goals & Stats Row ── */}
            <div className="grid gap-8 md:grid-cols-2">
              {/* Goals */}
              <Section title="Goals" subtitle="What changed" icon={Target}>
                {isLoading ? (
                  <GoalsSkeleton />
                ) : (
                  <ul className="space-y-2.5">
                    {Array.isArray(transformation?.goals) &&
                      transformation.goals.map((goal, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 rounded-2xl border border-border/40 bg-card px-4 py-3.5 text-sm text-foreground/80 leading-relaxed"
                        >
                          <span className="mt-0.5 flex-shrink-0 h-5 w-5 rounded-full bg-primary/15 text-primary flex items-center justify-center text-[10px] font-bold">
                            {index + 1}
                          </span>
                          {String(goal)}
                        </li>
                      ))}
                  </ul>
                )}
              </Section>

              {/* Stats */}
              <Section title="Stats" subtitle="Metrics" icon={TrendingUp}>
                {isLoading ? (
                  <StatsSkeleton />
                ) : (
                  <div className="grid grid-cols-2 gap-3">
                    {Array.isArray(transformation?.stats) &&
                      transformation.stats.map((stat, index) => {
                        const s = stat as { label?: string; value?: string };
                        return (
                          <div
                            key={index}
                            className="rounded-2xl border border-border/40 bg-card p-4"
                          >
                            <p className="text-[11px] uppercase tracking-widest text-muted-foreground font-medium mb-1.5">
                              {String(s.label ?? "")}
                            </p>
                            <p className="text-2xl font-bold text-foreground tracking-tight">
                              {String(s.value ?? "")}
                            </p>
                          </div>
                        );
                      })}
                  </div>
                )}
              </Section>
            </div>
          </div>

          {/* ════════════════ RIGHT COLUMN ════════════════ */}
          <aside className="space-y-6 lg:sticky lg:top-20">
            {/* ── Story ── */}
            <div className="rounded-3xl border border-border/50 bg-card p-6 space-y-5">
              <div className="flex items-center gap-2.5">
                <span className="flex items-center justify-center h-8 w-8 rounded-xl bg-primary/10 text-primary">
                  <Quote size={14} strokeWidth={2.5} />
                </span>
                <h2 className="text-base font-semibold tracking-tight text-foreground">
                  Their Story
                </h2>
              </div>

              {isLoading ? (
                <StorySkeleton />
              ) : Array.isArray(transformation?.stories) ? (
                <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                  {transformation.stories.map((paragraph, index) => (
                    <p key={index}>{String(paragraph)}</p>
                  ))}
                </div>
              ) : null}
            </div>

            {/* ── Pull Quote ── */}
            <div className="rounded-3xl border border-primary/20 bg-primary/5 p-6 space-y-4">
              <div className="text-primary/40">
                <svg
                  width="28"
                  height="20"
                  viewBox="0 0 28 20"
                  fill="currentColor"
                >
                  <path d="M0 20V12.727C0 5.697 3.636 1.576 10.909 0L12.364 2.424C9.212 3.333 7.394 5.212 6.909 8.061H12V20H0ZM16 20V12.727C16 5.697 19.636 1.576 26.909 0L28.364 2.424C25.212 3.333 23.394 5.212 22.909 8.061H28V20H16Z" />
                </svg>
              </div>
              {isLoading ? (
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full rounded-full" />
                  <Skeleton className="h-4 w-5/6 rounded-full" />
                  <Skeleton className="h-4 w-3/4 rounded-full" />
                </div>
              ) : (
                <p className="text-sm font-medium text-foreground/80 leading-relaxed italic">
                  {transformation?.quote ??
                    "This transformation was a complete reset — mentally and physically."}
                </p>
              )}
            </div>
          </aside>
        </div>

        {/* ── Error State ── */}
        {error && (
          <div className="mt-12 rounded-2xl border border-destructive/20 bg-destructive/5 px-6 py-5 text-sm text-destructive flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-destructive flex-shrink-0" />
            Unable to load transformation details. Please try again.
          </div>
        )}
      </div>
    </main>
  );
}
