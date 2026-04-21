import React from 'react';
import CustomCursor from './components/CustomCursor';
import Navigation from './components/Navigation';
import SplashName from './components/SplashName';
import Hero from './components/Hero';
import TechMarquee from './components/TechMarquee';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen text-slate-200 font-sans selection:bg-blue-500/30 overflow-x-hidden relative cursor-none">
      <CustomCursor />

      {/* Global Raster Scan Line */}
      <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
        <div className="w-full h-[1px] bg-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.5)] animate-scan" />
      </div>
      
      {/* High-Performance Global Blueprint Grid */}
      <div className="fixed inset-[-100px] pointer-events-none -z-10 overflow-hidden opacity-[0.03]">
        <div 
          className="absolute inset-0 animate-bp-grid"
          style={{ 
            backgroundImage: "linear-gradient(to right, #3b82f6 1px, transparent 1px), linear-gradient(to bottom, #3b82f6 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }}
        />
      </div>
      
      {/* Decorative Background Gradients updated for high performance */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-20 pointer-events-none bg-black">
        {/* Floating corner light blobs */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full z-10" style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, rgba(0,0,0,0) 70%)' }}></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full z-10" style={{ background: 'radial-gradient(circle, rgba(79,70,229,0.08) 0%, rgba(0,0,0,0) 70%)' }}></div>
      </div>

      <Navigation />

      <SplashName />

      <main className="max-w-6xl mx-auto px-6 pt-10 pb-24 space-y-16 md:space-y-24">
        <Hero />
      </main>
      
      {/* Edge-to-edge Marquee component sitting outside the constrained width */}
      <TechMarquee />

      <main className="max-w-6xl mx-auto px-6 pt-16 pb-8 space-y-16 md:space-y-24">
        <About />
      </main>
      
      <Skills />
      
      <Projects />

      <main className="max-w-6xl mx-auto px-6 pt-16 pb-8 space-y-16 md:space-y-24">
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
