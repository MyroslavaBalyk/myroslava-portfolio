import {
  ExperienceHeroSection,
  SkillsExpertiseSection,
  WorkExperienceSection,
  EducationSection
} from '../../components/experience';

export default function ExperiencePage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-12">
      <ExperienceHeroSection />
      <SkillsExpertiseSection />
      <WorkExperienceSection />
      <EducationSection />
    </div>
  );
}
