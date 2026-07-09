import type { Transformation } from "./queries";

export const fallbackTransformations: Transformation[] = [
  {
    id: "fallback-1",
    slug: "alex-strength",
    name: "Alex",
    age: "29",
    occupation: "Software Engineer",
    note: "Lost 15kg and built lasting strength with a consistent training routine.",
    quote: "This program helped me become stronger, more confident, and energized every day.",
    image_url:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80",
    before_image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80",
    after_image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
    duration_months: 4,
    program: "Strength & Fat Loss",
    stats: [
      { label: "Weight loss", value: "15 kg" },
      { label: "Strength", value: "+20%" },
      { label: "Energy", value: "High" },
    ],
    goals: [
      "Build lean muscle",
      "Improve posture",
      "Increase daily energy",
    ],
    stories: [
      "I started with a clear goal: to get stronger and feel healthy again.",
      "The program was easy to follow, even with a busy work schedule.",
      "Weekly check-ins kept me accountable and consistent.",
    ],
    featured: true,
    created_at: new Date().toISOString(),
  },
  {
    id: "fallback-2",
    slug: "jordan-transformation",
    name: "Jordan",
    age: "34",
    occupation: "Marketing Director",
    note: "Dropped two dress sizes and gained confidence with a smart nutrition plan.",
    quote: "I finally feel like my body matches my goals.",
    image_url:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80",
    before_image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
    after_image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
    duration_months: 5,
    program: "Lifestyle Reset",
    stats: [
      { label: "Dress sizes", value: "-2" },
      { label: "Strength", value: "+18%" },
      { label: "Energy", value: "Improved" },
    ],
    goals: [
      "Lose body fat",
      "Eat better without dieting",
      "Build confidence",
    ],
    stories: [
      "I transformed steadily, month by month, and the results stuck.",
      "The nutrition plan made healthy habits easy to follow.",
      "I feel more comfortable in every outfit now.",
    ],
    featured: true,
    created_at: new Date().toISOString(),
  },
  {
    id: "fallback-3",
    slug: "maria-coaching",
    name: "Maria",
    age: "27",
    occupation: "Teacher",
    note: "Built strength and energy while balancing a busy schedule.",
    quote: "The training plan made fitness simple and sustainable.",
    image_url:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80",
    before_image:
      "https://images.unsplash.com/photo-1526401485004-713b2242d50e?auto=format&fit=crop&w=1200&q=80",
    after_image:
      "https://images.unsplash.com/photo-1526401485004-713b2242d50e?auto=format&fit=crop&w=1200&q=80",
    duration_months: 3,
    program: "Performance Coaching",
    stats: [
      { label: "Strength", value: "+22%" },
      { label: "Confidence", value: "Up" },
      { label: "Stress", value: "Down" },
    ],
    goals: [
      "Gain strength",
      "Improve fitness consistency",
      "Feel less tired",
    ],
    stories: [
      "The coaching plan fit my schedule and helped me stay consistent.",
      "I finally feel strong, focused, and proud of my progress.",
      "This felt like a lifestyle change instead of a short-term fix.",
    ],
    featured: true,
    created_at: new Date().toISOString(),
  },
];
