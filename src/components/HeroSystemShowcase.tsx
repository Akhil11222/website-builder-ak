'use client';

import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Clock, 
  Globe, 
  Lock, 
  Check, 
  ShoppingBag, 
  Building2, 
  Stethoscope,
  Sparkles,
  Server
} from 'lucide-react';

type PresetType = 'ecommerce' | 'agency' | 'health';

interface PresetData {
  categoryLabel: string;
  name: string;
  domain: string;
  totalPrice: number;
  tokenPrice: number;
  heroSnippet: string;
  metric1: string;
  metric1Label: string;
  metric2: string;
  metric2Label: string;
}

const PRESETS: Record<PresetType, PresetData> = {
  ecommerce: {
    categoryLabel: 'E-Commerce Storefront',
    name: 'NovaStore Atelier',
    domain: 'shop.yourbrand.in',
    totalPrice: 14999,
    tokenPrice: 1499,
    heroSnippet: 'Luxury Apparel & Lifestyle Cart with Instant UPI & PWA Checkout',
    metric1: '0.4s',
    metric1Label: 'TTFB Edge Speed',
    metric2: '100%',
    metric2Label: 'PWA Mobile Score',
  },
  agency: {
    categoryLabel: 'SaaS Agency',
    name: 'ApexStudio Digital',
    domain: 'agency.yourbrand.in',
    totalPrice: 11999,
    tokenPrice: 1199,
    heroSnippet: 'High-Converting B2B Portfolio with Cal.com Booking & Case Studies',
    metric1: '99.9%',
    metric1Label: 'Uptime Cloud SLA',
    metric2: '4.8x',
    metric2Label: 'Inquiry Conversion',
  },
  health: {
    categoryLabel: 'Healthcare Clinic',
    name: 'PulseCare Medical',
    domain: 'clinic.yourbrand.in',
    totalPrice: 12999,
    tokenPrice: 1299,
    heroSnippet: 'Doctor Appointment Booking & Tele-Consultation Patient Portal',
    metric1: 'HIPAA',
    metric1Label: 'Compliant Vault',
    metric2: '1-Click',
    metric2Label: 'WhatsApp Routing',
  },
};

export default function HeroSystemShowcase() {
  const [activePreset, setActivePreset] = useState<PresetType>('ecommerce');
  const data = PRESETS[activePreset];

  return (
    <div className="relative w-full max-w-lg lg:max-w-none mx-auto">
      
      {/* Top-Left Floating Glassmorphic Light Badge */}
      <div className="hidden sm:flex items-center gap-2.5 absolute -top-5 -left-6 z-20 px-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-lg shadow-slate-200/50 animate-float">
        <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-200/60">
          <ShieldCheck className="w-4 h-4" />
        </div>
        <div className="text-left">
          <div className="text-[11px] font-bold text-slate-900 leading-tight">10% Escrow Protected</div>
          <div className="text-[9px] text-slate-500 font-medium">90% Due Only After Live Approval</div>
        </div>
      </div>

      {/* Main Browser Window Frame (Light Theme) */}
      <div className="relative rounded-2xl bg-white border border-slate-200/90 shadow-xl shadow-slate-200/60 overflow-hidden transition-all duration-300">
        
        {/* macOS Browser Header */}
        <div className="px-4 py-3 bg-slate-50/90 border-b border-slate-200 flex items-center justify-between gap-3">
          {/* Window Control Dots */}
          <div className="flex items-center gap-1.5 shrink-0">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
          </div>

          {/* Centered Address Bar with SSL Lock */}
          <div className="flex-1 max-w-xs mx-auto flex items-center justify-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-[11px] font-mono text-slate-600 shadow-2xs">
            <Lock className="w-3 h-3 text-blue-600" />
            <span className="truncate">https://{data.domain}</span>
          </div>

          {/* System Live Pill */}
          <div className="flex items-center gap-1.5 text-[10px] font-mono font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            <span className="hidden xs:inline">SYSTEM LIVE</span>
          </div>
        </div>

        {/* Category Selector Tabs */}
        <div className="p-3 bg-slate-50/50 border-b border-slate-200/80">
          <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-200/60 rounded-xl text-xs font-medium text-slate-600">
            <button
              onClick={() => setActivePreset('ecommerce')}
              className={`py-1.5 px-2 rounded-lg text-center transition-all cursor-pointer flex items-center justify-center gap-1 text-[11px] ${
                activePreset === 'ecommerce'
                  ? 'bg-white text-blue-700 font-semibold shadow-xs'
                  : 'hover:text-slate-900'
              }`}
            >
              <ShoppingBag className="w-3.5 h-3.5 hidden sm:inline" />
              <span>E-Commerce</span>
            </button>
            <button
              onClick={() => setActivePreset('agency')}
              className={`py-1.5 px-2 rounded-lg text-center transition-all cursor-pointer flex items-center justify-center gap-1 text-[11px] ${
                activePreset === 'agency'
                  ? 'bg-white text-blue-700 font-semibold shadow-xs'
                  : 'hover:text-slate-900'
              }`}
            >
              <Building2 className="w-3.5 h-3.5 hidden sm:inline" />
              <span>SaaS Agency</span>
            </button>
            <button
              onClick={() => setActivePreset('health')}
              className={`py-1.5 px-2 rounded-lg text-center transition-all cursor-pointer flex items-center justify-center gap-1 text-[11px] ${
                activePreset === 'health'
                  ? 'bg-white text-blue-700 font-semibold shadow-xs'
                  : 'hover:text-slate-900'
              }`}
            >
              <Stethoscope className="w-3.5 h-3.5 hidden sm:inline" />
              <span>Healthcare</span>
            </button>
          </div>
        </div>

        {/* Inside the Frame: Real Website Preview Card & Stats */}
        <div className="p-4 sm:p-5 space-y-4">
          
          {/* Realistic Website Preview Card */}
          <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-wider font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-200/60">
                {data.categoryLabel}
              </span>
              <span className="text-[10px] text-slate-500 font-mono flex items-center gap-1">
                <Globe className="w-3 h-3 text-slate-400" />
                <span>Next.js 15 App Router</span>
              </span>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                {data.name}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed mt-1">
                {data.heroSnippet}
              </p>
            </div>

            {/* Performance Metric Nodes */}
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-200/60">
              <div className="p-2 rounded-lg bg-white border border-slate-200/70 text-left">
                <div className="text-[10px] text-slate-500 font-medium">{data.metric1Label}</div>
                <div className="text-sm font-bold text-slate-900 font-mono">{data.metric1}</div>
              </div>
              <div className="p-2 rounded-lg bg-white border border-slate-200/70 text-left">
                <div className="text-[10px] text-slate-500 font-medium">{data.metric2Label}</div>
                <div className="text-sm font-bold text-slate-900 font-mono">{data.metric2}</div>
              </div>
            </div>
          </div>

          {/* 4-Step Visual Deployment Pipeline */}
          <div className="space-y-2 pt-1">
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-600 px-1">
              <span className="font-semibold uppercase tracking-wider text-slate-700">Deployment Pipeline SLA</span>
              <span className="text-blue-600 font-medium">Turnaround: 48h</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {/* Step 1 */}
              <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-200 text-xs">
                <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <div className="truncate">
                  <div className="text-[10px] text-slate-500 font-mono uppercase">Step 1</div>
                  <div className="font-semibold text-slate-800 text-[11px] truncate">Template Selected</div>
                </div>
              </div>

              {/* Step 2 - Highlighted */}
              <div className="flex items-center gap-2 p-2 rounded-lg bg-blue-50/80 border border-blue-200 text-xs shadow-2xs">
                <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 animate-pulse">
                  <Sparkles className="w-3 h-3" />
                </div>
                <div className="truncate">
                  <div className="text-[10px] text-blue-700 font-mono uppercase font-semibold">Step 2 (Active)</div>
                  <div className="font-bold text-blue-900 text-[11px] truncate">
                    10% Token Escrow (₹{data.tokenPrice.toLocaleString('en-IN')})
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-200 text-xs">
                <div className="w-5 h-5 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center shrink-0">
                  <Server className="w-3 h-3" />
                </div>
                <div className="truncate">
                  <div className="text-[10px] text-slate-500 font-mono uppercase">Step 3</div>
                  <div className="font-semibold text-slate-800 text-[11px] truncate">Cloudflare DNS &amp; SSL</div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-200 text-xs">
                <div className="w-5 h-5 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center shrink-0">
                  <Clock className="w-3 h-3" />
                </div>
                <div className="truncate">
                  <div className="text-[10px] text-slate-500 font-mono uppercase">Step 4</div>
                  <div className="font-semibold text-slate-800 text-[11px] truncate">Live Handover in 48h</div>
                </div>
              </div>
            </div>
          </div>

          {/* Transparent Indian Rupee Pricing Row */}
          <div className="p-3.5 rounded-xl bg-gradient-to-r from-blue-50 via-slate-50 to-blue-50/60 border border-blue-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
            <div>
              <div className="text-[10px] uppercase font-mono text-slate-500 font-medium">Turn-key Production Value</div>
              <div className="text-base font-bold text-slate-900 font-mono">
                Total Value: ₹{data.totalPrice.toLocaleString('en-IN')}
              </div>
            </div>

            <div className="sm:text-right">
              <div className="text-[10px] uppercase font-mono text-blue-700 font-semibold">10% Deposit to Reserve</div>
              <div className="text-sm font-bold text-blue-700 font-mono flex items-center gap-1.5">
                <span>Pay Today: ₹{data.tokenPrice.toLocaleString('en-IN')}</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-100/80 text-blue-800 border border-blue-200 font-sans">
                  Escrow
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom-Right Floating Glassmorphic Light Badge */}
      <div className="hidden sm:flex items-center gap-2.5 absolute -bottom-5 -right-6 z-20 px-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-lg shadow-slate-200/50 animate-float" style={{ animationDelay: '1.5s' }}>
        <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-200/60">
          <Clock className="w-4 h-4" />
        </div>
        <div className="text-left">
          <div className="text-[11px] font-bold text-slate-900 leading-tight">48-Hour Live Delivery Guarantee</div>
          <div className="text-[9px] text-slate-500 font-medium">Dedicated Cloud Engineer Assigned</div>
        </div>
      </div>

    </div>
  );
}
