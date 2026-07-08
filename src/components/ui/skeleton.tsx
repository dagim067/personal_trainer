"use client";

import * as React from "react";

type SkeletonProps = React.HTMLAttributes<HTMLDivElement> & {
  box?: boolean;
};

export function Skeleton({
  className = "",
  box = false,
  ...props
}: SkeletonProps) {
  return (
    <div
      role="status"
      aria-hidden
      className={`rounded-lg bg-muted/20 animate-pulse ${box ? "overflow-hidden" : ""} ${className}`}
      {...props}
    />
  );
}

export function SkeletonTitle({ className = "" }: { className?: string }) {
  return (
    <Skeleton className={`h-10 w-3/4 rounded-full bg-muted/30 ${className}`} />
  );
}

export function SkeletonSubtitle({ className = "" }: { className?: string }) {
  return (
    <Skeleton
      className={`h-8 w-full max-w-2xl rounded-full bg-muted/30 ${className}`}
    />
  );
}

export function SkeletonText({ lines = 3 }: { lines?: number }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton key={i} className="h-4 w-full rounded-full bg-muted/20" />
      ))}
    </div>
  );
}

export function SkeletonCard({ className = "" }: { className?: string }) {
  return (
    <Skeleton
      className={`rounded-3xl border border-border/20 bg-card p-6 shadow-sm shadow-black/5 ${className}`}
      box
    />
  );
}

export default Skeleton;
