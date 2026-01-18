import { useState, useEffect } from 'react';

const slides = [
  {
    image: 'https://respol.pl/wp-content/uploads/2024/12/Vaillant_782x258-1.png',
    link: 'https://www.myvaillantpro.pl/'
  },
  {
    image: 'https://respol.pl/wp-content/uploads/2025/11/Baner-TurboFlush-782x258-px.jpg',
    link: 'https://www.geberit.pl/'
  },
  {
    image: 'https://respol.pl/wp-content/uploads/2023/03/kan-therm-baner-wn-respol-728x258px-pl-23-02-27.png',
    link: 'https://respol.pl/wspieramy-najlepszych-program-partnerski-kan/'
  },
  {
    image: 'https://respol.pl/wp-content/uploads/2021/10/DE-DIETRICH-782x258-px.jpg',
    link: 'https://dedietrich.pl/'
  },
  {
    image: 'https://respol.pl/wp-content/uploads/2025/11/Grundfos_banner-Promocja-z-biletami-Suntago_ALPHA-i-COMFORT.png',
    link: 'https://respol.pl/promocje/'
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Karta B2B */}
          <a 
            href="https://expres24.pl" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative bg-white rounded-2xl border border-gray-200 hover:border-red-200 hover:shadow-xl transition-all duration-300 overflow-hidden min-h-[320px] lg:min-h-[380px]"
          >
            {/* Tło dekoracyjne */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-red-50 rounded-full -translate-y-1/3 translate-x-1/3 opacity-50" />
            
            {/* Obrazek B2B po prawej */}
            <img 
              src="https://respol.pl/wp-content/uploads/2025/07/Baner-na-strone-www-o-B2B.png" 
              alt="Platforma B2B"
              className="absolute right-0 bottom-0 w-3/5 lg:w-1/2 h-auto object-contain opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
            />

            {/* Zawartość */}
            <div className="relative z-10 p-8 lg:p-10 h-full flex flex-col">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold w-fit mb-6">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                Platforma B2B
              </div>
              
              {/* Nagłówek */}
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                Kupuj wygodnie<br/>
                <span className="text-red-600">online!</span>
              </h2>
              
              {/* Opis */}
              <p className="text-gray-600 mb-6 max-w-xs text-base lg:text-lg">
                Ponad <strong className="text-gray-900">400 000</strong> produktów w jednym miejscu.
              </p>
              
              {/* Korzyści */}
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="inline-flex items-center gap-1.5 text-sm text-gray-700 bg-gray-100 px-3 py-1.5 rounded-full">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Dostawa 24h
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm text-gray-700 bg-gray-100 px-3 py-1.5 rounded-full">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Konkurencyjne ceny
                </span>
              </div>
              
              {/* CTA - na dole */}
              <div className="mt-auto">
                <span className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3.5 rounded-xl font-semibold transition-all group-hover:gap-3">
                  Przejdź do Expres24
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </div>
          </a>

          {/* Prawa kolumna - Slider + Info */}
          <div className="flex flex-col gap-4">
            {/* Slider */}
            <div className="relative bg-white rounded-2xl overflow-hidden flex-1 min-h-[250px] lg:min-h-[280px] border border-gray-200">
              {slides.map((slide, index) => (
                <a
                  key={index}
                  href={slide.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  <img 
                    src={slide.image} 
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </a>
              ))}

              {/* Nawigacja */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentSlide(index);
                    }}
                    className={`h-2 rounded-full transition-all ${
                      index === currentSlide 
                        ? 'bg-red-600 w-8' 
                        : 'bg-white/80 w-2 hover:bg-white'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Karty informacyjne */}
            <div className="grid grid-cols-2 gap-4">
              {/* Harmonogram */}
              <a 
                href="https://respol.pl/praca-w-okresie-swiatecznym/"
                className="bg-white rounded-xl p-5 border border-gray-200 hover:border-red-200 hover:shadow-md transition-all flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Harmonogram pracy</p>
                  <p className="font-bold text-gray-900 text-lg">2025/2026</p>
                </div>
              </a>
              
              {/* Program lojalnościowy */}
              <a 
                href="https://respol.pl/lp-wygraj-nagrody-z-respolem-2025/"
                className="bg-white rounded-xl p-5 border border-gray-200 hover:border-red-200 hover:shadow-md transition-all flex items-center gap-4"
              >
                <img 
                  src="https://respol.pl/wp-content/uploads/2021/12/stempel_wygraj-nagrody-z-respolem_-1-1024x1024.png" 
                  alt="Wygraj nagrody" 
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Program</p>
                  <p className="font-bold text-gray-900 text-lg">Wygraj nagrody!</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
