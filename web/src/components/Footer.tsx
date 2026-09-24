import React from 'react';
import { Icon } from './Icon';
import { PageRoute } from '../types';

interface FooterProps {
  onRouteChange: (route: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onRouteChange }) => {
  const quickLinks: { label: string; route: PageRoute }[] = [
    { label: 'Home Overview', route: 'home' },
    { label: 'Research Publications', route: 'publications' },
    { label: 'Research Topics', route: 'research' },
    { label: 'Projects & Solvers', route: 'projects' },
    { label: 'Faculty & Researchers', route: 'people' },
    { label: 'SAT Monograph', route: 'book' },
    { label: 'Events & News Briefs', route: 'events' },
  ];

  return (
    <footer className="mt-20 border-t border-slate-200/90 bg-slate-50/95 py-14 text-slate-600">
      <div className="section-shell">
        <div className="grid gap-10 md:grid-cols-[1.4fr_.8fr_.8fr]">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-3 text-slate-900">
              <img
                src="./assets/images/satlab.png"
                alt="SATLab Logo"
                className="h-11 w-11 shrink-0 rounded-full object-cover ring-1 ring-slate-200 shadow-xs"
              />
              <div>
                <span className="font-editorial text-xl font-bold tracking-tight text-slate-900">
                  SATLab UET
                </span>
                <p className="font-editorial text-xs text-slate-500">
                  Satisfiability, Automated Reasoning &amp; Optimization
                </p>
              </div>
            </div>

            <div className="mt-5 space-y-2 font-mono text-xs text-slate-600">
              <p className="flex items-start gap-2.5">
                <Icon name="location_on" className="mt-0.5 h-4 w-4 shrink-0 text-sky-600" />
                <span>Faculty of Information Technology, Building E3, 144 Xuan Thuy Road, Cau Giay, Hanoi, Vietnam</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Icon name="mail" className="h-4 w-4 shrink-0 text-sky-600" />
                <a href="mailto:khanhtv@vnu.edu.vn" className="hover:text-sky-700 transition-colors">
                  khanhtv@vnu.edu.vn
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Icon name="groups" className="h-4 w-4 shrink-0 text-sky-600" />
                <span>Head of Lab: Dr. To Van Khanh · Lab Coordinator: M.Sc. Kieu Van Tuyen</span>
              </p>
            </div>
          </div>

          {/* Site Sections */}
          <div>
            <h4 className="font-mono text-xs font-semibold uppercase tracking-widest text-slate-900">
              Website Navigation
            </h4>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 font-editorial text-sm">
              {quickLinks.map((item) => (
                <button
                  key={item.route}
                  type="button"
                  onClick={() => {
                    onRouteChange(item.route);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-left text-slate-600 hover:text-sky-700 transition-colors py-0.5"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Institutional Links */}
          <div>
            <h4 className="font-mono text-xs font-semibold uppercase tracking-widest text-slate-900">
              Academic Affiliation
            </h4>
            <div className="mt-4 space-y-2.5 font-editorial text-sm">
              <a
                href="https://fit.uet.vnu.edu.vn/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between text-slate-600 hover:text-sky-700 transition-colors"
              >
                <span>Faculty of Information Technology (FIT)</span>
                <Icon name="open_in_new" className="h-3.5 w-3.5" />
              </a>
              <a
                href="https://uet.vnu.edu.vn/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between text-slate-600 hover:text-sky-700 transition-colors"
              >
                <span>VNU University of Engineering &amp; Technology</span>
                <Icon name="open_in_new" className="h-3.5 w-3.5" />
              </a>
              <a
                href="https://www.facebook.com/satlab.uet/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between text-slate-600 hover:text-sky-700 transition-colors"
              >
                <span>SATLab Facebook Fanpage</span>
                <Icon name="open_in_new" className="h-3.5 w-3.5" />
              </a>
              <a
                href="./read.html"
                className="flex items-center justify-between text-slate-600 hover:text-sky-700 transition-colors"
              >
                <span>Interactive HTML Monograph Reader</span>
                <Icon name="menu_book" className="h-3.5 w-3.5 text-cyan-600" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-slate-200/80 pt-6 font-mono text-[11px] text-slate-500 sm:flex-row sm:items-center">
          <p>© 2026 SATLab UET · VNU University of Engineering and Technology. All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-500">
            <span>UET - VNU Hanoi</span>
            <span>•</span>
            <a href="./downloads/sat-book.pdf" className="hover:text-sky-700 transition-colors">
              Download Monograph PDF
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
