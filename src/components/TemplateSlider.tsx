'use client';

import React, { useRef, useState, useMemo } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  ArrowRight, 
  Eye, 
  Check, 
  ShieldCheck
} from 'lucide-react';
import { TEMPLATES, CATEGORIES, Template, Category } from '@/data/templates';
import CodeMockup from './CodeMockup';

interface TemplateSliderProps {
  onSelectPreview: (template: Template) => void;
  onSelectBook: (template: Template) => void;
}

export default function TemplateSlider({ onSelectPreview, onSelectBook }: TemplateSliderProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Filter templates
  const filteredTemplates = useMemo(() => {
    if (selectedCategory === 'All') return TEMPLATES;
    return TEMPLATES.filter((t) => t.category === selectedCategory);
  }, [selectedCategory]);

  const updateScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="templates" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Production-Ready & 100% Guaranteed</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
              Curated Production Websites
            </h2>
            <p className="text-sm sm:text-base text-slate-400">
              Inspect live code templates. Pay just a 10% token deposit to reserve your slot. Handed over on your custom domain in 48 hours.
            </p>
          </div>

          {/* Slider Arrow Controls (Desktop) */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="w-11 h-11 rounded-full border border-white/10 bg-[#0f172a] hover:bg-white/10 text-white flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed active:scale-95 shadow-lg cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="w-11 h-11 rounded-full border border-white/10 bg-[#0f172a] hover:bg-white/10 text-white flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed active:scale-95 shadow-lg cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-8">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-md shadow-indigo-600/30'
                    : 'bg-[#0f172a] text-slate-400 hover:text-white hover:bg-white/5 border border-white/5'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Horizontal Slider Container */}
        <div
          ref={scrollContainerRef}
          onScroll={updateScrollButtons}
          className="scroll-smooth snap-x snap-mandatory flex gap-6 overflow-x-auto no-scrollbar pb-6 pt-2"
        >
          {filteredTemplates.map((template) => (
            <div
              key={template.id}
              className="snap-start shrink-0 w-[300px] sm:w-[360px] lg:w-[390px] rounded-2xl bg-[#0f172a] border border-white/10 hover:border-indigo-500/40 p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 group"
            >
              {/* Card Top: Code Mockup Frame */}
              <div>
                <div className="relative h-52 sm:h-56 w-full rounded-xl overflow-hidden mb-4 group-hover:scale-[1.01] transition-transform duration-200">
                  <CodeMockup type={template.mockupType} />
                  
                  {/* Floating Live Badge */}
                  <div className="absolute top-2.5 right-2.5">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono bg-[#090d16]/90 backdrop-blur-md text-emerald-400 border border-emerald-500/30 shadow-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live Preview Ready
                    </span>
                  </div>
                </div>

                {/* Meta Row: Category & SLA */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono text-indigo-400 font-semibold uppercase tracking-wider">
                    {template.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-400">
                    <Clock className="w-3 h-3 text-indigo-400" />
                    <span>Ready in {template.readyInHours}h</span>
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {template.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                  {template.tagline}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {template.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-white/5 text-slate-300 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Feature Checklist */}
                <ul className="mt-4 space-y-1.5 text-xs text-slate-300 border-t border-white/5 pt-3">
                  {template.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span className="truncate">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Bottom: Clear ₹ Pricing & Actions */}
              <div className="mt-6 pt-4 border-t border-white/10 space-y-3">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">Full Price</span>
                    <div className="text-lg font-bold text-white font-mono">
                      ₹{template.fullPrice.toLocaleString('en-IN')}
                    </div>
                  </div>
                  
                  {/* Highlighted 10% Token Pill */}
                  <div className="text-right">
                    <span className="text-[10px] text-indigo-400 uppercase tracking-wider font-mono font-semibold">10% Token Escrow</span>
                    <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs sm:text-sm font-mono font-bold">
                      Pay ₹{template.tokenPrice.toLocaleString('en-IN')}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    onClick={() => onSelectPreview(template)}
                    className="min-h-[40px] px-3 py-2 rounded-xl text-xs font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-slate-400" />
                    <span>Live Preview</span>
                  </button>

                  <button
                    onClick={() => onSelectBook(template)}
                    className="min-h-[40px] px-3 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 shadow-md shadow-indigo-600/30 flex items-center justify-center gap-1.5 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                  >
                    <span>Book 10%</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex sm:hidden items-center justify-between text-xs text-slate-400 pt-2 px-1">
          <span>Swipe horizontally to browse &rarr;</span>
          <span className="font-mono text-indigo-400">{filteredTemplates.length} Available</span>
        </div>

      </div>
    </section>
  );
}
