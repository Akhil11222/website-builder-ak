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
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Dynamic Cursor Light Glow (Follows mouse smoothly) */}
      <div
        className="hidden md:block absolute w-[600px] h-[600px] rounded-full transition-transform duration-300 ease-out"
        style={{
          transform: `translate3d(${mousePos.x - 300}px, ${mousePos.y - 300}px, 0)`,
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, rgba(59, 130, 246, 0.05) 45%, transparent 70%)',
          willChange: 'transform',
        }}
      />

      {/* Floating Animated Gradient Orbs */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] sm:w-[900px] h-[450px] sm:h-[600px] rounded-full bg-gradient-to-tr from-indigo-600/20 via-violet-600/15 to-blue-600/15 blur-3xl opacity-70 animate-pulse-slow" />
      <div className="absolute top-[20%] right-[-5%] w-[450px] h-[450px] rounded-full bg-blue-500/10 blur-3xl opacity-60" />
      <div className="absolute top-[40%] left-[-5%] w-[450px] h-[450px] rounded-full bg-indigo-500/10 blur-3xl opacity-60" />

      {/* Subtle organic vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0e17]/50 to-[#0a0e17]" />
    </div>
  );
}
