import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Categories } from "./components/Categories";
import { ExclusiveOffer } from "./components/ExclusiveOffer";
import { About } from "./components/About";
import { Reviews } from "./components/Reviews";
import { Partners } from "./components/Partners";
import { BathroomsCTA } from "./components/BathroomsCTA";
import { Footer } from "./components/Footer";

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
