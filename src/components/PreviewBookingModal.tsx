'use client';

import React, { useState, useEffect } from 'react';
import { 
  X, 
  Monitor, 
  Tablet, 
  Smartphone, 
  ShieldCheck, 
  ArrowRight, 
  Globe, 
  Phone, 
  Lock,
  CheckCircle2
} from 'lucide-react';
import { Template } from '@/data/templates';

interface PreviewBookingModalProps {
  template: Template | null;
  isOpen: boolean;
  initialMode?: 'preview' | 'book';
  onClose: () => void;
}

export default function PreviewBookingModal({
  template,
  isOpen,
  initialMode = 'preview',
  onClose,
}: PreviewBookingModalProps) {
  const [mode, setMode] = useState<'preview' | 'book'>(initialMode);
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  
  // Booking Form State
  const [domain, setDomain] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !template) return null;

  const balanceDue = template.fullPrice - template.tokenPrice;

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsBooked(true);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Light-friendly Backdrop with Blur */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs transition-opacity"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[92vh]">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-3">
            <span className="font-bold text-slate-900 text-base sm:text-lg">{template.title}</span>
            <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full text-xs font-mono bg-blue-50 text-blue-700 border border-blue-200 font-semibold">
              {template.category}
            </span>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex items-center gap-2">
            <div className="flex rounded-lg bg-slate-200/70 p-1 border border-slate-200">
              <button
                onClick={() => setMode('preview')}
                className={`px-3 py-1 rounded-md text-xs font-semibold transition-colors cursor-pointer ${
                  mode === 'preview' ? 'bg-white text-blue-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Live Preview
              </button>
              <button
                onClick={() => setMode('book')}
                className={`px-3 py-1 rounded-md text-xs font-semibold transition-colors cursor-pointer ${
                  mode === 'book' ? 'bg-white text-blue-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Book 10% Token
              </button>
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="overflow-y-auto p-4 sm:p-6 flex-1 bg-white">
          {mode === 'preview' ? (
            /* PREVIEW VIEWPORT MODE */
            <div className="space-y-4">
              {/* Responsive Device Controls */}
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <div className="flex items-center gap-2 text-xs text-slate-600 font-mono">
                  <span>Simulated Viewport:</span>
                  <span className="text-blue-600 font-bold capitalize">{device}</span>
                </div>

                <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200">
                  <button
                    onClick={() => setDevice('desktop')}
                    className={`p-1.5 rounded text-xs transition-colors cursor-pointer ${
                      device === 'desktop' ? 'bg-white text-blue-600 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                    }`}
                    title="Desktop Preview"
                  >
                    <Monitor className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setDevice('tablet')}
                    className={`p-1.5 rounded text-xs transition-colors cursor-pointer ${
                      device === 'tablet' ? 'bg-white text-blue-600 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                    }`}
                    title="Tablet Preview (768px)"
                  >
                    <Tablet className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setDevice('mobile')}
                    className={`p-1.5 rounded text-xs transition-colors cursor-pointer ${
                      device === 'mobile' ? 'bg-white text-blue-600 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                    }`}
                    title="Mobile Preview (375px)"
                  >
                    <Smartphone className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Viewport Frame with dynamic width */}
              <div className="flex justify-center py-2 min-h-[380px] sm:min-h-[440px] bg-slate-100/70 rounded-2xl p-3 border border-slate-200 overflow-hidden">
                <div 
                  className="transition-all duration-300 w-full bg-white rounded-xl border border-slate-200 p-4 sm:p-6 flex flex-col justify-between shadow-sm"
                  style={{
                    maxWidth: device === 'mobile' ? '360px' : device === 'tablet' ? '640px' : '100%'
                  }}
                >
                  {/* Browser Bar */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs text-slate-500 font-mono">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    </div>
                    <div className="flex items-center gap-1 px-3 py-1 rounded bg-slate-50 border border-slate-200 text-[10px] text-slate-700">
                      <Lock className="w-3 h-3 text-blue-600" />
                      <span>{template.id}.websitebuilder.live</span>
                    </div>
                    <span className="text-[10px] text-blue-600 font-semibold">48h SLA</span>
                  </div>

                  {/* Body Preview */}
                  <div className="py-6 space-y-4">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[10px] font-mono bg-blue-50 text-blue-700 border border-blue-200">
                      <span>Production Build v2.4</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                      {template.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {template.tagline}
                    </p>

                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                      <div className="text-[10px] font-mono uppercase text-slate-500 font-medium">Included Stack</div>
                      <div className="flex flex-wrap gap-1.5">
                        {template.techStack.map((tech) => (
                          <span key={tech} className="px-2 py-0.5 rounded text-[10px] font-mono bg-white text-slate-700 border border-slate-200">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-600">Full Price: ₹{template.fullPrice.toLocaleString('en-IN')}</span>
                    <span className="text-blue-600 font-bold font-mono">10% Deposit: ₹{template.tokenPrice.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Action */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-slate-100">
                <div className="text-xs text-slate-600 text-center sm:text-left">
                  <span>Turn-Key Value: </span>
                  <span className="text-slate-900 font-bold font-mono">₹{template.fullPrice.toLocaleString('en-IN')}</span>
                  <span className="mx-2">&bull;</span>
                  <span className="text-blue-600 font-bold font-mono">
                    Lock with 10% (₹{template.tokenPrice.toLocaleString('en-IN')})
                  </span>
                </div>
                <button
                  onClick={() => setMode('book')}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <span>Reserve with 10% Token</span>
                  <ArrowRight className="w-4 h-4 text-blue-100" />
                </button>
              </div>
            </div>
          ) : (
            /* 10% TOKEN BOOKING MODE */
            <div>
              {isBooked ? (
                /* Success Confirmation State */
                <div className="text-center py-10 space-y-4 max-w-md mx-auto">
                  <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    10% Token Slot Reserved!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    We have registered your slot for <span className="text-slate-900 font-semibold">{template.title}</span>. Our DevOps engineer is initiating DNS routing for <span className="text-blue-600 font-mono font-semibold">{domain || 'your domain'}</span>.
                  </p>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-left space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Token Paid:</span>
                      <span className="text-blue-700 font-bold font-mono">₹{template.tokenPrice.toLocaleString('en-IN')} (Held in Escrow)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">90% Remaining:</span>
                      <span className="text-slate-900 font-bold font-mono">₹{balanceDue.toLocaleString('en-IN')} (Due upon live handover)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">48h SLA Deadline:</span>
                      <span className="text-blue-600 font-semibold font-mono">In 48 Hours Guaranteed</span>
                    </div>
                  </div>
                  <button
                    onClick={onClose}
                    className="w-full py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-slate-900 hover:bg-slate-800 text-white transition-colors cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              ) : (
                /* Booking Form & Transparent Escrow Breakdown */
                <form onSubmit={handleBookingSubmit} className="space-y-6">
                  {/* Escrow Math Breakdown */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-1">
                      <span className="text-[10px] font-mono text-slate-500 uppercase font-medium">Total Project Value</span>
                      <div className="text-lg font-bold text-slate-900 font-mono">
                        ₹{template.fullPrice.toLocaleString('en-IN')}
                      </div>
                      <span className="text-[10px] text-slate-500">Fixed turn-key cost</span>
                    </div>

                    <div className="bg-blue-50 p-3.5 rounded-xl border border-blue-200 space-y-1">
                      <span className="text-[10px] font-mono text-blue-700 uppercase font-bold">10% Token Due Now</span>
                      <div className="text-lg font-bold text-blue-750 font-mono text-blue-700">
                        ₹{template.tokenPrice.toLocaleString('en-IN')}
                      </div>
                      <span className="text-[10px] text-blue-600 font-medium">Secured in escrow</span>
                    </div>

                    <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-1">
                      <span className="text-[10px] font-mono text-slate-500 uppercase font-medium">90% Balance Due</span>
                      <div className="text-lg font-bold text-slate-900 font-mono">
                        ₹{balanceDue.toLocaleString('en-IN')}
                      </div>
                      <span className="text-[10px] text-slate-500 font-medium">Only after live approval</span>
                    </div>
                  </div>

                  {/* Input Fields */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1.5 flex items-center gap-1.5">
                        <Globe className="w-3.5 h-3.5 text-blue-600" />
                        <span>Your Domain Name (or desired domain)</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={domain}
                        onChange={(e) => setDomain(e.target.value)}
                        placeholder="e.g., yourcompany.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs sm:text-sm placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1.5">
                          Full Name / Company Name
                        </label>
                        <input
                          type="text"
                          required
                          value={contactName}
                          onChange={(e) => setContactName(e.target.value)}
                          placeholder="Your Name"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs sm:text-sm placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1.5 flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5 text-blue-600" />
                          <span>WhatsApp / Phone Number</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={contactPhone}
                          onChange={(e) => setContactPhone(e.target.value)}
                          placeholder="+91 98765 43210"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs sm:text-sm placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Trust Pillar Note */}
                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-blue-50/70 border border-blue-200 text-xs text-slate-700">
                    <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0" />
                    <span>
                      <strong className="text-slate-900">100% Escrow Guarantee:</strong> If our engineering team does not connect your domain and deliver the live website within 48 hours, your ₹{template.tokenPrice.toLocaleString('en-IN')} token is immediately refunded.
                    </span>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full min-h-[44px] py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 active:scale-[0.99] transition-all disabled:opacity-50 cursor-pointer"
                  >
                    <Lock className="w-4 h-4 text-blue-100" />
                    <span>
                      {isSubmitting ? 'Securing Escrow Slot...' : `Pay ₹${template.tokenPrice.toLocaleString('en-IN')} Token & Launch in 48h`}
                    </span>
                  </button>
                </form>
              )}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
