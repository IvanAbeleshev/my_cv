'use client';

import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle, Terminal } from 'lucide-react';

interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    period: 'February 2024 — Present',
    role: 'Quality Assurance & Automation Engineer',
    company: 'MyPayNow',
    location: 'Brisbane, Australia (Remote)',
    description:
      'Engineered and automated end-to-end (E2E) testing suites for a high-volume financial payment ecosystem. Ensured transaction resilience, boundary condition coverage, and data consistency.',
    achievements: [
      'Automated critical payment and settlement pathways with high test reliability',
      'Integrated static code analysis with PHPStan to eliminate runtime defects',
      'Verified relational database transaction consistency across MySQL and MsSQL',
    ],
    technologies: ['PHP', 'Codeception', 'MySQL', 'MsSQL', 'PHPStan', 'DBeaver', 'Git'],
  },
  {
    period: 'November 2022 — Present',
    role: 'Senior Frontend & Systems Engineer',
    company: 'CyberPolice & Enterprise Initiatives',
    location: 'Odesa, Ukraine',
    description:
      'Architected and delivered mission-critical web applications: 3D AI investigative interrogation trainer, cyber-attack resilient university portal (ODUVS), ClinicCards AI medical assistant, Templa document automation SaaS, Fontanka municipal network, and Goods CMS.',
    achievements: [
      'Developed 3D interactive AI interrogation simulator with WebGL, Coqui TTS, and LLM reasoning',
      'Built ClinicCards AI Voice Assistant with Push-to-Talk, Gemini STT/Flash, and Playwright RPA',
      'Delivered cyber-resilient state university portal with multi-layer DDoS mitigation',
      'Engineered Templa SaaS with DOCX AST inspection and Gotenberg PDF compilation',
      'Architected Goods CMS ophthalmology ERP with strict FIFO batch tracking',
    ],
    technologies: [
      'Next.js 16/15',
      'React 19',
      'NestJS',
      'TypeScript',
      'Three.js / WebGL',
      'Playwright RPA',
      'Prisma',
      'PostgreSQL 17',
      'Tailwind CSS',
      'Docker',
    ],
  },
  {
    period: 'February 2019 — February 2022',
    role: 'Software Engineer',
    company: 'PETABYTE',
    location: 'Odesa, Ukraine',
    description:
      'Designed high-throughput REST APIs over HTTP protocol. Built cross-platform mobile interfaces and database persistence layers. Automated customer order pipelines via Telegram Bot integrations.',
    achievements: [
      'Developed low-latency HTTP REST API endpoints serving mobile clients',
      'Automated customer workflows and order management through Telegram Bot API',
      'Optimized SQL queries, connection pooling, and multi-tier caching',
    ],
    technologies: ['Node.js', 'REST API', 'PostgreSQL', 'Telegram API', 'Git', 'Docker'],
  },
  {
    period: 'June 2015 — November 2018',
    role: 'Software Engineer',
    company: 'DIALOG',
    location: 'Odesa, Ukraine',
    description:
      'Engineered software interfaces connecting mobile clients with corporate enterprise accounting systems. Built and published cross-platform mobile applications on the Apple App Store.',
    achievements: [
      'Created cross-platform iOS and Android mobile applications',
      'Integrated mobile clients with complex warehouse and accounting backends',
      'Managed release lifecycles and App Store deployments',
    ],
    technologies: ['Mobile Interfaces', 'iOS & Android', 'REST API', 'Accounting Systems', 'App Store'],
  },
  {
    period: 'November 2014 — June 2015',
    role: 'Software Engineer',
    company: 'VESTA',
    location: 'Odesa, Ukraine',
    description:
      'Engineered bank integration mechanisms for corporate accounting software. Designed a real-time vehicle dispatching, parking, and tracking platform for the central bus station in Odesa.',
    achievements: [
      'Implemented secure banking communication gateways and transaction reconciliations',
      'Engineered vehicle tracking and parking management system for the bus terminal',
    ],
    technologies: ['Banking APIs', 'Financial Security', 'Database Design', 'Transport Dispatching'],
  },
  {
    period: 'April 2013 — February 2014',
    role: 'Software Engineer Trainee',
    company: 'HVOYA INTEGRA',
    location: 'Odesa, Ukraine',
    description:
      'Configured and customized inventory and financial accounting suites for small and medium businesses. Created an email bot generating automated PDF summary reports from structured commands.',
    achievements: [
      'Developed email bot replying with generated PDF statements to command triggers',
      'Configured goods nomenclature and stock balance registers',
    ],
    technologies: ['Accounting Software', 'PDF Generation', 'Email Automation', 'SQL Basics'],
  },
];

const Timeline: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative bg-[#0a0a0a]">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-red/10 border border-neon-red/25 text-xs text-neon-red font-mono uppercase tracking-wider mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>Career // Professional Trajectory</span>
          </div>
          <h2 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Work Experience & <span className="neon-text">Milestones</span>
          </h2>
          <div className="h-1 w-24 bg-neon-red shadow-[0_0_12px_#ff003c] rounded-full mt-3" />
        </div>

        {/* Timeline Items */}
        <div className="relative max-w-4xl mx-auto">
          {/* Glowing Center Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-neon-red via-neon-red/50 to-transparent -translate-x-1/2 shadow-[0_0_10px_#ff003c]" />

          <div className="space-y-12">
            {experiences.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Glowing Node Dot on Timeline */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[#0a0a0a] border-2 border-neon-red shadow-[0_0_12px_#ff003c] z-10 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-neon-red" />
                  </div>

                  {/* Card Content */}
                  <div className="ml-12 md:ml-0 md:w-1/2 md:px-8 w-full">
                    <div className="cyber-card rounded-2xl p-6 sm:p-7 relative overflow-hidden group hover:border-neon-red/60 transition-all duration-300">
                      
                      {/* Period Badge */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-neon-red/15 border border-neon-red/30 text-neon-red">
                          <Calendar className="w-3 h-3" />
                          <span>{item.period}</span>
                        </span>

                        <span className="inline-flex items-center gap-1 text-xs text-gray-400 font-light">
                          <MapPin className="w-3 h-3 text-neon-red" />
                          <span>{item.location}</span>
                        </span>
                      </div>

                      {/* Role & Company */}
                      <h3 className="font-orbitron text-lg sm:text-xl font-bold text-white group-hover:text-neon-red transition-colors mb-1">
                        {item.role}
                      </h3>
                      <div className="text-sm font-semibold text-gray-300 flex items-center gap-1.5 mb-4">
                        <Briefcase className="w-3.5 h-3.5 text-neon-red" />
                        <span>{item.company}</span>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-gray-400 leading-relaxed font-light mb-4">
                        {item.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-2 mb-4 pt-3 border-t border-white/5">
                        {item.achievements.map((ach, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                            <CheckCircle className="w-3.5 h-3.5 text-neon-red shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {item.technologies.map((t, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Timeline;
