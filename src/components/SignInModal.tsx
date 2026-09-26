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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-md bg-white rounded-xl border border-zinc-200 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="signin-modal-title"
      >
        <div className="flex items-center justify-between px-5 py-4 bg-zinc-950 text-white">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-zinc-400" />
            <h3 id="signin-modal-title" className="text-sm font-bold text-white">Client Deployment Portal</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          {isSent ? (
            <div className="text-center py-4 space-y-3">
              <div className="w-12 h-12 rounded-full bg-zinc-100 border border-zinc-300 mx-auto flex items-center justify-center text-zinc-900">
                <Check className="w-6 h-6 stroke-[2.5]" />
              </div>
              <h4 className="text-base font-bold text-zinc-950">Magic Link Dispatched</h4>
              <p className="text-xs text-zinc-600 leading-relaxed">
                We sent a secure authentication link to <strong>{email}</strong>. Click the link to view your live domain status, DNS logs, and 48-hour handover timer.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-2 w-full py-2.5 bg-zinc-950 text-white rounded-lg text-xs font-semibold hover:bg-zinc-800 transition-colors"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <p className="text-xs text-zinc-600">
                  Enter your business email to access your deployment dashboard and review live preview builds.
                </p>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-900">Work Email</label>
                <div className="relative flex items-center">
                  <Mail className="w-4 h-4 text-zinc-400 absolute left-3" />
                  <input 
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="founder@yourcompany.com"
                    className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-lg border border-zinc-300 focus:border-zinc-950 focus:ring-1 focus:ring-zinc-950 transition-colors"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-zinc-950 hover:bg-zinc-800 text-white rounded-lg text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-colors shadow-xs"
              >
                <span>Send Magic Sign-In Link</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <div className="pt-2 border-t border-zinc-100 flex items-center justify-center gap-2 text-[11px] text-zinc-400 font-mono">
                <ShieldCheck className="w-3.5 h-3.5 text-zinc-500" />
                <span>Passwordless 256-Bit Escrow Auth</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
