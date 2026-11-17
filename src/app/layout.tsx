import React, { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/globals.css';
import { Metadata } from 'next';
import { Orbitron, Inter } from 'next/font/google';

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
  variable: '--font-orbitron',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ivan Abeleshev — Senior Full-Stack & Systems Engineer | AI Architect',
  description: 'Portfolio of Ivan Abeleshev — Senior Full-Stack & Systems Engineer with 10+ years in software engineering. AI 3D Avatars, Medical AI & RPA, Enterprise WMS/ERP, High-Load Municipal & Gov Systems, Next.js 16, React 19, NestJS, TypeScript.',
  keywords: [
    'Ivan Abeleshev',
    'Senior Full-Stack Developer',
    'Senior Frontend Engineer',
    'AI Avatar Interrogation',
    'ClinicCards AI Assistant',
    'Next.js 16',
    'React 19',
    'TypeScript',
    'NestJS',
    'Cyberpunk Portfolio',
    'Web Architecture',
    'Odesa Ukraine'
  ],
  authors: [{ name: 'Ivan Abeleshev', url: 'https://ivanabeleshev.dev' }],
  creator: 'Ivan Abeleshev',
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: { url: '/apple-touch-icon.png' },
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${orbitron.variable} ${inter.variable} scroll-smooth`}>
      <body className="flex flex-col min-h-screen font-sans bg-[#0a0a0a] text-gray-100 antialiased selection:bg-neon-red selection:text-white">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
