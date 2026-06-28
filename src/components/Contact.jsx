import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Github, Linkedin, Instagram, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resultMessage, setResultMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResultMessage('');
    
    const formData = new FormData(event.target);

    // Web3Forms Access Key
    formData.append("access_key", "fb7378c0-166c-4661-9999-11888220f53b");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResultMessage("Message transmitted successfully!");
        setIsSuccess(true);
        event.target.reset();
      } else {
        setResultMessage(data.message || "Transmission failed. Please try again.");
        setIsSuccess(false);
      }
    } catch (error) {
      console.error(error);
      setResultMessage("Transmission error. Please check your connection.");
      setIsSuccess(false);
    }
    
    setIsSubmitting(false);
    
    // Clear success message after 5 seconds
    if(isSuccess) {
        setTimeout(() => {
            setResultMessage('');
        }, 5000);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="neu-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 neu-icon-btn text-neu-accent mb-6">
            <Mail size={28} />
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Secure <span className="text-neu-accent">Communications</span></h2>
          <p className="text-neu-text/70 max-w-2xl mx-auto">Open for collaborations, consulting, and building scalable systems.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="neu-card p-8 md:p-10"
          >
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={onSubmit}>
              <div>
                <label className="block text-sm font-medium text-neu-text/80 mb-2 pl-2">Protocol Identification (Name)</label>
                <input type="text" name="name" required className="neu-input" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-neu-text/80 mb-2 pl-2">Return Address (Email)</label>
                <input type="email" name="email" required className="neu-input" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-neu-text/80 mb-2 pl-2">Encrypted Payload (Message)</label>
                <textarea name="message" required className="neu-input min-h-[150px] resize-y" placeholder="Your message here..."></textarea>
              </div>
              
              {resultMessage && (
                <div className={`p-4 rounded-xl flex items-center gap-3 text-sm font-medium ${isSuccess ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                  {isSuccess ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
                  {resultMessage}
                </div>
              )}

              <button type="submit" disabled={isSubmitting} className="neu-button-primary w-full mt-4 disabled:opacity-50 disabled:cursor-not-allowed">
                {isSubmitting ? 'Transmitting...' : 'Transmit Message'}
                {!isSubmitting && <Send size={18} />}
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8 lg:pl-12"
          >
            <div className="neu-card-pressed p-8 border border-neu-accent/10">
              <h3 className="text-xl font-bold mb-4">Direct Channel</h3>
              <p className="text-neu-text/70 mb-6">Reach out directly via email for urgent inquiries or platform deployment discussions.</p>
              <a href="mailto:founder@sentrasec.in" className="flex items-center gap-3 text-neu-accent hover:underline font-mono text-lg">
                <Mail size={20} /> founder@sentrasec.in
              </a>
            </div>

            <div className="neu-card p-8">
              <h3 className="text-xl font-bold mb-6">Social Nodes</h3>
              <div className="flex gap-4">
                <a href="https://github.com/Arjumaan" target="_blank" rel="noreferrer" className="w-14 h-14 neu-icon-btn">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/arjumaan/" className="w-14 h-14 neu-icon-btn">
                  <Linkedin size={24} />
                </a>
                <a href="https://www.instagram.com/mr.maan_offxl/" className="w-14 h-14 neu-icon-btn">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}