import React from 'react';
import { useSite } from '../context/SiteContext';
import { X, Check, ArrowRight, ExternalLink } from 'lucide-react';

export const ProjectModal: React.FC = () => {
  const { selectedProject, setSelectedProject, setCurrentPage } = useSite();

  if (!selectedProject) return null;

  const handleStartSimilar = () => {
    setSelectedProject(null);
    setCurrentPage('contact');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4"
    >
      <div className="relative bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={() => setSelectedProject(null)}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 text-slate-700 hover:text-slate-900 shadow-sm border border-slate-200 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Project Image Banner */}
        <div className="relative aspect-16/9 w-full bg-slate-100 overflow-hidden">
          <img
            src={selectedProject.image}
            alt={selectedProject.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="text-xs uppercase tracking-wider font-semibold opacity-90">
              {selectedProject.category}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
              {selectedProject.title}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Metadata Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100 text-xs">
            <div>
              <span className="text-slate-400 block mb-0.5">Client</span>
              <span className="font-semibold text-slate-800">{selectedProject.client}</span>
            </div>
            <div>
              <span className="text-slate-400 block mb-0.5">Year</span>
              <span className="font-semibold text-slate-800">{selectedProject.year}</span>
            </div>
            <div>
              <span className="text-slate-400 block mb-0.5">Discipline</span>
              <span className="font-semibold text-slate-800">{selectedProject.category}</span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-900 mb-2">Project Overview</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {selectedProject.fullDescription}
            </p>
          </div>

          {selectedProject.deliverables && (
            <div>
              <h3 className="text-sm font-bold text-slate-900 mb-3">Key Deliverables</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedProject.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                    <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Row */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="w-full sm:w-auto px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors text-center"
            >
              Back to Portfolio
            </button>
            <button
              type="button"
              onClick={handleStartSimilar}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors shadow-sm"
            >
              <span>Discuss a Similar Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
