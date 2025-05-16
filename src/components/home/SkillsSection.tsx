import { skills } from "../../data/skills";
import SkillCard from "../ui/SkillCard";
import SectionHeading from "../ui/SectionHeading";

/**
 * SkillsSection Component
 * 
 * Displays a grid of skills with icons using data from the skills.ts file.
 */
export default function SkillsSection() {
  return (
    <section className="pb-16 px-6 bg-[var(--color-background-alt)]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading>My Skills</SectionHeading>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
          {skills.map((skill) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              iconPath={skill.iconPath}
              alt={skill.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
