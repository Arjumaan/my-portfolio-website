import { motion } from 'framer-motion';
import { Target, Users, Cpu, Brain, Rocket, Globe, Shield, Zap } from 'lucide-react';

export default function About() {
  const cards = [
    {
      icon: <Target size={20} className="text-cyan-400" />,
      title: "My Mission",
      subtitle: "To build, mentor, and inspire.",
      content: (
        <p className="text-sm text-neu-text/80 leading-relaxed">
          Creating tech that not only solves problems but defines possibilities. I am on a mission to transform creativity into code and ideas into real-world impact.
        </p>
      )
    },
    {
      icon: <Users size={20} className="text-cyan-400" />,
      title: "Leadership",
      subtitle: "Leading SentraSec AI Systems",
      content: (
        <div className="space-y-4">
          <p className="text-sm text-neu-text/80 leading-relaxed">
            Currently leading SentraSec AI Systems, an emerging Indian startup aiming to contribute to the development of the Indian tech industry.
          </p>
          <p className="text-sm text-neu-text/80 leading-relaxed">
            I believe in the power of technology to transform lives and I am passionate about using it to create a better future. I am a strong advocate for open source and I am always looking for new opportunities to learn and grow.
          </p>
        </div>
      )
    },
    {
      icon: <Cpu size={20} className="text-cyan-400" />,
      title: "Current Focus",
      subtitle: "AI & Security Convergence",
      content: (
        <div className="space-y-4">
          <p className="text-sm text-neu-text/80 leading-relaxed">
            Exploring the intersection of artificial intelligence and cybersecurity to build the next generation of intelligent defense systems.
          </p>
          <p className="text-sm text-neu-text/80 leading-relaxed">
            Working with cutting-edge technologies in machine learning, cloud infrastructure, and zero-trust architecture.
          </p>
        </div>
      )
    },
    {
      icon: <Brain size={20} className="text-cyan-400" />,
      title: "Engineering Mindset",
      subtitle: "",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="flex items-center gap-2 font-bold text-neu-text mb-1 text-sm">
              <Shield size={16} className="text-cyan-400" /> Security First
            </h4>
            <p className="text-sm text-neu-text/80 leading-relaxed">
              Every line of code is written with security as the foundation, not an afterthought.
            </p>
          </div>
          <div>
            <h4 className="flex items-center gap-2 font-bold text-neu-text mb-1 text-sm">
              <Zap size={16} className="text-purple-400" /> AI-Driven
            </h4>
            <p className="text-sm text-neu-text/80 leading-relaxed">
              Leveraging machine learning to create systems that learn, adapt, and evolve.
            </p>
          </div>
        </div>
      )
    },
    {
      icon: <Rocket size={20} className="text-cyan-400" />,
      title: "Innovation Lab",
      subtitle: "Experimental Projects",
      content: (
        <div className="space-y-4">
          <p className="text-sm text-neu-text/80 leading-relaxed">
            Constantly exploring new technologies through side projects - from AI-powered security auditing tools to high-performance computing experiments.
          </p>
          <p className="text-sm font-semibold text-cyan-400">
            Always questioning: &quot;What if we could do this better?&quot;
          </p>
        </div>
      )
    },
    {
      icon: <Globe size={20} className="text-cyan-400" />,
      title: "Philosophy",
      subtitle: "Global Scale Thinking",
      content: (
        <div className="space-y-4">
          <p className="text-sm text-neu-text/80 leading-relaxed">
            Building solutions that don&apos;t just work - they scale. From single instances to distributed systems handling millions of requests.
          </p>
          <p className="text-sm text-neu-text/80 leading-relaxed">
            Every project is designed with performance, reliability, and security at its core.
          </p>
        </div>
      )
    }
  ];

  return (
    <section id="about" className="py-24">
      <div className="neu-container">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Beyond the <span className="text-neu-accent">Code</span></h2>
          <div className="max-w-3xl mx-auto space-y-2">
            <p className="text-neu-text/80 leading-relaxed">
              🚀 Turning Ideas into Impact | Hey there 👋 I&apos;m Arjumaan. I live for that zone where innovation meets execution.
            </p>
            <p className="text-neu-text/80 leading-relaxed">
              From writing my first &quot;Hello World&quot; to architecting AI-driven systems and secure cloud solutions, my mission is to build technology that defines possibilities.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="neu-card flex flex-col h-full"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-neu-light/20">
                <div className="w-10 h-10 bg-neu-bg shadow-neu-pressed rounded-full flex items-center justify-center">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-neu-text">
                  {card.title}
                </h3>
              </div>

              <div className="flex-grow">
                {card.subtitle && (
                  <h4 className="font-bold text-neu-text mb-3">{card.subtitle}</h4>
                )}
                {card.content}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
