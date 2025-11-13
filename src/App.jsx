import React, { useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Packages from './components/Packages'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Guides from './components/Guides'
import Footer from './components/Footer'

const translations = {
  en: {
    switchLanguage: 'Switch language',
    contactUs: 'Contact Us',
    explorePackages: 'Explore Packages',
    heroTitle: 'Bring AI into your business',
    heroSubtitle: 'Tailored AI solutions to boost efficiency and growth.',
    packagesTitle: 'Packages / Offers',
    aboutTitle: 'About / Our Values',
    aboutText:
      'We are a team of AI specialists helping companies adopt practical, secure, and scalable AI. We focus on rapid delivery, measurable outcomes, and solutions tailored to each organization.',
    testimonialsTitle: 'Testimonials / Clients',
    testimonialsSubtitle:
      'Companies that trusted us transformed the way they work with AI.',
    guidesTitle:
      'Educational resources to help businesses understand and apply AI solutions.',
    guidesTeaser: 'Short reads with practical examples and checklists to get started.',
    readMore: 'Read more',
    products: 'Products / Packages',
    packages: 'Packages',
    company: 'Company',
    about: 'About',
    careers: 'Careers',
    privacy: 'Privacy',
    terms: 'Terms',
    resources: 'Resources',
    guides: 'Guides',
    contact: 'Contact',
    followUs: 'Follow us',
  },
  it: {
    switchLanguage: 'Cambia lingua',
    contactUs: 'Contattaci',
    explorePackages: 'Esplora i pacchetti',
    heroTitle: 'Porta l’AI nella tua azienda',
    heroSubtitle: 'Soluzioni AI su misura per aumentare efficienza e crescita.',
    packagesTitle: 'Pacchetti / Offerte',
    aboutTitle: 'Chi siamo / Valori',
    aboutText:
      'Siamo un team di specialisti AI che aiuta le aziende ad adottare soluzioni pratiche, sicure e scalabili. Puntiamo a consegne rapide, risultati misurabili e soluzioni su misura per ogni organizzazione.',
    testimonialsTitle: 'Testimonianze / Clienti',
    testimonialsSubtitle:
      'Le aziende che si sono affidate a noi hanno trasformato il loro modo di lavorare con l’AI.',
    guidesTitle:
      'Risorse educative per comprendere e applicare soluzioni AI in azienda.',
    guidesTeaser: 'Approfondimenti brevi con esempi pratici e checklist per iniziare.',
    readMore: 'Scopri di più',
    products: 'Prodotti / Pacchetti',
    packages: 'Pacchetti',
    company: 'Azienda',
    about: 'Chi siamo',
    careers: 'Carriere',
    privacy: 'Privacy',
    terms: 'Termini',
    resources: 'Risorse',
    guides: 'Guide',
    contact: 'Contatti',
    followUs: 'Seguici',
  },
}

export default function App() {
  const [lang, setLang] = useState('en')
  const t = useMemo(() => (key) => translations[lang][key], [lang])

  return (
    <div className="min-h-screen bg-[#05050A] text-white/90 selection:bg-purple-600/40 selection:text-white">
      {/* Glow accents */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-28 -left-28 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute top-1/3 -right-16 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
      </div>

      <Navbar lang={lang} setLang={setLang} t={t} />
      <main>
        <Hero t={t} />
        <div id="packages" className="relative">
          <Packages lang={lang} t={t} />
        </div>
        <div id="about">
          <About t={t} />
        </div>
        <Testimonials lang={lang} t={t} />
        <div id="guides">
          <Guides lang={lang} t={t} />
        </div>
        <section id="contact" className="relative py-20 sm:py-28">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
              <h3 className="text-2xl font-bold text-white mb-2">{t('contactUs')}</h3>
              <p className="text-white/70 mb-4">Email us and we’ll reply within 24 hours.</p>
              <a
                href="mailto:hello@example.com?subject=AI%20Implementation%20Inquiry"
                className="inline-flex rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 font-semibold text-white shadow-[0_0_30px_rgba(99,102,241,0.45)] hover:shadow-[0_0_42px_rgba(99,102,241,0.65)] transition-shadow"
              >
                {t('contactUs')}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer t={t} />
    </div>
  )
}
