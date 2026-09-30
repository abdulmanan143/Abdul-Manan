import React from 'react';
import { useSite } from '../context/SiteContext';
import { ArrowRight, Mail } from 'lucide-react';

interface CallToActionProps {
  customTitle?: string;
  customDescription?: string;
}

export const CallToAction: React.FC<CallToActionProps> = ({
  customTitle,
  customDescription,
}) => {
  const { content, setCurrentPage } = useSite();

  return (
    <section className="bg-slate-100 border-t border-b border-slate-200 py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          Get in Touch
        </span>

        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
          {customTitle || content.cta.title}
        </h2>

        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          {customDescription || content.cta.description}
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <button
            type="button"
            onClick={() => setCurrentPage('services')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors shadow-sm"
          >
            <span>{content.cta.primaryButtonText}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => setCurrentPage('contact')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-md transition-colors"
          >
            <Mail className="w-4 h-4 text-slate-600" />
            <span>{content.cta.secondaryButtonText}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
