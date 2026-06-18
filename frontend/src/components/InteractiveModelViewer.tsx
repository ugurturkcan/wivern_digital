'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { CameraControls, Environment, Html, useGLTF, Sparkles, ContactShadows } from '@react-three/drei';
import { Suspense, useRef, useState, useCallback, useEffect } from 'react';
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

function PlaceholderMesh() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
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

function GLTFModel({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

// ─── Scene Wrapper (Handles Shifting) ─────────────────────────────────────────

function SceneGroup({
  modelUrl,
  hotspots,
  activeHotspot,
  onHotspotClick,
}: {
  modelUrl?: string;
  hotspots: Hotspot[];
  activeHotspot: Hotspot | null;
  onHotspotClick: (h: Hotspot) => void;
}) {
  const groupRef = useRef<THREE.Group>(null);

  return (
    <group ref={groupRef}>
      {modelUrl ? <GLTFModel url={modelUrl} /> : <PlaceholderMesh />}
      
      {/* Hotspot markers are now children of the shifting group */}
      {hotspots.map((hs) => (
        <HotspotMarker
          key={hs.id}
          hotspot={hs}
          isActive={activeHotspot?.id === hs.id}
          onClick={() => onHotspotClick(hs)}
        />
      ))}
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
    <Html position={hotspot.position} center zIndexRange={[10, 20]} wrapperClass="pointer-events-none">
      <button
        onPointerDown={(e) => {
          e.stopPropagation();
          onClick();
        }}
        className={`group relative flex items-center justify-center transition-all duration-500 pointer-events-auto ${isActive ? 'scale-110' : 'scale-100'}`}
        title={hotspot.label}
      >
        {/* Elegant Pulse ring */}
        {!isActive && (
          <span className="absolute inline-flex h-10 w-10 rounded-full border border-yellow-500/40 animate-[ping_2.5s_cubic-bezier(0,0,0.2,1)_infinite]" />
        )}
        {/* Core aesthetic dot */}
        <span
          className={`relative inline-flex items-center justify-center w-6 h-6 rounded-full border-[1.5px] backdrop-blur-md transition-all duration-500 ${
            isActive
              ? 'bg-yellow-500/90 border-yellow-300 shadow-[0_0_25px_rgba(234,179,8,0.9)]'
              : 'bg-black/40 border-yellow-500/70 shadow-[0_0_10px_rgba(234,179,8,0.3)] group-hover:bg-yellow-900/60 group-hover:border-yellow-400 group-hover:shadow-[0_0_15px_rgba(234,179,8,0.6)]'
          }`}
        >
          <span className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${isActive ? 'bg-black scale-150' : 'bg-yellow-500 group-hover:bg-yellow-300 group-hover:scale-125'}`} />
        </span>
        
        {/* Minimalist Label tooltip (shows on the right) */}
        <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 whitespace-nowrap text-[9px] tracking-[0.25em] uppercase text-yellow-100/90 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0 bg-black/60 px-3 py-1.5 backdrop-blur-md border-l border-yellow-500/50">
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

          {/* Mobile: slide up full overlay */}
          <motion.div
            key="mobile-panel"
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 280, damping: 30 }}
            className="lg:hidden absolute inset-0 flex flex-col bg-[#0a0a0a]/95 backdrop-blur-md z-20"
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

// ─── Camera Controller ────────────────────────────────────────────────────────

function CameraController({ activeHotspot }: { activeHotspot: Hotspot | null }) {
  const controlsRef = useRef<any>(null);

  useEffect(() => {
    if (!controlsRef.current) return;
    if (activeHotspot) {
      const [hx, hy, hz] = activeHotspot.position;
      
      // Determine if we are on mobile (panel comes from bottom) or desktop (panel comes from right)
      const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;
      
      // On desktop, target is shifted to the right (+0.4) so the model appears on the left
      // On mobile, target is shifted down (-0.3) so the model appears on the top
      const targetOffsetX = isMobile ? 0 : 0.4;
      const targetOffsetY = isMobile ? -0.3 : 0;

      // Fly to look at hotspot with the offsets
      controlsRef.current.setLookAt(
        hx + targetOffsetX, hy + targetOffsetY + 0.1, hz + 1.6, // camera position
        hx + targetOffsetX, hy + targetOffsetY, hz, // target position
        true // animate
      );
    } else {
      // Reset to default overview
      controlsRef.current.setLookAt(
        0, 0.5, 5, // camera position
        0, 0, 0, // target position
        true // animate
      );
    }
  }, [activeHotspot]);

  useFrame((state, delta) => {
    if (controlsRef.current && !activeHotspot) {
      // Auto-rotate when no hotspot is active
      controlsRef.current.azimuthAngle += 0.6 * delta * (Math.PI / 180);
    }
  });

  return (
    <CameraControls 
      ref={controlsRef} 
      makeDefault 
      minDistance={2.5} 
      maxDistance={9}
      dollySpeed={2}
      azimuthRotateSpeed={2}
      polarRotateSpeed={2}
      smoothTime={0.1}
      draggingSmoothTime={0.05}
      onChange={(e) => {
        // Triggered when camera moves
        if (activeHotspot && controlsRef.current) {
          // If we manually move the camera while a hotspot is active, we could break out, but for now we let CameraControls handle it smoothly
        }
      }}
    />
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
        gl={{ 
          antialias: true, 
          alpha: true, 
          powerPreference: "high-performance",
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.2
        }}
        dpr={[1, 1.5]}
        className="cursor-grab active:cursor-grabbing"
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[8, 12, 5]} intensity={1.5} color="#f0e0c0" />
        <directionalLight position={[-8, 4, -5]} intensity={0.6} color="#8090ff" />

        <Suspense fallback={
          <Html center zIndexRange={[100, 100]}>
            <div className="flex flex-col items-center justify-center gap-4 bg-black/80 p-8 rounded-lg backdrop-blur-md border border-yellow-900/30 shadow-2xl">
              <div className="w-10 h-10 border-2 border-yellow-900/40 border-t-yellow-500 rounded-full animate-spin" />
              <div className="flex flex-col items-center gap-1">
                <span className="text-[10px] tracking-[0.3em] uppercase text-yellow-500 font-bold">
                  Initializing Engine
                </span>
                <span className="text-[8px] tracking-widest uppercase text-gray-500">
                  Loading neural assets...
                </span>
              </div>
            </div>
          </Html>
        }>
          <SceneGroup
            modelUrl={modelUrl}
            hotspots={hotspots}
            activeHotspot={activeHotspot}
            onHotspotClick={handleHotspotClick}
          />

          {/* Magical Aura / Gold Sparkles (Optimized count) */}
          <Sparkles 
            count={20} 
            scale={4.5} 
            size={2} 
            speed={0.3} 
            opacity={0.6} 
            color="#c5a059" 
            noise={0.2}
          />

          {/* Realistic Grounding Shadow */}
          <ContactShadows 
            position={[0, -1.0, 0]} 
            opacity={0.8} 
            scale={5} 
            blur={2.5} 
            far={4} 
            resolution={256}
            color="#000000"
          />

          {/* Photorealistic Lighting Environment */}
          <Environment preset="city" resolution={256} />
          <CameraController activeHotspot={activeHotspot} />
        </Suspense>
      </Canvas>

      {/* Info Panel (renders outside Canvas, over the top) */}
      <InfoPanel hotspot={activeHotspot} onClose={handleClose} />
    </div>
  );
}

// Preload the specific model we use in the demo
useGLTF.preload('/avatar.glb');
