import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: 'Bachelor of Computer Science with Cyber Security',
      institution: 'Rathinam Global University | Coimbatore, TN',
      period: 'Jul 2024 - Apr 2027',
    },
    {
      degree: 'Higher Secondary HSC +2',
      institution: 'SBOA MAT HR. SEC SCHOOL | Coimbatore, TN',
      period: 'Jun 2023 - Apr 2024',
    },
    {
      degree: 'SSLC 10th Grade',
      institution: 'SBOA MAT HR. SEC SCHOOL | Coimbatore, TN',
      period: 'Jun 2021 - Apr 2022',
    }
  ];

  const certifications = [
    'Google Cybersecurity Professional',
    'IBM Ethical Hacking / Penetration Testing',
    'Red Hat Certified Engineer (RHCE) EX294',
    'AWS Certified Cloud Practitioner',
    'Data Science Professional Certification',
    'Metasploit Advanced Penetration Testing',
    'Wireshark Network Traffic Analysis',
    'Advanced Web App Security (OWASP)',
  ];

  return (
    <section id="education" className="py-24 relative">
      <div className="neu-container">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Education Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 neu-icon-btn text-neu-accent">
                <GraduationCap size={24} />
              </div>
              <h2 className="text-3xl font-display font-bold">Education</h2>
            </div>

            <div className="space-y-8 pl-6 border-l-2 border-neu-pressed">
              {education.map((item, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[35px] top-2 w-4 h-4 rounded-full bg-neu-accent shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
                  <div className="neu-card p-6">
                    <h3 className="text-xl font-bold text-neu-text mb-2">{item.degree}</h3>
                    <h4 className="text-neu-accent font-medium mb-4">{item.institution}</h4>
                    <span className="inline-block px-3 py-1 text-sm font-mono neu-card-pressed rounded-full text-neu-text/60">
                      {item.period}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 neu-icon-btn text-neu-accent">
                <Award size={24} />
              </div>
              <h2 className="text-3xl font-display font-bold">Certifications</h2>
            </div>

            <div className="neu-card p-8">
              <ul className="space-y-4">
                {certifications.map((cert, i) => (
                  <li key={i} className="flex items-start gap-4 p-3 hover:bg-neu-pressed rounded-xl transition-colors cursor-default">
                    <div className="mt-1 w-2 h-2 rounded-full bg-neu-accent flex-shrink-0 shadow-[0_0_8px_rgba(74,222,128,0.4)]"></div>
                    <span className="text-neu-text/90 font-medium leading-tight">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}