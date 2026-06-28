import { motion } from 'framer-motion';
import { ArrowRight, Shield, Cpu, Cloud, Link, Terminal } from 'lucide-react';

export default function Hero() {
  const techStack = [
    { icon: <Cpu size={24} />, name: 'AI/ML' },
    { icon: <Shield size={24} />, name: 'Cybersecurity' },
    { icon: <Cloud size={24} />, name: 'Cloud Computing' },
    { icon: <Link size={24} />, name: 'Blockchain' },
    { icon: <Terminal size={24} />, name: 'System Monitoring' },
  ];

  const flagshipProducts = [
    { name: 'AEGIS', desc: 'Defense-grade SOC for real-time threat detection and incident response.' },
    { name: 'Forge AI', desc: 'Advanced AI platform with agentic workflows for business intelligence.' },
    { name: 'CT Upskilling', desc: 'EdTech platform bridging academic knowledge with industry engineering.' },
  ];

  return (
    <section id="hero" className="min-h-screen pt-20 pb-16 flex items-center relative overflow-hidden">
      <div className="neu-container w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full neu-card-pressed text-neu-accent text-sm font-bold tracking-widest uppercase mb-6">
                <span className="w-2 h-2 rounded-full bg-neu-accent animate-pulse"></span>
                Founder & Security Architect
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-4">
                Hi, I&apos;m <span className="text-neu-accent">Arjumaan M</span><br />
                Building Secure, AI-Driven Platforms
              </h1>
              <p className="text-lg text-neu-text/80 max-w-xl leading-relaxed">
                I bridge the gap between intelligent automation and defense-grade security.
                As the <strong className="text-neu-text">Founder of SentraSec AI Systems</strong>, I architect robust,
                scalable, and impenetrable systems at the cutting edge of enterprise software.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="neu-button-primary">
                Explore Projects
                <ArrowRight size={18} />
              </a>
              <a href="#contact" className="neu-button">
                Get in Touch
              </a>
            </div>

            <div className="pt-8 border-t border-neu-light/20">
              <p className="text-sm text-neu-text/60 mb-4 uppercase tracking-wider font-semibold">Core Focus Areas</p>
              <div className="flex flex-wrap gap-4">
                {techStack.map((tech) => (
                  <div key={tech.name} className="neu-card py-3 px-4 flex items-center gap-3" title={tech.name}>
                    <div className="text-neu-accent">{tech.icon}</div>
                    <span className="font-medium text-sm hidden sm:block">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 flex flex-col items-center lg:items-end"
          >
            {/* Picture frame */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 mb-6 group">
              {/* Rotating outer rings */}
              <div className="absolute inset-[-15px] rounded-full border-t-2 border-r-2 border-neu-accent/50 animate-[spin_8s_linear_infinite]"></div>
              <div className="absolute inset-[-15px] rounded-full border-b-2 border-l-2 border-cyan-400/30 animate-[spin_6s_linear_reverse_infinite]"></div>
              
              {/* Glowing backdrop */}
              <div className="absolute inset-0 rounded-full bg-neu-accent/10 blur-xl group-hover:bg-neu-accent/30 transition-all duration-500"></div>
              
              {/* Main Image Container */}
              <div className="absolute inset-0 rounded-full bg-neu-bg shadow-neu-pressed p-2 border border-neu-light/5 z-10">
                <div className="w-full h-full rounded-full overflow-hidden relative border border-neu-accent/30 shadow-[inset_0_0_20px_rgba(74,222,128,0.2)]">
                  <img
                    src="/hero-portrait.jpg"
                    alt="Arjumaan M"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  />
                  {/* Cyber Scanline overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(74,222,128,0.15)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>

            <div className="neu-card p-8 w-full max-w-md">
              <h3 className="text-xl font-display font-bold mb-4 flex items-center gap-2">
                <Shield className="text-neu-accent" />
                The Vision & Mission
              </h3>
              <p className="text-neu-text/80 mb-6 leading-relaxed text-sm">
                My engineering background is highly versatile. Whether architecting scalable SaaS apps, deploying rigorous cybersecurity defense strategies, or engineering Web3 solutions, my objective is constant: engineer systems that are deeply robust and technologically impenetrable.
              </p>

              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neu-accent">Flagship Products</h4>
                {flagshipProducts.map((product) => (
                  <div key={product.name} className="neu-card-pressed p-3 border border-neu-light/10">
                    <h5 className="font-bold text-neu-text text-sm mb-1">{product.name}</h5>
                    <p className="text-xs text-neu-text/70">{product.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
