import React, { useState } from "react";

const Icons = {
  ArrowRight: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  ),
  Fire: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
    </svg>
  ),
  Wrench: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26" />
    </svg>
  ),
  Droplet: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a8 8 0 008-8c0-4.418-8-12-8-12S4 8.582 4 13a8 8 0 008 8z" />
    </svg>
  ),
  Sun: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </svg>
  ),
  Tool: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
    </svg>
  ),
};

const categories = [
  {
    name: "Technika Grzewcza",
    desc: "Kotły, pompy ciepła, grzejniki",
    href: "https://respol.pl/index.php/technika-grzewcza/",
    gradient: "from-orange-500 to-red-500",
    bgLight: "from-orange-50 to-orange-100/50",
    iconBg: "bg-gradient-to-br from-orange-100 to-orange-50",
    iconColor: "text-orange-500",
    hoverGlow: "group-hover:shadow-orange-500/25",
    icon: Icons.Fire,
    stats: "2500+ produktów",
  },
  {
    name: "Technika Instalacyjna",
    desc: "Rury, złączki, armatura",
    href: "https://respol.pl/index.php/technika-instalacyjna/",
    gradient: "from-blue-500 to-indigo-500",
    bgLight: "from-blue-50 to-blue-100/50",
    iconBg: "bg-gradient-to-br from-blue-100 to-blue-50",
    iconColor: "text-blue-500",
    hoverGlow: "group-hover:shadow-blue-500/25",
    icon: Icons.Wrench,
    stats: "5000+ produktów",
  },
  {
    name: "Technika Sanitarna",
    desc: "Łazienki, ceramika, baterie",
    href: "https://respol.pl/index.php/technika-sanitarna/",
    gradient: "from-sky-500 to-cyan-500",
    bgLight: "from-sky-50 to-sky-100/50",
    iconBg: "bg-gradient-to-br from-sky-100 to-sky-50",
    iconColor: "text-sky-500",
    hoverGlow: "group-hover:shadow-sky-500/25",
    icon: Icons.Droplet,
    stats: "3200+ produktów",
  },
  {
    name: "OZE",
    desc: "Fotowoltaika, pompy ciepła",
    href: "https://respol.pl/index.php/odnawialne-zrodla-energii-3/",
    gradient: "from-emerald-500 to-green-500",
    bgLight: "from-emerald-50 to-emerald-100/50",
    iconBg: "bg-gradient-to-br from-emerald-100 to-emerald-50",
    iconColor: "text-emerald-500",
    hoverGlow: "group-hover:shadow-emerald-500/25",
    icon: Icons.Sun,
    stats: "800+ produktów",
  },
  {
    name: "Narzędzia",
    desc: "Profesjonalny sprzęt",
    href: "https://respol.pl/katalog-produktow/",
    gradient: "from-slate-600 to-slate-700",
    bgLight: "from-slate-50 to-slate-100/50",
    iconBg: "bg-gradient-to-br from-slate-100 to-slate-50",
    iconColor: "text-slate-600",
    hoverGlow: "group-hover:shadow-slate-500/25",
    icon: Icons.Tool,
    stats: "1500+ produktów",
  },
];

export function Categories() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background matching Hero style */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/50 to-white" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-[#ee1215]/5 to-transparent rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-blue-500/5 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-orange-500/3 via-transparent to-emerald-500/3 rounded-full blur-3xl" />

      {/* Grid Pattern - matching Hero */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ee1215' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - matching Hero typography */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#ee1215]/10 to-[#ee1215]/5 backdrop-blur-sm text-[#ee1215] px-5 py-2.5 rounded-full text-sm font-bold mb-6 border border-[#ee1215]/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ee1215] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ee1215]" />
            </span>
            Nasza oferta
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            Kategorie{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#ee1215] via-[#ff4444] to-[#ee1215] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                produktów
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 8c50-6 100-6 196 2" stroke="url(#cat-underline)" strokeWidth="3" strokeLinecap="round" className="animate-draw" />
                <defs>
                  <linearGradient id="cat-underline" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ee1215" />
                    <stop offset="100%" stopColor="#ff6b6b" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-lg lg:text-xl leading-relaxed">
            Kompleksowa oferta dla profesjonalistów — ponad{" "}
            <span className="font-bold text-[#ee1215]">400 000</span> produktów 
            dostępnych od ręki lub na zamówienie.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <a
                key={category.name}
                href={category.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative bg-white/80 backdrop-blur-xl rounded-[1.5rem] p-6 lg:p-7 border border-white/50 shadow-lg shadow-gray-200/30 hover:shadow-2xl ${category.hoverGlow} hover:-translate-y-2 transition-all duration-500 flex flex-col h-full overflow-hidden`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Hover gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.bgLight} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Decorative gradient orb */}
                <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${category.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                
                {/* Floating particles on hover */}
                {isHovered && (
                  <>
                    <div className="absolute top-4 right-8 w-1 h-1 bg-current rounded-full animate-ping opacity-30" style={{ color: category.iconColor.replace('text-', '') }} />
                    <div className="absolute bottom-8 right-4 w-1.5 h-1.5 bg-current rounded-full animate-pulse opacity-40" style={{ color: category.iconColor.replace('text-', '') }} />
                  </>
                )}

                <div className="relative z-10">
                  {/* Icon with gradient background */}
                  <div className={`relative w-16 h-16 rounded-2xl ${category.iconBg} flex items-center justify-center mb-6 transition-all duration-500 shadow-sm group-hover:shadow-lg group-hover:scale-110`}>
                    {/* Icon glow effect */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    <IconComponent className={`relative w-8 h-8 ${category.iconColor} group-hover:text-white transition-colors duration-500`} />
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-[#ee1215] transition-colors duration-300">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-3">
                      {category.desc}
                    </p>
                    
                    {/* Stats badge */}
                    <span className="inline-flex items-center text-xs font-semibold text-gray-400 bg-gray-100/80 px-3 py-1.5 rounded-full group-hover:bg-[#ee1215]/10 group-hover:text-[#ee1215] transition-all duration-300">
                      {category.stats}
                    </span>
                  </div>

                  {/* CTA with animated arrow */}
                  <div className="mt-6 flex items-center text-sm font-semibold text-gray-400 group-hover:text-[#ee1215] transition-colors duration-300">
                    <span>Zobacz produkty</span>
                    <div className="relative w-5 h-5 ml-2 overflow-hidden">
                      <Icons.ArrowRight className="w-5 h-5 transform transition-transform duration-500 group-hover:translate-x-6" />
                      <Icons.ArrowRight className="w-5 h-5 absolute top-0 left-0 transform -translate-x-6 transition-transform duration-500 group-hover:translate-x-0" />
                    </div>
                  </div>
                </div>

                {/* Bottom decorative line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${category.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </a>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 lg:mt-20 text-center">
          <a
            href="https://respol.pl/katalog-produktow/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-white/80 backdrop-blur-xl text-gray-700 hover:text-[#ee1215] px-8 py-4 rounded-2xl font-semibold transition-all duration-500 shadow-lg shadow-gray-200/30 hover:shadow-xl hover:shadow-[#ee1215]/10 border border-white/50 hover:border-[#ee1215]/20"
          >
            <span>Zobacz pełny katalog produktów</span>
            <div className="relative w-5 h-5 overflow-hidden">
              <Icons.ArrowRight className="w-5 h-5 transform transition-transform duration-500 group-hover:translate-x-6" />
              <Icons.ArrowRight className="w-5 h-5 absolute top-0 left-0 transform -translate-x-6 transition-transform duration-500 group-hover:translate-x-0" />
            </div>
          </a>
        </div>
      </div>

      {/* Matching animations from Hero */}
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes draw {
          0% { stroke-dashoffset: 200; }
          100% { stroke-dashoffset: 0; }
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
