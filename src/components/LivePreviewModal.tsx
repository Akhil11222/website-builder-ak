'use client';

import React, { useState, useEffect } from 'react';
import { 
  X, 
  Monitor, 
  Tablet, 
  Smartphone, 
  ShieldCheck, 
  Clock, 
  ArrowRight,
  Layers
} from 'lucide-react';
import { Template } from '@/data/templates';
import CodeMockup from './CodeMockup';

interface LivePreviewModalProps {
  template: Template | null;
  isOpen: boolean;
  onClose: () => void;
  onBookNow: (template: Template) => void;
}

export default function LivePreviewModal({
  template,
  isOpen,
  onClose,
  onBookNow
}: LivePreviewModalProps) {
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !template) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-6xl h-[92vh] max-h-[880px] bg-white text-slate-900 rounded-2xl border border-slate-200 shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="preview-modal-title"
      >
        {/* Modal Top Control Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-slate-50 border-b border-slate-200 shrink-0 gap-3">
          
          {/* Template Info */}
          <div className="flex items-center gap-3 truncate">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700">
                  {template.category}
                </span>
                <span className="text-slate-300 text-xs hidden sm:inline">•</span>
                <h3 id="preview-modal-title" className="text-sm sm:text-base font-bold text-slate-900 truncate">
                  {template.name}
                </h3>
              </div>
            </div>
          </div>

          {/* Viewport Device Switcher */}
          <div className="hidden md:flex items-center bg-slate-200/60 p-1 rounded-xl text-xs">
            <button
              type="button"
              onClick={() => setDeviceMode('desktop')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                deviceMode === 'desktop'
                  ? 'bg-white text-slate-900 font-semibold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>Desktop</span>
            </button>

            <button
              type="button"
              onClick={() => setDeviceMode('tablet')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                deviceMode === 'tablet'
                  ? 'bg-white text-slate-900 font-semibold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Tablet className="w-3.5 h-3.5" />
              <span>Tablet (768px)</span>
            </button>

            <button
              type="button"
              onClick={() => setDeviceMode('mobile')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                deviceMode === 'mobile'
                  ? 'bg-white text-slate-900 font-semibold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile (375px)</span>
            </button>
          </div>

          {/* Actions: Book CTA & Close */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              type="button"
              onClick={() => {
                onClose();
                onBookNow(template);
              }}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white text-xs sm:text-sm font-semibold transition-all shadow-xs hover:shadow-md hover:shadow-indigo-500/20"
            >
              <span>Reserve with 10% ({template.currency}{template.tokenDeposit.toLocaleString('en-IN')})</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Close preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Main Viewport */}
        <div className="flex-1 overflow-y-auto bg-slate-100/70 p-3 sm:p-6 flex flex-col items-center justify-start">
          <div 
            className={`w-full transition-all duration-300 ${
              deviceMode === 'desktop' ? 'max-w-5xl' : deviceMode === 'tablet' ? 'max-w-2xl' : 'max-w-sm'
            }`}
          >
            {/* The Code Mockup Frame */}
            <div className="min-h-[460px] sm:min-h-[520px] rounded-2xl overflow-hidden shadow-xl border border-slate-200">
              <CodeMockup 
                type={template.mockupType} 
                demoUrl={template.demoUrl} 
              />
            </div>

            {/* Template Specs & Deliverables Grid Under Viewport */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3.5 text-xs">
              <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1 shadow-xs">
                <span className="text-[11px] font-semibold text-slate-500 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-indigo-600" />
                  Turnaround SLA
                </span>
                <p className="font-bold text-slate-900">Guaranteed 48 Hours to Production</p>
                <p className="text-[11px] text-slate-500">Custom domain DNS, automated SSL, and cloud hosting pipeline included.</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1 shadow-xs">
                <span className="text-[11px] font-semibold text-slate-500 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />
                  10% Token Escrow
                </span>
                <p className="font-bold text-slate-900">Pay {template.currency}{template.tokenDeposit.toLocaleString('en-IN')} to start</p>
                <p className="text-[11px] text-slate-500">Remaining balance of {template.currency}{(template.fullPrice - template.tokenDeposit).toLocaleString('en-IN')} is due only after live inspection.</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1 shadow-xs">
                <span className="text-[11px] font-semibold text-slate-500 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-indigo-600" />
                  Core Tech Stack
                </span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {template.techStack.map(stack => (
                    <span key={stack} className="px-2 py-0.5 rounded-md bg-slate-100 text-[10px] text-slate-700 font-medium">
                      {stack}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
