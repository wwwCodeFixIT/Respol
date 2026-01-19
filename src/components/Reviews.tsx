import React, { useState, useRef, useEffect } from 'react';

const Icons = {
  ArrowRight: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  ),
  Star: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  ),
  Quote: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
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
  ExternalLink: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  ),
};

interface Review {
  name: string;
  date: string;
  text: string;
  avatar: string;
  rating: number;
  location?: string;
}

const reviews: Review[] = [
  {
    name: 'Jacek Wójcik',
    date: '9 lipca 2025',
    text: 'Gorąco polecam, doradztwo mega i wszystko w jednym miejscu. Profesjonalna obsługa i świetne ceny!',
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocK8gXV2XguOfRCwFrYLArpKAuMVtv_OJAA1McbR8AcqlfkThsXx=w80-h80-c-rp-mo-br100',
    rating: 5,
    location: 'Warszawa',
  },
  {
    name: 'Marcin Dudek',
    date: '4 czerwca 2025',
    text: 'Jestem drugi raz w tym sklepie i jestem pod wrażeniem obsługi i asortymentu. Fachowej wiedzy sprzedawców. Serdecznie polecam ten sklep.',
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjWNZuytDg7WaHCi1vbv0xMH76r4D4-hMHcubbBNpcPPi9AxdcwV=w80-h80-c-rp-mo-ba3-br100',
    rating: 5,
    location: 'Kraków',
  },
  {
    name: 'Roman Żuk',
    date: '4 czerwca 2025',
    text: 'Chciałbym podziękować serdecznie Panu Jerzemu pracującemu w Respol ul. Bukowiecka za sprzedaż bardzo nietypowej złączki którą szukałem w całej Warszawie.',
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocJ5QBIbxt7r-4IzYJcEZg68UyCoDkrstWnqvmTtSTTLzNhRjQ=w80-h80-c-rp-mo-br100',
    rating: 5,
    location: 'Warszawa',
  },
];

function StarRating({ rating, size = 'sm' }: { rating: number; size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Icons.Star
          key={i}
          className={`${sizeClasses[size]} ${
            i < rating 
              ? 'text-amber-400' 
              : 'text-gray-200'
          } transition-transform hover:scale-110`}
        />
      ))}
    </div>
  );
}

function AnimatedNumber({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 1500;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

export function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-amber-50/30" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-amber-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-tl from-[#ee1215]/5 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/3 via-transparent to-amber-500/3 rounded-full blur-3xl" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ee1215' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 bg-gradient-to-r from-amber-500/15 to-amber-500/5 backdrop-blur-sm text-amber-600 px-5 py-2.5 rounded-full text-sm font-bold mb-6 border border-amber-500/10 shadow-lg shadow-amber-500/5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500" />
            </span>
            Opinie klientów
          </div>

          {/* Title */}
<h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 tracking-tight">
  <span className="relative inline-block">
    <span className="bg-gradient-to-r from-[#ee1215] via-[#ff4444] to-[#ee1215] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
      Zaufali
    </span>
    <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 140 12" fill="none">
      <path d="M2 8c35-6 70-6 136 2" stroke="url(#reviews-underline)" strokeWidth="4" strokeLinecap="round" className="animate-draw" />
      <defs>
        <linearGradient id="reviews-underline" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ee1215" />
          <stop offset="100%" stopColor="#ff6b6b" />
        </linearGradient>
      </defs>
    </svg>
  </span>
  {" "}nam Klienci
</h2>

          {/* Rating Summary Card */}
          <a 
            href="https://www.google.com/maps/place/Respol+Hurtownia" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-5 bg-white/80 backdrop-blur-xl border border-white/50 shadow-xl shadow-gray-200/30 hover:shadow-2xl rounded-2xl px-8 py-5 transition-all duration-500 hover:-translate-y-1 mt-8"
          >
            {/* Rating Score */}
            <div className="flex items-center gap-3 pr-5 border-r border-gray-200">
              <div className="relative">
                <div className="absolute inset-0 bg-amber-400 rounded-xl blur-lg opacity-30" />
                <div className="relative text-4xl font-black text-gray-900">
                  4.8
                </div>
              </div>
              <div className="flex flex-col items-start">
                <StarRating rating={5} size="md" />
                <span className="text-xs text-gray-500 mt-1">na 5.0</span>
              </div>
            </div>

            {/* Reviews Count */}
            <div className="flex items-center gap-4">
              <div className="text-left">
                <div className="text-2xl font-bold text-gray-900">
                  <AnimatedNumber value={404} />
                </div>
                <span className="text-sm text-gray-500">opinii</span>
              </div>
              
              {/* Google Logo */}
              <div className="flex items-center gap-2 pl-4 border-l border-gray-200">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" 
                  alt="Google" 
                  className="h-6 opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <Icons.ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#ee1215] transition-colors" />
              </div>
            </div>
          </a>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-xl rounded-[1.5rem] p-6 lg:p-8 border border-white/50 shadow-lg shadow-gray-200/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full overflow-hidden"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-orange-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Decorative gradient orb */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Icons.Quote className="w-12 h-12 text-[#ee1215]" />
              </div>

              {/* Floating sparkles on hover */}
              {hoveredCard === index && (
                <>
                  <div className="absolute top-8 right-20 w-1 h-1 bg-amber-400 rounded-full animate-ping opacity-60" />
                  <div className="absolute bottom-20 right-8 w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse opacity-40" />
                </>
              )}

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-4">
                    {/* Avatar with glow */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="relative w-14 h-14 rounded-full object-cover ring-3 ring-white shadow-lg group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Verified badge */}
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center ring-2 ring-white">
                        <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg group-hover:text-[#ee1215] transition-colors">
                        {review.name}
                      </h4>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-xs font-medium text-gray-400">{review.date}</span>
                        {review.location && (
                          <>
                            <span className="w-1 h-1 bg-gray-300 rounded-full" />
                            <span className="text-xs font-medium text-gray-400">{review.location}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Google icon */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gray-50 group-hover:bg-white flex items-center justify-center shadow-sm transition-colors">
                    <img 
                      src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" 
                      alt="Google" 
                      className="w-5 h-5"
                    />
                  </div>
                </div>
                
                {/* Rating */}
                <div className="mb-5">
                  <StarRating rating={review.rating} size="sm" />
                </div>
                
                {/* Review Text */}
                <p className="text-gray-600 text-[15px] leading-relaxed flex-grow relative">
                  <span className="text-[#ee1215] text-xl font-serif">"</span>
                  {review.text}
                  <span className="text-[#ee1215] text-xl font-serif">"</span>
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {[
            { value: 98, suffix: '%', label: 'Zadowolonych klientów' },
            { value: 5, suffix: '/5', label: 'Średnia ocena' },
            { value: 35, suffix: '+', label: 'Lat zaufania' },
            { value: 10, suffix: 'k+', label: 'Obsłużonych firm' },
          ].map((stat, idx) => (
            <div 
              key={idx}
              className="group bg-white/60 backdrop-blur-xl rounded-2xl p-5 lg:p-6 border border-white/50 shadow-lg shadow-gray-200/20 hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="text-2xl lg:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#ee1215] to-[#ff4444]">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-xs lg:text-sm text-gray-500 uppercase tracking-wider font-semibold mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 lg:mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            {/* Primary CTA */}
            <a
              href="https://www.google.com/maps/place/Respol+Hurtownia+Techniki+Grzewczej+i+Sanitarnej/@52.275556,21.066944,17z/data=!4m8!3m7!1s0x471ecd50d30c5e71:0x50772f902446700!8m2!3d52.275556!4d21.066944!9m1!1b1!16s%2Fg%2F1tcws_0x?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#1a73e8] to-[#1557b0] hover:from-[#1557b0] hover:to-[#0d47a1] text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/40 hover:scale-[1.02]"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Napisz opinię na Google
              <div className="relative w-5 h-5 overflow-hidden">
                <Icons.ArrowRight className="w-5 h-5 transform transition-transform duration-500 group-hover:translate-x-6" />
                <Icons.ArrowRight className="w-5 h-5 absolute top-0 left-0 transform -translate-x-6 transition-transform duration-500 group-hover:translate-x-0" />
              </div>
            </a>

            {/* Secondary CTA */}
            <a
              href="https://www.google.com/maps/place/Respol+Hurtownia"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-white/80 backdrop-blur-xl text-gray-700 hover:text-[#ee1215] px-6 py-4 rounded-2xl font-semibold transition-all duration-500 shadow-lg shadow-gray-200/30 hover:shadow-xl border border-white/50 hover:border-[#ee1215]/20"
            >
              Zobacz wszystkie opinie
              <Icons.ExternalLink className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
          
          <p className="mt-6 text-gray-500 flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Twoja opinia jest dla nas najważniejsza!
          </p>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes draw {
          0% { stroke-dashoffset: 140; }
          100% { stroke-dashoffset: 0; }
        }
        
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        
        .animate-draw {
          stroke-dasharray: 140;
          stroke-dashoffset: 140;
          animation: draw 1.5s ease forwards 0.5s;
        }
      `}</style>
    </section>
  );
}
