import React, { useMemo } from "react";

export function Categories() {
  const categories = useMemo(() => [
    { name: "Technika Grzewcza", desc: "Kotły, pompy ciepła, grzejniki", href: "https://respol.pl/index.php/technika-grzewcza/", color: "from-orange-500/10 to-red-500/10", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" /></svg> },
    { name: "Technika Instalacyjna", desc: "Rury, złączki, armatura", href: "https://respol.pl/index.php/technika-instalacyjna/", color: "from-blue-500/10 to-cyan-500/10", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26" /></svg> },
    { name: "Technika Sanitarna", desc: "Łazienki, ceramika, baterie", href: "https://respol.pl/index.php/technika-sanitarna/", color: "from-sky-500/10 to-blue-500/10", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
    { name: "OZE", desc: "Fotowoltaika, pompy ciepła", href: "https://respol.pl/index.php/odnawialne-zrodla-energii-3/", color: "from-green-500/10 to-emerald-500/10", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg> },
    { name: "Narzędzia", desc: "Profesjonalny sprzęt", href: "https://respol.pl/katalog-produktow/", color: "from-gray-500/10 to-slate-500/10", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" /></svg> },
  ], []);

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Kategorie produktów</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">Kompleksowa oferta dla profesjonalistów — ponad 400 000 produktów</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {categories.map((c) => (
            <a key={c.name} href={c.href} target="_blank" rel="noopener noreferrer" className={`group relative bg-gradient-to-br ${c.color} hover:shadow-xl rounded-2xl p-6 lg:p-8 transition-all duration-300 border border-transparent hover:border-gray-200`}>
              <div className="text-[#ee1215] mb-4 transform group-hover:-translate-y-1 group-hover:scale-110 transition-all duration-300">{c.icon}</div>
              <h3 className="font-bold text-gray-900 text-sm lg:text-base mb-1 group-hover:text-[#ee1215] transition-colors">{c.name}</h3>
              <p className="text-xs text-gray-500 hidden lg:block">{c.desc}</p>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all">
                <svg className="w-4 h-4 text-[#ee1215]" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
