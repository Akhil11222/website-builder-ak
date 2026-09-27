'use client';

import React from 'react';
import { Layers, ShieldCheck, Clock, Mail, Globe, Lock } from 'lucide-react';

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-black border-t border-zinc-800 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-zinc-800">
          
          {/* Brand & Mission (30% Black Structure) */}
          <div className="space-y-3 md:col-span-2 max-w-sm">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white">
                <Layers className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-white text-base">WebsiteBuilder</span>
            </div>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
              The premier marketplace of pre-built, production-tested websites. Reserve with a 10% token deposit, get your domain connected, and launch in 48 hours.
            </p>
            <div className="flex items-center gap-4 text-zinc-300 pt-1">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
                <span>100% Escrow Protected</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-red-500" />
                <span>48h SLA Handover</span>
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h4 className="font-semibold text-white uppercase font-mono text-[11px] tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-1.5">
              <li>
                <button 
                  onClick={() => scrollTo('templates')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Browse Templates
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('how-it-works')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  How 10% Token Works
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('why-us')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Why 10% Escrow Model
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('faq')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Frequently Asked Questions
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div className="space-y-2">
            <h4 className="font-semibold text-white uppercase font-mono text-[11px] tracking-wider">
              Concierge Support
            </h4>
            <div className="space-y-2">
              <a 
                href="mailto:concierge@websitebuilder.live" 
                className="flex items-center gap-2 text-zinc-300 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-blue-500" />
                <span>concierge@websitebuilder.live</span>
              </a>
              <div className="flex items-center gap-2 text-zinc-400">
                <Globe className="w-3.5 h-3.5 text-blue-500" />
                <span>Pan-India Domain & DNS Support</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-400">
                <Lock className="w-3.5 h-3.5 text-blue-500" />
                <span>UPI, Razorpay & Escrow Compliant</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} WebsiteBuilder Hub. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Escrow Agreement</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
