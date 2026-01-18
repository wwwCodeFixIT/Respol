import React from 'react';

interface Review {
  name: string;
  date: string;
  text: string;
  avatar: string;
  rating: number;
}

const reviews: Review[] = [
  {
    name: 'Jacek Wójcik',
    date: '9 lipca 2025',
    text: 'Gorąco polecam, doradztwo mega i wszystko w jednym miejscu.',
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocK8gXV2XguOfRCwFrYLArpKAuMVtv_OJAA1McbR8AcqlfkThsXx=w80-h80-c-rp-mo-br100',
    rating: 5,
  },
  {
    name: 'Marcin Dudek',
    date: '4 czerwca 2025',
    text: 'Jestem drugi raz w tym sklepie i jestem pod wrażeniem obsługi i asortymentu. Fachowej wiedzy sprzedawców. Serdecznie polecam ten sklep.',
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjWNZuytDg7WaHCi1vbv0xMH76r4D4-hMHcubbBNpcPPi9AxdcwV=w80-h80-c-rp-mo-ba3-br100',
    rating: 5,
  },
  {
    name: 'Roman Żuk',
    date: '4 czerwca 2025',
    text: 'Chciałbym podziękować serdecznie Panu Jerzemu pracującemu w Respol ul. Bukowiecka za sprzedaż bardzo nietypowej złączki którą szukałem w całej Warszawie i nie kupiłem. Dziękuję za pomoc.',
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocJ5QBIbxt7r-4IzYJcEZg68UyCoDkrstWnqvmTtSTTLzNhRjQ=w80-h80-c-rp-mo-br100',
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-[#fbbf24] fill-[#fbbf24]' : 'text-gray-200 fill-gray-200'}`}
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
    <section className="py-16 lg:py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Nagłówek */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Zaufali nam Klienci
          </h2>
          
          {/* Rating summary */}
          <a 
            href="https://www.google.com/maps/place/Respol+Hurtownia" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-white border border-gray-100 shadow-sm hover:shadow-md rounded-full px-6 py-3 transition-all duration-300 group"
          >
            <div className="flex items-center gap-2 border-r border-gray-200 pr-4">
              <span className="font-bold text-gray-900 text-lg">4.8</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#fbbf24] fill-[#fbbf24]" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-medium text-gray-600 group-hover:text-gray-900 transition-colors">
                <span className="font-bold text-gray-900">404</span> opinie
              </span>
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" 
                alt="Google" 
                className="h-5 opacity-80 group-hover:opacity-100 transition-opacity"
              />
            </div>
          </a>
        </div>

        {/* Karty opinii */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col h-full"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-50"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{review.name}</h4>
                    <p className="text-xs font-medium text-gray-400">{review.date}</p>
                  </div>
                </div>
                <img 
                  src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" 
                  alt="Google G" 
                  className="w-6 h-6"
                />
              </div>
              
              {/* Rating */}
              <div className="mb-4">
                <StarRating rating={review.rating} />
              </div>
              
              {/* Text */}
              <p className="text-gray-600 text-[15px] leading-relaxed italic flex-grow">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>

        {/* Link do Google */}
        <div className="mt-12 lg:mt-16 text-center">
          <a
            href="https://www.google.com/maps/place/Respol+Hurtownia+Techniki+Grzewczej+i+Sanitarnej/@52.275556,21.066944,17z/data=!4m8!3m7!1s0x471ecd50d30c5e71:0x50772f902446700!8m2!3d52.275556!4d21.066944!9m1!1b1!16s%2Fg%2F1tcws_0x?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#1a73e8] hover:bg-[#1557b0] text-white px-8 py-3.5 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.033 16.01c-2.425 0-4.135-1.268-4.135-3.642 0-2.466 1.821-3.962 4.195-3.962 1.059 0 1.933.361 2.59.98l-1.042 1.059c-.361-.39-.832-.61-1.484-.61-1.396 0-2.482 1.182-2.482 2.533 0 1.371 1.064 2.548 2.502 2.548.868 0 1.545-.401 2.059-.974.341-.401.556-.917.652-1.638h-2.691v-1.428h4.226c.06.27.09.521.09.842 0 2.543-1.666 4.292-4.48 4.292z"/>
            </svg>
            Napisz opinię na Google
          </a>
          <p className="mt-4 text-sm text-gray-500">
            Twoja opinia jest dla nas najważniejsza!
          </p>
        </div>
      </div>
    </section>
  );
}
