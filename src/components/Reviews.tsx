const reviews = [
  {
    name: 'Jacek Wójcik',
    date: '2025-07-09',
    text: 'Gorąco polecam, doradztwo mega i wszystko w jednym miejscu.',
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocK8gXV2XguOfRCwFrYLArpKAuMVtv_OJAA1McbR8AcqlfkThsXx=w80-h80-c-rp-mo-br100',
    rating: 5,
  },
  {
    name: 'Marcin Dudek',
    date: '2025-06-04',
    text: 'Jestem drugi raz w tym sklepie i jestem pod wrażeniem obsługi i asortymentu. Fachowej wiedzy sprzedawców. Serdecznie polecam ten sklep.',
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjWNZuytDg7WaHCi1vbv0xMH76r4D4-hMHcubbBNpcPPi9AxdcwV=w80-h80-c-rp-mo-ba3-br100',
    rating: 5,
  },
  {
    name: 'Roman Żuk',
    date: '2025-06-04',
    text: 'Chciałbym podziękować serdecznie Panu Jerzemu pracującemu w Respol ul. Bukowiecka za sprzedaż bardzo nietypowej złączki którą szukałem w całej Warszawie i nie kupiłem. Dziękuję za pomoc.',
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocJ5QBIbxt7r-4IzYJcEZg68UyCoDkrstWnqvmTtSTTLzNhRjQ=w80-h80-c-rp-mo-br100',
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-amber-400' : 'text-gray-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Nagłówek */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Opinie naszych klientów
          </h2>
          
          {/* Rating summary */}
          <div className="inline-flex items-center gap-4 bg-gray-50 rounded-full px-6 py-3">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <div className="text-gray-600">
              <span className="font-bold text-gray-900">4.8</span> · <span className="font-semibold text-gray-900">404</span> opinii
            </div>
            <img 
              src="https://cdn.trustindex.io/assets/platform/Google/logo.svg" 
              alt="Google" 
              className="h-5"
            />
          </div>
        </div>

        {/* Karty opinii */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 lg:p-8 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{review.name}</h4>
                    <p className="text-xs text-gray-500">{review.date}</p>
                  </div>
                </div>
                <img 
                  src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" 
                  alt="Google" 
                  className="w-6 h-6"
                />
              </div>
              
              {/* Rating */}
              <div className="mb-4">
                <StarRating rating={review.rating} />
              </div>
              
              {/* Text */}
              <p className="text-gray-600 text-sm leading-relaxed">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>

        {/* Link do Google */}
        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/maps/place/Respol+Hurtownia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md px-6 py-3 rounded-xl font-semibold text-gray-700 transition-all"
          >
            <img 
              src="https://cdn.trustindex.io/assets/platform/Google/logo.svg" 
              alt="Google" 
              className="h-5"
            />
            Zobacz wszystkie opinie
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
