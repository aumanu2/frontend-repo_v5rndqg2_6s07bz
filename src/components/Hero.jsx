import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero({ t }) {
  return (
    <section className="relative min-h-[88vh] pt-24 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black pointer-events-none" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_24px_rgba(124,58,237,0.25)]">
            {t('heroTitle')}
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl">
            {t('heroSubtitle')}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#packages" className="inline-flex justify-center rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 font-semibold text-white shadow-[0_0_30px_rgba(99,102,241,0.45)] hover:shadow-[0_0_42px_rgba(99,102,241,0.65)] transition-shadow">
              {t('explorePackages')}
            </a>
            <a href="#contact" className="inline-flex justify-center rounded-full px-6 py-3 font-semibold text-white/90 ring-1 ring-white/20 hover:ring-white/40 hover:text-white transition-all">
              {t('contactUs')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
