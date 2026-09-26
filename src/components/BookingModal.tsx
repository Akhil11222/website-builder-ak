'use client';

import React, { useState, useEffect } from 'react';
import { 
  X, 
  ShieldCheck, 
  Clock, 
  CreditCard, 
  Lock, 
  Globe, 
  ArrowRight, 
  Check, 
  Building,
  Phone
} from 'lucide-react';
import { Template } from '@/data/templates';

interface BookingModalProps {
  template: Template | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({
  template,
  isOpen,
  onClose
}: BookingModalProps) {
  const [step, setStep] = useState<'details' | 'payment' | 'confirmed'>('details');
  const [domain, setDomain] = useState('');
  const [needDomainAssistance, setNeedDomainAssistance] = useState(false);
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderId] = useState(() => `WB-${Math.floor(100000 + Math.random() * 900000)}`);

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

  const fullPrice = template.fullPrice;
  const tokenDeposit = template.tokenDeposit;
  const balanceDue = fullPrice - tokenDeposit;

  const handleSubmitDetails = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };

  const handleSimulatePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setStep('confirmed');
    }, 1200);
  };

  const handleClose = () => {
    setStep('details');
    setDomain('');
    setNeedDomainAssistance(false);
    setClientName('');
    setClientEmail('');
    setClientPhone('');
    setNotes('');
    setIsProcessing(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-xl bg-white rounded-xl border border-zinc-200 shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-modal-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 bg-zinc-950 text-white shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 uppercase">
                10% TOKEN RESERVATION
              </span>
              <span className="text-zinc-500 text-xs">•</span>
              <span className="text-xs text-zinc-400 font-mono">48-Hour SLA</span>
            </div>
            <h3 id="booking-modal-title" className="text-base font-bold text-white mt-1">
              {template.name}
            </h3>
          </div>

          <button
            type="button"
            onClick={handleClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-6">
          
          {/* Transparent 10% Token Breakdown Banner */}
          <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 space-y-3">
            <div className="flex items-center justify-between text-xs text-zinc-500 font-mono">
              <span>FINANCIAL ESCROW BREAKDOWN</span>
              <span>10% COMMITMENT MODEL</span>
            </div>

            <div className="grid grid-cols-3 gap-2 py-1 text-center">
              <div className="p-2.5 rounded-lg bg-white border border-zinc-200">
                <span className="text-[10px] text-zinc-500 block uppercase font-mono">Total Package</span>
                <span className="text-sm sm:text-base font-bold text-zinc-900 font-mono">${fullPrice.toFixed(2)}</span>
              </div>

              <div className="p-2.5 rounded-lg bg-zinc-950 text-white border border-zinc-900 shadow-sm">
                <span className="text-[10px] text-zinc-300 block uppercase font-mono">10% Due Now</span>
                <span className="text-sm sm:text-base font-bold text-white font-mono">${tokenDeposit.toFixed(2)}</span>
              </div>

              <div className="p-2.5 rounded-lg bg-white border border-zinc-200">
                <span className="text-[10px] text-zinc-500 block uppercase font-mono">90% on Handover</span>
                <span className="text-sm sm:text-base font-bold text-zinc-900 font-mono">${balanceDue.toFixed(2)}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-zinc-600 bg-white p-2 rounded-lg border border-zinc-200/80">
              <ShieldCheck className="w-4 h-4 text-zinc-900 shrink-0" />
              <span>Remaining balance is released only after your website is live on your custom domain.</span>
            </div>
          </div>

          {step === 'details' && (
            <form onSubmit={handleSubmitDetails} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-900 flex items-center justify-between">
                  <span>Custom Target Domain</span>
                  <span className="text-[11px] font-normal text-zinc-500 font-mono">e.g. acmebrand.com</span>
                </label>
                <div className="relative flex items-center">
                  <Globe className="w-4 h-4 text-zinc-400 absolute left-3" />
                  <input
                    type="text"
                    required={!needDomainAssistance}
                    disabled={needDomainAssistance}
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    placeholder="Enter your existing or desired domain"
                    className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-lg border border-zinc-300 focus:border-zinc-950 focus:ring-1 focus:ring-zinc-950 disabled:bg-zinc-100 disabled:text-zinc-400 transition-colors"
                  />
                </div>
                <div className="flex items-center gap-2 pt-1">
                  <input 
                    type="checkbox"
                    id="needDomain"
                    checked={needDomainAssistance}
                    onChange={(e) => setNeedDomainAssistance(e.target.checked)}
                    className="rounded border-zinc-300 text-zinc-950 focus:ring-zinc-950"
                  />
                  <label htmlFor="needDomain" className="text-xs text-zinc-600 select-none cursor-pointer">
                    I do not own a domain yet (our team will register one for you)
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-zinc-900">Your Full Name</label>
                  <input
                    type="text"
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="Jane Doe"
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-zinc-300 focus:border-zinc-950 focus:ring-1 focus:ring-zinc-950 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-zinc-900">Work Email</label>
                  <input
                    type="email"
                    required
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    placeholder="jane@company.com"
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-zinc-300 focus:border-zinc-950 focus:ring-1 focus:ring-zinc-950 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-900">Direct Phone / WhatsApp for 48h Handover Updates</label>
                <div className="relative flex items-center">
                  <Phone className="w-4 h-4 text-zinc-400 absolute left-3" />
                  <input
                    type="tel"
                    required
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-lg border border-zinc-300 focus:border-zinc-950 focus:ring-1 focus:ring-zinc-950 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-900">Brand Notes / Specific Requests (Optional)</label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Please use my existing logo, dark palette, connect our Stripe account..."
                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-zinc-300 focus:border-zinc-950 focus:ring-1 focus:ring-zinc-950 transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-zinc-950 hover:bg-zinc-800 text-white rounded-lg font-medium text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <span>Proceed to 10% Token Payment (${tokenDeposit.toFixed(2)})</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {step === 'payment' && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div className="p-3.5 rounded-lg bg-zinc-100 border border-zinc-200 text-xs space-y-1">
                <div className="flex justify-between font-mono text-zinc-600">
                  <span>Target Domain:</span>
                  <span className="font-semibold text-zinc-900">{needDomainAssistance ? 'Assistance Requested' : domain}</span>
                </div>
                <div className="flex justify-between font-mono text-zinc-600">
                  <span>Client Contact:</span>
                  <span className="font-semibold text-zinc-900">{clientName} ({clientEmail})</span>
                </div>
              </div>

              {/* Simulated Payment Methods */}
              <div className="space-y-3">
                <span className="text-xs font-semibold text-zinc-900 block">Select Secure Payment Route</span>
                
                <div className="p-3 rounded-lg border-2 border-zinc-950 bg-zinc-50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-zinc-950 flex items-center justify-center text-white">
                      <CreditCard className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-zinc-900 block">Encrypted Card & Razorpay / Stripe</span>
                      <span className="text-[11px] text-zinc-500 font-mono">Zero international transaction fees</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-zinc-900">${tokenDeposit.toFixed(2)}</span>
                </div>

                <div className="p-3 rounded-lg border border-zinc-200 opacity-60 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-zinc-200 flex items-center justify-center text-zinc-700">
                      <Building className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-medium text-zinc-800 block">Corporate ACH / Wire Transfer</span>
                      <span className="text-[11px] text-zinc-500 font-mono">Available for orders over $2,000</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-zinc-500">Disabled</span>
                </div>
              </div>

              {/* Secure Checkout Trust */}
              <div className="flex items-center justify-center gap-4 text-zinc-500 text-xs font-mono pt-1">
                <span className="flex items-center gap-1"><Lock className="w-3.5 h-3.5 text-zinc-400" /> 256-Bit SSL Encrypted</span>
                <span>•</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-zinc-400" /> 48h Handover Timer Starts</span>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep('details')}
                  className="px-4 py-2.5 border border-zinc-300 rounded-lg text-xs font-medium text-zinc-700 hover:bg-zinc-50 transition-colors"
                >
                  Back
                </button>

                <button
                  type="button"
                  disabled={isProcessing}
                  onClick={handleSimulatePayment}
                  className="flex-1 py-3 bg-zinc-950 hover:bg-zinc-800 disabled:bg-zinc-700 text-white rounded-lg font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  {isProcessing ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      <span>Authorizing 10% Deposit...</span>
                    </>
                  ) : (
                    <>
                      <Lock className="w-4 h-4" />
                      <span>Pay ${tokenDeposit.toFixed(2)} & Start 48h SLA</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {step === 'confirmed' && (
            <div className="space-y-5 text-center py-4 animate-in zoom-in-95 duration-200">
              <div className="w-14 h-14 rounded-full bg-zinc-100 border border-zinc-300 mx-auto flex items-center justify-center text-zinc-900 shadow-sm">
                <Check className="w-7 h-7 stroke-[2.5]" />
              </div>

              <div className="space-y-1">
                <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest">
                  TOKEN RESERVATION AUTHORIZED
                </span>
                <h4 className="text-xl font-bold text-zinc-950">
                  48-Hour Live Deployment Initialized
                </h4>
                <p className="text-xs text-zinc-600 max-w-sm mx-auto">
                  Your dedicated engineering desk has been assigned. We have received your ${tokenDeposit.toFixed(2)} deposit.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 text-left space-y-2.5 text-xs font-mono">
                <div className="flex justify-between border-b border-zinc-200 pb-2">
                  <span className="text-zinc-500">Escrow Order ID:</span>
                  <span className="font-bold text-zinc-900">{orderId}</span>
                </div>
                <div className="flex justify-between border-b border-zinc-200 pb-2">
                  <span className="text-zinc-500">Target Domain:</span>
                  <span className="font-bold text-zinc-900">{needDomainAssistance ? 'Assistance Requested' : domain}</span>
                </div>
                <div className="flex justify-between border-b border-zinc-200 pb-2">
                  <span className="text-zinc-500">Handover Deadline:</span>
                  <span className="font-bold text-zinc-900">48 Hours (Guaranteed SLA)</span>
                </div>
                <div className="flex justify-between pt-0.5">
                  <span className="text-zinc-500">Balance Due on Live Sign-off:</span>
                  <span className="font-bold text-zinc-900">${balanceDue.toFixed(2)}</span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-zinc-100 text-zinc-700 text-xs flex items-center gap-2.5 text-left">
                <Clock className="w-4 h-4 text-zinc-900 shrink-0" />
                <span>Our lead dev has dispatched an onboarding email to <strong>{clientEmail}</strong> with your domain DNS records.</span>
              </div>

              <button
                type="button"
                onClick={handleClose}
                className="w-full py-2.5 bg-zinc-950 text-white rounded-lg text-xs font-medium hover:bg-zinc-800 transition-colors"
              >
                Close & Return to Hub
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
