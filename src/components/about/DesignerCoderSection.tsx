import React from 'react';
import SectionHeading from '../../components/ui/SectionHeading';
import SplitViewImage from '../../components/ui/SplitViewImage';

// Types
interface SkillCardProps {
  title: string;
  skills: string[];
}

/**
 * SkillCard Component
 *
 * Displays a card with a title and a list of skills.
 */
const SkillCard: React.FC<SkillCardProps> = ({ title, skills }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
    <h3 className="text-lg font-medium mb-3 text-[var(--color-primary)]">
      {title}
    </h3>
    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  </div>
);

// Data
const designerSkills = [
  "Focus on user experience",
  "Create intuitive interfaces",
  "Ensure visual consistency",
  "Design responsive layouts",
  "Prioritize accessibility",
];

const coderSkills = [
  "HTML/CSS/JavaScript",
  "React.js & Next.js",
  "TypeScript",
  "Responsive development",
  "Performance optimization",
];

const DesignerCoderSection = () => {
  return (
    <section className="mb-16">
      <SectionHeading align="left" withAccent={true}>
        Part designer, Part coder
      </SectionHeading>
      <div className="flex flex-col mid:flex-row gap-8 mt-6">
        <div className="w-full mid:w-1/2">
          <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
            I combine design thinking with technical implementation to create
            effective solutions. I focus on building interfaces that work well
            for users while ensuring the code is structured for performance
            and maintainability.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <SkillCard title="As a designer" skills={designerSkills} />
            <SkillCard title="As a coder" skills={coderSkills} />
          </div>
        </div>
        <div className="w-full mid:w-1/2">
          <SplitViewImage />
        </div>
      </div>
    </section>
  );
};

export default DesignerCoderSection;
