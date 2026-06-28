import { motion } from 'framer-motion';

export default function Stats() {
  const stats = [
    { value: '120+', label: 'PROJECTS' },
    { value: 'Elite', label: 'SECURITY LEVEL' },
    { value: '99.9%', label: 'UPTIME' },
    { value: 'Fast', label: 'DEPLOY SPEED' },
    { value: '80+', label: 'CERTIFIED COURSES' },
    { value: '12+', label: 'PROFESSIONAL CERTIFICATES' },
  ];

  return (
    <section className="py-12 md:py-20">
      <div className="neu-container">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="neu-card flex flex-col items-center justify-center p-6 text-center"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-green-400 mb-2 font-display tracking-wide">
                {stat.value}
              </h3>
              <p className="text-[10px] md:text-xs text-neu-text/60 font-semibold tracking-widest uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
