import { useRef } from 'react';
import { motion, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { Braces, Zap } from 'lucide-react';

// ========== GLASS CARD WITH 3D TILT ==========
const GlassCard = ({ children, className = "", delay = 0, span = 1 }) => {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-200, 200], [3, -3]), { stiffness: 100, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-200, 200], [-3, 3]), { stiffness: 100, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      on MouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        gridColumn: `span ${span}`,
      }}
      className={`relative group ${className}`}
    >
      {/* Glass effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20" />

      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-cyan-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 rounded-2xl transition-all duration-500" />

      {/* Content */}
      <div className="relative z-10 p-6">
        {children}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);

  const badgeGroups = [
    {
      title: "Languages",
      badges: [
        { src: "https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white", alt: "C" },
        { src: "https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white", alt: "C++" },
        { src: "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white", alt: "CSS3" },
        { src: "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white", alt: "Java" },
        { src: "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white", alt: "HTML5" },
        { src: "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E", alt: "JavaScript" },
        { src: "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54", alt: "Python" },
        { src: "https://img.shields.io/badge/rust-%23000000.svg?style=for-the-badge&logo=rust&logoColor=white", alt: "Rust" },
        { src: "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white", alt: "TypeScript" },
      ]
    },
    {
      title: "Cloud & DevOps",
      badges: [
        { src: "https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white", alt: "AWS" },
        { src: "https://img.shields.io/badge/azure-%230072C6.svg?style=for-the-badge&logo=microsoftazure&logoColor=white", alt: "Azure" },
        { src: "https://img.shields.io/badge/GoogleCloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white", alt: "Google Cloud" },
        { src: "https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white", alt: "Docker" },
        { src: "https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=for-the-badge&logo=kubernetes&logoColor=white", alt: "Kubernetes" },
        { src: "https://img.shields.io/badge/terraform-%235835CC.svg?style=for-the-badge&logo=terraform&logoColor=white", alt: "Terraform" },
      ]
    },
    {
      title: "Frameworks & Libraries",
      badges: [
        { src: "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB", alt: "React" },
        { src: "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white", alt: "NodeJS" },
        { src: "https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white", alt: "Next JS" },
        { src: "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB", alt: "Express.js" },
        { src: "https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white", alt: "Flask" },
        { src: "https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white", alt: "Django" },
      ]
    },
    {
      title: "Data & ML",
      badges: [
        { src: "https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white", alt: "NumPy" },
        { src: "https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white", alt: "Pandas" },
        { src: "https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=for-the-badge&logo=TensorFlow&logoColor=white", alt: "TensorFlow" },
        { src: "https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=for-the-badge&logo=PyTorch&logoColor=white", alt: "PyTorch" },
        { src: "https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white", alt: "scikit-learn" },
      ]
    },
    {
      title: "Databases",
      badges: [
        { src: "https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white", alt: "MySQL" },
        { src: "https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white", alt: "Postgres" },
        { src: "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white", alt: "MongoDB" },
        { src: "https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white", alt: "Redis" },
      ]
    },
    {
      title: "Cybersecurity Tools",
      badges: [
        { src: "https://img.shields.io/badge/-Wireshark-%231679A7?style=for-the-badge&logo=wireshark&logoColor=white", alt: "Wireshark" },
        { src: "https://img.shields.io/badge/-Metasploit-ED1C24?style=for-the-badge&logo=metasploit&logoColor=white", alt: "Metasploit" },
        { src: "https://img.shields.io/badge/-Burp_Suite-FF6633?style=for-the-badge&logo=burp-suite&logoColor=white", alt: "Burp Suite" },
        { src: "https://img.shields.io/badge/-Nmap-4682B4?style=for-the-badge", alt: "Nmap" },
      ]
    },
  ];

  return (
    <section id="skills" ref={ref} className="py-24 relative overflow-hidden bg-black">
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
          style={{
            background: 'radial-gradient(circle, #06b6d4 0%, #3b82f6 50%, #8b5cf6 100%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-xl"
          >
            <Braces className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-400">Technical Arsenal</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            Skills & <span className="text-white drop-shadow-[0_0_20px_rgba(6,182,212,0.8)]">Technologies</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {badgeGroups.map((group, groupIndex) => (
            <GlassCard key={groupIndex} delay={groupIndex * 0.1}>
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-5 h-5 text-cyan-400" />
                <h3 className="text-lg font-bold text-white">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.badges.map((badge, badgeIndex) => (
                  <motion.img
                    key={badgeIndex}
                    src={badge.src}
                    alt={badge.alt}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: groupIndex * 0.1 + badgeIndex * 0.02 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="transition-transform"
                  />
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;