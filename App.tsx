
import React from 'react';
import { MessageCircle } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Collections from './components/Collections';
import Offers from './components/Offers';
import FAQs from './components/FAQs';
import Quality from './components/Quality';
import YearSeparator from './components/YearSeparator';
import AboutUs from './components/AboutUs';
import InstagramFeed from './components/InstagramFeed';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />
        <Collections />
        <Offers />
        {/* Materiales con recuadros marcados */}
        <Quality /> 
        
        {/* PORTAL HACIA EL FUTURO 2025 -> 2026 */}
        <YearSeparator />

        <FAQs />
        <AboutUs />
        <InstagramFeed />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      
      {/* Botón flotante WhatsApp para móvil */}
      <a 
        href="https://wa.me/573123743925" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[60] bg-[#1A1A1A] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform sm:hidden"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
}
