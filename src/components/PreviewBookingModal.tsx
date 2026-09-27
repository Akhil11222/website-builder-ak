'use client';

import React, { useState, useEffect } from 'react';
import { 
  X, 
  Monitor, 
  Tablet, 
  Smartphone, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Globe, 
  Phone, 
  Lock
} from 'lucide-react';
import { Template } from '@/data/templates';
import CodeMockup from './CodeMockup';

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
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-[#060a12]/85 backdrop-blur-md transition-opacity"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-[#0f172a] border border-white/10 rounded-2xl shadow-2xl shadow-black/80 overflow-hidden z-10 flex flex-col max-h-[90vh]">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-white/10 bg-[#090d16]">
          <div className="flex items-center gap-3">
            <span className="font-bold text-white text-base sm:text-lg">{template.title}</span>
            <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full text-xs font-mono bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              {template.category}
            </span>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex items-center gap-2">
            <div className="flex rounded-lg bg-white/5 p-1 border border-white/5">
              <button
                onClick={() => setMode('preview')}
                className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                  mode === 'preview' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Live Preview
              </button>
              <button
                onClick={() => setMode('book')}
                className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                  mode === 'book' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Book 10% Token
              </button>
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="overflow-y-auto p-4 sm:p-6 flex-1">
          {mode === 'preview' ? (
            /* PREVIEW VIEWPORT MODE */
            <div className="space-y-4">
              {/* Responsive Device Controls */}
              <div className="flex items-center justify-between pb-2 border-b border-white/5">
                <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                  <span>Simulated Viewport:</span>
                  <span className="text-white font-semibold capitalize">{device}</span>
                </div>

                <div className="flex items-center gap-1 bg-white/5 p-1 rounded-lg border border-white/5">
                  <button
                    onClick={() => setDevice('desktop')}
                    className={`p-1.5 rounded text-xs transition-colors ${
                      device === 'desktop' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                    title="Desktop Preview"
                  >
                    <Monitor className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setDevice('tablet')}
                    className={`p-1.5 rounded text-xs transition-colors ${
                      device === 'tablet' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                    title="Tablet Preview (768px)"
                  >
                    <Tablet className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setDevice('mobile')}
                    className={`p-1.5 rounded text-xs transition-colors ${
                      device === 'mobile' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                    title="Mobile Preview (375px)"
                  >
                    <Smartphone className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Viewport Frame with dynamic width */}
              <div className="flex justify-center py-2 min-h-[380px] sm:min-h-[440px] bg-[#060a12] rounded-xl p-3 border border-white/5 overflow-hidden">
                <div 
                  className="transition-all duration-300 w-full"
                  style={{
                    maxWidth: device === 'mobile' ? '360px' : device === 'tablet' ? '640px' : '100%'
                  }}
                >
                  <CodeMockup type={template.mockupType} />
                </div>
              </div>

              {/* Bottom Quick Action */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-white/5">
                <div className="text-xs text-slate-400 text-center sm:text-left">
                  <span>Price: </span>
                  <span className="text-white font-bold font-mono">₹{template.fullPrice.toLocaleString('en-IN')}</span>
                  <span className="mx-2">•</span>
                  <span className="text-indigo-400 font-semibold font-mono">
                    Reserve with 10% (₹{template.tokenPrice.toLocaleString('en-IN')})
                  </span>
                </div>
                <button
                  onClick={() => setMode('book')}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 shadow-md shadow-indigo-600/30 flex items-center justify-center gap-2"
                >
                  <span>Reserve with 10% Token</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            /* 10% TOKEN BOOKING MODE */
            <div>
              {isBooked ? (
                /* Success Confirmation State */
                <div className="text-center py-10 space-y-4 max-w-md mx-auto">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    10% Token Slot Reserved!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    We have registered your slot for <span className="text-white font-semibold">{template.title}</span>. Our DevOps engineer is initiating DNS routing for <span className="text-indigo-400 font-mono">{domain || 'your domain'}</span>.
                  </p>
                  <div className="bg-[#090d16] p-4 rounded-xl border border-white/5 text-xs text-left space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Token Paid:</span>
                      <span className="text-emerald-400 font-bold font-mono">₹{template.tokenPrice.toLocaleString('en-IN')} (Held in Escrow)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">90% Remaining:</span>
                      <span className="text-slate-200 font-mono">₹{balanceDue.toLocaleString('en-IN')} (Due upon live handover)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">48h SLA Deadline:</span>
                      <span className="text-indigo-400 font-semibold font-mono">In 48 Hours Guaranteed</span>
                    </div>
                  </div>
                  <button
                    onClick={onClose}
                    className="w-full py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-white/10 hover:bg-white/15 text-white transition-colors"
                  >
                    Done
                  </button>
                </div>
              ) : (
                /* Booking Form & Transparent Escrow Breakdown */
                <form onSubmit={handleBookingSubmit} className="space-y-6">
                  {/* Escrow Math Breakdown */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="bg-[#090d16] p-3.5 rounded-xl border border-white/5 space-y-1">
                      <span className="text-[10px] font-mono text-slate-400 uppercase">Total Project Value</span>
                      <div className="text-lg font-bold text-white font-mono">
                        ₹{template.fullPrice.toLocaleString('en-IN')}
                      </div>
                      <span className="text-[10px] text-slate-500">Fixed turn-key cost</span>
                    </div>

                    <div className="bg-indigo-950/30 p-3.5 rounded-xl border border-indigo-500/30 space-y-1">
                      <span className="text-[10px] font-mono text-indigo-400 uppercase font-semibold">10% Token Due Now</span>
                      <div className="text-lg font-bold text-indigo-300 font-mono">
                        ₹{template.tokenPrice.toLocaleString('en-IN')}
                      </div>
                      <span className="text-[10px] text-indigo-300/80">Secured in escrow</span>
                    </div>

                    <div className="bg-[#090d16] p-3.5 rounded-xl border border-white/5 space-y-1">
                      <span className="text-[10px] font-mono text-slate-400 uppercase">90% Balance Due</span>
                      <div className="text-lg font-bold text-slate-200 font-mono">
                        ₹{balanceDue.toLocaleString('en-IN')}
                      </div>
                      <span className="text-[10px] text-emerald-400">Only after live approval</span>
                    </div>
                  </div>

                  {/* Input Fields */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5 flex items-center gap-1.5">
                        <Globe className="w-3.5 h-3.5 text-indigo-400" />
                        <span>Your Domain Name (or desired domain)</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={domain}
                        onChange={(e) => setDomain(e.target.value)}
                        placeholder="e.g., yourcompany.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#090d16] border border-white/10 text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1.5">
                          Full Name / Company Name
                        </label>
                        <input
                          type="text"
                          required
                          value={contactName}
                          onChange={(e) => setContactName(e.target.value)}
                          placeholder="Your Name"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#090d16] border border-white/10 text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1.5 flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5 text-indigo-400" />
                          <span>WhatsApp / Phone Number</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={contactPhone}
                          onChange={(e) => setContactPhone(e.target.value)}
                          placeholder="+91 98765 43210"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#090d16] border border-white/10 text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Trust Pillar Note */}
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-400">
                    <ShieldCheck className="w-5 h-5 text-indigo-400 shrink-0" />
                    <span>
                      <strong className="text-white">100% Escrow Guarantee:</strong> If our engineering team does not connect your domain and deliver the live website within 48 hours, your ₹{template.tokenPrice.toLocaleString('en-IN')} token is immediately refunded.
                    </span>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full min-h-[44px] py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-blue-600 hover:from-indigo-500 hover:to-blue-500 shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 active:scale-[0.99] transition-all disabled:opacity-50"
                  >
                    <Lock className="w-4 h-4" />
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
