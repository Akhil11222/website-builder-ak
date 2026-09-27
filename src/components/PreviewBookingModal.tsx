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
      {/* Backdrop (Darkened 30% Black Overlay) */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Container (Crisp Pure White 60% Canvas) */}
      <div className="relative w-full max-w-4xl bg-white border border-zinc-200 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-zinc-200 bg-zinc-50">
          <div className="flex items-center gap-3">
            <span className="font-bold text-zinc-950 text-base sm:text-lg">{template.title}</span>
            <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full text-xs font-mono bg-blue-50 text-blue-600 border border-blue-200 font-semibold">
              {template.category}
            </span>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex items-center gap-2">
            <div className="flex rounded-lg bg-zinc-200/80 p-1 border border-zinc-200">
              <button
                onClick={() => setMode('preview')}
                className={`px-3 py-1 rounded-md text-xs font-semibold transition-colors cursor-pointer ${
                  mode === 'preview' ? 'bg-black text-white' : 'text-zinc-700 hover:text-black'
                }`}
              >
                Live Preview
              </button>
              <button
                onClick={() => setMode('book')}
                className={`px-3 py-1 rounded-md text-xs font-semibold transition-colors cursor-pointer ${
                  mode === 'book' ? 'bg-black text-white' : 'text-zinc-700 hover:text-black'
                }`}
              >
                Book 10% Token
              </button>
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg border border-zinc-200 flex items-center justify-center text-zinc-500 hover:text-zinc-950 hover:bg-zinc-100 transition-colors cursor-pointer"
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
              <div className="flex items-center justify-between pb-2 border-b border-zinc-100">
                <div className="flex items-center gap-2 text-xs text-zinc-600 font-mono">
                  <span>Simulated Viewport:</span>
                  <span className="text-zinc-950 font-bold capitalize">{device}</span>
                </div>

                <div className="flex items-center gap-1 bg-zinc-100 p-1 rounded-lg border border-zinc-200">
                  <button
                    onClick={() => setDevice('desktop')}
                    className={`p-1.5 rounded text-xs transition-colors cursor-pointer ${
                      device === 'desktop' ? 'bg-blue-600 text-white' : 'text-zinc-600 hover:text-black'
                    }`}
                    title="Desktop Preview"
                  >
                    <Monitor className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setDevice('tablet')}
                    className={`p-1.5 rounded text-xs transition-colors cursor-pointer ${
                      device === 'tablet' ? 'bg-blue-600 text-white' : 'text-zinc-600 hover:text-black'
                    }`}
                    title="Tablet Preview (768px)"
                  >
                    <Tablet className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setDevice('mobile')}
                    className={`p-1.5 rounded text-xs transition-colors cursor-pointer ${
                      device === 'mobile' ? 'bg-blue-600 text-white' : 'text-zinc-600 hover:text-black'
                    }`}
                    title="Mobile Preview (375px)"
                  >
                    <Smartphone className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Viewport Frame with dynamic width */}
              <div className="flex justify-center py-2 min-h-[380px] sm:min-h-[440px] bg-zinc-50 rounded-xl p-3 border border-zinc-200 overflow-hidden">
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
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-zinc-100">
                <div className="text-xs text-zinc-600 text-center sm:text-left">
                  <span>Full Price: </span>
                  <span className="text-zinc-950 font-bold font-mono">₹{template.fullPrice.toLocaleString('en-IN')}</span>
                  <span className="mx-2">•</span>
                  <span className="text-red-600 font-bold font-mono">
                    Reserve with 10% (₹{template.tokenPrice.toLocaleString('en-IN')})
                  </span>
                </div>
                <button
                  onClick={() => setMode('book')}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-black hover:bg-zinc-800 shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Reserve with 10% Token</span>
                  <ArrowRight className="w-4 h-4 text-blue-400" />
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
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-950">
                    10% Token Slot Reserved!
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    We have registered your slot for <span className="text-zinc-950 font-semibold">{template.title}</span>. Our DevOps engineer is initiating DNS routing for <span className="text-blue-600 font-mono font-semibold">{domain || 'your domain'}</span>.
                  </p>
                  <div className="bg-zinc-50 p-4 rounded-xl border border-zinc-200 text-xs text-left space-y-2">
                    <div className="flex justify-between">
                      <span className="text-zinc-600">Token Paid:</span>
                      <span className="text-red-600 font-bold font-mono">₹{template.tokenPrice.toLocaleString('en-IN')} (Held in Escrow)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-600">90% Remaining:</span>
                      <span className="text-zinc-900 font-bold font-mono">₹{balanceDue.toLocaleString('en-IN')} (Due upon live handover)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-600">48h SLA Deadline:</span>
                      <span className="text-blue-600 font-semibold font-mono">In 48 Hours Guaranteed</span>
                    </div>
                  </div>
                  <button
                    onClick={onClose}
                    className="w-full py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-zinc-100 hover:bg-zinc-200 text-zinc-900 transition-colors cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              ) : (
                /* Booking Form & Transparent Escrow Breakdown */
                <form onSubmit={handleBookingSubmit} className="space-y-6">
                  {/* Escrow Math Breakdown */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="bg-zinc-50 p-3.5 rounded-xl border border-zinc-200 space-y-1">
                      <span className="text-[10px] font-mono text-zinc-500 uppercase font-medium">Total Project Value</span>
                      <div className="text-lg font-bold text-zinc-950 font-mono">
                        ₹{template.fullPrice.toLocaleString('en-IN')}
                      </div>
                      <span className="text-[10px] text-zinc-500">Fixed turn-key cost</span>
                    </div>

                    <div className="bg-red-50 p-3.5 rounded-xl border border-red-200 space-y-1">
                      <span className="text-[10px] font-mono text-red-600 uppercase font-bold">10% Token Due Now</span>
                      <div className="text-lg font-bold text-red-600 font-mono">
                        ₹{template.tokenPrice.toLocaleString('en-IN')}
                      </div>
                      <span className="text-[10px] text-red-600/80 font-medium">Secured in escrow</span>
                    </div>

                    <div className="bg-zinc-50 p-3.5 rounded-xl border border-zinc-200 space-y-1">
                      <span className="text-[10px] font-mono text-zinc-500 uppercase font-medium">90% Balance Due</span>
                      <div className="text-lg font-bold text-zinc-900 font-mono">
                        ₹{balanceDue.toLocaleString('en-IN')}
                      </div>
                      <span className="text-[10px] text-blue-600 font-medium">Only after live approval</span>
                    </div>
                  </div>

                  {/* Input Fields */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-zinc-800 mb-1.5 flex items-center gap-1.5">
                        <Globe className="w-3.5 h-3.5 text-blue-600" />
                        <span>Your Domain Name (or desired domain)</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={domain}
                        onChange={(e) => setDomain(e.target.value)}
                        placeholder="e.g., yourcompany.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-zinc-300 text-zinc-950 text-xs sm:text-sm placeholder-zinc-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-zinc-800 mb-1.5">
                          Full Name / Company Name
                        </label>
                        <input
                          type="text"
                          required
                          value={contactName}
                          onChange={(e) => setContactName(e.target.value)}
                          placeholder="Your Name"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-zinc-300 text-zinc-950 text-xs sm:text-sm placeholder-zinc-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-zinc-800 mb-1.5 flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5 text-blue-600" />
                          <span>WhatsApp / Phone Number</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={contactPhone}
                          onChange={(e) => setContactPhone(e.target.value)}
                          placeholder="+91 98765 43210"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-zinc-300 text-zinc-950 text-xs sm:text-sm placeholder-zinc-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Trust Pillar Note */}
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-50 border border-zinc-200 text-xs text-zinc-700">
                    <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0" />
                    <span>
                      <strong className="text-zinc-950">100% Escrow Guarantee:</strong> If our engineering team does not connect your domain and deliver the live website within 48 hours, your ₹{template.tokenPrice.toLocaleString('en-IN')} token is immediately refunded.
                    </span>
                  </div>

                  {/* Submit Button (Pitch Black 30% Solid Structure) */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full min-h-[44px] py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-black hover:bg-zinc-800 shadow-sm flex items-center justify-center gap-2 active:scale-[0.99] transition-all disabled:opacity-50 cursor-pointer"
                  >
                    <Lock className="w-4 h-4 text-blue-400" />
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
