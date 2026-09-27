'use client';

import React, { useState, useMemo } from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Globe, 
  Code2, 
  Filter,
  Search,
  Sliders,
  Check
} from 'lucide-react';
import { TEMPLATES, CATEGORIES } from '@/data/templates';
import { useMarketplace } from '@/context/MarketplaceContext';
import TemplateCard from '@/components/TemplateCard';
import CodeMockup from '@/components/CodeMockup';
import CustomQuoteBuilder from '@/components/CustomQuoteBuilder';
import FaqSection from '@/components/FaqSection';
import BottomDiscountBanner from '@/components/BottomDiscountBanner';

export default function HomePage() {
  const { 
    selectedCategory, 
    setSelectedCategory, 
    searchQuery, 
    setSearchQuery,
    setActivePreviewTemplate,
    setActiveBookingTemplate 
  } = useMarketplace();

  // Hero interactive template switcher
  const [heroTemplateId, setHeroTemplateId] = useState<string>('aura-storefront');
  const heroTemplate = useMemo(() => {
    return TEMPLATES.find(t => t.id === heroTemplateId) || TEMPLATES[0];
  }, [heroTemplateId]);

  // Filtered templates based on category & search query
  const filteredTemplates = useMemo(() => {
    return TEMPLATES.filter((tpl) => {
      const matchesCategory = selectedCategory === 'All' || tpl.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || (
        tpl.name.toLowerCase().includes(q) ||
        tpl.category.toLowerCase().includes(q) ||
        tpl.tagline.toLowerCase().includes(q) ||
        tpl.description.toLowerCase().includes(q) ||
        tpl.techStack.some(tech => tech.toLowerCase().includes(q)) ||
        tpl.features.some(feat => feat.toLowerCase().includes(q))
      );
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="w-full flex flex-col items-center overflow-x-hidden">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION                                                          */}
      {/* ========================================================================= */}
      <section className="relative w-full pt-10 sm:pt-16 lg:pt-20 pb-16 sm:pb-24 overflow-hidden border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Trust Badge at the Top */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50/90 text-indigo-700 text-xs font-semibold border border-indigo-100 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-indigo-600" />
              <span>48-Hour Live Delivery Guarantee</span>
              <span className="text-indigo-300">•</span>
              <span className="font-bold">10% Token Escrow</span>
            </div>
          </div>

          {/* Balanced, Comfortable Headlines (NO screaming oversized text) */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              Launch Your Dream Website in 48 Hours. <br className="hidden sm:inline" />
              <span className="text-indigo-600">Start with Just 10% Down.</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Browse our curated marketplace of production-ready Next.js websites. Reserve your design with a simple 10% token deposit. Our engineering team connects your domain, configures SSL & hosting, and launches live in 48 hours.
            </p>

            {/* Dual Touch-Friendly CTAs */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a 
                href="#catalog"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-indigo-500/20 hover:shadow-lg transition-all duration-200 group min-h-[46px]"
              >
                <span>Browse Ready Websites</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>

              <a 
                href="#quote-builder"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-800 border border-slate-200 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs transition-all duration-200 min-h-[46px]"
              >
                <Sliders className="w-4 h-4 text-slate-500" />
                <span>Calculate 10% Token</span>
              </a>
            </div>
          </div>

          {/* Visual Showcase: Sleek Interactive Preview Container */}
          <div className="mt-12 sm:mt-16 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl border border-slate-200/90 p-3 sm:p-5 shadow-xl shadow-slate-200/40 space-y-4">
              
              {/* Template Switcher Tabs */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100 px-1">
                <div className="flex items-center gap-1.5 overflow-x-auto py-1 scrollbar-none">
                  <span className="text-xs font-semibold text-slate-400 mr-1 hidden sm:inline">Preview:</span>
                  {[
                    { id: 'aura-storefront', label: 'E-Commerce (Aura)' },
                    { id: 'nova-saas', label: 'SaaS Cloud (Nova)' },
                    { id: 'vanguard-realty', label: 'Real Estate (Vanguard)' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setHeroTemplateId(item.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all min-h-[36px] flex items-center ${
                        heroTemplateId === item.id
                          ? 'bg-indigo-600 text-white shadow-xs'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                {/* 10% Token Calculation Highlight */}
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400 hidden md:inline">
                    Full Price: {heroTemplate.currency}{heroTemplate.fullPrice.toLocaleString('en-IN')}
                  </span>
                  <div className="px-3 py-1 rounded-lg bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold flex items-center gap-1.5 shadow-xs">
                    <span className="text-slate-500 font-medium text-[11px]">Pay Today:</span>
                    <span className="font-extrabold">{heroTemplate.currency}{heroTemplate.tokenDeposit.toLocaleString('en-IN')}</span>
                    <span className="text-[10px] bg-indigo-600 text-white px-1.5 py-0.2 rounded font-semibold">10%</span>
                  </div>
                </div>
              </div>

              {/* High-Fidelity Code-Rendered Mockup Frame */}
              <div className="h-[360px] sm:h-[440px] w-full rounded-xl overflow-hidden shadow-inner">
                <CodeMockup 
                  type={heroTemplate.mockupType} 
                  demoUrl={heroTemplate.demoUrl} 
                />
              </div>

              {/* Bottom Card Action Dock */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-1 pt-1 text-xs">
                <div className="flex items-center gap-4 text-slate-600">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Clock className="w-4 h-4 text-indigo-600" />
                    <strong>48h Handover Timer</strong> starts upon reservation
                  </span>
                  <span className="hidden md:inline text-slate-300">•</span>
                  <span className="hidden md:flex items-center gap-1.5">
                    <Globe className="w-4 h-4 text-indigo-600" />
                    Custom domain & SSL included
                  </span>
                </div>

                <div className="flex items-center gap-2.5 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => setActivePreviewTemplate(heroTemplate)}
                    className="w-1/2 sm:w-auto px-4 py-2 border border-slate-200 hover:border-slate-300 rounded-xl font-semibold text-slate-700 hover:bg-slate-50 transition-colors min-h-[42px]"
                  >
                    Live Preview
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveBookingTemplate(heroTemplate)}
                    className="w-1/2 sm:w-auto px-4 py-2 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white rounded-xl font-semibold flex items-center justify-center gap-1.5 shadow-xs transition-colors min-h-[42px]"
                  >
                    <span>Reserve for {heroTemplate.currency}{heroTemplate.tokenDeposit.toLocaleString('en-IN')}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. VALUE PROPOSITIONS & TRUST METRICS BAR                                 */}
      {/* ========================================================================= */}
      <section className="w-full bg-white border-b border-slate-200/80 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            
            <div className="space-y-1">
              <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                48 Hours
              </span>
              <span className="text-xs text-slate-500 font-medium block">
                Guaranteed Handover SLA
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-2xl sm:text-3xl font-extrabold text-indigo-600">
                10% Token
              </span>
              <span className="text-xs text-slate-500 font-medium block">
                Zero Full Payment Upfront
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                99/100
              </span>
              <span className="text-xs text-slate-500 font-medium block">
                Average Lighthouse Speed
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                100% Free
              </span>
              <span className="text-xs text-slate-500 font-medium block">
                Domain & SSL Setup Included
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. HOW IT WORKS (3 CLEAR, VISUAL STEPS)                                  */}
      {/* ========================================================================= */}
      <section id="how-it-works" className="w-full py-16 sm:py-24 bg-slate-50/60 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2.5">
            <span className="text-xs font-mono uppercase tracking-wider text-indigo-600 font-semibold">
              TRANSPARENT 3-STEP PROCESS
            </span>
            <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-slate-900">
              How the 10% Token Booking Model Works
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We eliminated upfront agency retainers and unpredictable delivery timelines. You only commit 10% to reserve and spin up servers. The remaining 90% is due once you inspect your live website.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Step 01 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 space-y-4 flex flex-col justify-between">
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-700 font-bold text-sm flex items-center justify-center">
                    01
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 font-semibold uppercase">
                    Interactive
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Browse & Pick Your Design
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Explore industry-tailored websites for E-Commerce, SaaS, Restaurants, Real Estate, Clinics, and Portfolios. Inspect the live UI wireframes across desktop, tablet, and mobile viewports.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-600 font-medium">
                <Check className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>Zero generic templates; Next.js 16 code</span>
              </div>
            </div>

            {/* Step 02 */}
            <div className="p-6 rounded-2xl bg-white border-2 border-indigo-600 shadow-md shadow-indigo-500/10 space-y-4 flex flex-col justify-between relative">
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-xl bg-indigo-600 text-white font-bold text-sm flex items-center justify-center shadow-xs">
                    02
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100 uppercase">
                    10% ESCROW
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Pay 10% Token Deposit
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Reserve your template and dedicated engineering desk with just a 10% deposit (e.g. ₹1,499 on ₹14,999). Zero full payment upfront. If we fail to launch in 48 hours, your 10% is 100% refunded.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-indigo-700 font-semibold">
                <ShieldCheck className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>Protected by Razorpay & Stripe Escrow</span>
              </div>
            </div>

            {/* Step 03 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 space-y-4 flex flex-col justify-between">
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-700 font-bold text-sm flex items-center justify-center">
                    03
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 font-semibold uppercase">
                    48h Handover
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Domain Connect & Live Handover
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Our DevOps engineers configure your DNS records, install automated 256-bit SSL, and customize your brand assets. You test the live site, approve it, and pay the remaining 90%.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-600 font-medium">
                <Check className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>Turnkey source code & admin ownership</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. CURATED WEBSITES CATALOG SECTION                                      */}
      {/* ========================================================================= */}
      <section id="catalog" className="w-full py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold border border-indigo-100">
                <Code2 className="w-3.5 h-3.5 text-indigo-600" />
                <span>Production Marketplace Catalog</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                Curated Production Websites
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 max-w-xl">
                Every website includes responsive Next.js 16 source code, 48-hour live domain setup, and a simple 10% token deposit reservation.
              </p>
            </div>

            {/* Live Search Indicator (if any active) */}
            {searchQuery && (
              <div className="flex items-center gap-2 p-2 px-3 rounded-xl bg-slate-100 text-xs text-slate-700">
                <Search className="w-3.5 h-3.5 text-slate-500" />
                <span>Filtered by: &quot;{searchQuery}&quot;</span>
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="ml-2 text-indigo-600 font-bold hover:underline"
                >
                  Clear
                </button>
              </div>
            )}
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none border-b border-slate-100">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-150 min-h-[40px] flex items-center ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Responsive Cards Grid (1 col mobile, 2 col tablet, 3 col desktop) */}
          {filteredTemplates.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredTemplates.map((template) => (
                <TemplateCard
                  key={template.id}
                  template={template}
                  onPreview={(tpl) => setActivePreviewTemplate(tpl)}
                  onBook={(tpl) => setActiveBookingTemplate(tpl)}
                />
              ))}
            </div>
          ) : (
            <div className="p-12 text-center rounded-2xl bg-slate-50 border border-slate-200 space-y-4 max-w-md mx-auto">
              <div className="w-12 h-12 rounded-full bg-slate-200 mx-auto flex items-center justify-center text-slate-600">
                <Filter className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">No websites match your filter</h3>
              <p className="text-xs text-slate-500">
                Try switching categories or clearing your search keywords to view all available marketplace websites.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="px-4 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-700 min-h-[40px]"
              >
                Reset All Filters
              </button>
            </div>
          )}

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. ABOUT US / THE 10% ESCROW ADVANTAGE                                   */}
      {/* ========================================================================= */}
      <section id="about" className="w-full py-16 sm:py-24 bg-slate-50/60 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-mono uppercase tracking-wider text-indigo-600 font-semibold">
                WHY WE EXIST
              </span>
              <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-slate-900 leading-tight">
                Ending the 50% Upfront Agency Nightmare
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Founders often waste 8 to 12 weeks and ₹50,000 to ₹1,50,000 on agencies that demand heavy upfront retainers before writing code, only to deliver bloated templates that break on mobile.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                WebsiteBuilder flips the script. We build production-ready Next.js architectures in advance. You test the live UI before booking. You pay a simple 10% token deposit to trigger our DevOps team to connect your domain and configure SSL. You pay the remaining 90% only when you review and love the live site.
              </p>

              <div className="grid grid-cols-2 gap-3.5 pt-1">
                <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-xs space-y-1">
                  <span className="text-xs font-bold text-slate-900 block">48-Hour SLA</span>
                  <span className="text-[11px] text-slate-500">From deposit to live DNS propagation</span>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-xs space-y-1">
                  <span className="text-xs font-bold text-slate-900 block">Full Code Ownership</span>
                  <span className="text-[11px] text-slate-500">Zero lock-in; pure Next.js 16 source</span>
                </div>
              </div>
            </div>

            {/* Comparison Matrix Table (Clean, Eye-Pleasing) */}
            <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-7 space-y-5">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                  Traditional Agency vs. WebsiteBuilder Hub
                </h3>
              </div>

              <div className="space-y-4 text-xs">
                
                {/* Metric 1 */}
                <div className="grid grid-cols-12 gap-2 pb-3.5 border-b border-slate-100 items-center">
                  <div className="col-span-4 font-bold text-slate-900">Upfront Capital:</div>
                  <div className="col-span-4 text-slate-400 line-through">50% upfront retainer</div>
                  <div className="col-span-4 font-bold text-indigo-700">Only 10% Token</div>
                </div>

                {/* Metric 2 */}
                <div className="grid grid-cols-12 gap-2 pb-3.5 border-b border-slate-100 items-center">
                  <div className="col-span-4 font-bold text-slate-900">Delivery Time:</div>
                  <div className="col-span-4 text-slate-400">6 to 12 weeks</div>
                  <div className="col-span-4 font-bold text-indigo-700">Guaranteed 48 Hours</div>
                </div>

                {/* Metric 3 */}
                <div className="grid grid-cols-12 gap-2 pb-3.5 border-b border-slate-100 items-center">
                  <div className="col-span-4 font-bold text-slate-900">Code Quality:</div>
                  <div className="col-span-4 text-slate-400">Slow WordPress plugins</div>
                  <div className="col-span-4 font-bold text-indigo-700">Next.js 16 + React 19</div>
                </div>

                {/* Metric 4 */}
                <div className="grid grid-cols-12 gap-2 pb-3.5 border-b border-slate-100 items-center">
                  <div className="col-span-4 font-bold text-slate-900">Domain & SSL:</div>
                  <div className="col-span-4 text-slate-400">Billed as costly addons</div>
                  <div className="col-span-4 font-bold text-indigo-700">Turnkey Included Free</div>
                </div>

                {/* Metric 5 */}
                <div className="grid grid-cols-12 gap-2 items-center">
                  <div className="col-span-4 font-bold text-slate-900">Refund Policy:</div>
                  <div className="col-span-4 text-slate-400">Non-refundable deposit</div>
                  <div className="col-span-4 font-bold text-indigo-700">100% Token Refund SLA</div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. GET A QUOTE / CUSTOM REQUIREMENT BUILDER                              */}
      {/* ========================================================================= */}
      <CustomQuoteBuilder />

      {/* ========================================================================= */}
      {/* 7. TRUST, SECURITY & FAQ SECTION                                         */}
      {/* ========================================================================= */}
      <FaqSection />

      {/* ========================================================================= */}
      {/* 8. BOTTOM NOTIFICATION & DISCOUNT BANNER                                 */}
      {/* ========================================================================= */}
      <BottomDiscountBanner />

    </div>
  );
}
