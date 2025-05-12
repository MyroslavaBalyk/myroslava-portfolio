import Image from 'next/image';
import SectionHeading from '../../components/ui/SectionHeading';

const ExperienceHeroSection = () => {
  return (
    <section className="mb-16">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-2/3">
          <SectionHeading 
            align="left"
            withAccent={true}
            accentColor="primary"
            as="h1"
          >
            Experience
          </SectionHeading>
          <p className="text-gray-700 dark:text-gray-300 mt-6 mb-4 text-lg">
            My professional journey as a front-end developer, showcasing my skills, expertise, 
            and work experience. I'm passionate about creating intuitive, responsive, and accessible web applications 
            that deliver exceptional user experiences.
          </p>
        </div>
        <div className="w-full md:w-1/3 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 overflow-hidden">
            <Image 
              src="/images/profile-professional.jpg" 
              alt="Professional profile" 
              fill
              className="object-cover rounded-md"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceHeroSection;
