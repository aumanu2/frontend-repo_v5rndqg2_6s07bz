import React from 'react'

export default function About({ t }) {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-white/85">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">{t('aboutTitle')}</h2>
        <p className="text-lg leading-relaxed">
          {t('aboutText')}
        </p>
      </div>
    </section>
  )
}
