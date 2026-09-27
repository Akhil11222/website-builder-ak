'use client';

import React, { useEffect, useState } from 'react';

export default function SpotlightBackground() {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    let animationFrameId: number;

    const handlePointerMove = (e: PointerEvent) => {
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
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-500 overflow-hidden"
      aria-hidden="true"
    >
      {/* Soft Ambient Top Glow */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-3xl opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, rgba(147, 197, 253, 0.2) 50%, transparent 70%)',
        }}
      />

      {/* Gentle Dynamic Cursor Spotlight (Whisper Soft Indigo Tone) */}
      <div 
        className="absolute w-[650px] h-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-100 ease-out blur-2xl"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.05) 0%, rgba(59, 130, 246, 0.02) 40%, transparent 70%)',
        }}
      />
    </div>
  );
}
