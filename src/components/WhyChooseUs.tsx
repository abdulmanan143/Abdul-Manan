import React from 'react';
import { useSite } from '../context/SiteContext';
import { Sparkles, Code, Smartphone, BarChart3, ShieldCheck, Zap } from 'lucide-react';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Sparkles,
  Code,
  Smartphone,
  BarChart3,
  ShieldCheck,
  Zap,
};

export const WhyChooseUs: React.FC = () => {
  const { content } = useSite();

  return (
    <section className="py-16 sm:py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Our Advantages
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mt-2">
            Why Choose Us
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            We focus on clean fundamentals that deliver real results: simplicity, performance, and long-term maintainability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.whyChooseUs.map((item, idx) => {
            const Icon = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={item.id || idx}
                className="bg-slate-800/80 rounded-lg p-6 border border-slate-700/60 hover:border-slate-600 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded bg-slate-700 text-white flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
