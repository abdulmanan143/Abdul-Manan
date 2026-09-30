import React from 'react';
import { useSite } from '../context/SiteContext';
import { ServiceCard } from '../components/ServiceCard';
import { CallToAction } from '../components/CallToAction';
import { CheckCircle2, Sparkles, Layers, RefreshCw } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const { content } = useSite();

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-slate-50 border-b border-slate-200 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            What We Do
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mt-2">
            Our Services
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mt-3">
            Tailored digital solutions built with modern standards, blazing speed, and non-technical WordPress administration.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Complete Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2">
              Everything Needed for a Standout Web Presence
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Explore our core offerings. Click “Learn More” on any card to view detailed specifications and deliverables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {content.services.map((service, idx) => (
              <ServiceCard key={service.id || idx} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Structured Delivery Process */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Methodology
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2">
              How We Deliver Projects
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              A predictable 4-step workflow that keeps your project on budget and delivered on time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg border border-slate-200 space-y-3">
              <span className="text-xs font-mono font-bold text-slate-400">STEP 01</span>
              <h3 className="text-base font-bold text-slate-900">Discovery & Strategy</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We review your business goals, target audience, content structure, and key conversion paths.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200 space-y-3">
              <span className="text-xs font-mono font-bold text-slate-400">STEP 02</span>
              <h3 className="text-base font-bold text-slate-900">Design & Wireframes</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We produce clean mockups and typography systems tailored to your identity with clear reviews.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200 space-y-3">
              <span className="text-xs font-mono font-bold text-slate-400">STEP 03</span>
              <h3 className="text-base font-bold text-slate-900">Clean Build & Testing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We code responsive layouts, configure easy editing blocks, and optimize for fast mobile load times.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200 space-y-3">
              <span className="text-xs font-mono font-bold text-slate-400">STEP 04</span>
              <h3 className="text-base font-bold text-slate-900">Launch & Admin Training</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We connect your domain, audit SEO, and walk you through updating pages and text with zero stress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction
        customTitle="Ready to start your next web project?"
        customDescription="Select the service that fits your immediate needs or message us for a customized package."
      />
    </div>
  );
};
