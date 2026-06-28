import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

export default function Skills() {
  const categories = [
    {
      title: 'Languages',
      skills: ['C', 'C++', 'Java', 'Python', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'PHP', 'Bash', 'PowerShell', 'Markdown', 'SQL']
    },
    {
      title: 'Frontend & UI',
      skills: ['React', 'Next.js', 'Expo', 'TailwindCSS', 'Bootstrap', 'Three.js', 'Vite', 'jQuery']
    },
    {
      title: 'Backend & APIs',
      skills: ['Node.js', 'Nest.js', 'FastAPI', 'Laravel', 'Spring Boot', 'JWT', 'Socket.io', 'WebSockets', 'WordPress']
    },
    {
      title: 'Cloud & DevOps',
      skills: ['AWS', 'GCP', 'Firebase', 'Supabase', 'Cloudflare', 'Vercel', 'Render', 'Docker', 'Apache', 'Nginx']
    },
    {
      title: 'Databases & Tools',
      skills: ['MariaDB', 'MySQL', 'MongoDB', 'PostgreSQL', 'Git', 'GitHub', 'Windows Terminal', 'Cisco', 'Notion']
    }
  ];

  return (
    <section id="skills" className="py-24">
      <div className="neu-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 neu-icon-btn text-neu-accent mb-6">
            <Terminal size={28} />
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Core Engineering <span className="text-neu-accent">Arsenal</span></h2>
          <p className="text-neu-text/70 max-w-2xl mx-auto">The technologies and tools I leverage to build secure, scalable systems.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="neu-card p-8"
            >
              <h3 className="text-lg font-bold mb-6 text-neu-accent flex items-center gap-2 border-b border-neu-light/20 pb-4">
                <span className="w-2 h-2 rounded-full bg-neu-accent"></span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div 
                    key={skill}
                    className="neu-card-pressed px-4 py-2 text-sm font-medium text-neu-text/90 hover:text-neu-accent hover:shadow-neu-flat transition-all cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}