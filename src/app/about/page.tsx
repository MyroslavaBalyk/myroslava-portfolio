import {
  AboutHeroSection,
  EducationSection,
  InterestsSection
} from "../../components/about";

export default function AboutPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-12">
      <AboutHeroSection />
      <EducationSection />
      <InterestsSection />
    </div>
  );
}
