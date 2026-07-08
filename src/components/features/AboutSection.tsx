"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const credentials = [
  "NASM Certified Personal Trainer",
  "Precision Nutrition Level 1",
  "10+ Years Coaching Experience",
  "Former Collegiate Athlete",
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-background relative overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-4/5 rounded-[2.5rem] overflow-hidden relative z-10 shadow-2xl shadow-black/10 ring-1 ring-border bg-card">
              <Image
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2000&auto=format&fit=crop"
                alt="Trainer coaching a client"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-2/3 h-2/3 border-2 border-primary/20 rounded-[2rem] z-0 hidden md:block" />
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl z-0" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-14 bg-primary/80" />
              <span className="text-primary uppercase tracking-[0.24em] text-sm font-semibold">
                The Coach
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-semibold mb-8 leading-tight text-foreground">
              I don&apos;t just build bodies.
              <br />
              <span className="italic text-primary">I build resilience.</span>
            </h2>

            <div className="space-y-6 text-foreground/70 text-lg leading-relaxed mb-10">
              <p>
                A decade ago, I was exactly where you might be right now:
                frustrated, overworked, and disconnected from my own body. I
                realized that true fitness isn&apos;t about punishing yourself
                in the gym—it&apos;s about building a sustainable lifestyle that
                empowers everything else you do.
              </p>
              <p>
                My approach is rooted in science, but driven by empathy. We
                don&apos;t do cookie-cutter plans here. We look at your
                biomechanics, your schedule, your stressors, and we build a
                protocol that fits your actual life, not an idealized version of
                it.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {credentials.map((cred, index) => (
                <div
                  key={index}
                  className="rounded-3xl border border-border/70 bg-card/80 p-5 shadow-sm shadow-black/5"
                >
                  <div className="flex items-center gap-3">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check size={16} className="text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">
                      {cred}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/booking"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition duration-300 hover:bg-primary/90"
            >
              Let&apos;s write your success story
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
