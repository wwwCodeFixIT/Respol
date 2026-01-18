import React, { useState, useEffect, useMemo } from "react";

const Icons = {
  ArrowRight: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
  ),
  ChevronLeft: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
  ),
  ChevronRight: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
  ),
  Calendar: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
  ),
};

export function Hero() {
  const slides = useMemo(() => [
    { image: "https://respol.pl/wp-content/uploads/2024/12/Vaillant_782x258-1.png", link: "https://www.myvaillantpro.pl/", alt: "Vaillant" },
    { image: "https://respol.pl/wp-content/uploads/2025/11/Baner-TurboFlush-782x258-px.jpg", link: "https://www.geberit.pl/", alt: "Geberit TurboFlush" },
    { image: "https://respol.pl/wp-content/uploads/2023/03/kan-therm-baner-wn-respol-728x258px-pl-23-02-27.png", link: "https://respol.pl/wspieramy-najlepszych-program-partnerski-kan/", alt: "KAN-therm" },
    { image: "https://respol.pl/wp-content/uploads/2021/10/DE-DIETRICH-782x258-px.jpg", link: "https://dedietrich.pl/", alt: "De Dietrich" },
    { image: "https://respol.pl/wp-content/uploads/2025/11/Grundfos_banner-Promocja-z-biletami-Suntago_ALPHA-i-COMFORT.png", link: "https://respol.pl/promocje/", alt: "Grundfos Suntago" },
  ], []);

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = window.setInterval(() => setCurrent((p) => (p + 1) % slides.length), 5000);
    return () => window.clearInterval(t);
  }, [slides.length]);

  const goTo = (idx: number) => setCurrent(idx);
  const prev = () => setCurrent((p) => (p - 1 + slides.length) % slides.length);
  const next = () => setCurrent((p) => (p + 1) % slides.length);

  return (
    <section className="pt-28 lg:pt-32 pb-12 lg:pb-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* KARTA B2B EXPRES24 */}
          <a href="https://expres24.pl" target="_blank" rel="noopener noreferrer" className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-[#ee1215]/10 transition-all duration-500 min-h-[340px] lg:min-h-[440px] flex flex-col justify-center">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#ee1215]/8 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#ee1215]/5 to-transparent rounded-full blur-2xl" />
            <div className="relative z-10 p-8 lg:p-12">
              <div className="inline-flex items-center gap-2 bg-[#ee1215]/10 text-[#ee1215] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ee1215] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ee1215]" />
                </span>
                Platforma B2B
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold text-[#1a1a1a] mb-4 leading-tight">
                Kupuj wygodnie<br /><span className="bg-gradient-to-r from-[#ee1215] to-[#ff4444] bg-clip-text text-transparent">online!</span>
              </h2>
              <p className="text-gray-600 mb-6 max-w-sm text-base lg:text-lg leading-relaxed">
                Ponad <strong className="text-gray-900">400 000</strong> produktów. Szybkie zamówienia, konkurencyjne ceny.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="inline-flex items-center gap-2 text-sm text-gray-600 bg-gray-100 px-3 py-1.5 rounded-full"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />Dostawa 24h</span>
                <span className="inline-flex items-center gap-2 text-sm text-gray-600 bg-gray-100 px-3 py-1.5 rounded-full"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />Darmowa od 500 zł</span>
              </div>
              <span className="inline-flex items-center gap-3 bg-[#ee1215] hover:bg-[#d60e11] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:shadow-[#ee1215]/25">
                Przejdź do platformy <Icons.ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
            <div className="absolute top-6 right-6 bg-[#ee1215] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">NOWOŚĆ</div>
          </a>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-6">
            {/* SLIDER */}
            <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl border border-gray-100 overflow-hidden shadow-sm group" style={{ aspectRatio: '782 / 258' }}>
              {slides.map((s, idx) => (
                <a key={s.image} href={s.link} target="_blank" rel="noopener noreferrer" className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${idx === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
                  <img src={s.image} alt={s.alt} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.02]" />
                </a>
              ))}
              <button onClick={(e) => { e.preventDefault(); prev(); }} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/90 hover:bg-[#ee1215] hover:text-white rounded-full flex items-center justify-center shadow-lg transition-all opacity-0 group-hover:opacity-100"><Icons.ChevronLeft className="w-5 h-5" /></button>
              <button onClick={(e) => { e.preventDefault(); next(); }} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/90 hover:bg-[#ee1215] hover:text-white rounded-full flex items-center justify-center shadow-lg transition-all opacity-0 group-hover:opacity-100"><Icons.ChevronRight className="w-5 h-5" /></button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {slides.map((_, idx) => (
                  <button key={idx} onClick={(e) => { e.preventDefault(); goTo(idx); }} className={`h-2 rounded-full transition-all ${idx === current ? "w-8 bg-[#ee1215]" : "w-2 bg-gray-300 hover:bg-gray-400"}`} />
                ))}
              </div>
            </div>

            {/* INFO CARDS */}
            <div className="grid grid-cols-2 gap-4">
              <a href="https://respol.pl/praca-w-okresie-swiatecznym/" target="_blank" rel="noopener noreferrer" className="group bg-white rounded-2xl p-5 lg:p-6 border border-gray-100 hover:border-[#ee1215]/20 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gray-100 group-hover:bg-[#ee1215]/10 flex items-center justify-center mb-4 transition-colors">
                  <Icons.Calendar className="w-6 h-6 text-gray-600 group-hover:text-[#ee1215] transition-colors" />
                </div>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">Harmonogram pracy</p>
                <p className="text-lg font-bold text-gray-900 mt-1">2025/2026</p>
              </a>
              <a href="https://respol.pl/lp-wygraj-nagrody-z-respolem-2025/" target="_blank" rel="noopener noreferrer" className="group bg-[#1a1a1a] rounded-2xl p-5 lg:p-6 relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#ee1215] rounded-full blur-3xl opacity-30" />
                <div className="relative">
                  <img src="https://respol.pl/wp-content/uploads/2021/12/stempel_wygraj-nagrody-z-respolem_-1-1024x1024.png" alt="Wygraj nagrody" className="w-12 h-12 object-contain mb-4" />
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">Program</p>
                  <p className="text-lg font-bold text-white mt-1">Wygraj nagrody!</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
