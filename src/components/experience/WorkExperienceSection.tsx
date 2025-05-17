import SectionHeading from '../ui/SectionHeading';

// Types
interface ExperienceItem {
  title: string;
  company: string;
  companyUrl?: string;
  period: string;
  responsibilities: string[];
}

// Experience data
const experienceData: ExperienceItem[] = [
  {
    title: "Front-End Developer",
    company: "Cyberiny Corp.",
    companyUrl: "https://www.cyberiny.com",
    period: "October 2024 – Present",
    responsibilities: [
      "Developed responsive web applications using React and Next.js",
      "Implemented UI/UX designs with Tailwind CSS",
      "Migrated from Bootstrap v3 to v5, enhancing performance and modern standards",
      "Collaborated with back-end developers to integrate APIs",
      "Optimized application performance and accessibility",
      "Assisted in developing and maintaining client websites",
      "Created responsive layouts using HTML, CSS, and JavaScript",
    ]
  }
];

const ExperienceCard = ({ 
  title, 
  company, 
  companyUrl,
  period, 
  responsibilities 
}: ExperienceItem) => (
  <div className="bg-[var(--color-accent-1)] dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
    <div className="flex flex-col md:flex-row justify-between mb-4">
      <h3 className="text-xl font-semibold text-[var(--color-primary-dark)]">
        {title}
      </h3>
      <div className="text-[var(--color-text-light)]">
        <span className="font-medium">
          {companyUrl ? (
            <a href={companyUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
              {company}
            </a>
          ) : (
            company
          )}
        </span> | {period}
      </div>
    </div>
    <ul className="list-disc list-inside space-y-2 text-[var(--color-text-main)]">
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
        {experienceData.map((experience, index) => (
          <ExperienceCard
            key={index}
            {...experience}
          />
        ))}
      </div>
    </section>
  );
};

export default WorkExperienceSection;
