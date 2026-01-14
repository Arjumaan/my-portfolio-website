import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github, ArrowUpRight, Sparkles, Rocket, Code2, Smartphone, Zap, Globe } from 'lucide-react';

// 3D Tilt Card Component
const TiltCard = ({ children, className }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Project Card Component
const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = project.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
    >
      <TiltCard className="h-full perspective-1000">
        <motion.div
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/[0.05] overflow-hidden group cursor-pointer"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Gradient Hover Effect */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{
              background: `radial-gradient(600px circle at ${isHovered ? '50%' : '0%'} ${isHovered ? '50%' : '0%'}, ${project.glowColor}15, transparent 40%)`,
            }}
          />

          {/* Animated Border Gradient */}
          <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-[-1px] rounded-3xl" style={{
              background: `linear-gradient(135deg, ${project.glowColor}40, transparent 50%, ${project.glowColor}20)`,
            }} />
          </div>

          {/* Content */}
          <div className="relative z-10" style={{ transform: "translateZ(50px)" }}>
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <motion.div
                className={`p-4 rounded-2xl bg-gradient-to-br ${project.iconBg} border border-white/10 shadow-lg`}
                animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Icon className="w-7 h-7 text-white" />
              </motion.div>

              <div className="flex items-center gap-2">
                {project.featured && (
                  <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 text-yellow-400 text-xs font-semibold">
                    <Sparkles className="w-3 h-3" />
                    Featured
                  </span>
                )}
              </div>
            </div>

            {/* Title & Description */}
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-all duration-500">
              {project.title}
            </h3>

            <p className="text-white/50 text-sm leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Impact Metrics */}
            <div className="flex flex-wrap gap-3 mb-6">
              {project.metrics.map((metric, i) => (
                <div key={i} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                  <span className="text-xs font-medium text-white/70">{metric}</span>
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 text-xs font-medium rounded-lg bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-indigo-300 border border-indigo-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex items-center gap-4">
              {project.liveLink && (
                <motion.a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-sm font-semibold hover:shadow-lg hover:shadow-white/20 transition-shadow"
                >
                  View Live
                  <ArrowUpRight className="w-4 h-4" />
                </motion.a>
              )}

              {project.repoLink && (
                <motion.a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-white/70 text-sm font-medium hover:border-white/40 hover:text-white transition-all"
                >
                  <Github className="w-4 h-4" />
                  Code
                </motion.a>
              )}
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-white/[0.02] to-transparent rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-white/[0.02] to-transparent rounded-full blur-2xl pointer-events-none" />
        </motion.div>
      </TiltCard>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "FitBill - Gym Ecosystem",
      description: "Complete gym management SaaS with membership tracking, QR check-ins, and real-time financial analytics. Automated renewals cut admin time by 40%.",
      tech: ["React Native", "Express.js", "Prisma", "AWS Lambda", "PostgreSQL"],
      metrics: ["100% Renewal Automation", "40% Time Saved", "500+ Active Users"],
      liveLink: "http://youtube.com/watch?v=Dbkf_2kh1ho",
      repoLink: "https://github.com/nithinmanda",
      icon: Smartphone,
      iconBg: "from-indigo-500/20 to-blue-500/20",
      glowColor: "#6366f1",
      featured: true,
    },
    {
      title: "Serverless Attendance System",
      description: "Zero-cost attendance tracking leveraging AWS Lambda and BeautifulSoup for real-time HTML parsing. Handles 3,000+ daily users with sub-2s response times.",
      tech: ["AWS Lambda", "Python", "DynamoDB", "BeautifulSoup"],
      metrics: ["3K+ Daily Users", "10K+ Requests/Day", "Zero Cost"],
      liveLink: "https://github.com/sri-ganeshk/Attendance_tracker",
      repoLink: "https://github.com/sri-ganeshk/Attendance_tracker",
      icon: Zap,
      iconBg: "from-yellow-500/20 to-orange-500/20",
      glowColor: "#eab308",
      featured: true,
    },
    {
      title: "StudySphere - AI EdTech",
      description: "AI-powered learning platform using Google Gemini to auto-generate flashcards, summaries, and quizzes from any topic. Won IWD Hackathon.",
      tech: ["Next.js", "Google Gemini API", "PostgreSQL", "TailwindCSS"],
      metrics: ["Hackathon Winner", "AI-Powered", "Personalized Learning"],
      liveLink: "https://hackthon-six.vercel.app/",
      repoLink: null,
      icon: Rocket,
      iconBg: "from-pink-500/20 to-rose-500/20",
      glowColor: "#ec4899",
      featured: false,
    },
    {
      title: "Movie Review Platform",
      description: "Real-time movie discovery app with TMDB integration, JWT authentication, and responsive design. Full user accounts with favorites and reviews.",
      tech: ["React", "MongoDB", "TMDB API", "JWT", "TailwindCSS"],
      metrics: ["Real-time Data", "Secure Auth", "Responsive UI"],
      liveLink: "https://movie-review-omega-seven.vercel.app/",
      repoLink: null,
      icon: Globe,
      iconBg: "from-purple-500/20 to-violet-500/20",
      glowColor: "#8b5cf6",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-bg opacity-30"></div>
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 mb-8"
          >
            <Code2 className="w-4 h-4 text-indigo-400" />
            <span className="text-sm font-medium text-indigo-300">Selected Works</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
            <span className="text-white">Projects that</span>
            <br />
            <span className="gradient-text">Make an Impact</span>
          </h2>

          <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto">
            Real-world solutions demonstrating problem-solving, scalability, and engineering excellence.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <a
            href="https://github.com/nithinmanda"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-white/10 text-white/70 font-medium hover:border-indigo-500/50 hover:text-white hover:bg-indigo-500/10 transition-all duration-500 group"
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;