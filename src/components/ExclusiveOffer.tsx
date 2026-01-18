import React, { useMemo } from "react";

export function ExclusiveOffer() {
  const brands = useMemo(() => [
    { name: "ResLine", logo: "https://respol.pl/wp-content/uploads/elementor/thumbs/ResLine_logo_FINAL-pccegylju7atvg72biozaqh14selzk7d5ddi1l2hvk.png", href: "https://respol.pl/wp-content/uploads/2021/09/resline_a4_2019-printt.pdf" },
    { name: "ITAP", logo: "https://respol.pl/wp-content/uploads/2022/03/itap-bez-tla.png", href: "https://www.itap.it/en/" },
    { name: "Concept", logo: "https://respol.pl/wp-content/uploads/2021/12/CONCEPT.png", href: "https://concept.ik.pl/" },
    { name: "Viteco", logo: "https://respol.pl/wp-content/uploads/2021/12/VITECO.png", href: "https://viteco.pl/" },
  ], []);

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-[#1a1a1a]">
            Oferta na{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#ee1215] to-[#ff4444] bg-clip-text text-transparent">wyłączność</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: 14 }}>
                <path d="M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7" fill="none" stroke="#ee1215" strokeWidth="8" strokeLinecap="round" className="animate-[draw_1.5s_ease-out_forwards]" />
              </svg>
            </span>
          </h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">Marki własne i produkty dostępne <strong>wyłącznie w sieci Respol</strong>. Sprawdzone rozwiązania w konkurencyjnych cenach.</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {brands.map((b) => (
            <a key={b.name} href={b.href} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center p-8 lg:p-12 bg-white rounded-2xl border border-gray-100 hover:border-[#ee1215]/30 hover:shadow-xl transition-all duration-300">
              <img src={b.logo} alt={b.name} className="max-h-12 lg:max-h-16 w-auto grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />
            </a>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a href="https://respol.pl/katalog-produktow/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#ee1215] hover:text-[#d60e11] font-semibold text-lg transition-colors group">
            Zobacz pełny katalog produktów
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
