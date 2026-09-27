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
    setSelectedTemplate(TEMPLATES[0]);
    setModalMode('book');
    setIsModalOpen(true);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-white text-zinc-950 overflow-x-hidden selection:bg-blue-600 selection:text-white">
      {/* SECTION 1: MODERN GLASSMORPHISM HEADER (60% White / 30% Black Structure) */}
      <Header onBookClick={handleHeaderBook} />

      <main className="relative">
        {/* SECTION 2: HERO SECTION WITH AMBIENT GLOW */}
        <section className="relative pt-20 pb-20 sm:pt-28 sm:pb-28 overflow-hidden bg-white">
          <HeroAmbientGlow />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            {/* Top Escrow Badge (5% RED URGENCY ACCENT - #dc2626) */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs sm:text-sm font-semibold mb-6 shadow-xs">
              <Zap className="w-4 h-4 text-red-600" />
              <span>48-Hour Live Deployment • 10% Escrow Token Model</span>
            </div>

            {/* Main Headline (30% Black Primary Typography + 5% Blue Highlight) */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-950 max-w-4xl mx-auto leading-tight sm:leading-tight">
              Ready-Made Websites, Deployed to Your Domain in{' '}
              <span className="text-blue-600">
                48 Hours.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-sm sm:text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
              Browse high-converting production websites. Reserve instantly with just a 10% token deposit. We handle your domain, hosting, and launch.
            </p>

            {/* Dual CTAs (30% Solid Black CTA + Clean White Outline) */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto">
              <button
                onClick={() => scrollTo('templates')}
                className="w-full sm:w-auto min-h-[46px] px-7 py-3 rounded-full text-sm font-semibold text-white bg-black hover:bg-zinc-800 shadow-sm flex items-center justify-center gap-2 transition-all active:scale-[0.98] cursor-pointer"
              >
                <span>Explore Templates</span>
                <ArrowRight className="w-4 h-4 text-blue-400" />
              </button>

              <button
                onClick={() => scrollTo('how-it-works')}
                className="w-full sm:w-auto min-h-[46px] px-6 py-3 rounded-full text-sm font-semibold text-zinc-800 hover:text-black bg-white hover:bg-zinc-50 border border-zinc-200 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>How 10% Token Works</span>
              </button>
            </div>

            {/* Live Stats Pill Row */}
            <div className="mt-12 pt-8 border-t border-zinc-100 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-zinc-600">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-red-600" />
                <span className="text-zinc-900 font-semibold">48h SLA Handover</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span className="text-zinc-900 font-semibold">100% Escrow Protected</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-blue-600" />
                <span className="text-zinc-900 font-semibold">Free SSL & Domain Setup</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: HOW IT WORKS (THE CLEAR 3-STEP JOURNEY) */}
        <section id="how-it-works" className="py-16 sm:py-24 bg-zinc-50 border-y border-zinc-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-blue-600 font-semibold">
                Transparent 3-Step Process
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950">
                How the 10% Token Launch Works
              </h2>
              <p className="text-xs sm:text-sm text-zinc-600">
                Zero full payments upfront. Lock your template and inspect the live build before releasing the balance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Step 1 */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-zinc-200 relative overflow-hidden group hover:border-zinc-300 transition-colors shadow-sm">
                <div className="text-3xl font-extrabold font-mono text-zinc-300 group-hover:text-blue-600 transition-colors mb-4">
                  01
                </div>
                <h3 className="text-lg font-bold text-zinc-950 mb-2">Browse & Select</h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  Pick a pre-built, production-tested website tailored to your business from our curated catalog.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-zinc-200 relative overflow-hidden group hover:border-zinc-300 transition-colors shadow-sm">
                <div className="text-3xl font-extrabold font-mono text-zinc-300 group-hover:text-red-600 transition-colors mb-4">
                  02
                </div>
                <h3 className="text-lg font-bold text-zinc-950 mb-2">Pay 10% Token</h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  Lock your template with just a 10% upfront deposit held in escrow. Zero full payment until you inspect the live site.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-zinc-200 relative overflow-hidden group hover:border-zinc-300 transition-colors shadow-sm">
                <div className="text-3xl font-extrabold font-mono text-zinc-300 group-hover:text-blue-600 transition-colors mb-4">
                  03
                </div>
                <h3 className="text-lg font-bold text-zinc-950 mb-2">Live on Your Domain</h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
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
        <section id="why-us" className="py-16 sm:py-24 bg-zinc-50 border-t border-zinc-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-blue-600 font-semibold">
                Risk-Free Commitment
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950">
                Why Founders Choose the 10% Token Model
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-zinc-200 space-y-3 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-200 text-red-600 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-zinc-950">Zero Risk Guarantee</h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  If we don&apos;t launch your site within 48 hours, 100% of your token deposit is refunded instantly. Zero questions asked.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-zinc-200 space-y-3 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-zinc-950">Full Domain & SSL Setup</h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  No technical headache. We configure DNS, Cloudflare SSL, edge caching, and mobile responsiveness for you.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-zinc-200 space-y-3 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-zinc-100 border border-zinc-200 text-zinc-900 flex items-center justify-center">
                  <Code2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-zinc-950">Post-Launch Handover</h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  100% source code ownership and 30-day technical support included. Complete control over your digital asset.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: FAQ ACCORDION (TOP 4 QUESTIONS) */}
        <section id="faq" className="py-16 sm:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-blue-600 font-semibold">
                Clear Answers
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3">
              {FAQS.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={faq.q}
                    className="bg-zinc-50 border border-zinc-200 rounded-2xl overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <span className="text-sm sm:text-base font-semibold text-zinc-950">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-zinc-500 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-blue-600' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-zinc-200 pt-3">
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
