const brands = [
  {
    name: 'ResLine',
    logo: 'https://respol.pl/wp-content/uploads/2021/08/ResLine_logo_FINAL-1-1024x395.png',
    href: 'https://respol.pl/wp-content/uploads/2021/09/resline_a4_2019-printt.pdf',
  },
  {
    name: 'ITAP',
    logo: 'https://respol.pl/wp-content/uploads/2022/03/itap-bez-tla.png',
    href: 'https://www.itap.it/en/',
  },
  {
    name: 'Concept',
    logo: 'https://respol.pl/wp-content/uploads/2021/12/CONCEPT.png',
    href: 'https://concept.ik.pl/',
  },
  {
    name: 'Viteco',
    logo: 'https://respol.pl/wp-content/uploads/2021/12/VITECO.png',
    href: 'https://viteco.pl/',
  },
];

export function ExclusiveOffer() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Nagłówek */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-semibold mb-4">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Wyłączna dystrybucja
          </span>
          
          <h2 className="text-3xl lg:text-5xl font-extrabold text-gray-900">
            Oferta na{' '}
            <span className="relative inline-block text-red-600">
              wyłączność
              {/* Podkreślenie */}
              <svg 
                className="absolute -bottom-2 left-0 w-full" 
                viewBox="0 0 200 8" 
                preserveAspectRatio="none"
                style={{ height: '8px' }}
              >
                <path 
                  d="M0,4 Q50,0 100,4 T200,4" 
                  fill="none" 
                  stroke="#ee1215" 
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.4"
                />
              </svg>
            </span>
          </h2>
          
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            Marki własne i produkty dostępne <strong className="text-gray-900">wyłącznie w sieci Respol</strong>. 
            Sprawdzone rozwiązania w konkurencyjnych cenach.
          </p>
        </div>

        {/* Loga */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {brands.map((brand) => (
            <a
              key={brand.name}
              href={brand.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center p-8 lg:p-12 bg-gray-50 hover:bg-white rounded-2xl border border-gray-100 hover:border-red-200 hover:shadow-lg transition-all duration-300"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-h-10 lg:max-h-14 w-auto grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
              />
            </a>
          ))}
        </div>

        {/* Link do katalogu */}
        <div className="mt-12 text-center">
          <a 
            href="https://respol.pl/katalog-produktow/" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold text-lg transition-colors group"
          >
            Zobacz pełny katalog produktów
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
