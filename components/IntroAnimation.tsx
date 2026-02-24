
import React, { useEffect, useState } from 'react';

const IntroAnimation: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    document.body.classList.add('hide-scroll');
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        document.body.classList.remove('hide-scroll');
        onComplete();
      }, 800);
    }, 3200);

    return () => {
      clearTimeout(timer);
      document.body.classList.remove('hide-scroll');
    };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[200] bg-white flex flex-col items-center justify-center transition-all duration-1000 ease-in-out ${isExiting ? 'opacity-0 scale-105' : 'opacity-100'}`}>
      <div className="relative flex flex-col items-center gap-8">
        <div className="w-px h-20 bg-slate-100 overflow-hidden relative mb-8">
          <div className="absolute inset-0 bg-indigo-500 h-1/2 animate-[draw-vertical_2s_ease-in-out_infinite]"></div>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 flex items-center gap-2 animate-fade-in">
          TRIVIUM
          <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
        </h2>
        
        <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-slate-400 animate-fade-in [animation-delay:1s] opacity-0" style={{ animationFillMode: 'forwards' }}>
          Neural Infrastructure
        </p>
      </div>
      
      <style>{`
        @keyframes draw-vertical {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
      `}</style>
    </div>
  );
};

export default IntroAnimation;
