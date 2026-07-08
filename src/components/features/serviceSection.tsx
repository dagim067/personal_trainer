"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      id: "group",
      name: "Group Programs",
      description:
        "Structured, community-driven training for those who thrive in a supportive environment.",
      duration: "12 Weeks",
      price: "Starting at $1200/3mo",
      features: [
        "Structured 3-day/week training plan",
        "Weekly group coaching calls",
        "Community support group",
        "Basic nutrition guidelines",
        "Monthly progress check-ins",
      ],
      isPopular: false,
    },
    {
      id: "1on1",
      name: "Premium 1-on-1 Coaching",
      description:
        "Fully personalized plans, direct access, and high accountability for ultimate transformations.",
      duration: "Ongoing",
      price: "$450/mo",
      features: [
        "Fully customized training program",
        "Personalized macro & meal planning",
        "24/7 direct messaging access",
        "Weekly 1-on-1 video check-ins",
        "Form review and technique feedback",
        "Lifestyle and habit coaching",
      ],
      isPopular: true,
    },
  ];
  return (
    <section
      id="programs"
      className="py-24 md:py-32 bg-background relative border-t border-border/10"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="h-px w-8 bg-primary/80" />
            <span className="text-primary font-medium tracking-widest uppercase text-sm">
              Programs
            </span>
            <div className="h-px w-8 bg-primary/80" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-semibold mb-6 text-foreground"
          >
            Choose Your Path
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-foreground/70 text-lg font-light"
          >
            Whether you need the ultimate accountability of 1-on-1 coaching or
            the energy of a group environment, there&apos;s a protocol designed
            for your goals.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className={`relative p-8 md:p-10 rounded-[2rem] border bg-card shadow-xl shadow-black/10 transition-all duration-500 hover:-translate-y-2 ${
                service.isPopular
                  ? "border-primary/30 hover:border-primary"
                  : "border-border/20 hover:border-border/40"
              }`}
            >
              {service.isPopular && (
                <div className="absolute -top-4 right-6 rounded-full bg-primary px-4 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-primary-foreground shadow-lg shadow-primary/20">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-3 text-foreground">
                  {service.name}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed min-h-18">
                  {service.description}
                </p>
              </div>

              <div className="mb-8 pb-8 border-b border-border/20 flex flex-wrap items-end gap-3">
                <span className="text-4xl md:text-5xl font-semibold text-foreground">
                  {service.price}
                </span>
                <span className="text-sm text-foreground/50">
                  / {service.duration}
                </span>
              </div>

              <ul className="space-y-4 mb-10 grow">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={18} className="text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground/75 text-sm leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={`/booking?program=${service.id}`}
                className={`w-full rounded-full px-6 py-4 text-sm font-semibold text-center transition-colors duration-300 ${
                  service.isPopular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-background border border-border/20 text-foreground hover:bg-border/40"
                }`}
              >
                Apply Now
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
