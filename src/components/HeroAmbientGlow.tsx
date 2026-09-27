'use client';

import React, { useEffect, useState } from 'react';

export default function HeroAmbientGlow() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 select-none">
      {/* 1. Interactive Aurora Glow (Soft, elegant top radial aura) */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(37, 99, 235, 0.12), rgba(255, 255, 255, 0))'
        }}
      />

      {/* 2. Subtle Light Mesh / Architectural Micro-Dots (Opacity 0.07, smoothly fades toward bottom) */}
      <div 
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#09090b 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          maskImage: 'radial-gradient(ellipse 80% 65% at 50% 25%, black 40%, transparent 95%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 65% at 50% 25%, black 40%, transparent 95%)'
        }}
      />

      {/* 3. Cursor Spotlight Effect (Zero-lag gentle blue ambient reflection) */}
      <div
        className="hidden md:block absolute w-[600px] h-[600px] rounded-full transition-transform duration-200 ease-out pointer-events-none"
        style={{
          transform: `translate3d(${mousePos.x - 300}px, ${mousePos.y - 300}px, 0)`,
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, rgba(59, 130, 246, 0.02) 40%, transparent 70%)',
          willChange: 'transform',
        }}
      />

      {/* Soft secondary atmospheric diffusion */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-gradient-to-b from-blue-500/[0.04] to-transparent blur-3xl rounded-full" />
    </div>
  );
}
