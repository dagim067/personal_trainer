import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/ui/layout/header/Navbar";
import { Footer } from "@/components/ui/layout/footer/Footer";
import { ReactQueryProvider } from "../components/ReactQueryProvider";

// Load fonts via next/font for automatic optimization
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "ELEVATE Coaching — Elite Personal Training",
    template: "%s | ELEVATE Coaching",
  },
  description:
    "Elite 1-on-1 coaching for high performers who demand results. Stop guessing. Start transforming.",
  keywords: [
    "personal training",
    "coaching",
    "fitness",
    "transformation",
    "elite coaching",
  ],
  openGraph: {
    title: "ELEVATE Coaching — Elite Personal Training",
    description:
      "Elite 1-on-1 coaching for high performers who demand results.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <ReactQueryProvider>{children}</ReactQueryProvider>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
