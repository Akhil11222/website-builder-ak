'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isFooterNear, setIsFooterNear] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Show only when scrolled past 300px
      if (scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Check distance from bottom or footer
      const footerElement = document.getElementById('main-footer');
      if (footerElement) {
        const footerRect = footerElement.getBoundingClientRect();
        // If the footer top is within 150px of the viewport bottom or above it
        if (footerRect.top <= window.innerHeight + 20) {
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
        aria-label="Scroll back to top"
        className="w-11 h-11 rounded-full bg-zinc-950 text-white border border-zinc-700 shadow-xl hover:bg-zinc-800 active:scale-90 flex items-center justify-center transition-all duration-200 group focus:outline-hidden focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 focus:ring-offset-zinc-950"
      >
        <ArrowUp className="w-4 h-4 transition-transform duration-200 group-hover:-translate-y-0.5" />
      </button>
    </div>
  );
}
