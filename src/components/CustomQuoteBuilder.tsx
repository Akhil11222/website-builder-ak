'use client';

import React, { useState } from 'react';
import { 
  Check, 
  ShieldCheck, 
  Send, 
  Sliders
} from 'lucide-react';

interface FeatureOption {
  id: string;
  name: string;
  price: number;
  category: string;
}

const AVAILABLE_FEATURES: FeatureOption[] = [
  { id: 'payment-gateway', name: 'Payment Gateway (Razorpay/Stripe)', price: 150, category: 'Commerce' },
  { id: 'custom-domain', name: 'Custom Domain & DNS Setup', price: 50, category: 'Hosting' },
  { id: 'seo-optimization', name: 'Enterprise SEO & Schema Markup', price: 120, category: 'Marketing' },
  { id: 'crm-integration', name: 'HubSpot / Notion CRM Sync', price: 180, category: 'Integration' },
  { id: 'multi-language', name: 'Multi-language (i18n Localization)', price: 200, category: 'Feature' },
  { id: 'cms-integration', name: 'Headless CMS (Sanity / Strapi)', price: 220, category: 'Content' },
  { id: 'auth-membership', name: 'Client Auth & Member Portal', price: 280, category: 'Platform' },
  { id: 'analytics-dashboard', name: 'Privacy-first Analytics (PostHog)', price: 90, category: 'Data' }
];

export default function CustomQuoteBuilder() {
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'payment-gateway', 
    'custom-domain', 
    'seo-optimization'
  ]);
  const [timeline, setTimeline] = useState<'48h' | '24h' | '1week'>('48h');
  const [budgetRange, setBudgetRange] = useState<number>(1200);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleFeature = (id: string) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter(f => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  // Base build price
  const basePrice = 500;
  const featuresTotal = selectedFeatures.reduce((sum, featId) => {
    const feat = AVAILABLE_FEATURES.find(f => f.id === featId);
    return sum + (feat ? feat.price : 0);
  }, 0);

  const rushMultiplier = timeline === '24h' ? 1.25 : 1;
  const estimatedTotal = Math.round((basePrice + featuresTotal) * rushMultiplier);
  const tokenDeposit = Math.round(estimatedTotal * 0.10);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="quote-builder" className="py-20 bg-white border-y border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-mono uppercase text-zinc-700">
            <Sliders className="w-3.5 h-3.5 text-zinc-900" />
            <span>Interactive Custom Specification</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-950">
            Design Your Custom Architecture
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
            Need custom integrations, bespoke CRM hooks, or multi-language localization? Toggle your preferred modules below to generate an instant estimate with guaranteed 10% token reservation.
          </p>
        </div>

        {/* Builder Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Interactive Feature Pills & Sliders (Span 7) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* 1. Feature Pills Selection */}
            <div className="space-y-3.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono uppercase tracking-wider text-zinc-700 font-semibold flex items-center gap-1.5">
                  <span>1. Select Required Capabilities</span>
                  <span className="text-zinc-400 font-normal">({selectedFeatures.length} active)</span>
                </label>
                <span className="text-[11px] text-zinc-500 font-mono">Instant Recalculation</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {AVAILABLE_FEATURES.map((feature) => {
                  const isChecked = selectedFeatures.includes(feature.id);
                  return (
                    <button
                      key={feature.id}
                      type="button"
                      onClick={() => toggleFeature(feature.id)}
                      className={`p-3 rounded-lg border text-left transition-all duration-200 flex items-center justify-between ${
                        isChecked 
                          ? 'bg-zinc-950 text-white border-zinc-950 shadow-xs' 
                          : 'bg-zinc-50 hover:bg-zinc-100 text-zinc-700 border-zinc-200'
                      }`}
                    >
                      <div className="space-y-0.5 pr-2">
                        <span className="text-xs font-semibold block leading-tight">
                          {feature.name}
                        </span>
                        <span className={`text-[10px] font-mono ${isChecked ? 'text-zinc-400' : 'text-zinc-500'}`}>
                          +${feature.price}
                        </span>
                      </div>
                      <div className={`w-5 h-5 rounded flex items-center justify-center shrink-0 border ${
                        isChecked ? 'bg-white text-zinc-950 border-white' : 'border-zinc-300 bg-white text-transparent'
                      }`}>
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Timeline Selector */}
            <div className="space-y-3">
              <label className="text-xs font-mono uppercase tracking-wider text-zinc-700 font-semibold block">
                2. Guaranteed Deployment Timeline
              </label>
              
              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setTimeline('48h')}
                  className={`p-3 rounded-lg border text-center transition-all ${
                    timeline === '48h'
                      ? 'bg-zinc-950 text-white border-zinc-950'
                      : 'bg-zinc-50 text-zinc-700 border-zinc-200 hover:bg-zinc-100'
                  }`}
                >
                  <span className="text-xs font-bold block">Standard 48 Hours</span>
                  <span className={`text-[10px] font-mono ${timeline === '48h' ? 'text-zinc-400' : 'text-zinc-500'}`}>Included Base SLA</span>
                </button>

                <button
                  type="button"
                  onClick={() => setTimeline('24h')}
                  className={`p-3 rounded-lg border text-center transition-all ${
                    timeline === '24h'
                      ? 'bg-zinc-950 text-white border-zinc-950'
                      : 'bg-zinc-50 text-zinc-700 border-zinc-200 hover:bg-zinc-100'
                  }`}
                >
                  <span className="text-xs font-bold block">Rush 24 Hours</span>
                  <span className={`text-[10px] font-mono ${timeline === '24h' ? 'text-zinc-400' : 'text-zinc-500'}`}>+25% Dedicated Sprint</span>
                </button>

                <button
                  type="button"
                  onClick={() => setTimeline('1week')}
                  className={`p-3 rounded-lg border text-center transition-all ${
                    timeline === '1week'
                      ? 'bg-zinc-950 text-white border-zinc-950'
                      : 'bg-zinc-50 text-zinc-700 border-zinc-200 hover:bg-zinc-100'
                  }`}
                >
                  <span className="text-xs font-bold block">Extended 1 Week</span>
                  <span className={`text-[10px] font-mono ${timeline === '1week' ? 'text-zinc-400' : 'text-zinc-500'}`}>Includes Iteration Calls</span>
                </button>
              </div>
            </div>

            {/* 3. Budget Range Slider */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono uppercase tracking-wider text-zinc-700 font-semibold">
                  3. Target Budget Cap
                </label>
                <span className="text-sm font-bold font-mono text-zinc-900">
                  ${budgetRange.toLocaleString()} USD
                </span>
              </div>
              <input 
                type="range"
                min="500"
                max="5000"
                step="100"
                value={budgetRange}
                onChange={(e) => setBudgetRange(Number(e.target.value))}
                className="w-full accent-zinc-950 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] font-mono text-zinc-400">
                <span>$500</span>
                <span>$2,500</span>
                <span>$5,000+</span>
              </div>
            </div>

          </div>

          {/* Right Column: Live Estimate & Contact Form (Span 5) */}
          <div className="lg:col-span-5 bg-zinc-950 text-white rounded-2xl p-6 sm:p-7 border border-zinc-800 shadow-xl space-y-6">
            
            {/* Live Pricing Breakdown Card */}
            <div className="space-y-3 pb-6 border-b border-zinc-800">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-zinc-400">ESTIMATED ARCHITECTURE</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
                  {timeline === '24h' ? '24h Rush SLA' : '48h Standard SLA'}
                </span>
              </div>

              <div className="flex items-baseline justify-between pt-1">
                <div>
                  <span className="text-3xl font-extrabold font-mono text-white">
                    ${estimatedTotal}
                  </span>
                  <span className="text-xs text-zinc-400 ml-1.5 font-mono">full handover</span>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-mono text-zinc-400 block uppercase">10% Token To Start</span>
                  <span className="text-lg font-bold font-mono text-white bg-zinc-900 px-2.5 py-0.5 rounded border border-zinc-700 inline-block mt-0.5">
                    ${tokenDeposit}
                  </span>
                </div>
              </div>

              <div className="p-2.5 rounded bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-300 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-zinc-400 shrink-0" />
                <span>Zero full payment upfront. You pay the remaining ${estimatedTotal - tokenDeposit} only after live verification.</span>
              </div>
            </div>

            {/* Contact Form or Confirmation */}
            {isSubmitted ? (
              <div className="py-8 text-center space-y-3 animate-in zoom-in-95 duration-200">
                <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-700 mx-auto flex items-center justify-center text-white">
                  <Check className="w-6 h-6 stroke-[2.5]" />
                </div>
                <h4 className="text-lg font-bold text-white">Quote Request Transmitted</h4>
                <p className="text-xs text-zinc-400 max-w-xs mx-auto leading-relaxed">
                  Thank you {fullName || 'there'}. Our solutions engineer will review your {selectedFeatures.length} requested modules and email your custom scope within 2 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-3 px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-medium text-zinc-200 transition-colors"
                >
                  Adjust Specification
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block font-semibold">
                  Submit Specification for Direct Review
                </span>

                <div className="space-y-1">
                  <label className="text-xs text-zinc-300">Your Full Name</label>
                  <input 
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Alex Morgan"
                    className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-white placeholder:text-zinc-500 focus:outline-hidden focus:border-white transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-zinc-300">Work Email Address</label>
                  <input 
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@acmecorp.com"
                    className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-white placeholder:text-zinc-500 focus:outline-hidden focus:border-white transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-zinc-300">Project Description & Domain</label>
                  <textarea 
                    rows={2}
                    value={projectDescription}
                    onChange={(e) => setProjectDescription(e.target.value)}
                    placeholder="Describe your brand, custom requirements, or existing website..."
                    className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-white placeholder:text-zinc-500 focus:outline-hidden focus:border-white transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-white hover:bg-zinc-200 text-zinc-950 rounded-lg text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-colors mt-2 shadow-sm"
                >
                  <span>Request Custom Quote & 10% Slot</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
