'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Clock, 
  Headphones, 
  CreditCard, 
  Mail, 
  Phone, 
  Lock,
  Layers
} from 'lucide-react';

export default function Footer() {
  return (
    <footer id="main-footer" className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* 5-Column Corporate Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-slate-800">
          
          {/* Columns 1 & 2: Brand identity, 48-Hour Delivery Commitment, Trust Badges (Span 4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/20">
                <Layers className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-bold text-white text-lg tracking-tight block">WebsiteBuilder</span>
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Deployment Hub & Marketplace</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Curated marketplace for production-ready websites. Choose an architected design, reserve with a 10% token deposit, and our engineers configure your custom domain, SSL, and cloud hosting for a guaranteed 48-hour live handover.
            </p>

            {/* 48-Hour Commitment Card */}
            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-semibold text-white">
                <Clock className="w-4 h-4 text-indigo-400" />
                <span>The 48-Hour Handover SLA</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                If your designated domain and production site are not live within 48 hours of asset submission, your 10% token is fully refunded with zero questions.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="pt-1 flex flex-wrap gap-2 text-[11px] font-mono">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-300">
                <Lock className="w-3 h-3 text-indigo-400" />
                <span>256-bit SSL</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-300">
                <CreditCard className="w-3 h-3 text-indigo-400" />
                <span>Razorpay Verified</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-300">
                <Headphones className="w-3 h-3 text-indigo-400" />
                <span>24/7 Deployment Desk</span>
              </div>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Col 3: Popular Categories (Span 2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold">
              Popular Sectors
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="#catalog" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>E-Commerce</span>
                  <span className="text-[10px] font-mono text-slate-500 group-hover:text-slate-300">01</span>
                </Link>
              </li>
              <li>
                <Link href="#catalog" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Corporate Agency</span>
                  <span className="text-[10px] font-mono text-slate-500 group-hover:text-slate-300">02</span>
                </Link>
              </li>
              <li>
                <Link href="#catalog" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Restaurant & Cafe</span>
                  <span className="text-[10px] font-mono text-slate-500 group-hover:text-slate-300">03</span>
                </Link>
              </li>
              <li>
                <Link href="#catalog" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Real Estate</span>
                  <span className="text-[10px] font-mono text-slate-500 group-hover:text-slate-300">04</span>
                </Link>
              </li>
              <li>
                <Link href="#catalog" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Health & Clinics</span>
                  <span className="text-[10px] font-mono text-slate-500 group-hover:text-slate-300">05</span>
                </Link>
              </li>
              <li>
                <Link href="#catalog" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Creative Portfolio</span>
                  <span className="text-[10px] font-mono text-slate-500 group-hover:text-slate-300">06</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Company Links (Span 2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold">
              Platform
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="#catalog" className="hover:text-white transition-colors">
                  Explore Catalog
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="hover:text-white transition-colors">
                  How 10% Booking Works
                </Link>
              </li>
              <li>
                <Link href="#quote-builder" className="hover:text-white transition-colors">
                  Custom Architecture
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  About Our 48h SLA
                </Link>
              </li>
              <li>
                <Link href="#faqs" className="hover:text-white transition-colors">
                  Help & FAQs
                </Link>
              </li>
              <li>
                <span className="text-slate-500 cursor-not-allowed flex items-center justify-between">
                  <span>Careers</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">Hiring</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Col 5: Security & Contact (Span 3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold">
              Deployment & Contact
            </h4>
            
            <div className="space-y-2.5 text-sm">
              <a 
                href="mailto:deployments@websitebuilder.dev"
                className="flex items-center gap-2.5 text-slate-400 hover:text-white transition-colors p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/80"
              >
                <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                <span className="truncate text-xs font-medium">deployments@websitebuilder.dev</span>
              </a>

              <a 
                href="tel:+919876543210"
                className="flex items-center gap-2.5 text-slate-400 hover:text-white transition-colors p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/80"
              >
                <Phone className="w-4 h-4 text-indigo-400 shrink-0" />
                <span className="text-xs font-medium">+91 98765 43210 (Direct Support)</span>
              </a>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-800/70 border border-slate-700/80 space-y-1">
              <div className="flex items-center gap-1.5 text-xs text-white font-semibold">
                <ShieldCheck className="w-4 h-4 text-indigo-400" />
                <span>Escrow Guarantee</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Only a 10% token deposit is charged to initiate provisioning. The 90% balance is released only after you approve the live domain.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Privacy Policy, Terms of Service */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} WebsiteBuilder Hub Inc. All rights reserved.
          </div>
          
          <div className="flex items-center gap-5">
            <Link href="#privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-700">•</span>
            <Link href="#terms" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
            <span className="text-slate-700">•</span>
            <Link href="#security" className="hover:text-slate-300 transition-colors">
              Security Compliance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
