
import React from 'react';

export const ParallaxBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dynamic Gradients */}
      <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-blue-900/10 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute top-[40%] -right-[10%] w-[50%] h-[50%] bg-purple-900/10 blur-[120px] rounded-full animate-pulse [animation-delay:2s]" />
      
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" 
           style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }} />

      {/* Floating Particles (Decorative) */}
      {[...Array(15)].map((_, i) => (
        <div 
          key={i}
          className="absolute bg-white/10 rounded-full"
          style={{
            width: Math.random() * 4 + 2 + 'px',
            height: Math.random() * 4 + 2 + 'px',
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
            opacity: Math.random() * 0.5,
            transition: 'transform 0.5s ease-out'
          }}
        />
      ))}
    </div>
  );
};
