'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Send, Sparkles } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Tech Stack' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = ['contact', 'experience', 'skills', 'projects', 'about', 'home'];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0a0a0a]/85 backdrop-blur-md border-b border-neon-red/25 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          {/* Logo & Available Status */}
          <div className="flex items-center gap-4">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('home');
              }}
              className="group flex items-center gap-2"
            >
              <span className="font-orbitron text-xl sm:text-2xl font-black tracking-wider text-white group-hover:text-neon-red transition-colors">
                IVAN<span className="text-neon-red drop-shadow-[0_0_10px_#ff003c]">.</span>DEV
              </span>
            </a>

            <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-neon-red/10 border border-neon-red/25 text-xs text-gray-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-red opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-red"></span>
              </span>
              <span className="font-medium text-gray-200">Open to new projects</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`relative px-3.5 py-2 text-sm font-medium transition-all duration-200 rounded-md ${
                    isActive
                      ? 'text-neon-red font-semibold drop-shadow-[0_0_8px_rgba(255,0,60,0.6)]'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-neon-red shadow-[0_0_10px_#ff003c] rounded-full animate-fadeIn" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scrollTo('contact')}
              className="btn-neon-primary text-xs sm:text-sm py-2 px-4.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-neon-red transition-colors focus:outline-none"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-neon-red" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile drawer overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-xl flex flex-col justify-center px-6 md:hidden animate-fadeIn">
          <div className="flex flex-col space-y-4 text-center">
            <div className="mb-4 inline-flex items-center justify-center gap-2 self-center px-3.5 py-1.5 rounded-full bg-neon-red/10 border border-neon-red/30 text-xs text-gray-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-red opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-red"></span>
              </span>
              <span>Senior Full-Stack & AI Systems Architect</span>
            </div>

            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`py-3 text-xl font-orbitron font-semibold tracking-wider transition-colors ${
                  activeSection === item.id
                    ? 'text-neon-red drop-shadow-[0_0_10px_#ff003c]'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="pt-6">
              <button
                onClick={() => scrollTo('contact')}
                className="btn-neon-primary w-full py-3 justify-center text-sm"
              >
                <Sparkles className="w-4 h-4" />
                <span>Discuss a Project</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
