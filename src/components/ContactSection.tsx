'use client';

import React from 'react';
import ContactForm from './ContactForm';
import { Mail, Phone, MapPin, Send, Terminal, Clock } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TelegramIcon } from './icons/SocialIcons';

const contactChannels = [
  {
    icon: <TelegramIcon className="w-5 h-5 text-neon-red" />,
    title: 'Telegram (Fastest Response)',
    value: '@IvanAbeleshev',
    href: 'https://t.me/IvanAbeleshev',
    actionText: 'Message on Telegram',
    badge: 'Recommended',
  },
  {
    icon: <Mail className="w-5 h-5 text-neon-red" />,
    title: 'Email',
    value: 'abeleshev1993@gmail.com',
    href: 'mailto:abeleshev1993@gmail.com',
    actionText: 'Send Email',
  },
  {
    icon: <Phone className="w-5 h-5 text-neon-red" />,
    title: 'Phone',
    value: '+380 97 871 5252',
    href: 'tel:+380978715252',
    actionText: 'Call Directly',
  },
  {
    icon: <MapPin className="w-5 h-5 text-neon-red" />,
    title: 'Location',
    value: 'Odesa, Ukraine',
    subtext: 'Available for remote collaboration worldwide (all timezones)',
  },
];

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative bg-[#0a0a0a] border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-red/10 border border-neon-red/25 text-xs text-neon-red font-mono uppercase tracking-wider mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>Connect // Communication Channels</span>
          </div>
          <h2 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Get in Touch & <span className="neon-text">Let&apos;s Build Together</span>
          </h2>
          <div className="h-1 w-24 bg-neon-red shadow-[0_0_12px_#ff003c] rounded-full mt-3" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct channels & info */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light">
              Always open to discussing new opportunities, senior engineering roles (<span className="text-white font-medium">Senior Full-Stack / Frontend / Lead</span>), custom enterprise system delivery, or architectural consulting.
            </p>

            {/* Channels Cards */}
            <div className="space-y-4">
              {contactChannels.map((channel, idx) => (
                <div
                  key={idx}
                  className="cyber-card rounded-xl p-4 sm:p-5 flex items-center justify-between group hover:border-neon-red/50 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-lg bg-neon-red/10 border border-neon-red/25 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      {channel.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-400 font-mono">
                          {channel.title}
                        </span>
                        {channel.badge && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-neon-red/15 border border-neon-red/30 text-neon-red">
                            {channel.badge}
                          </span>
                        )}
                      </div>
                      <div className="font-medium text-white text-sm sm:text-base mt-0.5">
                        {channel.value}
                      </div>
                      {channel.subtext && (
                        <div className="text-xs text-gray-400 font-light mt-0.5">
                          {channel.subtext}
                        </div>
                      )}
                    </div>
                  </div>

                  {channel.href && (
                    <a
                      href={channel.href}
                      target={channel.href.startsWith('http') ? '_blank' : undefined}
                      rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-xs font-orbitron font-semibold uppercase tracking-wider text-neon-red hover:text-white px-3 py-1.5 rounded-lg bg-white/5 hover:bg-neon-red/20 transition-all shrink-0 ml-2"
                    >
                      {channel.actionText}
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Social Buttons */}
            <div className="pt-4 flex items-center gap-3">
              <a
                href="https://github.com/IvanAbeleshev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-neon-red text-gray-300 hover:text-white text-xs font-orbitron tracking-wider transition-all"
              >
                <GithubIcon className="w-4 h-4 text-neon-red" />
                <span>GitHub Profile</span>
              </a>

              <a
                href="https://www.linkedin.com/in/ivan-abeleshev-5470b4168/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-neon-red text-gray-300 hover:text-white text-xs font-orbitron tracking-wider transition-all"
              >
                <LinkedinIcon className="w-4 h-4 text-neon-red" />
                <span>LinkedIn Profile</span>
              </a>
            </div>

            {/* Work Status Box */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 flex items-start gap-3">
              <Clock className="w-5 h-5 text-neon-red shrink-0 mt-0.5" />
              <div className="text-xs text-gray-400 leading-relaxed font-light">
                <span className="text-white font-medium block mb-0.5">
                  Rapid Response Guarantee
                </span>
                I typically respond within a few hours on business days. For the fastest turnaround, feel free to reach out via Telegram.
              </div>
            </div>

          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-6">
            <ContactForm />
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
