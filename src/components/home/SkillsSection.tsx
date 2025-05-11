import { skills } from "../../data/skills";
import SkillCard from "../ui/SkillCard";
import SectionHeading from "../ui/SectionHeading";

export default function SkillsSection() {
  return (
    <section className="py-16 px-6 bg-white dark:bg-gray-900">
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
