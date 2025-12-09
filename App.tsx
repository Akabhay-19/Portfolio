import React from 'react';
import CircuitBackground from './components/CircuitBackground';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import TechTicker from './components/TechTicker';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen text-gray-300 font-sans selection:bg-cyber-primary/30 selection:text-white">
      <CircuitBackground />
      <NavBar />
      
      <main className="relative z-10">
        <Hero />
        <TechTicker />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;