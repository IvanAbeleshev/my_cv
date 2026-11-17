'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowDown, Sparkles, Send, Terminal, ShieldCheck, Cpu } from 'lucide-react';
import { GithubIcon } from './icons/SocialIcons';

const specialties = [
  'Medical AI Voice Assistants & RPA Automation',
  '3D AI Avatars & Multi-Agent Workflows',
  'Enterprise ERP/WMS & Inventory Architecture',
  'Next.js 16, React 19 & TypeScript',
  'Cyber-Resilient Web Portals & DDoS Defense',
  'NestJS Microservices, Prisma & Docker',
];

const Hero: React.FC = () => {
  const [currentSpecialtyIndex, setCurrentSpecialtyIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = specialties[currentSpecialtyIndex];
    const typingSpeed = isDeleting ? 25 : 65;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < fullText.length) {
          setDisplayedText(fullText.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(fullText.slice(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentSpecialtyIndex((prev) => (prev + 1) % specialties.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentSpecialtyIndex]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen min-h-[100dvh] w-full flex flex-col justify-between pt-24 pb-6 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 flex-grow flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-4">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Terminal prompt badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neon-red/10 border border-neon-red/30 w-fit mb-6">
              <Terminal className="w-3.5 h-3.5 text-neon-red animate-pulse" />
              <span className="font-orbitron text-xs font-semibold uppercase tracking-wider text-gray-200">
                Senior Full-Stack & AI Systems Architect
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-orbitron text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4 tracking-tight">
              Building Scalable Web Systems,{' '}
              <span className="neon-text">AI Avatars</span> & Enterprise Platforms
            </h1>

            {/* Animated Typing Subtitle */}
            <div className="h-10 sm:h-12 flex items-center mb-6">
              <span className="text-gray-400 text-base sm:text-xl font-mono mr-2">&gt;</span>
              <p className="text-lg sm:text-2xl font-mono text-gray-200 font-medium">
                {displayedText}
                <span className="inline-block w-2 sm:w-2.5 h-5 sm:h-6 bg-neon-red ml-1 animate-pulse align-middle" />
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8 font-light">
              Over <span className="text-white font-semibold">10 years</span> of software engineering experience.
              Specializing in high-performance web applications (Next.js 16, React 19, NestJS, TypeScript),
              3D AI avatars with speech synthesis, medical AI assistants with RPA, enterprise FIFO inventory systems, and cyber-resilient public portals.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={() => scrollTo('projects')}
                className="btn-neon-primary group"
              >
                <Sparkles className="w-4 h-4 text-white group-hover:rotate-12 transition-transform" />
                <span>Explore Projects</span>
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="btn-neon-ghost"
              >
                <Send className="w-4 h-4" />
                <span>Get in Touch</span>
              </button>

              <a
                href="https://github.com/IvanAbeleshev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-neon-red hover:text-neon-red text-gray-300 transition-all duration-200"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
            </div>

            {/* Key Metrics / Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10 max-w-2xl">
              <div>
                <div className="font-orbitron text-2xl sm:text-3xl font-bold text-neon-red">10+</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider font-medium mt-0.5">Years in IT</div>
              </div>
              <div>
                <div className="font-orbitron text-2xl sm:text-3xl font-bold text-neon-red">15+</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider font-medium mt-0.5">Production Systems</div>
              </div>
              <div>
                <div className="font-orbitron text-2xl sm:text-3xl font-bold text-white flex items-center gap-1">
                  <ShieldCheck className="w-5 h-5 text-neon-red inline" />
                  <span>0 CVE</span>
                </div>
                <div className="text-xs text-gray-400 uppercase tracking-wider font-medium mt-0.5">Audited Security</div>
              </div>
              <div>
                <div className="font-orbitron text-2xl sm:text-3xl font-bold text-white flex items-center gap-1">
                  <Cpu className="w-5 h-5 text-neon-red inline" />
                  <span>3D + AI</span>
                </div>
                <div className="text-xs text-gray-400 uppercase tracking-wider font-medium mt-0.5">WebGL & LLMs</div>
              </div>
            </div>
          </div>

          {/* Right Column: Cyberpunk Profile Visual */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-[300px] sm:w-[380px] h-[300px] sm:h-[380px]">
              
              {/* Outer Glowing Rings */}
              <div className="absolute inset-0 rounded-full border border-neon-red/25 animate-pulse-subtle" />
              <div className="absolute -inset-4 rounded-full border border-dashed border-neon-red/20 animate-spin" style={{ animationDuration: '40s' }} />
              <div className="absolute -inset-10 rounded-full bg-gradient-to-tr from-neon-red/15 via-transparent to-neon-red/5 blur-2xl pointer-events-none" />

              {/* Photo Frame */}
              <div className="relative w-full h-full rounded-full p-2 bg-gradient-to-b from-neon-red/40 via-dark-surface to-neon-red/10 border-2 border-neon-red shadow-neon-glow overflow-hidden">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-black">
                  <Image
                    src="/images/profile.png"
                    alt="Ivan Abeleshev — Senior Full-Stack Engineer"
                    fill
                    priority
                    sizes="(max-width: 640px) 300px, 380px"
                    className="object-cover rounded-full filter contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/70 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="flex justify-center relative z-10 mt-auto pt-2 pb-4">
        <button
          onClick={() => scrollTo('about')}
          className="group flex flex-col items-center text-gray-400 hover:text-neon-red transition-colors focus:outline-none"
          aria-label="Scroll down to About section"
        >
          <span className="text-xs font-mono uppercase tracking-widest mb-1 group-hover:text-neon-red">Scroll Down</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-neon-red" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
