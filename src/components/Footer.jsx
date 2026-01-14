import { motion } from 'framer-motion';
import { Heart, ArrowUp, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Journey', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/nithinmanda', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/nithin-manda', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/kaushal_dev_', label: 'Twitter' },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Gradient Divider */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/5 to-transparent pointer-events-none" />

      <div className="container-custom relative z-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <a href="#home" className="inline-block mb-6">
              <span className="text-3xl font-bold font-display">
                <span className="gradient-text">NM</span>
                <span className="text-white">.</span>
              </span>
            </a>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Full-Stack Developer crafting digital experiences with modern technologies and creative solutions.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">Quick Links</h4>
            <nav className="grid grid-cols-2 gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white/40 hover:text-white text-sm transition-colors duration-300 hover:translate-x-1 transform inline-block"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">Connect</h4>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-500/30 hover:bg-indigo-500/10 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5 text-white/60 hover:text-indigo-400" />
                </motion.a>
              ))}
            </div>
            <a
              href="mailto:goudnithin77@gmail.com"
              className="text-white/40 hover:text-indigo-400 text-sm transition-colors"
            >
              goudnithin77@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5">
          <p className="text-white/30 text-sm flex items-center gap-2 mb-4 md:mb-0">
            © {currentYear} Nithin Manda. Built with
            <Heart className="w-4 h-4 text-pink-500 animate-pulse" />
            using React & TailwindCSS
          </p>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-sm hover:border-indigo-500/30 hover:text-white transition-all duration-300"
          >
            <ArrowUp className="w-4 h-4" />
            Back to Top
          </motion.button>
        </div>
      </div>

      {/* Large Background Text */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[15vw] font-extrabold text-white/[0.02] whitespace-nowrap pointer-events-none select-none">
        NITHIN
      </div>
    </footer>
  );
};

export default Footer;