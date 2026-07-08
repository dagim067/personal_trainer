"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Michael Carter",
    role: "Fitness Entrepreneur",
    image: "https://i.pravatar.cc/300?img=12",
    review:
      "Working with this coach completely transformed my body and mindset. The training plans were tailored perfectly and the results exceeded all expectations.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Marketing Director",
    image: "https://i.pravatar.cc/300?img=32",
    review:
      "The guidance, accountability and support were incredible. I gained confidence, strength and consistency that I never had before.",
  },
  {
    id: 3,
    name: "David Brown",
    role: "Business Owner",
    image: "https://i.pravatar.cc/300?img=15",
    review:
      "Professional coaching with real results. Every session pushed me further while keeping the process enjoyable and sustainable.",
  },
  {
    id: 4,
    name: "Emily Watson",
    role: "Fitness Enthusiast",
    image: "https://i.pravatar.cc/300?img=45",
    review:
      "The transformation has been life changing. I feel stronger, healthier and more motivated than ever.",
  },
];

export default function TestimonialSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
            Testimonials
          </h2>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-primary" />

          <p className="mt-5 text-muted-foreground">
            Real stories from real transformations
          </p>
        </motion.div>

        <div className="relative">
          {/* Left Button */}
          <button
            onClick={() => emblaApi?.scrollPrev()}
            className="
              hidden lg:flex
              absolute left-0 top-1/2 z-20
              -translate-x-1/2 -translate-y-1/2
              h-14 w-14 items-center justify-center
              rounded-full
              bg-secondary
              border border-border
              transition-all duration-300
              hover:scale-110
            "
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Right Button */}
          <button
            onClick={() => emblaApi?.scrollNext()}
            className="
              hidden lg:flex
              absolute right-0 top-1/2 z-20
              translate-x-1/2 -translate-y-1/2
              h-14 w-14 items-center justify-center
              rounded-full
              bg-primary
              text-primary-foreground
              transition-all duration-300
              hover:scale-110
            "
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {testimonials.map((item, index) => (
                <div
                  key={item.id}
                  className="
                    min-w-0
                    flex-[0_0_100%]
                    lg:flex-[0_0_50%]
                    px-4
                  "
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    whileHover={{
                      y: -6,
                    }}
                    className="
                      relative
                      h-full
                      border border-border
                      bg-card
                      p-8
                      text-center
                      rounded-xl
                      overflow-hidden
                    "
                  >
                    {/* Top Glow */}
                    <div className="absolute inset-0 bg-linear-to-b from-primary/5 via-transparent to-transparent" />

                    {/* Stars */}
                    <div className="relative mb-3 flex justify-center gap-1 text-primary">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>

                    <p className="relative mb-6 text-primary font-medium">
                      Excellent
                    </p>

                    <p className="relative mx-auto max-w-xl text-muted-foreground leading-8">
                      {item.review}
                    </p>

                    {/* Avatar */}
                    <div className="relative mt-8">
                      <div className="mx-auto h-28 w-28 overflow-hidden rounded-full border-4 border-primary/20">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={112}
                          height={112}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <h3 className="mt-6 text-2xl font-bold">{item.name}</h3>

                      <p className="mt-2 text-primary">{item.role}</p>
                    </div>

                    {/* Bottom Accent Bar */}
                    <div className="absolute bottom-0 left-0 h-1 w-full bg-border">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="h-full bg-primary"
                      />
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Buttons */}
          <div className="mt-8 flex justify-center gap-4 lg:hidden">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              className="
                flex h-12 w-12 items-center justify-center
                rounded-full border border-border bg-secondary
              "
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              onClick={() => emblaApi?.scrollNext()}
              className="
                flex h-12 w-12 items-center justify-center
                rounded-full bg-primary text-primary-foreground
              "
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
