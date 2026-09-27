'use client';

import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Globe, 
  Phone, 
  Mail, 
  User, 
  Building2 
} from 'lucide-react';

export default function RequirementQuoteForm() {
  const [serviceType, setServiceType] = useState<'template' | 'custom'>('template');
  const [category, setCategory] = useState('E-Commerce & Retail');
  const [domain, setDomain] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <section id="quote" className="py-20 sm:py-28 relative bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Context & Guarantees */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono uppercase tracking-wider font-semibold">
              <Clock className="w-3.5 h-3.5 text-blue-600" />
              <span>Direct Engineering Assessment</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              Request Your 48-Hour Deployment Quote
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Tell us about your business or target domain. Our senior DevOps and frontend architects will review your requirements, audit DNS readiness, and send a fixed-price roadmap with a 10% token reservation link.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-slate-900 block">10% Token Escrow Protection</span>
                  <span className="text-slate-600">Zero full payments upfront. 90% balance due only after site inspection on your live domain.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <Globe className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-slate-900 block">Full Cloudflare SSL &amp; DNS Setup</span>
                  <span className="text-slate-600">We configure nameservers, 256-bit automated certificates, edge caching, and mobile responsiveness.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Modern Enterprise Form Container */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl sm:rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xl shadow-slate-200/50">
              
              {isSubmitted ? (
                /* Success State */
                <div className="text-center py-10 space-y-4 max-w-md mx-auto">
                  <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Quote Request Received!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Thank you, <span className="text-slate-900 font-semibold">{name}</span>. An engineering lead has been assigned to assess domain readiness for <span className="text-blue-600 font-mono font-semibold">{domain || 'your project'}</span>. You will receive a breakdown on WhatsApp/Email within 2 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white transition-colors cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                /* Active Form */
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Service Type Switcher */}
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-2 font-mono uppercase tracking-wider">
                      Service Type
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setServiceType('template')}
                        className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                          serviceType === 'template'
                            ? 'bg-blue-50 border-blue-300 text-slate-900 shadow-2xs'
                            : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                        }`}
                      >
                        <div className="text-xs font-bold flex items-center justify-between">
                          <span className={serviceType === 'template' ? 'text-blue-900' : ''}>Pre-Built Template</span>
                          <span className="text-[10px] text-blue-700 font-mono">48h SLA</span>
                        </div>
                        <p className="text-[11px] text-slate-500 mt-1">Roll out a verified production website</p>
                      </button>

                      <button
                        type="button"
                        onClick={() => setServiceType('custom')}
                        className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                          serviceType === 'custom'
                            ? 'bg-blue-50 border-blue-300 text-slate-900 shadow-2xs'
                            : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                        }`}
                      >
                        <div className="text-xs font-bold flex items-center justify-between">
                          <span className={serviceType === 'custom' ? 'text-blue-900' : ''}>Custom Bespoke Build</span>
                          <span className="text-[10px] text-blue-700 font-mono">Tailored</span>
                        </div>
                        <p className="text-[11px] text-slate-500 mt-1">Architected to your exact product spec</p>
                      </button>
                    </div>
                  </div>

                  {/* Business Category & Target Domain */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1.5 flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-blue-600" />
                        <span>Business Industry</span>
                      </label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors"
                      >
                        <option value="E-Commerce & Retail">E-Commerce &amp; Retail</option>
                        <option value="Corporate SaaS / Agency">Corporate SaaS / Agency</option>
                        <option value="Hospitality & Restaurant">Hospitality &amp; Restaurant</option>
                        <option value="Real Estate & Property">Real Estate &amp; Property</option>
                        <option value="Healthcare & Clinical">Healthcare &amp; Clinical</option>
                        <option value="Other High-Growth Business">Other High-Growth Business</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1.5 flex items-center gap-1.5">
                        <Globe className="w-3.5 h-3.5 text-blue-600" />
                        <span>Target Domain (Optional)</span>
                      </label>
                      <input
                        type="text"
                        value={domain}
                        onChange={(e) => setDomain(e.target.value)}
                        placeholder="e.g. mycompany.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs sm:text-sm placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Contact Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1.5 flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-blue-600" />
                        <span>Your Name</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs sm:text-sm placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1.5 flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-blue-600" />
                        <span>Work Email</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs sm:text-sm placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1.5 flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-blue-600" />
                        <span>WhatsApp / Phone</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs sm:text-sm placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full min-h-[46px] py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 active:scale-[0.99] transition-all cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-4 h-4 text-blue-100" />
                    <span>
                      {isSubmitting ? 'Processing Assessment...' : 'Request 48-Hour Deployment Quote'}
                    </span>
                  </button>

                  <p className="text-[11px] text-center text-slate-500">
                    No spam guarantee. Fixed turn-key quote and DNS setup roadmap delivered directly to your inbox.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
