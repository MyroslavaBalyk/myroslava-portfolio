import SectionHeading from '../ui/SectionHeading';

const AboutHeroSection = () => {
  return (
    <section className="mb-16">
      <div>
        <SectionHeading
          align="left"
          withAccent={true}
          accentColor="primary"
          as="h1"
        >
          About Me
        </SectionHeading>
        <p className="text-[var(--color-text-main)] mt-6 mb-4 text-lg">
          As a front-end developer, I focus on building user-friendly and
          responsive web applications using technologies like React, Next.js,
          and TypeScript.
        </p>
        <p className="text-[var(--color-text-main)] mb-6 text-lg">
          I believe that combining a creative mind with solid technical skills
          helps me bring thoughtful, practical solutions to life.
        </p>
      </div>
    </section>
  );
};

export default AboutHeroSection;
