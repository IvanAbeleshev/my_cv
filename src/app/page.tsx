'use client';

import React from 'react';
import ParticleBackground from '../components/ParticleBackground';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ProjectSection from '../components/ProjectSection';
import SkillsSection from '../components/SkillsSection';
import Timeline from '../components/Timeline';
import ContactSection from '../components/ContactSection';

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white">
      {/* 60fps Canvas Particle Network */}
      <ParticleBackground />

      {/* Hero Section */}
      <section id="home" className="min-h-screen min-h-[100dvh] relative flex flex-col">
        <Hero />
      </section>

      {/* About & Engineering Philosophy */}
      <AboutSection />

      {/* Projects Showcase (AI Avatar, Templa, Fontanka, Poseidon, Goods CMS, etc.) */}
      <ProjectSection />

      {/* Skills Matrix */}
      <SkillsSection />

      {/* Work Experience Timeline */}
      <Timeline />

      {/* Contact & Telegram Form */}
      <ContactSection />
    </div>
  );
}
