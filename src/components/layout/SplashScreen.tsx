'use client';

import { useState, useEffect } from 'react';

interface SplashScreenProps {
  duration?: number;
}

export default function SplashScreen({ duration = 3000 }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);
    
    return () => clearTimeout(timer);
  }, [duration]);
  
  if (!isVisible) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/50 backdrop-blur-sm animate-fadeIn">
      <div className="w-64 h-64 md:w-80 md:h-80 relative">
        <object
          type="image/svg+xml"
          data="/logo/logo-animation.svg"
          className="w-full h-full"
          aria-label="Myroslava Balyk Portfolio Logo"
        >
          <img 
            src="/logo/logo-animation.svg" 
            alt="Myroslava Balyk Portfolio" 
            className="w-full h-full"
          />
        </object>
      </div>
    </div>
  );
}
