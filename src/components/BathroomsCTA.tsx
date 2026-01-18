import React, { useState, useEffect, useRef } from "react";

const Icons = {
  ArrowRight: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  ),
  Phone: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  ),
  MapPin: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  Check: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  ),
};

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
        setOffsetY(progress * 80);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const features = [
    'Profesjonalne doradztwo',
    'Marki premium',
    'Wizualizacje 3D',
  ];

  return (
    <section 
      ref={ref} 
      className="relative min-h-[550px] lg:min-h-[650px] flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background Image */}
      <div 
        className="absolute inset-0 w-full h-full" 
        style={{ 
          transform: `translateY(${offsetY * 0.3}px) scale(1.15)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <img 
          src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1920&q=80" 
          alt="Salon łazienek Respol" 
          className="w-full h-full object-cover"
          loading="eager" 
        />
      </div>

      {/* Simple dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/80" />
      
      {/* Subtle red accent overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#ee1215]/10 via-transparent to-transparent" />

      {/* Top fade to white */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent" />
      
      {/* Bottom fade to dark */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0f0f0f] to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto py-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md text-white px-5 py-2.5 rounded-full text-sm font-semibold mb-8 border border-white/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ee1215] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ee1215]" />
          </span>
          <Icons.MapPin className="w-4 h-4 text-[#ee1215]" />
          Showroomy w całej Polsce
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-6">
          NASZE SALONY
          <br />
          <span className="bg-gradient-to-r from-[#ee1215] to-[#ff4444] bg-clip-text text-transparent">
            ŁAZIENEK
          </span>
        </h2>
        
        {/* Description */}
        <p className="text-white/80 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          Odwiedź nasze showroomy i zainspiruj się najnowszymi trendami. 
          Profesjonalne doradztwo i szeroki wybór produktów premium.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="https://respol.pl/salony-lazienek/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 bg-[#ee1215] hover:bg-[#d60e11] text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl shadow-[#ee1215]/30 hover:shadow-2xl hover:shadow-[#ee1215]/40 hover:-translate-y-0.5"
          >
            ZAPRASZAMY
            <Icons.ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          
          <a
            href="https://respol.pl/kontakt-2/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/25 hover:border-white/40 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
          >
            <Icons.Phone className="w-5 h-5" />
            Kontakt
          </a>
        </div>

        {/* Features - simple horizontal list */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="flex items-center gap-2.5 text-white/80"
            >
              <div className="w-5 h-5 rounded-full bg-[#ee1215]/20 flex items-center justify-center">
                <Icons.Check className="w-3 h-3 text-[#ee1215]" />
              </div>
              <span className="text-sm font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
