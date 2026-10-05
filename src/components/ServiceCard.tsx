import React from 'react';
import { ServiceItem } from '../types/services';
import { Check, ArrowRight, Play } from 'lucide-react';

interface ServiceCardProps {
  service: ServiceItem;
  onSelect: (service: ServiceItem) => void;
  onAction: (service: ServiceItem) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  onSelect,
  onAction,
}) => {
  return (
    <div
      className="liquid-glass rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between group"
    >
      <div>
        {/* TOP ROW: Number & Category */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <span className="font-mono text-xs tracking-wider text-fuchsia-400 font-semibold">
            {service.number} // {service.category}
          </span>
          <span className="text-xs text-white/50 group-hover:text-white transition-colors">
            {service.metrics[0].value} {service.metrics[0].label}
          </span>
        </div>

        {/* TITLE */}
        <h3 className="text-xl sm:text-2xl font-normal text-white mt-4 tracking-tight">
          {service.title}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-xs sm:text-sm text-gray-400 font-light mt-2.5 leading-relaxed">
          {service.description}
        </p>

        {/* KEY DELIVERABLES */}
        <div className="mt-5 space-y-2">
          {service.features.map((feat, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
              <span className="w-4 h-4 rounded-full bg-white/5 flex items-center justify-center text-emerald-400 shrink-0">
                <Check className="w-2.5 h-2.5" />
              </span>
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER ACTIONS */}
      <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => onAction(service)}
          className="text-xs font-medium text-white hover:text-fuchsia-300 transition-colors flex items-center gap-1.5 cursor-pointer"
        >
          <span>{service.primaryCta}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <button
          type="button"
          onClick={() => onSelect(service)}
          className="px-3.5 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/10 text-white text-[11px] font-mono transition-colors cursor-pointer"
        >
          View in Hero
        </button>
      </div>
    </div>
  );
};
