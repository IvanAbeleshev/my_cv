'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { X, CheckCircle, ExternalLink, Cpu, Layers, ShieldCheck, Terminal, ShieldAlert } from 'lucide-react';

export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  category: 'all' | 'ai' | 'enterprise' | 'gov' | 'saas';
  categoryLabel: string;
  badge: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  keyFeatures: string[];
  techStack: string[];
  roleAndArchitecture: string;
  liveUrl?: string;
  repoUrl?: string;
  isNDA?: boolean;
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#101010] border border-neon-red/40 rounded-2xl shadow-[0_0_50px_rgba(255,0,60,0.3)] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#161616]/90 backdrop-blur-sm z-10">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-neon-red shadow-[0_0_8px_#ff003c]" />
            <span className="font-orbitron text-xs sm:text-sm font-bold text-gray-300 uppercase tracking-wider">
              {project.categoryLabel} // {project.badge}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neon-red text-white text-xs font-orbitron font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(255,0,60,0.5)] hover:bg-neon-red-light transition-all"
              >
                <span>Visit Live Resource</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-neon-red" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Hero Banner with Image */}
          <div className="relative h-60 sm:h-80 w-full rounded-xl overflow-hidden border border-neon-red/30 bg-black">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 896px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-black/40 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="cyber-pill mb-2 bg-neon-red/30 border-neon-red text-white">
                {project.badge}
              </span>
              <h3 className="font-orbitron text-2xl sm:text-3xl font-black text-white">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base font-light mt-1">
                {project.subtitle}
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-3">
            <h4 className="font-orbitron text-lg font-bold text-white flex items-center gap-2">
              <Terminal className="w-4 h-4 text-neon-red" />
              <span>System Overview & Challenge</span>
            </h4>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base font-light">
              {project.fullDescription}
            </p>
          </div>

          {/* Architecture & Engineering Role */}
          <div className="p-4 sm:p-5 rounded-xl bg-neon-red/5 border border-neon-red/20 space-y-2">
            <h4 className="font-orbitron text-base font-bold text-neon-red flex items-center gap-2">
              <Layers className="w-4 h-4" />
              <span>Architecture & Engineering Ownership</span>
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed font-light">
              {project.roleAndArchitecture}
            </p>
          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <h4 className="font-orbitron text-lg font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-neon-red" />
              <span>Key Features & Technical Solutions</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-neon-red shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="space-y-3">
            <h4 className="font-orbitron text-lg font-bold text-white flex items-center gap-2">
              <Cpu className="w-4 h-4 text-neon-red" />
              <span>Technology Stack</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons in Modal Footer */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            {project.isNDA ? (
              <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
                <ShieldAlert className="w-4 h-4 text-neon-red" />
                <span>Internal enterprise platform (Codebase protected under NDA)</span>
              </div>
            ) : (
              <div className="text-xs text-gray-400 font-mono">
                Status: Verified Production Architecture
              </div>
            )}

            <div className="flex items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-neon-primary text-xs sm:text-sm py-2.5 px-5"
                >
                  <span>Open Live Resource</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
