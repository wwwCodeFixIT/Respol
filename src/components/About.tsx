import { useEffect, useState, useRef } from 'react';

function AnimatedCounter({ end, suffix = '' }: { end: number; suffix?: string }) {
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

    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, end]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const features = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    text: 'Obsługa deweloperów, sklepów, instalatorów i architektów',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    text: 'Ponad 200 wykwalifikowanych pracowników',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    text: 'Partner Instal-Konsorcjum i grupy EDT GmbH',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    text: '100% kapitału polskiego',
  },
];

const stats = [
  { value: 35, label: 'lat doświadczenia', suffix: '' },
  { value: 21, label: 'oddziałów w Polsce', suffix: '' },
  { value: 400, label: 'tysięcy produktów', suffix: 'k+' },
  { value: 200, label: 'pracowników', suffix: '+' },
];

export function About() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Lewa strona - tekst */}
          <div>
            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-100 text-red-700 rounded-full text-xs font-semibold mb-6">
              <span className="w-1.5 h-1.5 bg-red-600 rounded-full" />
              Od 1989 roku
            </span>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              O Firmie Respol
            </h2>
            
            <p className="text-xl text-gray-700 font-medium mb-6 leading-relaxed">
              Kompleksowa obsługa dla wymagającego Klienta.
            </p>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Firma Respol jest liderem wśród hurtowni z zakresu techniki grzewczej, 
              sanitarnej, instalacyjnej oraz odnawialnych źródeł energii. Jesteśmy jedną 
              z nielicznych firm ogólnopolskich, która posiada 100% kapitału polskiego.
            </p>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Oferujemy ponad 400 tys. produktów czołowych producentów krajowych i zagranicznych, 
              a dzięki dużym zasobom magazynowym większość oferowanych towarów dostępna jest na bieżąco.
            </p>
            
            {/* Lista cech */}
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0">
                    {feature.icon}
                  </div>
                  <span className="text-gray-700 pt-2">{feature.text}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-10">
              <a 
                href="https://respol.pl/about/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold transition-colors group"
              >
                Poznaj nas bliżej
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Prawa strona - liczby */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-6 lg:p-8 text-center shadow-sm border border-gray-100"
              >
                <div className="text-4xl lg:text-5xl font-bold text-red-600 mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-gray-500 font-medium text-sm uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
