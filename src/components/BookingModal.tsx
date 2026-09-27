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
    }, 1100);
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-xl bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[92vh] animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-modal-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4.5 bg-gradient-to-r from-slate-900 to-indigo-950 text-white shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-200 border border-indigo-400/30 uppercase tracking-wider">
                10% TOKEN ESCROW RESERVATION
              </span>
              <span className="text-slate-400 text-xs">•</span>
              <span className="text-xs text-slate-300 font-medium">48h SLA</span>
            </div>
            <h3 id="booking-modal-title" className="text-base sm:text-lg font-bold text-white mt-1">
              Reserve {template.name}
            </h3>
          </div>

          <button
            type="button"
            onClick={handleClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-7 overflow-y-auto flex-1 space-y-6">
          
          {/* 10% Escrow Pricing Cards */}
          <div className="p-4 sm:p-5 rounded-2xl bg-indigo-50/50 border border-indigo-100/90 space-y-3.5">
            <div className="flex items-center justify-between text-xs font-semibold text-indigo-900">
              <span>FINANCIAL ESCROW BREAKDOWN</span>
              <span>ZERO RISK COMMITMENT</span>
            </div>

            <div className="grid grid-cols-3 gap-2.5 py-1 text-center">
              <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs">
                <span className="text-[10px] text-slate-500 block uppercase font-medium">Full License</span>
                <span className="text-sm sm:text-base font-extrabold text-slate-900">
                  {template.currency}{fullPrice.toLocaleString('en-IN')}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-indigo-600 text-white border border-indigo-600 shadow-md shadow-indigo-500/20">
                <span className="text-[10px] text-indigo-100 block uppercase font-medium">Payable Today</span>
                <span className="text-sm sm:text-base font-extrabold text-white">
                  {template.currency}{tokenDeposit.toLocaleString('en-IN')}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs">
                <span className="text-[10px] text-slate-500 block uppercase font-medium">90% on Handover</span>
                <span className="text-sm sm:text-base font-extrabold text-slate-900">
                  {template.currency}{balanceDue.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-indigo-900/90 bg-white/90 p-3 rounded-xl border border-indigo-100/80">
              <ShieldCheck className="w-4 h-4 text-indigo-600 shrink-0" />
              <span>Your 10% deposit is held safely. The 90% balance is payable only after your website is live and verified on your domain.</span>
            </div>
          </div>

          {step === 'details' && (
            <form onSubmit={handleSubmitDetails} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-900 flex items-center justify-between">
                  <span>Target Custom Domain</span>
                  <span className="text-[11px] font-normal text-slate-500">e.g. yourbrand.com</span>
                </label>
                <div className="relative flex items-center">
                  <Globe className="w-4 h-4 text-slate-400 absolute left-3.5" />
                  <input
                    type="text"
                    required={!needDomainAssistance}
                    disabled={needDomainAssistance}
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    placeholder="Enter your existing or desired domain"
                    className="w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/10 disabled:bg-slate-100 disabled:text-slate-400 transition-all min-h-[44px]"
                  />
                </div>
                <div className="flex items-center gap-2 pt-1">
                  <input 
                    type="checkbox"
                    id="needDomain"
                    checked={needDomainAssistance}
                    onChange={(e) => setNeedDomainAssistance(e.target.checked)}
                    className="w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label htmlFor="needDomain" className="text-xs text-slate-600 select-none cursor-pointer">
                    I do not own a domain yet (our team will register one for you)
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-900">Your Full Name</label>
                  <input
                    type="text"
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="Rahul Sharma"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/10 transition-all min-h-[44px]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-900">Business Email</label>
                  <input
                    type="email"
                    required
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    placeholder="rahul@company.com"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/10 transition-all min-h-[44px]"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-900">
                  Direct WhatsApp / Mobile (for 48h Handover Alerts)
                </label>
                <div className="relative flex items-center">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5" />
                  <input
                    type="tel"
                    required
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/10 transition-all min-h-[44px]"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-900">
                  Custom Brand Requests or Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Please use my existing logo, attach my Razorpay account, connect Instagram..."
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/10 transition-all"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-indigo-500/20 transition-all min-h-[46px]"
                >
                  <span>Proceed to 10% Token Payment ({template.currency}{tokenDeposit.toLocaleString('en-IN')})</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {step === 'payment' && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1.5">
                <div className="flex justify-between text-slate-600">
                  <span>Target Domain:</span>
                  <span className="font-bold text-slate-900">{needDomainAssistance ? 'Domain Registration Requested' : domain}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Contact:</span>
                  <span className="font-bold text-slate-900">{clientName} ({clientEmail})</span>
                </div>
              </div>

              {/* Payment Methods Selection */}
              <div className="space-y-3">
                <span className="text-xs font-bold text-slate-900 block">Select Payment Channel</span>
                
                <div className="p-3.5 rounded-xl border-2 border-indigo-600 bg-indigo-50/40 flex items-center justify-between shadow-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
                      <CreditCard className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-900 block">UPI, Razorpay, Debit/Credit Card, Netbanking</span>
                      <span className="text-[11px] text-slate-500">Instant 256-bit encrypted bank authorization</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-indigo-700">{template.currency}{tokenDeposit.toLocaleString('en-IN')}</span>
                </div>

                <div className="p-3.5 rounded-xl border border-slate-200 opacity-60 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-slate-200 flex items-center justify-center text-slate-700">
                      <Building className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-medium text-slate-800 block">Corporate Invoice & NEFT / RTGS</span>
                      <span className="text-[11px] text-slate-500">Available for enterprise bulk deployments</span>
                    </div>
                  </div>
                  <span className="text-[11px] text-slate-400">Offline</span>
                </div>
              </div>

              {/* Trust Callout */}
              <div className="flex items-center justify-center gap-4 text-slate-500 text-xs pt-1">
                <span className="flex items-center gap-1 font-medium">
                  <Lock className="w-3.5 h-3.5 text-indigo-600" />
                  Bank-Grade Encryption
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 font-medium">
                  <Clock className="w-3.5 h-3.5 text-indigo-600" />
                  48h SLA Starts Instantly
                </span>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep('details')}
                  className="px-4 py-3 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors min-h-[44px]"
                >
                  Back
                </button>

                <button
                  type="button"
                  disabled={isProcessing}
                  onClick={handleSimulatePayment}
                  className="flex-1 py-3.5 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 disabled:bg-indigo-400 text-white rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-indigo-500/20 transition-all min-h-[44px]"
                >
                  {isProcessing ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Authorizing Token Escrow...</span>
                    </>
                  ) : (
                    <>
                      <Lock className="w-4 h-4" />
                      <span>Pay {template.currency}{tokenDeposit.toLocaleString('en-IN')} & Start 48h SLA</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {step === 'confirmed' && (
            <div className="space-y-5 text-center py-4 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-indigo-50 border-2 border-indigo-200 mx-auto flex items-center justify-center text-indigo-600 shadow-md shadow-indigo-500/10">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>

              <div className="space-y-1.5">
                <span className="text-[11px] font-semibold text-indigo-600 uppercase tracking-widest">
                  ESCROW DEPOSIT CONFIRMED
                </span>
                <h4 className="text-xl font-extrabold text-slate-900">
                  48-Hour Live Deployment Initialized
                </h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                  Your dedicated solutions engineer has been assigned. We have received your {template.currency}{tokenDeposit.toLocaleString('en-IN')} deposit.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 text-left space-y-2.5 text-xs">
                <div className="flex justify-between border-b border-slate-200/80 pb-2">
                  <span className="text-slate-500 font-medium">Escrow Order ID:</span>
                  <span className="font-bold text-slate-900 font-mono">{orderId}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200/80 pb-2">
                  <span className="text-slate-500 font-medium">Target Domain:</span>
                  <span className="font-bold text-slate-900">{needDomainAssistance ? 'Assistance Requested' : domain}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200/80 pb-2">
                  <span className="text-slate-500 font-medium">Handover SLA:</span>
                  <span className="font-bold text-indigo-700">Guaranteed within 48 Hours</span>
                </div>
                <div className="flex justify-between pt-0.5">
                  <span className="text-slate-500 font-medium">Balance on Live Inspection:</span>
                  <span className="font-bold text-slate-900">{template.currency}{balanceDue.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-indigo-50 text-indigo-900 text-xs flex items-center gap-2.5 text-left border border-indigo-100">
                <Clock className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>Our lead dev has dispatched an onboarding email to <strong>{clientEmail}</strong> with your domain DNS records.</span>
              </div>

              <button
                type="button"
                onClick={handleClose}
                className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold transition-colors min-h-[44px]"
              >
                Close & Return to Marketplace
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
