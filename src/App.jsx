import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Services from './components/Services';
import Packages from './components/Packages';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="bg-punk-black min-h-screen text-punk-paper font-body selection:bg-punk-magenta selection:text-white overflow-x-hidden">
      <Header />
      <Hero />
      <Marquee />
      <Services />
      <Packages />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
