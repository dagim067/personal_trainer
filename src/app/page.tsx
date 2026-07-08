import { AboutSection } from "@/components/features/AboutSection";
import { BlogPreviewSection } from "@/components/features/BlogPreviewSection";
import { HeroSection } from "@/components/features/HeroSection";
import { ResultsSection } from "@/components/features/ResultSection";
import { ServicesSection } from "@/components/features/serviceSection";
import { StatsSection } from "@/components/features/StatsSection";
import TestimonialSection from "@/components/features/TestimonialsSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <StatsSection />
        <ResultsSection />
        <BlogPreviewSection />
        <TestimonialSection />
      </main>
    </div>
  );
}
