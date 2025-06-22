'use client';

import { useState, useEffect } from 'react';
import IntroductionSection from "../components/home/IntroductionSection";
import SkillsSection from "../components/home/SkillsSection";
import DesignerCoderSection from "../components/home/DesignerCoderSection";
import SplashScreen from "../components/layout/SplashScreen";

export default function HomePage() {
  const [showSplash, setShowSplash] = useState(false);
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hasSeenSplash = localStorage.getItem('hasSeenSplash');
      
      if (!hasSeenSplash) {
        setShowSplash(true);
        localStorage.setItem('hasSeenSplash', 'true');
      }
    }
  }, []);
  
  return (
    <>
      {showSplash && <SplashScreen duration={3000} />}
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
