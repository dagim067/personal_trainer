"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "200+", label: "Clients Transformed" },
  { value: "10+", label: "Years Coaching" },
  { value: "4.9★", label: "Average Rating" },
];

export function StatsSection() {
  return (
    <section id="stats" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary/80" />
            <span className="text-primary text-sm uppercase tracking-[0.28em] font-semibold">
              Performance
            </span>
            <div className="h-px w-12 bg-primary/80" />
          </div>

          <h2 className="text-4xl md:text-5xl font-semibold text-foreground">
            Simple, powerful metrics that show real impact.
          </h2>

          <p className="mt-5 text-foreground/70 text-base md:text-lg leading-8">
            These are the results that matter: transformed clients, long-term
            experience, and a rating that reflects the quality of our coaching.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[2rem] bg-card shadow-xl shadow-black/5"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_55%)] pointer-events-none" />

          <div className="relative grid grid-cols-1 md:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.45 }}
                className={`group relative flex flex-col items-center justify-center py-12 px-8 ${
                  index !== stats.length - 1 ? "md:border-r border-border" : ""
                }`}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-primary/10" />

                <h3 className="text-5xl md:text-6xl font-black tracking-tight text-primary">
                  {stat.value}
                </h3>

                <div className="mt-4 h-px w-14 bg-foreground/10" />

                <p className="mt-4 text-sm uppercase tracking-[0.24em] text-foreground/60">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
