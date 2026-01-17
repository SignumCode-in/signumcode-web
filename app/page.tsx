import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { TechStack } from "@/components/sections/TechStack";
import { Process } from "@/components/sections/Process";
import { FeaturedCaseStudies } from "@/components/sections/FeaturedCaseStudies";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <TechStack />
      <Process />
      <FeaturedCaseStudies />
      <CTA />
      <Footer />
    </main>
  );
}
