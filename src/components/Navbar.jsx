import React from 'react'
import { Globe, Mail } from 'lucide-react'

export default function Navbar({ lang, setLang, t }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 shadow-[0_0_30px_rgba(139,92,246,0.4)]" />
          <span className="text-white/90 font-semibold tracking-tight">Flames AI Solutions</span>
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
