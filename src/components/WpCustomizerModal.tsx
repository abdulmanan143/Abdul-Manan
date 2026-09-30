import React, { useState } from 'react';
import { useSite } from '../context/SiteContext';
import {
  X,
  Save,
  RotateCcw,
  Plus,
  Trash2,
  Inbox,
  FileText,
  Sliders,
  Briefcase,
  Layers,
  CheckCircle,
} from 'lucide-react';
import { ServiceItem, PortfolioItem } from '../types';

export const WpCustomizerModal: React.FC = () => {
  const {
    isCustomizerOpen,
    setIsCustomizerOpen,
    content,
    updateContent,
    resetContentToDefault,
    submissions,
    deleteSubmission,
    clearAllSubmissions,
  } = useSite();

  const [activeTab, setActiveTab] = useState<
    'general' | 'hero' | 'services' | 'portfolio' | 'submissions'
  >('general');

  // Local draft states
  const [formData, setFormData] = useState(content);

  // Sync draft when opened or content changes
  React.useEffect(() => {
    setFormData(content);
  }, [content, isCustomizerOpen]);

  if (!isCustomizerOpen) return null;

  const handleSave = () => {
    updateContent(formData);
    setIsCustomizerOpen(false);
  };

  // Service helpers
  const handleUpdateService = (index: number, updated: Partial<ServiceItem>) => {
    const list = [...formData.services];
    list[index] = { ...list[index], ...updated };
    setFormData({ ...formData, services: list });
  };

  const handleAddService = () => {
    const newService: ServiceItem = {
      id: `srv-${Date.now()}`,
      name: 'New Custom Service',
      shortDescription: 'Describe the key offering and client benefit here in 1-2 clear sentences.',
      fullDescription: 'Comprehensive overview of the service methodology, delivery timeline, and technical execution.',
      iconName: 'Layout',
      features: ['Strategy & Scoping', 'Full Implementation', 'Revision Cycles', 'Handover & Documentation'],
    };
    setFormData({ ...formData, services: [...formData.services, newService] });
  };

  const handleDeleteService = (index: number) => {
    const list = formData.services.filter((_, idx) => idx !== index);
    setFormData({ ...formData, services: list });
  };

  // Portfolio helpers
  const handleUpdatePortfolio = (index: number, updated: Partial<PortfolioItem>) => {
    const list = [...formData.portfolio];
    list[index] = { ...list[index], ...updated };
    setFormData({ ...formData, portfolio: list });
  };

  const handleAddPortfolio = () => {
    const newProject: PortfolioItem = {
      id: `port-${Date.now()}`,
      title: 'New Client Showcase',
      category: 'Web Design',
      shortDescription: 'Modern web experience with fast load times and clean presentation.',
      fullDescription: 'Complete case study highlighting client goals, architectural decisions, and tangible business results.',
      image: '/src/assets/images/portfolio_fintech_app_1790787923145.jpg',
      client: 'Acme Enterprises',
      year: '2026',
      deliverables: ['Responsive Web Design', 'WordPress Theme', 'Performance Tuning'],
    };
    setFormData({ ...formData, portfolio: [...formData.portfolio, newProject] });
  };

  const handleDeletePortfolio = (index: number) => {
    const list = formData.portfolio.filter((_, idx) => idx !== index);
    setFormData({ ...formData, portfolio: list });
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
    >
      <div className="relative bg-white rounded-xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <span className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center text-xs font-bold text-white">
              WP
            </span>
            <div>
              <h2 className="text-sm font-bold tracking-wide">
                WordPress Live Customizer & Administrator Panel
              </h2>
              <p className="text-xs text-slate-400">
                Easily replace text, contact information, services, and portfolio items
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsCustomizerOpen(false)}
            className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors"
            aria-label="Close customizer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-1 px-6 pt-3 bg-slate-100 border-b border-slate-200 overflow-x-auto text-xs font-medium">
          <button
            onClick={() => setActiveTab('general')}
            className={`flex items-center gap-1.5 px-3 py-2 border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'general'
                ? 'border-slate-900 text-slate-900 font-semibold bg-white rounded-t'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>Site Info & Contact</span>
          </button>

          <button
            onClick={() => setActiveTab('hero')}
            className={`flex items-center gap-1.5 px-3 py-2 border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'hero'
                ? 'border-slate-900 text-slate-900 font-semibold bg-white rounded-t'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Hero & About</span>
          </button>

          <button
            onClick={() => setActiveTab('services')}
            className={`flex items-center gap-1.5 px-3 py-2 border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'services'
                ? 'border-slate-900 text-slate-900 font-semibold bg-white rounded-t'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Services ({formData.services.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('portfolio')}
            className={`flex items-center gap-1.5 px-3 py-2 border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'portfolio'
                ? 'border-slate-900 text-slate-900 font-semibold bg-white rounded-t'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Portfolio ({formData.portfolio.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('submissions')}
            className={`flex items-center gap-1.5 px-3 py-2 border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'submissions'
                ? 'border-slate-900 text-slate-900 font-semibold bg-white rounded-t'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Inbox className="w-3.5 h-3.5" />
            <span>Inbox Submissions ({submissions.length})</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6 text-sm">
          {/* TAB 1: General & Contact Information */}
          {activeTab === 'general' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Website Name / Brand
                  </label>
                  <input
                    type="text"
                    value={formData.siteName}
                    onChange={(e) => setFormData({ ...formData, siteName: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded text-sm focus:ring-2 focus:ring-slate-900 focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Tagline / Subtitle
                  </label>
                  <input
                    type="text"
                    value={formData.tagline}
                    onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded text-sm focus:ring-2 focus:ring-slate-900 focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded text-sm focus:ring-2 focus:ring-slate-900 focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded text-sm focus:ring-2 focus:ring-slate-900 focus:outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Physical Office Address
                </label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded text-sm focus:ring-2 focus:ring-slate-900 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Business Working Hours
                </label>
                <input
                  type="text"
                  value={formData.businessHours}
                  onChange={(e) => setFormData({ ...formData, businessHours: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded text-sm focus:ring-2 focus:ring-slate-900 focus:outline-hidden"
                />
              </div>

              <div className="pt-2 border-t border-slate-200">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">
                  Social Media Links
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="block text-slate-600 mb-1">LinkedIn URL</label>
                    <input
                      type="text"
                      value={formData.socials.linkedin}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          socials: { ...formData.socials, linkedin: e.target.value },
                        })
                      }
                      className="w-full px-3 py-1.5 border border-slate-300 rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-600 mb-1">Twitter / X URL</label>
                    <input
                      type="text"
                      value={formData.socials.twitter}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          socials: { ...formData.socials, twitter: e.target.value },
                        })
                      }
                      className="w-full px-3 py-1.5 border border-slate-300 rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-600 mb-1">Instagram URL</label>
                    <input
                      type="text"
                      value={formData.socials.instagram}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          socials: { ...formData.socials, instagram: e.target.value },
                        })
                      }
                      className="w-full px-3 py-1.5 border border-slate-300 rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-600 mb-1">Facebook URL</label>
                    <input
                      type="text"
                      value={formData.socials.facebook}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          socials: { ...formData.socials, facebook: e.target.value },
                        })
                      }
                      className="w-full px-3 py-1.5 border border-slate-300 rounded"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Hero & About Page Content */}
          {activeTab === 'hero' && (
            <div className="space-y-5">
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-3">
                <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Hero Section Text
                </h3>
                <div>
                  <label className="block text-xs text-slate-600 mb-1">Main Heading</label>
                  <input
                    type="text"
                    value={formData.hero.title}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        hero: { ...formData.hero, title: e.target.value },
                      })
                    }
                    className="w-full px-3 py-2 border border-slate-300 rounded text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-600 mb-1">Short Description</label>
                  <textarea
                    rows={2}
                    value={formData.hero.subtitle}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        hero: { ...formData.hero, subtitle: e.target.value },
                      })
                    }
                    className="w-full px-3 py-2 border border-slate-300 rounded text-sm"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-slate-600 mb-1">Button 1 Label</label>
                    <input
                      type="text"
                      value={formData.hero.primaryButtonText}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          hero: { ...formData.hero, primaryButtonText: e.target.value },
                        })
                      }
                      className="w-full px-3 py-1.5 border border-slate-300 rounded text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-600 mb-1">Button 2 Label</label>
                    <input
                      type="text"
                      value={formData.hero.secondaryButtonText}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          hero: { ...formData.hero, secondaryButtonText: e.target.value },
                        })
                      }
                      className="w-full px-3 py-1.5 border border-slate-300 rounded text-xs"
                    />
                  </div>
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-3">
                <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  About Page Content
                </h3>
                <div>
                  <label className="block text-xs text-slate-600 mb-1">Our Mission</label>
                  <textarea
                    rows={2}
                    value={formData.about.mission}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        about: { ...formData.about, mission: e.target.value },
                      })
                    }
                    className="w-full px-3 py-1.5 border border-slate-300 rounded text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-600 mb-1">Our Vision</label>
                  <textarea
                    rows={2}
                    value={formData.about.vision}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        about: { ...formData.about, vision: e.target.value },
                      })
                    }
                    className="w-full px-3 py-1.5 border border-slate-300 rounded text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-600 mb-1">Experience Summary</label>
                  <input
                    type="text"
                    value={formData.about.experienceYears}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        about: { ...formData.about, experienceYears: e.target.value },
                      })
                    }
                    className="w-full px-3 py-1.5 border border-slate-300 rounded text-xs"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Services */}
          {activeTab === 'services' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs text-slate-600">
                  Manage services shown on the Services page and Home page.
                </p>
                <button
                  type="button"
                  onClick={handleAddService}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Service</span>
                </button>
              </div>

              {formData.services.map((service, idx) => (
                <div
                  key={service.id || idx}
                  className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-700">
                      Service #{idx + 1}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleDeleteService(idx)}
                      className="text-xs text-red-600 hover:text-red-800 flex items-center gap-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Remove</span>
                    </button>
                  </div>
                  <div>
                    <label className="block text-xs text-slate-600 mb-1">Service Name</label>
                    <input
                      type="text"
                      value={service.name}
                      onChange={(e) => handleUpdateService(idx, { name: e.target.value })}
                      className="w-full px-3 py-1.5 border border-slate-300 rounded text-xs font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-600 mb-1">Short Description</label>
                    <textarea
                      rows={2}
                      value={service.shortDescription}
                      onChange={(e) =>
                        handleUpdateService(idx, { shortDescription: e.target.value })
                      }
                      className="w-full px-3 py-1.5 border border-slate-300 rounded text-xs"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 4: Portfolio */}
          {activeTab === 'portfolio' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs text-slate-600">
                  Manage projects displayed on the Portfolio page.
                </p>
                <button
                  type="button"
                  onClick={handleAddPortfolio}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Project</span>
                </button>
              </div>

              {formData.portfolio.map((project, idx) => (
                <div
                  key={project.id || idx}
                  className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-700">
                      Project #{idx + 1}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleDeletePortfolio(idx)}
                      className="text-xs text-red-600 hover:text-red-800 flex items-center gap-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Remove</span>
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs text-slate-600 mb-1">Project Title</label>
                      <input
                        type="text"
                        value={project.title}
                        onChange={(e) => handleUpdatePortfolio(idx, { title: e.target.value })}
                        className="w-full px-3 py-1.5 border border-slate-300 rounded text-xs font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-600 mb-1">Client Name</label>
                      <input
                        type="text"
                        value={project.client}
                        onChange={(e) => handleUpdatePortfolio(idx, { client: e.target.value })}
                        className="w-full px-3 py-1.5 border border-slate-300 rounded text-xs"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-slate-600 mb-1">Short Description</label>
                    <textarea
                      rows={2}
                      value={project.shortDescription}
                      onChange={(e) =>
                        handleUpdatePortfolio(idx, { shortDescription: e.target.value })
                      }
                      className="w-full px-3 py-1.5 border border-slate-300 rounded text-xs"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 5: Form Submissions Inbox */}
          {activeTab === 'submissions' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Contact Form Messages Inbox
                  </h3>
                  <p className="text-xs text-slate-500">
                    Inquiries received directly through the Contact page form.
                  </p>
                </div>
                {submissions.length > 0 && (
                  <button
                    type="button"
                    onClick={clearAllSubmissions}
                    className="text-xs text-slate-600 hover:text-red-600 underline"
                  >
                    Clear All
                  </button>
                )}
              </div>

              {submissions.length === 0 ? (
                <div className="p-8 text-center bg-slate-50 rounded-lg border border-slate-200">
                  <Inbox className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                  <p className="text-xs text-slate-600">No contact messages received yet.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {submissions.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 bg-white border border-slate-200 rounded-lg shadow-2xs space-y-2"
                    >
                      <div className="flex items-center justify-between text-xs text-slate-500">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-slate-900 text-sm">{item.name}</span>
                          <span aria-hidden="true">·</span>
                          <span className="text-slate-600">{item.email}</span>
                          <span aria-hidden="true">·</span>
                          <span>{item.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>{item.createdAt}</span>
                          <button
                            type="button"
                            onClick={() => deleteSubmission(item.id)}
                            className="p-1 text-slate-400 hover:text-red-600"
                            title="Delete message"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      <div className="font-semibold text-xs text-slate-800">
                        Subject: {item.subject}
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-2.5 rounded border border-slate-100">
                        {item.message}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            type="button"
            onClick={resetContentToDefault}
            className="flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Site to Defaults</span>
          </button>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => setIsCustomizerOpen(false)}
              className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded transition-colors"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-5 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded transition-colors shadow-xs"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Save & Publish Changes</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
