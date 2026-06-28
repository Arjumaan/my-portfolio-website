import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Mission', href: '#hero' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Arsenal', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'py-4 backdrop-blur-md bg-neu-bg/80 shadow-neu-flat' : 'py-6'
        }`}
    >
      <div className="neu-container flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 group relative">
          <div className="absolute inset-0 bg-neu-accent/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="w-14 h-14 bg-neu-bg shadow-neu-flat p-2 flex items-center justify-center rounded-full overflow-hidden border border-neu-accent/20 relative z-10 group-hover:shadow-[0_0_15px_rgba(74,222,128,0.3)] transition-shadow">
            <img src="/ar-logo.png" alt="AR Logo" className="w-full h-full object-contain drop-shadow-[0_0_5px_rgba(74,222,128,0.5)]" />
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <ul className="flex items-center gap-1 p-1.5 rounded-full bg-neu-bg shadow-neu-pressed border border-neu-light/5">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide text-neu-text/60 hover:text-neu-accent hover:shadow-neu-flat hover:bg-neu-bg transition-all duration-300 inline-block"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden neu-icon-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-neu-bg/95 backdrop-blur-lg border-t border-neu-light mt-4"
          >
            <nav className="neu-container py-6">
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block p-4 neu-card text-center font-medium hover:text-neu-accent"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}