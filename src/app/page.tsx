import { Hero } from "@/components/hero/Hero";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { ExperienceSection } from "@/components/experience/ExperienceSection";
import { TestimonialsSection } from "@/components/testimonials/TestimonialsSection";
import { ContactCTA } from "@/components/contact/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectsSection />
      <ExperienceSection />
      <TestimonialsSection />
      <ContactCTA />
    </>
  );
}
