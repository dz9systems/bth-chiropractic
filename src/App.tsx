import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AlternativeHome } from './components/AlternativeHome';
export function App() {
  const [showAlternative, setShowAlternative] = useState(false);
  return <div className="w-full min-h-screen bg-white font-sans">
      {!showAlternative ? <>
          <Header showAlternative={showAlternative} setShowAlternative={setShowAlternative} />
          <main>
            <HeroSection />
            <AboutSection />
            <ReviewsSection />
            <ContactSection />
          </main>
          <Footer />
        </> : <AlternativeHome showAlternative={showAlternative} setShowAlternative={setShowAlternative} />}
    </div>;
}