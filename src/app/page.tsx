'use client';

import React, { useState } from 'react';
import { 
  Zap, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Globe, 
  ChevronDown, 
  Code2
} from 'lucide-react';
import Header from '@/components/Header';
import HeroAmbientGlow from '@/components/HeroAmbientGlow';
import TemplateSlider from '@/components/TemplateSlider';
import PreviewBookingModal from '@/components/PreviewBookingModal';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { Template, TEMPLATES } from '@/data/templates';

const FAQS = [
  {
    q: 'What is the 10% token deposit?',
    a: 'Traditional agencies demand 50% upfront before you ever see a design. With WebsiteBuilder, you inspect fully coded live templates first. You pay just a 10% deposit (e.g. ₹1,499 on a ₹14,999 website) to lock your reservation and initiate engineering setup. The remaining 90% is only released after you test and approve your live website on your custom domain.'
  },
  {
    q: 'How does the 48-hour delivery work?',
    a: 'Since our templates are production-ready Next.js codebases, our DevOps engineers only need your domain name and basic branding. Within 48 hours, we connect DNS, configure 256-bit SSL, setup CDN edge hosting, and hand over your live website with verified speed tests.'
  },
  {
    q: 'What if I already have a domain name?',
    a: 'Great! You can connect any existing domain from GoDaddy, Namecheap, Google Domains, or Cloudflare. We provide simple DNS instructions or our concierge team can configure the A/CNAME records for you free of charge.'
  },
  {
    q: 'Can I request custom changes to the template?',
    a: 'Yes. Every booking includes custom branding (your logo, colors, text, and images). If you need custom API integrations, additional pages, or payment gateway configurations, our team handles them during the 48-hour setup window.'
  }
];

export default function HomePage() {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [modalMode, setModalMode] = useState<'preview' | 'book'>('preview');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

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

  const handleHeaderBook = () => {
    // Open booking on the first template or scroll to templates
    setSelectedTemplate(TEMPLATES[0]);
    setModalMode('book');
    setIsModalOpen(true);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#0a0e17] text-slate-100 overflow-x-hidden selection:bg-indigo-600 selection:text-white">
      {/* SECTION 1: MODERN GLASSMORPHISM HEADER */}
      <Header onBookClick={handleHeaderBook} />

      <main className="relative">
        {/* SECTION 2: HERO SECTION WITH AMBIENT GLOW */}
        <section className="relative pt-20 pb-20 sm:pt-28 sm:pb-28 overflow-hidden">
          <HeroAmbientGlow />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            {/* Top Escrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs sm:text-sm font-medium mb-6 shadow-lg shadow-indigo-500/5">
              <Zap className="w-4 h-4 text-indigo-400" />
              <span>48-Hour Live Deployment • 10% Escrow Token Model</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight sm:leading-tight">
              Ready-Made Websites, Deployed to Your Domain in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-300 to-blue-400">
                48 Hours.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-sm sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Browse high-converting production websites. Reserve instantly with just a 10% token deposit. We handle your domain, hosting, and launch.
            </p>

            {/* Dual CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto">
              <button
                onClick={() => scrollTo('templates')}
                className="w-full sm:w-auto min-h-[46px] px-7 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-blue-600 hover:from-indigo-500 hover:to-blue-500 shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore Templates</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('how-it-works')}
                className="w-full sm:w-auto min-h-[46px] px-6 py-3 rounded-full text-sm font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>How 10% Token Works</span>
              </button>
            </div>

            {/* Live Stats Pill Row */}
            <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-indigo-400" />
                <span className="text-slate-200 font-medium">48h SLA Handover</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-indigo-400" />
                <span className="text-slate-200 font-medium">100% Escrow Protected</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-indigo-400" />
                <span className="text-slate-200 font-medium">Free SSL & Domain Setup</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: HOW IT WORKS (THE CLEAR 3-STEP JOURNEY) */}
        <section id="how-it-works" className="py-16 sm:py-24 bg-[#080c14] border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold">
                Transparent 3-Step Process
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                How the 10% Token Launch Works
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Zero full payments upfront. Lock your template and inspect the live build before releasing the balance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Step 1 */}
              <div className="bg-[#0f172a] rounded-2xl p-6 sm:p-7 border border-white/5 relative overflow-hidden group hover:border-indigo-500/30 transition-colors">
                <div className="text-3xl font-extrabold font-mono text-indigo-500/20 group-hover:text-indigo-500/40 transition-colors mb-4">
                  01
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Browse & Select</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Pick a pre-built, production-tested website tailored to your business from our curated catalog.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-[#0f172a] rounded-2xl p-6 sm:p-7 border border-white/5 relative overflow-hidden group hover:border-indigo-500/30 transition-colors">
                <div className="text-3xl font-extrabold font-mono text-indigo-500/20 group-hover:text-indigo-500/40 transition-colors mb-4">
                  02
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Pay 10% Token</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Lock your template with just a 10% upfront deposit held in escrow. Zero full payment until you inspect the live site.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-[#0f172a] rounded-2xl p-6 sm:p-7 border border-white/5 relative overflow-hidden group hover:border-indigo-500/30 transition-colors">
                <div className="text-3xl font-extrabold font-mono text-indigo-500/20 group-hover:text-indigo-500/40 transition-colors mb-4">
                  03
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Live on Your Domain</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Our team connects your domain, configures hosting, and hands over your live site in 48 hours.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: PRODUCTION WEBSITES (SMOOTH HORIZONTAL SLIDER) */}
        <TemplateSlider
          onSelectPreview={handleOpenPreview}
          onSelectBook={handleOpenBook}
        />

        {/* SECTION 5: WHY 10% TOKEN MODEL (TRUST & GUARANTEE) */}
        <section id="why-us" className="py-16 sm:py-24 bg-[#080c14] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold">
                Risk-Free Commitment
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Why Founders Choose the 10% Token Model
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#0f172a] p-6 rounded-2xl border border-white/5 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Zero Risk Guarantee</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  If we don&apos;t launch your site within 48 hours, 100% of your token deposit is refunded instantly. Zero questions asked.
                </p>
              </div>

              <div className="bg-[#0f172a] p-6 rounded-2xl border border-white/5 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Full Domain & SSL Setup</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  No technical headache. We configure DNS, Cloudflare SSL, edge caching, and mobile responsiveness for you.
                </p>
              </div>

              <div className="bg-[#0f172a] p-6 rounded-2xl border border-white/5 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400 flex items-center justify-center">
                  <Code2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Post-Launch Handover</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  100% source code ownership and 30-day technical support included. Complete control over your digital asset.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: FAQ ACCORDION (TOP 4 QUESTIONS) */}
        <section id="faq" className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold">
                Clear Answers
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3">
              {FAQS.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={faq.q}
                    className="bg-[#0f172a] border border-white/5 rounded-2xl overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <span className="text-sm sm:text-base font-semibold text-white">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-indigo-400' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-white/5 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 7: CLEAN MODERN FOOTER */}
        <Footer />
      </main>

      {/* SECTION 8: INTERACTIVE PREVIEW & BOOKING MODAL */}
      <PreviewBookingModal
        key={`${selectedTemplate?.id || 'none'}-${modalMode}-${isModalOpen}`}
        template={selectedTemplate}
        isOpen={isModalOpen}
        initialMode={modalMode}
        onClose={() => setIsModalOpen(false)}
      />

      {/* SECTION 9: SCROLL-TO-TOP BUTTON */}
      <ScrollToTop />
    </div>
  );
}
