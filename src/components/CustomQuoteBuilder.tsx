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
  description: string;
}

const AVAILABLE_FEATURES: FeatureOption[] = [
  { id: 'payment-gateway', name: 'Payment Gateway (Razorpay/Stripe)', price: 2500, category: 'Payments', description: 'Instant UPI, Cards, Netbanking & Webhooks' },
  { id: 'custom-domain', name: 'Custom Domain & SSL Setup', price: 999, category: 'Hosting', description: '1-click DNS routing with automated 256-bit SSL' },
  { id: 'seo-optimization', name: 'Technical SEO & Schema Markup', price: 1999, category: 'Growth', description: 'Google Search Console, OpenGraph & Rich Snippets' },
  { id: 'crm-sync', name: 'HubSpot / Notion CRM Integration', price: 2999, category: 'Automation', description: 'Real-time lead routing to your company CRM' },
  { id: 'whatsapp-chat', name: 'WhatsApp Concierge & Floating Chat', price: 1200, category: 'Leads', description: 'Direct WhatsApp bridge for instant mobile inquiries' },
  { id: 'cms-integration', name: 'Headless CMS (Sanity / Strapi)', price: 3499, category: 'Content', description: 'Manage blogs, products & testimonials without coding' },
  { id: 'multi-language', name: 'Multi-Language Localization', price: 2999, category: 'Global', description: 'Automatic translation & currency switcher' },
  { id: 'client-auth', name: 'Customer Portal & Login System', price: 3999, category: 'Platform', description: 'Protected dashboard with OTP / magic links' }
];

export default function CustomQuoteBuilder() {
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'payment-gateway', 
    'custom-domain', 
    'whatsapp-chat'
  ]);
  const [timeline, setTimeline] = useState<'48h' | '24h' | '1week'>('48h');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleFeature = (id: string) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter(f => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  // Base platform fee in INR
  const basePrice = 9999;
  const featuresTotal = selectedFeatures.reduce((sum, featId) => {
    const feat = AVAILABLE_FEATURES.find(f => f.id === featId);
    return sum + (feat ? feat.price : 0);
  }, 0);

  const rushMultiplier = timeline === '24h' ? 1.2 : 1;
  const estimatedTotal = Math.round((basePrice + featuresTotal) * rushMultiplier);
  const tokenDeposit = Math.round(estimatedTotal * 0.10);
  const balanceDue = estimatedTotal - tokenDeposit;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="quote-builder" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-semibold text-indigo-700">
            <Sliders className="w-3.5 h-3.5 text-indigo-600" />
            <span>Interactive Custom Specification</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Configure Your Custom Architecture
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Need customized integrations, specific APIs, or advanced workflows? Pick your required modules to see an instant price breakdown with our guaranteed 10% token reservation model.
          </p>
        </div>

        {/* Builder Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Interactive Feature Pills & Timeline (Span 7) */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* 1. Feature Cards Selection */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <span>1. Choose Custom Features</span>
                  <span className="text-indigo-600 font-normal">({selectedFeatures.length} selected)</span>
                </label>
                <span className="text-[11px] text-slate-400 font-mono">Live Recalculation</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {AVAILABLE_FEATURES.map((feature) => {
                  const isChecked = selectedFeatures.includes(feature.id);
                  return (
                    <button
                      key={feature.id}
                      type="button"
                      onClick={() => toggleFeature(feature.id)}
                      className={`p-3.5 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between min-h-[96px] ${
                        isChecked 
                          ? 'bg-indigo-50/60 border-indigo-500/80 shadow-xs ring-1 ring-indigo-500/20' 
                          : 'bg-slate-50/70 hover:bg-slate-100/80 border-slate-200 text-slate-700'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2 w-full">
                        <span className={`text-xs font-bold leading-tight ${isChecked ? 'text-indigo-950' : 'text-slate-900'}`}>
                          {feature.name}
                        </span>
                        <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 border transition-colors ${
                          isChecked 
                            ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs' 
                            : 'border-slate-300 bg-white text-transparent'
                        }`}>
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                      </div>

                      <div className="flex items-center justify-between w-full pt-2">
                        <span className="text-[11px] text-slate-500 truncate max-w-[170px]">
                          {feature.description}
                        </span>
                        <span className={`text-xs font-bold font-mono ${isChecked ? 'text-indigo-700' : 'text-slate-600'}`}>
                          +₹{feature.price.toLocaleString('en-IN')}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Timeline Selector */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                2. Deployment SLA Timeline
              </label>
              
              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setTimeline('48h')}
                  className={`p-3.5 rounded-2xl border text-center transition-all min-h-[64px] ${
                    timeline === '48h'
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <span className="text-xs font-bold block">Standard 48 Hours</span>
                  <span className={`text-[10px] ${timeline === '48h' ? 'text-indigo-100' : 'text-slate-500'}`}>Included SLA</span>
                </button>

                <button
                  type="button"
                  onClick={() => setTimeline('24h')}
                  className={`p-3.5 rounded-2xl border text-center transition-all min-h-[64px] ${
                    timeline === '24h'
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <span className="text-xs font-bold block">Rush 24 Hours</span>
                  <span className={`text-[10px] ${timeline === '24h' ? 'text-indigo-100' : 'text-slate-500'}`}>+20% Express Sprint</span>
                </button>

                <button
                  type="button"
                  onClick={() => setTimeline('1week')}
                  className={`p-3.5 rounded-2xl border text-center transition-all min-h-[64px] ${
                    timeline === '1week'
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <span className="text-xs font-bold block">Extended 1 Week</span>
                  <span className={`text-[10px] ${timeline === '1week' ? 'text-indigo-100' : 'text-slate-500'}`}>With Iteration Calls</span>
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Live Calculated Estimate & Lead Form (Span 5) */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 sm:p-7 border border-slate-800 shadow-xl space-y-6">
            
            {/* Live Pricing Breakdown Card */}
            <div className="space-y-3.5 pb-6 border-b border-slate-800">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase text-indigo-400 font-semibold tracking-wider">
                  REAL-TIME QUOTE ESTIMATE
                </span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300">
                  {timeline === '24h' ? '24h Rush SLA' : '48h Standard SLA'}
                </span>
              </div>

              <div className="flex items-baseline justify-between pt-1">
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-white">
                    ₹{estimatedTotal.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs text-slate-400 ml-1.5">full live handover</span>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-indigo-300 block uppercase font-medium">10% Token to Start</span>
                  <span className="text-base sm:text-lg font-bold text-white bg-indigo-600 px-2.5 py-0.5 rounded-lg inline-block mt-0.5 shadow-xs">
                    ₹{tokenDeposit.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-[11px] text-slate-300 flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>Zero full payment upfront. You pay the remaining ₹{balanceDue.toLocaleString('en-IN')} only after your website is live and approved.</span>
              </div>
            </div>

            {/* Contact Form */}
            {isSubmitted ? (
              <div className="py-8 text-center space-y-3 animate-in zoom-in-95 duration-200">
                <div className="w-12 h-12 rounded-full bg-indigo-500/20 border border-indigo-400 mx-auto flex items-center justify-center text-indigo-300">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <h4 className="text-base font-bold text-white">Specification Received</h4>
                <p className="text-xs text-slate-400 max-w-xs mx-auto leading-relaxed">
                  Thank you {fullName || 'there'}. Our solutions architect will review your {selectedFeatures.length} selected modules and send your formal proposal to {email} within 2 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 transition-colors"
                >
                  Edit Specification
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <span className="text-xs font-bold text-white block">
                  Submit for Engineering Review & 10% Reservation
                </span>

                <div className="space-y-1">
                  <label className="text-[11px] text-slate-300 font-medium">Your Name</label>
                  <input 
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Aditi Verma"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white placeholder:text-slate-500 focus:outline-hidden focus:border-indigo-400 transition-colors min-h-[42px]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[11px] text-slate-300 font-medium">Business Email</label>
                    <input 
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="aditi@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white placeholder:text-slate-500 focus:outline-hidden focus:border-indigo-400 transition-colors min-h-[42px]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] text-slate-300 font-medium">WhatsApp / Mobile</label>
                    <input 
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 00000"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white placeholder:text-slate-500 focus:outline-hidden focus:border-indigo-400 transition-colors min-h-[42px]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] text-slate-300 font-medium">Project Scope & Existing Domain</label>
                  <textarea 
                    rows={2}
                    value={projectDescription}
                    onChange={(e) => setProjectDescription(e.target.value)}
                    placeholder="e.g. Need payment gateway integration, bilingual English/Hindi, launching next week..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white placeholder:text-slate-500 focus:outline-hidden focus:border-indigo-400 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all mt-3 shadow-md shadow-indigo-500/20 min-h-[44px]"
                >
                  <span>Lock In Quote & Reserve 10% Slot</span>
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
