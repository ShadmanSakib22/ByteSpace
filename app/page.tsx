import { Hero } from "@/components/home/Hero";
import { LogoStrip } from "@/components/home/LogoStrip";
import { CoursesSection } from "@/components/home/CoursesSection";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { CreatorSection } from "@/components/home/CreatorSection";
import { CTASection } from "@/components/home/CTASection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <LogoStrip />
        <CoursesSection />
        <CategoriesSection />
        <CreatorSection />
        <CTASection />
        <TestimonialsSection />
      </main>
    </>
  );
}