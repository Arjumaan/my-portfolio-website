import { useRef } from 'react';
import { motion, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { Terminal, Cpu, Shield, Users, Brain, Activity, Globe, Zap, Target, BookOpen, Rocket } from 'lucide-react';

// ========== GLASS CARD WITH 3D TILT ==========
const GlassCard = ({ children, className = "", delay = 0 }) => {
    const cardRef = useRef(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useSpring(useTransform(mouseY, [-300, 300], [5, -5]), { stiffness: 100, damping: 20 });
    const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-5, 5]), { stiffness: 100, damping: 20 });

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
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className={`relative group ${className}`}
        >
            {/* Glass effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20" />

            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-cyan-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 rounded-3xl transition-all duration-500" />

            {/* Content */}
            <div className="relative z-10 p-8">
                {children}
            </div>
        </motion.div>
    );
};

const AboutSection = ({ title, icon: Icon, children, delay }) => (
    <GlassCard delay={delay}>
        <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        <div className="text-white/70 leading-relaxed text-sm md:text-base space-y-4">
            {children}
        </div>
    </GlassCard>
);

const About = () => {
    const containerRef = useRef(null);

    return (
        <section id="about" ref={containerRef} className="py-24 relative overflow-hidden bg-black">
            {/* Gradient Mesh Background */}
            <div className="absolute inset-0">
                <motion.div
                    className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
                    style={{
                        background: 'radial-gradient(circle, #06b6d4 0%, #3b82f6 50%, #8b5cf6 100%)',
                    }}
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 100, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
                    style={{
                        background: 'radial-gradient(circle, #ec4899 0%, #a855f7 50%, #3b82f6 100%)',
                    }}
                    animate={{
                        scale: [1.2, 1, 1.2],
                        x: [0, -100, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-xl"
                    >
                        <Terminal className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm font-medium text-cyan-400">About The Developer</span>
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
                        Beyond the <span className="text-white drop-shadow-[0_0_20px_rgba(139,92,246,0.8)]">Code</span>
                    </h2>
                    <p className="max-w-3xl mx-auto text-lg text-white/60 leading-relaxed">
                        🚀 Turning Ideas into Impact | Hey there 👋 I'm Arjumaan. I live for that zone where innovation meets execution. From writing my first "Hello World" to architecting AI-driven systems and secure cloud solutions, my mission is to build technology that defines possibilities.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">

                    <AboutSection title="My Mission" icon={Target} delay={0.1}>
                        <p className="font-semibold text-white mb-2">To build, mentor, and inspire.</p>
                        <p>Creating tech that not only solves problems but defines possibilities. I am on a mission to transform creativity into code and ideas into real-world impact.</p>
                    </AboutSection>

                    <AboutSection title="Leadership" icon={Users} delay={0.2}>
                        <p className="font-semibold text-white mb-2">Leading ByteForge</p>
                        <p>Currently leading ByteForge, a community of innovators where code, creativity, and collaboration collide to build something meaningful.</p>
                        <p>As a <b>Public Speaker</b>, I share my journey to ignite curiosity. As a <b>Mentor</b>, I guide aspiring developers from confusion to confidence.</p>
                    </AboutSection>

                    <AboutSection title="Current Focus" icon={Cpu} delay={0.3}>
                        <p className="font-semibold text-white mb-2">AI & Security Convergence</p>
                        <p>Exploring the intersection of artificial intelligence and cybersecurity to build the next generation of intelligent defense systems.</p>
                        <p>Working with cutting-edge technologies in machine learning, cloud infrastructure, and zero-trust architecture.</p>
                    </AboutSection>

                    <AboutSection title="Engineering Mindset" icon={Brain} delay={0.4}>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <Shield className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                                <div>
                                    <div className="font-semibold text-white mb-1">Security First</div>
                                    <div className="text-sm text-white/60">Every line of code is written with security as the foundation, not an afterthought.</div>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Brain className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                                <div>
                                    <div className="font-semibold text-white mb-1">AI-Driven</div>
                                    <div className="text-sm text-white/60">Leveraging machine learning to create systems that learn, adapt, and evolve.</div>
                                </div>
                            </div>
                        </div>
                    </AboutSection>

                    <AboutSection title="Innovation Lab" icon={Rocket} delay={0.5}>
                        <p className="font-semibold text-white mb-2">Experimental Projects</p>
                        <p>Constantly exploring new technologies through side projects - from AI-powered security auditing tools to high-performance computing experiments.</p>
                        <p className="text-cyan-400 font-medium mt-3">Always questioning: "What if we could do this better?"</p>
                    </AboutSection>

                    <AboutSection title="Philosophy" icon={Globe} delay={0.6}>
                        <p className="font-semibold text-white mb-2">Global Scale Thinking</p>
                        <p>Building solutions that don't just work - they scale. From single instances to distributed systems handling millions of requests.</p>
                        <p>Every project is designed with performance, reliability, and security at its core.</p>
                    </AboutSection>

                </div>
            </div>
        </section>
    );
};

export default About;
