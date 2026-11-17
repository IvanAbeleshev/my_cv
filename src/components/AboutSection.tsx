'use client';

import React from 'react';
import { Shield, Cpu, Layers, Zap, Award, CheckCircle2, Terminal } from 'lucide-react';

const pillars = [
  {
    icon: <Shield className="w-6 h-6 text-neon-red" />,
    title: 'Security & Cyber Defense',
    description:
      'Designing web systems with high resilience against cyber attacks (DDoS, injection, CSRF). Production experience with law enforcement universities and municipal government portals.',
  },
  {
    icon: <Cpu className="w-6 h-6 text-neon-red" />,
    title: '3D WebGL & AI Avatars',
    description:
      'Building immersive 3D web interfaces (Three.js, GLTF/FBX), real-time speech synchronization (Lip Sync), Coqui TTS voice synthesis, and multi-agent LLM reasoning pipelines.',
  },
  {
    icon: <Layers className="w-6 h-6 text-neon-red" />,
    title: 'Enterprise ERP & Inventory',
    description:
      '8+ years of foundational experience in accounting & warehouse systems: strict FIFO batch algorithms, complex healthcare nomenclature, bank gateways, and immutable audit logs.',
  },
  {
    icon: <Zap className="w-6 h-6 text-neon-red" />,
    title: 'Next.js 16 & Modern Stack',
    description:
      'Expert mastery of Next.js 16 App Router, React 19, TypeScript, NestJS, Tailwind CSS, and Docker. Core Web Vitals optimization achieving 100/100 Lighthouse scores.',
  },
];

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-[#0a0a0a] border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-red/10 border border-neon-red/25 text-xs text-neon-red font-mono uppercase tracking-wider mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>Profile // Engineering Highlights</span>
          </div>
          <h2 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            About Me & <span className="neon-text">Engineering Principles</span>
          </h2>
          <div className="h-1 w-24 bg-neon-red shadow-[0_0_12px_#ff003c] rounded-full mt-3" />
        </div>

        {/* Narrative & Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Narrative Paragraphs */}
          <div className="lg:col-span-7 space-y-5 text-gray-300 text-base sm:text-lg leading-relaxed font-light">
            <p>
              I am a <span className="text-white font-medium">Senior Full-Stack & Frontend Engineer</span> with a unique blend of competencies: over <strong className="text-neon-red font-semibold">10 years</strong> in software development, including 8 years dedicated to architecting complex financial, accounting, and warehouse systems.
            </p>
            <p>
              This foundation instilled a rigorous discipline in data integrity, transactional safety, FIFO inventory algorithms, and business logic resilience under heavy operational loads.
            </p>
            <p>
              Over recent years, I have focused on cutting-edge web and AI architectures: <span className="text-white font-medium">Next.js 16, React 19, NestJS, TypeScript</span>, interactive 3D AI avatars with speech synthesis and LLM multi-agent procedural evaluation, medical AI voice assistants powered by RPA, and cyber-resilient state and municipal portals.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-sm text-gray-300">
              <div className="flex items-center gap-2 bg-white/5 px-3.5 py-2 rounded-lg border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-neon-red" />
                <span>Odesa, Ukraine (Available Worldwide)</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-3.5 py-2 rounded-lg border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-neon-red" />
                <span>Clean Modular Architecture</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-3.5 py-2 rounded-lg border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-neon-red" />
                <span>Mentored 3+ Junior Engineers</span>
              </div>
            </div>
          </div>

          {/* Quick Metrics / Summary Card */}
          <div className="lg:col-span-5">
            <div className="cyber-card rounded-xl p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-neon-red/10 rounded-full blur-2xl pointer-events-none" />

              <h3 className="font-orbitron text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-neon-red" />
                <span>Key Track Record</span>
              </h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-gray-400 text-sm">Total Engineering Experience</span>
                  <span className="font-orbitron font-bold text-neon-red text-lg">10+ Years</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-gray-400 text-sm">Enterprise & Gov Systems</span>
                  <span className="font-orbitron font-bold text-white text-lg">15+ Delivered</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-gray-400 text-sm">Package Vulnerability Audit</span>
                  <span className="font-orbitron font-bold text-emerald-400 text-lg">0 Vulnerabilities</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-gray-400 text-sm">Interns Mentored</span>
                  <span className="font-orbitron font-bold text-white text-lg">3 Engineers</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Engagement Model</span>
                  <span className="font-orbitron font-bold text-neon-red text-sm">Full-Time / Remote / Contract</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Engineering Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="cyber-card rounded-xl p-6 flex flex-col justify-between group hover:border-neon-red/60 transition-all duration-300"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-neon-red/10 border border-neon-red/30 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-[0_0_15px_#ff003c] transition-all duration-300">
                  {pillar.icon}
                </div>
                <h4 className="font-orbitron text-lg font-bold text-white mb-2 group-hover:text-neon-red transition-colors">
                  {pillar.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
