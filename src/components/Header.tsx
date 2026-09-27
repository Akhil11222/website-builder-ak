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
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#0a0e17]/80 border-b border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-blue-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform duration-200">
              <Layers className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-indigo-400 transition-colors">
                WebsiteBuilder
              </span>
              <span className="text-[10px] font-mono text-indigo-400 tracking-wider uppercase font-medium">
                Hub & Escrow
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollTo('templates')}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              Templates
            </button>
            <button
              onClick={() => scrollTo('how-it-works')}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              How 10% Works
            </button>
            <button
              onClick={() => scrollTo('why-us')}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              Why Us
            </button>
            <button
              onClick={() => scrollTo('faq')}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              FAQ
            </button>
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={onBookClick || (() => scrollTo('templates'))}
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-blue-600 hover:from-indigo-500 hover:to-blue-500 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <span>Book a Website</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Trigger Button */}
          <div className="flex sm:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-lg text-slate-300 hover:text-white hover:bg-white/5 border border-white/10 transition-colors focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Slide-down Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-white/10 bg-[#0a0e17]/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 transition-all duration-200">
          <button
            onClick={() => scrollTo('templates')}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-white flex items-center justify-between"
          >
            <span>Templates</span>
            <ArrowRight className="w-4 h-4 text-slate-400" />
          </button>
          <button
            onClick={() => scrollTo('how-it-works')}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-white flex items-center justify-between"
          >
            <span>How 10% Works</span>
            <ArrowRight className="w-4 h-4 text-slate-400" />
          </button>
          <button
            onClick={() => scrollTo('why-us')}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-white flex items-center justify-between"
          >
            <span>Why Us</span>
            <ArrowRight className="w-4 h-4 text-slate-400" />
          </button>
          <button
            onClick={() => scrollTo('faq')}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-white flex items-center justify-between"
          >
            <span>FAQ</span>
            <ArrowRight className="w-4 h-4 text-slate-400" />
          </button>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onBookClick) onBookClick();
                else scrollTo('templates');
              }}
              className="w-full min-h-[44px] flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-blue-600 shadow-md shadow-indigo-600/30 active:scale-[0.98] transition-all"
            >
              <span>Book a Website</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
