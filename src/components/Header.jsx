import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['home', 'projects', 'skills', 'education', 'contact'];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Journey', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-3' : 'py-5'}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container-custom">
          <div
            className={`
              flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500
              ${isScrolled
                ? 'glass border border-white/10 shadow-lg shadow-black/20'
                : 'bg-transparent'
              }
            `}
          >
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, '#home')}
              className="relative group"
            >
              <span className="text-2xl font-bold font-display tracking-tight">
                <span className="gradient-text">NM</span>
                <span className="text-white">.</span>
              </span>
              <Sparkles className="absolute -top-1 -right-3 w-3 h-3 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 p-1 rounded-full bg-white/5 border border-white/5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`
                      relative px-5 py-2 text-sm font-medium rounded-full transition-all duration-300
                      ${isActive
                        ? 'text-white'
                        : 'text-white/50 hover:text-white hover:bg-white/5'
                      }
                    `}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full border border-indigo-500/30"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </a>
                );
              })}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="px-6 py-2.5 text-sm font-semibold rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:shadow-lg hover:shadow-indigo-500/25 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Let&apos;s Talk
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-20 z-40 p-4 md:hidden"
          >
            <div className="glass rounded-2xl border border-white/10 p-6 shadow-2xl">
              <nav className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`
                      px-4 py-3 rounded-xl text-lg font-medium transition-all
                      ${activeSection === link.href.slice(1)
                        ? 'bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-white border border-indigo-500/30'
                        : 'text-white/60 hover:text-white hover:bg-white/5'
                      }
                    `}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>

              <div className="mt-6 pt-6 border-t border-white/10">
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, '#contact')}
                  className="block w-full py-4 text-center text-sm font-semibold rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;