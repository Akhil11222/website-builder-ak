'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Layers, 
  Search, 
  Menu, 
  X, 
  ArrowRight, 
  User, 
  Phone,
  MessageSquare
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
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  const scrollTo = (id: string) => {
    setMobileDrawerOpen(false);
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
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-white/90 border-b border-slate-200/80 shadow-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-3 sm:gap-6">
          
          {/* Left: Hamburger (Mobile) + Brand Logo */}
          <div className="flex items-center gap-3">
            {/* Mobile Hamburger Toggle for Left Slide-Over Drawer */}
            <button
              type="button"
              onClick={() => setMobileDrawerOpen(true)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 transition-colors focus:outline-none shrink-0"
              aria-label="Open navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Brand Logo & Subtle Hub Badge */}
            <Link 
              href="/" 
              className="flex items-center gap-2.5 group focus:outline-none shrink-0"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-blue-500 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
                <Layers className="w-5 h-5 text-white" />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                  WebsiteBuilder
                </span>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-mono uppercase font-bold bg-blue-50 text-blue-700 border border-blue-200">
                  HUB
                </span>
              </div>
            </Link>
          </div>

          {/* Compact Enterprise Search Bar (Desktop) */}
          <div className="hidden lg:flex items-center flex-1 max-w-xs relative">
            <div className="relative w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchInput}
                onChange={handleSearchChange}
                placeholder="Search templates or tech..."
                className="w-full pl-9 pr-12 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all shadow-inner"
              />
              <span className="absolute right-2.5 top-1/2 -translate-y-1/2 px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-400 bg-white border border-slate-200 pointer-events-none shadow-2xs">
                ⌘K
              </span>
            </div>
          </div>

          {/* Navigation Menu (Desktop) */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-slate-600">
            <button
              onClick={() => scrollTo('hero')}
              className="hover:text-blue-600 transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={onAboutClick}
              className="hover:text-blue-600 transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => scrollTo('websites')}
              className="hover:text-blue-600 transition-colors cursor-pointer"
            >
              Websites
            </button>
            <button
              onClick={onBlogsClick}
              className="hover:text-blue-600 transition-colors cursor-pointer"
            >
              Blogs
            </button>
            <button
              onClick={onLoginClick}
              className="hover:text-blue-600 transition-colors cursor-pointer flex items-center gap-1.5 text-xs text-slate-600 hover:text-blue-600 font-mono"
            >
              <User className="w-3.5 h-3.5 text-blue-600" />
              <span>Login / Signup</span>
            </button>
          </nav>

          {/* Right Action Header: "Get a Quote" MUST remain visible on Mobile */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onQuoteClick}
              className="relative inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-md shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer shrink-0"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-3.5 h-3.5 text-blue-100" />
            </button>
          </div>

        </div>
      </div>

      {/* LEFT-SIDE SLIDE-OVER MOBILE DRAWER */}
      {mobileDrawerOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop overlay */}
          <div 
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileDrawerOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer panel */}
          <div className="fixed inset-y-0 left-0 w-80 max-w-[85vw] bg-white shadow-2xl z-50 p-6 flex flex-col justify-between border-r border-slate-200 transition-transform duration-300 ease-in-out">
            
            {/* Top: Logo + Brand + Close Button */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 via-blue-500 to-cyan-500 flex items-center justify-center text-white shadow-sm">
                    <Layers className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-slate-900 text-base tracking-tight">
                      WebsiteBuilder
                    </span>
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-mono uppercase font-bold bg-blue-50 text-blue-700 border border-blue-200">
                      HUB
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setMobileDrawerOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Search input in drawer */}
              <div className="relative w-full">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchInput}
                  onChange={handleSearchChange}
                  placeholder="Search templates..."
                  className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white"
                />
              </div>

              {/* Navigation Links */}
              <nav className="space-y-1 font-medium text-slate-700 text-sm">
                <button
                  onClick={() => scrollTo('hero')}
                  className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-slate-50 hover:text-blue-600 flex items-center justify-between transition-colors cursor-pointer"
                >
                  <span>Home</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </button>
                <button
                  onClick={() => {
                    setMobileDrawerOpen(false);
                    onAboutClick();
                  }}
                  className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-slate-50 hover:text-blue-600 flex items-center justify-between transition-colors cursor-pointer"
                >
                  <span>About Us</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </button>
                <button
                  onClick={() => scrollTo('websites')}
                  className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-slate-50 hover:text-blue-600 flex items-center justify-between transition-colors cursor-pointer"
                >
                  <span>Websites Catalog</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </button>
                <button
                  onClick={() => {
                    setMobileDrawerOpen(false);
                    onBlogsClick();
                  }}
                  className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-slate-50 hover:text-blue-600 flex items-center justify-between transition-colors cursor-pointer"
                >
                  <span>Blogs &amp; Insights</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </button>
                <button
                  onClick={() => {
                    setMobileDrawerOpen(false);
                    onLoginClick();
                  }}
                  className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-slate-50 hover:text-blue-600 flex items-center justify-between transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4 text-blue-600" />
                    <span>Client Portal (Login)</span>
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </button>
              </nav>
            </div>

            {/* Bottom: Contact Info + Full Width "Get a Quote" */}
            <div className="pt-6 border-t border-slate-200 space-y-4">
              <div className="space-y-2 text-xs text-slate-600">
                <a 
                  href="https://wa.me/919876543210" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-blue-600" />
                  <span>WhatsApp: +91 98765 43210</span>
                </a>
                <a 
                  href="tel:+919876543210"
                  className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-600" />
                  <span>Direct SLA Line</span>
                </a>
              </div>

              <button
                onClick={() => {
                  setMobileDrawerOpen(false);
                  onQuoteClick();
                }}
                className="w-full py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}
