import React from 'react';
import { useSite } from '../context/SiteContext';
import { ContactForm } from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { content } = useSite();

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <section className="bg-white border-b border-slate-200 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mt-2">
            Contact Us
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mt-3">
            Have a question or looking to build a new website? Send us a message below and we will respond promptly.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>

      {/* Office & Location Note */}
      <section className="pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">Visit Our San Francisco Studio</h3>
              <p className="text-xs text-slate-600 mt-1">
                {content.address} · By appointment Monday through Friday
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`mailto:${content.email}`}
              className="px-4 py-2 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors"
            >
              Direct Email
            </a>
            <a
              href={`tel:${content.phone.replace(/[^0-9+]/g, '')}`}
              className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
