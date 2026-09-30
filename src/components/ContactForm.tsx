import React, { useState } from 'react';
import { useSite } from '../context/SiteContext';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  AlertCircle,
  Send,
  RotateCcw,
} from 'lucide-react';

export const ContactForm: React.FC = () => {
  const { content, addSubmission } = useSite();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedId, setSubmittedId] = useState<string | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your full name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide your phone number.';
    }
    if (!formData.subject.trim()) {
      errs.subject = 'Please choose or write a subject.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please include a message describing your inquiry.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const id = addSubmission({
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
      });
      setIsSubmitting(false);
      setSubmittedId(id);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      setErrors({});
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
    setErrors({});
    setSubmittedId(null);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
      {/* Left Column: Contact Form */}
      <div className="lg:col-span-7 bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-xs">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-2">
          Send Us a Message
        </h2>
        <p className="text-slate-600 text-sm mb-6">
          Fill out the form below and our team will get back to you within one business day.
        </p>

        {submittedId ? (
          <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-lg space-y-3 animate-in fade-in">
            <div className="flex items-center gap-2.5 text-emerald-800 font-semibold text-base">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>Thank you! Your message has been sent.</span>
            </div>
            <p className="text-emerald-700 text-xs leading-relaxed">
              We have received your message with Reference ID{' '}
              <span className="font-mono font-bold">{submittedId}</span>. A team member will follow up shortly via email or phone.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setSubmittedId(null)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-900 bg-white border border-emerald-300 rounded hover:bg-emerald-100 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Send Another Message</span>
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
              >
                Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Jane Doe"
                className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-md text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-slate-900 transition-all ${
                  errors.name ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                }`}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.name}</span>
                </p>
              )}
            </div>

            {/* Email & Phone Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="jane@example.com"
                  className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-md text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-slate-900 transition-all ${
                    errors.email ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
                >
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+1 (555) 000-0000"
                  className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-md text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-slate-900 transition-all ${
                    errors.phone ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                  }`}
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
              >
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                id="subject"
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="e.g. Website Redesign / WordPress Build"
                className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-md text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-slate-900 transition-all ${
                  errors.subject ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                }`}
              />
              {errors.subject && (
                <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.subject}</span>
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Please tell us about your project, goals, and ideal timeline..."
                className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-md text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-slate-900 transition-all resize-y ${
                  errors.message ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                }`}
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.message}</span>
                </p>
              )}
            </div>

            {/* Form Actions */}
            <div className="pt-2 flex items-center gap-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 disabled:bg-slate-400 rounded-md transition-colors shadow-xs"
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Submit</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors"
              >
                Reset
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Right Column: Contact Details & Social Media */}
      <div className="lg:col-span-5 space-y-6">
        <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
          <div>
            <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2">
              Contact Information
            </h3>
            <p className="text-slate-600 text-sm">
              Reach out to us directly or visit our office. We look forward to connecting with you.
            </p>
          </div>

          <div className="space-y-4 text-sm">
            {/* Phone */}
            <div className="flex items-start gap-3.5 p-3 rounded-lg bg-slate-50 border border-slate-100">
              <Phone className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Phone
                </span>
                <a
                  href={`tel:${content.phone.replace(/[^0-9+]/g, '')}`}
                  className="font-medium text-slate-900 hover:text-blue-600 transition-colors"
                >
                  {content.phone}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3.5 p-3 rounded-lg bg-slate-50 border border-slate-100">
              <Mail className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Email
                </span>
                <a
                  href={`mailto:${content.email}`}
                  className="font-medium text-slate-900 hover:text-blue-600 transition-colors break-all"
                >
                  {content.email}
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3.5 p-3 rounded-lg bg-slate-50 border border-slate-100">
              <MapPin className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Address
                </span>
                <p className="font-medium text-slate-900 leading-snug">
                  {content.address}
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-3.5 p-3 rounded-lg bg-slate-50 border border-slate-100">
              <Clock className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Working Hours
                </span>
                <p className="font-medium text-slate-900 text-xs leading-snug">
                  {content.businessHours}
                </p>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="pt-4 border-t border-slate-100">
            <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-3">
              Follow Us
            </h4>
            <div className="flex items-center gap-3">
              <a
                href={content.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={content.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors"
              >
                Twitter / X
              </a>
              <a
                href={content.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors"
              >
                Instagram
              </a>
              <a
                href={content.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
