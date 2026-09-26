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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-6xl h-[92vh] max-h-[880px] bg-zinc-950 text-zinc-100 rounded-xl border border-zinc-800 shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="preview-modal-title"
      >
        {/* Modal Top Control Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-zinc-900 border-b border-zinc-800 shrink-0 gap-3">
          
          {/* Template Info */}
          <div className="flex items-center gap-3 truncate">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 border border-zinc-700 text-zinc-300 uppercase">
                  {template.category}
                </span>
                <span className="text-zinc-500 text-xs hidden sm:inline">•</span>
                <h3 id="preview-modal-title" className="text-sm sm:text-base font-semibold text-white truncate">
                  {template.name}
                </h3>
              </div>
            </div>
          </div>

          {/* Viewport Device Switcher */}
          <div className="hidden md:flex items-center bg-zinc-950 p-1 rounded-lg border border-zinc-800 text-xs">
            <button
              type="button"
              onClick={() => setDeviceMode('desktop')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded transition-colors ${
                deviceMode === 'desktop'
                  ? 'bg-zinc-800 text-white font-medium'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>Desktop</span>
            </button>

            <button
              type="button"
              onClick={() => setDeviceMode('tablet')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded transition-colors ${
                deviceMode === 'tablet'
                  ? 'bg-zinc-800 text-white font-medium'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Tablet className="w-3.5 h-3.5" />
              <span>Tablet (768px)</span>
            </button>

            <button
              type="button"
              onClick={() => setDeviceMode('mobile')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded transition-colors ${
                deviceMode === 'mobile'
                  ? 'bg-zinc-800 text-white font-medium'
                  : 'text-zinc-400 hover:text-zinc-200'
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
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-white hover:bg-zinc-200 text-zinc-950 text-xs sm:text-sm font-semibold transition-colors shadow-sm"
            >
              <span>Book with 10% Token (${template.tokenDeposit.toFixed(2)})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 sm:p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
              aria-label="Close preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Main Viewport */}
        <div className="flex-1 overflow-y-auto bg-zinc-900/60 p-3 sm:p-6 flex flex-col items-center justify-start">
          <div 
            className={`w-full transition-all duration-300 ${
              deviceMode === 'desktop' ? 'max-w-5xl' : deviceMode === 'tablet' ? 'max-w-2xl' : 'max-w-sm'
            }`}
          >
            {/* The Code Mockup Frame */}
            <div className="min-h-[460px] sm:min-h-[520px] rounded-lg overflow-hidden shadow-2xl border border-zinc-800">
              <CodeMockup 
                type={template.mockupType} 
                demoUrl={template.demoUrl} 
                isInteractive={true} 
              />
            </div>

            {/* Template Specs & Deliverables Grid Under Viewport */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 text-xs">
              <div className="p-3.5 rounded-lg bg-zinc-900 border border-zinc-800 space-y-1">
                <span className="text-[10px] font-mono uppercase text-zinc-500 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-zinc-400" />
                  Turnaround SLA
                </span>
                <p className="font-semibold text-zinc-200">Guaranteed 48 Hours to Production</p>
                <p className="text-[11px] text-zinc-400">Custom domain DNS, SSL certificate, and deployment pipeline.</p>
              </div>

              <div className="p-3.5 rounded-lg bg-zinc-900 border border-zinc-800 space-y-1">
                <span className="text-[10px] font-mono uppercase text-zinc-500 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-zinc-400" />
                  10% Token Protection
                </span>
                <p className="font-semibold text-zinc-200">Pay ${template.tokenDeposit.toFixed(2)} to provision</p>
                <p className="text-[11px] text-zinc-400">Balance of ${(template.fullPrice - template.tokenDeposit).toFixed(2)} is due only after live inspection.</p>
              </div>

              <div className="p-3.5 rounded-lg bg-zinc-900 border border-zinc-800 space-y-1">
                <span className="text-[10px] font-mono uppercase text-zinc-500 flex items-center gap-1">
                  <Layers className="w-3 h-3 text-zinc-400" />
                  Stack Architecture
                </span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {template.techStack.map(stack => (
                    <span key={stack} className="px-1.5 py-0.5 rounded bg-zinc-800 text-[10px] text-zinc-300 font-mono">
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
