'use client';

import React from 'react';
import Link from 'next/link';
import ParticleBackground from '../components/ParticleBackground';
import { Home, AlertTriangle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] flex items-center justify-center overflow-hidden px-4">
      <ParticleBackground />

      <div className="relative z-10 text-center max-w-lg mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neon-red/10 border border-neon-red/30 text-neon-red text-xs font-mono uppercase tracking-widest mb-6">
          <AlertTriangle className="w-3.5 h-3.5" />
          <span>Error 404 // Protocol Lost</span>
        </div>

        <h1 className="font-orbitron text-7xl sm:text-9xl font-black text-white leading-none tracking-tight mb-4 drop-shadow-[0_0_25px_rgba(255,0,60,0.5)]">
          4<span className="text-neon-red">0</span>4
        </h1>

        <p className="font-orbitron text-lg sm:text-xl text-white font-bold mb-3">
          Page Not Found in the Digital Matrix
        </p>

        <p className="text-sm text-gray-400 font-light mb-8 max-w-md mx-auto">
          The requested system node does not exist or has been relocated to another directory.
        </p>

        <Link
          href="/"
          className="btn-neon-primary inline-flex items-center gap-2"
        >
          <Home className="w-4 h-4" />
          <span>Return to Base</span>
        </Link>
      </div>
    </div>
  );
}
