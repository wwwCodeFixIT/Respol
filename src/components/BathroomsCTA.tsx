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
  Sparkles: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
  Star: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
  Check: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
  ),
  Eye: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  ),
  Award: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  ),
  Cube: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  ),
  Heart: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  Play: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M8 5v14l11-7z" />
    </svg>
  ),
};

// Floating particles component
const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(10)].map((_, i) => (
      <div
        key={i}
        className="absolute rounded-full animate-float-slow"
        style={{
          width: `${2 + Math.random() * 4}px`,
          height: `${2 + Math.random() * 4}px`,
          background: i % 3 === 0 ? '#ee1215' : 'rgba(255,255,255,0.3)',
          left: `${5 + i * 10}%`,
          top: `${10 + (i % 5) * 18}%`,
          animationDelay: `${i * 0.5}s`,
          animationDuration: `${5 + i * 0.3}s`,
        }}
      />
    ))}
  </div>
);

export function BathroomsCTA() {
  const [offsetY, setOffsetY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
      });
    };

    const element = ref.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
      return () => element.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const bathroomImageUrl = "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1920&q=80";

  const features = [
    { icon: Icons.Eye, label: 'Profesjonalne doradztwo', value: '50+ ekspertów' },
    { icon: Icons.Award, label: 'Marki premium', value: '100+ producentów' },
    { icon: Icons.Cube, label: 'Wizualizacje 3D', value: 'Bezpłatnie' },
    { icon: Icons.Heart, label: 'Projekty na miarę', value: 'Indywidualne' },
  ];

  return (
    <section 
      ref={ref} 
      className="relative min-h-[600px] lg:min-h-[750px] flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Parallax Background Image */}
      <div 
        className="absolute inset-0 w-full h-full transition-transform duration-300 ease-out" 
        style={{ 
          transform: `translateY(${offsetY * 0.4}px) scale(1.2) translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
        }}
      >
        <img 
          src={bathroomImageUrl} 
          alt="Salon łazienek Respol" 
          className="w-full h-full object-cover"
          loading="eager" 
        />
      </div>

      {/* Multi-layer Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#ee1215]/10 via-transparent to-[#ee1215]/10" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#ee1215]/25 to-transparent rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-tl from-[#ee1215]/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-amber-500/10 via-transparent to-rose-500/10 rounded-full blur-3xl opacity-50" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <FloatingParticles />

      {/* Top/Bottom fades */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white via-white/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/80 to-transparent" />

      {/* Decorative spinning circles */}
      <div className="absolute top-24 left-12 w-24 h-24 border border-white/10 rounded-full animate-spin-slow opacity-50" />
      <div className="absolute bottom-24 right-12 w-32 h-32 border border-white/10 rounded-full animate-spin-slow opacity-50" style={{ animationDirection: 'reverse' }} />
      <div className="absolute top-1/3 right-24 w-16 h-16 border-2 border-dashed border-[#ee1215]/20 rounded-full animate-spin-slow" />

      {/* Pulsing dots */}
      <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-[#ee1215] rounded-full animate-ping" />
      <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-amber-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
      <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-white rounded-full animate-ping" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-xl text-white px-6 py-3 rounded-full text-sm font-bold mb-8 border border-white/20 shadow-2xl shadow-black/20">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ee1215] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ee1215]" />
          </span>
          <Icons.MapPin className="w-4 h-4 text-[#ee1215]" />
          Showroomy w całej Polsce
        </div>

        {/* Heading */}
        <h2 className="text-5xl md:text-6xl lg:text-8xl font-black text-white leading-[0.95] tracking-tight mb-8">
          NASZE SALONY
          <br />
          <span className="relative inline-block mt-2">
            <span className="bg-gradient-to-r from-[#ee1215] via-[#ff4444] to-[#ff6b6b] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              ŁAZIENEK
            </span>
            <svg className="absolute -bottom-3 lg:-bottom-4 left-0 w-full" viewBox="0 0 400 14" fill="none">
              <path d="M2 10c100-8 200-8 396 2" stroke="url(#cta-underline)" strokeWidth="4" strokeLinecap="round" className="animate-draw-long" />
              <defs>
                <linearGradient id="cta-underline" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ee1215" />
                  <stop offset="50%" stopColor="#ff6b6b" />
                  <stop offset="100%" stopColor="#ee1215" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </h2>
        
        {/* Description */}
        <p className="text-white/80 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          Odwiedź nasze showroomy i zainspiruj się{" "}
          <span className="text-white font-semibold">najnowszymi trendami</span>. 
          Profesjonalne doradztwo i szeroki wybór produktów{" "}
          <span className="text-[#ee1215] font-semibold">premium</span>.
        </p>

        {/* Feature Cards Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mb-12 max-w-4xl mx-auto">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="group bg-white/5 backdrop-blur-xl rounded-2xl p-4 lg:p-5 border border-white/10 hover:border-[#ee1215]/40 hover:bg-white/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#ee1215]/10"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ee1215]/20 to-[#ee1215]/5 group-hover:from-[#ee1215] group-hover:to-[#d60e11] flex items-center justify-center mb-3 mx-auto transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#ee1215]/40">
                <feature.icon className="w-6 h-6 text-[#ee1215] group-hover:text-white transition-colors duration-500" />
              </div>
              <p className="text-white font-bold text-sm lg:text-base">{feature.label}</p>
              <p className="text-white/50 text-xs mt-1">{feature.value}</p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a
            href="https://respol.pl/salony-lazienek/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#ee1215] to-[#d60e11] hover:from-[#d60e11] hover:to-[#c00d10] text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-500 shadow-2xl shadow-[#ee1215]/40 hover:shadow-[#ee1215]/60 hover:scale-[1.03] overflow-hidden"
          >
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            
            <span className="relative flex items-center gap-3">
              <Icons.Sparkles className="w-5 h-5" />
              ZAPRASZAMY
              <div className="relative w-6 h-6 overflow-hidden">
                <Icons.ArrowRight className="w-6 h-6 transform transition-transform duration-500 group-hover:translate-x-8" />
                <Icons.ArrowRight className="w-6 h-6 absolute top-0 left-0 transform -translate-x-8 transition-transform duration-500 group-hover:translate-x-0" />
              </div>
            </span>
          </a>
          
          <a
            href="https://respol.pl/kontakt-2/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-xl hover:bg-white/20 text-white border border-white/20 hover:border-white/40 px-8 py-5 rounded-2xl font-semibold text-lg transition-all duration-500 hover:scale-[1.02]"
          >
            <Icons.Phone className="w-5 h-5 group-hover:animate-wiggle" />
            Kontakt
            <Icons.ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </a>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {[
            { icon: Icons.Star, text: 'Ocena 4.8/5', subtext: 'Google Reviews' },
            { icon: Icons.Check, text: '21 lokalizacji', subtext: 'W całej Polsce' },
            { icon: Icons.Heart, text: '35 lat', subtext: 'Doświadczenia' },
          ].map((badge, idx) => (
            <div 
              key={idx}
              className="group flex items-center gap-3 bg-white/5 backdrop-blur-sm px-5 py-3 rounded-xl border border-white/10 hover:border-[#ee1215]/30 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-[#ee1215]/20 group-hover:bg-[#ee1215] flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                <badge.icon className="w-5 h-5 text-[#ee1215] group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="text-left">
                <p className="text-white font-bold text-sm">{badge.text}</p>
                <p className="text-white/50 text-xs">{badge.subtext}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Locations list */}
        <div className="mt-10 flex items-center justify-center gap-2 text-white/40 text-sm">
          <Icons.MapPin className="w-4 h-4" />
          <span className="tracking-wide">Warszawa • Kraków • Wrocław • Poznań • Gdańsk • Łódź • i więcej...</span>
        </div>
      </div>

      {/* Side decorative elements */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4">
        {[...Array(4)].map((_, i) => (
          <div 
            key={i} 
            className={`w-1.5 rounded-full bg-gradient-to-b from-transparent via-white/30 to-transparent transition-all duration-500 ${isHovering ? 'h-16 opacity-100' : 'h-10 opacity-50'}`}
            style={{ transitionDelay: `${i * 100}ms` }}
          />
        ))}
      </div>
      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4">
        {[...Array(4)].map((_, i) => (
          <div 
            key={i} 
            className={`w-1.5 rounded-full bg-gradient-to-b from-transparent via-white/30 to-transparent transition-all duration-500 ${isHovering ? 'h-16 opacity-100' : 'h-10 opacity-50'}`}
            style={{ transitionDelay: `${i * 100}ms` }}
          />
        ))}
      </div>

      {/* Decorative corner elements */}
      <div className="absolute bottom-20 left-10 w-32 h-32 opacity-10 hidden lg:block">
        <svg viewBox="0 0 100 100" fill="none">
          <circle cx="0" cy="100" r="80" stroke="white" strokeWidth="1" />
          <circle cx="0" cy="100" r="60" stroke="white" strokeWidth="1" />
          <circle cx="0" cy="100" r="40" stroke="white" strokeWidth="1" />
        </svg>
      </div>
      <div className="absolute top-20 right-10 w-32 h-32 opacity-10 hidden lg:block">
        <svg viewBox="0 0 100 100" fill="none">
          <circle cx="100" cy="0" r="80" stroke="white" strokeWidth="1" />
          <circle cx="100" cy="0" r="60" stroke="white" strokeWidth="1" />
          <circle cx="100" cy="0" r="40" stroke="white" strokeWidth="1" />
        </svg>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes draw-long {
          0% { stroke-dashoffset: 400; }
          100% { stroke-dashoffset: 0; }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.3; }
          25% { transform: translateY(-20px) translateX(10px); opacity: 0.6; }
          50% { transform: translateY(-35px) translateX(-10px); opacity: 0.8; }
          75% { transform: translateY(-20px) translateX(10px); opacity: 0.6; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-12deg); }
          75% { transform: rotate(12deg); }
        }
        
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        
        .animate-draw-long {
          stroke-dasharray: 400;
          stroke-dashoffset: 400;
          animation: draw-long 2s ease forwards 0.5s;
        }
        
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 25s linear infinite;
        }
        
        .group:hover .group-hover\\:animate-wiggle {
          animation: wiggle 0.5s ease-in-out;
        }
      `}</style>
    </section>
  );
}
