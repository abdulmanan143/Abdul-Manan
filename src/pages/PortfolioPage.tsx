import React, { useState } from 'react';
import { useSite } from '../context/SiteContext';
import { PortfolioCard } from '../components/PortfolioCard';
import { CallToAction } from '../components/CallToAction';

export const PortfolioPage: React.FC = () => {
  const { content } = useSite();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Web Design', 'Brand Identity', 'Architecture', 'Development'];

  const filteredProjects =
    selectedCategory === 'All'
      ? content.portfolio
      : content.portfolio.filter((item) => item.category === selectedCategory);

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-slate-50 border-b border-slate-200 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Selected Work
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mt-2">
            Our Portfolio
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mt-3">
            A curated showcase of recent client collaborations, web builds, and brand platforms.
          </p>
        </div>
      </section>

      {/* Main Portfolio Grid */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Bar */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg max-w-fit mb-12 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Simple Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <PortfolioCard key={project.id} project={project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16 bg-slate-50 rounded-xl border border-slate-200">
              <p className="text-slate-500 text-sm">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction
        customTitle="Have a project in mind?"
        customDescription="Let's talk through your timeline, ideas, and objectives to make it a reality."
      />
    </div>
  );
};
