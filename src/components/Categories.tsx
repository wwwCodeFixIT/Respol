import React from "react";

const categories = [
  {
    name: "Technika Grzewcza",
    desc: "Kotły, pompy ciepła, grzejniki",
    href: "https://respol.pl/index.php/technika-grzewcza/",
    // Kolory: tło / tekst / hover-tło
    colors: "bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
      </svg>
    ),
  },
  {
    name: "Technika Instalacyjna",
    desc: "Rury, złączki, armatura",
    href: "https://respol.pl/index.php/technika-instalacyjna/",
    colors: "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26" />
      </svg>
    ),
  },
  {
    name: "Technika Sanitarna",
    desc: "Łazienki, ceramika, baterie",
    href: "https://respol.pl/index.php/technika-sanitarna/",
    colors: "bg-sky-50 text-sky-600 group-hover:bg-sky-600 group-hover:text-white",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: "OZE",
    desc: "Fotowoltaika, pompy ciepła",
    href: "https://respol.pl/index.php/odnawialne-zrodla-energii-3/",
    colors: "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    name: "Narzędzia",
    desc: "Profesjonalny sprzęt",
    href: "https://respol.pl/katalog-produktow/",
    colors: "bg-slate-100 text-slate-600 group-hover:bg-slate-700 group-hover:text-white",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
      </svg>
    ),
  },
];

export function Categories() {
  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Ozdobne tło (opcjonalne) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gray-50 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-50 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Kategorie produktów
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            Kompleksowa oferta dla profesjonalistów — ponad 400 000 produktów dostępnych od ręki lub na zamówienie.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-6">
          {categories.map((c) => (
            <a
              key={c.name}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1 transition-all duration-300 flex flex-col items-start h-full"
            >
              {/* Ikona z dynamicznym tłem */}
              <div 
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${c.colors}`}
              >
                {c.icon}
              </div>

              {/* Treść */}
              <div className="flex-grow">
                <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-[#ee1215] transition-colors">
                  {c.name}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {c.desc}
                </p>
              </div>

              {/* Strzałka na dole */}
              <div className="mt-6 flex items-center text-sm font-semibold text-gray-400 group-hover:text-[#ee1215] transition-colors">
                Zobacz produkty
                <svg 
                  className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
