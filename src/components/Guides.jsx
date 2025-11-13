import React from 'react'

const guides = {
  en: [
    'How AI Can Automate Your Business Operations',
    'From Data to Insight: Building AI-Driven Strategies',
    'Choosing the Right AI Implementation Partner',
    'The Future of AI in Small and Medium Enterprises',
  ],
  it: [
    'Come l’AI può automatizzare le operazioni aziendali',
    'Dai dati all’insight: costruire strategie guidate dall’AI',
    'Scegliere il partner giusto per l’implementazione AI',
    'Il futuro dell’AI nelle PMI',
  ],
}

export default function Guides({ lang, t }) {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">{t('guidesTitle')}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {guides[lang].map((g) => (
            <article key={g} className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:border-white/20 transition-colors">
              <div className="h-1.5 w-14 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mb-4" />
              <h3 className="text-white/90 font-semibold group-hover:text-white transition-colors">{g}</h3>
              <p className="mt-2 text-white/60 text-sm">{t('guidesTeaser')}</p>
              <button className="mt-4 text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">{t('readMore')}</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
