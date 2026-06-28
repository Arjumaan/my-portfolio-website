import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-neu-bg">
      <div className="neu-card-pressed w-80 h-80 rounded-full flex items-center justify-center mb-8 relative">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute inset-2 border-t-2 border-neu-accent rounded-full"
        />
        <div className="w-72 h-72 bg-neu-bg shadow-neu-flat rounded-full flex items-center justify-center overflow-hidden p-2">
          <img src="/ar-logo.png" alt="AR Logo" className="w-full h-full object-contain" />
        </div>
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-neu-text tracking-[0.2em] font-mono text-sm uppercase"
      >
        Initializing Secure Environment...
      </motion.p>
    </div>
  );
}