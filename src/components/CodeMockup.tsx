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
    <div className="w-full h-full bg-white text-zinc-900 rounded-xl overflow-hidden flex flex-col border border-zinc-200 select-none shadow-sm">
      {/* Sleek Browser Window Header (Clean Light 60% White / Neutral Zinc) */}
      <div className="flex items-center justify-between px-3 py-2 bg-zinc-100 border-b border-zinc-200 text-xs">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-zinc-200 text-[10px] text-zinc-600 font-mono max-w-[200px] truncate shadow-2xs">
          <Lock className="w-2.5 h-2.5 text-blue-600 shrink-0" />
          <span className="truncate">{type}.websitebuilder.live</span>
        </div>
        <div className="w-8" />
      </div>

      {/* Main Viewport Content (Pure White 60% Canvas) */}
      <div className={`p-4 flex-1 flex flex-col justify-between overflow-hidden bg-white ${compact ? 'text-[11px]' : 'text-xs'}`}>
        
        {/* 1. NOVASTORE (E-COMMERCE) */}
        {type === 'ecommerce' && (
          <div className="space-y-3 h-full flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-zinc-100 pb-2">
              <div className="flex items-center gap-1.5 font-bold tracking-tight text-zinc-950 text-xs">
                <ShoppingBag className="w-3.5 h-3.5 text-blue-600" />
                <span>NOVA<span className="text-blue-600">STORE</span></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-800 font-mono text-[9px] border border-zinc-200 font-semibold">
                  Cart (2)
                </span>
              </div>
            </div>
            
            <div className="bg-zinc-50 rounded-lg p-3 border border-zinc-200 space-y-2">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[9px] font-mono text-blue-600 uppercase tracking-wider font-semibold">Featured Drop</span>
                  <h4 className="font-semibold text-zinc-950 text-xs mt-0.5">Minimalist Chronograph</h4>
                </div>
                <span className="font-bold text-zinc-950 font-mono text-xs">₹3,499</span>
              </div>
              <div className="w-full h-14 bg-white rounded border border-zinc-200 flex items-center justify-center">
                <div className="w-9 h-9 rounded-full border-2 border-zinc-300 flex items-center justify-center text-[10px] text-zinc-700 font-mono font-medium">
                  42mm
                </div>
              </div>
              <div className="flex items-center justify-between text-[10px] text-zinc-600 pt-1">
                <span className="flex items-center gap-1 text-blue-600 font-medium">
                  <CheckCircle2 className="w-3 h-3 text-blue-600" /> Only 2 Left (Dispatches 24h)
                </span>
                <span className="text-zinc-500 font-medium">Free Delivery</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-1 text-[10px] text-zinc-500">
                <Star className="w-3 h-3 text-zinc-400 fill-zinc-400" />
                <span>4.9 (1.2k Reviews)</span>
              </div>
              <div className="px-2.5 py-1 rounded bg-black text-white font-medium text-[10px] flex items-center gap-1 hover:bg-zinc-800 transition-colors">
                <span>Instant Checkout</span>
                <ArrowRight className="w-2.5 h-2.5 text-blue-400" />
              </div>
            </div>
          </div>
        )}

        {/* 2. APEXSTUDIO (DIGITAL AGENCY) */}
        {type === 'agency' && (
          <div className="space-y-3 h-full flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-zinc-100 pb-2">
              <div className="flex items-center gap-1.5 font-bold tracking-tight text-zinc-950 text-xs">
                <Briefcase className="w-3.5 h-3.5 text-blue-600" />
                <span>APEX<span className="text-blue-600">STUDIO</span></span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 text-[9px] font-mono border border-blue-200 font-medium">
                Available for Q4
              </span>
            </div>

            <div className="space-y-1.5">
              <span className="text-[9px] font-mono text-blue-600 uppercase tracking-wider font-semibold">Enterprise Digital Studio</span>
              <h4 className="font-bold text-zinc-950 text-xs leading-snug">
                Engineering high-impact digital experiences for scale.
              </h4>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="bg-zinc-50 p-2 rounded border border-zinc-200">
                <div className="text-[9px] text-zinc-500">Average ROI</div>
                <div className="text-xs font-bold text-zinc-950 font-mono">+340%</div>
              </div>
              <div className="bg-zinc-50 p-2 rounded border border-zinc-200">
                <div className="text-[9px] text-zinc-500">Uptime SLA</div>
                <div className="text-xs font-bold text-blue-600 font-mono">99.98%</div>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-zinc-100 pt-2">
              <span className="text-[10px] text-zinc-500">Client: FinTech Global</span>
              <div className="flex items-center gap-1 text-[10px] text-blue-600 font-medium hover:underline">
                <span>View Case Study</span>
                <ArrowRight className="w-2.5 h-2.5" />
              </div>
            </div>
          </div>
        )}

        {/* 3. VELVETDINE (FINE DINING & CAFE) */}
        {type === 'restaurant' && (
          <div className="space-y-3 h-full flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-zinc-100 pb-2">
              <div className="flex items-center gap-1.5 font-bold tracking-tight text-zinc-950 text-xs">
                <Utensils className="w-3.5 h-3.5 text-zinc-900" />
                <span>VELVET<span className="text-zinc-500">DINE</span></span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[9px] font-mono border border-blue-200 font-semibold">
                Slots Open
              </span>
            </div>

            <div className="bg-zinc-50 p-2.5 rounded-lg border border-zinc-200 space-y-1.5">
              <div className="flex items-center justify-between text-[10px]">
                <span className="font-semibold text-zinc-950">Chef&apos;s Tasting Menu</span>
                <span className="font-mono text-zinc-950 font-bold">₹2,800 pp</span>
              </div>
              <p className="text-[10px] text-zinc-600 line-clamp-1">
                7-Course Woodfired Truffle & Aged Wagyu Experience
              </p>
              <div className="flex items-center gap-2 pt-1 text-[9px] text-zinc-600">
                <span className="flex items-center gap-1">
                  <Clock className="w-2.5 h-2.5 text-blue-600" /> 19:30 & 21:30
                </span>
                <span className="flex items-center gap-1">
                  <Star className="w-2.5 h-2.5 text-zinc-400 fill-zinc-400" /> Michelin Guide &apos;24
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <span className="text-[10px] text-zinc-500">QR Smart Menu</span>
              <div className="px-2.5 py-1 rounded bg-black text-white text-[10px] font-medium flex items-center gap-1 hover:bg-zinc-800 transition-colors">
                <Calendar className="w-2.5 h-2.5 text-blue-400" />
                <span>Reserve Table</span>
              </div>
            </div>
          </div>
        )}

        {/* 4. PRIMEESTATES (LUXURY REAL ESTATE) */}
        {type === 'realestate' && (
          <div className="space-y-3 h-full flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-zinc-100 pb-2">
              <div className="flex items-center gap-1.5 font-bold tracking-tight text-zinc-950 text-xs">
                <Building2 className="w-3.5 h-3.5 text-blue-600" />
                <span>PRIME<span className="text-zinc-600">ESTATES</span></span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[9px] font-mono border border-blue-200 font-semibold">
                Exclusive
              </span>
            </div>

            <div className="bg-zinc-50 p-2.5 rounded-lg border border-zinc-200 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-zinc-950 text-xs">The Sky Penthouse</span>
                <span className="font-mono text-zinc-950 font-bold text-xs">₹4.20 Cr</span>
              </div>
              <div className="flex items-center gap-1 text-[10px] text-zinc-600">
                <MapPin className="w-2.5 h-2.5 text-zinc-400" />
                <span>Worli Sea Face, Mumbai</span>
              </div>
              <div className="grid grid-cols-3 gap-1 pt-1 text-[9px] text-zinc-700 font-mono">
                <div className="bg-white border border-zinc-200 p-1 rounded text-center">4 Bed</div>
                <div className="bg-white border border-zinc-200 p-1 rounded text-center">3.5 Bath</div>
                <div className="bg-white border border-zinc-200 p-1 rounded text-center">4,200 sqft</div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <span className="text-[10px] text-zinc-600 font-mono">Verified Title</span>
              <div className="px-2.5 py-1 rounded bg-blue-600 text-white text-[10px] font-medium flex items-center gap-1 hover:bg-blue-700 transition-colors">
                <span>Book 3D Tour</span>
                <ArrowRight className="w-2.5 h-2.5" />
              </div>
            </div>
          </div>
        )}

        {/* 5. PULSECARE (CLINIC & DOCTORS) */}
        {type === 'healthcare' && (
          <div className="space-y-3 h-full flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-zinc-100 pb-2">
              <div className="flex items-center gap-1.5 font-bold tracking-tight text-zinc-950 text-xs">
                <Activity className="w-3.5 h-3.5 text-blue-600" />
                <span>PULSE<span className="text-zinc-600">CARE</span></span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[9px] font-mono border border-blue-200 font-semibold">
                Slot: 16:30 Today
              </span>
            </div>

            <div className="bg-zinc-50 p-2.5 rounded-lg border border-zinc-200 space-y-1.5">
              <div className="flex items-center justify-between">
                <div>
                  <h5 className="font-semibold text-zinc-950 text-xs">Dr. R. Sharma, MD</h5>
                  <span className="text-[10px] text-blue-600 font-medium">Cardiology & Internal Health</span>
                </div>
                <span className="px-1.5 py-0.5 bg-zinc-200 text-zinc-800 text-[9px] rounded font-mono font-semibold">
                  Online
                </span>
              </div>
              <div className="flex items-center gap-3 pt-1 text-[9px] text-zinc-600">
                <span className="flex items-center gap-1">
                  <Star className="w-2.5 h-2.5 text-zinc-400 fill-zinc-400" /> 4.98 (340 Patients)
                </span>
                <span>15+ Yrs Exp</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <span className="text-[10px] text-zinc-500">Video / Clinic Visit</span>
              <div className="px-2.5 py-1 rounded bg-black text-white text-[10px] font-medium flex items-center gap-1 hover:bg-zinc-800 transition-colors">
                <Calendar className="w-2.5 h-2.5 text-blue-400" />
                <span>Book Slot</span>
              </div>
            </div>
          </div>
        )}

        {/* 6. MINIMALFOLIO (CREATIVE SHOWCASE) */}
        {type === 'creative' && (
          <div className="space-y-3 h-full flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-zinc-100 pb-2">
              <div className="flex items-center gap-1.5 font-bold tracking-tight text-zinc-950 text-xs">
                <SlidersHorizontal className="w-3.5 h-3.5 text-zinc-900" />
                <span>MINIMAL<span className="text-zinc-500">FOLIO</span></span>
              </div>
              <span className="text-[9px] font-mono text-zinc-500 uppercase">Selected Works &apos;24</span>
            </div>

            <div className="space-y-1">
              <span className="text-[9px] font-mono text-blue-600 font-semibold">Editorial Architecture</span>
              <h4 className="font-bold text-zinc-950 text-xs">Pavilion at Lake Lucerne</h4>
              <p className="text-[10px] text-zinc-600 line-clamp-1">
                Monolithic concrete pavilion with natural light ventilation.
              </p>
            </div>

            <div className="w-full h-12 bg-zinc-50 rounded border border-zinc-200 flex items-center justify-around px-2 text-[10px] font-mono text-zinc-700">
              <span>A+ Award</span>
              <span className="text-zinc-300">|</span>
              <span>Dezeen Winner</span>
              <span className="text-zinc-300">|</span>
              <span>ArchDaily</span>
            </div>

            <div className="flex items-center justify-between border-t border-zinc-100 pt-2">
              <span className="text-[10px] text-zinc-500">Zurich / Mumbai</span>
              <div className="flex items-center gap-1 text-[10px] text-blue-600 font-medium hover:underline">
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
