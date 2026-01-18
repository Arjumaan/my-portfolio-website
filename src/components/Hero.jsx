import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail, Facebook, Shield, Brain, Server, Lock, Computer, Dna } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-[#0a0a1a] to-black py-32"
    >
      {/* Clean Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-8 lg:px-16 max-w-[1400px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">

          {/* LEFT: Content - Takes 3 columns */}
          <div className="lg:col-span-3 space-y-10 lg:pt-20">

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-cyan-400 leading-tight">
                ARJUMAAN.M
              </h1>
              <div className="h-2 w-32 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mt-6" />
            </motion.div>

            {/* Role */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Security Architect & AI/ML Engineer
              </h2>
              <p className="text-xl text-white/70 leading-relaxed max-w-2xl">
                Building Intelligent CyberSecurity Systems and AI-powered architectures with Agents
              </p>

              {/* Bio Paragraph */}
              <p className="text-base text-white/60 leading-relaxed max-w-2xl pt-2">
                I'm a passionate technologist specializing in cybersecurity, artificial intelligence, and cloud architectures.
                With expertise spanning full-stack development, blockchain, and system design, I create secure, scalable solutions
                that push the boundaries of what's possible. Currently leading innovative projects at ByteForge, I'm dedicated to
                building the next generation of intelligent security systems.
              </p>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              {[
                { icon: Shield, text: 'Cybersecurity' },
                { icon: Brain, text: 'AI/ML' },
                { icon: Server, text: 'Cloud Computing' },
                { icon: Lock, text: 'Blockchain' },
                { icon: Dna, text: 'Full Stack' },
                { icon: Computer, text: 'System Design' },
              ].map((skill, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-cyan-500/50 transition-all"
                >
                  <skill.icon className="w-5 h-5 text-cyan-400" />
                  <span className="text-sm font-semibold text-white">{skill.text}</span>
                </div>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl font-bold text-white hover:from-cyan-500 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/25 flex items-center gap-2"
              >
                View Projects
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="/resume"
                className="px-8 py-4 bg-white/5 border-2 border-white/20 rounded-xl font-semibold text-white hover:bg-white/10 hover:border-white/30 transition-all flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Resume
              </a>
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex gap-4"
            >
              {[
                { href: "https://github.com/Arjumaan", icon: Github },
                { href: "https://linkedin.com/in/Arjumaan", icon: Linkedin },
                { href: "https://facebook.com/Arjumaan", icon: Facebook },
                { href: "mailto:arjumaan21@gmail.com", icon: Mail },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all"
                >
                  <social.icon className="w-5 h-5 text-white/70 hover:text-cyan-400" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: Image - Takes 2 columns */}
          <motion.div
            style={{ y }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="relative max-w-md ml-auto">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-2xl" />

              {/* Image Card */}
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="/hero-portrait.jpg"
                  alt="Arjumaan M"
                  className="w-full h-full object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Status Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/60 backdrop-blur-xl border border-cyan-500/30">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-cyan-400 font-mono mb-1">STATUS</div>
                      <div className="text-lg font-bold text-white flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        Online & Secure
                      </div>
                    </div>
                    <Shield className="w-8 h-8 text-cyan-400/30" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Stats Row - Below everything */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-16"
        >
          {[
            { label: 'Projects', value: '120+' },
            { label: 'Security Level', value: 'Elite' },
            { label: 'Uptime', value: '99.9%' },
            { label: 'Deploy Speed', value: 'Fast' },
            { label: 'Certified Courses', value: '80+' },
            { label: 'Certificates', value: '12+' },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-cyan-500/30 transition-all text-center"
            >
              <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
              <div className="text-sm text-white/60 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
