'use client';

import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal, { ProjectData } from './ProjectModal';
import { Terminal, Filter } from 'lucide-react';

const projectsList: ProjectData[] = [
  {
    id: 'cliniccards-ai',
    title: 'ClinicCards AI Voice Assistant',
    subtitle: 'Intelligent Voice & RPA Automation Copilot for Medical CRM',
    category: 'ai',
    categoryLabel: 'AI & Healthcare',
    badge: 'Medical AI & RPA',
    image: '/images/cliniccards.png',
    shortDescription:
      'Intelligent hands-free voice assistant and RPA automation copilot for medical and dental clinics. Features Push-to-Talk (PTT), Gemini STT, Gemini Flash structured medical data extraction, and Playwright robotic CRM synchronization.',
    fullDescription:
      'A voice-driven clinical automation assistant bridging doctors, surgeons, and nurses with the ClinicCards CRM system. In surgical and sterile environments where physical typing is infeasible, doctors use a Push-to-Talk audio interface to dictate patient examination results, procedures, scheduled appointments, and clinical observations. The pipeline transcribes speech via Gemini STT, extracts structured medical entities using Gemini Flash, presents an interactive human-in-the-loop preview, and utilizes Playwright RPA workers to automatically commit verified records into the CRM.',
    keyFeatures: [
      'Hands-free Push-to-Talk (PTT) interface with real-time audio streaming',
      'Gemini STT speech-to-text audio processing engine',
      'Gemini Flash LLM pipeline for structured medical entity and dental record extraction',
      'Automated Playwright RPA worker executing browser sessions and CRM synchronization',
      'Mandatory human-in-the-loop verification and preview modal before database commits',
      'Microservices architecture running in Docker Compose with Nginx reverse proxy',
      'Role-based access control, clinic-wide shared credentials and JWT session tokens',
    ],
    techStack: [
      'React',
      'Tailwind CSS',
      'NestJS',
      'Playwright RPA',
      'Gemini Flash AI',
      'Gemini STT',
      'Docker Compose',
      'Nginx',
      'JWT Auth',
    ],
    roleAndArchitecture:
      'End-to-end architecture: developed the React Push-to-Talk frontend with audio recording, designed the NestJS backend orchestration, integrated Gemini structured outputs for medical terminology parsing, and engineered the robust Playwright browser automation worker with session queues.',
  },
  {
    id: 'ai-avatar',
    title: 'AI Avatar Interrogation Trainer',
    subtitle: '3D Interactive AI Investigative Interview Simulator',
    category: 'ai',
    categoryLabel: 'AI & 3D Web',
    badge: 'Flagship AI Project',
    image: '/images/ai-avatar.jpg',
    shortDescription:
      'Realistic 3D training simulator for law enforcement interrogation scenarios. Features an animated 3D character with procedural animations, speech lip sync, Coqui TTS, multi-agent LLM analysis, and automated protocol generation.',
    fullDescription:
      'An innovative virtual training simulator designed for law enforcement detectives and investigators. Users conduct voice or text interrogations with an AI suspect in real time. The simulator models psychological states, emotional changes, stress cues, and procedural compliance. Upon concluding the interrogation, an automated multi-agent LLM pipeline evaluates the detective\'s interview tactics against legal guidelines, criminal case materials, and investigative best practices, exporting a complete transcript and performance audit.',
    keyFeatures: [
      '3D character modeling and procedural skeletal animations (GLTF/FBX, Three.js/WebGL)',
      'Real-time Lip Sync synchronization matching phonemes to audio output',
      'Local Coqui TTS voice synthesis engine for ultra-low latency responses',
      'Multi-agent LLM reasoning pipeline for investigative tactic analysis and legal compliance scoring',
      'Automated formal interrogation protocol generation with error identification',
      'Interactive case reference guidelines and procedural prompt assistance',
    ],
    techStack: [
      'Next.js',
      'React 19',
      'TypeScript',
      'Three.js / WebGL',
      'NestJS',
      'TypeORM',
      'PostgreSQL',
      'Coqui TTS',
      'LLM Multi-Agent',
      'Docker',
    ],
    roleAndArchitecture:
      'Engineered client architecture, WebGL avatar rendering, audio streaming, dialog completion workflows, and multi-agent AI evaluation modules. Designed NestJS backend services, TypeORM schemas, and Dockerized inference containers.',
  },
  {
    id: 'templa',
    title: 'Templa — Document Automation SaaS',
    subtitle: 'Enterprise AST Template Parsing & Gotenberg PDF Generation Platform',
    category: 'saas',
    categoryLabel: 'SaaS & Services',
    badge: 'Enterprise SaaS',
    image: '/images/templa.png',
    liveUrl: 'https://templa.space',
    shortDescription:
      'Multi-tenant privacy-first document automation platform. Inspects .docx template AST structures, dynamically generates schema-driven forms, and compiles pixel-perfect PDF/DOCX via Gotenberg (LibreOffice engine).',
    fullDescription:
      'A comprehensive, privacy-first platform for automated document generation. Templa inspects the Abstract Syntax Tree (AST) of DOCX templates to extract nested variables, conditional blocks ({{#if}}), and dynamic repeating lists or tables ({{#items}}). It automatically builds strongly-typed web forms with Zod validation and compiles finished documents into PDF and DOCX formats with pixel-perfect fidelity via containerized Gotenberg.',
    keyFeatures: [
      'AST inspection of DOCX templates with extraction of variables and repeating arrays',
      'Dynamic schema-driven form generation: text, numbers, dates, dropdowns, and nested loops',
      'High-fidelity PDF and DOCX compilation via containerized Gotenberg / LibreOffice engine',
      'Full internationalization (i18n) across 6 languages: EN, UA, RU, PL, FR, DE',
      'Stateless JWT authentication, Google OAuth 2.0 social sign-in, and multi-tenant workspaces',
      'Privacy-first security model with automated cleanup of temporary files post-generation',
    ],
    techStack: [
      'Next.js 15',
      'React 19',
      'TypeScript',
      'NestJS',
      'Prisma ORM',
      'PostgreSQL 17',
      'Gotenberg',
      'Tailwind CSS',
      'Docker Compose',
    ],
    roleAndArchitecture:
      'Architected both frontend and backend codebases, integrated client-side AST inspection, dynamic form generation, Gotenberg compilation microservices, multi-language routing, and workspace access control.',
  },
  {
    id: 'fontanka-osvita',
    title: 'Fontanka Preschool & Educational Network',
    subtitle: 'Official Municipal Portal of Fontanka Territorial Community',
    category: 'gov',
    categoryLabel: 'Gov & Municipal',
    badge: 'Municipal Portal',
    image: '/images/fontanka.png',
    liveUrl: 'https://osvita.fontanska-rada.gov.ua',
    shortDescription:
      'High-load municipal educational ecosystem: kindergartens (preschools), primary schools, electronic enrollment queuing, WCAG 2.1 AA accessibility mode, and Schema.org rich microdata.',
    fullDescription:
      'The unified digital educational portal serving parents, teachers, and municipal administrators across Fontanka territorial community. Features electronic kindergarten admission queues, institutional catalogs, staff registries, announcements, gallery streams, and compliance with national public information accessibility standards.',
    keyFeatures: [
      'Interactive catalog of preschools, kindergartens, and secondary schools with geolocation',
      'Electronic queue and application submission system for kindergarten enrollment',
      'Full digital accessibility compliance with WCAG 2.1 AA standards (high-contrast mode)',
      'Deep Schema.org microdata implementation (CollectionPage, ItemList, BreadcrumbList)',
      'Multi-language localization (Ukrainian and English)',
      'Exceptional Core Web Vitals performance: 98+ Google Lighthouse rating',
    ],
    techStack: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Redux Toolkit',
      'next-intl',
      'JSON-LD / SEO',
      'Docker',
      'Nginx',
    ],
    roleAndArchitecture:
      'Led frontend development on Next.js App Router with Server-Side Rendering (SSR), structured data integration, accessibility mode for visually impaired users, and responsive UI optimization.',
  },
  {
    id: 'poseidon-hub',
    title: 'Poseidon Hub — Maritime Ecosystem',
    subtitle: '3-in-1 Platform: Maritime English School, Crewing & Certification',
    category: 'enterprise',
    categoryLabel: 'Enterprise & ERP',
    badge: 'Maritime Ecosystem',
    image: '/images/poseidon.png',
    liveUrl: 'https://poseidon-hub.com',
    shortDescription:
      'Unified maritime ecosystem: specialized Maritime English School (Poseidon ELS) with Marlins/CES test training, crew management crewing agency compliant with ISO 9001:2015 & MLC 2006, and maritime consulting.',
    fullDescription:
      'A comprehensive web platform for seafarers, ship owners, and maritime staffing companies. Unifies English language test preparation (Deck Officers, Engineers, Electricians, Stewards) for international Marlins and CES certifications, seafarer placement across specialized fleet divisions (Tanker, Container, Bulk), online CV applications, and verifiable numbered certificate generation.',
    keyFeatures: [
      'Maritime English exam preparation modules (Marlins, CES, Sets 6000, Meets, Ask)',
      'Crewing management division tailored for Tanker, Container, and Bulk fleets',
      'Automated verifiable numbered certificate generation with credential validation',
      'Interactive online seafarer application forms with resume attachment pipelines',
      'Bilingual localization (English / Ukrainian) tailored for international crewing standards',
      'Integrated CRM lead pipeline with multi-channel notification webhooks',
    ],
    techStack: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Django / Python',
      'PostgreSQL',
      'Docker Compose',
      'Nginx',
    ],
    roleAndArchitecture:
      'Developed frontend architecture, fleet division routing, seafarer application workflows, responsive layouts, and backend API integration.',
  },
  {
    id: 'goods-cms',
    title: 'Goods CMS — Ophthalmology WMS/ERP',
    subtitle: 'Medical Warehouse & Batch Inventory Management System',
    category: 'enterprise',
    categoryLabel: 'Enterprise & ERP',
    badge: 'WMS / ERP',
    image: '/images/logo.png',
    shortDescription:
      'Specialized warehouse management and inventory ERP system (WMS/ERP) for medical and ophthalmological centers. Strict FIFO batch tracking, diopter/IOL specifications, and certified report generation.',
    fullDescription:
      'Full-featured inventory management platform architected for clinical supply chains with stringent FIFO requirements. Engineered to track specialized optical parameters (diopter Sph/Dptr, cylinder Cyl, intraocular lenses IOL, expiration dates, serial numbers), multi-warehouse hierarchy (Central storage, Surgery OR, Laser sector, Doctor offices), stock transfers, and periodic physical stocktake audits.',
    keyFeatures: [
      'Strict First-In, First-Out (FIFO) automated write-off and batch costing algorithms',
      'Specialized medical catalog handling (IOL lenses, diopter powers, expiration dates, batch numbers)',
      'Multi-level warehouse topology with isolated departmental balances and transfer confirmations',
      'Comprehensive warehouse documentation: incoming invoices, write-offs, transfers, and kit assemblies',
      'Full inventory auditing with discrepancy calculations and automated reconciliation entries',
      'Export of official material reports in Excel (.xlsx) and certified PDF formats',
      '7-level Role-Based Access Control (RBAC) with immutable cryptographic audit logging',
    ],
    techStack: [
      'Node.js 20',
      'NestJS',
      'TypeScript',
      'PostgreSQL 17',
      'React / Next.js',
      'Tailwind CSS',
      'Excel & PDF Engines',
      'Docker',
    ],
    roleAndArchitecture:
      'Designed PostgreSQL database schema, engineered FIFO inventory algorithms, built NestJS REST APIs, implemented RBAC authorization guards, and created responsive warehouse operation screens.',
  },
  {
    id: 'oduvs',
    title: 'ODUVS — Law Enforcement University Portal',
    subtitle: 'Cyber-Attack Resilient State Higher Education Web Portal',
    category: 'gov',
    categoryLabel: 'Gov & Municipal',
    badge: 'Cyber Resilience',
    image: '/images/oduvs.png',
    liveUrl: 'https://oduvs.edu.ua',
    shortDescription:
      'Official web portal for state law enforcement university engineered with enhanced resistance to DDoS and cyber attacks, headless CMS content delivery, and dynamic academic modules.',
    fullDescription:
      'Web portal for a state law enforcement university operating under strict information security requirements. Features faculty divisions, electronic schedules, news broadcasting, academic publication repositories, and multi-tier caching architectures engineered to absorb volumetric traffic spikes and hostile DDoS attacks.',
    keyFeatures: [
      'Elevated cyber-defense architecture mitigating volumetric and application-layer DDoS attacks',
      'Integration with headless CMS Strapi for secure decoupled content management',
      'Multi-tier caching layers and optimized static asset delivery network',
      'Mobile-first responsive design ensuring seamless usability across all devices',
      'Document management for official academic decrees and research publications',
    ],
    techStack: [
      'Next.js',
      'TypeScript',
      'Redux Toolkit',
      'Tailwind CSS',
      'Strapi CMS',
      'Docker',
      'Nginx',
    ],
    roleAndArchitecture:
      'Frontend engineering with Next.js, headless CMS integration, security header configuration (CSP, HSTS), performance tuning, and high-availability caching setups.',
  },
  {
    id: 'violations-cms',
    title: 'Employee Compliance & Violation Monitoring CMS',
    subtitle: 'Internal Corporate Compliance & Audit Incident Tracking Dashboard',
    category: 'enterprise',
    categoryLabel: 'Enterprise & ERP',
    badge: 'Enterprise Security',
    image: '/images/NDA.jpg',
    isNDA: true,
    shortDescription:
      'Frontend development of an internal compliance tracking system for recording, reviewing, and analyzing employee regulation breaches with real-time analytics in Grafana.',
    fullDescription:
      'An internal security and management console enabling end-to-end incident tracking, evidence collection, investigation status flows, and real-time visualization of compliance metrics across distributed teams.',
    keyFeatures: [
      'Interactive data tables with multi-field filtering and dynamic search capabilities',
      'Two-Factor Authentication (2FA) and granular permissions matrix',
      'Grafana integration for live telemetry and violation pattern visualization',
      'Automated CI/CD build and verification pipeline running in Jenkins',
    ],
    techStack: [
      'Angular',
      'RxJS',
      'Tailwind CSS',
      'Docker',
      'Jenkins',
      'Grafana',
    ],
    roleAndArchitecture:
      'Developed Angular client application using RxJS reactive state streams, responsive interfaces, secure token management, and REST API integration.',
  },
  {
    id: 'chrome-ext',
    title: 'Content Automation Chrome Extension',
    subtitle: 'Browser Extension for Visual DOM Selection & Template Generation',
    category: 'saas',
    categoryLabel: 'SaaS & Services',
    badge: 'Browser Tool',
    image: '/images/NDA.jpg',
    isNDA: true,
    shortDescription:
      'Chrome Extension built on Manifest V3 for news resource templating, visual DOM block picking, and automated web extraction pipeline configuration.',
    fullDescription:
      'A productivity tool for content managers and data engineers. Allows users to click on arbitrary web pages to highlight and tag target elements (titles, publication dates, article bodies, author bylines) and export structured parsing rules for scraping backends.',
    keyFeatures: [
      'Interactive visual DOM element inspector and selector with real-time highlighting',
      'Full compliance with Google Chrome Manifest V3 security standards',
      'Automated extraction and JSON export of page structure rules',
      'Ergonomic popup interface built with React and Material UI',
    ],
    techStack: [
      'React',
      'TypeScript',
      'Chrome Manifest V3',
      'Material UI',
      'Content Scripts',
    ],
    roleAndArchitecture:
      'Authored extension from background service worker to content script injection, overlay UI canvas, and selector serialization engine.',
  },
  {
    id: 'taiga-custom',
    title: 'Taiga Agile Management Customization',
    subtitle: 'Enterprise Modification of Open-Source Project Management Suite',
    category: 'enterprise',
    categoryLabel: 'Enterprise & ERP',
    badge: 'Open Source Mod',
    image: '/images/taiga.png',
    shortDescription:
      'Custom architectural enhancements to the Taiga open-source project management platform: custom business workflows, enhanced reporting, and sprint performance tuning.',
    fullDescription:
      'An engineering initiative adapting the open-source Taiga platform to client-specific enterprise workflows. Resolved critical rendering bottlenecks for large backlog views, added custom filters, and built third-party notification integrations.',
    keyFeatures: [
      'Modification of frontend components in CoffeeScript and Jade/Sass',
      'Custom REST API endpoint additions and third-party webhooks',
      'Rendering optimization for extensive task boards and sprint backlogs',
    ],
    techStack: [
      'Angular.js',
      'CoffeeScript',
      'Jade',
      'Sass',
      'REST API',
    ],
    roleAndArchitecture:
      'Analyzed existing codebase, implemented requested features, fixed critical bugs, and deployed updated modules.',
  },
];

type CategoryFilter = 'all' | 'ai' | 'enterprise' | 'gov' | 'saas';

const filterButtons: { key: CategoryFilter; label: string }[] = [
  { key: 'all', label: 'All Projects (10)' },
  { key: 'ai', label: 'AI & Healthcare' },
  { key: 'enterprise', label: 'Enterprise & ERP' },
  { key: 'gov', label: 'Gov & Municipal' },
  { key: 'saas', label: 'SaaS & Tools' },
];

const ProjectSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const filteredProjects =
    activeFilter === 'all'
      ? projectsList
      : projectsList.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative bg-[#0a0a0a]">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-red/10 border border-neon-red/25 text-xs text-neon-red font-mono uppercase tracking-wider mb-3">
              <Terminal className="w-3.5 h-3.5" />
              <span>Portfolio // Featured Engineering Work</span>
            </div>
            <h2 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Featured <span className="neon-text">Projects & Systems</span>
            </h2>
            <div className="h-1 w-24 bg-neon-red shadow-[0_0_12px_#ff003c] rounded-full mt-3" />
          </div>

          <p className="text-gray-400 text-sm sm:text-base max-w-md mt-4 md:mt-0 font-light">
            Scalable web systems, 3D AI avatars, medical RPA assistants, enterprise ERP/WMS platforms, and cyber-resilient public portals.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-white/5">
          <Filter className="w-4 h-4 text-gray-500 mr-2 hidden sm:block" />
          {filterButtons.map((btn) => {
            const isActive = activeFilter === btn.key;
            return (
              <button
                key={btn.key}
                onClick={() => setActiveFilter(btn.key)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-orbitron font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-neon-red text-white shadow-[0_0_15px_rgba(255,0,60,0.5)] border border-neon-red-light'
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                {btn.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

      </div>

      {/* Modal with detailed information */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default ProjectSection;
