import React from 'react'
import { Globe, Mail } from 'lucide-react'

function LogoBolt({ size = 32 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="drop-shadow-[0_0_18px_rgba(99,102,241,0.5)]"
   >
      <defs>
        <linearGradient id="sk-bolt-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
      {/* Energy bolt with gradient, no background */}
      <path
        d="M36 4 L14 36 H28 L22 60 L50 24 H36 L42 4 Z"
        fill="url(#sk-bolt-g)"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
        opacity="0.98"
      />
    </svg>
  )
}

export default function Navbar({ lang, setLang, t }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <LogoBolt size={28} />
          <span className="text-white/90 font-semibold tracking-tight">Skynex</span>
        </div>
        <nav className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === 'en' ? 'it' : 'en')}
            className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors px-3 py-2 rounded-md hover:bg-white/5"
            aria-label={t('switchLanguage')}
            title={t('switchLanguage')}
          >
            <Globe size={18} />
            <span className="uppercase font-medium">{lang}</span>
          </button>
          <a
            href="mailto:hello@example.com?subject=AI%20Implementation%20Inquiry"
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 shadow-[0_0_25px_rgba(99,102,241,0.35)] hover:shadow-[0_0_35px_rgba(99,102,241,0.55)] transition-shadow"
          >
            <Mail size={16} /> {t('contactUs')}
          </a>
        </nav>
      </div>
    </header>
  )
}
