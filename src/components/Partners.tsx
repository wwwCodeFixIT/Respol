import React, { useMemo } from "react";

export function Partners() {
  const partnersRow1 = useMemo(() => [
    { name: "Almeva", url: "https://respol.pl/wp-content/uploads/2021/08/1.png", link: "http://www.almeva.pl/" },
    { name: "B Meters", url: "https://respol.pl/wp-content/uploads/2021/08/bmeters.jpg", link: "https://bmeters.pl/" },
    { name: "De Dietrich", url: "https://respol.pl/wp-content/uploads/2021/08/dedietrich_new_logo-1024x221.png", link: "https://dedietrich.pl/" },
    { name: "Immergas", url: "https://respol.pl/wp-content/uploads/2021/08/IMMERGAS.png", link: "https://www.immergas.pl/" },
    { name: "ITAP", url: "https://respol.pl/wp-content/uploads/2021/08/11.png", link: "https://www.itap.it/" },
    { name: "KAN-therm", url: "https://respol.pl/wp-content/uploads/2021/08/13.png", link: "https://pl.kan-therm.com/" },
    { name: "Magnaplast", url: "https://respol.pl/wp-content/uploads/2023/01/logo-Magnaplast-1024x251.png", link: "https://magnaplast.pl/" },
    { name: "Purmo", url: "https://respol.pl/wp-content/uploads/2021/09/Purmo.png", link: "https://global.purmo.com/" },
    { name: "ResLine", url: "https://respol.pl/wp-content/uploads/2021/08/ResLine_logo_FINAL-1-1024x395.png", link: "https://respol.pl/" },
    { name: "Salus", url: "https://respol.pl/wp-content/uploads/2022/04/logo-salus-classic-1024x174.png", link: "https://salus-controls.pl/" },
  ], []);

  const partnersRow2 = useMemo(() => [
    { name: "Uponor", url: "https://respol.pl/wp-content/uploads/2021/08/20-e1637697547409.png", link: "https://www.uponor.pl/" },
    { name: "Vaillant", url: "https://respol.pl/wp-content/uploads/2021/08/21-e1637697711462.png", link: "https://www.vaillant.pl/" },
    { name: "Stiebel Eltron", url: "https://respol.pl/wp-content/uploads/2023/04/Logo_STIEBEL-ELTRON_CMYK_Red_Black-1024x165.png", link: "https://www.stiebel-eltron.pl/" },
    { name: "Hutterer-Lechner", url: "https://respol.pl/wp-content/uploads/2021/08/10.png", link: "https://www.hutterer-lechner.com/" },
    { name: "EE Odlewnia", url: "https://respol.pl/wp-content/uploads/2021/08/ee-odlewnia.png", link: "https://eeodlewnia.pl/" },
    { name: "APE", url: "https://respol.pl/wp-content/uploads/2021/08/2.png", link: "http://www.ape-raccorderie.com/" },
    { name: "Geberit", url: "https://respol.pl/wp-content/uploads/2023/07/Geberit.jpg", link: "https://www.geberit.pl/" },
    { name: "Wika", url: "https://respol.pl/wp-content/uploads/2024/12/wika-1.png", link: "https://www.wika.com/pl-pl/" },
  ], []);

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#ee1215]/10 text-[#ee1215] rounded-full text-sm font-semibold mb-6"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>Zaufane marki</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Nasi partnerzy</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">Współpracujemy z <strong className="text-gray-900">czołowymi producentami</strong> w branży grzewczej, sanitarnej i instalacyjnej.</p>
        </div>
      </div>
      <div className="relative overflow-hidden mb-8">
        <div className="absolute inset-y-0 left-0 w-32 lg:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 lg:w-48 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="flex gap-12 lg:gap-16 w-max px-8 animate-[scroll_40s_linear_infinite] hover:[animation-play-state:paused]">
          {[...partnersRow1, ...partnersRow1, ...partnersRow1].map((partner, idx) => (
            <a key={`row1-${partner.name}-${idx}`} href={partner.link} target="_blank" rel="noopener noreferrer" className="group w-36 lg:w-44 h-20 lg:h-24 bg-white rounded-2xl border border-gray-100 flex items-center justify-center p-4 lg:p-6 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 hover:border-[#ee1215]/20 hover:shadow-lg transition-all duration-300">
              <img src={partner.url} alt={partner.name} className="max-w-full max-h-full object-contain transform group-hover:scale-110 transition-transform duration-300" />
            </a>
          ))}
        </div>
      </div>
      <div className="relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-32 lg:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 lg:w-48 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="flex gap-12 lg:gap-16 w-max px-8 animate-[scrollReverse_35s_linear_infinite] hover:[animation-play-state:paused]">
          {[...partnersRow2, ...partnersRow2, ...partnersRow2].map((partner, idx) => (
            <a key={`row2-${partner.name}-${idx}`} href={partner.link} target="_blank" rel="noopener noreferrer" className="group w-36 lg:w-44 h-20 lg:h-24 bg-white rounded-2xl border border-gray-100 flex items-center justify-center p-4 lg:p-6 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 hover:border-[#ee1215]/20 hover:shadow-lg transition-all duration-300">
              <img src={partner.url} alt={partner.name} className="max-w-full max-h-full object-contain transform group-hover:scale-110 transition-transform duration-300" />
            </a>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 lg:mt-16">
        <div className="text-center">
          <a href="https://respol.pl/zaufali-nam/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white border border-gray-200 hover:border-[#ee1215]/30 hover:shadow-xl px-8 py-4 rounded-2xl font-semibold text-gray-700 hover:text-[#ee1215] transition-all duration-300 group">
            <span className="w-10 h-10 rounded-xl bg-[#ee1215]/10 flex items-center justify-center group-hover:bg-[#ee1215] transition-colors"><svg className="w-5 h-5 text-[#ee1215] group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></span>
            Zobacz wszystkich partnerów <span className="text-sm text-gray-400 font-normal">(18+)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
