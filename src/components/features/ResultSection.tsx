"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useTransformations } from "@/lib/supabase/hooks";

export function ResultsSection() {
  const { data: transformations = [], isLoading, error } = useTransformations();

  return (
    <section
      id="results"
      className="py-24 md:py-32 bg-background relative border-t border-border/10"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Transformations */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-10 bg-primary/80" />
                <span className="text-primary font-semibold tracking-[0.24em] uppercase text-sm">
                  The Proof
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-semibold text-foreground">
                Real Transformations
              </h2>
            </div>
            <p className="text-foreground opacity-70 max-w-md text-sm md:text-right">
              These aren&apos;t just physical changes. They are complete
              lifestyle overhauls built on consistency, science, and hard work.
            </p>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="h-96 rounded-[2rem] border border-border/10 bg-card shadow-xl shadow-black/5 animate-pulse"
                />
              ))}
            </div>
          ) : error ? (
            <div className="rounded-[2rem] border border-destructive/20 bg-destructive/10 p-8 text-destructive">
              Failed to load transformations.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {transformations.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="overflow-hidden rounded-[2rem] border border-border/10 bg-card shadow-xl shadow-black/5"
                >
                  <Link
                    href={`/results/${item.slug}`}
                    className="group relative block aspect-3/4 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-4 focus:ring-offset-background"
                    aria-label={`Read ${item.name}'s transformation story`}
                  >
                    <div className="absolute inset-0 overflow-hidden">
                      <Image
                        src={item.image_url}
                        alt={`${item.name} transformation`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </div>
                    <div className="absolute inset-0 bg-linear-to-t from-black/30 via-black/15 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/10 group-hover:bg-primary/90 flex items-center justify-center transition duration-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
                      <ArrowUpRight size={18} className="text-white" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h4 className="text-white dark:text-foreground text-xl font-semibold mb-1 group-hover:text-primary dark:group-hover:text-primary">
                        {item.name}
                      </h4>
                      <p className="text-white dark:text-foreground text-sm font-medium opacity-0 group-hover:opacity-100 group-hover:text-primary dark:group-hover:text-primary transition-opacity duration-300 delay-100">
                        {item.note}
                      </p>
                      <div className="flex items-center gap-2 text-white dark:text-foreground text-xs font-medium uppercase tracking-[0.24em] mt-3 opacity-0 group-hover:opacity-100 group-hover:text-primary dark:group-hover:text-primary transition-opacity duration-300 delay-150">
                        Read story <ArrowUpRight size={12} />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
