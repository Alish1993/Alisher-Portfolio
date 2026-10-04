import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologi from './components/Technologi';
import Experience from './components/Experience';
import Project from './components/Project';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-100 selection:bg-cyan-300 selection:text-slate-950">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.25),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.2),_transparent_30%)]" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Technologi />
          <Experience />
          <Project />
          <Contact />
        </main>
      </div>
    </div>
  );
}
