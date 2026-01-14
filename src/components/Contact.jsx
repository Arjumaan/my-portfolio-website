import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, Phone, Send, MapPin, Linkedin, Github, Twitter, Sparkles, MessageCircle, ArrowUpRight, Check } from 'lucide-react';

// Animated Input Component
const AnimatedInput = ({ label, type, name, value, onChange, placeholder, required, isTextarea }) => {
  const [isFocused, setIsFocused] = useState(false);

  const InputComponent = isTextarea ? 'textarea' : 'input';

  return (
    <div className="relative group">
      <label className="block text-sm font-bold text-white/60 mb-3 group-focus-within:text-indigo-400 transition-colors">
        {label}
      </label>
      <div className="relative">
        <InputComponent
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          rows={isTextarea ? 5 : undefined}
          placeholder={placeholder}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`
            w-full bg-white/[0.02] border-2 rounded-2xl px-5 py-4 text-white placeholder-white/30
            focus:outline-none transition-all duration-500
            ${isFocused
              ? 'border-indigo-500/50 bg-indigo-500/5 shadow-lg shadow-indigo-500/10'
              : 'border-white/[0.05] hover:border-white/10'
            }
            ${isTextarea ? 'resize-none' : ''}
          `}
        />

        {/* Animated Border Gradient */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          initial={false}
          animate={{
            boxShadow: isFocused
              ? '0 0 0 1px rgba(99, 102, 241, 0.3), 0 0 30px rgba(99, 102, 241, 0.1)'
              : '0 0 0 0px transparent'
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  );
};

// Social Link Component
const SocialLink = ({ href, icon: Icon, label, color }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1, y: -5 }}
    whileTap={{ scale: 0.95 }}
    className={`
      relative p-4 rounded-2xl bg-white/[0.03] border border-white/[0.05] 
      hover:border-${color}-500/30 hover:bg-${color}-500/10 
      transition-all duration-300 group overflow-hidden
    `}
  >
    <div className={`absolute inset-0 bg-gradient-to-br from-${color}-500/0 to-${color}-500/10 opacity-0 group-hover:opacity-100 transition-opacity`} />
    <Icon className={`relative z-10 w-6 h-6 text-white/60 group-hover:text-${color}-400 transition-colors`} />
    <span className="sr-only">{label}</span>
  </motion.a>
);

// Contact Info Card
const ContactInfoCard = ({ icon: Icon, title, value, href, delay }) => (
  <motion.a
    href={href}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ scale: 1.02, y: -5 }}
    className="flex items-start gap-5 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-indigo-500/30 transition-all duration-500 group"
  >
    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
      <Icon className="w-6 h-6 text-indigo-400" />
    </div>
    <div>
      <h4 className="text-sm font-bold text-white/60 mb-1">{title}</h4>
      <span className="text-lg font-medium text-white group-hover:gradient-text transition-all duration-300">
        {value}
      </span>
    </div>
    <ArrowUpRight className="w-5 h-5 text-white/20 group-hover:text-indigo-400 ml-auto transition-colors" />
  </motion.a>
);

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ submitting: false, submitted: false, error: null });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'goudnithin77@gmail.com'
        },
        import.meta.env.VITE_PUBLIC_KEY
      );
      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Failed to send email:', error);
      setStatus({ submitting: false, submitted: false, error: 'Failed to send. Please try again.' });
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-30"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-[200px] pointer-events-none" />

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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20 mb-8"
          >
            <MessageCircle className="w-4 h-4 text-pink-400" />
            <span className="text-sm font-medium text-pink-300">Let&apos;s Connect</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
            <span className="text-white">Get in</span>
            <br />
            <span className="gradient-text">Touch</span>
          </h2>

          <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s create something extraordinary together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4 mb-12">
              <ContactInfoCard
                icon={Mail}
                title="Email Me"
                value="goudnithin77@gmail.com"
                href="mailto:goudnithin77@gmail.com"
                delay={0.1}
              />
              <ContactInfoCard
                icon={Phone}
                title="Call Me"
                value="+91 9912491246"
                href="tel:+919912491246"
                delay={0.2}
              />
              <ContactInfoCard
                icon={MapPin}
                title="Location"
                value="Hyderabad, India"
                href="#"
                delay={0.3}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h4 className="text-lg font-bold text-white mb-6">Connect on Socials</h4>
              <div className="flex gap-4">
                <SocialLink href="https://github.com/nithinmanda" icon={Github} label="GitHub" color="indigo" />
                <SocialLink href="https://www.linkedin.com/in/nithin-manda" icon={Linkedin} label="LinkedIn" color="blue" />
                <SocialLink href="https://x.com/kaushal_dev_" icon={Twitter} label="Twitter" color="pink" />
              </div>
            </motion.div>

            {/* Decorative Element */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-indigo-500/10 to-purple-500/5 border border-indigo-500/20 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/20 to-transparent rounded-full blur-2xl" />
              <Sparkles className="w-8 h-8 text-yellow-400 mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">Let&apos;s Build Together</h4>
              <p className="text-white/50 text-sm">
                I&apos;m currently available for freelance work and full-time positions. Let&apos;s discuss how I can contribute to your next project.
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.05] backdrop-blur-xl">
              <div className="space-y-6">
                <AnimatedInput
                  label="YOUR NAME"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />

                <AnimatedInput
                  label="YOUR EMAIL"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                />

                <AnimatedInput
                  label="YOUR MESSAGE"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  isTextarea
                />
              </div>

              <motion.button
                type="submit"
                disabled={status.submitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`
                  w-full mt-8 py-5 rounded-2xl font-bold text-lg
                  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                  text-white shadow-lg shadow-purple-500/25
                  hover:shadow-xl hover:shadow-purple-500/30
                  disabled:opacity-70 disabled:cursor-not-allowed
                  transition-all duration-300
                  flex items-center justify-center gap-3
                `}
              >
                {status.submitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </motion.button>

              <AnimatePresence>
                {status.submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-6 p-4 rounded-xl bg-green-500/10 border border-green-500/30 flex items-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-400" />
                    </div>
                    <span className="text-green-400 font-medium">Message sent successfully!</span>
                  </motion.div>
                )}

                {status.error && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-center"
                  >
                    {status.error}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;