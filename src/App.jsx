import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Loader from './components/Loader.jsx';
import ThreeBackground from './components/ThreeBackground.jsx';
import Stats from './components/Stats.jsx';
import About from './components/About.jsx';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ThreeBackground />
      <Routes>
        <Route
          path="/*"
          element={
            <AnimatePresence mode="wait">
              {loading ? (
                <Loader key="loader" />
              ) : (
                <motion.div
                  key="app"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="min-h-screen text-neu-text selection:bg-neu-accent selection:text-neu-bg"
                >
                  <Header />
                  <main className="pt-24">
                    <Hero />
                    <Stats />
                    <About />
                    <Experience />
                    <Projects />
                    <Skills />
                    <Education />
                    <Contact />
                  </main>
                  <Footer />
                </motion.div>
              )}
            </AnimatePresence>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;