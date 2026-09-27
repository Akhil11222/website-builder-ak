'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Check if user is scrolled past 350px
      const pastThreshold = scrollY > 350;
      
      // Auto-hide when reaching near the footer (within 200px of bottom)
      const nearBottom = scrollY + windowHeight >= documentHeight - 150;
      
      setIsVisible(pastThreshold && !nearBottom);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#0f172a]/90 hover:bg-indigo-600 border border-white/10 hover:border-indigo-500/50 text-slate-300 hover:text-white shadow-xl shadow-black/50 backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
