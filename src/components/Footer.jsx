import React from 'react'
import { Linkedin, Facebook, Instagram } from 'lucide-react'

export default function Footer({ t }) {
  return (
    <footer className="relative border-t border-white/10 bg-black/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 text-white/80">
          <div>
            <h4 className="text-white font-semibold mb-3">{t('products')}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#packages" className="hover:text-white transition-colors">{t('packages')}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">{t('company')}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-white transition-colors">{t('about')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('privacy')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('terms')}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">{t('resources')}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#guides" className="hover:text-white transition-colors">{t('guides')}</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">{t('contact')}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">{t('followUs')}</h4>
            <div className="flex items-center gap-3">
              <a aria-label="LinkedIn" href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                <Linkedin size={18} />
              </a>
              <a aria-label="Instagram" href="https://instagram.com/skynex" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                <Instagram size={18} />
              </a>
              <a aria-label="Facebook" href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 text-center text-white/50 text-sm">© {new Date().getFullYear()} Skynex. All rights reserved.</div>
      </div>
    </footer>
  )
}
