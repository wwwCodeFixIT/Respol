import React from "react";

const Icons = {
  Location: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
  ),
  Phone: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
  ),
  Mail: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
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
  Instagram: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
  ),
};

export function Footer() {
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
          <div className="lg:col-span-2">
            <img alt="Respol" className="h-12 w-auto bg-white p-2 rounded-lg mb-6" src="https://respol.pl/wp-content/uploads/2021/06/cropped-logo-black-e1623919284881.png" />
            <p className="text-gray-400 mb-6 max-w-sm leading-relaxed">Lider wśród hurtowni techniki grzewczej, sanitarnej i instalacyjnej. <span className="text-white font-medium">35 lat</span> doświadczenia, <span className="text-white font-medium">21 oddziałów</span> w całej Polsce.</p>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0"><Icons.Location className="w-5 h-5 text-[#ee1215]" /></div>
                <div><p className="text-white font-medium">Siedziba główna</p><p>ul. Bukowiecka 73, 03-893 Warszawa</p></div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0"><Icons.Phone className="w-5 h-5 text-[#ee1215]" /></div>
                <div><p className="text-white font-medium">Telefon</p><a href="tel:+48225199900" className="hover:text-white transition-colors">(22) 519 99 00</a></div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0"><Icons.Mail className="w-5 h-5 text-[#ee1215]" /></div>
                <div><p className="text-white font-medium">E-mail</p><a href="mailto:respol@respol.pl" className="hover:text-white transition-colors">respol@respol.pl</a></div>
              </div>
            </div>
            <div className="flex gap-3 mt-8">
              {socials.map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-white/5 hover:bg-[#ee1215] flex items-center justify-center transition-all duration-300 group" aria-label={label}><Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" /></a>
              ))}
            </div>
          </div>
          <div><h3 className="text-white font-bold mb-5">O NAS</h3><ul className="space-y-3 text-gray-400">{footerLinks.oNas.map((l) => (<li key={l.name}><a href={l.href} target="_blank" rel="noopener noreferrer" className="hover:text-[#ee1215] transition-colors">{l.name}</a></li>))}</ul></div>
          <div><h3 className="text-white font-bold mb-5">PRODUKTY</h3><ul className="space-y-3 text-gray-400">{footerLinks.produkty.map((l) => (<li key={l.name}><a href={l.href} target="_blank" rel="noopener noreferrer" className="hover:text-[#ee1215] transition-colors">{l.name}</a></li>))}</ul></div>
          <div>
            <h3 className="text-white font-bold mb-5">USŁUGI</h3><ul className="space-y-3 text-gray-400">{footerLinks.uslugi.map((l) => (<li key={l.name}><a href={l.href} target="_blank" rel="noopener noreferrer" className="hover:text-[#ee1215] transition-colors">{l.name}</a></li>))}</ul>
            <a href="https://expres24.pl" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 bg-[#ee1215] hover:bg-[#d60e11] text-white px-5 py-3 rounded-xl font-semibold transition-colors"><Icons.Cart className="w-5 h-5" />Zamów online</a>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col lg:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 Respol. Wszystkie prawa zastrzeżone.</p>
          <div className="flex items-center gap-6"><a href="https://respol.pl/polityka-prywatnosci/" className="hover:text-white transition-colors">Polityka prywatności</a><a href="https://respol.pl/rodo/" className="hover:text-white transition-colors">RODO</a></div>
        </div>
      </div>
    </footer>
  );
}
