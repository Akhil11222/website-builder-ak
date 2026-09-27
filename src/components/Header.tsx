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
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/90 border-b border-zinc-200 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Logo (30% Black Structure + 5% Blue Meta) */}
          <Link 
            href="/" 
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-9 h-9 rounded-xl bg-black flex items-center justify-center text-white shadow-sm group-hover:bg-zinc-800 transition-colors">
              <Layers className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-tight text-zinc-950 group-hover:text-blue-600 transition-colors">
                WebsiteBuilder
              </span>
              <span className="text-[10px] font-mono text-blue-600 tracking-wider uppercase font-semibold">
                Hub & Escrow
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollTo('templates')}
              className="text-sm font-medium text-zinc-600 hover:text-black transition-colors cursor-pointer"
            >
              Templates
            </button>
            <button
              onClick={() => scrollTo('how-it-works')}
              className="text-sm font-medium text-zinc-600 hover:text-black transition-colors cursor-pointer"
            >
              How 10% Works
            </button>
            <button
              onClick={() => scrollTo('why-us')}
              className="text-sm font-medium text-zinc-600 hover:text-black transition-colors cursor-pointer"
            >
              Why Us
            </button>
            <button
              onClick={() => scrollTo('faq')}
              className="text-sm font-medium text-zinc-600 hover:text-black transition-colors cursor-pointer"
            >
              FAQ
            </button>
          </nav>

          {/* Right Action CTA (Pitch Black Solid Button: 30% Structure) */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={onBookClick || (() => scrollTo('templates'))}
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-black hover:bg-zinc-800 active:scale-[0.98] transition-all shadow-sm cursor-pointer"
            >
              <span>Book a Website</span>
              <ArrowRight className="w-4 h-4 text-blue-400" />
            </button>
          </div>

          {/* Mobile Menu Trigger Button */}
          <div className="flex sm:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-lg text-zinc-800 hover:bg-zinc-100 border border-zinc-200 transition-colors focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Slide-down Mobile Menu (Clean White 60% Canvas) */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-zinc-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg">
          <button
            onClick={() => scrollTo('templates')}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-zinc-800 hover:bg-zinc-50 hover:text-blue-600 flex items-center justify-between"
          >
            <span>Templates</span>
            <ArrowRight className="w-4 h-4 text-zinc-400" />
          </button>
          <button
            onClick={() => scrollTo('how-it-works')}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-zinc-800 hover:bg-zinc-50 hover:text-blue-600 flex items-center justify-between"
          >
            <span>How 10% Works</span>
            <ArrowRight className="w-4 h-4 text-zinc-400" />
          </button>
          <button
            onClick={() => scrollTo('why-us')}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-zinc-800 hover:bg-zinc-50 hover:text-blue-600 flex items-center justify-between"
          >
            <span>Why Us</span>
            <ArrowRight className="w-4 h-4 text-zinc-400" />
          </button>
          <button
            onClick={() => scrollTo('faq')}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-zinc-800 hover:bg-zinc-50 hover:text-blue-600 flex items-center justify-between"
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
              className="w-full min-h-[44px] flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-white bg-black hover:bg-zinc-800 shadow-sm active:scale-[0.98] transition-all"
            >
              <span>Book a Website</span>
              <ArrowRight className="w-4 h-4 text-blue-400" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
