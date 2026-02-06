import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { HowItWorks } from './components/HowItWorks';
import { Features } from './components/Features';
import { UseCases } from './components/UseCases';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { ExitIntentModal } from './components/ExitIntentModal';

function App() {
  return (
    <div className="min-h-screen relative font-sans">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <HowItWorks />
        <Features />
        <UseCases />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
      <ExitIntentModal />
    </div>
  );
}

export default App;