import SectionHeading from '../ui/SectionHeading';

const ExperienceHeroSection = () => {
  return (
    <section className="mb-16">
      <div>
        <SectionHeading 
          align="left"
          withAccent={true}
          accentColor="primary"
          as="h1"
        >
          Experience
        </SectionHeading>
        <p className="text-[var(--color-text-main)] mt-6 mb-4 text-lg">
          My professional journey as a front-end developer, showcasing my skills, expertise, 
          and work experience. I'm passionate about creating intuitive, responsive, and accessible web applications 
          that deliver exceptional user experiences.
        </p>
      </div>
    </section>
  );
};

export default ExperienceHeroSection;
