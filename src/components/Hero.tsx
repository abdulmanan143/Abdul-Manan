import React, { useState } from 'react';
import { useSite } from '../context/SiteContext';
import { ArrowRight, Mail, CheckCircle, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  const { content, setCurrentPage } = useSite();
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative overflow-hidden bg-slate-50 border-b border-slate-200 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading, description, and two buttons */}
          <div className="lg:col-span-7 space-y-6">
            {/* Tagline / Subtitle */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-900"></span>
              <span>{content.hero.badge}</span>
            </div>

            {/* Professional Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] text-balance">
              {content.hero.title}
            </h1>

            {/* Short Description */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl">
              {content.hero.subtitle}
            </p>

            {/* Two Action Buttons: Get Started & Contact Us */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                type="button"
                onClick={() => setCurrentPage('services')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors shadow-sm"
              >
                <span>{content.hero.primaryButtonText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => setCurrentPage('contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 rounded-md transition-colors"
              >
                <Mail className="w-4 h-4 text-slate-600" />
                <span>{content.hero.secondaryButtonText}</span>
              </button>
            </div>

            {/* Quick Proof Metrics / Trust Signals */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4 text-xs text-slate-600">
              <div>
                <span className="block font-bold text-slate-900 text-base sm:text-lg">100%</span>
                <span className="text-slate-500">Mobile Responsive</span>
              </div>
              <div>
                <span className="block font-bold text-slate-900 text-base sm:text-lg">Sub-1s</span>
                <span className="text-slate-500">Speed Optimizations</span>
              </div>
              <div>
                <span className="block font-bold text-slate-900 text-base sm:text-lg">WordPress</span>
                <span className="text-slate-500">Gutenberg Friendly</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden bg-slate-200 border border-slate-300 shadow-xl aspect-16/9 lg:aspect-4/3">
              {!imageError ? (
                <img
                  src={content.hero.image}
                  alt="Modern creative agency workspace and design process"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-slate-100 p-8 text-center text-slate-500">
                  <ShieldCheck className="w-12 h-12 mb-3 text-slate-400" />
                  <span className="font-semibold text-slate-800">Clean Modern Architecture</span>
                  <span className="text-xs text-slate-500 mt-1">Lightweight, fast & responsive</span>
                </div>
              )}

              {/* Minimal caption watermark */}
              <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs px-3 py-1 rounded text-xs font-medium text-slate-800 shadow-xs flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>Crafted with Precision</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
