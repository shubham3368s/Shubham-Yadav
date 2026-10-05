import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#050507]/90 pt-16 pb-12 select-none">
      <div className="max-w-[1680px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* BRAND COLUMN */}
          <div className="md:col-span-2 space-y-4">
            <span className="text-xl font-semibold tracking-[0.28em] text-white uppercase block">
              XENFORGE
            </span>
            <p className="text-xs sm:text-sm text-[#A1A1AA] max-w-sm font-light leading-relaxed">
              A modern digital technology and creative agency specializing in bespoke web development, mobile applications, autonomous AI systems, cinematic video editing, and performance paid marketing.
            </p>
            <div className="text-xs text-gray-400 font-mono pt-2">
              Studio: DLF Cyber City & Golf Course Road, Gurugram (Delhi NCR)
            </div>
          </div>

          {/* CAPABILITIES LINKS */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-fuchsia-400 font-semibold block">
              Capabilities
            </span>
            <ul className="space-y-2 text-xs text-[#A1A1AA]">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  01. AI Automation Workflows
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  02. Bespoke Website Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  03. Scalable Mobile Apps (iOS/Android)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  04. Technical SEO & Growth
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  05. Cinematic Video Editing & Color
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  06. Meta Ads & Paid Media Scaling
                </a>
              </li>
            </ul>
          </div>

          {/* LOCATION & CONNECT */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-fuchsia-400 font-semibold block">
              Direct Contact
            </span>
            <ul className="space-y-2 text-xs text-[#A1A1AA]">
              <li>
                <span className="text-white block font-medium">Production Inquiries</span>
                <span>inquire@xenforge.studio</span>
              </li>
              <li>
                <span className="text-white block font-medium">WhatsApp Direct</span>
                <span>+91 98765 43210</span>
              </li>
              <li>
                <span className="text-white block font-medium">On-Location Shoots</span>
                <span>Gurugram, Delhi & Noida</span>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © {new Date().getFullYear()} XENFORGE Creative Technologies. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
