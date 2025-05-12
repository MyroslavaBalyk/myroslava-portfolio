import SectionHeading from '../../components/ui/SectionHeading';
import ContentCard from '../../components/ui/ContentCard';

const SkillsExpertiseSection = () => {
  return (
    <section className="mb-16">
      <SectionHeading align="left" withAccent={true}>
        Skills & Expertise
      </SectionHeading>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ContentCard title="Technical Skills">
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>HTML5, CSS3, JavaScript (ES6+)</li>
            <li>React.js, Next.js, TypeScript</li>
            <li>Responsive Web Design</li>
            <li>CSS Frameworks (Tailwind CSS, Bootstrap)</li>
            <li>Version Control (Git/GitHub)</li>
            <li>Performance Optimization</li>
          </ul>
        </ContentCard>
         
        <ContentCard title="Soft Skills">
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Problem Solving & Critical Thinking</li>
            <li>Attention to Detail</li>
            <li>Team Collaboration</li>
            <li>Time Management</li>
            <li>Communication</li>
            <li>Adaptability & Continuous Learning</li>
          </ul>
        </ContentCard>
      </div>
    </section>
  );
};

export default SkillsExpertiseSection;
