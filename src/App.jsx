import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Credentials from './sections/Credentials';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Credentials />
        <Leadership.jsx/>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
