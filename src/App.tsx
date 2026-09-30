import React, { useEffect } from 'react';
import { SiteProvider, useSite } from './context/SiteContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ContactPage } from './pages/ContactPage';
import { ServiceModal } from './components/ServiceModal';
import { ProjectModal } from './components/ProjectModal';
import { WpCustomizerModal } from './components/WpCustomizerModal';
import { CheckCircle2 } from 'lucide-react';

const PageRenderer: React.FC = () => {
  const { currentPage, content, notification } = useSite();

  // Dynamically update document title for SEO on route change
  useEffect(() => {
    const titles: Record<string, string> = {
      home: `${content.siteName} – ${content.tagline}`,
      about: `About Us – ${content.siteName}`,
      services: `Services & Capabilities – ${content.siteName}`,
      portfolio: `Portfolio & Client Case Studies – ${content.siteName}`,
      contact: `Contact Us – ${content.siteName}`,
    };
    document.title = titles[currentPage] || `${content.siteName} – Modern Professional Website`;
  }, [currentPage, content.siteName, content.tagline]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans">
      {/* Toast Notification */}
      {notification && (
        <div className="fixed bottom-5 right-5 z-50 bg-slate-900 text-white px-4 py-3 rounded-lg shadow-xl border border-slate-700 text-xs flex items-center gap-2 animate-in slide-in-from-bottom-2 duration-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{notification}</span>
        </div>
      )}

      {/* Header */}
      <Header />

      {/* Main Page View */}
      <main className="flex-1">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'services' && <ServicesPage />}
        {currentPage === 'portfolio' && <PortfolioPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Overlays */}
      <ServiceModal />
      <ProjectModal />
      <WpCustomizerModal />
    </div>
  );
};

export default function App() {
  return (
    <SiteProvider>
      <PageRenderer />
    </SiteProvider>
  );
}
