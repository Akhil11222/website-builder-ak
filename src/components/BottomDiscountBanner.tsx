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
      <section className="py-12 bg-zinc-900 border-t border-zinc-800 text-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                STAY AHEAD OF CURATED DROPS
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Get New Production Website Releases Every Friday
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-lg">
                Receive newly engineered Next.js 16 templates, architectural tear-downs, and priority 48-hour deployment slots.
              </p>
            </div>

            <div className="w-full md:w-auto">
              {newsletterSubscribed ? (
                <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-800 border border-zinc-700 text-xs text-zinc-200">
                  <Check className="w-4 h-4 text-white" />
                  <span>Subscribed! You will receive our next curated template drop.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row items-center gap-2 w-full max-w-md">
                  <div className="relative w-full sm:w-72">
                    <Mail className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input 
                      type="email"
                      required
                      placeholder="founder@company.com"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 bg-zinc-950 border border-zinc-700 rounded-lg text-xs text-white placeholder:text-zinc-500 focus:outline-hidden focus:border-zinc-400 transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-white hover:bg-zinc-200 text-zinc-950 font-semibold text-xs transition-colors shrink-0 shadow-sm"
                  >
                    Subscribe
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
          className="fixed bottom-0 inset-x-0 z-40 bg-zinc-950/95 text-white border-t border-zinc-800 px-4 py-3 shadow-2xl backdrop-blur-md animate-in slide-in-from-bottom-2 duration-300"
        >
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-3">
              <span className="p-1.5 rounded-md bg-zinc-900 border border-zinc-700 text-zinc-300 hidden sm:inline-flex">
                <Tag className="w-3.5 h-3.5" />
              </span>
              <div>
                <span className="font-semibold text-white">
                  Limited Deployment Promo: Save 10% on your token booking
                </span>
                <span className="text-zinc-400 ml-1.5 hidden md:inline">
                  Use coupon code <code className="bg-zinc-900 px-1.5 py-0.5 rounded text-zinc-200 font-mono text-[11px] border border-zinc-800">LAUNCH10</code> at reservation.
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a 
                href="#catalog"
                className="px-3 py-1.5 rounded bg-white hover:bg-zinc-200 text-zinc-950 font-bold text-[11px] flex items-center gap-1 transition-colors"
              >
                <span>Claim Offer</span>
                <ArrowRight className="w-3 h-3" />
              </a>

              <button
                type="button"
                onClick={() => setIsBannerDismissed(true)}
                className="p-1 text-zinc-400 hover:text-white rounded hover:bg-zinc-900 transition-colors"
                aria-label="Dismiss discount banner"
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
