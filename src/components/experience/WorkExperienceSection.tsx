import React from 'react';
import SectionHeading from '../../components/ui/SectionHeading';

// Types
interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ 
  title, 
  company, 
  period, 
  responsibilities 
}) => (
  <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
    <div className="flex flex-col md:flex-row justify-between mb-4">
      <h3 className="text-xl font-semibold text-[var(--color-primary-dark)]">
        {title}
      </h3>
      <div className="text-gray-600 dark:text-gray-400">
        <span className="font-medium">{company}</span> | {period}
      </div>
    </div>
    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
      {responsibilities.map((responsibility, index) => (
        <li key={index}>{responsibility}</li>
      ))}
    </ul>
  </div>
);

const WorkExperienceSection = () => {
  return (
    <section className="mb-16">
      <SectionHeading align="left" withAccent={true}>
        Work Experience
      </SectionHeading>
      
      <div className="space-y-8">
        <ExperienceItem 
          title="Front-End Developer"
          company="Company Name"
          period="2022 - Present"
          responsibilities={[
            "Developed responsive web applications using React and Next.js",
            "Implemented UI/UX designs with Tailwind CSS",
            "Collaborated with back-end developers to integrate APIs",
            "Optimized application performance and accessibility",
            "Participated in code reviews and mentored junior developers"
          ]}
        />
        
        <ExperienceItem 
          title="Web Developer Intern"
          company="Internship Company"
          period="2021 - 2022"
          responsibilities={[
            "Assisted in developing and maintaining client websites",
            "Created responsive layouts using HTML, CSS, and JavaScript",
            "Learned modern front-end frameworks and best practices",
            "Participated in team meetings and contributed to project planning"
          ]}
        />
      </div>
    </section>
  );
};

export default WorkExperienceSection;
