import React from 'react';
import { useSite } from '../context/SiteContext';
import { Hero } from '../components/Hero';
import { ServiceCard } from '../components/ServiceCard';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { CallToAction } from '../components/CallToAction';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const HomePage: React.FC = () => {
  const { content, setCurrentPage } = useSite();

  return (
    <div>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Short Introduction Section */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Introduction
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight text-balance">
            {content.intro.title}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {content.intro.description}
          </p>
        </div>
      </section>

      {/* 3. Services Section */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Core Offerings
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                Services Built for Growth
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl">
                Every service is delivered with attention to speed, aesthetics, and ease of management.
              </p>
            </div>
            <div>
              <button
                type="button"
                onClick={() => setCurrentPage('services')}
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors"
              >
                <span>View All Services</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Clean Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {content.services.slice(0, 3).map((service, idx) => (
              <ServiceCard key={service.id || idx} service={service} featured={idx === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. About Section */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Professional Image */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-lg aspect-4/3">
                <img
                  src={content.about.image}
                  alt="Apex Studio directors and leadership team"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs px-3.5 py-1.5 rounded text-xs font-bold text-slate-900 shadow-sm">
                  {content.about.experienceYears}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Who We Are
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {content.about.title}
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                {content.about.story}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-lg bg-slate-50 border border-slate-100">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-1.5 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Our Mission</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {content.about.mission}
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-slate-50 border border-slate-100">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-1.5 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    <span>Our Vision</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {content.about.vision}
                  </p>
                </div>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => setCurrentPage('about')}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us Section */}
      <WhyChooseUs />

      {/* 6. Call-to-Action Section */}
      <CallToAction />
    </div>
  );
};
