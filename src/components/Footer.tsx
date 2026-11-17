'use client';

import React from 'react';
import { ArrowUp, ShieldCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TelegramIcon } from './icons/SocialIcons';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#080808] border-t border-neon-red/30 py-16 relative z-10 text-gray-400">
      <div className="container mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center justify-between pb-12 border-b border-white/10">
          
          {/* Brand info */}
          <div className="md:col-span-6 space-y-3">
            <div className="font-orbitron text-2xl font-black text-white tracking-wider">
              IVAN<span className="text-neon-red drop-shadow-[0_0_10px_#ff003c]">.</span>DEV
            </div>
            <p className="text-xs sm:text-sm text-gray-400 max-w-md font-light leading-relaxed">
              Senior Full-Stack & Systems Engineer. Engineering high-throughput web applications, 3D AI avatars, medical RPA voice assistants, and cyber-resilient enterprise platforms.
            </p>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[11px] text-emerald-400 font-mono">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Security audited: 0 vulnerabilities</span>
            </div>
          </div>

          {/* Nav links */}
          <div className="md:col-span-4 flex flex-wrap gap-x-6 gap-y-2 text-xs sm:text-sm font-medium">
            <button onClick={() => scrollTo('home')} className="hover:text-neon-red transition-colors">
              Home
            </button>
            <button onClick={() => scrollTo('about')} className="hover:text-neon-red transition-colors">
              About
            </button>
            <button onClick={() => scrollTo('projects')} className="hover:text-neon-red transition-colors">
              Projects
            </button>
            <button onClick={() => scrollTo('skills')} className="hover:text-neon-red transition-colors">
              Tech Stack
            </button>
            <button onClick={() => scrollTo('experience')} className="hover:text-neon-red transition-colors">
              Experience
            </button>
            <button onClick={() => scrollTo('contact')} className="hover:text-neon-red transition-colors">
              Contact
            </button>
          </div>

          {/* Socials & Back to Top */}
          <div className="md:col-span-2 flex items-center md:justify-end gap-3">
            <a
              href="https://github.com/IvanAbeleshev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-neon-red hover:text-neon-red transition-all"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/ivan-abeleshev-5470b4168/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-neon-red hover:text-neon-red transition-all"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href="https://t.me/IvanAbeleshev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-neon-red hover:text-neon-red transition-all"
              aria-label="Telegram Profile"
            >
              <TelegramIcon className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-neon-red/10 border border-neon-red/30 text-neon-red hover:bg-neon-red hover:text-white hover:shadow-[0_0_15px_#ff003c] transition-all ml-2"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 font-light gap-4">
          <div>
            &copy; {currentYear} Ivan Abeleshev. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 font-mono text-[11px]">
            <span>Crafted with Next.js 16, React 19 & Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
