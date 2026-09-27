'use client';

import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Globe, 
  Headphones, 
  Clock, 
  ChevronDown
} from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: 'How does the 10% token deposit model protect me?',
    answer: 'Traditional agencies demand 50% upfront before you see a single pixel. With WebsiteBuilder, you inspect the live, code-rendered template beforehand. You pay just a 10% deposit (e.g. ₹1,499 on a ₹14,999 website) to reserve your slot and initiate domain configuration. The remaining 90% is only released after you test and approve your live website on your custom domain.'
  },
  {
    question: 'What happens during the 48-hour delivery window?',
    answer: 'Once your 10% token is confirmed, our DevOps engineers assign a dedicated desk. We configure your DNS records, provision an automated 256-bit SSL certificate, deploy your Next.js codebase to high-speed global edge networks, and adapt your brand assets (logo, colors, copy, contact forms). You receive live status updates via WhatsApp and email.'
  },
  {
    question: 'Can I connect an existing domain or do you provide one?',
    answer: 'Both! If you already own a domain with GoDaddy, Namecheap, Google, or Cloudflare, we provide simple 1-click DNS record instructions and handle the connection. If you need a brand-new domain, our team registers and configures it on your behalf with zero markup.'
  },
  {
    question: 'What if my website is not live within 48 hours?',
    answer: 'We back our 48-hour SLA with an ironclad 100% refund guarantee. If your production site is not accessible on your domain within 48 hours of asset submission, your 10% token is refunded immediately with zero questions asked.'
  },
  {
    question: 'Do I get complete ownership of the code and website?',
    answer: 'Yes, 100%. Unlike closed proprietary builders (like Wix or Shopify) that lock you in forever, every website in our marketplace is built on standard open-source Next.js 16, React 19, and Tailwind CSS. You receive full GitHub repository access and admin control.'
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="w-full py-16 sm:py-24 bg-slate-50/60 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Trust Pillars Grid */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-indigo-600 font-semibold">
              TRUST & SECURITY GUARANTEES
            </span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900">
              Built on 100% Escrow Protection
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Four non-negotiable standards engineered into every deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">100% Escrow Model</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Pay just 10% today. 90% balance due only after you approve your live site on your domain.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Free SSL & Domain Setup</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Zero extra fees. Automated 256-bit SSL certificate and DNS routing configured by engineers.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">48-Hour Live SLA</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                A hard countdown deadline. If we miss the 48-hour window, your 10% token is instantly refunded.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                <Headphones className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">30-Day Free Support</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct WhatsApp and Slack channel with our engineers for post-launch adjustments and fixes.
              </p>
            </div>

          </div>
        </div>

        {/* Expandable FAQs Accordion */}
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Everything You Need to Know
            </h3>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index}
                  className="rounded-2xl bg-white border border-slate-200/90 shadow-xs overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-semibold text-xs sm:text-sm text-slate-900 hover:text-indigo-600 transition-colors min-h-[48px]"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-indigo-600' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-150">
                      <p className="pt-2">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
