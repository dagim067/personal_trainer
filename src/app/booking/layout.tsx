import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Session | Pixel Personal Trainer",
  description:
    "Schedule your personal training session with Pixel Personal Trainer. Get customized workout plans, fitness coaching, strength training, weight loss guidance, and ongoing support to achieve your fitness goals.",
  keywords: [
    "personal trainer",
    "fitness coach",
    "online coaching",
    "strength training",
    "weight loss",
    "fitness consultation",
    "workout plans",
    "personal training booking",
    "Pixel Personal Trainer",
  ],
  openGraph: {
    title: "Book a Session | Pixel Personal Trainer",
    description:
      "Book a personalized fitness session and start your transformation with expert coaching and tailored workout programs.",
    type: "website",
    locale: "en_US",
    siteName: "Pixel Personal Trainer",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Session | Pixel Personal Trainer",
    description:
      "Book a personalized fitness session and start your transformation with expert coaching and tailored workout programs.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      {children}
    </div>
  );
}
