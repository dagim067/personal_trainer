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
  {
    id: "fallback-4",
    slug: "dusty-ashford-crossfit",
    name: "Dusty Ashford",
    age: "31",
    occupation: "CrossFit Athlete",
    note: "Achieved a balanced physique and improved recovery time with tailored strength training.",
    quote: "I finally built the endurance and stability I needed to perform at my best.",
    image_url:
      "https://images.unsplash.com/photo-1526401485004-713b2242d50e?auto=format&fit=crop&w=1200&q=80",
    before_image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    after_image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80",
    duration_months: 6,
    program: "CrossFit Performance",
    stats: [
      { label: "Endurance", value: "+25%" },
      { label: "Mobility", value: "+18%" },
      { label: "Recovery", value: "Faster" },
    ],
    goals: [
      "Increase work capacity",
      "Improve mobility",
      "Reduce injury risk",
    ],
    stories: [
      "The consistent programming helped me push through plateaus.",
      "I now recover faster and feel stronger for every workout.",
      "This plan was the missing piece for long-term progress.",
    ],
    featured: true,
    created_at: new Date().toISOString(),
  },
  {
    id: "fallback-5",
    slug: "jason-bodybuilding-transformation",
    name: "Jason",
    age: "28",
    occupation: "Fitness Coach",
    note: "Built a leaner, more muscular physique with precise nutrition and hypertrophy work.",
    quote: "This program gave me the structure I needed to finally hit my aesthetic goals.",
    image_url:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
    before_image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    after_image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80",
    duration_months: 5,
    program: "Bodybuilding Transformation",
    stats: [
      { label: "Muscle mass", value: "+10 kg" },
      { label: "Body fat", value: "-6%" },
      { label: "Strength", value: "+15%" },
    ],
    goals: [
      "Build lean mass",
      "Improve muscle definition",
      "Stay consistent with meals",
    ],
    stories: [
      "I finally had a plan that matched my bodybuilding goals.",
      "The nutrition coaching kept my energy high and progress steady.",
      "I learned how to balance life with serious physique work.",
    ],
    featured: true,
    created_at: new Date().toISOString(),
  },
  {
    id: "fallback-6",
    slug: "michael-tew-transformation",
    name: "Michael Tew",
    age: "35",
    occupation: "Entrepreneur",
    note: "Found the focus and accountability needed to build strength without losing time.",
    quote: "The support and structure made all the difference in staying consistent.",
    image_url:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
    before_image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80",
    after_image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
    duration_months: 4,
    program: "Executive Strength",
    stats: [
      { label: "Strength", value: "+14%" },
      { label: "Stamina", value: "+20%" },
      { label: "Focus", value: "Improved" },
    ],
    goals: [
      "Build muscle without burnout",
      "Increase performance",
      "Maintain energy for work",
    ],
    stories: [
      "It was realistic for my busy schedule and still delivered results.",
      "I felt stronger and more productive every week.",
      "The coaching gave me direction and consistency.",
    ],
    featured: true,
    created_at: new Date().toISOString(),
  },
  {
    id: "fallback-7",
    slug: "lorna-wedding-transformation",
    name: "Lorna",
    age: "29",
    occupation: "Graphic Designer",
    note: "Prepared for her wedding with a confident, healthy transformation plan.",
    quote: "I felt empowered, strong, and ready for the big day.",
    image_url:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
    before_image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
    after_image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    duration_months: 6,
    program: "Wedding Transformation",
    stats: [
      { label: "Body fat", value: "-7%" },
      { label: "Confidence", value: "Soaring" },
      { label: "Strength", value: "+16%" },
    ],
    goals: [
      "Tone up",
      "Feel confident in wedding attire",
      "Build stamina",
    ],
    stories: [
      "The wedding prep plan was fun and sustainable.",
      "I felt healthy, strong, and ready for the day.",
      "This transformation was the best gift I gave myself.",
    ],
    featured: true,
    created_at: new Date().toISOString(),
  },
];
