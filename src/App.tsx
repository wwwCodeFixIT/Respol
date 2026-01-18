import React, { useEffect, useMemo, useRef, useState } from "react";
// WAŻNE: Tu importujemy Reviews z oddzielnego pliku!
import { Reviews } from "./components/Reviews"; 

// =============================================
// ICONS (To też kiedyś warto przenieść do components/Icons.tsx)
// =============================================
const Icons = {
  Menu: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  ),
  Close: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  ),
  ArrowRight: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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
  External: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  ),
  Facebook: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ),
  LinkedIn: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  YouTube: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  ),
  Instagram: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  ),
  Location: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  Phone: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  ),
  Mail: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  Cart: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
  ),
  Bolt: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  Check: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
  ),
  Calendar: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  Award: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  ),
};

// =============================================
// NAV LINKS
// =============================================
const navLinks = [
  { name: "O nas", href: "https://respol.pl/about/" },
  { name: "Aktualności", href: "https://respol.pl/aktualnosci/" },
  { name: "Promocje", href: "https://respol.pl/promocje/" },
  { name: "Katalog", href: "https://respol.pl/katalog-produktow/" },
  { name: "Zaufali Nam", href: "https://respol.pl/zaufali-nam/" },
  { name: "Salony Łazienek", href: "https://respol.pl/salony-lazienek/" },
  { name: "Kontakt", href: "https://respol.pl/kontakt-2/" },
];

// =============================================
// HOOKS
// =============================================
function useLockBodyScroll(locked: boolean) {
  useEffect(() => {
    if (!locked) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [locked]);
}

// =============================================
// HEADER
// =============================================
function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useLockBodyScroll(open);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#1a1a1a] text-gray-300 py-2.5 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a
            href="https://www.respol.ik.pl/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <span className="opacity-70">Działamy w grupie</span>
            <img 
              alt="IK" 
              className="h-8 w-auto bg-white p-1 rounded opacity-90" 
              src="https://respol.pl/wp-content/uploads/2025/07/ik-logo-monochrom-1-e1752668376345.png" 
            />
          </a>
          <div className="flex items-center gap-4">
            {[
              { Icon: Icons.Facebook, href: "https://www.facebook.com/respolhurtownia", label: "Facebook" },
              { Icon: Icons.LinkedIn, href: "https://www.linkedin.com/company/respol", label: "LinkedIn" },
              { Icon: Icons.YouTube, href: "https://www.youtube.com/@respolhurtownia", label: "YouTube" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ee1215] transition-colors"
                aria-label={label}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div
        className={`bg-white transition-all duration-300 ${isScrolled ? "shadow-lg shadow-black/5" : ""}`}
        role="navigation"
        aria-label="Główna nawigacja"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <a href="https://respol.pl" className="flex-shrink-0">
              <img
                src="https://respol.pl/wp-content/uploads/2021/06/cropped-logo-black-e1623919284881.png"
                alt="Respol"
                className="h-8 lg:h-9 w-auto"
              />
            </a>

            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((l) => (
                <a
                  key={l.name}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-gray-700 hover:text-[#ee1215] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#ee1215] hover:after:w-full after:transition-all"
                >
                  {l.name}
                </a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <a
                href="https://expres24.pl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#ee1215] hover:bg-[#d60e11] text-white px-6 py-2.5 rounded-full font-semibold text-sm shadow-lg shadow-[#ee1215]/25 hover:shadow-xl hover:shadow-[#ee1215]/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Icons.Cart className="w-4 h-4" />
                Expres24
              </a>
            </div>

            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Zamknij menu" : "Otwórz menu"}
            >
              {open ? <Icons.Close className="w-6 h-6" /> : <Icons.Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navLinks.map((l) => (
                <a
                  key={l.name}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 hover:text-[#ee1215] font-medium transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {l.name}
                </a>
              ))}
              <a
                href="https://expres24.pl"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 bg-[#ee1215] text-white px-4 py-3.5 rounded-xl font-semibold"
              >
                <Icons.Cart className="w-4 h-4" />
                Zaloguj do Expres24
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

// =============================================
// HERO
// =============================================
function Hero() {
  const slides = useMemo(
    () => [
      {
        image: "https://respol.pl/wp-content/uploads/2024/12/Vaillant_782x258-1.png",
        link: "https://www.myvaillantpro.pl/",
        alt: "Vaillant",
      },
      {
        image: "https://respol.pl/wp-content/uploads/2025/11/Baner-TurboFlush-782x258-px.jpg",
        link: "https://www.geberit.pl/",
        alt: "Geberit TurboFlush",
      },
      {
        image: "https://respol.pl/wp-content/uploads/2023/03/kan-therm-baner-wn-respol-728x258px-pl-23-02-27.png",
        link: "https://respol.pl/wspieramy-najlepszych-program-partnerski-kan/",
        alt: "KAN-therm",
      },
      {
        image: "https://respol.pl/wp-content/uploads/2021/10/DE-DIETRICH-782x258-px.jpg",
        link: "https://dedietrich.pl/",
        alt: "De Dietrich",
      },
      {
        image: "https://respol.pl/wp-content/uploads/2025/11/Grundfos_banner-Promocja-z-biletami-Suntago_ALPHA-i-COMFORT.png",
        link: "https://respol.pl/promocje/",
        alt: "Grundfos Suntago",
      },
    ],
    []
  );

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = window.setInterval(() => setCurrent((p) => (p + 1) % slides.length), 5000);
    return () => window.clearInterval(t);
  }, [slides.length]);

  const goTo = (idx: number) => setCurrent(idx);
  const prev = () => setCurrent((p) => (p - 1 + slides.length) % slides.length);
  const next = () => setCurrent((p) => (p + 1) % slides.length);

  return (
    <section className="pt-28 lg:pt-32 pb-12 lg:pb-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* KARTA B2B EXPRES24 */}
          <a
            href="https://expres24.pl"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-[#ee1215]/10 transition-all duration-500 min-h-[340px] lg:min-h-[440px] flex flex-col justify-center"
          >
            {/* Decorative blurs */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#ee1215]/8 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#ee1215]/5 to-transparent rounded-full blur-2xl" />

            {/* Content */}
            <div className="relative z-10 p-8 lg:p-12">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#ee1215]/10 text-[#ee1215] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ee1215] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ee1215]" />
                </span>
                Platforma B2B
              </div>

              <h2 className="text-3xl lg:text-5xl font-bold text-[#1a1a1a] mb-4 leading-tight">
                Kupuj wygodnie
                <br />
                <span className="bg-gradient-to-r from-[#ee1215] to-[#ff4444] bg-clip-text text-transparent">online!</span>
              </h2>

              <p className="text-gray-600 mb-6 max-w-sm text-base lg:text-lg leading-relaxed">
                Ponad <strong className="text-gray-900">400 000</strong> produktów. Szybkie zamówienia, konkurencyjne ceny.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="inline-flex items-center gap-2 text-sm text-gray-600 bg-gray-100 px-3 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Dostawa 24h
                </span>
                <span className="inline-flex items-center gap-2 text-sm text-gray-600 bg-gray-100 px-3 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Darmowa od 500 zł
                </span>
              </div>

              {/* CTA */}
              <span className="inline-flex items-center gap-3 bg-[#ee1215] hover:bg-[#d60e11] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:shadow-[#ee1215]/25">
                Przejdź do platformy
                <Icons.ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </span>
            </div>

            {/* NOWOŚĆ badge */}
            <div className="absolute top-6 right-6 bg-[#ee1215] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
              NOWOŚĆ
            </div>
          </a>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-6">
            {/* SLIDER */}
            <div 
              className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl border border-gray-100 overflow-hidden shadow-sm group"
              style={{ aspectRatio: '782 / 258' }}
            >
              {slides.map((s, idx) => (
                <a
                  key={s.image}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
                    idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                >
                  <img 
                    src={s.image} 
                    alt={s.alt} 
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.02]" 
                  />
                </a>
              ))}

              {/* Slider controls */}
              <button
                onClick={(e) => { e.preventDefault(); prev(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/90 hover:bg-[#ee1215] hover:text-white rounded-full flex items-center justify-center shadow-lg transition-all opacity-0 group-hover:opacity-100"
                aria-label="Poprzedni slajd"
              >
                <Icons.ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => { e.preventDefault(); next(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/90 hover:bg-[#ee1215] hover:text-white rounded-full flex items-center justify-center shadow-lg transition-all opacity-0 group-hover:opacity-100"
                aria-label="Następny slajd"
              >
                <Icons.ChevronRight className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => { e.preventDefault(); goTo(idx); }}
                    className={`h-2 rounded-full transition-all ${
                      idx === current ? "w-8 bg-[#ee1215]" : "w-2 bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Slajd ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* INFO CARDS */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://respol.pl/praca-w-okresie-swiatecznym/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl p-5 lg:p-6 border border-gray-100 hover:border-[#ee1215]/20 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gray-100 group-hover:bg-[#ee1215]/10 flex items-center justify-center mb-4 transition-colors">
                  <Icons.Calendar className="w-6 h-6 text-gray-600 group-hover:text-[#ee1215] transition-colors" />
                </div>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">Harmonogram pracy</p>
                <p className="text-lg font-bold text-gray-900 mt-1">2025/2026</p>
              </a>

              <a
                href="https://respol.pl/lp-wygraj-nagrody-z-respolem-2025/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#1a1a1a] rounded-2xl p-5 lg:p-6 relative overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#ee1215] rounded-full blur-3xl opacity-30" />
                <div className="relative">
                  <img
                    src="https://respol.pl/wp-content/uploads/2021/12/stempel_wygraj-nagrody-z-respolem_-1-1024x1024.png"
                    alt="Wygraj nagrody"
                    className="w-12 h-12 object-contain mb-4"
                  />
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">Program</p>
                  <p className="text-lg font-bold text-white mt-1">Wygraj nagrody!</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// =============================================
// CATEGORIES
// =============================================
function Categories() {
  const categories = useMemo(
    () => [
      {
        name: "Technika Grzewcza",
        desc: "Kotły, pompy ciepła, grzejniki",
        href: "https://respol.pl/index.php/technika-grzewcza/",
        color: "from-orange-500/10 to-red-500/10",
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
        color: "from-blue-500/10 to-cyan-500/10",
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
        color: "from-sky-500/10 to-blue-500/10",
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
        color: "from-green-500/10 to-emerald-500/10",
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
        color: "from-gray-500/10 to-slate-500/10",
        icon: (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
          </svg>
        ),
      },
    ],
    []
  );

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Kategorie produktów</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            Kompleksowa oferta dla profesjonalistów — ponad 400 000 produktów
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {categories.map((c) => (
            <a
              key={c.name}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative bg-gradient-to-br ${c.color} hover:shadow-xl rounded-2xl p-6 lg:p-8 transition-all duration-300 border border-transparent hover:border-gray-200`}
            >
              <div className="text-[#ee1215] mb-4 transform group-hover:-translate-y-1 group-hover:scale-110 transition-all duration-300">
                {c.icon}
              </div>
              <h3 className="font-bold text-gray-900 text-sm lg:text-base mb-1 group-hover:text-[#ee1215] transition-colors">
                {c.name}
              </h3>
              <p className="text-xs text-gray-500 hidden lg:block">{c.desc}</p>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all">
                <Icons.ArrowRight className="w-4 h-4 text-[#ee1215]" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================================
// EXCLUSIVE OFFER
// =============================================
function ExclusiveOffer() {
  const brands = useMemo(
    () => [
      {
        name: "ResLine",
        logo: "https://respol.pl/wp-content/uploads/elementor/thumbs/ResLine_logo_FINAL-pccegylju7atvg72biozaqh14selzk7d5ddi1l2hvk.png",
        href: "https://respol.pl/wp-content/uploads/2021/09/resline_a4_2019-printt.pdf",
      },
      { name: "ITAP", logo: "https://respol.pl/wp-content/uploads/2022/03/itap-bez-tla.png", href: "https://www.itap.it/en/" },
      { name: "Concept", logo: "https://respol.pl/wp-content/uploads/2021/12/CONCEPT.png", href: "https://concept.ik.pl/" },
      { name: "Viteco", logo: "https://respol.pl/wp-content/uploads/2021/12/VITECO.png", href: "https://viteco.pl/" },
    ],
    []
  );

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-[#1a1a1a]">
            Oferta na{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#ee1215] to-[#ff4444] bg-clip-text text-transparent">wyłączność</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: 14 }}>
                <path
                  d="M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7"
                  fill="none"
                  stroke="#ee1215"
                  strokeWidth="8"
                  strokeLinecap="round"
                  className="animate-[draw_1.5s_ease-out_forwards]"
                />
              </svg>
            </span>
          </h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            Marki własne i produkty dostępne <strong>wyłącznie w sieci Respol</strong>. Sprawdzone rozwiązania w konkurencyjnych cenach.
          </p>
        </div>

        {/* Brands grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {brands.map((b) => (
            <a
              key={b.name}
              href={b.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center p-8 lg:p-12 bg-white rounded-2xl border border-gray-100 hover:border-[#ee1215]/30 hover:shadow-xl transition-all duration-300"
            >
              <img
                src={b.logo}
                alt={b.name}
                className="max-h-12 lg:max-h-16 w-auto grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
              />
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://respol.pl/katalog-produktow/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#ee1215] hover:text-[#d60e11] font-semibold text-lg transition-colors group"
          >
            Zobacz pełny katalog produktów
            <Icons.ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}

// =============================================
// ANIMATED COUNTER
// =============================================
function AnimatedCounter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const duration = 1500;
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
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

// =============================================
// ABOUT
// =============================================
function About() {
  const stats = [
    { value: 35, label: "lat doświadczenia", suffix: "" },
    { value: 21, label: "oddziałów", suffix: "" },
    { value: 400, label: "tys. produktów", suffix: "k+" },
    { value: 200, label: "pracowników", suffix: "+" },
  ];

  const bullets = [
    "Obsługujemy deweloperów, sklepy i hurtownie, instalatorów, architektów oraz podmioty publiczne.",
    "W hurtowniach zatrudniamy ponad 200 pracowników, a oddziały zlokalizowane są w największych regionach Polski.",
    "Jesteśmy wiodącym partnerem spółki Instal-Konsorcjum, należącej do grupy EDT GmbH.",
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left */}
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#ee1215]/10 text-[#ee1215] rounded-full text-sm font-semibold mb-8">
              <span className="w-2 h-2 bg-[#ee1215] rounded-full" />
              Od 1989 roku
            </span>

            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              O Firmie<span className="text-[#ee1215]">.</span>
            </h2>

            <p className="text-xl lg:text-2xl text-gray-800 font-medium mb-6 leading-relaxed">
              Respol – Kompleksowa obsługa dla wymagającego Klienta.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              Od 1989 roku firma Respol jest liderem wśród hurtowni z zakresu techniki grzewczej, sanitarnej, instalacyjnej oraz
              odnawialnych źródeł energii. Jesteśmy jedną z nielicznych firm ogólnopolskich, która posiada 100% kapitału polskiego.
            </p>

            <ul className="space-y-4 mb-10">
              {bullets.map((b, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#ee1215]/10 text-[#ee1215] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icons.Check className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{b}</p>
                </li>
              ))}
            </ul>

            <a
              href="https://respol.pl/about/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#ee1215] hover:text-[#d60e11] font-semibold text-lg transition-colors group"
            >
              Poznaj nas bliżej
              <Icons.ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right - Stats */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            {stats.map((s, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 lg:p-8 text-center border border-gray-100 hover:shadow-xl hover:border-[#ee1215]/20 transition-all duration-300"
              >
                <div className="text-4xl lg:text-5xl font-bold text-[#ee1215] mb-2">
                  <AnimatedCounter end={s.value} suffix={s.suffix} />
                </div>
                <p className="text-gray-500 text-xs lg:text-sm uppercase tracking-wider font-semibold">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// =============================================
// PARTNERS
// =============================================
function Partners() {
  const partnersRow1 = useMemo(
    () => [
      { name: "Almeva", url: "https://respol.pl/wp-content/uploads/2021/08/1.png", link: "http://www.almeva.pl/" },
      { name: "B Meters", url: "https://respol.pl/wp-content/uploads/2021/08/bmeters.jpg", link: "https://bmeters.pl/" },
      { name: "De Dietrich", url: "https://respol.pl/wp-content/uploads/2021/08/dedietrich_new_logo-1024x221.png", link: "https://dedietrich.pl/" },
      { name: "Immergas", url: "https://respol.pl/wp-content/uploads/2021/08/IMMERGAS.png", link: "https://www.immergas.pl/" },
      { name: "ITAP", url: "https://respol.pl/wp-content/uploads/2021/08/11.png", link: "https://www.itap.it/" },
      { name: "KAN-therm", url: "https://respol.pl/wp-content/uploads/2021/08/13.png", link: "https://pl.kan-therm.com/" },
      { name: "Magnaplast", url: "https://respol.pl/wp-content/uploads/2023/01/logo-Magnaplast-1024x251.png", link: "https://magnaplast.pl/" },
      { name: "Purmo", url: "https://respol.pl/wp-content/uploads/2021/09/Purmo.png", link: "https://global.purmo.com/" },
      { name: "ResLine", url: "https://respol.pl/wp-content/uploads/2021/08/ResLine_logo_FINAL-1-1024x395.png", link: "https://respol.pl/" },
      { name: "Salus", url: "https://respol.pl/wp-content/uploads/2022/04/logo-salus-classic-1024x174.png", link: "https://salus-controls.pl/" },
    ],
    []
  );

  const partnersRow2 = useMemo(
    () => [
      { name: "Uponor", url: "https://respol.pl/wp-content/uploads/2021/08/20-e1637697547409.png", link: "https://www.uponor.pl/" },
      { name: "Vaillant", url: "https://respol.pl/wp-content/uploads/2021/08/21-e1637697711462.png", link: "https://www.vaillant.pl/" },
      { name: "Stiebel Eltron", url: "https://respol.pl/wp-content/uploads/2023/04/Logo_STIEBEL-ELTRON_CMYK_Red_Black-1024x165.png", link: "https://www.stiebel-eltron.pl/" },
      { name: "Hutterer-Lechner", url: "https://respol.pl/wp-content/uploads/2021/08/10.png", link: "https://www.hutterer-lechner.com/" },
      { name: "EE Odlewnia", url: "https://respol.pl/wp-content/uploads/2021/08/ee-odlewnia.png", link: "https://eeodlewnia.pl/" },
      { name: "APE", url: "https://respol.pl/wp-content/uploads/2021/08/2.png", link: "http://www.ape-raccorderie.com/" },
      { name: "Geberit", url: "https://respol.pl/wp-content/uploads/2023/07/Geberit.jpg", link: "https://www.geberit.pl/" },
      { name: "Wika", url: "https://respol.pl/wp-content/uploads/2024/12/wika-1.png", link: "https://www.wika.com/pl-pl/" },
    ],
    []
  );

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#ee1215]/10 text-[#ee1215] rounded-full text-sm font-semibold mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Zaufane marki
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Nasi partnerzy</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Współpracujemy z <strong className="text-gray-900">czołowymi producentami</strong> w branży grzewczej, sanitarnej i instalacyjnej.
          </p>
        </div>
      </div>

      {/* Carousel Row 1 - przesuwająca się w prawo */}
      <div className="relative overflow-hidden mb-8">
        <div className="absolute inset-y-0 left-0 w-32 lg:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 lg:w-48 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="flex gap-12 lg:gap-16 w-max px-8 animate-[scroll_40s_linear_infinite] hover:[animation-play-state:paused]">
          {[...partnersRow1, ...partnersRow1, ...partnersRow1].map((partner, idx) => (
            <a
              key={`row1-${partner.name}-${idx}`}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-36 lg:w-44 h-20 lg:h-24 bg-white rounded-2xl border border-gray-100 flex items-center justify-center p-4 lg:p-6 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 hover:border-[#ee1215]/20 hover:shadow-lg transition-all duration-300"
            >
              <img 
                src={partner.url} 
                alt={partner.name} 
                className="max-w-full max-h-full object-contain transform group-hover:scale-110 transition-transform duration-300" 
              />
            </a>
          ))}
        </div>
      </div>

      {/* Carousel Row 2 - przesuwająca się w lewo (odwrotny kierunek) */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-32 lg:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 lg:w-48 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="flex gap-12 lg:gap-16 w-max px-8 animate-[scrollReverse_35s_linear_infinite] hover:[animation-play-state:paused]">
          {[...partnersRow2, ...partnersRow2, ...partnersRow2].map((partner, idx) => (
            <a
              key={`row2-${partner.name}-${idx}`}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-36 lg:w-44 h-20 lg:h-24 bg-white rounded-2xl border border-gray-100 flex items-center justify-center p-4 lg:p-6 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 hover:border-[#ee1215]/20 hover:shadow-lg transition-all duration-300"
            >
              <img 
                src={partner.url} 
                alt={partner.name} 
                className="max-w-full max-h-full object-contain transform group-hover:scale-110 transition-transform duration-300" 
              />
            </a>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 lg:mt-16">
        <div className="text-center">
          <a
            href="https://respol.pl/zaufali-nam/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white border border-gray-200 hover:border-[#ee1215]/30 hover:shadow-xl px-8 py-4 rounded-2xl font-semibold text-gray-700 hover:text-[#ee1215] transition-all duration-300 group"
          >
            <span className="w-10 h-10 rounded-xl bg-[#ee1215]/10 flex items-center justify-center group-hover:bg-[#ee1215] transition-colors">
              <Icons.ArrowRight className="w-5 h-5 text-[#ee1215] group-hover:text-white transition-colors" />
            </span>
            Zobacz wszystkich partnerów
            <span className="text-sm text-gray-400 font-normal">(18+)</span>
          </a>
        </div>
      </div>
    </section>
  );
}

// =============================================
// BATHROOMS CTA
// =============================================
function BathroomsCTA() {
  const [offsetY, setOffsetY] = useState(0);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const vh = window.innerHeight;
      if (rect.top < vh && rect.bottom > 0) {
        const progress = (vh - rect.top) / (vh + rect.height);
        setOffsetY(progress * 100);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // URL zdjęcia łazienki - używamy Unsplash bo respol.pl blokuje CORS
  const bathroomImageUrl = "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1920&q=80";

  return (
    <section ref={ref} className="relative min-h-[500px] lg:min-h-[650px] flex items-center justify-center overflow-hidden">
      {/* Zdjęcie tła z efektem parallax */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          transform: `translateY(${offsetY * 0.4}px) scale(1.2)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <img
          src={bathroomImageUrl}
          alt="Salon łazienek Respol"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
      
      {/* Górny gradient (płynne przejście z białej sekcji powyżej) */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent" />
      
      {/* Dolny gradient (płynne przejście do ciemnej stopki) */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#1a1a1a] to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
          NASZE SALONY
          <br />
          <span className="bg-gradient-to-r from-[#ee1215] to-[#ff4444] bg-clip-text text-transparent">ŁAZIENEK</span>
        </h2>

        <p className="mt-8 text-white/80 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
          Odwiedź nasze showroomy i zainspiruj się najnowszymi trendami. Profesjonalne doradztwo i szeroki wybór produktów.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://respol.pl/salony-lazienek/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#ee1215] hover:bg-[#d60e11] text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-[#ee1215]/40 hover:-translate-y-1"
          >
            ZAPRASZAMY
            <Icons.ArrowRight className="w-6 h-6" />
          </a>
          <a
            href="https://respol.pl/kontakt-2/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-xl font-semibold text-lg transition-all"
          >
            <Icons.Phone className="w-5 h-5" />
            Kontakt
          </a>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8">
          {["Profesjonalne doradztwo", "Marki premium"].map((t) => (
            <div key={t} className="flex items-center gap-2 text-white/70">
              <span className="w-2 h-2 rounded-full bg-[#ee1215]" />
              <span className="text-sm">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================================
// FOOTER
// =============================================
function Footer() {
  const footerLinks = {
    oNas: [
      { name: "O Firmie", href: "https://respol.pl/about/" },
      { name: "Promocje", href: "https://respol.pl/promocje/" },
      { name: "Aktualności", href: "https://respol.pl/aktualnosci/" },
      { name: "Kariera", href: "https://respol.pl/kariera/" },
    ],
    produkty: [
      { name: "Technika Grzewcza", href: "https://respol.pl/index.php/technika-grzewcza/" },
      { name: "Technika Sanitarna", href: "https://respol.pl/index.php/technika-sanitarna/" },
      { name: "Technika Instalacyjna", href: "https://respol.pl/index.php/technika-instalacyjna/" },
      { name: "OZE", href: "https://respol.pl/index.php/odnawialne-zrodla-energii-3/" },
    ],
    uslugi: [
      { name: "Expres24", href: "https://expres24.pl" },
      { name: "Salony Łazienek", href: "https://respol.pl/salony-lazienek/" },
      { name: "Program Lojalnościowy", href: "https://respol.pl/lp-wygraj-nagrody-z-respolem-2025/" },
      { name: "Kontakt", href: "https://respol.pl/kontakt-2/" },
    ],
  };

  const socials = [
    { Icon: Icons.Facebook, href: "https://www.facebook.com/respolhurtownia", label: "Facebook" },
    { Icon: Icons.LinkedIn, href: "https://www.linkedin.com/company/respol", label: "LinkedIn" },
    { Icon: Icons.YouTube, href: "https://www.youtube.com/@respolhurtownia", label: "YouTube" },
    { Icon: Icons.Instagram, href: "https://www.instagram.com/respol_hurtownia/", label: "Instagram" },
  ];

  return (
    <footer className="bg-[#1a1a1a] text-white pt-16 lg:pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Logo & Info */}
          <div className="lg:col-span-2">
            <img 
  alt="Respol" 
  className="h-12 w-auto bg-white p-2 rounded-lg mb-6" 
  src="https://respol.pl/wp-content/uploads/2021/06/cropped-logo-black-e1623919284881.png" 
/>
            <p className="text-gray-400 mb-6 max-w-sm leading-relaxed">
              Lider wśród hurtowni techniki grzewczej, sanitarnej i instalacyjnej.{" "}
              <span className="text-white font-medium">35 lat</span> doświadczenia,{" "}
              <span className="text-white font-medium">21 oddziałów</span> w całej Polsce.
            </p>

            {/* Contact */}
            <div className="space-y-4 text-gray-400">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Icons.Location className="w-5 h-5 text-[#ee1215]" />
                </div>
                <div>
                  <p className="text-white font-medium">Siedziba główna</p>
                  <p>ul. Bukowiecka 73, 03-893 Warszawa</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Icons.Phone className="w-5 h-5 text-[#ee1215]" />
                </div>
                <div>
                  <p className="text-white font-medium">Telefon</p>
                  <a href="tel:+48225199900" className="hover:text-white transition-colors">
                    (22) 519 99 00
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Icons.Mail className="w-5 h-5 text-[#ee1215]" />
                </div>
                <div>
                  <p className="text-white font-medium">E-mail</p>
                  <a href="mailto:respol@respol.pl" className="hover:text-white transition-colors">
                    respol@respol.pl
                  </a>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-3 mt-8">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-white/5 hover:bg-[#ee1215] flex items-center justify-center transition-all duration-300 group"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-bold mb-5">O NAS</h3>
            <ul className="space-y-3 text-gray-400">
              {footerLinks.oNas.map((l) => (
                <li key={l.name}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer" className="hover:text-[#ee1215] transition-colors">
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-5">PRODUKTY</h3>
            <ul className="space-y-3 text-gray-400">
              {footerLinks.produkty.map((l) => (
                <li key={l.name}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer" className="hover:text-[#ee1215] transition-colors">
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-5">USŁUGI</h3>
            <ul className="space-y-3 text-gray-400">
              {footerLinks.uslugi.map((l) => (
                <li key={l.name}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer" className="hover:text-[#ee1215] transition-colors">
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="https://expres24.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-[#ee1215] hover:bg-[#d60e11] text-white px-5 py-3 rounded-xl font-semibold transition-colors"
            >
              <Icons.Cart className="w-5 h-5" />
              Zamów online
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col lg:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 Respol. Wszystkie prawa zastrzeżone.</p>
          <div className="flex items-center gap-6">
            <a href="https://respol.pl/polityka-prywatnosci/" className="hover:text-white transition-colors">
              Polityka prywatności
            </a>
            <a href="https://respol.pl/rodo/" className="hover:text-white transition-colors">
              RODO
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// =============================================
// APP
// =============================================
export default function App() {
  return (
    <div className="font-sans text-[#1a1a1a] bg-white min-h-screen antialiased">
      <Header />
      <main>
        <Hero />
        <Categories />
        <ExclusiveOffer />
        <About />
        <Reviews />
        <Partners />
        <BathroomsCTA />
      </main>
      <Footer />
    </div>
  );
}
