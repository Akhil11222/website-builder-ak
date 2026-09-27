'use client';

import React, { useState } from 'react';
import { X, ArrowRight, Tag, Mail, Check } from 'lucide-react';

export default function BottomDiscountBanner() {
  const [isBannerDismissed, setIsBannerDismissed] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubscribed(true);
  };

  return (
    <div className="w-full">
      {/* 1. Newsletter Subscription Bar Section */}
      <section className="py-14 sm:py-16 bg-slate-900 border-t border-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-1.5 text-center lg:text-left max-w-xl">
              <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-400 font-semibold">
                CURATED WEEKLY DROPS
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Get Fresh Production Websites Every Friday
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Join 4,200+ founders receiving newly architected Next.js templates, architectural teardowns, and priority 48-hour launch slots.
              </p>
            </div>

            <div className="w-full lg:w-auto">
              {newsletterSubscribed ? (
                <div className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-slate-800 border border-slate-700 text-xs sm:text-sm text-slate-200">
                  <Check className="w-4 h-4 text-indigo-400" />
                  <span>Subscribed! You will receive our next curated website drop.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row items-center gap-2.5 w-full max-w-md">
                  <div className="relative w-full sm:w-80">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input 
                      type="email"
                      required
                      placeholder="founder@yourcompany.com"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      className="w-full pl-10 pr-3.5 py-3 bg-slate-800/90 border border-slate-700 rounded-xl text-xs sm:text-sm text-white placeholder:text-slate-400 focus:outline-hidden focus:border-indigo-400 transition-all min-h-[44px]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-semibold text-xs sm:text-sm transition-all shrink-0 shadow-md shadow-indigo-500/20 min-h-[44px]"
                  >
                    Subscribe Free
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Bottom-Docked Dismissible Token Discount Banner */}
      {!isBannerDismissed && (
        <aside 
          aria-label="Promotional Offer"
          className="fixed bottom-0 inset-x-0 z-40 bg-slate-900/95 text-white border-t border-slate-800 px-4 py-3 shadow-2xl backdrop-blur-md animate-in slide-in-from-bottom-2 duration-300"
        >
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-3">
              <span className="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 hidden sm:inline-flex">
                <Tag className="w-3.5 h-3.5" />
              </span>
              <div>
                <span className="font-semibold text-white">
                  Launch Special: Save 10% on your token booking
                </span>
                <span className="text-slate-400 ml-1.5 hidden md:inline">
                  Use coupon code <code className="bg-slate-800 px-2 py-0.5 rounded text-indigo-300 font-mono text-[11px] border border-slate-700 font-bold">LAUNCH10</code> at checkout.
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a 
                href="#catalog"
                className="px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center gap-1 transition-all shadow-xs"
              >
                <span>Browse Designs</span>
                <ArrowRight className="w-3 h-3" />
              </a>

              <button
                type="button"
                onClick={() => setIsBannerDismissed(true)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                aria-label="Dismiss banner"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </aside>
      )}
    </div>
  );
}
