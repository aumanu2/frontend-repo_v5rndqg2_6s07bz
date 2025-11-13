import React from 'react'

const testimonials = {
  en: [
    {
      quote:
        'They delivered in weeks what we tried to build for months. Our support costs dropped 35% after the AI rollout.',
      author: 'COO, Fintech Company',
    },
    {
      quote:
        'Clear roadmap, fast execution, and measurable impact. Dashboard adoption went from 0 to 80% in two months.',
      author: 'Head of Operations, Retail',
    },
  ],
  it: [
    {
      quote:
        'Hanno consegnato in poche settimane ciò che tentavamo di costruire da mesi. I costi di supporto sono diminuiti del 35% dopo l’introduzione dell’AI.',
      author: 'COO, Azienda Fintech',
    },
    {
      quote:
        'Roadmap chiara, esecuzione rapida e impatto misurabile. L’adozione della dashboard è passata da 0 a 80% in due mesi.',
      author: 'Head of Operations, Retail',
    },
  ],
}

export default function Testimonials({ lang, t }) {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">{t('testimonialsTitle')}</h2>
          <p className="mt-2 text-white/70">{t('testimonialsSubtitle')}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials[lang].map((tst, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
              <p className="text-white/90 text-lg leading-relaxed">“{tst.quote}”</p>
              <p className="mt-4 text-white/60 text-sm">{tst.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
