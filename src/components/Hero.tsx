import React, { useState, useEffect, useMemo, useCallback } from "react";

const Icons = {
  ArrowRight: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  ),
  ChevronLeft: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  ),
  ChevronRight: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  ),
  Calendar: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  Sparkles: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
  Gift: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
    </svg>
  ),
  Truck: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
    </svg>
  ),
  Shield: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
};

const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(6)].map((_, i) => (
      <div
        key={i}
        className="absolute w-2 h-2 bg-[#ee1215]/20 rounded-full animate-float"
        style={{
          left: `${15 + i * 15}%`,
          top: `${20 + (i % 3) * 25}%`,
          animationDelay: `${i * 0.5}s`,
          animationDuration: `${3 + i * 0.5}s`,
        }}
      />
    ))}
  </div>
);

export function Hero() {
  const slides = useMemo(() => [
    { image: "https://respol.pl/wp-content/uploads/2024/12/Vaillant_782x258-1.png", link: "https://www.myvaillantpro.pl/", alt: "Vaillant", brand: "Vaillant" },
    { image: "https://respol.pl/wp-content/uploads/2025/11/Baner-TurboFlush-782x258-px.jpg", link: "https://www.geberit.pl/", alt: "Geberit TurboFlush", brand: "Geberit" },
    { image: "https://respol.pl/wp-content/uploads/2023/03/kan-therm-baner-wn-respol-728x258px-pl-23-02-27.png", link: "https://respol.pl/wspieramy-najlepszych-program-partnerski-kan/", alt: "KAN-therm", brand: "KAN-therm" },
    { image: "https://respol.pl/wp-content/uploads/2021/10/DE-DIETRICH-782x258-px.jpg", link: "https://dedietrich.pl/", alt: "De Dietrich", brand: "De Dietrich" },
    { image: "https://respol.pl/wp-content/uploads/2025/11/Grundfos_banner-Promocja-z-biletami-Suntago_ALPHA-i-COMFORT.png", link: "https://respol.pl/promocje/", alt: "Grundfos Suntago", brand: "Grundfos" },
  ], []);

  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const SLIDE_DURATION = 5000;

  useEffect(() => {
    if (isPaused) return;
    
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrent((c) => (c + 1) % slides.length);
          return 0;
        }
        return prev + (100 / (SLIDE_DURATION / 50));
      });
    }, 50);

    return () => clearInterval(progressInterval);
  }, [slides.length, isPaused]);

  const goTo = useCallback((idx: number) => {
    setCurrent(idx);
    setProgress(0);
  }, []);

  const prev = useCallback(() => {
    setCurrent((p) => (p - 1 + slides.length) % slides.length);
    setProgress(0);
  }, [slides.length]);

  const next = useCallback(() => {
    setCurrent((p) => (p + 1) % slides.length);
    setProgress(0);
  }, [slides.length]);

  return (
    // ZWIĘKSZONY PADDING TOP - pt-36 lg:pt-44 zamiast pt-28 lg:pt-32
    <section className="relative pt-36 lg:pt-44 pb-16 lg:pb-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-red-50/30" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#ee1215]/5 to-transparent rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-tl from-[#ee1215]/5 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ee1215' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          
          {/* KARTA B2B EXPRES24 */}
          <a 
            href="https://expres24.pl" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group relative bg-white/80 backdrop-blur-xl rounded-[2rem] overflow-hidden border border-white/50 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-[#ee1215]/20 transition-all duration-700 min-h-[380px] lg:min-h-[480px] flex flex-col justify-center"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#ee1215]/10 via-[#ff6b6b]/5 to-transparent rounded-full blur-3xl transition-all duration-700 group-hover:scale-110 group-hover:opacity-80" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-[#ee1215]/8 to-transparent rounded-full blur-2xl transition-all duration-700 group-hover:scale-110" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-radial from-[#ee1215]/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <FloatingParticles />

            <div className="relative z-10 p-8 lg:p-12">
              <div className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#ee1215]/15 to-[#ee1215]/5 backdrop-blur-sm text-[#ee1215] px-5 py-2.5 rounded-full text-sm font-bold mb-8 border border-[#ee1215]/10 shadow-lg shadow-[#ee1215]/5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ee1215] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ee1215]" />
                </span>
                Platforma B2B
              </div>

              <h2 className="text-4xl lg:text-6xl font-black text-[#1a1a1a] mb-6 leading-[1.1] tracking-tight">
                Kupuj wygodnie
                <br />
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-[#ee1215] via-[#ff4444] to-[#ee1215] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                    online!
                  </span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                    <path d="M2 8c50-6 100-6 196 2" stroke="url(#underline-gradient)" strokeWidth="4" strokeLinecap="round" className="animate-draw" />
                    <defs>
                      <linearGradient id="underline-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#ee1215" />
                        <stop offset="100%" stopColor="#ff6b6b" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h2>

              <p className="text-gray-600 mb-8 max-w-sm text-lg lg:text-xl leading-relaxed">
                Ponad <span className="font-bold text-[#ee1215]">400 000</span> produktów. 
                <br className="hidden sm:block" />
                Szybkie zamówienia, konkurencyjne ceny.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <span className="inline-flex items-center gap-2.5 text-sm font-medium text-gray-700 bg-white/80 backdrop-blur-sm px-4 py-2.5 rounded-xl border border-gray-100 shadow-sm group-hover:shadow-md transition-shadow">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100">
                    <Icons.Truck className="w-3.5 h-3.5 text-emerald-600" />
                  </span>
                  Dostawa 24h
                </span>
              </div>

              <span className="inline-flex items-center gap-3 bg-gradient-to-r from-[#ee1215] to-[#d60e11] hover:from-[#d60e11] hover:to-[#c00d10] text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-500 shadow-xl shadow-[#ee1215]/30 group-hover:shadow-2xl group-hover:shadow-[#ee1215]/40 group-hover:scale-[1.02]">
                Przejdź do platformy 
                <div className="relative w-6 h-6 overflow-hidden">
                  <Icons.ArrowRight className="w-6 h-6 transform transition-transform duration-500 group-hover:translate-x-8" />
                  <Icons.ArrowRight className="w-6 h-6 absolute top-0 left-0 transform -translate-x-8 transition-transform duration-500 group-hover:translate-x-0" />
                </div>
              </span>
            </div>

            <div className="absolute top-6 right-6">
              <div className="relative">
                <div className="absolute inset-0 bg-[#ee1215] rounded-full blur-lg opacity-50 animate-pulse" />
                <div className="relative bg-gradient-to-br from-[#ee1215] to-[#c00d10] text-white text-xs font-black px-4 py-2 rounded-full shadow-xl flex items-center gap-1.5">
                  <Icons.Sparkles className="w-3.5 h-3.5" />
                  NOWOŚĆ
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 right-0 w-32 h-32 opacity-5">
              <svg viewBox="0 0 100 100" fill="none">
                <circle cx="100" cy="100" r="80" stroke="#ee1215" strokeWidth="2" />
                <circle cx="100" cy="100" r="60" stroke="#ee1215" strokeWidth="2" />
                <circle cx="100" cy="100" r="40" stroke="#ee1215" strokeWidth="2" />
              </svg>
            </div>
          </a>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-6">
            
            {/* SLIDER */}
            <div 
              className="relative bg-white/80 backdrop-blur-xl rounded-[2rem] border border-white/50 overflow-hidden shadow-xl shadow-gray-200/50 group"
              style={{ aspectRatio: '782 / 290' }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="absolute inset-0">
                {slides.map((s, idx) => (
                  <a 
                    key={s.image} 
                    href={s.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-out ${
                      idx === current 
                        ? "opacity-100 z-10 scale-100" 
                        : idx === (current - 1 + slides.length) % slides.length
                          ? "opacity-0 z-0 scale-95 -translate-x-full"
                          : "opacity-0 z-0 scale-95 translate-x-full"
                    }`}
                  >
                    <img 
                      src={s.image} 
                      alt={s.alt} 
                      className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-[1.03]" 
                    />
                  </a>
                ))}
              </div>

              <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200/50 z-30">
                <div 
                  className="h-full bg-gradient-to-r from-[#ee1215] to-[#ff6b6b] transition-all duration-100 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="absolute top-4 left-4 z-30">
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-sm text-gray-700 shadow-lg border border-white/50">
                  {slides[current].brand}
                </span>
              </div>

              <button 
                onClick={(e) => { e.preventDefault(); prev(); }} 
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 backdrop-blur-sm hover:bg-[#ee1215] rounded-2xl flex items-center justify-center shadow-xl border border-white/50 transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 hover:text-white"
              >
                <Icons.ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={(e) => { e.preventDefault(); next(); }} 
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 backdrop-blur-sm hover:bg-[#ee1215] rounded-2xl flex items-center justify-center shadow-xl border border-white/50 transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 hover:text-white"
              >
                <Icons.ChevronRight className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-white/50">
                {slides.map((_, idx) => (
                  <button 
                    key={idx} 
                    onClick={(e) => { e.preventDefault(); goTo(idx); }} 
                    className={`relative h-2.5 rounded-full transition-all duration-500 ${
                      idx === current 
                        ? "w-8 bg-gradient-to-r from-[#ee1215] to-[#ff6b6b]" 
                        : "w-2.5 bg-gray-300 hover:bg-gray-400"
                    }`}
                  >
                    {idx === current && (
                      <span className="absolute inset-0 rounded-full bg-[#ee1215] animate-ping opacity-30" />
                    )}
                  </button>
                ))}
              </div>

              <div className="absolute bottom-4 right-4 z-20">
                <span className="text-sm font-bold text-gray-500 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm">
                  {current + 1} / {slides.length}
                </span>
              </div>
            </div>

            {/* INFO CARDS */}
            <div className="grid grid-cols-2 gap-4">
              <a 
                href="https://respol.pl/praca-w-okresie-swiatecznym/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative bg-white/80 backdrop-blur-xl rounded-2xl p-6 lg:p-7 border border-white/50 shadow-lg shadow-gray-200/30 hover:shadow-xl hover:shadow-[#ee1215]/10 transition-all duration-500 overflow-hidden hover:-translate-y-1"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50 group-hover:from-[#ee1215]/10 group-hover:to-[#ee1215]/5 flex items-center justify-center mb-5 transition-all duration-500 shadow-sm group-hover:shadow-md group-hover:scale-110">
                    <Icons.Calendar className="w-7 h-7 text-gray-500 group-hover:text-[#ee1215] transition-colors duration-300" />
                  </div>
                  <p className="text-xs text-gray-400 uppercase tracking-[0.2em] font-semibold mb-1">
                    Harmonogram
                  </p>
                  <p className="text-xl font-black text-gray-900 group-hover:text-[#ee1215] transition-colors">
                    2025/2026
                  </p>
                  <div className="mt-3 flex items-center gap-1 text-sm text-gray-400 group-hover:text-[#ee1215]/70 transition-colors">
                    <span>Zobacz szczegóły</span>
                    <Icons.ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>

              <a 
                href="https://respol.pl/lp-wygraj-nagrody-z-respolem-2025/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] rounded-2xl p-6 lg:p-7 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#ee1215]/20 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#ee1215] rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#ee1215] rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                
                <div className="absolute top-4 right-4 w-1.5 h-1.5 bg-white rounded-full animate-pulse opacity-60" />
                <div className="absolute top-8 right-10 w-1 h-1 bg-white rounded-full animate-pulse opacity-40" style={{ animationDelay: '0.5s' }} />
                <div className="absolute bottom-12 right-6 w-1 h-1 bg-[#ee1215] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />

                <div className="relative">
                  <div className="relative w-14 h-14 mb-5">
                    <div className="absolute inset-0 bg-[#ee1215] rounded-2xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity" />
                    <div className="relative w-full h-full bg-gradient-to-br from-[#ee1215] to-[#c00d10] rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                      <Icons.Gift className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 uppercase tracking-[0.2em] font-semibold mb-1">
                    Program
                  </p>
                  <p className="text-xl font-black text-white">
                    Wygraj nagrody!
                  </p>
                  <div className="mt-3 flex items-center gap-1 text-sm text-gray-400 group-hover:text-[#ee1215] transition-colors">
                    <span>Sprawdź teraz</span>
                    <Icons.ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                <div className="absolute bottom-0 right-0 w-20 h-20 opacity-10">
                  <svg viewBox="0 0 80 80" fill="none">
                    <circle cx="80" cy="80" r="40" stroke="white" strokeWidth="1" />
                    <circle cx="80" cy="80" r="30" stroke="white" strokeWidth="1" />
                    <circle cx="80" cy="80" r="20" stroke="white" strokeWidth="1" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.4; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 0.8; }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes draw {
          0% { stroke-dashoffset: 200; }
          100% { stroke-dashoffset: 0; }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        
        .animate-draw {
          stroke-dasharray: 200;
          stroke-dashoffset: 200;
          animation: draw 1.5s ease forwards 0.5s;
        }
      `}</style>
    </section>
  );
}
