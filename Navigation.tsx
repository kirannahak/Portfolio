
import React, { useState, useEffect } from 'react';

export const Navigation: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex flex-col pointer-events-none">
      <div className="flex justify-between items-center px-8 py-6 pointer-events-auto">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xs">AC</span>
          </div>
          <span className="font-semibold tracking-tight text-white/80">Alex Chen</span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-white/60">
          <a href="#act-1" className="hover:text-white transition-colors">Start</a>
          <a href="#act-3" className="hover:text-white transition-colors">Insight</a>
          <a href="#act-6" className="hover:text-white transition-colors">Impact</a>
          <a href="#contact" className="hover:text-white transition-colors">Connect</a>
        </div>
      </div>
      <div className="w-full h-[2px] bg-white/5">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-100 ease-out" 
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </nav>
  );
};
