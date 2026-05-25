'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, MeshDistortMaterial, Center, Float } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';

function PlaceholderAvatar() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Rotate the artifact slowly to make it feel alive and mysterious
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
      meshRef.current.rotation.x += delta * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef}>
        <octahedronGeometry args={[1.5, 0]} />
        <MeshDistortMaterial
          color="#c5a059"
          envMapIntensity={1}
          clearcoat={0.8}
          clearcoatRoughness={0}
          metalness={0.9}
          roughness={0.2}
          distort={0.4}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

export default function ModelViewer() {
  return (
    <div className="w-full h-full min-h-[400px] relative cursor-grab active:cursor-grabbing">
      {/* Decorative Overlays */}
      <div className="absolute top-4 left-4 z-10 pointer-events-none">
        <span className="text-[9px] tracking-[0.3em] uppercase text-yellow-600/70 border border-yellow-600/30 px-3 py-1.5 bg-black/60 backdrop-blur-md">
          Proto-Avatar Engine
        </span>
      </div>
      <div className="absolute bottom-4 right-4 z-10 pointer-events-none text-right flex flex-col gap-1">
        <span className="text-[9px] tracking-widest uppercase text-gray-400">Interact to rotate</span>
        <span className="text-[8px] tracking-widest uppercase text-yellow-700/50">Wivern Digital Space</span>
      </div>
      
      {/* 3D Canvas */}
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#e8d5a3" />
        <spotLight position={[-10, 10, -10]} intensity={2} color="#ffffff" />
        
        <Suspense fallback={null}>
          <Center>
            <PlaceholderAvatar />
          </Center>
          <Environment preset="city" />
          <OrbitControls 
            enablePan={false}
            enableZoom={true}
            minDistance={2}
            maxDistance={8}
            autoRotate={false}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
