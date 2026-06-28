import { motion } from 'framer-motion';
import { FolderGit2, ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'GravityFlow AI Platform',
      domain: 'AI & Cybersecurity',
      desc: 'Engineered an autonomous security swarm utilizing AI to perform automated penetration testing, secret scanning, and CVE auto-patching across enterprise architectures.',
      tags: ['AI/ML', 'Cybersecurity', 'Automation']
    },
    {
      title: 'Forge-AI (SentraSec)',
      domain: 'Cloud Infrastructure',
      desc: 'Built a highly scalable, containerized artifact-sharing platform with distributed Django backend, React frontend, and Supabase OAuth deployed on Render.',
      tags: ['Django', 'React', 'Cloud']
    },
    {
      title: 'CT Upskilling Platform',
      domain: 'Web3 & Blockchain',
      desc: 'Developed a comprehensive e-learning and upskilling ecosystem integrating decentralized Web3 modules, smart contract verification, and AI-driven content engines.',
      tags: ['Web3', 'Blockchain', 'EdTech']
    },
    {
      title: 'Three.js 3D Web Experiences',
      domain: 'Frontend & WebGL',
      desc: 'Designed interactive, physics-based 3D web environments using React Three Fiber, featuring custom shaders, floating geometry, and premium neumorphic UI systems.',
      tags: ['Three.js', 'WebGL', 'React']
    },
    {
      title: 'SentraSec Web Security Framework',
      domain: 'Cybersecurity',
      desc: 'An AI-powered web application firewall (WAF) implementing machine learning to detect zero-day vulnerabilities in real-time with deep packet inspection.',
      tags: ['Cybersecurity', 'WAF', 'ML']
    },

    {
      title: 'Zero-Trust Identity Broker',
      domain: 'Cloud Security',
      desc: 'Engineered a highly available authentication broker utilizing JWT, OAuth 2.0, and multi-factor verification to secure API endpoints across micro-frontends.',
      tags: ['OAuth', 'Identity', 'Security']
    },
    {
      title: 'Automated Red Team Toolkit',
      domain: 'Offensive Security',
      desc: 'Developed a comprehensive suite of Python-based scripts automating intelligence gathering, vulnerability scanning, and payload deployment for security audits.',
      tags: ['Python', 'Security', 'Scripts']
    },
    {
      title: 'IoT Firmware RE Pipeline',
      domain: 'Reverse Engineering',
      desc: 'Created an automated pipeline for extracting, analyzing, and identifying hardcoded credentials and outdated cryptographic protocols within embedded systems.',
      tags: ['IoT', 'Reverse Engineering', 'Firmware']
    },
    {
      title: 'Quantum-Safe Encryption',
      domain: 'Cryptography',
      desc: 'Experimental implementation of lattice-based cryptography algorithms to secure data-at-rest within a distributed PostgreSQL database cluster.',
      tags: ['Cryptography', 'Security', 'PostgreSQL']
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="neu-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 neu-icon-btn text-neu-accent mb-6">
            <FolderGit2 size={28} />
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Project <span className="text-neu-accent">Vault</span></h2>
          <p className="text-neu-text/70 max-w-2xl mx-auto">A selection of my 120+ specialized projects across Cybersecurity, AI/ML, and Enterprise Software.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="neu-card flex flex-col h-full group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-neu-bg shadow-neu-pressed rounded-full flex items-center justify-center text-neu-accent">
                  <FolderGit2 size={24} />
                </div>
                <div className="flex gap-3">
                  <button className="text-neu-text/50 hover:text-neu-accent transition-colors">
                    <Github size={20} />
                  </button>
                  <button className="text-neu-text/50 hover:text-neu-accent transition-colors">
                    <ExternalLink size={20} />
                  </button>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-1 text-neu-text group-hover:text-neu-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-xs font-semibold text-neu-accent mb-3 uppercase tracking-wider">{project.domain}</p>
              
              <p className="text-sm text-neu-text/70 leading-relaxed mb-6 flex-grow">
                {project.desc}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs font-mono px-3 py-1 bg-neu-bg shadow-neu-pressed rounded-md text-neu-accent/80">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a 
            href="https://github.com/Arjumaan" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-neu-bg shadow-neu-flat hover:shadow-neu-pressed rounded-full font-bold text-neu-text transition-all group border border-transparent hover:border-neu-accent/30"
          >
            <Github size={20} className="text-neu-accent" />
            <span className="tracking-wide">VIEW ALL 120+ PROJECTS</span>
            <ExternalLink size={16} className="text-neu-text/50 group-hover:text-neu-accent transition-colors" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}