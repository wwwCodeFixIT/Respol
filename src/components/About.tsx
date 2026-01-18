import React, { useState, useEffect, useRef } from "react";

const Icons = {
  ArrowRight: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  ),
  Check: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
  ),
  Building: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  Users: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  Package: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  ),
  Clock: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Shield: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
};

function AnimatedCounter({ end, suffix = "", prefix = "" }: { end: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const duration = 2000;
    const step = end / (duration / 16);
    const t = window.setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        window.clearInterval(t);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => window.clearInterval(t);
  }, [visible, end]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{count}{suffix}
    </span>
  );
}

export function About() {
  const stats = [
    { 
      value: 35, 
      label: "lat doświadczenia", 
      suffix: "", 
      icon: Icons.Clock,
      gradient: "from-amber-500 to-orange-500",
      bgGradient: "from-amber-50 to-orange-50",
    },
    { 
      value: 21, 
      label: "oddziałów w Polsce", 
      suffix: "", 
      icon: Icons.Building,
      gradient: "from-blue-500 to-indigo-500",
      bgGradient: "from-blue-50 to-indigo-50",
    },
    { 
      value: 400, 
      label: "tysięcy produktów", 
      suffix: "k+", 
      icon: Icons.Package,
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50",
    },
    { 
      value: 200, 
      label: "pracowników", 
      suffix: "+", 
      icon: Icons.Users,
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
    },
  ];

  const bullets = [
    {
      text: "Obsługujemy deweloperów, sklepy i hurtownie, instalatorów, architektów oraz podmioty publiczne.",
      highlight: "deweloperów, sklepy i hurtownie",
    },
    {
      text: "W hurtowniach zatrudniamy ponad 200 pracowników, a oddziały zlokalizowane są w największych regionach Polski.",
      highlight: "200 pracowników",
    },
    {
      text: "Jesteśmy wiodącym partnerem spółki Instal-Konsorcjum, należącej do grupy EDT GmbH.",
      highlight: "Instal-Konsorcjum",
    },
  ];

  const features = [
    { icon: Icons.Shield, text: "100% kapitału polskiego" },
    { icon: Icons.Package, text: "Kompleksowa oferta" },
    { icon: Icons.Users, text: "Profesjonalna obsługa" },
  ];

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50/30 to-red-50/20" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#ee1215]/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-gradient-to-r from-orange-500/3 to-transparent rounded-full blur-3xl animate-pulse" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ee1215' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Column - Content */}
          <div className="relative">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#ee1215]/15 to-[#ee1215]/5 backdrop-blur-sm text-[#ee1215] px-5 py-2.5 rounded-full text-sm font-bold mb-8 border border-[#ee1215]/10 shadow-lg shadow-[#ee1215]/5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ee1215] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ee1215]" />
              </span>
              Od 1989 roku
            </div>

            {/* Title */}
            <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tight">
              O{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#ee1215] via-[#ff4444] to-[#ee1215] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                  Firmie
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 120 12" fill="none">
                  <path d="M2 8c30-6 60-6 116 2" stroke="url(#about-underline)" strokeWidth="4" strokeLinecap="round" className="animate-draw" />
                  <defs>
                    <linearGradient id="about-underline" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#ee1215" />
                      <stop offset="100%" stopColor="#ff6b6b" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-xl lg:text-2xl text-gray-800 font-semibold mb-6 leading-relaxed">
              Respol – Kompleksowa obsługa dla{" "}
              <span className="text-[#ee1215]">wymagającego Klienta</span>.
            </p>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Od 1989 roku firma Respol jest liderem wśród hurtowni z zakresu techniki grzewczej, 
              sanitarnej, instalacyjnej oraz odnawialnych źródeł energii. Jesteśmy jedną z nielicznych 
              firm ogólnopolskich, która posiada <strong className="text-gray-900">100% kapitału polskiego</strong>.
            </p>

            {/* Feature Tags */}
            <div className="flex flex-wrap gap-3 mb-10">
              {features.map((feature, idx) => (
                <div 
                  key={idx}
                  className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2.5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#ee1215]/20 transition-all duration-300"
                >
                  <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-gray-100">
                    <feature.icon className="w-4 h-4 text-gray-600" />
                  </span>
                  <span className="text-sm font-medium text-gray-700">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Bullets */}
            <ul className="space-y-5 mb-12">
              {bullets.map((bullet, idx) => (
                <li 
                  key={idx} 
                  className="group flex items-start gap-4 bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-transparent hover:border-[#ee1215]/10 hover:bg-white/80 transition-all duration-300"
                >
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-[#ee1215] rounded-xl blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                    <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#ee1215]/10 to-[#ee1215]/5 group-hover:from-[#ee1215] group-hover:to-[#d60e11] flex items-center justify-center transition-all duration-300">
                      <Icons.Check className="w-5 h-5 text-[#ee1215] group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed pt-2">
                    {bullet.text}
                  </p>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <a 
              href="https://respol.pl/about/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#ee1215] to-[#d60e11] hover:from-[#d60e11] hover:to-[#c00d10] text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 shadow-xl shadow-[#ee1215]/25 hover:shadow-2xl hover:shadow-[#ee1215]/40 hover:scale-[1.02]"
            >
              Poznaj nas bliżej
              <div className="relative w-6 h-6 overflow-hidden">
                <Icons.ArrowRight className="w-6 h-6 transform transition-transform duration-500 group-hover:translate-x-8" />
                <Icons.ArrowRight className="w-6 h-6 absolute top-0 left-0 transform -translate-x-8 transition-transform duration-500 group-hover:translate-x-0" />
              </div>
            </a>
          </div>

          {/* Right Column - Stats */}
          <div className="relative">
            {/* Decorative element */}
            <div className="absolute -top-10 -right-10 w-40 h-40 border-2 border-dashed border-gray-200 rounded-full opacity-50" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 border-2 border-dashed border-[#ee1215]/20 rounded-full opacity-50" />

            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              {stats.map((stat, idx) => {
                const IconComponent = stat.icon;
                return (
                  <div 
                    key={idx} 
                    className="group relative bg-white/80 backdrop-blur-xl rounded-[1.5rem] p-6 lg:p-8 border border-white/50 shadow-lg shadow-gray-200/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                  >
                    {/* Hover gradient background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    {/* Decorative gradient orb */}
                    <div className={`absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br ${stat.gradient} rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />

                    <div className="relative z-10">
                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.bgGradient} group-hover:bg-gradient-to-br group-hover:${stat.gradient} flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg`}>
                        <IconComponent className={`w-6 h-6 text-gray-500 group-hover:text-white transition-colors duration-500`} />
                      </div>

                      {/* Counter */}
                      <div className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#ee1215] to-[#ff4444] mb-2">
                        <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                      </div>

                      {/* Label */}
                      <p className="text-gray-500 text-xs lg:text-sm uppercase tracking-[0.15em] font-semibold group-hover:text-gray-700 transition-colors">
                        {stat.label}
                      </p>
                    </div>

                    {/* Bottom accent line */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                  </div>
                );
              })}
            </div>

            {/* Additional info card */}
            <div className="mt-6 relative bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] rounded-[1.5rem] p-6 lg:p-8 overflow-hidden shadow-xl">
              {/* Glow effects */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#ee1215] rounded-full blur-3xl opacity-20" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#ee1215] rounded-full blur-2xl opacity-10" />
              
              {/* Sparkles */}
              <div className="absolute top-6 right-6 w-1.5 h-1.5 bg-white rounded-full animate-pulse opacity-60" />
              <div className="absolute top-10 right-12 w-1 h-1 bg-white rounded-full animate-pulse opacity-40" style={{ animationDelay: '0.5s' }} />
              <div className="absolute bottom-8 right-8 w-1 h-1 bg-[#ee1215] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />

              <div className="relative z-10 flex items-center gap-6">
                <div className="relative flex-shrink-0">
                  <div className="absolute inset-0 bg-[#ee1215] rounded-2xl blur-lg opacity-50" />
                  <div className="relative w-16 h-16 bg-gradient-to-br from-[#ee1215] to-[#c00d10] rounded-2xl flex items-center justify-center shadow-xl">
                    <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-[0.2em] font-semibold mb-1">
                    Zasięg
                  </p>
                  <p className="text-xl font-black text-white">
                    Cała Polska
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    21 oddziałów w całym kraju
                  </p>
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute bottom-0 right-0 w-20 h-20 opacity-10">
                <svg viewBox="0 0 80 80" fill="none">
                  <circle cx="80" cy="80" r="40" stroke="white" strokeWidth="1" />
                  <circle cx="80" cy="80" r="30" stroke="white" strokeWidth="1" />
                  <circle cx="80" cy="80" r="20" stroke="white" strokeWidth="1" />
                </svg>
              </div>
            </div>
          </div>
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
          0% { stroke-dashoffset: 120; }
          100% { stroke-dashoffset: 0; }
        }
        
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        
        .animate-draw {
          stroke-dasharray: 120;
          stroke-dashoffset: 120;
          animation: draw 1.5s ease forwards 0.5s;
        }
      `}</style>
    </section>
  );
}
