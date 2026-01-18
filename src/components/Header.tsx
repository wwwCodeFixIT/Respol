import React, { useState, useEffect } from "react";

// Ikony potrzebne w nagłówku
const Icons = {
  Menu: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
  ),
  Close: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
  ),
  Cart: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
  ),
  Facebook: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
  ),
  LinkedIn: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
  ),
  YouTube: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
  ),
};

const navLinks = [
  { name: "O nas", href: "https://respol.pl/about/" },
  { name: "Aktualności", href: "https://respol.pl/aktualnosci/" },
  { name: "Promocje", href: "https://respol.pl/promocje/" },
  { name: "Katalog", href: "https://respol.pl/katalog-produktow/" },
  { name: "Zaufali Nam", href: "https://respol.pl/zaufali-nam/" },
  { name: "Salony Łazienek", href: "https://respol.pl/salony-lazienek/" },
  { name: "Kontakt", href: "https://respol.pl/kontakt-2/" },
];

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

export function Header() {
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
      <div className="bg-[#1a1a1a] text-gray-300 py-2.5 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a href="https://www.respol.ik.pl/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
            <span className="opacity-70">Działamy w grupie</span>
            <img alt="IK" className="h-8 w-auto bg-white p-1 rounded opacity-90" src="https://respol.pl/wp-content/uploads/2025/07/ik-logo-monochrom-1-e1752668376345.png" />
          </a>
          <div className="flex items-center gap-4">
            {[
              { Icon: Icons.Facebook, href: "https://www.facebook.com/respolhurtownia", label: "Facebook" },
              { Icon: Icons.LinkedIn, href: "https://www.linkedin.com/company/respol", label: "LinkedIn" },
              { Icon: Icons.YouTube, href: "https://www.youtube.com/@respolhurtownia", label: "YouTube" },
            ].map(({ Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="hover:text-[#ee1215] transition-colors" aria-label={label}>
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className={`bg-white transition-all duration-300 ${isScrolled ? "shadow-lg shadow-black/5" : ""}`} role="navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <a href="https://respol.pl" className="flex-shrink-0">
              <img src="https://respol.pl/wp-content/uploads/2021/06/cropped-logo-black-e1623919284881.png" alt="Respol" className="h-8 lg:h-9 w-auto" />
            </a>

            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((l) => (
                <a key={l.name} href={l.href} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-700 hover:text-[#ee1215] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#ee1215] hover:after:w-full after:transition-all">
                  {l.name}
                </a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <a href="https://expres24.pl" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#ee1215] hover:bg-[#d60e11] text-white px-6 py-2.5 rounded-full font-semibold text-sm shadow-lg shadow-[#ee1215]/25 hover:shadow-xl hover:shadow-[#ee1215]/30 transition-all duration-300 hover:-translate-y-0.5">
                <Icons.Cart className="w-4 h-4" />
                Expres24
              </a>
            </div>

            <button className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors" onClick={() => setOpen((v) => !v)} aria-label={open ? "Zamknij menu" : "Otwórz menu"}>
              {open ? <Icons.Close className="w-6 h-6" /> : <Icons.Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navLinks.map((l) => (
                <a key={l.name} href={l.href} target="_blank" rel="noopener noreferrer" className="block px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 hover:text-[#ee1215] font-medium transition-colors" onClick={() => setOpen(false)}>
                  {l.name}
                </a>
              ))}
              <a href="https://expres24.pl" target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center justify-center gap-2 bg-[#ee1215] text-white px-4 py-3.5 rounded-xl font-semibold">
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
