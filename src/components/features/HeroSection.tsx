"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center pt-20 md:pt-24">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2940&auto=format&fit=crop")',
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mx-auto max-w-5xl text-center">
            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-playfair font-bold tracking-tight"
            >
              <span
                className="
                  block
                  text-white
                  leading-[0.95]
                  text-4xl
                  sm:text-5xl
                  md:text-6xl
                  lg:text-6xl
                  xl:text-6xl
                "
              >
                Transform Your Body.
              </span>

              <span
                className="
                  block
                  mt-2
                  italic
                  text-primary
                  leading-[0.95]
                  text-3xl
                  sm:text-4xl
                  md:text-4xl
                  lg:text-4xl
                  xl:text-4xl
                "
              >
                Elevate Your Life.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="
                mx-auto
                mt-6
                max-w-3xl
                text-sm
                sm:text-base
                md:text-lg
                lg:text-xl
                text-white/90
                leading-relaxed
              "
            >
              Elite 1-on-1 coaching for high performers who demand results. Stop
              guessing. Start transforming.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="
                mt-10
                flex
                flex-col
                sm:flex-row
                items-center
                justify-center
                gap-4
              "
            >
              <Link
                href="/booking"
                className="
                  w-full
                  sm:w-auto
                  rounded-full
                  bg-primary
                  px-8
                  md:px-10
                  py-4
                  text-base
                  font-bold
                  text-primary-foreground
                  transition-all
                  duration-300
                  hover:scale-105
                "
              >
                Book a Free Consultation
              </Link>

              <Link
                href="/#programs"
                className="
                  w-full
                  sm:w-auto
                  rounded-full
                  border
                  border-white/40
                  px-8
                  md:px-10
                  py-4
                  text-base
                  font-semibold
                  text-white
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:bg-white/10
                "
              >
                Explore Programs
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-8 flex flex-col items-center gap-3"
            >
              <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white">
                Scroll
              </span>

              {/* Mouse */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  flex
                  h-12
                  w-7
                  justify-center
                  rounded-full
                  border
                  border-white/50
                "
              >
                <motion.div
                  animate={{ y: [4, 18, 4] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    mt-2
                    h-2
                    w-2
                    rounded-full
                    bg-primary
                  "
                />
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              >
                <ChevronDown size={20} className="text-primary" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
