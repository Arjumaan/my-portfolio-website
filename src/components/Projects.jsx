import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Code2, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const scrollRef = useRef(null);

  // Featured Projects (Top 10 Most Advanced)
  const featuredProjects = [
    {
      name: 'ByteForge Scaffold',
      category: 'Cybersecurity',
      tech: 'Pentesting Framework',
      desc: 'Advanced web application penetration testing framework with automated vulnerability scanning and exploitation',
      icon: '🛡️'
    },
    {
      name: 'AI Decision Copilot',
      category: 'AI/ML',
      tech: 'AI Agent',
      desc: 'Intelligent decision-making assistant powered by advanced AI agents and reasoning capabilities',
      icon: '🤖'
    },
    {
      name: 'Zero Trust Network Access',
      category: 'Cybersecurity',
      tech: 'ZTNA',
      desc: 'Next-generation zero-trust security architecture with identity-based access control',
      icon: '🔒'
    },
    {
      name: 'NFT Marketplace',
      category: 'Blockchain',
      tech: 'Ethereum',
      desc: 'Decentralized marketplace for digital assets with smart contract integration and IPFS storage',
      icon: '🎨'
    },
    {
      name: 'Healthcare Management System',
      category: 'AI/ML',
      tech: 'AI + Full Stack',
      desc: 'Comprehensive healthcare platform with AI-powered diagnosis, appointment scheduling, and medical reports',
      icon: '🏥'
    },
    {
      name: 'Multi-Cloud Deployment',
      category: 'Cloud Computing',
      tech: 'Kubernetes',
      desc: 'Enterprise-grade infrastructure orchestration across AWS, GCP, and Azure with auto-scaling',
      icon: '☁️'
    },
    {
      name: 'Personal AI Knowledge Base',
      category: 'AI/ML',
      tech: 'RAG + Second Brain',
      desc: 'AI-powered personal knowledge management system using retrieval-augmented generation',
      icon: '📚'
    },
    {
      name: 'AI Business Analyst',
      category: 'AI/ML',
      tech: 'SQL Agent',
      desc: 'Intelligent AI agent that analyzes business data, generates insights, and writes SQL queries autonomously',
      icon: '📊'
    },
    {
      name: 'Enterprise ERP System',
      category: 'Web Development',
      tech: 'Full Stack',
      desc: 'Complete enterprise resource planning system for startups with inventory, HR, and finance modules',
      icon: '🏢'
    },
    {
      name: 'Privacy-Preserving ML Framework',
      category: 'Cybersecurity',
      tech: 'Federated Learning',
      desc: 'Advanced machine learning framework with differential privacy and secure multi-party computation',
      icon: '🔐'
    },
  ];

  // All Projects (97 total)
  const allProjects = [
    // Web Development (28 projects)
    { name: 'Weather App', category: 'Web Development', tech: 'React', icon: '🌤️' },
    { name: 'School Markstatement Producer', category: 'Web Development', tech: 'Full Stack', icon: '📊' },
    { name: 'CT Upskilling Platform', category: 'Web Development', tech: 'MERN', icon: '📚' },
    { name: 'Byte Forge Club Website', category: 'Web Development', tech: 'React', icon: '🌐' },
    { name: 'System Dashboard', category: 'Web Development', tech: 'React', icon: '📈' },
    { name: 'Grocery Store', category: 'Web Development', tech: 'E-Commerce', icon: '🛒' },
    { name: 'Result Database System', category: 'Web Development', tech: 'Full Stack', icon: '💾' },
    { name: 'Cafe Management System', category: 'Web Development', tech: 'Full Stack', icon: '☕' },
    { name: 'HUSTLE BOARD', category: 'Web Development', tech: 'React', icon: '✅' },
    { name: 'Notes App', category: 'Web Development', tech: 'React', icon: '📝' },
    { name: 'Scientific Calculator', category: 'Web Development', tech: 'JavaScript', icon: '🧮' },
    { name: 'Blog Platform', category: 'Web Development', tech: 'Full Stack', icon: '✍️' },
    { name: 'Expense Tracker', category: 'Web Development', tech: 'React', icon: '💰' },
    { name: 'Portfolio Website Generator', category: 'Web Development', tech: 'React', icon: '🎯' },
    { name: 'Code Snippet Manager', category: 'Web Development', tech: 'Full Stack', icon: '📦' },
    { name: 'React Chat App', category: 'Web Development', tech: 'React', icon: '💬' },
    { name: 'E-Commerce Website', category: 'Web Development', tech: 'Full Stack', icon: '🛍️' },
    { name: 'MERN Project', category: 'Web Development', tech: 'MERN', icon: '🔧' },
    { name: 'ERP System for Startups', category: 'Web Development', tech: 'Full Stack', icon: '🏢' },
    { name: 'Bug Tracker + Agile Board', category: 'Web Development', tech: 'Full Stack', icon: '🐛' },
    { name: 'Progressive Web App', category: 'Web Development', tech: 'PWA', icon: '📱' },
    { name: 'Real-Time Collaboration Platform', category: 'Web Development', tech: 'WebSocket', icon: '🤝' },
    { name: 'Social Media Platform', category: 'Web Development', tech: 'Full Stack', icon: '📲' },
    { name: 'Offline-First Note Taking', category: 'Web Development', tech: 'PWA', icon: '📔' },
    { name: 'Code Review Tool', category: 'Web Development', tech: 'AI', icon: '👀' },

    // AI/ML (30 projects)
    { name: 'Personal Voice Assistant', category: 'AI/ML', tech: 'Python', icon: '🎤' },
    { name: 'AI Chatbot', category: 'AI/ML', tech: 'NLP', icon: '🤖' },
    { name: 'Face Recognition', category: 'AI/ML', tech: 'Computer Vision', icon: '👤' },
    { name: 'AI Agent', category: 'AI/ML', tech: 'Python', icon: '🧠' },
    { name: 'AI Mock Interview', category: 'AI/ML', tech: 'NLP', icon: '🎯' },
    { name: 'Healthcare AI System', category: 'AI/ML', tech: 'AI + Full Stack', icon: '🏥' },
    { name: 'Movie Recommender System', category: 'AI/ML', tech: 'ML', icon: '🎬' },
    { name: 'Fake News Detection', category: 'AI/ML', tech: 'NLP', icon: '📰' },
    { name: 'Image Recognition with CNNs', category: 'AI/ML', tech: 'Deep Learning', icon: '🖼️' },
    { name: 'Stock Price Prediction', category: 'AI/ML', tech: 'ML', icon: '📈' },
    { name: 'Natural Language Generation', category: 'AI/ML', tech: 'NLP', icon: '📝' },
    { name: 'Computer Vision Projects', category: 'AI/ML', tech: 'CV', icon: '👁️' },
    { name: 'Credit Card Fraud Detection', category: 'AI/ML', tech: 'ML', icon: '💳' },
    { name: 'Handwritten Digit Recognition', category: 'AI/ML', tech: 'Deep Learning', icon: '🔢' },
    { name: 'Music Genre Classification', category: 'AI/ML', tech: 'ML', icon: '🎵' },
    { name: 'Social Media Sentiment Analysis', category: 'AI/ML', tech: 'NLP', icon: '😊' },
    { name: 'Self-Driving Car Simulation', category: 'AI/ML', tech: 'RL', icon: '🚗' },
    { name: 'Weather Prediction with ML', category: 'AI/ML', tech: 'ML', icon: '🌦️' },
    { name: 'GANs for Image Generation', category: 'AI/ML', tech: 'Deep Learning', icon: '🎨' },
    { name: 'Medical Diagnosis with ML', category: 'AI/ML', tech: 'ML', icon: '⚕️' },
    { name: 'Conversational AI Chatbot', category: 'AI/ML', tech: 'NLP', icon: '💬' },
    { name: 'Customer Churn Prediction', category: 'AI/ML', tech: 'ML', icon: '📊' },
    { name: 'Fraud Detection System', category: 'AI/ML', tech: 'ML', icon: '🔍' },
    { name: 'Budget Tracking with AI', category: 'AI/ML', tech: 'AI + React', icon: '💰' },
    { name: 'Music Recommendation System', category: 'AI/ML', tech: 'ML', icon: '🎧' },
    { name: 'AI Decision Copilot', category: 'AI/ML', tech: 'AI Agent', icon: '🤖' },
    { name: 'Personal AI Knowledge Base', category: 'AI/ML', tech: 'RAG', icon: '📚' },
    { name: 'AI Business Analyst', category: 'AI/ML', tech: 'AI Agent', icon: '📊' },
    { name: 'AI Customer Support Copilot', category: 'AI/ML', tech: 'AI Agent', icon: '💁' },
    { name: 'AI Portfolio Reviewer', category: 'AI/ML', tech: 'AI Agent', icon: '👔' },

    // Data Science (10 projects)
    { name: 'Sales Data Analysis', category: 'Data Science', tech: 'Python', icon: '📊' },
    { name: 'Customer Segmentation', category: 'Data Science', tech: 'K-Means', icon: '👥' },
    { name: 'Movie Review Analysis', category: 'Data Science', tech: 'Python', icon: '🎬' },
    { name: 'E-Commerce Predictive Analytics', category: 'Data Science', tech: 'ML', icon: '🛒' },
    { name: 'Real-time Analytics with Spark', category: 'Data Science', tech: 'Big Data', icon: '⚡' },
    { name: 'Automated Data Pipeline', category: 'Data Science', tech: 'ETL', icon: '🔄' },
    { name: 'AI-Powered BI Dashboard', category: 'Data Science', tech: 'AI + BI', icon: '📈' },
    { name: 'Exploratory Data Analysis', category: 'Data Science', tech: 'Python', icon: '🔬' },
    { name: 'Interactive Data Viz', category: 'Data Science', tech: 'D3.js', icon: '📉' },

    // Cybersecurity (10 projects)
    { name: 'Fingerprint Voting System', category: 'Cybersecurity', tech: 'Biometric', icon: '🔐' },
    { name: 'Cloud Security IDS', category: 'Cybersecurity', tech: 'Cloud Security', icon: '🛡️' },
    { name: 'Zero Trust Network Access', category: 'Cybersecurity', tech: 'ZTNA', icon: '🔒' },
    { name: 'AI-Driven Threat Detection', category: 'Cybersecurity', tech: 'AI Security', icon: '🚨' },
    { name: 'Blockchain Secure Sharing', category: 'Cybersecurity', tech: 'Blockchain', icon: '🔗' },
    { name: 'ByteForge Scaffold', category: 'Cybersecurity', tech: 'Pentesting', icon: '🛠️' },
    { name: 'Cloud Security Posture Mgmt', category: 'Cybersecurity', tech: 'Cloud', icon: '☁️' },
    { name: 'Ransomware Analysis', category: 'Cybersecurity', tech: 'Malware', icon: '🦠' },
    { name: 'User Anomaly Detection', category: 'Cybersecurity', tech: 'AI', icon: '👤' },
    { name: 'Privacy-Preserving ML', category: 'Cybersecurity', tech: 'Privacy', icon: '🔐' },

    // Cloud Computing (9 projects)
    { name: 'Cloud File Storage', category: 'Cloud Computing', tech: 'AWS', icon: '📁' },
    { name: 'Multi-Cloud Hosting', category: 'Cloud Computing', tech: 'AWS/GCP/Azure', icon: '☁️' },
    { name: 'Cloud Chat Application', category: 'Cloud Computing', tech: 'AWS', icon: '💬' },
    { name: 'Serverless Web App', category: 'Cloud Computing', tech: 'Lambda', icon: '⚡' },
    { name: 'Auto-Scaling Load Balancer', category: 'Cloud Computing', tech: 'DevOps', icon: '⚖️' },
    { name: 'Cloud IoT Management', category: 'Cloud Computing', tech: 'IoT', icon: '📡' },
    { name: 'Multi-Cloud Kubernetes', category: 'Cloud Computing', tech: 'K8s', icon: '🚢' },
    { name: 'Real-Time Video Processing', category: 'Cloud Computing', tech: 'Cloud', icon: '🎥' },
    { name: 'Cloud Document Collaboration', category: 'Cloud Computing', tech: 'Real-time', icon: '📄' },

    // Blockchain (9 projects)
    { name: 'Decentralized File Storage', category: 'Blockchain', tech: 'Java + IPFS', icon: '📦' },
    { name: 'Simple Blockchain', category: 'Blockchain', tech: 'Python', icon: '⛓️' },
    { name: 'Decentralized To-Do List', category: 'Blockchain', tech: 'Ethereum', icon: '✅' },
    { name: 'Smart Contract Voting', category: 'Blockchain', tech: 'Solidity', icon: '🗳️' },
    { name: 'Blockchain Digital Identity', category: 'Blockchain', tech: 'Ethereum', icon: '🆔' },
    { name: 'Secure File Sharing', category: 'Blockchain', tech: 'IPFS', icon: '🔐' },
    { name: 'Decentralized Marketplace', category: 'Blockchain', tech: 'Smart Contracts', icon: '🏪' },
    { name: 'NFT Marketplace', category: 'Blockchain', tech: 'Ethereum', icon: '🖼️' },
    { name: 'Blockchain Supply Chain', category: 'Blockchain', tech: 'Hyperledger', icon: '📦' },
    { name: 'Crypto Trading Bot', category: 'Blockchain', tech: 'Analytics', icon: '💹' },

    // AR/VR (4 projects)
    { name: 'Language Learning with AR', category: 'AR/VR', tech: 'AR', icon: '🌐' },
    { name: 'Hand-Tracking AR UI', category: 'AR/VR', tech: 'AR', icon: '👋' },
    { name: 'Face Emotion Persona Overlay', category: 'AR/VR', tech: 'CV + AR', icon: '😊' },
    { name: 'MirrorClone FX', category: 'AR/VR', tech: 'AR', icon: '🪞' },
    { name: 'Air Swipe Music Controller', category: 'AR/VR', tech: 'Gesture', icon: '🎵' },
  ];

  const categories = ['All', 'Web Development', 'AI/ML', 'Cybersecurity', 'Blockchain', 'Cloud Computing', 'Data Science', 'AR/VR'];

  const filteredProjects = selectedCategory === 'All'
    ? allProjects
    : allProjects.filter(p => p.category === selectedCategory);

  // Auto-advance carousel (slower now)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
    }, 8000); // Changed from 5000 to 8000 (8 seconds)
    return () => clearInterval(timer);
  }, []);

  // Infinite scroll animation - truly continuous
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const animate = () => {
      scrollPosition += scrollSpeed;

      // Seamless loop - when reaching halfway, reset smoothly
      const maxScroll = scrollContainer.scrollWidth / 2;
      if (scrollPosition >= maxScroll) {
        scrollPosition = 0;
      }

      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []); // Empty dependency array - runs independently!

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-xl">
            <Code2 className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-400">120+ Projects Completed</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            Project <span className="text-cyan-400">Showcase</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Explore my diverse portfolio spanning cybersecurity, AI/ML, blockchain, cloud computing, and more
          </p>
        </motion.div>

        {/* Featured Projects Carousel */}
        <div className="relative mb-20">
          <div className="relative h-96 rounded-3xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 p-12 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-xl border border-white/10 rounded-3xl"
              >
                <div className="flex flex-col md:flex-row items-center gap-12 h-full">
                  <div className="flex-1">
                    <div className="text-6xl mb-4">{featuredProjects[currentSlide].icon}</div>
                    <h3 className="text-4xl font-bold text-white mb-4">
                      {featuredProjects[currentSlide].name}
                    </h3>
                    <p className="text-xl text-white/70 mb-6">
                      {featuredProjects[currentSlide].desc}
                    </p>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-400 font-semibold">
                        {featuredProjects[currentSlide].tech}
                      </span>
                      <span className="text-white/60">
                        {featuredProjects[currentSlide].category}
                      </span>
                    </div>
                    <div className="flex gap-4">
                      <button className="px-6 py-3 rounded-xl bg-cyan-500 text-white font-bold hover:bg-cyan-600 transition-all flex items-center gap-2">
                        <ExternalLink className="w-5 h-5" />
                        View Project
                      </button>
                      <button className="px-6 py-3 rounded-xl bg-white/10 text-white font-semibold hover:bg-white/20 transition-all flex items-center gap-2">
                        <Github className="w-5 h-5" />
                        Code
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Carousel Controls */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % featuredProjects.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {featuredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${index === currentSlide ? 'bg-cyan-400 w-8' : 'bg-white/30'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${selectedCategory === cat
                ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/30'
                : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
                }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Infinite Scroll Grid */}
        <div className="relative overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-hidden py-4"
            style={{ scrollBehavior: 'auto' }}
          >
            {/* Duplicate for seamless loop */}
            {[...filteredProjects, ...filteredProjects].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-80 p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-500/50 transition-all hover:scale-105 group"
              >
                <div className="text-4xl mb-4">{project.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.name}
                </h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-sm font-semibold">
                    {project.tech}
                  </span>
                </div>
                <p className="text-sm text-white/60 mb-4">{project.category}</p>
                <div className="flex gap-2">
                  <button className="flex-1 px-4 py-2 rounded-lg bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30 transition-all text-sm font-semibold flex items-center justify-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    View
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-white/5 text-white/70 hover:bg-white/10 transition-all">
                    <Github className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Project Counter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-white/40 text-sm">
            Showing <strong className="text-cyan-400">{filteredProjects.length}</strong> projects
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;