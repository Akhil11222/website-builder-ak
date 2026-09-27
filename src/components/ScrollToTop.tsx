'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isFooterNear, setIsFooterNear] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Check distance from bottom or footer
      const footerElement = document.getElementById('main-footer');
      if (footerElement) {
        const footerRect = footerElement.getBoundingClientRect();
        if (footerRect.top <= window.innerHeight + 40) {
          setIsFooterNear(true);
        } else {
          setIsFooterNear(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const shouldShow = isVisible && !isFooterNear;

  return (
    <div 
      className={`fixed bottom-6 right-6 z-40 transition-all duration-300 transform ${
        shouldShow 
          ? 'opacity-100 translate-y-0 pointer-events-auto' 
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="w-12 h-12 rounded-full bg-slate-900 text-white hover:bg-indigo-600 active:scale-95 shadow-lg shadow-slate-900/20 border border-slate-700/50 flex items-center justify-center transition-all duration-200 group focus:outline-hidden"
      >
        <ArrowUp className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5" />
      </button>
    </div>
  );
}
