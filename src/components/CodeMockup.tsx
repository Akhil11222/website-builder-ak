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
  ChevronRight,
  Star
} from 'lucide-react';

interface CodeMockupProps {
  type: 'ecommerce' | 'saas' | 'restaurant' | 'realestate' | 'healthcare' | 'portfolio';
  demoUrl?: string;
}

export default function CodeMockup({ type, demoUrl = 'preview.websitebuilder.dev' }: CodeMockupProps) {
  return (
    <div className="w-full h-full flex flex-col bg-white text-slate-800 rounded-xl overflow-hidden border border-slate-200 shadow-sm select-none">
      
      {/* Modern Browser Chrome */}
      <div className="flex items-center justify-between px-3.5 py-2.5 bg-slate-50 border-b border-slate-200/80 text-xs shrink-0">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1 bg-white rounded-md border border-slate-200 text-slate-500 font-mono text-[11px] max-w-[240px] truncate shadow-xs">
          <Lock className="w-3 h-3 text-slate-400 shrink-0" />
          <span className="truncate">{demoUrl}</span>
        </div>

        <div className="flex items-center gap-1 font-mono text-[10px]">
          <span className="px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 font-medium border border-indigo-100/80">
            LIVE DEMO
          </span>
        </div>
      </div>

      {/* Viewport Content (Eye-Pleasing Warm Light Layout) */}
      <div className="p-3.5 sm:p-4 overflow-y-auto overflow-x-hidden flex-1 flex flex-col justify-between bg-slate-50/50 font-sans">
        
        {/* E-Commerce Mockup */}
        {type === 'ecommerce' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200/80 text-xs">
              <span className="font-bold tracking-tight text-slate-900 text-xs">AURA STORE</span>
              <div className="flex items-center gap-2">
                <span className="text-slate-400 text-[11px] hidden sm:inline">Search apparel...</span>
                <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 text-[11px] font-medium border border-indigo-100">
                  <ShoppingBag className="w-3 h-3" />
                  <span>Cart (2)</span>
                </div>
              </div>
            </div>

            {/* Hero banner */}
            <div className="p-3.5 rounded-xl bg-gradient-to-r from-indigo-50/90 via-blue-50/50 to-slate-50 border border-indigo-100/80">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase text-indigo-600 font-semibold tracking-wider">
                    NEW ARRIVALS 2026
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5">
                    Minimalist Merino Overcoat
                  </h4>
                </div>
                <div className="flex items-center gap-1 text-[11px] px-2.5 py-1 bg-indigo-600 text-white font-medium rounded-lg shadow-xs">
                  <span>Shop</span>
                  <ArrowUpRight className="w-3 h-3" />
                </div>
              </div>
            </div>

            {/* Products grid */}
            <div className="grid grid-cols-2 gap-2.5">
              <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 space-y-2 shadow-xs">
                <div className="h-16 w-full rounded-lg bg-slate-100 flex items-center justify-center border border-slate-200/50">
                  <div className="w-7 h-7 rounded-md bg-white border border-slate-300 flex items-center justify-center shadow-xs">
                    <span className="text-[9px] font-mono text-slate-500 font-bold">01</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-slate-800 font-medium truncate">Bonded Coat</span>
                  <span className="font-bold text-slate-900">₹3,499</span>
                </div>
                <div className="w-full py-1 bg-slate-900 hover:bg-slate-800 text-center rounded-md text-[10px] text-white font-medium transition-colors">
                  Add to Cart
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 space-y-2 shadow-xs">
                <div className="h-16 w-full rounded-lg bg-slate-100 flex items-center justify-center border border-slate-200/50">
                  <div className="w-7 h-7 rounded-md bg-white border border-slate-300 flex items-center justify-center shadow-xs">
                    <span className="text-[9px] font-mono text-slate-500 font-bold">02</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-slate-800 font-medium truncate">Tailored Trouser</span>
                  <span className="font-bold text-slate-900">₹2,199</span>
                </div>
                <div className="w-full py-1 bg-slate-900 hover:bg-slate-800 text-center rounded-md text-[10px] text-white font-medium transition-colors">
                  Add to Cart
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-200/70 flex items-center justify-between text-[10px] text-slate-500 font-mono">
              <span className="flex items-center gap-1 font-sans">
                <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />
                Razorpay & Stripe Verified
              </span>
              <span>Express Delivery</span>
            </div>
          </div>
        )}

        {/* SaaS / Agency Mockup */}
        {type === 'saas' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200/80 text-xs">
              <div className="flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-indigo-600" />
                <span className="font-bold text-slate-900">NOVA CLOUD</span>
              </div>
              <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[10px] font-mono border border-slate-200">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                <span>99.99% SLA</span>
              </div>
            </div>

            {/* Metrics Panel */}
            <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 space-y-2 shadow-xs">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">Monthly API Traffic</span>
                <span className="font-mono text-slate-900 font-bold">14.8M requests</span>
              </div>
              <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-600 rounded-full w-4/5" />
              </div>
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>P99: 14ms Latency</span>
                <span>Active Nodes: 42</span>
              </div>
            </div>

            {/* Terminal Preview */}
            <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 font-mono text-[10px] text-slate-200 space-y-1 shadow-xs">
              <div className="flex items-center gap-1 text-slate-400 text-[9px]">
                <Terminal className="w-2.5 h-2.5" />
                <span>deploy.sh</span>
              </div>
              <div className="text-slate-400">$ nova deploy --env production</div>
              <div className="text-indigo-400">Deployed v3.2.0 to 18 global edge zones in 420ms</div>
            </div>

            {/* Pricing Tiers Preview */}
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div className="p-2 rounded-lg bg-white border border-slate-200 text-center shadow-xs">
                <span className="text-slate-500 text-[10px] block">Growth Tier</span>
                <span className="font-bold text-slate-900">₹2,999/mo</span>
              </div>
              <div className="p-2 rounded-lg bg-indigo-50 border border-indigo-200 text-center shadow-xs">
                <span className="text-indigo-700 text-[10px] block font-medium">Enterprise</span>
                <span className="font-bold text-indigo-950">₹7,999/mo</span>
              </div>
            </div>
          </div>
        )}

        {/* Restaurant & Cafe Mockup */}
        {type === 'restaurant' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200/80 text-xs">
              <span className="font-serif font-bold tracking-wider text-slate-900 uppercase">L&apos;ARTISAN DINING</span>
              <span className="text-[10px] font-mono text-slate-500">TABLE 04 • DINNER</span>
            </div>

            {/* Tasting Menu */}
            <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 space-y-1.5 shadow-xs">
              <div className="flex items-center justify-between text-xs">
                <span className="font-serif font-bold text-slate-900">7-Course Chef Tasting</span>
                <span className="font-bold text-indigo-700">₹2,250 / Person</span>
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Wild mushroom consommé, slow-braised duck leg, truffle emulsion, and French wine pairing.
              </p>
            </div>

            {/* Reservation Widget */}
            <div className="p-3 rounded-xl bg-white border border-slate-200/80 text-[11px] space-y-2 shadow-xs">
              <div className="flex items-center justify-between text-slate-600">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-indigo-600" />
                  Tonight, Oct 28
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-indigo-600" />
                  8:00 PM (2 Guests)
                </span>
              </div>
              <div className="w-full py-1.5 bg-slate-900 hover:bg-slate-800 text-white font-medium text-center rounded-lg text-xs transition-colors">
                Confirm Table Reservation
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] text-slate-500 pt-0.5">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-slate-400" />
                Bandra West, Mumbai
              </span>
              <span className="text-slate-600 font-medium">Valet Parking Available</span>
            </div>
          </div>
        )}

        {/* Real Estate Mockup */}
        {type === 'realestate' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200/80 text-xs">
              <div className="flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-slate-700" />
                <span className="font-bold text-slate-900">VANGUARD LIVING</span>
              </div>
              <span className="text-[10px] font-mono text-slate-500">MLS #9204</span>
            </div>

            {/* Property Card */}
            <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 space-y-2.5 shadow-xs">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-mono text-indigo-600 uppercase font-semibold">
                    SEA-FACING PENTHOUSE
                  </span>
                  <h4 className="text-xs font-bold text-slate-900">The Glass Pavilion, Worli</h4>
                </div>
                <span className="text-xs font-bold text-slate-900 font-mono">₹8.50 Cr</span>
              </div>

              {/* Floor Layout Schematic */}
              <div className="h-14 w-full rounded-lg bg-slate-50 border border-slate-200/80 p-2 flex items-center justify-around font-mono text-[9px] text-slate-500">
                <div className="border border-slate-300 bg-white p-1 rounded text-center w-16 shadow-xs">
                  <span className="block text-slate-800 font-bold">MASTER</span>
                  <span>620 sqft</span>
                </div>
                <div className="border border-slate-300 bg-white p-1 rounded text-center w-16 shadow-xs">
                  <span className="block text-slate-800 font-bold">DECK</span>
                  <span>420 sqft</span>
                </div>
                <div className="border border-slate-300 bg-white p-1 rounded text-center w-16 shadow-xs">
                  <span className="block text-slate-800 font-bold">LIVING</span>
                  <span>1,150 sqft</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-[10px] text-slate-600">
                <span>4 Beds • 4.5 Baths • 3,850 SqFt</span>
                <span className="font-medium text-indigo-600">VIP Private Tour</span>
              </div>
            </div>

            <div className="w-full py-1.5 bg-slate-900 hover:bg-slate-800 rounded-lg text-center text-xs text-white font-medium transition-colors">
              Schedule Private Showing
            </div>
          </div>
        )}

        {/* Health & Clinics Mockup */}
        {type === 'healthcare' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200/80 text-xs">
              <div className="flex items-center gap-1.5">
                <Stethoscope className="w-3.5 h-3.5 text-indigo-600" />
                <span className="font-bold text-slate-900">CURA CLINIC</span>
              </div>
              <span className="text-[10px] font-mono text-slate-500">NABH Verified</span>
            </div>

            {/* Doctor Info */}
            <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 space-y-2 shadow-xs">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Dr. Ananya Sharma, MD</h4>
                  <span className="text-[10px] text-slate-500">Senior Cardiologist & Diagnostics</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 font-medium">
                  Available Today
                </span>
              </div>

              <div className="grid grid-cols-3 gap-1.5 text-center text-[10px] font-mono">
                <div className="py-1 bg-slate-50 border border-slate-200 rounded-md text-slate-700">11:00 AM</div>
                <div className="py-1 bg-indigo-600 text-white font-bold rounded-md shadow-xs">03:30 PM</div>
                <div className="py-1 bg-slate-50 border border-slate-200 rounded-md text-slate-700">05:45 PM</div>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 flex items-center justify-between text-[11px] text-slate-700 shadow-xs">
              <span className="flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-indigo-600" />
                Paperless Digital Registration
              </span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </div>

            <div className="text-[10px] text-center text-slate-500 font-sans">
              Instant WhatsApp Appointment Confirmation
            </div>
          </div>
        )}

        {/* Portfolio Mockup */}
        {type === 'portfolio' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200/80 text-xs">
              <span className="font-bold tracking-tight text-slate-900">KANSO STUDIO</span>
              <span className="text-[10px] font-mono text-slate-500">EST. 2022</span>
            </div>

            <div className="space-y-2">
              <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-1">
                  <span>CASE STUDY 01</span>
                  <span>2026</span>
                </div>
                <h4 className="text-xs font-bold text-slate-900">Spatial Audio Acoustic Shell</h4>
                <p className="text-[10px] text-slate-500 mt-0.5">Industrial Hardware & Spatial UI Design</p>
              </div>

              <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-1">
                  <span>CASE STUDY 02</span>
                  <span>2025</span>
                </div>
                <h4 className="text-xs font-bold text-slate-900">Hyperion FinTech Brand System</h4>
                <p className="text-[10px] text-slate-500 mt-0.5">Brand Identity & Design Engineering</p>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1 border-t border-slate-200/70">
              <span className="flex items-center gap-1 text-slate-700 font-medium">
                <Star className="w-3 h-3 text-amber-500" />
                18 International Awards
              </span>
              <span className="text-indigo-600 font-medium">Open for Q4 Projects</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
