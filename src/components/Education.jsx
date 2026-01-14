import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { GraduationCap, Trophy, Briefcase, Award, Star, Sparkles } from 'lucide-react';

// Timeline Node Component
const TimelineNode = ({ data, index, isLast }) => {
  const Icon = data.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16`}
    >
      {/* Connector Line */}
      {!isLast && (
        <div className="hidden md:block absolute left-1/2 top-full w-[2px] h-16 bg-gradient-to-b from-white/10 to-transparent" />
      )}

      {/* Content Card */}
      <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
        <motion.div
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ duration: 0.3 }}
          className="inline-block p-8 rounded-3xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.06] hover:border-white/10 transition-all duration-500 group cursor-pointer"
        >
          {/* Date Badge */}
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r ${data.badgeGradient} border ${data.badgeBorder} mb-4`}>
            <span className="text-xs font-mono font-bold">{data.period}</span>
          </div>

          <h3 className="text-2xl font-bold text-white mb-2 group-hover:gradient-text transition-all duration-500">
            {data.title}
          </h3>

          <div className="text-white/50 text-sm font-medium mb-4">
            {data.subtitle}
          </div>

          <p className="text-white/40 text-sm leading-relaxed max-w-md">
            {data.description}
          </p>

          {/* Achievements */}
          {data.achievements && (
            <div className="mt-4 flex flex-wrap gap-2">
              {data.achievements.map((achievement, i) => (
                <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 text-white/60 text-xs">
                  <Star className="w-3 h-3 text-yellow-400" />
                  {achievement}
                </span>
              ))}
            </div>
          )}
        </motion.div>
      </div>

      {/* Center Icon */}
      <motion.div
        className="hidden md:flex flex-shrink-0 w-20 h-20 rounded-full items-center justify-center bg-gradient-to-br from-white/[0.06] to-white/[0.02] border-2 border-white/10 shadow-lg shadow-black/20 relative z-10"
        whileHover={{ scale: 1.1, rotate: 10 }}
        transition={{ duration: 0.3 }}
      >
        <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${data.iconBg} flex items-center justify-center`}>
          <Icon className="w-7 h-7 text-white" />
        </div>

        {/* Pulse Ring */}
        <div className={`absolute inset-0 rounded-full border-2 ${data.ringColor} opacity-0 group-hover:opacity-100 animate-ping`} />
      </motion.div>

      {/* Empty space for alternating layout */}
      <div className="hidden md:block flex-1" />
    </motion.div>
  );
};

// Achievement Card
const AchievementCard = ({ achievement, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ scale: 1.02, y: -5 }}
    className="relative p-6 rounded-2xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/[0.05] hover:border-indigo-500/30 transition-all duration-500 group overflow-hidden"
  >
    {/* Glow Effect */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-indigo-500/5 to-transparent" />

    <div className="relative z-10 flex items-start gap-4">
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 flex items-center justify-center">
        <Trophy className="w-6 h-6 text-yellow-400" />
      </div>
      <div>
        <h4 className="font-bold text-white mb-1 group-hover:gradient-text transition-all duration-300">{achievement.title}</h4>
        <p className="text-sm text-white/50">{achievement.description}</p>
      </div>
    </div>
  </motion.div>
);

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const timelineData = [
    {
      period: "2019 - 2023",
      title: "Bachelor of Engineering",
      subtitle: "Vasavi College of Engineering (ECE)",
      description: "Focused on embedded systems, software engineering, and algorithm design. Developed a strong foundation in computer science principles.",
      icon: GraduationCap,
      iconBg: "from-indigo-500/30 to-purple-500/30",
      badgeGradient: "from-indigo-500/20 to-purple-500/20",
      badgeBorder: "border-indigo-500/30",
      ringColor: "border-indigo-500",
      achievements: ["Top 10%", "Tech Lead"]
    },
    {
      period: "2023 - Present",
      title: "Competitive Programming Lead",
      subtitle: "Google Developer Group & CodeChef",
      description: "Leading 50+ students in weekly algorithm workshops. Personally solved 600+ DSA problems across major platforms.",
      icon: Briefcase,
      iconBg: "from-pink-500/30 to-rose-500/30",
      badgeGradient: "from-pink-500/20 to-rose-500/20",
      badgeBorder: "border-pink-500/30",
      ringColor: "border-pink-500",
      achievements: ["4★ CodeChef", "600+ Problems"]
    },
    {
      period: "2023",
      title: "Hackathon Champion",
      subtitle: "IWD Hackathon by Google Developer Group",
      description: "Built a safety-focused solution with real-time geolocation. Won first place among 100+ participating teams.",
      icon: Trophy,
      iconBg: "from-yellow-500/30 to-orange-500/30",
      badgeGradient: "from-yellow-500/20 to-orange-500/20",
      badgeBorder: "border-yellow-500/30",
      ringColor: "border-yellow-500",
      achievements: ["1st Place", "100+ Teams"]
    },
    {
      period: "2017 - 2019",
      title: "Pre-University Education",
      subtitle: "Sri Chaitanya Junior College (MPC)",
      description: "Strong foundation in Mathematics, Physics, and Chemistry. Developed analytical thinking and problem-solving skills.",
      icon: GraduationCap,
      iconBg: "from-cyan-500/30 to-teal-500/30",
      badgeGradient: "from-cyan-500/20 to-teal-500/20",
      badgeBorder: "border-cyan-500/30",
      ringColor: "border-cyan-500",
      achievements: ["INMO Regionalist"]
    }
  ];

  const achievements = [
    { title: "IWD Hackathon Winner", description: "Google Developer Group Hyderabad" },
    { title: "4★ CodeChef Rating", description: "600+ problems solved across platforms" },
    { title: "CP Club Lead", description: "Leading workshops for 50+ students" },
    { title: "National Handball", description: "Goalkeeper for Kendriya Vidyalaya team" },
    { title: "INMO Regionalist", description: "2019 Indian National Mathematics Olympiad" },
  ];

  return (
    <section id="education" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-30"></div>
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-pink-500/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Animated Line */}
      <motion.div
        className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent"
        style={{ scaleY: scrollYProgress }}
      />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 mb-8"
          >
            <Award className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium text-yellow-300">Journey & Milestones</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
            <span className="text-white">Path to</span>
            <br />
            <span className="gradient-text">Excellence</span>
          </h2>

          <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto">
            A journey of continuous learning, leadership, and achievement.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-12 md:space-y-24 mb-24">
          {timelineData.map((item, index) => (
            <TimelineNode
              key={index}
              data={item}
              index={index}
              isLast={index === timelineData.length - 1}
            />
          ))}
        </div>

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-10">
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <h3 className="text-2xl font-bold text-white">Notable Achievements</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((achievement, index) => (
              <AchievementCard key={index} achievement={achievement} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;