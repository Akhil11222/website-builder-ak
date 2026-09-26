'use client';

import React from 'react';
import { 
  ArrowRight, 
  ExternalLink, 
  Clock, 
  ShieldCheck, 
  Check, 
  Eye
} from 'lucide-react';
import { Template } from '@/data/templates';
import CodeMockup from './CodeMockup';

interface TemplateCardProps {
  template: Template;
  onPreview: (template: Template) => void;
  onBook: (template: Template) => void;
}

export default function TemplateCard({
  template,
  onPreview,
  onBook
}: TemplateCardProps) {
  return (
    <div className="group rounded-xl bg-white border border-zinc-200/90 hover:border-zinc-400/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden">
      
      {/* Code-Rendered Browser Mockup Preview Area */}
      <div className="relative h-60 sm:h-64 bg-zinc-950 p-2 overflow-hidden border-b border-zinc-200">
        <CodeMockup 
          type={template.mockupType} 
          demoUrl={template.demoUrl} 
        />

        {/* Hover Overlay with Live Preview Button */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-3 backdrop-blur-[2px]">
          <button
            type="button"
            onClick={() => onPreview(template)}
            className="px-4 py-2 rounded-lg bg-white/95 hover:bg-white text-zinc-950 text-xs font-semibold flex items-center gap-1.5 shadow-lg transform -translate-y-1 group-hover:translate-y-0 transition-transform duration-200"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Interactive Preview</span>
          </button>
        </div>

        {/* Popular / Category Badge */}
        <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 pointer-events-none">
          <span className="px-2 py-0.5 rounded bg-zinc-950/80 backdrop-blur-xs border border-zinc-800 text-[10px] font-mono text-zinc-200 uppercase">
            {template.category}
          </span>
          {template.popularBadge && (
            <span className="px-2 py-0.5 rounded bg-zinc-100/90 text-zinc-900 border border-zinc-300 text-[10px] font-medium hidden sm:inline-block">
              {template.popularBadge}
            </span>
          )}
        </div>
      </div>

      {/* Card Content & Pricing Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Header & Tagline */}
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="text-base font-bold text-zinc-950 group-hover:text-zinc-800 transition-colors">
                {template.name}
              </h3>
              <p className="text-xs text-zinc-500 mt-1 line-clamp-2 leading-relaxed">
                {template.tagline}
              </p>
            </div>
          </div>

          {/* Key Features List */}
          <ul className="mt-4 space-y-1.5">
            {template.features.slice(0, 3).map((feat, idx) => (
              <li key={idx} className="flex items-center gap-2 text-xs text-zinc-600">
                <Check className="w-3.5 h-3.5 text-zinc-900 shrink-0" />
                <span className="truncate">{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing & 10% Token Guarantee Row */}
        <div className="pt-3 border-t border-zinc-100 space-y-3">
          <div className="flex items-baseline justify-between">
            <div>
              <span className="text-[10px] font-mono uppercase text-zinc-400 block">Full License</span>
              <span className="text-lg font-bold text-zinc-900 font-mono">
                ${template.fullPrice}
              </span>
            </div>

            {/* Calculated 10% Token Badge */}
            <div className="text-right">
              <span className="text-[10px] font-mono uppercase text-zinc-500 block">Deposit to Start</span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-zinc-950 text-white text-xs font-bold font-mono">
                <span>10% Token:</span>
                <span>${template.tokenDeposit.toFixed(2)}</span>
              </span>
            </div>
          </div>

          {/* Action CTAs: Live Preview & Book with 10% Token */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <button
              type="button"
              onClick={() => onPreview(template)}
              className="w-full py-2 px-3 border border-zinc-300 hover:border-zinc-900 rounded-lg text-xs font-semibold text-zinc-800 hover:bg-zinc-50 transition-colors flex items-center justify-center gap-1.5"
            >
              <ExternalLink className="w-3.5 h-3.5 text-zinc-500" />
              <span>Live Preview</span>
            </button>

            <button
              type="button"
              onClick={() => onBook(template)}
              className="w-full py-2 px-3 bg-zinc-950 hover:bg-zinc-800 text-white rounded-lg text-xs font-semibold transition-all shadow-xs hover:shadow flex items-center justify-center gap-1.5"
            >
              <span>Book with 10%</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 48-Hour SLA Micro Notice */}
          <div className="flex items-center justify-between text-[11px] text-zinc-400 font-mono pt-0.5">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-zinc-500" />
              48h Handover
            </span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-zinc-500" />
              Custom Domain SLA
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
