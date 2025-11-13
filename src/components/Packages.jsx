import React from 'react'
import { Check, Rocket, Bolt, Crown } from 'lucide-react'

const tiers = {
  en: [
    {
      name: 'Starter',
      icon: Rocket,
      features: [
        'Basic workflow automation',
        'AI-powered personal assistant',
        'Standard analytics & reporting',
        'Email & chat support',
        'Up to 3 AI integrations',
      ],
    },
    {
      name: 'Professional',
      icon: Bolt,
      features: [
        'Advanced workflow automation',
        'AI-driven sales & marketing tools',
        'Enhanced data analytics & insights',
        'Priority customer support',
        'Up to 10 AI integrations',
      ],
    },
    {
      name: 'Enterprise',
      icon: Crown,
      features: [
        'Fully customizable AI automation',
        'Dedicated AI business consultant',
        'Enterprise-grade compliance',
        '24/7 VIP support',
        'Unlimited AI integrations',
      ],
    },
  ],
  it: [
    {
      name: 'Starter',
      icon: Rocket,
      features: [
        'Automazione base dei flussi di lavoro',
        'Assistente personale AI',
        'Analisi e reportistica standard',
        'Supporto via email e chat',
        'Fino a 3 integrazioni AI',
      ],
    },
    {
      name: 'Professionale',
      icon: Bolt,
      features: [
        'Automazione avanzata dei flussi di lavoro',
        'Strumenti AI per vendite e marketing',
        'Analisi dati avanzata e insight',
        'Supporto clienti prioritario',
        'Fino a 10 integrazioni AI',
      ],
    },
    {
      name: 'Enterprise',
      icon: Crown,
      features: [
        'Automazione AI completamente personalizzabile',
        'Consulente AI dedicato per il business',
        'Compliance a livello enterprise',
        'Supporto VIP 24/7',
        'Integrazioni AI illimitate',
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
          {tiers[lang].map((tier) => {
            const Icon = tier.icon
            return (
              <div key={tier.name} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:border-white/20 transition-colors">
                <div className="h-1.5 w-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mb-4" />
                <div className="flex items-center gap-2 mb-4">
                  <Icon className="text-purple-400" size={18} />
                  <h3 className="text-xl font-semibold text-white">{tier.name}</h3>
                </div>
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
            )
          })}
        </div>
      </div>
    </section>
  )
}
