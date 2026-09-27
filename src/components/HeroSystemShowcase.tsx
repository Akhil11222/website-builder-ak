'use client';

import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Clock, 
  Globe, 
  Check, 
  Activity, 
  ShoppingBag, 
  Building2, 
  Stethoscope
} from 'lucide-react';

type PresetType = 'ecommerce' | 'agency' | 'health';

interface PresetData {
  name: string;
  domain: string;
  totalPrice: number;
  tokenPrice: number;
  tech: string;
  features: string[];
}

const PRESETS: Record<PresetType, PresetData> = {
  ecommerce: {
    name: 'NovaStore Atelier Storefront',
    domain: 'shop.yourbrand.in',
    totalPrice: 14999,
    tokenPrice: 1499,
    tech: 'Next.js 15 • Stripe/UPI • Edge Cart',
    features: ['Instant PWA Checkout', 'Inventory Webhooks', 'Automated Invoicing']
  },
  agency: {
    name: 'ApexStudio Digital Platform',
    domain: 'agency.yourbrand.in',
    totalPrice: 11999,
    tokenPrice: 1199,
    tech: 'Next.js 15 • Framer Motion • Cal.com',
    features: ['Case Studies Hub', 'Lead Scoring Engine', 'Calendar Appointment API']
  },
  health: {
    name: 'PulseCare Clinical Practice',
    domain: 'clinic.yourbrand.in',
    totalPrice: 12999,
    tokenPrice: 1299,
    tech: 'Next.js 15 • HIPAA Shield • SMS Router',
    features: ['Doctor Slot Scheduling', 'Telemedicine Portal', 'Patient Intake Forms']
  }
};

export default function HeroSystemShowcase() {
  const [selectedPreset, setSelectedPreset] = useState<PresetType>('ecommerce');
  const current = PRESETS[selectedPreset];

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      
      {/* Floating Micro-Card 1 (Top Left) */}
      <div className="hidden sm:flex absolute -left-4 -top-5 z-20 items-center gap-2.5 px-3.5 py-2 rounded-xl bg-slate-900/90 backdrop-blur-xl border border-blue-500/30 text-white shadow-xl shadow-blue-500/10 animate-float">
        <div className="w-7 h-7 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-cyan-400">
          <ShieldCheck className="w-4 h-4" />
        </div>
        <div className="text-left">
          <div className="text-[11px] font-bold text-white font-mono">10% Escrow Confirmed</div>
          <div className="text-[9px] text-cyan-400 font-medium">90% due upon live approval</div>
        </div>
      </div>

      {/* Floating Micro-Card 2 (Bottom Right) */}
      <div className="hidden sm:flex absolute -right-3 -bottom-5 z-20 items-center gap-2.5 px-3.5 py-2 rounded-xl bg-slate-900/90 backdrop-blur-xl border border-cyan-500/30 text-white shadow-xl shadow-cyan-500/10 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-7 h-7 rounded-lg bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
          <Clock className="w-4 h-4" />
        </div>
        <div className="text-left">
          <div className="text-[11px] font-bold text-white font-mono">48-Hour Live Guarantee</div>
          <div className="text-[9px] text-slate-300 font-medium">Full domain &amp; SSL handover</div>
        </div>
      </div>

      {/* Main Glassmorphic Terminal Viewport */}
      <div className="rounded-2xl sm:rounded-3xl bg-slate-900/80 backdrop-blur-xl border border-slate-800 hover:border-blue-500/40 transition-all duration-300 shadow-2xl shadow-blue-500/5 overflow-hidden">
        
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-5 py-3 bg-slate-950/80 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
            <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
            <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
            <span className="ml-2 text-[10px] font-mono text-slate-400 hidden sm:inline">
              deployment-telemetry.v2
            </span>
          </div>

          {/* Live System Status Tag */}
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-[10px] font-mono font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>SYSTEM LIVE &bull; 48H SLA</span>
          </div>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex items-center gap-1.5 p-2 bg-slate-950/40 border-b border-slate-800/80 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setSelectedPreset('ecommerce')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all shrink-0 cursor-pointer ${
              selectedPreset === 'ecommerce'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>E-Commerce</span>
          </button>
          <button
            onClick={() => setSelectedPreset('agency')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all shrink-0 cursor-pointer ${
              selectedPreset === 'agency'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>SaaS Agency</span>
          </button>
          <button
            onClick={() => setSelectedPreset('health')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all shrink-0 cursor-pointer ${
              selectedPreset === 'health'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            <Stethoscope className="w-3.5 h-3.5" />
            <span>Healthcare</span>
          </button>
        </div>

        {/* Interactive Dashboard Interior */}
        <div className="p-4 sm:p-6 space-y-4">
          
          {/* Active Domain Connection Telemetry Row */}
          <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/90 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                <Globe className="w-4 h-4" />
              </div>
              <div className="text-left truncate">
                <span className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">Target Domain</span>
                <div className="text-xs font-bold text-white font-mono flex items-center gap-1.5 truncate">
                  <span className="truncate">{current.domain}</span>
                  <span className="px-1.5 py-0.2 rounded text-[9px] bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-sans shrink-0">
                    Cloudflare SSL Active
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-[11px] font-mono text-slate-400 border-t sm:border-t-0 sm:border-l border-slate-800 pt-2 sm:pt-0 sm:pl-3">
              <div>
                <span className="text-slate-500 block text-[9px]">PING</span>
                <span className="text-cyan-400 font-bold">24ms</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[9px]">STATUS</span>
                <span className="text-white font-bold">200 OK</span>
              </div>
            </div>
          </div>

          {/* Model Specification & Features */}
          <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/60 space-y-3">
            <div className="flex items-start justify-between gap-2">
              <div>
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                  Production Stack
                </span>
                <h4 className="text-sm font-bold text-white mt-0.5">{current.name}</h4>
                <p className="text-[11px] text-slate-400 font-mono mt-0.5">{current.tech}</p>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-500/10 text-cyan-300 border border-blue-500/20 shrink-0">
                Next.js 15
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 border-t border-slate-800/60">
              {current.features.map((feat) => (
                <div key={feat} className="flex items-center gap-1.5 text-[10px] text-slate-300">
                  <Check className="w-3 h-3 text-cyan-400 shrink-0" />
                  <span className="truncate">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Live 10% Token Escrow Calculation Chip */}
          <div className="p-3.5 rounded-xl bg-gradient-to-r from-blue-950/40 via-slate-950 to-cyan-950/40 border border-blue-500/30 flex items-center justify-between gap-3">
            <div>
              <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">
                Full Production Value
              </span>
              <div className="text-sm sm:text-base font-extrabold text-white font-mono">
                ₹{current.totalPrice.toLocaleString('en-IN')}
              </div>
            </div>

            <div className="h-8 w-px bg-slate-800" />

            <div className="text-right">
              <span className="text-[10px] text-cyan-400 font-mono uppercase tracking-wider font-bold">
                10% Token Due Now
              </span>
              <div className="text-base sm:text-lg font-black text-cyan-300 font-mono flex items-center justify-end gap-1">
                <span>₹{current.tokenPrice.toLocaleString('en-IN')}</span>
                <span className="text-[10px] font-sans font-normal text-slate-400">(Escrow)</span>
              </div>
            </div>
          </div>

          {/* Handover Guarantee Note */}
          <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
            <span className="flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-blue-400" />
              <span>Full source code repository ownership transferred</span>
            </span>
            <span className="font-mono text-cyan-400 font-semibold">48h SLA</span>
          </div>

        </div>

      </div>

    </div>
  );
}
