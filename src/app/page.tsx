import IntroductionSection from "../components/home/IntroductionSection";
import SkillsSection from "../components/home/SkillsSection";
import DesignerCoderSection from "../components/home/DesignerCoderSection";

export default function HomePage() {
  return (
    <>
      <div className="w-full max-w-7xl mx-auto">
        <IntroductionSection />
        <DesignerCoderSection />
      </div>
      <div className="w-full max-w-7xl mx-auto">
        <SkillsSection />
      </div>
    </>
  );
}
