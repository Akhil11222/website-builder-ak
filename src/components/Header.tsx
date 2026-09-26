'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  Search, 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight
} from 'lucide-react';
import { CATEGORIES } from '@/data/templates';
import { useMarketplace } from '@/context/MarketplaceContext';

export default function Header() {
  const { 
    selectedCategory, 
    setSelectedCategory, 
    searchQuery, 
    setSearchQuery,
    setIsSignInOpen 
  } = useMarketplace();

  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const categoryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (categoryRef.current && !categoryRef.current.contains(e.target as Node)) {
        setIsCategoryOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const catalogElem = document.getElementById('catalog');
    if (catalogElem) {
      catalogElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategory = (cat: string) => {
    setSelectedCategory(cat);
    setIsCategoryOpen(false);
    const catalogElem = document.getElementById('catalog');
    if (catalogElem) {
      catalogElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToQuote = () => {
    const quoteElem = document.getElementById('quote-builder');
    if (quoteElem) {
      quoteElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md border-b border-zinc-200/90 shadow-xs' 
          : 'bg-white/70 backdrop-blur-xs border-b border-zinc-200/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-3 sm:gap-6">
          
          {/* Architectural Monogram Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group focus:outline-hidden">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-zinc-950 flex items-center justify-center text-white border border-zinc-800 shadow-xs transition-transform duration-200 group-hover:scale-105">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-zinc-100">
                <path d="M3 20L7.5 4H10.5L12 9.5L13.5 4H16.5L21 20H17.5L15.5 13L13.5 20H10.5L8.5 13L6.5 20H3Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"/>
                <path d="M7 16H17V17.5H7V16Z" fill="currentColor"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-zinc-950 text-base sm:text-lg leading-tight flex items-center gap-1.5">
                WebsiteBuilder
                <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-zinc-100 border border-zinc-200 text-zinc-600 hidden md:inline-block">HUB</span>
              </span>
              <span className="text-[10px] text-zinc-500 font-mono tracking-wider uppercase hidden sm:block">48h Live Deployment</span>
            </div>
          </Link>

          {/* Search with Category Selector Dropdown (Desktop & Tablet) */}
          <div className="hidden lg:flex items-center flex-1 max-w-md xl:max-w-lg mx-2">
            <form onSubmit={handleSearchSubmit} className="relative w-full flex items-center">
              <div className="relative flex-1 flex items-center bg-zinc-100/80 hover:bg-zinc-100 focus-within:bg-white rounded-l-lg border border-r-0 border-zinc-300 focus-within:border-zinc-900 transition-colors">
                <Search className="w-4 h-4 text-zinc-400 ml-3.5 shrink-0" />
                <input 
                  type="text"
                  placeholder="Search websites by industry, stack, or feature..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-2.5 pr-3 py-2 text-xs sm:text-sm bg-transparent text-zinc-900 placeholder:text-zinc-400 focus:outline-hidden"
                />
              </div>

              {/* Category Selector Dropdown */}
              <div className="relative" ref={categoryRef}>
                <button
                  type="button"
                  onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                  className="flex items-center gap-1.5 px-3 py-2.5 bg-zinc-100/90 hover:bg-zinc-200/80 rounded-r-lg border border-zinc-300 text-xs font-medium text-zinc-700 hover:text-zinc-950 transition-colors whitespace-nowrap"
                >
                  <span className="max-w-[85px] truncate">{selectedCategory}</span>
                  <ChevronDown className={`w-3.5 h-3.5 text-zinc-500 transition-transform ${isCategoryOpen ? 'rotate-180' : ''}`} />
                </button>

                {isCategoryOpen && (
                  <div className="absolute right-0 mt-1.5 w-48 bg-white rounded-lg shadow-xl border border-zinc-200 py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
                    <div className="px-3 py-1 text-[11px] font-mono text-zinc-400 uppercase tracking-wider border-b border-zinc-100">
                      Filter by Sector
                    </div>
                    {CATEGORIES.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => handleSelectCategory(cat)}
                        className={`w-full text-left px-3 py-2 text-xs transition-colors flex items-center justify-between ${
                          selectedCategory === cat 
                            ? 'bg-zinc-950 text-white font-medium' 
                            : 'text-zinc-700 hover:bg-zinc-100'
                        }`}
                      >
                        <span>{cat}</span>
                        {selectedCategory === cat && (
                          <span className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </form>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 xl:gap-8 text-sm font-medium text-zinc-600">
            <Link 
              href="#catalog" 
              className="hover:text-zinc-950 transition-colors"
            >
              Websites
            </Link>
            <Link 
              href="#how-it-works" 
              className="hover:text-zinc-950 transition-colors"
            >
              How It Works
            </Link>
            <Link 
              href="#about" 
              className="hover:text-zinc-950 transition-colors"
            >
              About Us
            </Link>
            <Link 
              href="#blogs" 
              className="hover:text-zinc-950 transition-colors"
            >
              Blogs
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => setIsSignInOpen(true)}
              className="hidden sm:inline-flex items-center px-3 py-2 text-xs sm:text-sm font-medium text-zinc-700 hover:text-zinc-950 transition-colors"
            >
              Sign In
            </button>

            <button
              type="button"
              onClick={handleScrollToQuote}
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-zinc-950 hover:bg-zinc-800 text-white text-xs sm:text-sm font-medium transition-all shadow-xs hover:shadow-md active:scale-98"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar Row (When on mobile) */}
        <div className="lg:hidden pb-3 pt-1">
          <form onSubmit={handleSearchSubmit} className="relative flex items-center">
            <div className="relative flex-1 flex items-center bg-zinc-100 rounded-lg border border-zinc-200">
              <Search className="w-4 h-4 text-zinc-400 ml-3 shrink-0" />
              <input 
                type="text"
                placeholder="Search templates or sectors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-2.5 pr-3 py-2 text-xs bg-transparent text-zinc-900 placeholder:text-zinc-400 focus:outline-hidden"
              />
            </div>
          </form>
        </div>
      </div>

      {/* Responsive Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[112px] bg-white border-b border-zinc-200 shadow-2xl z-50 p-5 space-y-5 animate-in slide-in-from-top-4 duration-200 max-h-[calc(100vh-120px)] overflow-y-auto">
          {/* Sector Quick Pills */}
          <div>
            <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block mb-2">
              Browse by Industry
            </span>
            <div className="flex flex-wrap gap-1.5">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    handleSelectCategory(cat);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`px-2.5 py-1 rounded text-xs transition-colors ${
                    selectedCategory === cat 
                      ? 'bg-zinc-950 text-white font-medium' 
                      : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Links */}
          <div className="pt-2 border-t border-zinc-100 space-y-1">
            <Link
              href="#catalog"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-medium text-zinc-800 hover:bg-zinc-100"
            >
              Browse Websites Catalog
            </Link>
            <Link
              href="#how-it-works"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-medium text-zinc-800 hover:bg-zinc-100"
            >
              How 10% Booking Works
            </Link>
            <Link
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-medium text-zinc-800 hover:bg-zinc-100"
            >
              About Our 48-Hour Guarantee
            </Link>
            <Link
              href="#blogs"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-medium text-zinc-800 hover:bg-zinc-100"
            >
              Deployment Guides & Blogs
            </Link>
          </div>

          {/* Drawer Actions */}
          <div className="pt-4 border-t border-zinc-100 space-y-2.5">
            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsSignInOpen(true);
              }}
              className="w-full py-2.5 border border-zinc-200 rounded-lg text-xs font-medium text-zinc-800 hover:bg-zinc-50 text-center"
            >
              Sign In to Client Portal
            </button>
            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                handleScrollToQuote();
              }}
              className="w-full py-2.5 bg-zinc-950 text-white rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 shadow-sm"
            >
              <span>Build Custom Website Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
