'use client';

import React, { useState, useMemo } from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Check, 
  Globe, 
  Code2, 
  ChevronRight,
  Search,
  Filter
} from 'lucide-react';
import { TEMPLATES, CATEGORIES } from '@/data/templates';
import { useMarketplace } from '@/context/MarketplaceContext';
import TemplateCard from '@/components/TemplateCard';
import CodeMockup from '@/components/CodeMockup';
import CustomQuoteBuilder from '@/components/CustomQuoteBuilder';
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
  const [heroTemplateId, setHeroTemplateId] = useState<string>('aura-commerce');
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
    <div className="w-full flex flex-col items-center">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION                                                          */}
      {/* ========================================================================= */}
      <section className="relative w-full pt-12 sm:pt-20 pb-16 sm:pb-24 overflow-hidden border-b border-zinc-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Overline Trust Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 text-zinc-100 text-xs font-mono shadow-sm border border-zinc-800">
              <ShieldCheck className="w-4 h-4 text-zinc-300" />
              <span>10% TOKEN ESCROW MODEL</span>
              <span className="text-zinc-600">•</span>
              <span className="text-zinc-300 font-semibold">48-HOUR LIVE GUARANTEE</span>
            </div>
          </div>

          {/* Hero Headlines */}
          <div className="text-center max-w-4xl mx-auto space-y-5">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-950 leading-[1.15]">
              Production Websites, Deployed Live to Your Domain in 48 Hours.
            </h1>
            <p className="text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
              Skip traditional 3-month agency delays. Browse architected Next.js websites, reserve with a <span className="font-semibold text-zinc-900">10% token deposit</span>, and our engineers configure your custom domain, SSL, and hosting for a guaranteed 48-hour handover.
            </p>

            {/* Dual CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a 
                href="#catalog"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-200 group active:scale-98"
              >
                <span>Explore 6 Production Websites</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a 
                href="#how-it-works"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-zinc-100 text-zinc-900 border border-zinc-300 font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-all duration-200"
              >
                <Clock className="w-4 h-4 text-zinc-600" />
                <span>How 10% Booking Works</span>
              </a>
            </div>
          </div>

          {/* Interactive Live Preview Browser Frame with Dynamic 10% Calculation */}
          <div className="mt-12 sm:mt-16 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl border border-zinc-300 p-2 sm:p-4 shadow-2xl space-y-4">
              
              {/* Template Switcher Tabs on Top of Hero Preview */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-zinc-200 px-2">
                <div className="flex items-center gap-1.5 overflow-x-auto py-1">
                  <span className="text-xs font-mono uppercase text-zinc-400 mr-1 hidden sm:inline">Preview:</span>
                  {[
                    { id: 'aura-commerce', label: 'E-Commerce (Aura)' },
                    { id: 'nova-saas', label: 'Cloud SaaS (Nova)' },
                    { id: 'vanguard-realty', label: 'Real Estate (Vanguard)' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setHeroTemplateId(item.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        heroTemplateId === item.id
                          ? 'bg-zinc-950 text-white shadow-xs'
                          : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                {/* 10% Calculation Badge */}
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono text-zinc-500 hidden md:inline">Full: ${heroTemplate.fullPrice}</span>
                  <div className="px-2.5 py-1 rounded bg-zinc-950 text-white font-mono text-xs font-bold flex items-center gap-1.5 shadow-xs">
                    <span className="text-zinc-400 font-normal text-[10px] uppercase">10% Deposit:</span>
                    <span>${heroTemplate.tokenDeposit.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* The Code Mockup Frame */}
              <div className="h-[360px] sm:h-[460px] w-full rounded-xl overflow-hidden shadow-inner">
                <CodeMockup 
                  type={heroTemplate.mockupType} 
                  demoUrl={heroTemplate.demoUrl} 
                />
              </div>

              {/* Hero Frame Action Dock */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-2 pt-1 text-xs">
                <div className="flex items-center gap-4 text-zinc-600">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-zinc-950" />
                    <strong>48h Handover Timer</strong> starts upon deposit
                  </span>
                  <span className="hidden md:inline text-zinc-300">•</span>
                  <span className="hidden md:flex items-center gap-1.5">
                    <Globe className="w-4 h-4 text-zinc-950" />
                    Custom domain & DNS included
                  </span>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => setActivePreviewTemplate(heroTemplate)}
                    className="w-1/2 sm:w-auto px-4 py-2 border border-zinc-300 hover:border-zinc-950 rounded-lg font-semibold text-zinc-800 hover:bg-zinc-50 transition-colors"
                  >
                    Expanded Preview
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveBookingTemplate(heroTemplate)}
                    className="w-1/2 sm:w-auto px-4 py-2 bg-zinc-950 hover:bg-zinc-800 text-white rounded-lg font-semibold flex items-center justify-center gap-1.5 shadow-xs transition-colors"
                  >
                    <span>Reserve with 10% (${heroTemplate.tokenDeposit.toFixed(2)})</span>
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
      <section className="w-full bg-white border-b border-zinc-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            
            <div className="space-y-1">
              <span className="text-2xl sm:text-3xl font-extrabold font-mono text-zinc-950">
                48 Hours
              </span>
              <span className="text-xs text-zinc-500 font-mono uppercase block">
                Guaranteed Handover SLA
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-2xl sm:text-3xl font-extrabold font-mono text-zinc-950">
                10% Token
              </span>
              <span className="text-xs text-zinc-500 font-mono uppercase block">
                Zero Full Payment Upfront
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-2xl sm:text-3xl font-extrabold font-mono text-zinc-950">
                99/100
              </span>
              <span className="text-xs text-zinc-500 font-mono uppercase block">
                Average Lighthouse Score
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-2xl sm:text-3xl font-extrabold font-mono text-zinc-950">
                100% Free
              </span>
              <span className="text-xs text-zinc-500 font-mono uppercase block">
                Domain & SSL Setup Included
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. HOW IT WORKS (3 STEPS)                                                */}
      {/* ========================================================================= */}
      <section id="how-it-works" className="w-full py-20 bg-[#fafafa] border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
              TRANSPARENT THREE-STEP WORKFLOW
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-950">
              How the 10% Token Model Works
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
              We eliminated upfront agency retainers and unpredictable delivery timelines. You only commit 10% to reserve and spin up servers. The rest is due once you inspect your live website.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            
            {/* Step 01 */}
            <div className="p-6 rounded-2xl bg-white border border-zinc-200/90 shadow-xs hover:shadow-lg transition-all duration-300 space-y-4 relative flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-xl bg-zinc-950 text-white font-mono font-bold text-sm flex items-center justify-center">
                    01
                  </span>
                  <span className="text-[11px] font-mono text-zinc-400 uppercase">Interactive Preview</span>
                </div>
                <h3 className="text-lg font-bold text-zinc-950">
                  Browse & Select Template
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  Filter by your industry: E-Commerce, Agency, Real Estate, Healthcare, Restaurant, or Portfolio. Test the interactive UI wireframes across desktop, tablet, and mobile viewports.
                </p>
              </div>
              <div className="pt-4 border-t border-zinc-100 flex items-center gap-1.5 text-xs text-zinc-600">
                <Check className="w-4 h-4 text-zinc-900 shrink-0" />
                <span>Zero generic themes; Next.js 16 code</span>
              </div>
            </div>

            {/* Step 02 */}
            <div className="p-6 rounded-2xl bg-white border-2 border-zinc-950 shadow-md hover:shadow-xl transition-all duration-300 space-y-4 relative flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-xl bg-zinc-950 text-white font-mono font-bold text-sm flex items-center justify-center">
                    02
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-200 uppercase font-semibold">
                    10% ESCROW
                  </span>
                </div>
                <h3 className="text-lg font-bold text-zinc-950">
                  Pay 10% Token Deposit
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  Reserve your template and dedicated engineering desk with a simple 10% token deposit. Zero full payment upfront. If we fail to deploy within 48 hours, your 10% is immediately refunded.
                </p>
              </div>
              <div className="pt-4 border-t border-zinc-100 flex items-center gap-1.5 text-xs text-zinc-900 font-semibold">
                <ShieldCheck className="w-4 h-4 text-zinc-900 shrink-0" />
                <span>Protected by Razorpay & Stripe Escrow</span>
              </div>
            </div>

            {/* Step 03 */}
            <div className="p-6 rounded-2xl bg-white border border-zinc-200/90 shadow-xs hover:shadow-lg transition-all duration-300 space-y-4 relative flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-xl bg-zinc-950 text-white font-mono font-bold text-sm flex items-center justify-center">
                    03
                  </span>
                  <span className="text-[11px] font-mono text-zinc-400 uppercase">Live Delivery</span>
                </div>
                <h3 className="text-lg font-bold text-zinc-950">
                  Domain Setup & 48h Handover
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  Our DevOps engineers configure your DNS records, install free automated 256-bit SSL certificates, and hook up custom branding. You test the live site, approve it, and pay the remaining 90%.
                </p>
              </div>
              <div className="pt-4 border-t border-zinc-100 flex items-center gap-1.5 text-xs text-zinc-600">
                <Check className="w-4 h-4 text-zinc-900 shrink-0" />
                <span>Turnkey source code & admin ownership</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. WEBSITES CATALOG SECTION                                              */}
      {/* ========================================================================= */}
      <section id="catalog" className="w-full py-20 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-zinc-100 text-zinc-700 text-xs font-mono uppercase">
                <Code2 className="w-3.5 h-3.5 text-zinc-900" />
                <span>Production Marketplace Catalog</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-950">
                Curated Production Websites
              </h2>
              <p className="text-xs sm:text-sm text-zinc-500 max-w-xl">
                Every website includes clean responsive code, 48-hour live domain deployment, and 10% token deposit reservation.
              </p>
            </div>

            {/* Live Search Indicator (if any active) */}
            {searchQuery && (
              <div className="flex items-center gap-2 p-2 rounded-lg bg-zinc-100 text-xs font-mono text-zinc-700">
                <Search className="w-3.5 h-3.5 text-zinc-500" />
                <span>Filtered by: &quot;{searchQuery}&quot;</span>
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="ml-2 text-zinc-950 font-bold hover:underline"
                >
                  Clear
                </button>
              </div>
            )}
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none border-b border-zinc-100">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-150 ${
                    isActive
                      ? 'bg-zinc-950 text-white shadow-xs'
                      : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Catalog Cards Grid (6 Products) */}
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
            <div className="p-12 text-center rounded-2xl bg-zinc-50 border border-zinc-200 space-y-4 max-w-md mx-auto">
              <div className="w-12 h-12 rounded-full bg-zinc-200 mx-auto flex items-center justify-center text-zinc-700">
                <Filter className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-zinc-900">No websites match your search</h3>
              <p className="text-xs text-zinc-500">
                Try switching categories or clearing your search term to see all 6 available production templates.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="px-4 py-2 rounded-lg bg-zinc-950 text-white text-xs font-semibold hover:bg-zinc-800"
              >
                Reset All Filters
              </button>
            </div>
          )}

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. ABOUT US / ARCHITECTURAL PHILOSOPHY                                   */}
      {/* ========================================================================= */}
      <section id="about" className="w-full py-20 bg-[#fafafa] border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                ABOUT OUR DEPLOYMENT HUB
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-950 leading-tight">
                Why We Built the 10% Token Guarantee Model
              </h2>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Modern businesses shouldn’t have to wait three months or gamble $5,000 on an agency that might disappear halfway through. Traditional agencies demand 50% upfront before writing a single line of code.
              </p>
              <p className="text-sm text-zinc-600 leading-relaxed">
                WebsiteBuilder reverses the power dynamic. We build the complete architectural codebases in advance. You inspect the real, working design before booking. You pay a 10% token deposit to trigger our DevOps engineers to connect your domain, configure SSL, and verify payments. The remaining 90% is only payable when you are completely satisfied with the live site.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-3.5 rounded-lg bg-white border border-zinc-200 space-y-1">
                  <span className="text-xs font-bold text-zinc-950 block">48-Hour SLA</span>
                  <span className="text-[11px] text-zinc-500">From deposit to live DNS propagation</span>
                </div>
                <div className="p-3.5 rounded-lg bg-white border border-zinc-200 space-y-1">
                  <span className="text-xs font-bold text-zinc-950 block">Full Ownership</span>
                  <span className="text-[11px] text-zinc-500">Zero lock-in; full Next.js source code</span>
                </div>
              </div>
            </div>

            {/* Comparison Matrix Table */}
            <div className="lg:col-span-6 bg-white rounded-2xl border border-zinc-200 shadow-lg p-6 sm:p-7 space-y-6">
              <h3 className="text-sm font-mono uppercase tracking-wider text-zinc-500 border-b border-zinc-100 pb-3">
                Traditional Agency vs. WebsiteBuilder Hub
              </h3>

              <div className="space-y-4 text-xs">
                
                {/* Metric 1 */}
                <div className="grid grid-cols-12 gap-2 pb-3 border-b border-zinc-100">
                  <div className="col-span-4 font-semibold text-zinc-900">Upfront Capital:</div>
                  <div className="col-span-4 text-zinc-500 line-through">50% upfront deposit</div>
                  <div className="col-span-4 font-bold text-zinc-950">10% Token Deposit</div>
                </div>

                {/* Metric 2 */}
                <div className="grid grid-cols-12 gap-2 pb-3 border-b border-zinc-100">
                  <div className="col-span-4 font-semibold text-zinc-900">Delivery Window:</div>
                  <div className="col-span-4 text-zinc-500">6 to 12 weeks</div>
                  <div className="col-span-4 font-bold text-zinc-950">Guaranteed 48 Hours</div>
                </div>

                {/* Metric 3 */}
                <div className="grid grid-cols-12 gap-2 pb-3 border-b border-zinc-100">
                  <div className="col-span-4 font-semibold text-zinc-900">Code Quality:</div>
                  <div className="col-span-4 text-zinc-500">Bloated WordPress plugins</div>
                  <div className="col-span-4 font-bold text-zinc-950">Pure Next.js 16 + React 19</div>
                </div>

                {/* Metric 4 */}
                <div className="grid grid-cols-12 gap-2 pb-3 border-b border-zinc-100">
                  <div className="col-span-4 font-semibold text-zinc-900">Domain & SSL:</div>
                  <div className="col-span-4 text-zinc-500">Billed as extra addons</div>
                  <div className="col-span-4 font-bold text-zinc-950">Turnkey Included Free</div>
                </div>

                {/* Metric 5 */}
                <div className="grid grid-cols-12 gap-2">
                  <div className="col-span-4 font-semibold text-zinc-900">Refund Guarantee:</div>
                  <div className="col-span-4 text-zinc-500">Non-refundable retainer</div>
                  <div className="col-span-4 font-bold text-zinc-950">100% Token Refund SLA</div>
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
      {/* 7. BLOGS & DEPLOYMENT GUIDES SECTION                                     */}
      {/* ========================================================================= */}
      <section id="blogs" className="w-full py-20 bg-[#fafafa] border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                ENGINEERING INTELLIGENCE & INSIGHTS
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-950 mt-1">
                Deployment Playbooks & Guides
              </h2>
            </div>
            <span className="text-xs text-zinc-500 font-mono">Curated by our DevOps and Frontend Leads</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Blog Post 1 */}
            <article className="p-6 rounded-2xl bg-white border border-zinc-200 hover:border-zinc-400 transition-all duration-200 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span>ARCHITECTURE</span>
                  <span>5 MIN READ</span>
                </div>
                <h3 className="text-base font-bold text-zinc-950 leading-snug">
                  The 48-Hour Deployment Playbook: How We Provision Next.js 16 to Edge Networks
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  A deep technical breakdown of our DNS routing, automated SSL certificate issuance, and sub-second global caching pipelines.
                </p>
              </div>
              <div className="pt-3 border-t border-zinc-100 flex items-center justify-between text-xs font-semibold text-zinc-900">
                <span>Read Technical Guide</span>
                <ChevronRight className="w-4 h-4 text-zinc-400" />
              </div>
            </article>

            {/* Blog Post 2 */}
            <article className="p-6 rounded-2xl bg-white border border-zinc-200 hover:border-zinc-400 transition-all duration-200 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span>ECONOMICS</span>
                  <span>4 MIN READ</span>
                </div>
                <h3 className="text-base font-bold text-zinc-950 leading-snug">
                  Why 10% Token Deposits Are Replacing 50% Upfront Agency Retainers
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  How milestone escrow contracts protect small business cashflow while enforcing hard delivery deadlines on software engineers.
                </p>
              </div>
              <div className="pt-3 border-t border-zinc-100 flex items-center justify-between text-xs font-semibold text-zinc-900">
                <span>Read Economics Study</span>
                <ChevronRight className="w-4 h-4 text-zinc-400" />
              </div>
            </article>

            {/* Blog Post 3 */}
            <article className="p-6 rounded-2xl bg-white border border-zinc-200 hover:border-zinc-400 transition-all duration-200 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span>CONVERSION DATA</span>
                  <span>6 MIN READ</span>
                </div>
                <h3 className="text-base font-bold text-zinc-950 leading-snug">
                  Headless Commerce Conversion Rates: Analysis of 120,000 Checkout Sessions
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Examining how instantaneous drawer carts, Razorpay one-click hooks, and 99+ Core Web Vitals elevate transaction rates by 34%.
                </p>
              </div>
              <div className="pt-3 border-t border-zinc-100 flex items-center justify-between text-xs font-semibold text-zinc-900">
                <span>Read Case Study</span>
                <ChevronRight className="w-4 h-4 text-zinc-400" />
              </div>
            </article>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. BOTTOM NOTIFICATION & DISCOUNT BANNER                                 */}
      {/* ========================================================================= */}
      <BottomDiscountBanner />

    </div>
  );
}
