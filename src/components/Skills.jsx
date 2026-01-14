import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Layout, Server, Database, Cloud, Terminal, Cpu,
  Sparkles, ChevronRight, Zap, Braces
} from 'lucide-react';

// Animated Skill Bar
const SkillBar = ({ skill, level, color, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="group"
  >
    <div className="flex justify-between items-center mb-2">
      <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">{skill}</span>
      <span className="text-xs font-mono text-white/40">{level}%</span>
    </div>
    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={`h-full rounded-full bg-gradient-to-r ${color}`}
      />
    </div>
  </motion.div>
);

// Skill Category Card with Hover Effects
const SkillCategory = ({ category, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = category.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative"
    >
      <div className="relative p-8 h-full rounded-3xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/[0.05] overflow-hidden transition-all duration-500 hover:border-white/10">
        {/* Animated Gradient Background */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: `radial-gradient(400px circle at 50% 0%, ${category.glowColor}15, transparent 60%)`,
          }}
        />

        {/* Icon */}
        <motion.div
          className={`relative z-10 w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${category.iconBg} border border-white/10 flex items-center justify-center shadow-lg`}
          animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Icon className="w-8 h-8 text-white" />
        </motion.div>

        {/* Title */}
        <h3 className="relative z-10 text-xl font-bold text-white mb-4 group-hover:gradient-text transition-all duration-500">
          {category.name}
        </h3>

        {/* Skills List */}
        <div className="relative z-10 space-y-3">
          {category.skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.05 }}
              className="flex items-center gap-3 group/item"
            >
              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.dotColor} group-hover/item:scale-150 transition-transform`} />
              <span className="text-sm text-white/60 group-hover/item:text-white/90 transition-colors">
                {skill}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Decorative Corner */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/[0.03] to-transparent rounded-bl-[60px]" />
      </div>
    </motion.div>
  );
};

// Animated Tech Logo Marquee
const TechMarquee = () => {
  const techs = [
    "React", "TypeScript", "Node.js", "Python", "AWS", "Docker",
    "PostgreSQL", "MongoDB", "Next.js", "TailwindCSS", "Prisma", "GraphQL"
  ];

  return (
    <div className="relative overflow-hidden py-8 my-16">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

      <motion.div
        animate={{ x: [0, "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex gap-8 whitespace-nowrap"
      >
        {[...techs, ...techs].map((tech, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10"
          >
            <Zap className="w-4 h-4 text-indigo-400" />
            <span className="text-sm font-medium text-white/70">{tech}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const Skills = () => {
  const ref = useRef(null);

  const skillCategories = [
    {
      name: "Frontend Mastery",
      icon: Layout,
      iconBg: "from-indigo-500/20 to-blue-500/20",
      glowColor: "#6366f1",
      dotColor: "from-indigo-500 to-blue-500",
      skills: ["React.js / Next.js", "TypeScript", "Framer Motion", "TailwindCSS", "Redux / Zustand", "Performance Optimization"]
    },
    {
      name: "Backend Engineering",
      icon: Server,
      iconBg: "from-green-500/20 to-emerald-500/20",
      glowColor: "#10b981",
      dotColor: "from-green-500 to-emerald-500",
      skills: ["Node.js / Express", "Python / FastAPI", "REST & GraphQL APIs", "WebSockets", "Microservices", "Authentication (JWT/OAuth)"]
    },
    {
      name: "Data & Databases",
      icon: Database,
      iconBg: "from-orange-500/20 to-amber-500/20",
      glowColor: "#f59e0b",
      dotColor: "from-orange-500 to-amber-500",
      skills: ["PostgreSQL", "MongoDB", "Prisma ORM", "Redis Caching", "DynamoDB", "Data Modeling"]
    },
    {
      name: "Cloud & DevOps",
      icon: Cloud,
      iconBg: "from-cyan-500/20 to-sky-500/20",
      glowColor: "#06b6d4",
      dotColor: "from-cyan-500 to-sky-500",
      skills: ["AWS (Lambda, S3, EC2)", "Docker", "CI/CD Pipelines", "Vercel / Netlify", "GitHub Actions", "Monitoring & Logging"]
    },
    {
      name: "Tools & Workflow",
      icon: Terminal,
      iconBg: "from-purple-500/20 to-violet-500/20",
      glowColor: "#8b5cf6",
      dotColor: "from-purple-500 to-violet-500",
      skills: ["Git / GitHub", "VS Code", "Figma", "Postman", "Jest / Vitest", "Agile / Scrum"]
    },
    {
      name: "AI & Emerging Tech",
      icon: Cpu,
      iconBg: "from-pink-500/20 to-rose-500/20",
      glowColor: "#ec4899",
      dotColor: "from-pink-500 to-rose-500",
      skills: ["OpenAI / Gemini APIs", "LangChain", "Prompt Engineering", "Three.js / WebGL", "WebAssembly", "Real-time Systems"]
    }
  ];

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-30"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 mb-8"
          >
            <Braces className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-300">Technical Expertise</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
            <span className="text-white">Skills that</span>
            <br />
            <span className="gradient-text">Power Innovation</span>
          </h2>

          <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto">
            A comprehensive toolkit honed through years of building production-grade applications.
          </p>
        </motion.div>

        {/* Tech Marquee */}
        <TechMarquee />

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} category={category} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 p-8 md:p-12 rounded-3xl glass-vibrant border border-white/10 text-center"
        >
          <div className="max-w-2xl mx-auto">
            <Sparkles className="w-10 h-10 text-yellow-400 mx-auto mb-6" />
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-white/60 mb-8">
              Let&apos;s combine these skills to create your next breakthrough project.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Start a Conversation
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;