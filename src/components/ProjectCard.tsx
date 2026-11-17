'use client';

import React from 'react';
import Image from 'next/image';
import { ExternalLink, ArrowRight, Shield, Layers } from 'lucide-react';
import { ProjectData } from './ProjectModal';

interface ProjectCardProps {
  project: ProjectData;
  onOpenDetails: (project: ProjectData) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  return (
    <div className="cyber-card rounded-xl overflow-hidden flex flex-col justify-between group hover:border-neon-red transition-all duration-300">
      
      {/* Thumbnail */}
      <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-black/60 border-b border-neon-red/25">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-90" />
        
        {/* Category & Badge overlay */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
          <span className="cyber-pill bg-[#0a0a0a]/85 backdrop-blur-md border-neon-red/50 text-[11px] font-semibold text-white">
            {project.badge}
          </span>
          <span className="text-[11px] font-mono text-gray-300 px-2 py-0.5 rounded bg-black/75 backdrop-blur-md border border-white/10">
            {project.categoryLabel}
          </span>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="font-orbitron text-xl font-bold text-white mb-2 group-hover:text-neon-red transition-colors line-clamp-1">
            {project.title}
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed mb-5 line-clamp-3 font-light">
            {project.shortDescription}
          </p>
        </div>

        {/* Tech tags */}
        <div>
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.techStack.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-300"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="text-[11px] font-mono px-1.5 py-0.5 rounded bg-neon-red/15 border border-neon-red/35 text-neon-red font-medium">
                +{project.techStack.length - 4}
              </span>
            )}
          </div>

          {/* Action Buttons: High-visibility Resource & Details CTAs */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
            
            {/* Direct Resource / Live Button if available */}
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-neon-red/20 hover:bg-neon-red text-white text-xs font-orbitron font-bold uppercase tracking-wider border border-neon-red/60 shadow-[0_0_12px_rgba(255,0,60,0.3)] transition-all"
              >
                <span>Live Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : project.isNDA ? (
              <span className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-white/5 text-gray-400 text-xs font-mono border border-white/10">
                <Shield className="w-3.5 h-3.5 text-neon-red" />
                <span>Enterprise NDA</span>
              </span>
            ) : (
              <button
                onClick={() => onOpenDetails(project)}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-200 text-xs font-orbitron font-semibold uppercase tracking-wider border border-white/10 hover:border-neon-red/50 transition-all"
              >
                <Layers className="w-3.5 h-3.5 text-neon-red" />
                <span>Architecture</span>
              </button>
            )}

            {/* View Specs & Details Modal Button */}
            <button
              onClick={() => onOpenDetails(project)}
              className="inline-flex items-center justify-center gap-1 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-orbitron font-semibold uppercase tracking-wider text-neon-red hover:text-white border border-neon-red/30 transition-all"
              aria-label={`View details for ${project.title}`}
            >
              <span>Specs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;
