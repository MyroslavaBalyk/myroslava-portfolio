import IntroductionSection from '../components/home/IntroductionSection';
import SkillsSection from '../components/home/SkillsSection';

export default function HomePage() {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <IntroductionSection />
      <SkillsSection />
    </div>
  );
}
