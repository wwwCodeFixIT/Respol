const partners = [
  { name: 'Almeva', logo: 'https://respol.pl/wp-content/uploads/2021/08/1.png', href: 'http://www.almeva.pl/' },
  { name: 'APE', logo: 'https://respol.pl/wp-content/uploads/2021/08/2.png', href: 'http://www.ape-raccorderie.com/' },
  { name: 'BMETERS', logo: 'https://respol.pl/wp-content/uploads/2021/08/bmeters.jpg', href: 'https://bmeters.pl/' },
  { name: 'De Dietrich', logo: 'https://respol.pl/wp-content/uploads/2021/08/dedietrich_new_logo-1024x221.png', href: 'https://dedietrich.pl/' },
  { name: 'Hutterer-Lechner', logo: 'https://respol.pl/wp-content/uploads/2021/08/10.png', href: 'https://www.hutterer-lechner.com/pl/' },
  { name: 'Immergas', logo: 'https://respol.pl/wp-content/uploads/2021/08/IMMERGAS.png', href: 'https://www.immergas.pl/' },
  { name: 'ITAP', logo: 'https://respol.pl/wp-content/uploads/2021/08/11.png', href: 'https://www.itap.it/' },
  { name: 'KAN-therm', logo: 'https://respol.pl/wp-content/uploads/2021/08/13.png', href: 'http://pl.kan-therm.com/' },
  { name: 'Magnaplast', logo: 'https://respol.pl/wp-content/uploads/2023/01/logo-Magnaplast-1024x251.png', href: 'https://magnaplast.pl/' },
  { name: 'Purmo', logo: 'https://respol.pl/wp-content/uploads/2021/09/Purmo.png', href: 'https://global.purmo.com/' },
  { name: 'Resideo', logo: 'https://respol.pl/wp-content/uploads/2025/04/Resideo_Logo_RGB_Blk_4K-1024x399.png', href: 'https://www.resideo.com/pl/pl/' },
  { name: 'Salus', logo: 'https://respol.pl/wp-content/uploads/2022/04/logo-salus-classic-1024x174.png', href: 'https://salus-controls.pl/' },
  { name: 'Stiebel Eltron', logo: 'https://respol.pl/wp-content/uploads/2023/04/Logo_STIEBEL-ELTRON_CMYK_Red_Black-1024x165.png', href: 'https://www.stiebel-eltron.pl/' },
  { name: 'Uponor', logo: 'https://respol.pl/wp-content/uploads/2021/08/20-e1637697547409.png', href: 'https://www.uponor.pl/' },
  { name: 'Vaillant', logo: 'https://respol.pl/wp-content/uploads/2021/08/21-e1637697711462.png', href: 'https://www.vaillant.pl/' },
];

export function Partners() {
  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Nagłówek */}
        <div className="text-center mb-10 lg:mb-14">
          <span className="inline-block px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xs font-semibold mb-4">
            Zaufane marki
          </span>
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            Nasi partnerzy
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Współpracujemy z najlepszymi producentami w branży grzewczej, sanitarnej i instalacyjnej
          </p>
        </div>

        {/* Loga - siatka */}
        <div className="grid grid-cols-3 md:grid-cols-5 gap-4 lg:gap-6">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center p-4 lg:p-6 bg-white rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-red-100"
              title={partner.name}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-8 lg:max-h-10 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
              />
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a 
            href="https://respol.pl/zaufali-nam/" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold transition-colors group"
          >
            Zobacz wszystkich partnerów
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
