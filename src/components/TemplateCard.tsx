'use client';

import React from 'react';
import { 
  ArrowRight, 
  ExternalLink, 
  Clock, 
  ShieldCheck, 
  Check, 
  Eye,
  Star
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
    <div className="group rounded-2xl bg-white border border-slate-200/80 hover:border-indigo-200/90 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 flex flex-col overflow-hidden">
      
      {/* Code-Rendered Browser Mockup Preview Area */}
      <div className="relative h-60 sm:h-64 bg-slate-100 p-2 overflow-hidden border-b border-slate-200/80">
        <CodeMockup 
          type={template.mockupType} 
          demoUrl={template.demoUrl} 
        />

        {/* Hover Overlay with Interactive Preview Button */}
        <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-3 backdrop-blur-[2px]">
          <button
            type="button"
            onClick={() => onPreview(template)}
            className="px-4 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-900 text-xs font-semibold flex items-center gap-1.5 shadow-lg transform -translate-y-1 group-hover:translate-y-0 transition-transform duration-200"
          >
            <Eye className="w-3.5 h-3.5 text-indigo-600" />
            <span>Interactive Live Preview</span>
          </button>
        </div>

        {/* Popular / Category Badge */}
        <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 pointer-events-none">
          <span className="px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-xs border border-slate-200 text-[11px] font-semibold text-slate-800 shadow-xs">
            {template.category}
          </span>
          {template.popularBadge && (
            <span className="px-2.5 py-1 rounded-full bg-indigo-50/95 text-indigo-700 border border-indigo-100 text-[10px] font-bold shadow-xs">
              {template.popularBadge}
            </span>
          )}
        </div>
      </div>

      {/* Card Content & Pricing Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Header & Tagline */}
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                {template.name}
              </h3>
              <div className="flex items-center gap-1 text-xs font-medium text-slate-700">
                <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
                <span>{template.rating}</span>
                <span className="text-slate-400 text-[11px]">({template.reviewsCount})</span>
              </div>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
              {template.tagline}
            </p>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {template.techStack.map((tech) => (
              <span 
                key={tech}
                className="px-2 py-0.5 rounded-md bg-slate-100 text-[11px] font-medium text-slate-600"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Key Deliverables Bullet Points */}
          <ul className="mt-4 space-y-1.5 border-t border-slate-100 pt-3">
            {template.features.slice(0, 3).map((feat, idx) => (
              <li key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                <Check className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                <span className="truncate">{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing & 10% Token Guarantee Row */}
        <div className="pt-4 border-t border-slate-100 space-y-3.5">
          <div className="flex items-end justify-between">
            <div>
              <span className="text-[11px] text-slate-400 font-medium block">
                Total Price: {template.currency}{template.fullPrice.toLocaleString('en-IN')}
              </span>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="text-xs text-slate-500">Only</span>
                <span className="text-lg sm:text-xl font-extrabold text-slate-900">
                  {template.currency}{template.tokenDeposit.toLocaleString('en-IN')}
                </span>
                <span className="text-[11px] text-indigo-700 font-semibold bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-100">
                  10% Token
                </span>
              </div>
            </div>

            {/* Delivery Timeline Pill */}
            <div className="flex items-center gap-1 text-[11px] text-slate-500 font-medium">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>Ready in 48h</span>
            </div>
          </div>

          {/* Action CTAs: Live Preview & Book with 10% Token */}
          <div className="grid grid-cols-2 gap-2.5 pt-1">
            <button
              type="button"
              onClick={() => onPreview(template)}
              className="w-full py-2.5 px-3 border border-slate-200 hover:border-slate-300 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors flex items-center justify-center gap-1.5 min-h-[42px]"
            >
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              <span>Live Preview</span>
            </button>

            <button
              type="button"
              onClick={() => onBook(template)}
              className="w-full py-2.5 px-3 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white rounded-xl text-xs font-semibold transition-all shadow-xs hover:shadow-md hover:shadow-indigo-500/20 flex items-center justify-center gap-1.5 min-h-[42px]"
            >
              <span>Reserve with 10%</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Risk-Free Notice */}
          <div className="flex items-center justify-between text-[11px] text-slate-500 pt-0.5">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />
              Escrow Protection
            </span>
            <span>90% due after live review</span>
          </div>
        </div>

      </div>
    </div>
  );
}
