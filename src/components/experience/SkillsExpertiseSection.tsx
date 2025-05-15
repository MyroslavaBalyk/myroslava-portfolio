import SectionHeading from '../ui/SectionHeading';
import ContentCard from '../ui/ContentCard';

// Define skill data
const technicalSkills = [
  "HTML5, CSS3, JavaScript (ES6+)",
  "React.js, Next.js, TypeScript",
  "Responsive Web Design",
  "CSS Frameworks (Tailwind CSS, Bootstrap)",
  "Version Control (Git/GitHub)",
  "Performance Optimization"
];

const softSkills = [
  "Problem Solving & Critical Thinking",
  "Attention to Detail",
  "Team Collaboration",
  "Time Management",
  "Communication",
  "Adaptability & Continuous Learning"
];

// Reusable skill list component
const SkillList = ({ skills }: { skills: string[] }) => (
  <ul className="list-disc list-inside space-y-2 text-[var(--color-text-main)]">
    {skills.map((skill, index) => (
      <li key={index}>{skill}</li>
    ))}
  </ul>
);

const SkillsExpertiseSection = () => {
  return (
    <section className="mb-16">
      <SectionHeading align="left" withAccent={true}>
        Skills & Expertise
      </SectionHeading>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ContentCard title="Technical Skills">
          <SkillList skills={technicalSkills} />
        </ContentCard>
         
        <ContentCard title="Soft Skills">
          <SkillList skills={softSkills} />
        </ContentCard>
      </div>
    </section>
  );
};

export default SkillsExpertiseSection;
