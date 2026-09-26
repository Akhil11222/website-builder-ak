'use client';

import React from 'react';
import { 
  Lock, 
  ShoppingBag, 
  ArrowUpRight, 
  Activity, 
  Terminal, 
  Calendar, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  Building, 
  Stethoscope, 
  FileText, 
  ChevronRight
} from 'lucide-react';

interface CodeMockupProps {
  type: 'ecommerce' | 'saas' | 'restaurant' | 'realestate' | 'healthcare' | 'portfolio';
  demoUrl?: string;
  isInteractive?: boolean;
}

export default function CodeMockup({ type, demoUrl = 'https://preview.websitebuilder.dev' }: CodeMockupProps) {
  return (
    <div className="w-full h-full flex flex-col bg-zinc-950 text-zinc-100 rounded-lg overflow-hidden border border-zinc-800 shadow-2xl select-none">
      {/* Browser Bar */}
      <div className="flex items-center justify-between px-3 py-2 bg-zinc-900 border-b border-zinc-800/80 text-xs shrink-0">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1 bg-zinc-950/80 rounded-md border border-zinc-800 text-zinc-400 font-mono text-[11px] max-w-[260px] truncate">
          <Lock className="w-3 h-3 text-zinc-400 shrink-0" />
          <span className="truncate">{demoUrl}</span>
        </div>

        <div className="flex items-center gap-1 text-zinc-500 font-mono text-[10px]">
          <span className="px-1.5 py-0.5 rounded bg-zinc-800/80 text-zinc-300">LIVE</span>
        </div>
      </div>

      {/* Viewport Content */}
      <div className="p-3 sm:p-4 overflow-y-auto overflow-x-hidden flex-1 flex flex-col justify-between bg-zinc-950/95 font-sans">
        {type === 'ecommerce' && (
          <div className="space-y-3">
            {/* Header */}
            <div className="flex items-center justify-between pb-2 border-b border-zinc-800 text-xs">
              <span className="font-semibold tracking-wider text-zinc-100 uppercase">AURA / STORE</span>
              <div className="flex items-center gap-2">
                <span className="text-zinc-400 hidden sm:inline">Search catalog</span>
                <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-zinc-800 text-zinc-200 text-[11px]">
                  <ShoppingBag className="w-3 h-3" />
                  <span>Bag (2)</span>
                </div>
              </div>
            </div>

            {/* Hero Banner */}
            <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] tracking-widest text-zinc-400 font-mono uppercase">DROP 04 / EDITION</span>
                  <h4 className="text-sm font-medium text-zinc-100 mt-0.5">Monochrome Outerwear</h4>
                </div>
                <div className="flex items-center gap-1 text-[11px] px-2 py-1 bg-zinc-100 text-zinc-950 font-medium rounded">
                  <span>Explore</span>
                  <ArrowUpRight className="w-3 h-3" />
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 gap-2">
              <div className="p-2.5 rounded-lg bg-zinc-900/70 border border-zinc-800/80 space-y-2">
                <div className="h-16 w-full rounded bg-zinc-800/50 flex items-center justify-center border border-zinc-700/40">
                  <div className="w-8 h-8 rounded border border-zinc-600/80 flex items-center justify-center">
                    <span className="text-[9px] font-mono text-zinc-400">01</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-zinc-200 font-medium truncate">Bonded Coat</span>
                  <span className="font-mono text-zinc-300">$290</span>
                </div>
                <div className="w-full py-1 bg-zinc-800 hover:bg-zinc-700 text-center rounded text-[10px] text-zinc-300 font-medium transition-colors">
                  Add to Cart
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-zinc-900/70 border border-zinc-800/80 space-y-2">
                <div className="h-16 w-full rounded bg-zinc-800/50 flex items-center justify-center border border-zinc-700/40">
                  <div className="w-8 h-8 rounded border border-zinc-600/80 flex items-center justify-center">
                    <span className="text-[9px] font-mono text-zinc-400">02</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-zinc-200 font-medium truncate">Modular Bag</span>
                  <span className="font-mono text-zinc-300">$180</span>
                </div>
                <div className="w-full py-1 bg-zinc-800 hover:bg-zinc-700 text-center rounded text-[10px] text-zinc-300 font-medium transition-colors">
                  Add to Cart
                </div>
              </div>
            </div>

            {/* Footer Trust Ticker */}
            <div className="pt-2 border-t border-zinc-800/60 flex items-center justify-between text-[10px] text-zinc-500 font-mono">
              <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3 text-zinc-400" /> Stripe Ready</span>
              <span>Sub-second Checkout</span>
            </div>
          </div>
        )}

        {type === 'saas' && (
          <div className="space-y-3">
            {/* Header */}
            <div className="flex items-center justify-between pb-2 border-b border-zinc-800 text-xs">
              <div className="flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-zinc-300" />
                <span className="font-semibold text-zinc-100">NOVA / CLOUD</span>
              </div>
              <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 text-[10px] font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                <span>99.99% Uptime</span>
              </div>
            </div>

            {/* Metric Panel */}
            <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-400">Total API Volume</span>
                <span className="font-mono text-zinc-100 font-medium">14.8M req/mo</span>
              </div>
              <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full bg-zinc-300 rounded-full w-4/5" />
              </div>
              <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500">
                <span>P99: 14ms</span>
                <span>Edge Nodes: 38</span>
              </div>
            </div>

            {/* Terminal snippet */}
            <div className="p-2.5 rounded-lg bg-black border border-zinc-800 font-mono text-[10px] text-zinc-300 space-y-1">
              <div className="flex items-center gap-1 text-zinc-500 text-[9px]">
                <Terminal className="w-2.5 h-2.5" />
                <span>deploy.sh</span>
              </div>
              <div className="text-zinc-400">$ nova deploy --region global --env prod</div>
              <div className="text-zinc-200">Deployed v2.8.4 to edge network in 820ms</div>
            </div>

            {/* Pricing Matrix Preview */}
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div className="p-2 rounded bg-zinc-900/60 border border-zinc-800 text-center">
                <span className="text-zinc-400 text-[10px] block">Scale Tier</span>
                <span className="font-mono text-zinc-200 font-semibold">$79/mo</span>
              </div>
              <div className="p-2 rounded bg-zinc-900 border border-zinc-700 text-center">
                <span className="text-zinc-300 text-[10px] block">Enterprise</span>
                <span className="font-mono text-zinc-100 font-semibold">$349/mo</span>
              </div>
            </div>
          </div>
        )}

        {type === 'restaurant' && (
          <div className="space-y-3">
            {/* Header */}
            <div className="flex items-center justify-between pb-2 border-b border-zinc-800 text-xs">
              <span className="font-serif tracking-widest text-zinc-100 uppercase">L&apos;ARTISAN</span>
              <span className="text-[10px] font-mono text-zinc-400">TABLE 08 • SERVICE</span>
            </div>

            {/* Tasting Menu item */}
            <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-serif text-zinc-100">Autumn Tasting Menu</span>
                <span className="font-mono text-zinc-300">$125 / Person</span>
              </div>
              <p className="text-[11px] text-zinc-400 leading-relaxed">
                Smoked pine duck, glazed winter root vegetables, paired with natural Burgundy vintage.
              </p>
            </div>

            {/* Booking confirmation widget */}
            <div className="p-2.5 rounded-lg bg-zinc-900/80 border border-zinc-800 text-[11px] space-y-2">
              <div className="flex items-center justify-between text-zinc-300">
                <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3 text-zinc-400" /> Oct 18, 2026</span>
                <span className="flex items-center gap-1.5"><Clock className="w-3 h-3 text-zinc-400" /> 19:30 PM</span>
              </div>
              <div className="w-full py-1.5 bg-zinc-100 text-zinc-950 font-medium text-center rounded text-xs">
                Reserve Tasting Experience
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 pt-1">
              <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-zinc-400" /> Manhattan, NY</span>
              <span>Dietary Concierge Available</span>
            </div>
          </div>
        )}

        {type === 'realestate' && (
          <div className="space-y-3">
            {/* Header */}
            <div className="flex items-center justify-between pb-2 border-b border-zinc-800 text-xs">
              <div className="flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-zinc-300" />
                <span className="font-semibold text-zinc-100">VANGUARD / REALTY</span>
              </div>
              <span className="text-[10px] font-mono text-zinc-400">MLS #9084</span>
            </div>

            {/* Property Card */}
            <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 space-y-2">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-mono text-zinc-400 uppercase">TRIBECA RESIDENCE</span>
                  <h4 className="text-xs font-semibold text-zinc-100">The Glass Pavilion</h4>
                </div>
                <span className="font-mono text-xs font-semibold text-zinc-200">$4,850,000</span>
              </div>

              {/* Floor schematic wireframe */}
              <div className="h-14 w-full rounded bg-zinc-950 border border-zinc-800 p-2 flex items-center justify-around text-zinc-500 font-mono text-[9px]">
                <div className="border border-zinc-700/60 p-1 rounded text-center w-14">
                  <span className="block text-zinc-300">MASTER</span>
                  <span>520 sqft</span>
                </div>
                <div className="border border-zinc-700/60 p-1 rounded text-center w-14">
                  <span className="block text-zinc-300">TERRACE</span>
                  <span>340 sqft</span>
                </div>
                <div className="border border-zinc-700/60 p-1 rounded text-center w-14">
                  <span className="block text-zinc-300">LIVING</span>
                  <span>980 sqft</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-[10px] text-zinc-400 font-mono">
                <span>4 Beds • 3.5 Baths</span>
                <span className="text-zinc-200">Schedule VIP Tour</span>
              </div>
            </div>

            <div className="w-full py-1.5 bg-zinc-800 hover:bg-zinc-700 rounded text-center text-xs text-zinc-200 font-medium">
              Calculate Private Mortgage
            </div>
          </div>
        )}

        {type === 'healthcare' && (
          <div className="space-y-3">
            {/* Header */}
            <div className="flex items-center justify-between pb-2 border-b border-zinc-800 text-xs">
              <div className="flex items-center gap-1.5">
                <Stethoscope className="w-3.5 h-3.5 text-zinc-300" />
                <span className="font-semibold text-zinc-100">CURA / CLINIC</span>
              </div>
              <span className="text-[10px] font-mono text-zinc-400">HIPAA Compliant</span>
            </div>

            {/* Doctor roster */}
            <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-semibold text-zinc-100">Dr. Elena Vance, MD</h4>
                  <span className="text-[10px] text-zinc-400">Cardiology & Diagnostics</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-200 font-mono">Available Today</span>
              </div>

              <div className="grid grid-cols-3 gap-1.5 text-center text-[10px] font-mono">
                <div className="py-1 bg-zinc-950 border border-zinc-800 rounded text-zinc-300">10:00 AM</div>
                <div className="py-1 bg-zinc-100 text-zinc-950 font-bold rounded">02:30 PM</div>
                <div className="py-1 bg-zinc-950 border border-zinc-800 rounded text-zinc-300">04:15 PM</div>
              </div>
            </div>

            <div className="p-2 rounded bg-zinc-900/60 border border-zinc-800 flex items-center justify-between text-[11px] text-zinc-300">
              <span className="flex items-center gap-1.5"><FileText className="w-3 h-3 text-zinc-400" /> Digital Patient Intake</span>
              <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
            </div>

            <div className="text-[10px] text-center font-mono text-zinc-500">
              Direct Telehealth & Lab Integration
            </div>
          </div>
        )}

        {type === 'portfolio' && (
          <div className="space-y-3">
            {/* Header */}
            <div className="flex items-center justify-between pb-2 border-b border-zinc-800 text-xs">
              <span className="font-semibold tracking-wider text-zinc-100">KANSO / STUDIO</span>
              <span className="text-[10px] font-mono text-zinc-400">EST. 2021</span>
            </div>

            {/* Asymmetric project showcase */}
            <div className="space-y-2">
              <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800">
                <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 mb-1">
                  <span>PROJECT N° 01</span>
                  <span>2026</span>
                </div>
                <h4 className="text-xs font-semibold text-zinc-100">Spatial Acoustic Architecture</h4>
                <p className="text-[10px] text-zinc-400 mt-1">Industrial Design & Hardware Systems</p>
              </div>

              <div className="p-2.5 rounded-lg bg-zinc-900/60 border border-zinc-800">
                <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 mb-1">
                  <span>PROJECT N° 02</span>
                  <span>2025</span>
                </div>
                <h4 className="text-xs font-semibold text-zinc-200">Hyperion Brand Foundation</h4>
                <p className="text-[10px] text-zinc-400 mt-1">Design Engineering & Digital Art</p>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 pt-1 border-t border-zinc-800/60">
              <span>Tokyo / Zurich</span>
              <span className="text-zinc-300">Open for Commissions</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
