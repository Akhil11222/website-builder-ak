'use client';

import React from 'react';
import { 
  ShoppingBag, 
  ArrowRight, 
  Star, 
  Calendar, 
  MapPin, 
  Clock, 
  Utensils, 
  Building2, 
  Activity, 
  Briefcase,
  Lock,
  CheckCircle2,
  SlidersHorizontal
} from 'lucide-react';

interface CodeMockupProps {
  type: 'ecommerce' | 'agency' | 'restaurant' | 'realestate' | 'healthcare' | 'creative';
  compact?: boolean;
}

export default function CodeMockup({ type, compact = false }: CodeMockupProps) {
  return (
    <div className="w-full h-full bg-[#0d131f] text-slate-200 rounded-xl overflow-hidden flex flex-col border border-white/10 select-none">
      {/* Sleek Browser Window Header */}
      <div className="flex items-center justify-between px-3 py-2 bg-[#090d16] border-b border-white/10 text-xs">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 border border-white/5 text-[10px] text-slate-400 font-mono max-w-[200px] truncate">
          <Lock className="w-2.5 h-2.5 text-indigo-400 shrink-0" />
          <span className="truncate">{type}.websitebuilder.live</span>
        </div>
        <div className="w-8" />
      </div>

      {/* Main Viewport Content */}
      <div className={`p-4 flex-1 flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#0d131f] to-[#0a0e17] ${compact ? 'text-[11px]' : 'text-xs'}`}>
        
        {/* 1. NOVASTORE (E-COMMERCE) */}
        {type === 'ecommerce' && (
          <div className="space-y-3 h-full flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-white/5 pb-2">
              <div className="flex items-center gap-1.5 font-bold tracking-tight text-white text-xs">
                <ShoppingBag className="w-3.5 h-3.5 text-indigo-400" />
                <span>NOVA<span className="text-indigo-400">STORE</span></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-mono text-[9px] border border-indigo-500/30">
                  Cart (2)
                </span>
              </div>
            </div>
            
            <div className="bg-white/5 rounded-lg p-3 border border-white/5 space-y-2">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[9px] font-mono text-indigo-400 uppercase tracking-wider">Featured Drop</span>
                  <h4 className="font-semibold text-white text-xs mt-0.5">Minimalist Chronograph</h4>
                </div>
                <span className="font-bold text-white font-mono text-xs">₹3,499</span>
              </div>
              <div className="w-full h-14 bg-gradient-to-r from-indigo-950/40 via-slate-900 to-blue-950/40 rounded border border-white/5 flex items-center justify-center">
                <div className="w-9 h-9 rounded-full border-2 border-indigo-400/40 flex items-center justify-center text-[10px] text-indigo-300 font-mono">
                  42mm
                </div>
              </div>
              <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1">
                <span className="flex items-center gap-1 text-emerald-400">
                  <CheckCircle2 className="w-3 h-3" /> In Stock (Dispatches 24h)
                </span>
                <span className="text-slate-400">Free UPI Delivery</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-1 text-[10px] text-slate-400">
                <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                <span>4.9 (1.2k Reviews)</span>
              </div>
              <div className="px-2.5 py-1 rounded bg-indigo-600 text-white font-medium text-[10px] flex items-center gap-1">
                <span>Instant Checkout</span>
                <ArrowRight className="w-2.5 h-2.5" />
              </div>
            </div>
          </div>
        )}

        {/* 2. APEXSTUDIO (DIGITAL AGENCY) */}
        {type === 'agency' && (
          <div className="space-y-3 h-full flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-white/5 pb-2">
              <div className="flex items-center gap-1.5 font-bold tracking-tight text-white text-xs">
                <Briefcase className="w-3.5 h-3.5 text-blue-400" />
                <span>APEX<span className="text-blue-400">STUDIO</span></span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 text-[9px] font-mono border border-blue-500/20">
                Available for Q4
              </span>
            </div>

            <div className="space-y-1.5">
              <span className="text-[9px] font-mono text-blue-400 uppercase tracking-wider">Enterprise Digital Studio</span>
              <h4 className="font-bold text-white text-xs leading-snug">
                Engineering high-impact digital experiences for scale.
              </h4>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="bg-white/5 p-2 rounded border border-white/5">
                <div className="text-[9px] text-slate-400">Average ROI</div>
                <div className="text-xs font-bold text-emerald-400 font-mono">+340%</div>
              </div>
              <div className="bg-white/5 p-2 rounded border border-white/5">
                <div className="text-[9px] text-slate-400">Uptime SLA</div>
                <div className="text-xs font-bold text-blue-400 font-mono">99.98%</div>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-white/5 pt-2">
              <span className="text-[10px] text-slate-400">Client: FinTech Global</span>
              <div className="flex items-center gap-1 text-[10px] text-indigo-400 font-medium">
                <span>View Case Study</span>
                <ArrowRight className="w-2.5 h-2.5" />
              </div>
            </div>
          </div>
        )}

        {/* 3. VELVETDINE (FINE DINING & CAFE) */}
        {type === 'restaurant' && (
          <div className="space-y-3 h-full flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-white/5 pb-2">
              <div className="flex items-center gap-1.5 font-bold tracking-tight text-white text-xs">
                <Utensils className="w-3.5 h-3.5 text-amber-400" />
                <span>VELVET<span className="text-amber-400">DINE</span></span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 text-[9px] font-mono border border-amber-500/20">
                Open Tonight
              </span>
            </div>

            <div className="bg-white/5 p-2.5 rounded-lg border border-white/5 space-y-1.5">
              <div className="flex items-center justify-between text-[10px]">
                <span className="font-semibold text-white">Chef&apos;s Tasting Menu</span>
                <span className="font-mono text-amber-400 font-bold">₹2,800 pp</span>
              </div>
              <p className="text-[10px] text-slate-400 line-clamp-1">
                7-Course Woodfired Truffle & Aged Wagyu Experience
              </p>
              <div className="flex items-center gap-2 pt-1 text-[9px] text-slate-300">
                <span className="flex items-center gap-1">
                  <Clock className="w-2.5 h-2.5 text-amber-400" /> 19:30 & 21:30
                </span>
                <span className="flex items-center gap-1">
                  <Star className="w-2.5 h-2.5 text-amber-400 fill-amber-400" /> Michelin Guide &apos;24
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <span className="text-[10px] text-slate-400">QR Digital Menu Active</span>
              <div className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-medium flex items-center gap-1">
                <Calendar className="w-2.5 h-2.5" />
                <span>Reserve Table</span>
              </div>
            </div>
          </div>
        )}

        {/* 4. PRIMEESTATES (LUXURY REAL ESTATE) */}
        {type === 'realestate' && (
          <div className="space-y-3 h-full flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-white/5 pb-2">
              <div className="flex items-center gap-1.5 font-bold tracking-tight text-white text-xs">
                <Building2 className="w-3.5 h-3.5 text-violet-400" />
                <span>PRIME<span className="text-violet-400">ESTATES</span></span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-400 text-[9px] font-mono border border-violet-500/20">
                Exclusive Listing
              </span>
            </div>

            <div className="bg-white/5 p-2.5 rounded-lg border border-white/5 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-white text-xs">The Sky Penthouse</span>
                <span className="font-mono text-violet-400 font-bold text-xs">₹4.20 Cr</span>
              </div>
              <div className="flex items-center gap-1 text-[10px] text-slate-400">
                <MapPin className="w-2.5 h-2.5 text-slate-400" />
                <span>Worli Sea Face, Mumbai</span>
              </div>
              <div className="grid grid-cols-3 gap-1 pt-1 text-[9px] text-slate-300 font-mono">
                <div className="bg-black/30 p-1 rounded text-center">4 Bed</div>
                <div className="bg-black/30 p-1 rounded text-center">3.5 Bath</div>
                <div className="bg-black/30 p-1 rounded text-center">4,200 sqft</div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <span className="text-[10px] text-emerald-400 font-mono">Verified Title</span>
              <div className="px-2.5 py-1 rounded bg-violet-600 text-white text-[10px] font-medium flex items-center gap-1">
                <span>Book 3D Tour</span>
                <ArrowRight className="w-2.5 h-2.5" />
              </div>
            </div>
          </div>
        )}

        {/* 5. PULSECARE (CLINIC & DOCTORS) */}
        {type === 'healthcare' && (
          <div className="space-y-3 h-full flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-white/5 pb-2">
              <div className="flex items-center gap-1.5 font-bold tracking-tight text-white text-xs">
                <Activity className="w-3.5 h-3.5 text-cyan-400" />
                <span>PULSE<span className="text-cyan-400">CARE</span></span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 text-[9px] font-mono border border-cyan-500/20">
                Next: 16:30 Today
              </span>
            </div>

            <div className="bg-white/5 p-2.5 rounded-lg border border-white/5 space-y-1.5">
              <div className="flex items-center justify-between">
                <div>
                  <h5 className="font-semibold text-white text-xs">Dr. R. Sharma, MD</h5>
                  <span className="text-[10px] text-cyan-400">Cardiology & Internal Health</span>
                </div>
                <span className="px-1.5 py-0.5 bg-emerald-500/20 text-emerald-400 text-[9px] rounded font-mono">
                  Online
                </span>
              </div>
              <div className="flex items-center gap-3 pt-1 text-[9px] text-slate-300">
                <span className="flex items-center gap-1">
                  <Star className="w-2.5 h-2.5 text-amber-400 fill-amber-400" /> 4.98 (340 Patients)
                </span>
                <span>15+ Yrs Exp</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <span className="text-[10px] text-slate-400">Video / Clinic Consultation</span>
              <div className="px-2.5 py-1 rounded bg-cyan-600 text-white text-[10px] font-medium flex items-center gap-1">
                <Calendar className="w-2.5 h-2.5" />
                <span>Book Slot</span>
              </div>
            </div>
          </div>
        )}

        {/* 6. MINIMALFOLIO (CREATIVE SHOWCASE) */}
        {type === 'creative' && (
          <div className="space-y-3 h-full flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-white/5 pb-2">
              <div className="flex items-center gap-1.5 font-bold tracking-tight text-white text-xs">
                <SlidersHorizontal className="w-3.5 h-3.5 text-slate-300" />
                <span>MINIMAL<span className="text-indigo-400">FOLIO</span></span>
              </div>
              <span className="text-[9px] font-mono text-slate-400 uppercase">Selected Works &apos;24</span>
            </div>

            <div className="space-y-1">
              <span className="text-[9px] font-mono text-indigo-400">Editorial Architecture</span>
              <h4 className="font-bold text-white text-xs">Pavilion at Lake Lucerne</h4>
              <p className="text-[10px] text-slate-400 line-clamp-1">
                Monolithic concrete pavilion with natural light ventilation.
              </p>
            </div>

            <div className="w-full h-12 bg-white/5 rounded border border-white/5 flex items-center justify-around px-2 text-[10px] font-mono text-slate-300">
              <span>A+ Award</span>
              <span className="text-white/20">|</span>
              <span>Dezeen Winner</span>
              <span className="text-white/20">|</span>
              <span>ArchDaily</span>
            </div>

            <div className="flex items-center justify-between border-t border-white/5 pt-2">
              <span className="text-[10px] text-slate-400">Zurich / Mumbai</span>
              <div className="flex items-center gap-1 text-[10px] text-indigo-400 font-medium">
                <span>View Project</span>
                <ArrowRight className="w-2.5 h-2.5" />
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
