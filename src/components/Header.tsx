import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string, hash?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Our Story & Impact', path: '/our-story' },
    { label: 'Life at AFS', path: '/life-at-afs' },
    { label: 'Get Involved', path: '/get-involved' }
  ];

  const handleLinkClick = (path: string, hash?: string) => {
    setMobileMenuOpen(false);
    onNavigate(path, hash);
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 border-b ${
        isScrolled
          ? 'bg-[#F7F4EC]/95 backdrop-blur-md border-[#28332E]/10 shadow-xs'
          : 'bg-[#F7F4EC] border-[#28332E]/5'
      }`}
    >
      {/* Top Bar: Exactly 3 Zones separated by gap-8 (Top Bar Contract) */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark linking to Home */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('/');
          }}
          className="group flex items-center gap-3 whitespace-nowrap shrink-0 text-left"
          title="Alpha Friendship School - Home"
        >
          <div className="w-10 h-10 rounded-lg bg-[#23483D] text-[#F7F4EC] flex items-center justify-center font-serif font-bold text-lg tracking-wider transition-transform group-hover:scale-105">
            AFS
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#23483D] leading-tight">
              Alpha Friendship School
            </span>
            <span className="text-[11px] font-sans tracking-widest uppercase text-[#28332E]/70 font-medium">
              Kachai · Manipur
            </span>
          </div>
        </a>

        {/* Zone 2: 4 clean single-line text navigation links */}
        <nav
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#28332E]/80"
          aria-label="Primary Navigation"
        >
          {navLinks.map((link) => {
            const isActive = currentPath === link.path;
            return (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.path);
                }}
                className={`whitespace-nowrap shrink-0 py-2 transition-colors relative ${
                  isActive
                    ? 'text-[#23483D] font-semibold'
                    : 'text-[#28332E]/80 hover:text-[#23483D]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#23483D] rounded-full"
                    aria-hidden="true"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action button */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <button
            onClick={() => handleLinkClick('/get-involved', '#donate')}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs sm:text-sm font-medium text-[#F7F4EC] bg-[#23483D] rounded-lg hover:bg-[#19342C] transition-colors whitespace-nowrap shrink-0 shadow-xs active:translate-y-0.5"
          >
            <span>Support the School</span>
            <ArrowUpRight className="w-4 h-4 opacity-80" aria-hidden="true" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-lg text-[#23483D] hover:bg-[#E5EBE1] focus:outline-none focus:ring-2 focus:ring-[#23483D]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#28332E]/10 bg-[#F7F4EC] px-4 pt-4 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.path);
                  }}
                  className={`px-3 py-3 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-[#E5EBE1] text-[#23483D] font-semibold'
                      : 'text-[#28332E] hover:bg-[#E5EBE1]/60'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
          <div className="pt-3 border-t border-[#28332E]/10">
            <button
              onClick={() => handleLinkClick('/get-involved', '#donate')}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-[#F7F4EC] bg-[#23483D] rounded-lg hover:bg-[#19342C] transition-colors shadow-xs"
            >
              <span>Support the School</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
