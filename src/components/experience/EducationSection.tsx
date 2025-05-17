
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
  // Add your education items here
  const educationItems: EducationItemProps[] = [
    // Add your education items in this array
    // Example:
    // {
    //   degree: "Your Degree",
    //   institution: "Institution Name",
    //   period: "Year - Year",
    //   description: "Description of your education"
    // }
  ];

  if (educationItems.length === 0) {
    return null; // Don't render the section if there are no education items
  }

  return (
    <section className="mb-16">
      <SectionHeading align="left" withAccent={true}>
        Education
      </SectionHeading>
      
      {educationItems.map((item, index) => (
        <EducationItem 
          key={index}
          degree={item.degree}
          institution={item.institution}
          period={item.period}
          description={item.description}
        />
      ))}
    </section>
  );
};

export default EducationSection;
