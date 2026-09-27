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
      {/* Subtle Interactive Blue Light (5% Blue accent reflection on clean white canvas) */}
      <div
        className="hidden md:block absolute w-[550px] h-[550px] rounded-full transition-transform duration-300 ease-out"
        style={{
          transform: `translate3d(${mousePos.x - 275}px, ${mousePos.y - 275}px, 0)`,
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.05) 0%, rgba(37, 99, 235, 0.01) 45%, transparent 70%)',
          willChange: 'transform',
        }}
      />

      {/* Soft Clean Radial Gradients on White */}
      <div className="absolute top-[-5%] left-1/2 -translate-x-1/2 w-[700px] sm:w-[900px] h-[350px] sm:h-[450px] rounded-full bg-blue-600/[0.03] blur-3xl" />
      <div className="absolute top-[25%] right-[5%] w-[400px] h-[400px] rounded-full bg-blue-600/[0.02] blur-3xl" />
    </div>
  );
}
