import React, { useState, useEffect, useRef } from "react";

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

  return <span ref={ref}>{count}{suffix}</span>;
}

export function About() {
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
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#ee1215]/10 text-[#ee1215] rounded-full text-sm font-semibold mb-8"><span className="w-2 h-2 bg-[#ee1215] rounded-full" />Od 1989 roku</span>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">O Firmie<span className="text-[#ee1215]">.</span></h2>
            <p className="text-xl lg:text-2xl text-gray-800 font-medium mb-6 leading-relaxed">Respol – Kompleksowa obsługa dla wymagającego Klienta.</p>
            <p className="text-gray-600 leading-relaxed mb-8">Od 1989 roku firma Respol jest liderem wśród hurtowni z zakresu techniki grzewczej, sanitarnej, instalacyjnej oraz odnawialnych źródeł energii. Jesteśmy jedną z nielicznych firm ogólnopolskich, która posiada 100% kapitału polskiego.</p>
            <ul className="space-y-4 mb-10">
              {bullets.map((b, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#ee1215]/10 text-[#ee1215] flex items-center justify-center flex-shrink-0 mt-0.5"><svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></div>
                  <p className="text-gray-700 leading-relaxed">{b}</p>
                </li>
              ))}
            </ul>
            <a href="https://respol.pl/about/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#ee1215] hover:text-[#d60e11] font-semibold text-lg transition-colors group">
              Poznaj nas bliżej <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            {stats.map((s, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 lg:p-8 text-center border border-gray-100 hover:shadow-xl hover:border-[#ee1215]/20 transition-all duration-300">
                <div className="text-4xl lg:text-5xl font-bold text-[#ee1215] mb-2"><AnimatedCounter end={s.value} suffix={s.suffix} /></div>
                <p className="text-gray-500 text-xs lg:text-sm uppercase tracking-wider font-semibold">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
