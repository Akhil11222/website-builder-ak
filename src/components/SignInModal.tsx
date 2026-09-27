'use client';

import React, { useState } from 'react';
import { X, Lock, Mail, ArrowRight, ShieldCheck, Check } from 'lucide-react';

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SignInModal({ isOpen, onClose }: SignInModalProps) {
  const [email, setEmail] = useState('');
  const [isSent, setIsSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSent(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-md bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="signin-modal-title"
      >
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
              <Lock className="w-3.5 h-3.5" />
            </div>
            <h3 id="signin-modal-title" className="text-sm font-bold text-white">Client Deployment Portal</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          {isSent ? (
            <div className="text-center py-4 space-y-3">
              <div className="w-14 h-14 rounded-full bg-indigo-50 border-2 border-indigo-200 mx-auto flex items-center justify-center text-indigo-600 shadow-sm">
                <Check className="w-7 h-7 stroke-[3]" />
              </div>
              <h4 className="text-base font-bold text-slate-900">Magic Access Link Sent</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We sent a secure authentication link to <strong>{email}</strong>. Open the link to review your domain DNS records, live staging server, and 48-hour SLA countdown.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-2 w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <p className="text-xs text-slate-600 leading-relaxed">
                  Enter your business email to access your deployment dashboard and review live staging environments.
                </p>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-900">Work Email</label>
                <div className="relative flex items-center">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5" />
                  <input 
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="founder@yourcompany.com"
                    className="w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/10 transition-all min-h-[44px]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-md shadow-indigo-500/20 min-h-[44px]"
              >
                <span>Send Magic Sign-In Link</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-center gap-2 text-[11px] text-slate-500 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />
                <span>Passwordless 256-Bit Escrow Security</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
