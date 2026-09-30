import React, { useState } from 'react';
import { PortfolioItem } from '../types';
import { useSite } from '../context/SiteContext';
import { ArrowRight, ImageOff } from 'lucide-react';

interface PortfolioCardProps {
  project: PortfolioItem;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({ project }) => {
  const { setSelectedProject } = useSite();
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group bg-white rounded-lg border border-slate-200 overflow-hidden flex flex-col justify-between hover:border-slate-300 hover:shadow-md transition-all duration-200">
      <div>
        {/* Project Image Container */}
        <div className="relative aspect-4/3 w-full bg-slate-100 overflow-hidden">
          {!imageError ? (
            <img
              src={project.image}
              alt={`${project.title} - Showcase`}
              referrerPolicy="no-referrer"
              onError={() => setImageError(true)}
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-slate-100 text-slate-400 p-4 text-center">
              <ImageOff className="w-8 h-8 mb-2 stroke-1" />
              <span className="text-xs font-medium text-slate-500">{project.title}</span>
            </div>
          )}

          {/* Unboxed subtle category tag overlay */}
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded text-xs font-semibold text-slate-800 shadow-xs">
            {project.category}
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
            <span>{project.client}</span>
            <span aria-hidden="true">·</span>
            <span>{project.year}</span>
          </div>

          <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
            {project.title}
          </h3>

          <p className="text-slate-600 text-sm leading-relaxed line-clamp-2">
            {project.shortDescription}
          </p>
        </div>
      </div>

      {/* View Project Button */}
      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1">
        <button
          type="button"
          onClick={() => setSelectedProject(project)}
          className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 text-xs font-semibold text-slate-800 bg-slate-50 hover:bg-slate-900 hover:text-white border border-slate-200 rounded transition-colors duration-150"
        >
          <span>View Project</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
