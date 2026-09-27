'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Layers, 
  Search, 
  Menu, 
  X, 
  ArrowRight, 
  User 
} from 'lucide-react';

interface HeaderProps {
  onQuoteClick: () => void;
  onLoginClick: () => void;
  onBlogsClick: () => void;
  onAboutClick: () => void;
  onSearchQuery?: (q: string) => void;
}

export default function Header({
  onQuoteClick,
  onLoginClick,
  onBlogsClick,
  onAboutClick,
  onSearchQuery
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
    if (onSearchQuery) onSearchQuery(e.target.value);
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#060a12]/85 border-b border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-3 sm:gap-6">
          
          {/* Brand Logo & Subtle Hub Badge */}
          <Link 
            href="/" 
            className="flex items-center gap-2.5 group focus:outline-none shrink-0"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-blue-500 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
              <Layers className="w-5 h-5 text-white" />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
                WebsiteBuilder
              </span>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-mono uppercase font-bold bg-blue-500/10 text-cyan-400 border border-blue-500/20">
                HUB
              </span>
            </div>
          </Link>

          {/* Compact Enterprise Search Bar (Desktop & Large Tablet) */}
          <div className="hidden lg:flex items-center flex-1 max-w-xs relative">
            <div className="relative w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchInput}
                onChange={handleSearchChange}
                placeholder="Search templates or tech..."
                className="w-full pl-9 pr-12 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-inner"
              />
              <span className="absolute right-2.5 top-1/2 -translate-y-1/2 px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-400 bg-slate-800/80 border border-slate-700 pointer-events-none">
                ⌘K
              </span>
            </div>
          </div>

          {/* Navigation Menu (Desktop) */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-slate-300">
            <button
              onClick={() => scrollTo('hero')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={onAboutClick}
              className="hover:text-white transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => scrollTo('websites')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Websites
            </button>
            <button
              onClick={onBlogsClick}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Blogs
            </button>
            <button
              onClick={onLoginClick}
              className="hover:text-cyan-400 transition-colors cursor-pointer flex items-center gap-1.5 text-xs text-slate-400 hover:text-white font-mono"
            >
              <User className="w-3.5 h-3.5 text-blue-400" />
              <span>Login / Signup</span>
            </button>
          </nav>

          {/* Right Action Header: "Get a Quote" MUST remain visible on Mobile */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onQuoteClick}
              className="relative inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer shrink-0"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-3.5 h-3.5 text-cyan-200" />
            </button>

            {/* Mobile Hamburger Drawer Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/80 border border-slate-800 transition-colors focus:outline-none shrink-0"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Polished Slide-Over Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-[#060a12]/95 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-3 transition-all duration-200 shadow-2xl">
          {/* Mobile Search input */}
          <div className="relative w-full pb-2">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchInput}
              onChange={handleSearchChange}
              placeholder="Search website templates..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="space-y-1 text-sm font-medium text-slate-200">
            <button
              onClick={() => scrollTo('hero')}
              className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-slate-800/60 hover:text-white flex items-center justify-between"
            >
              <span>Home</span>
              <ArrowRight className="w-4 h-4 text-slate-500" />
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onAboutClick();
              }}
              className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-slate-800/60 hover:text-white flex items-center justify-between"
            >
              <span>About Us</span>
              <ArrowRight className="w-4 h-4 text-slate-500" />
            </button>
            <button
              onClick={() => scrollTo('websites')}
              className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-slate-800/60 hover:text-white flex items-center justify-between"
            >
              <span>Websites Directory</span>
              <ArrowRight className="w-4 h-4 text-slate-500" />
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBlogsClick();
              }}
              className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-slate-800/60 hover:text-white flex items-center justify-between"
            >
              <span>Blogs &amp; Insights</span>
              <ArrowRight className="w-4 h-4 text-slate-500" />
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onLoginClick();
              }}
              className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-slate-800/60 hover:text-cyan-400 flex items-center justify-between text-slate-300"
            >
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-blue-400" />
                <span>Client Portal / Login</span>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-500" />
            </button>
          </div>

          <div className="pt-2 border-t border-slate-800/80">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onQuoteClick();
              }}
              className="w-full min-h-[44px] flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 shadow-md shadow-blue-500/25 active:scale-[0.98] transition-all"
            >
              <span>Get a 48-Hour Deployment Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
