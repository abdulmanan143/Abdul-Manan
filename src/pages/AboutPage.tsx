import React from 'react';
import { useSite } from '../context/SiteContext';
import { CallToAction } from '../components/CallToAction';
import { Award, Compass, Eye, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { content } = useSite();

  return (
    <div className="bg-white">
      {/* Page Title & Breadcrumb Header */}
      <section className="bg-slate-50 border-b border-slate-200 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            About Apex Studio
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mt-2">
            About Us
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mt-3">
            {content.about.subtitle}
          </p>
        </div>
      </section>

      {/* Main Section: About the person/business, experience, and professional image */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Story & Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded text-xs font-semibold text-slate-800">
                <Award className="w-4 h-4 text-blue-600" />
                <span>{content.about.experienceYears}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Designed for clarity, built for long-term growth.
              </h2>

              <p className="text-slate-600 text-base leading-relaxed">
                {content.about.story}
              </p>

              <p className="text-slate-600 text-sm leading-relaxed">
                Whether you need a new brand presentation, an accessible WordPress website, or a custom portfolio to showcase your craftsmanship, our philosophy remains the same: eliminate clutter, focus on the user, and build on a solid architectural foundation that anyone on your team can manage.
              </p>

              {/* Statistics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-100">
                {content.about.stats.map((stat, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                    <span className="block text-2xl font-black text-slate-900 font-mono">
                      {stat.value}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Professional Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xl aspect-4/3">
                <img
                  src={content.about.image}
                  alt="Apex Studio directors and professional team"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs font-medium opacity-90">Studio Leadership & Partners</p>
                  <p className="text-sm font-bold">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Guiding Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2">
              Mission & Vision
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              The foundational values that inspire every line of code and every pixel we place.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Our Mission
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {content.about.mission}
              </p>
              <ul className="space-y-2 pt-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Respect for user privacy and accessibility standards</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Zero bloatware or unnecessary script overhead</span>
                </li>
              </ul>
            </div>

            {/* Vision Card */}
            <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Our Vision
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {content.about.vision}
              </p>
              <ul className="space-y-2 pt-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Empowering non-technical creators with effortless CMS tools</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Timeless aesthetics that stay relevant for years</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Studio Values */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Work Ethic
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2">
              Our Commitment to Clients
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-50 rounded-lg border border-slate-200">
              <ShieldCheck className="w-6 h-6 text-slate-800 mb-3" />
              <h3 className="text-base font-bold text-slate-900 mb-1.5">Direct Transparency</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Clear milestones, fixed timelines, and no technical jargon. You always know what is being built.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-lg border border-slate-200">
              <Heart className="w-6 h-6 text-slate-800 mb-3" />
              <h3 className="text-base font-bold text-slate-900 mb-1.5">Client Autonomy</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We believe you should own your website completely, with full control to edit text and media on your terms.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-lg border border-slate-200">
              <Award className="w-6 h-6 text-slate-800 mb-3" />
              <h3 className="text-base font-bold text-slate-900 mb-1.5">Modern Craftsmanship</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We write clean, semantic code that scores high on speed tests, search engines, and accessibility checks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction
        customTitle="Let's build something exceptional together"
        customDescription="Whether starting from scratch or refreshing an existing site, we are ready to assist you."
      />
    </div>
  );
};
