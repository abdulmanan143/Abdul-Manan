import React, { createContext, useContext, useState, useEffect } from 'react';
import { PageId, SiteContent, ServiceItem, PortfolioItem, ContactSubmission } from '../types';
import { defaultSiteContent } from '../data/defaultSiteContent';

const STORAGE_KEY_CONTENT = 'apex_wp_site_content_v1';
const STORAGE_KEY_SUBMISSIONS = 'apex_wp_contact_submissions_v1';

interface SiteContextType {
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
  content: SiteContent;
  updateContent: (newContent: Partial<SiteContent> | ((prev: SiteContent) => SiteContent)) => void;
  resetContentToDefault: () => void;
  submissions: ContactSubmission[];
  addSubmission: (submission: Omit<ContactSubmission, 'id' | 'createdAt'>) => string;
  deleteSubmission: (id: string) => void;
  clearAllSubmissions: () => void;
  selectedService: ServiceItem | null;
  setSelectedService: (service: ServiceItem | null) => void;
  selectedProject: PortfolioItem | null;
  setSelectedProject: (project: PortfolioItem | null) => void;
  isCustomizerOpen: boolean;
  setIsCustomizerOpen: (open: boolean) => void;
  showNotification: (message: string) => void;
  notification: string | null;
}

const SiteContext = createContext<SiteContextType | undefined>(undefined);

export const SiteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [notification, setNotification] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState<boolean>(false);

  // Load content from localStorage or default
  const [content, setContent] = useState<SiteContent>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_CONTENT);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Merge with default in case new fields were added
        return { ...defaultSiteContent, ...parsed };
      }
    } catch {
      // Fallback
    }
    return defaultSiteContent;
  });

  // Load contact submissions
  const [submissions, setSubmissions] = useState<ContactSubmission[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_SUBMISSIONS);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Fallback
    }
    return [
      {
        id: 'msg-sample-1',
        name: 'Eleanor Vance',
        email: 'eleanor@vancecorp.com',
        phone: '+1 (555) 789-0123',
        subject: 'Redesign Inquiry for Q4',
        message: 'Hello Apex Studio, we loved your portfolio work for Novacrest and would like to discuss revamping our corporate website next month.',
        createdAt: '2026-09-28 14:32',
      },
    ];
  });

  // Save content to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_CONTENT, JSON.stringify(content));
    } catch (e) {
      console.warn('Failed to save content to localStorage', e);
    }
  }, [content]);

  // Save submissions to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_SUBMISSIONS, JSON.stringify(submissions));
    } catch (e) {
      console.warn('Failed to save submissions to localStorage', e);
    }
  }, [submissions]);

  // Handle URL hash sync for clean URLs (#home, #about, #services, #portfolio, #contact)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (['home', 'about', 'services', 'portfolio', 'contact'].includes(hash)) {
        setCurrentPage(hash);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToPage = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const updateContent = (
    newContent: Partial<SiteContent> | ((prev: SiteContent) => SiteContent)
  ) => {
    if (typeof newContent === 'function') {
      setContent(newContent);
    } else {
      setContent((prev) => ({ ...prev, ...newContent }));
    }
    showNotification('Website content updated successfully.');
  };

  const resetContentToDefault = () => {
    setContent(defaultSiteContent);
    try {
      localStorage.removeItem(STORAGE_KEY_CONTENT);
    } catch {
      // Ignore
    }
    showNotification('Site content restored to default.');
  };

  const addSubmission = (data: Omit<ContactSubmission, 'id' | 'createdAt'>): string => {
    const id = `msg-${Date.now().toString(36)}`;
    const now = new Date();
    const formattedDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(
      now.getDate()
    ).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(
      now.getMinutes()
    ).padStart(2, '0')}`;

    const newSubmission: ContactSubmission = {
      ...data,
      id,
      createdAt: formattedDate,
    };

    setSubmissions((prev) => [newSubmission, ...prev]);
    return id;
  };

  const deleteSubmission = (id: string) => {
    setSubmissions((prev) => prev.filter((item) => item.id !== id));
    showNotification('Message removed from inbox.');
  };

  const clearAllSubmissions = () => {
    setSubmissions([]);
    showNotification('Inbox cleared.');
  };

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => {
      setNotification((curr) => (curr === msg ? null : curr));
    }, 4000);
  };

  return (
    <SiteContext.Provider
      value={{
        currentPage,
        setCurrentPage: navigateToPage,
        content,
        updateContent,
        resetContentToDefault,
        submissions,
        addSubmission,
        deleteSubmission,
        clearAllSubmissions,
        selectedService,
        setSelectedService,
        selectedProject,
        setSelectedProject,
        isCustomizerOpen,
        setIsCustomizerOpen,
        showNotification,
        notification,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};

export const useSite = () => {
  const context = useContext(SiteContext);
  if (!context) {
    throw new Error('useSite must be used within a SiteProvider');
  }
  return context;
};
