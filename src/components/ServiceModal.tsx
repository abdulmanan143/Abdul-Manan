import React from 'react';
import { useSite } from '../context/SiteContext';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

export const ServiceModal: React.FC = () => {
  const { selectedService, setSelectedService, setCurrentPage } = useSite();

  if (!selectedService) return null;

  const handleInquire = () => {
    setSelectedService(null);
    setCurrentPage('contact');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4"
    >
      <div className="relative bg-white rounded-xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={() => setSelectedService(null)}
          className="absolute top-5 right-5 p-1.5 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Service Details
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            {selectedService.name}
          </h2>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          {selectedService.fullDescription}
        </p>

        <div className="bg-slate-50 rounded-lg p-4 mb-6 border border-slate-100">
          <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-3">
            What is Included
          </h4>
          <ul className="space-y-2.5">
            {selectedService.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between gap-3 pt-2">
          <button
            type="button"
            onClick={() => setSelectedService(null)}
            className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors"
          >
            Close
          </button>
          <button
            type="button"
            onClick={handleInquire}
            className="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors shadow-sm"
          >
            <span>Inquire About This Service</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
