'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Environment, Html, useGLTF, Center } from '@react-three/drei';
import { Suspense, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Hotspot {
  id: string;
  position: [number, number, number];
  label: string;      // Short label shown on the 3D marker
  title: string;      // Panel heading
  content: string;    // Scrollable body text (prompt or description)
  image?: string;     // Optional image URL
}

interface InteractiveModelViewerProps {
  modelUrl?: string;           // .glb file path, undefined = show placeholder
  hotspots?: Hotspot[];
  label?: string;              // Top-left badge text
  backgroundColor?: string;
}

// ─── Placeholder Mesh (used when no modelUrl is provided) ─────────────────────

function PlaceholderMesh({ shift }: { shift: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    // Slow auto-rotate when no hotspot is active
    if (!shift) meshRef.current.rotation.y += delta * 0.15;
    // Smooth horizontal shift when a hotspot is open
    const targetX = shift ? -1.2 : 0;
    meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetX, 0.06);
    // Gentle hover
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.12;
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.3, 1]} />
      <meshStandardMaterial color="#c5a059" metalness={0.85} roughness={0.15} wireframe={false} />
    </mesh>
  );
}

// ─── Real GLTF Model ──────────────────────────────────────────────────────────

function GLTFModel({ url, shift }: { url: string; shift: boolean }) {
  const { scene } = useGLTF(url);
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (!groupRef.current) return;
    const targetX = shift ? -1.4 : 0;
    groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetX, 0.06);
  });

  return (
    <group ref={groupRef}>
      <primitive object={scene} />
    </group>
  );
}

// ─── Hotspot Marker (3D HTML element) ────────────────────────────────────────

function HotspotMarker({
  hotspot,
  isActive,
  onClick,
}: {
  hotspot: Hotspot;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <Html position={hotspot.position} center distanceFactor={4} zIndexRange={[10, 20]}>
      <button
        onClick={onClick}
        className={`group relative flex items-center justify-center transition-all duration-300 ${isActive ? 'scale-125' : 'scale-100 hover:scale-110'}`}
        style={{ pointerEvents: 'all' }}
        title={hotspot.label}
      >
        {/* Pulse ring */}
        {!isActive && (
          <span className="absolute inline-flex h-8 w-8 rounded-full bg-yellow-500/40 animate-ping" />
        )}
        {/* Core dot */}
        <span
          className={`relative inline-flex items-center justify-center w-7 h-7 rounded-full border-2 text-[9px] font-bold tracking-widest transition-all duration-300 ${
            isActive
              ? 'bg-yellow-500 border-yellow-300 text-black shadow-[0_0_20px_rgba(234,179,8,0.8)]'
              : 'bg-black/70 border-yellow-600 text-yellow-400 shadow-[0_0_12px_rgba(197,160,89,0.5)] hover:bg-yellow-900/60'
          }`}
        >
          ◉
        </span>
        {/* Label tooltip */}
        <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap text-[8px] tracking-[0.2em] uppercase text-yellow-500/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/80 px-2 py-0.5 backdrop-blur-sm border border-yellow-900/40">
          {hotspot.label}
        </span>
      </button>
    </Html>
  );
}

// ─── Info Panel ───────────────────────────────────────────────────────────────

function InfoPanel({
  hotspot,
  onClose,
}: {
  hotspot: Hotspot | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {hotspot && (
        <>
          {/* Desktop: slide in from right */}
          <motion.div
            key="desktop-panel"
            initial={{ x: '110%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '110%', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 280, damping: 30 }}
            className="hidden lg:flex absolute top-0 right-0 h-full w-[48%] flex-col bg-[#0a0a0a]/95 backdrop-blur-xl border-l border-yellow-900/30 z-20"
          >
            <PanelContent hotspot={hotspot} onClose={onClose} />
          </motion.div>

          {/* Mobile: slide up from bottom */}
          <motion.div
            key="mobile-panel"
            initial={{ y: '110%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '110%', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 280, damping: 30 }}
            className="lg:hidden absolute bottom-0 left-0 right-0 max-h-[60%] flex flex-col bg-[#0a0a0a]/97 backdrop-blur-xl border-t border-yellow-900/30 z-20 rounded-t-2xl"
          >
            <PanelContent hotspot={hotspot} onClose={onClose} />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function PanelContent({ hotspot, onClose }: { hotspot: Hotspot; onClose: () => void }) {
  return (
    <>
      {/* Header */}
      <div className="flex-shrink-0 px-6 pt-6 pb-4 border-b border-yellow-900/20">
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="text-[9px] tracking-[0.3em] uppercase text-yellow-600 block mb-1">
              Wivern — Design Layer
            </span>
            <h3 className="text-white text-xl font-light tracking-wider" style={{ fontFamily: 'Playfair Display, serif' }}>
              {hotspot.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-yellow-400 transition-colors text-lg leading-none flex-shrink-0 w-7 h-7 flex items-center justify-center border border-gray-700 hover:border-yellow-700"
          >
            ✕
          </button>
        </div>
        <div className="h-px bg-gradient-to-r from-yellow-700 to-transparent mt-4" />
      </div>

      {/* Body - scrollable */}
      <div className="flex-1 overflow-y-auto px-6 py-5 scrollbar-thin">
        {hotspot.image && (
          <div className="mb-4 aspect-video bg-black border border-gray-800 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={hotspot.image} alt={hotspot.title} className="w-full h-full object-cover opacity-80" />
          </div>
        )}

        {/* Prompt badge */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[8px] tracking-[0.25em] uppercase text-yellow-700 border border-yellow-900/40 px-2 py-0.5 bg-yellow-900/10">
            Generation Prompt
          </span>
        </div>

        {/* Scrollable prompt text */}
        <div className="bg-[#111111] border border-gray-800/60 p-4 rounded-sm">
          <p className="text-gray-300 text-[12px] leading-[1.8] font-light tracking-wide whitespace-pre-wrap">
            {hotspot.content}
          </p>
        </div>

        {/* Decorative bottom */}
        <div className="mt-5 pt-4 border-t border-gray-800/40 flex items-center gap-2">
          <div className="w-1 h-1 rounded-full bg-yellow-700" />
          <span className="text-[8px] tracking-widest uppercase text-gray-600">
            Wivern Digital — Prompt Engineering
          </span>
        </div>
      </div>
    </>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────

export default function InteractiveModelViewer({
  modelUrl,
  hotspots = [],
  label = 'Proto-Avatar Engine',
}: InteractiveModelViewerProps) {
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);

  const handleHotspotClick = useCallback((hotspot: Hotspot) => {
    setActiveHotspot((prev) => (prev?.id === hotspot.id ? null : hotspot));
  }, []);

  const handleClose = useCallback(() => {
    setActiveHotspot(null);
  }, []);

  const isPanelOpen = activeHotspot !== null;

  return (
    <div className="relative w-full h-full min-h-[480px] bg-[#080808] overflow-hidden">
      {/* Top-left badge */}
      <div className="absolute top-4 left-4 z-10 pointer-events-none">
        <span className="text-[9px] tracking-[0.3em] uppercase text-yellow-600/70 border border-yellow-600/30 px-3 py-1.5 bg-black/60 backdrop-blur-md">
          {label}
        </span>
      </div>

      {/* Bottom-right hint */}
      {!isPanelOpen && (
        <div className="absolute bottom-4 right-4 z-10 pointer-events-none text-right flex flex-col gap-1">
          <span className="text-[9px] tracking-widest uppercase text-gray-500">Drag to rotate · Scroll to zoom</span>
          {hotspots.length > 0 && (
            <span className="text-[8px] tracking-widest uppercase text-yellow-700/60">
              ◉ {hotspots.length} interactive hotspot{hotspots.length !== 1 ? 's' : ''}
            </span>
          )}
        </div>
      )}

      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 0.5, 5], fov: 42 }}
        style={{ background: 'transparent' }}
        gl={{ antialias: true, alpha: true }}
        className="cursor-grab active:cursor-grabbing"
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[8, 12, 5]} intensity={1.2} color="#f0e0c0" />
        <directionalLight position={[-8, 4, -5]} intensity={0.4} color="#8090ff" />

        <Suspense fallback={null}>
          <Center>
            {modelUrl ? (
              <GLTFModel url={modelUrl} shift={isPanelOpen} />
            ) : (
              <PlaceholderMesh shift={isPanelOpen} />
            )}
          </Center>

          {/* Hotspot markers */}
          {hotspots.map((hs) => (
            <HotspotMarker
              key={hs.id}
              hotspot={hs}
              isActive={activeHotspot?.id === hs.id}
              onClick={() => handleHotspotClick(hs)}
            />
          ))}

          <Environment preset="studio" />
          <OrbitControls
            enablePan={false}
            enableZoom={true}
            minDistance={2.5}
            maxDistance={9}
            autoRotate={!isPanelOpen}
            autoRotateSpeed={0.6}
            enableDamping
            dampingFactor={0.08}
          />
        </Suspense>
      </Canvas>

      {/* Info Panel (renders outside Canvas, over the top) */}
      <InfoPanel hotspot={activeHotspot} onClose={handleClose} />
    </div>
  );
}
