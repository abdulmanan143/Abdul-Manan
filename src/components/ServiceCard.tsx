import React from 'react';
import { ServiceItem } from '../types';
import { useSite } from '../context/SiteContext';
import {
  Layout,
  Code,
  Sparkles,
  Smartphone,
  ShieldCheck,
  BarChart3,
  ArrowRight,
} from 'lucide-react';

const iconMap = {
  Layout: Layout,
  Code: Code,
  Sparkles: Sparkles,
  Smartphone: Smartphone,
  ShieldCheck: ShieldCheck,
  BarChart3: BarChart3,
};

interface ServiceCardProps {
  service: ServiceItem;
  featured?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, featured = false }) => {
  const { setSelectedService } = useSite();
  const IconComponent = iconMap[service.iconName] || Layout;

  return (
    <div
      className={`group bg-white rounded-lg p-6 sm:p-7 border transition-all duration-200 flex flex-col justify-between ${
        featured
          ? 'border-slate-300 shadow-md ring-1 ring-slate-900/5'
          : 'border-slate-200 hover:border-slate-300 hover:shadow-sm'
      }`}
    >
      <div>
        {/* Icon */}
        <div className="w-12 h-12 rounded-md bg-slate-100 group-hover:bg-slate-900 group-hover:text-white text-slate-800 flex items-center justify-center transition-colors duration-200 mb-5">
          <IconComponent className="w-6 h-6" />
        </div>

        {/* Service Name */}
        <h3 className="text-lg font-bold text-slate-900 mb-2.5 tracking-tight">
          {service.name}
        </h3>

        {/* Short Description */}
        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          {service.shortDescription}
        </p>

        {/* Feature Highlights */}
        {service.features && service.features.length > 0 && (
          <ul className="space-y-2 mb-6 border-t border-slate-100 pt-4">
            {service.features.slice(0, 3).map((feat, idx) => (
              <li key={idx} className="text-xs text-slate-600 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Learn More Button */}
      <div className="pt-2">
        <button
          type="button"
          onClick={() => setSelectedService(service)}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors group-hover:translate-x-0.5 duration-150"
        >
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
