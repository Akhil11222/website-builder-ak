'use client';

import React, { useEffect, useState } from 'react';

export default function SpotlightBackground() {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    let animationFrameId: number;

    const handlePointerMove = (e: PointerEvent) => {
      // Use requestAnimationFrame for silky 60fps tracking without lag
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-10 transition-opacity duration-500 overflow-hidden"
      aria-hidden="true"
    >
      {/* Dynamic Cursor Spotlight Radial Gradient */}
      <div 
        className="absolute w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-75 ease-out"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          background: 'radial-gradient(circle, rgba(24, 24, 27, 0.04) 0%, rgba(24, 24, 27, 0.01) 40%, transparent 70%)',
        }}
      />

      {/* Subtle Architectural Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />
    </div>
  );
}
