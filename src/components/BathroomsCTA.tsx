import React, { useState, useEffect, useRef } from "react";

export function BathroomsCTA() {
  const [offsetY, setOffsetY] = useState(0);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const vh = window.innerHeight;
      if (rect.top < vh && rect.bottom > 0) {
        const progress = (vh - rect.top) / (vh + rect.height);
        setOffsetY(progress * 100);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const bathroomImageUrl = "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1920&q=80";

  return (
    <section ref={ref} className="relative min-h-[500px] lg:min-h-[650px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full" style={{ transform: `translateY(${offsetY * 0.4}px) scale(1.2)`, transition: "transform 0.1s ease-out" }}>
        <img src={bathroomImageUrl} alt="Salon łazienek Respol" className="w-full h-full object-cover" loading="eager" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#1a1a1a] to-transparent" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">NASZE SALONY<br /><span className="bg-gradient-to-r from-[#ee1215] to-[#ff4444] bg-clip-text text-transparent">ŁAZIENEK</span></h2>
        <p className="mt-8 text-white/80 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">Odwiedź nasze showroomy i zainspiruj się najnowszymi trendami. Profesjonalne doradztwo i szeroki wybór produktów.</p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://respol.pl/salony-lazienek/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-[#ee1215] hover:bg-[#d60e11] text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-[#ee1215]/40 hover:-translate-y-1">
            ZAPRASZAMY <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
          <a href="https://respol.pl/kontakt-2/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-xl font-semibold text-lg transition-all">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg> Kontakt
          </a>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-8">
          {["Profesjonalne doradztwo", "Marki premium"].map((t) => (
            <div key={t} className="flex items-center gap-2 text-white/70"><span className="w-2 h-2 rounded-full bg-[#ee1215]" /><span className="text-sm">{t}</span></div>
          ))}
        </div>
      </div>
    </section>
  );
}
