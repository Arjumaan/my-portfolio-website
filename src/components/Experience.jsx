import { motion } from 'framer-motion';
import { Briefcase, Calendar, Video, TrendingUp, Network, Monitor } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      icon: <Video size={18} className="text-neu-accent" />,
      role: 'CCTV & Network Infrastructure Intern',
      company: 'iFix Tech Solutions Pvt. Ltd.',
      duration: '2024 – 2026',
      desc: 'Deployed and maintained IP-based CCTV network infrastructures. Handled complex router, switch, and endpoint configuration. Troubleshot device communication issues and contributed to the structured design of office network deployments.'
    },
    {
      icon: <TrendingUp size={18} className="text-neu-accent" />,
      role: 'SEO Analyst Intern',
      company: 'RankuHigher',
      duration: '2024 (3 Mos)',
      desc: 'Optimized multiple client websites through targeted keyword research and on-page audits. Executed comprehensive competitor analysis. Successfully ranked 14 websites from Not-Listed to #1 rank.'
    },
    {
      icon: <Network size={18} className="text-neu-accent" />,
      role: 'Freelance Network Engineer',
      company: 'Office Network Setup Project',
      duration: 'Freelance',
      desc: 'Architected and deployed a secure routing infrastructure featuring 3-tier departmental network segmentation. Configured strict inter-departmental endpoint deployments to ensure operational isolation.'
    },
    {
      icon: <Monitor size={18} className="text-neu-accent" />,
      role: 'Virtual Network Infrastructure Designer',
      company: 'Simulated Enterprise Project',
      duration: 'Academic',
      desc: 'Architected a production-grade enterprise network simulation. Designed comprehensive routing protocols, VLAN segmentation, IP addressing schemas, and secure access architectures.'
    }
  ];

  return (
    <section id="experience" className="py-24">
      <div className="neu-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 neu-icon-btn text-neu-accent mb-6">
            <Briefcase size={28} />
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Professional <span className="text-neu-accent">Experience</span></h2>
          <p className="text-neu-text/70 max-w-2xl mx-auto">Real-world impact across network infrastructure, security, and digital optimization.</p>
        </motion.div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-neu-pressed before:rounded-full">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              {/* Timeline marker */}
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-neu-bg shadow-[inset_0_2px_4px_rgba(0,0,0,0.6),0_0_20px_rgba(74,222,128,0.3)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 border border-neu-accent/30 z-10">
                {exp.icon}
              </div>
              
              {/* Content Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-2xl neu-card hover:shadow-neu-flat-hover transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                  <h3 className="font-bold text-lg text-neu-accent">{exp.role}</h3>
                  <span className="flex items-center gap-1 text-xs font-medium px-3 py-1 neu-card-pressed rounded-full text-neu-text/80 whitespace-nowrap">
                    <Calendar size={14} />
                    {exp.duration}
                  </span>
                </div>
                <h4 className="font-medium text-neu-text mb-4 pb-2 border-b border-neu-light/20">{exp.company}</h4>
                <p className="text-sm text-neu-text/70 leading-relaxed">
                  {exp.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
