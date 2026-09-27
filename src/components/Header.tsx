'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Layers, Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onBookClick?: () => void;
}

export default function Header({ onBookClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-4 z-50 w-full px-4 sm:px-6 pointer-events-none">
      {/* Floating Glassmorphism Pill Container */}
      <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-xl border border-zinc-200/80 shadow-sm shadow-zinc-900/5 rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between pointer-events-auto transition-all duration-200">
        
        {/* Brand Logo with Monogram & Tiny Blue Dot */}
        <Link 
          href="/" 
          className="flex items-center gap-2.5 group focus:outline-none"
        >
          <div className="w-8 h-8 rounded-xl bg-zinc-950 flex items-center justify-center text-white shadow-xs group-hover:bg-zinc-800 transition-colors">
            <Layers className="w-4 h-4 text-white" />
          </div>
          <div className="flex items-center">
            <span className="text-sm sm:text-base font-bold tracking-tight text-zinc-950">
              WebsiteBuilder
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 ml-0.5" />
          </div>
        </Link>

        {/* Center Nav Pills (Desktop) */}
        <nav className="hidden md:flex items-center gap-1">
          <button
            onClick={() => scrollTo('templates')}
            className="hover:bg-zinc-100/80 hover:text-black transition-all rounded-full px-3.5 py-1.5 text-sm font-medium text-zinc-600 cursor-pointer"
          >
            Templates
          </button>
          <button
            onClick={() => scrollTo('how-it-works')}
            className="hover:bg-zinc-100/80 hover:text-black transition-all rounded-full px-3.5 py-1.5 text-sm font-medium text-zinc-600 cursor-pointer"
          >
            How 10% Works
          </button>
          <button
            onClick={() => scrollTo('why-us')}
            className="hover:bg-zinc-100/80 hover:text-black transition-all rounded-full px-3.5 py-1.5 text-sm font-medium text-zinc-600 cursor-pointer"
          >
            Why Escrow
          </button>
          <button
            onClick={() => scrollTo('faq')}
            className="hover:bg-zinc-100/80 hover:text-black transition-all rounded-full px-3.5 py-1.5 text-sm font-medium text-zinc-600 cursor-pointer"
          >
            FAQ
          </button>
        </nav>

        {/* Right Action: Sleek High-End Black Pill Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onBookClick || (() => scrollTo('templates'))}
            className="relative inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold text-white bg-zinc-950 hover:bg-zinc-800 shadow-sm active:scale-[0.98] transition-all cursor-pointer group"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span>Book with 10% Token</span>
            <ArrowRight className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Menu Hamburger Button */}
        <div className="flex sm:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-9 h-9 flex items-center justify-center rounded-full text-zinc-700 hover:bg-zinc-100 border border-zinc-200/80 transition-colors focus:outline-none"
            aria-label="Toggle mobile navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Silky-Smooth Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden mt-2 max-w-6xl mx-auto rounded-2xl border border-zinc-200/80 bg-white/95 backdrop-blur-xl p-4 shadow-xl shadow-zinc-900/10 space-y-2 pointer-events-auto transition-all animate-in fade-in slide-in-from-top-2">
          <button
            onClick={() => scrollTo('templates')}
            className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium text-zinc-700 hover:bg-zinc-100 hover:text-black flex items-center justify-between"
          >
            <span>Templates</span>
            <ArrowRight className="w-4 h-4 text-zinc-400" />
          </button>
          <button
            onClick={() => scrollTo('how-it-works')}
            className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium text-zinc-700 hover:bg-zinc-100 hover:text-black flex items-center justify-between"
          >
            <span>How 10% Works</span>
            <ArrowRight className="w-4 h-4 text-zinc-400" />
          </button>
          <button
            onClick={() => scrollTo('why-us')}
            className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium text-zinc-700 hover:bg-zinc-100 hover:text-black flex items-center justify-between"
          >
            <span>Why Escrow</span>
            <ArrowRight className="w-4 h-4 text-zinc-400" />
          </button>
          <button
            onClick={() => scrollTo('faq')}
            className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium text-zinc-700 hover:bg-zinc-100 hover:text-black flex items-center justify-between"
          >
            <span>FAQ</span>
            <ArrowRight className="w-4 h-4 text-zinc-400" />
          </button>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onBookClick) onBookClick();
                else scrollTo('templates');
              }}
              className="w-full min-h-[44px] flex items-center justify-center gap-2 px-4 py-3 rounded-full text-sm font-semibold text-white bg-zinc-950 hover:bg-zinc-800 shadow-sm active:scale-[0.98] transition-all"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span>Book with 10% Token</span>
              <ArrowRight className="w-4 h-4 text-blue-400" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
