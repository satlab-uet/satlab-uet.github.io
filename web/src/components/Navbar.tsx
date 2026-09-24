import React, { useState, useEffect } from 'react';
import { Icon } from './Icon';
import { PageRoute } from '../types';

interface NavbarProps {
  currentRoute: PageRoute;
  onRouteChange: (route: PageRoute) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentRoute, onRouteChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; route: PageRoute; badge?: string }[] = [
    { label: 'Home', route: 'home' },
    { label: 'Publications', route: 'publications' },
    { label: 'Topics', route: 'research' },
    { label: 'Projects', route: 'projects' },
    { label: 'People', route: 'people' },
    { label: 'Monograph', route: 'book', badge: '116p' },
    { label: 'News & Events', route: 'events', badge: 'News' },
  ];

  const handleNavigate = (route: PageRoute) => {
    onRouteChange(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'border-b border-slate-200/90 bg-white/95 shadow-sm backdrop-blur-xl py-3'
          : 'border-b border-slate-200/60 bg-white/85 backdrop-blur-md py-3.5'
      }`}
    >
      <div className="section-shell flex items-center justify-between gap-4">
        {/* Brand & Logo */}
        <button
          type="button"
          onClick={() => handleNavigate('home')}
          className="group flex items-center gap-3 text-left focus-ring rounded-xl p-1 -m-1"
        >
          <div className="relative h-11 w-11 shrink-0">
            {!logoError ? (
              <img
                src="./assets/images/satlab.png"
                alt="SATLab Logo"
                onError={() => setLogoError(true)}
                className="h-11 w-11 rounded-full object-cover ring-2 ring-blue-600/25 shadow-xs transition-transform duration-200 group-hover:scale-105"
              />
            ) : (
              <div className="grid h-11 w-11 place-items-center rounded-full bg-slate-950 font-mono text-xs font-extrabold text-blue-400 ring-2 ring-blue-600/30 shadow-xs">
                SAT
              </div>
            )}
            <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-editorial text-lg font-black tracking-tight text-slate-950 group-hover:text-blue-700 transition-colors">
                SATLab UET
              </span>
              <span className="hidden sm:inline-block rounded-md border border-blue-200 bg-blue-50 px-1.5 py-0.2 font-mono text-[9px] font-bold text-blue-800">
                UET-VNU
              </span>
            </div>
            <p className="hidden md:block font-sans text-[11px] font-medium text-slate-500">
              Automated Reasoning &amp; Combinatorial Optimization
            </p>
          </div>
        </button>

        {/* Desktop Navigation Tabs */}
        <nav className="hidden lg:flex items-center gap-1 rounded-xl border border-slate-200/90 bg-slate-100/70 p-1 backdrop-blur-md shadow-xs">
          {navItems.map((item) => {
            const isActive = currentRoute === item.route;
            return (
              <button
                key={item.route}
                type="button"
                onClick={() => handleNavigate(item.route)}
                className={`relative flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-sans text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-slate-950 text-white shadow-xs'
                    : 'text-slate-600 hover:bg-white hover:text-slate-950'
                }`}
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span
                    className={`rounded-full px-1.5 py-0.2 font-mono text-[9px] font-bold uppercase tracking-wider ${
                      isActive
                        ? 'bg-blue-500 text-white'
                        : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Action CTAs */}
        <div className="flex items-center gap-2.5">
          <a
            href="./read.html"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-blue-700 to-indigo-800 px-3.5 py-2 font-sans text-xs font-bold text-white shadow-xs hover:from-blue-800 hover:to-indigo-900 transition hover:-translate-y-0.5 focus-ring"
          >
            <Icon name="menu_book" className="h-3.5 w-3.5 text-blue-200" />
            <span>Read Monograph</span>
            <Icon name="north_east" className="h-3.5 w-3.5" />
          </a>

          <a
            href="https://github.com/satlab-uet/satlab-uet.github.io"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Repository"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:text-blue-700 transition shadow-xs focus-ring"
          >
            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 focus-ring"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <Icon name="close" className="h-5 w-5" /> : <Icon name="menu" className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 border-b border-slate-200/90 bg-white/95 px-5 py-4 backdrop-blur-xl shadow-lg animate-in fade-in slide-in-from-top-2">
          <div className="grid gap-1.5">
            {navItems.map((item) => {
              const isActive = currentRoute === item.route;
              return (
                <button
                  key={item.route}
                  type="button"
                  onClick={() => handleNavigate(item.route)}
                  className={`flex items-center justify-between rounded-xl px-4 py-2.5 font-sans text-xs font-semibold transition ${
                    isActive
                      ? 'bg-slate-950 text-white'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="rounded-md bg-blue-100 px-2 py-0.5 font-mono text-[9px] font-bold text-blue-800">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
            <a
              href="./read.html"
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-4 py-2.5 font-sans text-xs font-bold text-white shadow-sm"
            >
              <Icon name="menu_book" className="h-4 w-4" />
              <span>Read Monograph Edition (116p)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
