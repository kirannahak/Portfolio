
import React, { useRef, useEffect, useState } from 'react';
import { SectionAlignment } from './types';

interface StorySectionProps {
  id: string;
  alignment: SectionAlignment;
  children: React.ReactNode;
}

export const StorySection: React.FC<StorySectionProps> = ({ id, alignment, children }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getEntranceStyle = () => {
    if (!isVisible) {
      const transform = alignment === SectionAlignment.LEFT ? 'translateX(-40px)' : 
                        alignment === SectionAlignment.RIGHT ? 'translateX(40px)' : 'translateY(40px)';
      return {
        opacity: 0,
        transform: transform,
      };
    }
    return {
      opacity: 1,
      transform: 'translateX(0) translateY(0)',
    };
  };

  return (
    <section 
      ref={sectionRef}
      id={id}
      className={`min-h-[80vh] flex items-center py-24 px-8 md:px-16 lg:px-32 relative overflow-hidden transition-all duration-[1200ms] ease-out`}
      style={getEntranceStyle()}
    >
      <div className={`w-full max-w-7xl mx-auto flex flex-col ${
        alignment === SectionAlignment.RIGHT ? 'md:items-end md:text-right' : 
        alignment === SectionAlignment.LEFT ? 'md:items-start md:text-left' : 'items-center text-center'
      }`}>
        {children}
      </div>
    </section>
  );
};
