import { useEffect, useState, useRef } from 'react';

export function BathroomsCTA() {
  const [offsetY, setOffsetY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Only update when section is in view
        if (rect.top < windowHeight && rect.bottom > 0) {
          const scrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height);
          setOffsetY(scrollProgress * 100);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="bathrooms"
      className="relative min-h-[500px] lg:min-h-[650px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax effect */}
      <div 
        className="absolute inset-0 scale-110"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${offsetY * 0.3}px)`,
          willChange: 'transform'
        }}
      />
      
      {/* Dark Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#1a1a1a] to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium tracking-wide border border-white/20">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Showroomy w całej Polsce
          </span>
        </div>
        
        <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-8 tracking-tight leading-none">
          NASZE SALONY
          <br/>
          <span className="text-gradient bg-gradient-to-r from-[#ee1215] to-[#ff4444] bg-clip-text text-transparent">
            ŁAZIENEK
          </span>
        </h2>
        
        <p className="text-white/80 text-lg lg:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Odwiedź nasze showroomy i zainspiruj się najnowszymi trendami w aranżacji łazienek. 
          Profesjonalne doradztwo i szeroki wybór produktów premium.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://respol.pl/salony-lazienek/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#ee1215] to-[#ff3333] hover:from-[#c40e11] hover:to-[#ee1215] text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-[#ee1215]/40"
          >
            ZAPRASZAMY
            <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          
          <a
            href="https://respol.pl/kontakt-2/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 hover:border-white/50 px-8 py-5 rounded-2xl font-semibold text-lg transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Kontakt
          </a>
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-8">
          <div className="flex items-center gap-2 text-white/70">
            <svg className="w-5 h-5 text-[#ee1215]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">Profesjonalne doradztwo</span>
          </div>
          <div className="flex items-center gap-2 text-white/70">
            <svg className="w-5 h-5 text-[#ee1215]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">Marki premium</span>
          </div>
          <div className="flex items-center gap-2 text-white/70">
            <svg className="w-5 h-5 text-[#ee1215]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">Wizualizacje 3D</span>
          </div>
        </div>
      </div>
    </section>
  );
}
