'use client';

import React, { useState } from 'react';
import { 
  Lock, 
  Check, 
  Clock, 
  Globe, 
  ShoppingBag, 
  Briefcase, 
  Utensils, 
  ShieldCheck
} from 'lucide-react';

type ShowcaseTab = 'ecommerce' | 'agency' | 'restaurant';

export default function HeroShowcaseFrame() {
  const [activeTab, setActiveTab] = useState<ShowcaseTab>('ecommerce');

  return (
    <div className="relative w-full max-w-5xl mx-auto mt-12 sm:mt-16">
      
      {/* Left Floating Micro-Card (Desktop & Tablet) */}
      <div className="hidden lg:flex absolute -left-6 top-16 z-20 items-center gap-3 bg-white/95 backdrop-blur-xl border border-zinc-200/90 rounded-2xl p-3.5 shadow-xl shadow-zinc-900/5 animate-in fade-in slide-in-from-left-4 duration-500">
        <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200/80 flex items-center justify-center text-blue-600 shrink-0">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-950 font-mono">
            <span>₹1,499 Token Paid</span>
            <span className="w-1 h-1 rounded-full bg-zinc-300" />
            <span className="text-blue-600">Escrow Protected</span>
          </div>
          <p className="text-[11px] text-zinc-500 font-medium">
            90% balance due only after live inspection
          </p>
        </div>
      </div>

      {/* Right Floating Micro-Card (Desktop & Tablet) */}
      <div className="hidden lg:flex absolute -right-6 bottom-16 z-20 items-center gap-3 bg-white/95 backdrop-blur-xl border border-zinc-200/90 rounded-2xl p-3.5 shadow-xl shadow-zinc-900/5 animate-in fade-in slide-in-from-right-4 duration-500">
        <div className="w-9 h-9 rounded-xl bg-zinc-900 text-white flex items-center justify-center shrink-0 shadow-xs">
          <Clock className="w-4 h-4 text-blue-400" />
        </div>
        <div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-950 font-mono">
            <span>Domain: yourbrand.com</span>
          </div>
          <p className="text-[11px] text-zinc-500 font-medium flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <span>Handover in 48 Hours Guaranteed</span>
          </p>
        </div>
      </div>

      {/* Main Interactive Showcase Frame (Browser Viewport) */}
      <div className="relative rounded-2xl bg-white border border-zinc-200/90 shadow-2xl shadow-blue-500/5 overflow-hidden transition-all duration-300">
        
        {/* Browser Top Window Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-zinc-50/90 border-b border-zinc-200/80">
          {/* macOS Window Controls */}
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
          </div>

          {/* Centered URL Address Bar */}
          <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-white border border-zinc-200 text-xs text-zinc-600 font-mono shadow-2xs max-w-[280px] sm:max-w-md w-full justify-center">
            <Lock className="w-3 h-3 text-blue-600 shrink-0" />
            <span className="truncate">
              websitebuilder.dev/preview/{activeTab === 'ecommerce' ? 'live-store' : activeTab === 'agency' ? 'agency-portal' : 'bistro-smart-menu'}
            </span>
          </div>

          {/* Live Status Badge */}
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="hidden sm:inline-block text-[11px] font-mono font-medium text-zinc-700">
              Live &amp; SSL Active
            </span>
          </div>
        </div>

        {/* Category Tabs Inside Showcase */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-2.5 border-b border-zinc-100 bg-white">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('ecommerce')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'ecommerce'
                  ? 'bg-zinc-950 text-white shadow-xs'
                  : 'text-zinc-600 hover:text-black hover:bg-zinc-100'
              }`}
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>E-Commerce</span>
            </button>
            <button
              onClick={() => setActiveTab('agency')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'agency'
                  ? 'bg-zinc-950 text-white shadow-xs'
                  : 'text-zinc-600 hover:text-black hover:bg-zinc-100'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Agency</span>
            </button>
            <button
              onClick={() => setActiveTab('restaurant')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'restaurant'
                  ? 'bg-zinc-950 text-white shadow-xs'
                  : 'text-zinc-600 hover:text-black hover:bg-zinc-100'
              }`}
            >
              <Utensils className="w-3.5 h-3.5" />
              <span>Restaurant</span>
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs text-zinc-500 font-mono">
            <span>Next.js 15 &bull; Tailwind &bull; Production Ready</span>
          </div>
        </div>

        {/* Dynamic Interactive Preview Layout */}
        <div className="p-4 sm:p-8 bg-zinc-50/50 min-h-[300px] sm:min-h-[360px] flex flex-col justify-between">
          
          {/* TAB 1: E-COMMERCE SHOWCASE */}
          {activeTab === 'ecommerce' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-zinc-200/80 shadow-xs">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[10px] font-mono font-semibold uppercase tracking-wider mb-2">
                    <Globe className="w-3 h-3 text-blue-600" />
                    <span>Headless Storefront</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950">
                    NovaStore Luxury Atelier
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 mt-1 max-w-lg">
                    Production e-commerce storefront with instant cart slide-over, automated inventory sync, and multi-currency UPI &amp; Stripe checkout.
                  </p>
                </div>
                <div className="text-left sm:text-right shrink-0">
                  <div className="text-xs text-zinc-500 font-mono">Turn-Key Package</div>
                  <div className="text-2xl font-extrabold text-zinc-950 font-mono">₹14,999</div>
                  <div className="text-xs font-semibold text-blue-600 font-mono mt-0.5">
                    Reserve with ₹1,499 Token
                  </div>
                </div>
              </div>

              {/* Mini Product Cards Preview */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-xl border border-zinc-200/80 space-y-2">
                  <div className="w-full h-24 bg-zinc-100 rounded-lg flex items-center justify-center text-xs font-mono text-zinc-600">
                    Leather Chrono
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-semibold text-zinc-950">Atelier Chronograph</span>
                    <span className="font-mono font-bold text-zinc-950">₹3,499</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-zinc-200/80 space-y-2">
                  <div className="w-full h-24 bg-zinc-100 rounded-lg flex items-center justify-center text-xs font-mono text-zinc-600">
                    Minimalist Tote
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-semibold text-zinc-950">Full-Grain Tote</span>
                    <span className="font-mono font-bold text-zinc-950">₹2,899</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-zinc-200/80 space-y-2">
                  <div className="w-full h-24 bg-zinc-100 rounded-lg flex items-center justify-center text-xs font-mono text-zinc-600">
                    Card Holder
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-semibold text-zinc-950">Slim Card Sleeve</span>
                    <span className="font-mono font-bold text-zinc-950">₹999</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: AGENCY SHOWCASE */}
          {activeTab === 'agency' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-zinc-200/80 shadow-xs">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[10px] font-mono font-semibold uppercase tracking-wider mb-2">
                    <Globe className="w-3 h-3 text-blue-600" />
                    <span>Creative &amp; Tech Studio</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950">
                    ApexStudio Digital Portal
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 mt-1 max-w-lg">
                    Modern high-conversion agency layout with interactive portfolio reels, client ROI scorecards, and automated calendar discovery calls.
                  </p>
                </div>
                <div className="text-left sm:text-right shrink-0">
                  <div className="text-xs text-zinc-500 font-mono">Turn-Key Package</div>
                  <div className="text-2xl font-extrabold text-zinc-950 font-mono">₹11,999</div>
                  <div className="text-xs font-semibold text-blue-600 font-mono mt-0.5">
                    Reserve with ₹1,199 Token
                  </div>
                </div>
              </div>

              {/* Agency Metrics Preview */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-xl border border-zinc-200/80 space-y-1">
                  <div className="text-xs text-zinc-500">Median Client Growth</div>
                  <div className="text-xl font-bold text-zinc-950 font-mono">+340% ROI</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-zinc-200/80 space-y-1">
                  <div className="text-xs text-zinc-500">Design Award Recognitions</div>
                  <div className="text-xl font-bold text-zinc-950 font-mono">14 Global Honors</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-zinc-200/80 space-y-1">
                  <div className="text-xs text-zinc-500">Uptime SLA Rating</div>
                  <div className="text-xl font-bold text-blue-600 font-mono">99.98% Edge</div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: RESTAURANT SHOWCASE */}
          {activeTab === 'restaurant' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-zinc-200/80 shadow-xs">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[10px] font-mono font-semibold uppercase tracking-wider mb-2">
                    <Globe className="w-3 h-3 text-blue-600" />
                    <span>Culinary &amp; Hospitality</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950">
                    VelvetDine Bistro &amp; Bar
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 mt-1 max-w-lg">
                    Interactive culinary experience featuring digital QR smart menus, OpenTable reservation integration, and automated WhatsApp order routing.
                  </p>
                </div>
                <div className="text-left sm:text-right shrink-0">
                  <div className="text-xs text-zinc-500 font-mono">Turn-Key Package</div>
                  <div className="text-2xl font-extrabold text-zinc-950 font-mono">₹9,999</div>
                  <div className="text-xs font-semibold text-blue-600 font-mono mt-0.5">
                    Reserve with ₹999 Token
                  </div>
                </div>
              </div>

              {/* Menu Cards Preview */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-xl border border-zinc-200/80 space-y-1">
                  <div className="text-xs font-semibold text-zinc-950">Truffle Woodfired Pizza</div>
                  <p className="text-[11px] text-zinc-500 line-clamp-1">Wild forest mushrooms &amp; fior di latte</p>
                  <div className="text-xs font-bold text-zinc-950 font-mono pt-1">₹850</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-zinc-200/80 space-y-1">
                  <div className="text-xs font-semibold text-zinc-950">Pan-Seared Sea Bass</div>
                  <p className="text-[11px] text-zinc-500 line-clamp-1">Asparagus, saffron beurre blanc</p>
                  <div className="text-xs font-bold text-zinc-950 font-mono pt-1">₹1,250</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-zinc-200/80 space-y-1">
                  <div className="text-xs font-semibold text-zinc-950">Signature Espresso Tiramisu</div>
                  <p className="text-[11px] text-zinc-500 line-clamp-1">Savoiardi, mascarpone cream &amp; cacao</p>
                  <div className="text-xs font-bold text-zinc-950 font-mono pt-1">₹550</div>
                </div>
              </div>
            </div>
          )}

          {/* Bottom Live Sync Status Strip */}
          <div className="pt-4 mt-6 border-t border-zinc-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span>48h deployment includes DNS routing, Cloudflare SSL, &amp; source code handover</span>
            </div>
            <div className="flex items-center gap-4 text-zinc-700 font-medium">
              <span className="flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-blue-600" /> 100% Escrow
              </span>
              <span className="flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-blue-600" /> Free SSL
              </span>
              <span className="flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-blue-600" /> 48h SLA
              </span>
            </div>
          </div>

        </div>

      </div>

      {/* Mobile Stacked Micro-Cards (Ensures 100% responsive, zero overflow on phone viewports) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:hidden mt-4">
        <div className="flex items-center gap-3 bg-white border border-zinc-200/90 rounded-xl p-3 shadow-xs">
          <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200/80 flex items-center justify-center text-blue-600 shrink-0">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-zinc-950 font-mono">₹1,499 Token Deposit Escrow</div>
            <p className="text-[11px] text-zinc-500">90% due only after live inspection</p>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-white border border-zinc-200/90 rounded-xl p-3 shadow-xs">
          <div className="w-8 h-8 rounded-lg bg-zinc-900 text-white flex items-center justify-center shrink-0">
            <Clock className="w-4 h-4 text-blue-400" />
          </div>
          <div>
            <div className="text-xs font-bold text-zinc-950 font-mono">Domain Setup + 48h Handover</div>
            <p className="text-[11px] text-zinc-500">Live SSL &amp; DNS routing configured</p>
          </div>
        </div>
      </div>

    </div>
  );
}
