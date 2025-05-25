'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface SplashScreenProps {
  duration?: number;
}

export default function SplashScreen({ duration = 3000 }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // This ensures we're running on the client side
    setIsFirstRender(false);
    
    // Set a timeout to start the exit animation
    const timer = setTimeout(() => {
      setIsExiting(true);
      
      // Actually remove the component after the animation completes
      const exitTimer = setTimeout(() => {
        setIsVisible(false);
      }, 1500); // Match this to the animation duration in tailwind.config.js
      
      return () => clearTimeout(exitTimer);
    }, duration);
    
    // Clean up the timer if the component unmounts
    return () => clearTimeout(timer);
  }, [duration]);
  
  // Don't render anything during the first server-side render
  // or if the splash screen should not be visible
  if (isFirstRender || !isVisible) return null;
  
  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-gray-900/50 backdrop-blur-[1px] transition-all duration-300 ease-in-out ${isExiting ? 'animate-fadeOut' : 'animate-fadeIn'}`}>
      <div className={`w-64 h-64 md:w-80 md:h-80 relative transition-all duration-1000 ease-in-out z-10 ${isExiting ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`} style={{ transition: 'transform 1.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 1.5s cubic-bezier(0.4, 0, 0.2, 1)' }}>
        <Image 
          src="/logo/logo-animation.svg"
          alt="Myroslava Balyk Portfolio"
          fill
          priority
          className="object-contain"
        />
      </div>
    </div>
  );
}
