import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const Loader = () => {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-background z-50 overflow-hidden"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background Aurora */}
      <div className="aurora"></div>

      {/* Animated Rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="absolute w-64 h-64 rounded-full border border-indigo-500/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-80 h-80 rounded-full border border-pink-500/10"
          animate={{ rotate: -360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full border border-purple-500/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <motion.div
        className="relative flex flex-col items-center justify-center z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-8"
        >
          <span className="text-6xl font-extrabold font-display">
            <span className="gradient-text">NM</span>
            <span className="text-white">.</span>
          </span>
          <Sparkles className="absolute -top-2 -right-4 w-6 h-6 text-yellow-400 animate-pulse" />
        </motion.div>

        {/* Loading Bar */}
        <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Loading Text */}
        <motion.p
          className="mt-6 font-mono text-xs tracking-[0.3em] text-white/40 uppercase"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Loading Experience
        </motion.p>
      </motion.div>

      {/* Floating Particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </motion.div>
  );
};

export default Loader;