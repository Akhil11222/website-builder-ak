'use client';

import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Clock, 
  Globe, 
  ArrowRight, 
  Layers, 
  Check, 
  Server, 
  Cpu, 
  FileCode2, 
  Sparkles, 
  X,
  User,
  BookOpen
} from 'lucide-react';
import Header from '@/components/Header';
import HeroSystemShowcase from '@/components/HeroSystemShowcase';
import TemplateSlider from '@/components/TemplateSlider';
import PreviewBookingModal from '@/components/PreviewBookingModal';
import RequirementQuoteForm from '@/components/RequirementQuoteForm';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { Template } from '@/data/templates';

export default function HomePage() {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [modalMode, setModalMode] = useState<'preview' | 'book'>('preview');
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Supplementary Modals for full navigation interactivity
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isBlogsModalOpen, setIsBlogsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleOpenPreview = (template: Template) => {
    setSelectedTemplate(template);
    setModalMode('preview');
    setIsModalOpen(true);
  };

  const handleOpenBook = (template: Template) => {
    setSelectedTemplate(template);
    setModalMode('book');
    setIsModalOpen(true);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#f8fafc] text-slate-900 overflow-x-hidden selection:bg-blue-600 selection:text-white">
      
      {/* SECTION 1: ENTERPRISE HEADER */}
      <Header
        onQuoteClick={() => scrollTo('quote')}
        onLoginClick={() => setIsLoginModalOpen(true)}
        onBlogsClick={() => setIsBlogsModalOpen(true)}
        onAboutClick={() => scrollTo('about')}
        onSearchQuery={(q) => setSearchQuery(q)}
      />

      <main className="relative">
        
        {/* SECTION 2: HERO SECTION (BALANCED 2-COLUMN ENTERPRISE LAYOUT) */}
        <section id="hero" className="relative pt-10 sm:pt-16 pb-16 sm:pb-24 overflow-hidden bg-gradient-to-b from-white via-blue-50/20 to-slate-50/50">
          
          {/* Subtle Top Aurora Glow Backdrop */}
          <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none -z-10"
            style={{
              background: 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(37, 99, 235, 0.08), transparent 70%)'
            }}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
              
              {/* Left Column: The Value Pitch */}
              <div className="lg:col-span-6 space-y-5 sm:space-y-6 text-center lg:text-left">
                
                {/* Trust Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-semibold shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                  <span>LIVE 48-HOUR DEPLOYMENT &bull; 10% TOKEN ESCROW</span>
                </div>

                {/* Main Headline */}
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
                  Production Websites, Deployed to Your Custom Domain in{' '}
                  <span className="text-blue-600">
                    48 Hours.
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  Browse engineered Next.js website templates. Pay just a 10% token deposit to reserve. Our engineering team binds your domain, provisions SSL &amp; hosting, and hands over your live site.
                </p>

                {/* Dual CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                  <button
                    onClick={() => scrollTo('websites')}
                    className="w-full sm:w-auto min-h-[46px] px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                  >
                    <span>Explore Ready Websites</span>
                    <ArrowRight className="w-4 h-4 text-blue-100" />
                  </button>

                  <button
                    onClick={() => scrollTo('quote')}
                    className="w-full sm:w-auto min-h-[46px] px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 shadow-2xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Book Free Consultation</span>
                  </button>
                </div>

                {/* Quick Feature Badges */}
                <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-5 text-xs text-slate-600 font-medium">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-blue-600" />
                    <span>100% Escrow Protected</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span>48h Turnaround SLA</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Globe className="w-4 h-4 text-blue-600" />
                    <span>Free Domain &amp; DNS Config</span>
                  </div>
                </div>

              </div>

              {/* Right Column: Live Interactive Real Deployment Widget */}
              <div className="lg:col-span-6 w-full">
                <HeroSystemShowcase />
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 3: WHAT WE DO (INSTANT CLARITY SECTION) */}
        <section className="py-20 sm:py-24 bg-slate-50/70 border-y border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-blue-600 font-semibold">
                Core Capabilities
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-slate-900">
                Engineered for Immediate Business Impact
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                We eliminate the traditional multi-month development slog with verified production software.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1 */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200/90 hover:border-blue-400 transition-all duration-300 space-y-4 shadow-sm hover:shadow-xl group">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Ready-Made Production Templates
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Pre-built, high-converting codebases configured with Next.js 15, responsive CSS, payment webhooks, and modern typography ready for instant rollout.
                </p>
                <div className="pt-2 text-xs font-mono text-blue-700 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-blue-600" />
                  <span>Tested on 360px to 4K</span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200/90 hover:border-blue-400 transition-all duration-300 space-y-4 shadow-sm hover:shadow-xl group">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Server className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Domain, SSL &amp; Cloud Hosting Handover
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We take away the technical nightmare—full Cloudflare DNS routing, automated 256-bit SSL certificates, and edge CDN server deployment included.
                </p>
                <div className="pt-2 text-xs font-mono text-blue-700 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-blue-600" />
                  <span>Zero Server Configuration</span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200/90 hover:border-blue-400 transition-all duration-300 space-y-4 shadow-sm hover:shadow-xl group">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  10% Escrow Risk-Free Booking
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  You commit only a 10% deposit upfront locked in escrow. The remaining 90% balance is released strictly after you inspect your website live on your domain.
                </p>
                <div className="pt-2 text-xs font-mono text-blue-700 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-blue-600" />
                  <span>100% Refundable if Late</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 4: HOW IT WORKS (STEP-BY-STEP INTERACTIVE GUIDE) */}
        <section id="how-it-works" className="py-20 sm:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-blue-600 font-semibold">
                Transparent Execution Roadmap
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-slate-900">
                From Selection to Live Handover in 3 Steps
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Experience a smooth, risk-free deployment flow engineered for speed and reliability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              
              {/* Step 1 */}
              <div className="bg-slate-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200 hover:border-blue-300 hover:bg-white transition-all duration-300 relative overflow-hidden group shadow-2xs">
                <div className="text-4xl font-black font-mono text-slate-300 group-hover:text-blue-500/40 transition-colors mb-4">
                  01
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Browse &amp; Preview Live</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Test fully functional production templates on desktop and mobile viewports. Inspect typography, animations, and checkout flows beforehand.
                </p>
                <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] text-blue-700 font-mono font-medium">
                  Live Viewport Telemetry
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-slate-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200 hover:border-blue-300 hover:bg-white transition-all duration-300 relative overflow-hidden group shadow-2xs">
                <div className="text-4xl font-black font-mono text-slate-300 group-hover:text-blue-500/40 transition-colors mb-4">
                  02
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Pay 10% Token Deposit</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Lock the template in escrow with just a 10% token deposit. Receive an instant order confirmation and a dedicated engineering lead is assigned.
                </p>
                <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] text-blue-700 font-mono font-medium">
                  Escrow Guarantee Active
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-slate-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200 hover:border-blue-300 hover:bg-white transition-all duration-300 relative overflow-hidden group shadow-2xs">
                <div className="text-4xl font-black font-mono text-slate-300 group-hover:text-blue-500/40 transition-colors mb-4">
                  03
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Domain Connect &amp; 48h Handover</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We bind your custom domain, provision 256-bit SSL, verify speed scores, and hand over complete source code ownership within 48 hours.
                </p>
                <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] text-blue-700 font-mono font-medium">
                  48-Hour Live Guarantee
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 5: CURATED WEBSITES CATALOG (SMOOTH HORIZONTAL SLIDER) */}
        <TemplateSlider
          onSelectPreview={handleOpenPreview}
          onSelectBook={handleOpenBook}
          searchFilter={searchQuery}
        />

        {/* SECTION 6: ABOUT US & TRUST-BUILDING (DEVZUNO BENCHMARK) */}
        <section id="about" className="py-20 sm:py-28 bg-slate-50/70 border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-blue-600 font-semibold">
                Enterprise Standards &bull; Devzuno Benchmark
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-slate-900">
                Architected for Serious Modern Brands
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Traditional agencies charge 50% upfront for wireframes and take 3 months. WebsiteBuilder delivers production Next.js websites on your domain in 48 hours with a 10% token deposit escrow model.
              </p>
            </div>

            {/* High-Trust Metrics Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
              <div className="bg-white rounded-2xl p-6 border border-slate-200 text-center space-y-1 shadow-xs hover:border-blue-300 transition-colors">
                <div className="text-3xl sm:text-4xl font-black font-mono text-blue-600">48h</div>
                <div className="text-xs sm:text-sm font-bold text-slate-900">Guaranteed Live SLA</div>
                <p className="text-[11px] text-slate-500">From domain sync to public launch</p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200 text-center space-y-1 shadow-xs hover:border-blue-300 transition-colors">
                <div className="text-3xl sm:text-4xl font-black font-mono text-blue-600">100%</div>
                <div className="text-xs sm:text-sm font-bold text-slate-900">Escrow Protection</div>
                <p className="text-[11px] text-slate-500">Zero full payment upfront</p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200 text-center space-y-1 shadow-xs hover:border-blue-300 transition-colors">
                <div className="text-3xl sm:text-4xl font-black font-mono text-blue-600">0</div>
                <div className="text-xs sm:text-sm font-bold text-slate-900">Server Headaches</div>
                <p className="text-[11px] text-slate-500">Automated DNS, CDN &amp; SSL</p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200 text-center space-y-1 shadow-xs hover:border-blue-300 transition-colors">
                <div className="text-3xl sm:text-4xl font-black font-mono text-blue-600">30 Days</div>
                <div className="text-xs sm:text-sm font-bold text-slate-900">Post-Launch Support</div>
                <p className="text-[11px] text-slate-500">Full warranty and minor revisions</p>
              </div>
            </div>

            {/* Trust Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-xs">
                <FileCode2 className="w-5 h-5 text-blue-600" />
                <h4 className="text-sm font-bold text-slate-900">Clean Source Code Ownership</h4>
                <p className="text-xs text-slate-600">You receive 100% intellectual property rights, GitHub repo transfer, and zero platform vendor lock-in.</p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-xs">
                <ShieldCheck className="w-5 h-5 text-blue-600" />
                <h4 className="text-sm font-bold text-slate-900">Enterprise Edge Security</h4>
                <p className="text-xs text-slate-600">Hardened against DDoS, automated 256-bit Cloudflare SSL, and global edge caching for sub-50ms latency.</p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-xs">
                <Cpu className="w-5 h-5 text-blue-600" />
                <h4 className="text-sm font-bold text-slate-900">Modern Tech Stack</h4>
                <p className="text-xs text-slate-600">Built with modern React 19, Next.js 15, and Tailwind CSS. Ultra-high Google Lighthouse performance.</p>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 7: SIMPLE & CLEAR REQUIREMENT FORM */}
        <RequirementQuoteForm />

        {/* SECTION 8: PRE-FOOTER CALL TO ACTION (GLOBAL BANNER) */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 via-white to-slate-100 border-t border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100/70 border border-blue-200 text-blue-800 text-xs font-mono font-medium">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Limited Weekly Onboarding Slots</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight max-w-3xl mx-auto">
              Ready to launch your business online in the next 48 hours?
            </h2>

            <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
              Reserve your production website today with just a 10% token deposit. Zero technical headaches. Live on your custom domain in 48 hours.
            </p>

            <div className="pt-2">
              <button
                onClick={() => scrollTo('quote')}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm sm:text-base font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Talk to an Engineering Lead</span>
                <ArrowRight className="w-5 h-5 text-blue-100" />
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 9: ENTERPRISE FOOTER */}
        <Footer 
          onQuoteClick={() => scrollTo('quote')}
          onBlogsClick={() => setIsBlogsModalOpen(true)}
          onAboutClick={() => scrollTo('about')}
        />
      </main>

      {/* Interactive Live Preview & Booking Modal */}
      <PreviewBookingModal
        key={`${selectedTemplate?.id || 'none'}-${modalMode}-${isModalOpen}`}
        template={selectedTemplate}
        isOpen={isModalOpen}
        initialMode={modalMode}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Supplementary Interactive Modal: Blogs & Insights */}
      {isBlogsModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
          <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-2xl">
            <button 
              onClick={() => setIsBlogsModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 text-blue-600 text-xs font-mono font-semibold">
              <BookOpen className="w-4 h-4" />
              <span>ENGINEERING INSIGHTS</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900">How 10% Escrow Deployment Disrupts Traditional Agencies</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Traditional web agencies lock founders into 50% upfront commitments before delivering a single line of working code. With pre-compiled Next.js production builds and automated DNS routing, WebsiteBuilder guarantees a live site on your domain within 48 hours while holding the 90% balance in escrow until you approve.
            </p>
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setIsBlogsModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 text-white hover:bg-slate-800 cursor-pointer"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Supplementary Interactive Modal: Client Login / Portal */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
          <div className="relative w-full max-w-md bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-5 shadow-2xl">
            <button 
              onClick={() => setIsLoginModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 text-blue-600 text-xs font-mono font-semibold">
              <User className="w-4 h-4" />
              <span>CLIENT ESCROW DASHBOARD</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900">Access Your Live Deployment Portal</h3>
            <p className="text-xs text-slate-600">
              Enter your work email or token escrow ID to check real-time DNS propagation and SSL status.
            </p>
            <input
              type="email"
              placeholder="work@company.com"
              className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
            <button
              onClick={() => setIsLoginModalOpen(false)}
              className="w-full py-2.5 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 cursor-pointer"
            >
              Send Magic Link
            </button>
          </div>
        </div>
      )}

      {/* Scroll-To-Top Button */}
      <ScrollToTop />

    </div>
  );
}
