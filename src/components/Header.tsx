'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  Search, 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight,
  Layers,
  Clock
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
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (categoryRef.current && !categoryRef.current.contains(e.target as Node)) {
        setIsCategoryOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

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

  const handleScrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs' 
          : 'bg-white/80 backdrop-blur-xs border-b border-slate-200/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-3 sm:gap-6">
          
          {/* Brand Logo & Tag */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group focus:outline-hidden">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 transition-transform duration-200 group-hover:scale-105">
              <Layers className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-slate-900 text-base sm:text-lg leading-tight flex items-center gap-1.5">
                WebsiteBuilder
                <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100 hidden sm:inline-block">
                  48h Hub
                </span>
              </span>
              <span className="text-[11px] text-slate-500 font-medium hidden sm:block">
                Production Marketplace
              </span>
            </div>
          </Link>

          {/* Search with Category Selector Dropdown (Desktop & Tablet) */}
          <div className="hidden lg:flex items-center flex-1 max-w-md xl:max-w-lg mx-2">
            <form onSubmit={handleSearchSubmit} className="relative w-full flex items-center">
              <div className="relative flex-1 flex items-center bg-slate-100/90 hover:bg-slate-100 focus-within:bg-white rounded-l-xl border border-r-0 border-slate-200 focus-within:border-indigo-600 focus-within:ring-2 focus-within:ring-indigo-500/10 transition-all">
                <Search className="w-4 h-4 text-slate-400 ml-3.5 shrink-0" />
                <input 
                  type="text"
                  placeholder="Search websites by industry, stack, or feature..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-2.5 pr-3 py-2 text-xs sm:text-sm bg-transparent text-slate-900 placeholder:text-slate-400 focus:outline-hidden"
                />
              </div>

              {/* Category Selector Dropdown */}
              <div className="relative" ref={categoryRef}>
                <button
                  type="button"
                  onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                  className="flex items-center gap-1.5 px-3.5 py-2.5 bg-slate-100/90 hover:bg-slate-200/80 rounded-r-xl border border-slate-200 text-xs font-medium text-slate-700 hover:text-slate-900 transition-colors whitespace-nowrap"
                >
                  <span className="max-w-[95px] truncate">{selectedCategory}</span>
                  <ChevronDown className={`w-3.5 h-3.5 text-slate-500 transition-transform ${isCategoryOpen ? 'rotate-180' : ''}`} />
                </button>

                {isCategoryOpen && (
                  <div className="absolute right-0 mt-1.5 w-52 bg-white rounded-xl shadow-xl border border-slate-200 py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
                    <div className="px-3.5 py-1.5 text-[10px] font-mono text-slate-400 uppercase tracking-wider border-b border-slate-100">
                      Filter by Sector
                    </div>
                    {CATEGORIES.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => handleSelectCategory(cat)}
                        className={`w-full text-left px-3.5 py-2 text-xs transition-colors flex items-center justify-between ${
                          selectedCategory === cat 
                            ? 'bg-indigo-50 text-indigo-700 font-semibold' 
                            : 'text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <span>{cat}</span>
                        {selectedCategory === cat && (
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </form>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-5 xl:gap-7 text-sm font-medium text-slate-600">
            <Link 
              href="#catalog" 
              className="hover:text-indigo-600 transition-colors"
            >
              Explore Websites
            </Link>
            <Link 
              href="#how-it-works" 
              className="hover:text-indigo-600 transition-colors"
            >
              How 10% Booking Works
            </Link>
            <Link 
              href="#quote-builder" 
              className="hover:text-indigo-600 transition-colors"
            >
              Custom Build
            </Link>
            <Link 
              href="#about" 
              className="hover:text-indigo-600 transition-colors"
            >
              About Us
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            <button
              type="button"
              onClick={() => handleScrollToSection('quote-builder')}
              className="hidden sm:inline-flex items-center text-xs sm:text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors px-2 py-2"
            >
              Contact Us
            </button>

            <button
              type="button"
              onClick={() => handleScrollToSection('catalog')}
              className="inline-flex items-center gap-1.5 px-4 py-2 sm:py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white text-xs sm:text-sm font-semibold transition-all shadow-sm hover:shadow-md hover:shadow-indigo-500/20 active:scale-98"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Mobile Menu Toggle Button (44px target) */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-11 h-11 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 flex items-center justify-center transition-colors focus:outline-hidden"
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
            <div className="relative flex-1 flex items-center bg-slate-100/90 rounded-xl border border-slate-200">
              <Search className="w-4 h-4 text-slate-400 ml-3 shrink-0" />
              <input 
                type="text"
                placeholder="Search templates or sectors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-2.5 pr-3 py-2 text-xs bg-transparent text-slate-900 placeholder:text-slate-400 focus:outline-hidden"
              />
            </div>
          </form>
        </div>
      </div>

      {/* Responsive Mobile Drawer Menu Sheet */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex flex-col justify-end animate-in fade-in duration-200">
          <div className="bg-white rounded-t-2xl shadow-2xl p-6 space-y-6 max-h-[85vh] overflow-y-auto animate-in slide-in-from-bottom duration-300">
            
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
                  <Layers className="w-4 h-4" />
                </div>
                <span className="font-bold text-slate-900 text-sm">WebsiteBuilder Menu</span>
              </div>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-9 h-9 rounded-lg bg-slate-100 text-slate-500 hover:text-slate-800 flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Sector Filter Pills */}
            <div>
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2 font-semibold">
                Explore by Industry
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
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors min-h-[38px] flex items-center ${
                      selectedCategory === cat 
                        ? 'bg-indigo-600 text-white' 
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Navigation Links (Large, Tap-Friendly 44px+ height) */}
            <div className="pt-2 border-t border-slate-100 space-y-1">
              <button
                type="button"
                onClick={() => handleScrollToSection('catalog')}
                className="w-full text-left px-3 py-3 rounded-xl text-sm font-semibold text-slate-800 hover:bg-slate-50 flex items-center justify-between"
              >
                <span>Explore Ready Websites</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>
              
              <button
                type="button"
                onClick={() => handleScrollToSection('how-it-works')}
                className="w-full text-left px-3 py-3 rounded-xl text-sm font-semibold text-slate-800 hover:bg-slate-50 flex items-center justify-between"
              >
                <span>How 10% Booking Works</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>

              <button
                type="button"
                onClick={() => handleScrollToSection('quote-builder')}
                className="w-full text-left px-3 py-3 rounded-xl text-sm font-semibold text-slate-800 hover:bg-slate-50 flex items-center justify-between"
              >
                <span>Custom Website Quote</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>

              <button
                type="button"
                onClick={() => handleScrollToSection('about')}
                className="w-full text-left px-3 py-3 rounded-xl text-sm font-semibold text-slate-800 hover:bg-slate-50 flex items-center justify-between"
              >
                <span>About Our 48-Hour SLA</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Trust Callout */}
            <div className="p-3 rounded-xl bg-indigo-50/70 border border-indigo-100 text-xs text-indigo-900 space-y-1">
              <div className="flex items-center gap-1.5 font-semibold">
                <Clock className="w-3.5 h-3.5 text-indigo-600" />
                <span>48-Hour Live Delivery Guarantee</span>
              </div>
              <p className="text-[11px] text-indigo-700/90 leading-relaxed">
                Pay just 10% today to reserve. The remaining 90% is due only when your website is live on your domain.
              </p>
            </div>

            {/* Drawer Actions */}
            <div className="pt-2 space-y-2.5">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsSignInOpen(true);
                }}
                className="w-full py-3 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50 text-center min-h-[44px]"
              >
                Client Deployment Portal Sign In
              </button>
              
              <button
                type="button"
                onClick={() => handleScrollToSection('catalog')}
                className="w-full py-3 bg-indigo-600 text-white rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-md shadow-indigo-500/20 min-h-[44px]"
              >
                <span>Browse Marketplace</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}
