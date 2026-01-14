import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles, Star, Zap } from 'lucide-react';
import Avatar from './Avatar';

// Particle/Star Background Component
const ParticleField = () => {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
};

// Floating 3D Orbs
const FloatingOrbs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Main Gradient Orb */}
    <motion.div
      className="absolute w-[600px] h-[600px] rounded-full opacity-30"
      style={{
        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, transparent 70%)',
        top: '-10%',
        right: '-10%',
        filter: 'blur(60px)',
      }}
      animate={{
        x: [0, 50, 0],
        y: [0, 30, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
    />

    {/* Pink Orb */}
    <motion.div
      className="absolute w-[400px] h-[400px] rounded-full opacity-20"
      style={{
        background: 'radial-gradient(circle, rgba(236, 72, 153, 0.5) 0%, transparent 70%)',
        bottom: '10%',
        left: '-5%',
        filter: 'blur(80px)',
      }}
      animate={{
        x: [0, -30, 0],
        y: [0, 50, 0],
        scale: [1, 1.2, 1],
      }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
    />

    {/* Purple Orb */}
    <motion.div
      className="absolute w-[300px] h-[300px] rounded-full opacity-25"
      style={{
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.5) 0%, transparent 70%)',
        top: '40%',
        left: '30%',
        filter: 'blur(60px)',
      }}
      animate={{
        x: [0, 40, 0],
        y: [0, -40, 0],
      }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
    />
  </div>
);

// Animated Badge Component
const AnimatedBadge = ({ children, icon: Icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5 }}
    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 backdrop-blur-sm"
  >
    <Icon className="w-4 h-4 text-indigo-400" />
    <span className="text-sm font-medium text-indigo-300">{children}</span>
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
    </span>
  </motion.div>
);

// Magnetic Social Icon
const MagneticIcon = ({ href, icon: Icon, label, color }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 400 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.3);
    y.set((e.clientY - centerY) * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ x: xSpring, y: ySpring }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={`relative p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-colors duration-300 hover:border-${color}-500/50 hover:bg-${color}-500/10 group`}
    >
      <Icon className={`w-6 h-6 text-white/60 group-hover:text-${color}-400 transition-colors`} />
      <span className="sr-only">{label}</span>
    </motion.a>
  );
};

// Stats Counter with Animation
const StatCounter = ({ value, label, suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm text-white/50 uppercase tracking-wider">{label}</div>
    </motion.div>
  );
};

const Hero = () => {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      style={{
        '--mouse-x': `${mousePosition.x}%`,
        '--mouse-y': `${mousePosition.y}%`,
      }}
    >
      {/* Aurora Background */}
      <div className="aurora"></div>

      {/* Animated Background Elements */}
      <FloatingOrbs />
      <ParticleField />

      {/* Grid Overlay */}
      <div className="absolute inset-0 grid-bg opacity-50"></div>

      {/* Spotlight Effect */}
      <div className="absolute inset-0 spotlight pointer-events-none"></div>

      <div className="container-custom relative z-10 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-24">

          {/* Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <AnimatedBadge icon={Sparkles}>Open for Opportunities</AnimatedBadge>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mt-8 mb-6 leading-[0.9]"
            >
              <span className="block text-white">Crafting</span>
              <span className="block gradient-text">Digital Magic</span>
              <span className="block text-white/80 text-4xl md:text-5xl lg:text-6xl mt-4 font-light italic font-display">
                with Code & Creativity
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-white/60 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              Hi, I&apos;m <span className="text-white font-semibold">Nithin Manda</span> — a Full-Stack Developer
              specializing in <span className="text-indigo-400">React</span>, <span className="text-pink-400">Node.js</span>,
              and <span className="text-purple-400">Cloud Architecture</span>. I transform complex problems
              into elegant, performant solutions.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <a href="#projects" className="btn btn-primary magnetic-btn group">
                <span className="relative z-10 flex items-center">
                  Explore My Work
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>

              <a href="/Nithin_resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline group">
                <Download className="mr-2 w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                Resume
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-12 flex items-center justify-center lg:justify-start gap-4"
            >
              <MagneticIcon href="https://github.com/nithinmanda" icon={Github} label="GitHub" color="indigo" />
              <MagneticIcon href="https://www.linkedin.com/in/nithin-manda" icon={Linkedin} label="LinkedIn" color="blue" />
              <MagneticIcon href="mailto:goudnithin77@gmail.com" icon={Mail} label="Email" color="pink" />
            </motion.div>
          </motion.div>

          {/* Visual/Avatar with 3D Effect */}
          <motion.div
            className="flex-1 relative"
            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] mx-auto">
              {/* Animated Rings */}
              <motion.div
                className="absolute inset-0 rounded-full border border-indigo-500/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-4 rounded-full border border-pink-500/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-8 rounded-full border border-purple-500/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />

              {/* Glow Background */}
              <div className="absolute inset-12 bg-gradient-to-br from-indigo-500/20 via-pink-500/10 to-purple-500/20 rounded-full blur-3xl animate-pulse-glow"></div>

              {/* Avatar Container */}
              <div className="absolute inset-16 z-10 overflow-hidden rounded-full border-2 border-white/10 bg-surface">
                <div className="w-full h-full scale-150 translate-y-8">
                  <Avatar />
                </div>
              </div>

              {/* Floating Tech Badges */}
              <motion.div
                className="absolute -top-4 right-10 px-4 py-2 glass-vibrant rounded-xl shadow-glow"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-400" />
                  <span className="font-mono text-sm font-bold text-white">React.js</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-10 -left-8 px-4 py-2 glass-vibrant rounded-xl shadow-glow-pink"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-pink-400" />
                  <span className="font-mono text-sm font-bold text-white">15+ Projects</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-12 px-4 py-2 glass-vibrant rounded-xl shadow-glow-purple"
                animate={{ x: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              >
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="font-mono text-sm font-bold text-white">4★ CodeChef</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 py-8 px-6 glass rounded-3xl border border-white/5"
        >
          <StatCounter value={15} suffix="+" label="Projects" />
          <StatCounter value={600} suffix="+" label="DSA Problems" />
          <StatCounter value={3} suffix="+" label="Years Coding" />
          <StatCounter value={100} suffix="%" label="Passion" />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-2">
          <motion.div
            className="w-1 h-2 bg-gradient-to-b from-indigo-500 to-pink-500 rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;