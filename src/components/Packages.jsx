import React from 'react'
import { Check } from 'lucide-react'

const tiers = {
  en: [
    {
      name: 'Starter',
      features: [
        'Basic AI setup',
        'Simple automations',
        'Website/chatbot integration',
        'Basic analytics dashboard',
      ],
    },
    {
      name: 'Intermediate',
      features: [
        'Integrated AI across workflows',
        'Dashboards & reporting',
        'Private APIs for your data',
        'Custom automations',
      ],
    },
    {
      name: 'Enterprise',
      features: [
        'End-to-end AI solutions',
        'Custom model training',
        'Security, compliance, SSO',
        'Continuous support & SLAs',
      ],
    },
  ],
  it: [
    {
      name: 'Starter',
      features: [
        'Impostazione AI di base',
        'Automazioni semplici',
        'Integrazione sito/chatbot',
        'Dashboard analitiche di base',
      ],
    },
    {
      name: 'Intermedio',
      features: [
        'AI integrata nei flussi di lavoro',
        'Dashboard e report',
        'API private sui tuoi dati',
        'Automazioni personalizzate',
      ],
    },
    {
      name: 'Enterprise',
      features: [
        'Soluzioni AI end-to-end',
        'Training modelli personalizzati',
        'Sicurezza, compliance, SSO',
        'Supporto continuo e SLA',
      ],
    },
  ],
}

export default function Packages({ lang, t }) {
  return (
    <section id="packages" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-blue-500/5 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">
          {t('packagesTitle')}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers[lang].map((tier) => (
            <div key={tier.name} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:border-white/20 transition-colors">
              <div className="h-1.5 w-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">{tier.name}</h3>
              <ul className="space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-white/80">
                    <Check className="text-purple-400" size={18} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <a href="#contact" className="inline-flex rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-[0_0_24px_rgba(99,102,241,0.35)] hover:shadow-[0_0_36px_rgba(99,102,241,0.55)] transition-shadow">
                  {t('contactUs')}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
