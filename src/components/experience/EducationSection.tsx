
import SectionHeading from '../ui/SectionHeading';

// Types
interface EducationItemProps {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

const EducationItem = ({ 
  degree, 
  institution, 
  period, 
  description 
}: EducationItemProps) => (
  <div className="bg-[var(--color-accent-1)] dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
    <div className="flex flex-col md:flex-row justify-between mb-4">
      <h3 className="text-xl font-semibold text-[var(--color-primary-dark)]">
        {degree}
      </h3>
      <div className="text-[var(--color-text-light)]">
        <span className="font-medium">{institution}</span> | {period}
      </div>
    </div>
    <p className="text-[var(--color-text-main)]">
      {description}
    </p>
  </div>
);

const EducationSection = () => {
  return (
    <section className="mb-16">
      <SectionHeading align="left" withAccent={true}>
        Education
      </SectionHeading>
      
      <EducationItem 
        degree="Bachelor's Degree in Computer Science"
        institution="University Name"
        period="2018 - 2022"
        description="Graduated with honors. Specialized in web development and user interface design. Participated in various coding competitions and hackathons."
      />
    </section>
  );
};

export default EducationSection;
