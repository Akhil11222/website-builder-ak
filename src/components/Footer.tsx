'use client';

import React from 'react';
import { 
  Layers, 
  ShieldCheck, 
  Clock, 
  Mail, 
  Lock, 
  Phone, 
  MapPin 
} from 'lucide-react';

interface FooterProps {
  onQuoteClick: () => void;
  onBlogsClick: () => void;
  onAboutClick: () => void;
}

export default function Footer({ onQuoteClick, onBlogsClick, onAboutClick }: FooterProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-slate-50 border-t border-slate-200 text-slate-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        
        {/* 4-Column Enterprise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-200">
          
          {/* Col 1: Brand logo, 48h SLA mission, escrow trust badge (Span 4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 via-blue-500 to-cyan-500 flex items-center justify-center text-white shadow-sm">
                <Layers className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-slate-900 text-base tracking-tight">WebsiteBuilder</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-mono uppercase font-bold bg-blue-50 text-blue-700 border border-blue-200">
                HUB
              </span>
            </div>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-sm">
              The premier enterprise platform for production-ready websites. Backed by our 10% token deposit escrow model and 48-hour live domain deployment guarantee.
            </p>

            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-slate-700">
                <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                <span>100% Escrow Protected Reservation</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Clock className="w-4 h-4 text-blue-600 shrink-0" />
                <span>48-Hour Live Turnaround SLA</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Lock className="w-4 h-4 text-blue-600 shrink-0" />
                <span>256-Bit SSL Cloudflare Routing</span>
              </div>
            </div>
          </div>

          {/* Col 2: Websites directory (Span 3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-semibold text-slate-900 uppercase font-mono text-[11px] tracking-wider">
              Websites Directory
            </h4>
            <ul className="space-y-2 text-slate-600">
              <li>
                <button 
                  onClick={() => scrollTo('websites')} 
                  className="hover:text-blue-600 transition-colors cursor-pointer"
                >
                  E-Commerce Storefronts
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('websites')} 
                  className="hover:text-blue-600 transition-colors cursor-pointer"
                >
                  Corporate SaaS &amp; Agency Portals
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('websites')} 
                  className="hover:text-blue-600 transition-colors cursor-pointer"
                >
                  Hospitality &amp; Restaurant Menus
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('websites')} 
                  className="hover:text-blue-600 transition-colors cursor-pointer"
                >
                  Real Estate 3D Portals
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('websites')} 
                  className="hover:text-blue-600 transition-colors cursor-pointer"
                >
                  Healthcare &amp; Clinical Portals
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Company links (Span 2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-semibold text-slate-900 uppercase font-mono text-[11px] tracking-wider">
              Company
            </h4>
            <ul className="space-y-2 text-slate-600">
              <li>
                <button 
                  onClick={onAboutClick} 
                  className="hover:text-blue-600 transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('how-it-works')} 
                  className="hover:text-blue-600 transition-colors cursor-pointer"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button 
                  onClick={onBlogsClick} 
                  className="hover:text-blue-600 transition-colors cursor-pointer"
                >
                  Blogs &amp; Case Studies
                </button>
              </li>
              <li>
                <button 
                  onClick={onQuoteClick} 
                  className="hover:text-blue-600 transition-colors cursor-pointer"
                >
                  Pricing &amp; 10% Escrow
                </button>
              </li>
              <li>
                <span className="text-slate-400 cursor-not-allowed">
                  Careers (Hiring DevOps)
                </span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Location (Span 3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-semibold text-slate-900 uppercase font-mono text-[11px] tracking-wider">
              Concierge &amp; Engineering
            </h4>
            <div className="space-y-2.5">
              <a 
                href="https://wa.me/919876543210" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>+91 98765 43210 (WhatsApp Priority)</span>
              </a>

              <a 
                href="mailto:engineering@websitebuilder.live" 
                className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>engineering@websitebuilder.live</span>
              </a>

              <div className="flex items-start gap-2 text-slate-500 pt-1">
                <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                <span>Cyber City IT Corridor, Hyderabad &amp; Bengaluru, India</span>
              </div>

              <div className="pt-2">
                <button
                  onClick={onQuoteClick}
                  className="w-full py-2 px-3 rounded-lg text-xs font-semibold bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 transition-colors cursor-pointer"
                >
                  Get 48h Deployment Quote
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Legal, 256-bit SSL */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} WebsiteBuilder Hub. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-700 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-700 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-700 cursor-pointer">10% Escrow Guarantee</span>
            <span className="flex items-center gap-1 text-slate-500">
              <Lock className="w-3 h-3 text-blue-600" />
              <span>256-Bit SSL Encrypted</span>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
