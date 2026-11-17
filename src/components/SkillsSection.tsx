'use client';

import React, { useState } from 'react';
import { Terminal, Code2, Server, Cpu, Shield } from 'lucide-react';

interface SkillItem {
  name: string;
  level: number;
  description: string;
}

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend & UI Engineering',
    icon: <Code2 className="w-5 h-5 text-neon-red" />,
    skills: [
      { name: 'React 19 / 18', level: 95, description: 'Hooks, Suspense, Server Components, State Architecture' },
      { name: 'Next.js 16 / 15', level: 92, description: 'App Router, Turbopack, SSR, Server Actions, SEO / Core Web Vitals' },
      { name: 'TypeScript', level: 90, description: 'Strict typing, Generics, AST parsing, Type safety & Zod schemas' },
      { name: 'Tailwind CSS', level: 95, description: 'Custom design tokens, Glassmorphism, Responsive UI design' },
      { name: 'Redux / Redux Toolkit', level: 90, description: 'RTK Query, Slices, Middleware, Global State Synchronization' },
      { name: 'Angular & RxJS', level: 80, description: 'Enterprise modules, Observables, Reactive streams & event buses' },
      { name: 'HTML5 / CSS3 / SCSS', level: 95, description: 'Semantic markup, Flexbox/Grid, Microdata, WCAG 2.1 AA a11y' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & Architecture',
    icon: <Server className="w-5 h-5 text-neon-red" />,
    skills: [
      { name: 'Node.js & NestJS', level: 88, description: 'Modular architecture, DTO validation, Guards, Interceptors' },
      { name: 'PostgreSQL 17 / MySQL', level: 85, description: 'Relational schemas, Indexing, Transactions, Audit logs' },
      { name: 'Prisma & TypeORM', level: 88, description: 'Migrations, Relations, Strict typing, Query optimization' },
      { name: 'REST & GraphQL APIs', level: 90, description: 'API contract design, OpenAPI/Swagger, WebSocket streams' },
      { name: 'WMS / ERP Inventory Logic', level: 92, description: 'FIFO inventory write-offs, batch costing, multi-warehouse topology' },
      { name: 'Gotenberg / PDF Engines', level: 85, description: 'High-fidelity HTML/DOCX to PDF, Gotenberg / LibreOffice engines' },
    ],
  },
  {
    id: 'ai-3d',
    title: 'AI, 3D Web & Speech Tech',
    icon: <Cpu className="w-5 h-5 text-neon-red" />,
    skills: [
      { name: 'Three.js & WebGL', level: 82, description: '3D character rendering, GLTF/FBX, Scene lights, Cameras & shaders' },
      { name: '3D Avatars & Lip Sync', level: 85, description: 'Real-time phoneme lip sync, facial animations, procedural poses' },
      { name: 'Medical AI & RPA Automation', level: 88, description: 'Playwright browser automation, Gemini Flash structured extraction' },
      { name: 'Coqui TTS (Voice Synthesis)', level: 80, description: 'Real-time neural speech synthesis, low-latency audio streaming' },
      { name: 'LLM Multi-Agent Workflows', level: 85, description: 'Interrogation analysis, procedural compliance scoring, prompt engineering' },
    ],
  },
  {
    id: 'devops-security',
    title: 'DevOps, Security & QA',
    icon: <Shield className="w-5 h-5 text-neon-red" />,
    skills: [
      { name: 'Zero-Trust Web Security', level: 90, description: 'DDoS mitigation, CSRF, XSS, HSTS, secure headers & sanitization' },
      { name: 'Docker & Docker Compose', level: 85, description: 'Containerization, Multi-stage builds, Isolated network bridges' },
      { name: 'CI/CD & Jenkins / GitHub Actions', level: 82, description: 'Automated test pipelines, building, linting, deployment triggers' },
      { name: 'Nginx Gateway', level: 82, description: 'Reverse proxy, SSL/TLS termination, Caching, Rate limiting' },
      { name: 'FinTech QA & End-to-End Testing', level: 85, description: 'Payment system test suites, Codeception, PHPStan static analysis' },
      { name: 'Audit & RBAC Models', level: 90, description: 'Granular permissions, JWT, 2FA, immutable audit log verification' },
    ],
  },
];

const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('frontend');

  const currentCategory =
    skillCategories.find((cat) => cat.id === activeTab) || skillCategories[0];

  return (
    <section id="skills" className="py-24 relative bg-[#0a0a0a] border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-red/10 border border-neon-red/25 text-xs text-neon-red font-mono uppercase tracking-wider mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>Tech Stack // Engineering Competencies</span>
          </div>
          <h2 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Technology Stack & <span className="neon-text">Capabilities</span>
          </h2>
          <div className="h-1 w-24 bg-neon-red shadow-[0_0_12px_#ff003c] rounded-full mt-3" />
        </div>

        {/* Category Navigation Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {skillCategories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`p-4 rounded-xl flex items-center gap-3 transition-all duration-200 border text-left ${
                  isActive
                    ? 'bg-neon-red/15 border-neon-red shadow-[0_0_20px_rgba(255,0,60,0.3)] text-white'
                    : 'bg-white/5 border-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                <div className="p-2 rounded-lg bg-black/40 shrink-0">
                  {cat.icon}
                </div>
                <div>
                  <h3 className="font-orbitron text-xs sm:text-sm font-bold line-clamp-1">
                    {cat.title}
                  </h3>
                  <span className="text-[11px] text-gray-400 font-mono">
                    {cat.skills.length} Technologies
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Category Skills Grid */}
        <div className="cyber-card rounded-2xl p-6 sm:p-10 mb-12">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-neon-red/15 border border-neon-red/30">
                {currentCategory.icon}
              </div>
              <h3 className="font-orbitron text-xl sm:text-2xl font-bold text-white">
                {currentCategory.title}
              </h3>
            </div>
            <span className="text-xs font-mono text-neon-red uppercase tracking-wider">
              High Competency Matrix
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentCategory.skills.map((skill, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-neon-red/30 transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-orbitron text-sm sm:text-base font-semibold text-white">
                    {skill.name}
                  </span>
                  <span className="font-mono text-xs font-bold text-neon-red">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress bar */}
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden mb-2">
                  <div
                    className="h-full bg-gradient-to-r from-neon-red-dark via-neon-red to-neon-red-light rounded-full transition-all duration-1000 shadow-[0_0_8px_#ff003c]"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                <p className="text-xs text-gray-400 font-light">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="cyber-card rounded-xl p-5 border-l-4 border-l-neon-red">
            <h4 className="font-orbitron text-base font-bold text-white mb-1.5">
              Zero Vulnerabilities
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed font-light">
              Continuous dependency auditing, isolated network bridges, strict sanitize procedures, and zero CVE vulnerabilities.
            </p>
          </div>

          <div className="cyber-card rounded-xl p-5 border-l-4 border-l-neon-red">
            <h4 className="font-orbitron text-base font-bold text-white mb-1.5">
              Clean Architecture
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed font-light">
              Strict SOLID design, modular decoupling, strict TypeScript types, and comprehensive unit / end-to-end testing coverage.
            </p>
          </div>

          <div className="cyber-card rounded-xl p-5 border-l-4 border-l-neon-red">
            <h4 className="font-orbitron text-base font-bold text-white mb-1.5">
              Production Performance
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed font-light">
              Turbopack builds, Server-Side Rendering (SSR), media optimization, Schema.org microdata, and top Core Web Vitals marks.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
