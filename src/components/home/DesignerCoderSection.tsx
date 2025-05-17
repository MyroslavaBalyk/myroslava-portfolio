import SectionHeading from "../ui/SectionHeading";
import { skillSets } from "../../data/designer-coder-skills";

interface SkillSet {
  title: string;
  skills: string[];
}
const SkillCard = ({ title, skills }: SkillSet) => (
  <div className="bg-[var(--color-accent-1)] dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
    <h3 className="text-lg font-medium mb-3 text-[var(--color-primary-dark)]">
      {title}
    </h3>
    <ul className="list-disc list-inside space-y-2 text-[var(--color-text-main)]">
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  </div>
);

const DesignerCoderSection = () => {
  return (
    <section className="py-8 sm:py-10">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        <SectionHeading align="left" withAccent={true}>
          Part designer & Part coder
        </SectionHeading>
        <div className="flex flex-col gap-8 mt-6">
          <div className="w-full">
            <p className="text-[var(--color-text-main)] mb-6 text-lg">
              I combine design thinking with technical implementation to create
              effective solutions. I focus on building interfaces that work well
              for users while ensuring the code is structured for performance
              and maintainability.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 items-start max-w-4xl mx-auto">
              <div className="h-full">
                <SkillCard {...skillSets[0]} />
              </div>
              <div className="h-full">
                <SkillCard {...skillSets[1]} />
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </section>
  );
};

export default DesignerCoderSection;
