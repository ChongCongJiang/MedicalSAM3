import React from 'react';
import { Hero } from './components/Hero';
import { Abstract } from './components/Abstract';
import { Methodology } from './components/Methodology';
import { Results } from './components/Results';
import { Visuals } from './components/Visuals';
import { Citation } from './components/Citation';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-brand-100 selection:text-brand-900">
      <main>
        <Hero />
        <Abstract />
        <Methodology />
        <Results />
        <Visuals />
        <Citation />
      </main>
      <Footer />
    </div>
  );
}

export default App;