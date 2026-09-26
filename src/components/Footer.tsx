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
  ArrowUpRight, 
  Lock
} from 'lucide-react';

export default function Footer() {
  return (
    <footer id="main-footer" className="bg-zinc-950 text-zinc-300 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* 5-Column Corporate Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-zinc-800/80">
          
          {/* Columns 1 & 2: Brand identity, 48-Hour Delivery Commitment, Trust Badges (Span 4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-700 flex items-center justify-center text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-zinc-100">
                  <path d="M3 20L7.5 4H10.5L12 9.5L13.5 4H16.5L21 20H17.5L15.5 13L13.5 20H10.5L8.5 13L6.5 20H3Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"/>
                  <path d="M7 16H17V17.5H7V16Z" fill="currentColor"/>
                </svg>
              </div>
              <div>
                <span className="font-bold text-white text-lg tracking-tight block">WebsiteBuilder</span>
                <span className="text-[11px] font-mono text-zinc-500 uppercase">Deployment Hub & Marketplace</span>
              </div>
            </div>

            <p className="text-sm text-zinc-400 leading-relaxed">
              Curated marketplace for battle-tested production websites. Choose an architectural template, reserve with a 10% token deposit, and our engineers configure your custom domain, SSL, and cloud hosting for a guaranteed 48-hour live launch.
            </p>

            {/* 48-Hour Commitment Card */}
            <div className="p-3.5 rounded-lg bg-zinc-900/90 border border-zinc-800 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-white">
                <Clock className="w-4 h-4 text-zinc-300" />
                <span>The 48-Hour Handover SLA</span>
              </div>
              <p className="text-xs text-zinc-400 leading-normal">
                If your designated domain and production site are not live within 48 hours of asset submission, your 10% token is fully refunded with zero questions.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="pt-1 flex flex-wrap gap-2 text-[11px] font-mono">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">
                <Lock className="w-3 h-3 text-zinc-400" />
                <span>256-bit SSL</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">
                <CreditCard className="w-3 h-3 text-zinc-400" />
                <span>Razorpay Verified</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">
                <Headphones className="w-3 h-3 text-zinc-400" />
                <span>24/7 Deployment Support</span>
              </div>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Col 3: Popular Categories (Span 2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-200">
              Popular Sectors
            </h4>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              <li>
                <Link href="#catalog" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>E-Commerce</span>
                  <span className="text-[10px] font-mono text-zinc-600 group-hover:text-zinc-400">01</span>
                </Link>
              </li>
              <li>
                <Link href="#catalog" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>SaaS & Cloud</span>
                  <span className="text-[10px] font-mono text-zinc-600 group-hover:text-zinc-400">02</span>
                </Link>
              </li>
              <li>
                <Link href="#catalog" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Corporate Agency</span>
                  <span className="text-[10px] font-mono text-zinc-600 group-hover:text-zinc-400">03</span>
                </Link>
              </li>
              <li>
                <Link href="#catalog" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Design Portfolio</span>
                  <span className="text-[10px] font-mono text-zinc-600 group-hover:text-zinc-400">04</span>
                </Link>
              </li>
              <li>
                <Link href="#catalog" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Medical & Clinic</span>
                  <span className="text-[10px] font-mono text-zinc-600 group-hover:text-zinc-400">05</span>
                </Link>
              </li>
              <li>
                <Link href="#catalog" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Luxury Real Estate</span>
                  <span className="text-[10px] font-mono text-zinc-600 group-hover:text-zinc-400">06</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Company Links (Span 2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-200">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="hover:text-white transition-colors">
                  Pricing & 10% Token Model
                </Link>
              </li>
              <li>
                <Link href="#blogs" className="hover:text-white transition-colors">
                  Deployment Blogs
                </Link>
              </li>
              <li>
                <a href="#quote-builder" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>Custom Engineering</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                </a>
              </li>
              <li>
                <span className="text-zinc-600 cursor-not-allowed flex items-center justify-between">
                  <span>Careers</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-900 text-zinc-500">Hiring</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Col 5: Security & Contact (Span 3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-200">
              Security & Contact
            </h4>
            
            <div className="space-y-3 text-sm">
              <a 
                href="mailto:deployments@websitebuilder.dev"
                className="flex items-center gap-2.5 text-zinc-400 hover:text-white transition-colors p-2 rounded bg-zinc-900/60 border border-zinc-800"
              >
                <Mail className="w-4 h-4 text-zinc-400 shrink-0" />
                <span className="truncate text-xs">deployments@websitebuilder.dev</span>
              </a>

              <a 
                href="tel:+18005550199"
                className="flex items-center gap-2.5 text-zinc-400 hover:text-white transition-colors p-2 rounded bg-zinc-900/60 border border-zinc-800"
              >
                <Phone className="w-4 h-4 text-zinc-400 shrink-0" />
                <span className="text-xs">+1 (800) 555-0199 (US / IN)</span>
              </a>
            </div>

            <div className="p-3 rounded bg-zinc-900 border border-zinc-800/80 space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs text-zinc-200 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" />
                <span>100% Escrow Protection</span>
              </div>
              <p className="text-[11px] text-zinc-400 leading-normal">
                Only a 10% token deposit is charged to initiate server provisioning. The 90% balance is released only after you review and approve the live domain.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Privacy Policy, Terms of Service */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
          <div>
            &copy; {new Date().getFullYear()} WebsiteBuilder Deployment Hub Inc. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <Link href="#privacy" className="hover:text-zinc-300 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-zinc-700">•</span>
            <Link href="#terms" className="hover:text-zinc-300 transition-colors">
              Terms of Service
            </Link>
            <span className="text-zinc-700">•</span>
            <Link href="#security" className="hover:text-zinc-300 transition-colors">
              Security Compliance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
