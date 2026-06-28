/* eslint-disable react/no-unknown-property */
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Github, Linkedin, Instagram, Mail, ChevronRight } from 'lucide-react';

const ParticleWave = () => {
  const pointsRef = useRef();
  
  const count = 3000;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30; // X
      pos[i * 3 + 1] = (Math.random() - 0.5) * 2;  // Y
      pos[i * 3 + 2] = (Math.random() - 0.5) * 30; // Z
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime() * 0.4;
    const array = pointsRef.current.geometry.attributes.position.array;
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const x = array[i3];
      const z = array[i3 + 2];
      // Organic, smooth wave math
      array[i3 + 1] = Math.sin(x * 0.4 + time) * Math.cos(z * 0.4 + time) * 1.5;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    pointsRef.current.rotation.y = time * 0.1;
  });

  return (
    <points ref={pointsRef} position={[0, -2, -5]}>
      <bufferGeometry>
        <bufferAttribute 
          attach="attributes-position" 
          count={positions.length / 3} 
          array={positions} 
          itemSize={3} 
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.06} 
        color="#4ade80" 
        transparent 
        opacity={0.8} 
        blending={THREE.AdditiveBlending} 
        depthWrite={false} 
      />
    </points>
  );
};

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-neu-pressed overflow-hidden bg-neu-bg min-h-[500px] flex items-end">
      
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 h-full pointer-events-none">
        <Canvas camera={{ position: [0, 2, 5], fov: 60 }}>
          <fog attach="fog" args={['#1A1B1E', 5, 20]} />
          <ParticleWave />
        </Canvas>
        
        {/* Gradients to fade out the top edge */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-neu-bg to-transparent z-10" />
      </div>

      {/* Footer Content */}
      <div className="relative z-20 w-full py-16 pb-8">
        <div className="neu-container">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            
            {/* Brand Section */}
            <div className="col-span-1 md:col-span-5 flex flex-col gap-6">
              <div className="w-20 h-20 bg-neu-bg shadow-neu-pressed p-2 flex items-center justify-center rounded-full border border-neu-accent/20">
                <img src="/ar-logo.png" alt="AR Logo" className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(74,222,128,0.5)]" />
              </div>
              <div>
                <h2 className="text-3xl font-display font-bold text-neu-text tracking-wide mb-2">ARJUMAAN M.</h2>
                <p className="text-sm font-medium text-neu-text/70 leading-relaxed max-w-sm">
                  Architecting secure, highly scalable AI platforms and robust decentralized architectures. Building the infrastructure of tomorrow.
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-span-1 md:col-span-3 flex flex-col gap-4 md:pt-4">
              <h3 className="text-lg font-bold text-neu-accent tracking-widest uppercase mb-2">Navigation</h3>
              <a href="#about" className="flex items-center gap-2 text-neu-text/70 hover:text-cyan-400 transition-colors">
                <ChevronRight size={16} /> Beyond the Code
              </a>
              <a href="#experience" className="flex items-center gap-2 text-neu-text/70 hover:text-cyan-400 transition-colors">
                <ChevronRight size={16} /> Professional Experience
              </a>
              <a href="#projects" className="flex items-center gap-2 text-neu-text/70 hover:text-cyan-400 transition-colors">
                <ChevronRight size={16} /> Project Vault
              </a>
              <a href="#contact" className="flex items-center gap-2 text-neu-text/70 hover:text-cyan-400 transition-colors">
                <ChevronRight size={16} /> Secure Comms
              </a>
            </div>

            {/* Social Nodes */}
            <div className="col-span-1 md:col-span-4 flex flex-col gap-4 md:pt-4 md:items-end">
              <h3 className="text-lg font-bold text-neu-accent tracking-widest uppercase mb-2">Social Nodes</h3>
              <div className="flex flex-wrap gap-4 md:justify-end">
                <a href="https://github.com/Arjumaan" target="_blank" rel="noreferrer" className="w-12 h-12 bg-neu-bg shadow-neu-flat flex items-center justify-center rounded-full hover:text-neu-accent hover:shadow-neu-pressed transition-all group">
                  <Github size={20} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://www.linkedin.com/in/arjumaan/" target="_blank" rel="noreferrer" className="w-12 h-12 bg-neu-bg shadow-neu-flat flex items-center justify-center rounded-full hover:text-neu-accent hover:shadow-neu-pressed transition-all group">
                  <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://www.instagram.com/mr.maan_offxl/" target="_blank" rel="noreferrer" className="w-12 h-12 bg-neu-bg shadow-neu-flat flex items-center justify-center rounded-full hover:text-neu-accent hover:shadow-neu-pressed transition-all group">
                  <Instagram size={20} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="mailto:founder@sentrasec.in" className="w-12 h-12 bg-neu-bg shadow-neu-flat flex items-center justify-center rounded-full hover:text-neu-accent hover:shadow-neu-pressed transition-all group">
                  <Mail size={20} className="group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

          </div>

          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-neu-accent/20 to-transparent mb-8"></div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-neu-text/40 tracking-widest uppercase">
            <p>&copy; {new Date().getFullYear()} ARJUMAAN M. ALL RIGHTS RESERVED.</p>
            <p>POWERED BY SENTRASEC AI SYSTEMS</p>
          </div>

        </div>
      </div>
    </footer>
  );
}