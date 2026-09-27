'use client';

import React, { useRef, useState, useMemo } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  ArrowRight, 
  Eye, 
  Check, 
  ShieldCheck,
  ShoppingBag,
  Building2,
  Utensils,
  Building,
  Activity,
  Layers
} from 'lucide-react';
import { TEMPLATES, CATEGORIES, Template, Category } from '@/data/templates';

interface TemplateSliderProps {
  onSelectPreview: (template: Template) => void;
  onSelectBook: (template: Template) => void;
  searchFilter?: string;
}

export default function TemplateSlider({ 
  onSelectPreview, 
  onSelectBook,
  searchFilter = ''
}: TemplateSliderProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Filter templates by category and search
  const filteredTemplates = useMemo(() => {
    let list = TEMPLATES;
    if (selectedCategory !== 'All') {
      list = list.filter((t) => t.category === selectedCategory);
    }
    if (searchFilter.trim()) {
      const q = searchFilter.toLowerCase();
      list = list.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.tagline.toLowerCase().includes(q) ||
          t.category.toLowerCase().includes(q) ||
          t.techStack.some((tech) => tech.toLowerCase().includes(q))
      );
    }
    return list;
  }, [selectedCategory, searchFilter]);

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

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'E-Commerce':
        return <ShoppingBag className="w-4 h-4 text-cyan-400" />;
      case 'Corporate Agency':
        return <Building2 className="w-4 h-4 text-blue-400" />;
      case 'Restaurant & Cafe':
        return <Utensils className="w-4 h-4 text-cyan-400" />;
      case 'Real Estate':
        return <Building className="w-4 h-4 text-blue-400" />;
      case 'Healthcare':
        return <Activity className="w-4 h-4 text-cyan-400" />;
      default:
        return <Layers className="w-4 h-4 text-blue-400" />;
    }
  };

  return (
    <section id="websites" className="py-20 sm:py-28 relative bg-[#060a12] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>Production Codebases &bull; 10% Escrow Model</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
              Curated Production Websites
            </h2>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Test production live builds. Pay a 10% deposit into escrow to reserve. Our engineering team binds your domain, provisions SSL &amp; CDN, and hands over your live site in 48 hours.
            </p>
          </div>

          {/* Slider Arrow Controls (Desktop) */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="w-11 h-11 rounded-xl border border-slate-800 bg-slate-900/80 hover:bg-slate-800 hover:border-slate-700 text-slate-200 flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed active:scale-95 shadow-md cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="w-11 h-11 rounded-xl border border-slate-800 bg-slate-900/80 hover:bg-slate-800 hover:border-slate-700 text-slate-200 flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed active:scale-95 shadow-md cursor-pointer"
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
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 border border-blue-500'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800/80'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Horizontal Slider / Carousel Container */}
        <div
          ref={scrollContainerRef}
          onScroll={updateScrollButtons}
          className="scroll-smooth snap-x snap-mandatory flex gap-6 overflow-x-auto no-scrollbar pb-6 pt-2"
        >
          {filteredTemplates.map((template) => (
            <div
              key={template.id}
              className="snap-start shrink-0 w-[310px] sm:w-[370px] lg:w-[390px] rounded-2xl sm:rounded-3xl bg-slate-900/80 backdrop-blur-xl border border-slate-800 hover:border-blue-500/40 p-5 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 group"
            >
              {/* Card Top Details */}
              <div>
                {/* Meta Row: Category with Icon + Ready in 48h Badge */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-slate-950/60 border border-slate-800 text-[11px] font-mono text-cyan-400 font-semibold">
                    {getCategoryIcon(template.category)}
                    <span>{template.category}</span>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono bg-blue-500/10 text-cyan-300 border border-blue-500/20">
                    <Clock className="w-3 h-3 text-cyan-400" />
                    <span>Ready in {template.readyInHours}h</span>
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {template.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1.5 line-clamp-2 leading-relaxed">
                  {template.tagline}
                </p>

                {/* Tech Stack Metadata Pills */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {template.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-slate-950/60 text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Feature Checklist */}
                <ul className="mt-4 space-y-2 text-xs text-slate-300 border-t border-slate-800/80 pt-3">
                  {template.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="truncate">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Bottom: Transparent ₹ Pricing & Actions */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 space-y-3">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider font-mono font-medium">
                      Full Price
                    </span>
                    <div className="text-lg sm:text-xl font-bold text-white font-mono">
                      ₹{template.fullPrice.toLocaleString('en-IN')}
                    </div>
                  </div>
                  
                  {/* Highlighted 10% Token Pill */}
                  <div className="text-right">
                    <span className="text-[10px] text-cyan-400 uppercase tracking-wider font-mono font-bold">
                      10% Token Escrow
                    </span>
                    <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-blue-500/10 text-cyan-300 border border-blue-500/30 text-xs sm:text-sm font-mono font-bold">
                      Pay ₹{template.tokenPrice.toLocaleString('en-IN')}
                    </div>
                  </div>
                </div>

                {/* Action Buttons: Live Preview & Reserve with 10% Token */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    onClick={() => onSelectPreview(template)}
                    className="min-h-[42px] px-3 py-2 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/80 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-slate-400" />
                    <span>Live Preview</span>
                  </button>

                  <button
                    onClick={() => onSelectBook(template)}
                    className="min-h-[42px] px-3 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-md shadow-blue-500/25 flex items-center justify-center gap-1.5 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                  >
                    <span>Reserve 10%</span>
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-200" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Empty state if search has no results */}
        {filteredTemplates.length === 0 && (
          <div className="text-center py-12 bg-slate-900/40 rounded-2xl border border-slate-800 text-slate-400">
            <p className="text-sm">No website templates found matching your search.</p>
            <button
              onClick={() => setSelectedCategory('All')}
              className="mt-3 text-xs text-cyan-400 underline cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Mobile Swipe Hint */}
        <div className="flex sm:hidden items-center justify-between text-xs text-slate-400 pt-2 px-1">
          <span>Swipe horizontally to explore &rarr;</span>
          <span className="font-mono text-cyan-400 font-semibold">{filteredTemplates.length} Available</span>
        </div>

      </div>
    </section>
  );
}
