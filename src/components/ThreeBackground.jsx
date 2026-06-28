import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, Sphere, Torus, Octahedron } from '@react-three/drei';

function NeumorphicShape({ Component, args, position, rotation, speed }) {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * speed;
      meshRef.current.rotation.y += delta * speed * 0.8;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2} position={position}>
      <Component ref={meshRef} args={args} rotation={rotation}>
        <meshPhysicalMaterial
          color="#1A1B1E"
          metalness={0.1}
          roughness={0.7}
          clearcoat={0.1}
          clearcoatRoughness={0.5}
        />
      </Component>
    </Float>
  );
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 z-[-1] bg-neu-bg">
      <Canvas camera={{ position: [0, 0, 20], fov: 45 }}>
        <color attach="background" args={['#1A1B1E']} />
        
        {/* Neumorphic Lighting Setup */}
        <ambientLight intensity={0.5} />
        {/* Top-left light (bright) */}
        <directionalLight position={[-10, 10, 10]} intensity={2.5} color="#ffffff" />
        {/* Bottom-right light (dark/shadow) */}
        <directionalLight position={[10, -10, -10]} intensity={0.5} color="#000000" />
        {/* Slight accent light */}
        <pointLight position={[0, 0, 15]} intensity={0.5} color="#4ade80" />
        
        {/* Floating Shapes */}
        <NeumorphicShape Component={Torus} args={[3, 1, 16, 100]} position={[-8, 4, -5]} rotation={[0, 0, 0]} speed={0.2} />
        <NeumorphicShape Component={Sphere} args={[2.5, 32, 32]} position={[8, -5, -2]} rotation={[0, 0, 0]} speed={0.3} />
        <NeumorphicShape Component={Octahedron} args={[3]} position={[5, 6, -8]} rotation={[0.5, 0.5, 0]} speed={0.15} />
        <NeumorphicShape Component={Torus} args={[2, 0.5, 16, 100]} position={[-6, -6, 2]} rotation={[1, 0, 0]} speed={0.25} />
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
