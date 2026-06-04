'use client';

import React, { useState } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { PenTool, User, Mic, Zap, Eye, Share2 } from 'lucide-react';

const tabs = [
  {
    id: 'formulation',
    label: 'Formulation',
    heading: 'Structural Analysis & Parameter Setting',
    body: 'Every avatar construct begins with a rigorous formulation phase. The client\'s conceptual requirements are deconstructed into atomic parameters—identity, aesthetic range, vocal signature, and somatic baseline. Each variable is catalogued before a single generative cycle is initiated.',
    items: ['Identity deconstruction & archetype mapping', 'Aesthetic parameter calibration', 'Negative space definition — what the entity is not', 'Structural blueprint approval before synthesis'],
    imgSrc: '/images/pipeline_bg_1778958130205.png',
  },
  {
    id: 'infusion',
    label: 'Infusion',
    heading: 'Application of Animation Logic',
    body: 'Once the structural blueprint is ratified, infusion begins. Raw generative outputs are subjected to localized inpainting, control network alignment, and iterative refinement cycles. The latent space is navigated with surgical precision until the static form achieves fidelity.',
    items: ['Latent space navigation & seed locking', 'ControlNet skeleton alignment', 'Localized inpainting for artifact suppression', 'High-fidelity static asset extraction'],
    imgSrc: '/images/specimen_4_1778958114762.png',
  },
  {
    id: 'rendering',
    label: 'Rendering',
    heading: 'Temporal Formalization & Final Output',
    body: 'The final phase transforms static constructs into living, animated entities. Generative video sequencing, audio-to-labial synchronization, and temporal coherence algorithms are applied. The output is a 30-second sequence of absolute structural fidelity.',
    items: ['Generative video sequencing (30s output)', 'Audio-to-labial synchronization', 'Temporal coherence & artifact suppression', 'Final quality certification by Master Avatarist'],
    imgSrc: '/images/specimen_1_1778958073711.png',
  },
];

import dynamic from 'next/dynamic';

const ActiveSpecimens = dynamic(() => import('@/components/ActiveSpecimens'), {
  ssr: true,
});

const InteractiveModelViewer = dynamic(() => import('@/components/InteractiveModelViewer'), {
  ssr: false, // Important: 3D canvas must only render on client
});



export default function HomePage() {
  const [activeTab, setActiveTab] = useState('formulation');
  const currentTab = tabs.find((t) => t.id === activeTab)!;

  return (
    <>
      <Nav />
      <main className="selection:bg-yellow-900/40 selection:text-white">

        {/* ─── HERO ─────────────────────────────────────────────── */}
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#111111]">
          {/* Background image */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Pulsing Aura (GPU Optimized) */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              style={{ 
                willChange: "transform, opacity", 
                transform: "translateZ(0)",
                background: "radial-gradient(circle, rgba(133,77,14,0.4) 0%, rgba(202,138,4,0.1) 40%, transparent 70%)"
              }}
              className="absolute w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full pointer-events-none"
            />
            {/* The Street Animation Image */}
            <motion.div
              initial={{ scale: 1.05, opacity: 0 }}
              animate={{ scale: [1.05, 1.15, 1.05], opacity: 0.85 }}
              transition={{
                scale: { duration: 25, repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: 1.5, ease: "easeOut" }
              }}
              style={{ willChange: "transform, opacity" }}
              className="absolute inset-0 w-full h-full pointer-events-none z-0"
            >
              <Image src="/wivern_digital.png" alt="Wivern Digital Street" fill priority className="object-cover object-[15%_center] lg:object-center" />
            </motion.div>
            {/* Fog Layer 1 - Slow drifting mist */}
            <motion.div
              animate={{
                x: ["-5%", "10%", "-10%", "-5%"],
                y: ["0%", "5%", "-5%", "0%"],
                scale: [1.2, 1.5, 1.3, 1.2],
                opacity: [0.15, 0.4, 0.2, 0.15],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{ willChange: "transform, opacity" }}
              className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(200,200,200,0.15)_0%,transparent_60%)] blur-[80px]"
            />
            {/* Fog Layer 2 - Counter drifting mist */}
            <motion.div
              animate={{
                x: ["10%", "-15%", "0%", "10%"],
                y: ["-5%", "0%", "5%", "-5%"],
                scale: [1.5, 1.2, 1.4, 1.5],
                opacity: [0.1, 0.3, 0.15, 0.1],
              }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              style={{ willChange: "transform, opacity" }}
              className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,rgba(200,200,200,0.12)_0%,transparent_70%)] blur-[100px]"
            />

            {/* Candle Lighting Left (Flickering Warm Amber) */}
            <motion.div
              animate={{
                opacity: [0.5, 0.8, 0.6, 0.9, 0.7, 0.5],
                scale: [1, 1.05, 0.98, 1.03, 0.96, 1],
              }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              style={{ willChange: "transform, opacity" }}
              className="absolute -bottom-[10%] -left-[5%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-[radial-gradient(circle,rgba(217,119,6,0.35)_0%,rgba(180,83,9,0.15)_40%,transparent_70%)] pointer-events-none mix-blend-screen z-0"
            />
            {/* Candle Lighting Right (Flickering Warm Gold) */}
            <motion.div
              animate={{
                opacity: [0.4, 0.7, 0.5, 0.8, 0.6, 0.4],
                scale: [0.95, 1.02, 0.97, 1.04, 0.98, 0.95],
              }}
              transition={{ duration: 2.7, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              style={{ willChange: "transform, opacity" }}
              className="absolute bottom-[5%] -right-[10%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] bg-[radial-gradient(circle,rgba(245,158,11,0.25)_0%,rgba(180,83,9,0.1)_40%,transparent_70%)] pointer-events-none mix-blend-screen z-0"
            />

            {/* Dark gradient overlay for text readability without obscuring the street */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-[#111111]/90 z-0 pointer-events-none" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Left — Text */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <span className="section-label">Enter the Workshop</span>
                  <div className="flex-1 h-px bg-yellow-800/40" />
                  <span className="text-[10px] tracking-widest uppercase text-yellow-700 border border-yellow-800/40 px-2 py-0.5">Est. 2011</span>
                </div>
                <h1 className="serif-font text-6xl lg:text-8xl text-white leading-none tracking-wide mb-4">
                  Digital<br />
                  <span className="gradient-gold">Alchemy</span>
                </h1>
                <p className="text-gray-400 text-lg font-light leading-relaxed max-w-md mt-6 mb-10">
                  Precision engineering of bespoke AI avatars. Ancient aesthetic & ethical principles coupled with modern methodology to embody your voice online.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/commissions"
                    className="text-[11px] font-medium tracking-[0.2em] uppercase bg-yellow-700 text-black px-6 sm:px-8 py-3.5 hover:bg-yellow-500 transition-all duration-300"
                  >
                    View Tariffs
                  </Link>
                  <Link
                    href="#specimens"
                    className="text-[11px] font-medium tracking-[0.2em] uppercase border border-yellow-800 text-yellow-600 px-6 sm:px-8 py-3.5 hover:border-yellow-600 hover:text-white transition-all duration-300"
                  >
                    Active Specimens
                  </Link>
                </div>
              </motion.div>

              {/* Right — Staggered Image Grid */}
              <div className="hidden lg:grid grid-cols-2 gap-3 h-[560px]">
                {/* Tall left */}
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="video-card bg-black rounded-sm row-span-2 overflow-hidden relative"
                >
                  <Image src="/images/specimen_2_1778958085693.png" alt="Entity Sylph" fill priority sizes="(max-width: 768px) 100vw, 33vw" className="object-cover opacity-75 filter contrast-125 grayscale-[15%]" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                    <p className="serif-font text-white text-sm tracking-wider">Entity: Sylph</p>
                    <p className="text-yellow-600 text-[9px] tracking-wider uppercase font-semibold mt-1 truncate">ESOTERICA, OCCULT, WICCA, MAGICK</p>
                  </div>
                </motion.div>
                {/* Short top right */}
                <motion.div 
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="video-card bg-black rounded-sm overflow-hidden relative"
                >
                  <Image src="/images/specimen_1_1778958073711.png" alt="Entity Magus" fill priority sizes="(max-width: 768px) 100vw, 33vw" className="object-cover opacity-75 filter contrast-125 grayscale-[15%]" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 to-transparent">
                    <p className="serif-font text-white text-sm tracking-wider">Entity: Magus</p>
                    <p className="text-yellow-600 text-[9px] tracking-wider uppercase font-semibold mt-1 truncate">PHILOSOPHY, ANCIENT HISTORY, ART</p>
                  </div>
                </motion.div>
                {/* Short bottom right */}
                <motion.div 
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="video-card bg-black rounded-sm overflow-hidden relative"
                >
                  <Image src="/images/specimen_3_1778958099280.png" alt="Entity Duskweaver" fill priority sizes="(max-width: 768px) 100vw, 33vw" className="object-cover opacity-75 filter contrast-125 grayscale-[15%]" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 to-transparent">
                    <p className="serif-font text-white text-sm tracking-wider">Entity: Duskweaver</p>
                    <p className="text-yellow-600 text-[9px] tracking-wider uppercase font-semibold mt-1 truncate">ETHICAL HACKING, CYBERSECURITY, AI</p>
                  </div>
                </motion.div>
              </div>

            </div>
          </div>
        </section>

        {/* ─── LIVE 3D PREVIEW ──────────────────────────────────── */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative py-32 bg-[#0a0a0a] border-t border-yellow-900/20 overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(217,119,6,0.05)_0%,transparent_70%)] pointer-events-none" />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div data-aos="fade-right">
                <span className="section-label block mb-4">Interactive Technology</span>
                <h2 className="serif-font text-4xl lg:text-5xl text-white leading-tight">The Proto-Avatar Engine</h2>
                <div className="gold-line mt-6 mb-8" />
                <p className="text-gray-400 font-light leading-relaxed mb-10">
                  Experience our real-time 3D rendering capabilities directly in your browser. Our custom avatars are built with optimized geometry and high-fidelity textures, ready for the spatial web.
                </p>
                <Link
                  href="/viewer"
                  className="inline-flex items-center gap-3 text-[11px] font-medium tracking-[0.2em] uppercase border border-yellow-700 text-yellow-500 px-8 py-4 hover:bg-yellow-700 hover:text-black transition-all duration-300"
                >
                  ENTER FULLSCREEN EXPERIENCE &rarr;
                </Link>
              </div>
              
              <div className="relative h-[600px] bg-[#050505] border border-yellow-900/30 group p-2" data-aos="fade-left">
                <div className="absolute inset-0 z-20 pointer-events-none border border-yellow-500/0 group-hover:border-yellow-500/30 transition-colors duration-500" />
                {/* We pass an empty hotspots array so it's just a clean rotating model preview */}
                <InteractiveModelViewer modelUrl="/avatar.glb" hotspots={[]} label="Live 3D Engine Preview" />
                
                {/* Subtle overlay hint */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-black/80 backdrop-blur-sm border border-yellow-900/50 text-yellow-600 text-[9px] tracking-[0.2em] uppercase px-4 py-2">
                    Fully Interactive · Drag to Rotate
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ─── GUILD PROCESS TABS ───────────────────────────────── */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="py-32 bg-[#0e0e0e] border-t border-yellow-900/20"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-16">
              <span className="section-label block mb-4">The Craft</span>
              <h2 className="serif-font text-4xl lg:text-5xl text-white">The Guild Process</h2>
              <div className="gold-line mt-6" />
            </div>

            {/* Tab buttons */}
            <div className="flex overflow-x-auto whitespace-nowrap [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] gap-0 border-b border-yellow-900/30 mb-12">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-[10px] md:text-[11px] font-medium tracking-[0.15em] uppercase px-5 md:px-8 py-4 transition-all duration-200 border-b-2 -mb-px flex-shrink-0 ${
                    activeTab === tab.id
                      ? 'text-yellow-500 border-yellow-600'
                      : 'text-gray-500 border-transparent hover:text-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
              >
                <div>
                  <h3 className="serif-font text-2xl lg:text-3xl text-white mb-5">{currentTab.heading}</h3>
                  <p className="text-gray-400 font-light leading-relaxed mb-8">{currentTab.body}</p>
                  <ul className="space-y-3">
                    {currentTab.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-gray-300 font-light">
                        <span className="text-yellow-600 flex-shrink-0">◈</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                </div>
                <div className="glass-panel p-2 rounded-sm mystic-glow">
                  <div className="relative aspect-video bg-black overflow-hidden border border-gray-800">
                    <Image src={currentTab.imgSrc} alt={currentTab.label} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover opacity-70 filter contrast-125 sepia-[.2]" />
                    <div className="absolute inset-0 border border-yellow-700/20 m-3 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black via-black/70 to-transparent">
                      <span className="section-label">{currentTab.label}</span>
                      <p className="serif-font text-white text-lg tracking-wider mt-1">{currentTab.heading}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.section>

        {/* ─── HOW THE GUILD WORKS ──────────────────────────────── */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="py-32 bg-[#111111] border-t border-yellow-900/20"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            {/* Header */}
            <div className="text-center mb-24">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="flex-1 max-w-[3rem] h-px bg-yellow-800/40" />
                <span className="section-label">The Ritual</span>
                <div className="flex-1 max-w-[3rem] h-px bg-yellow-800/40" />
              </div>
              <h2 className="serif-font text-4xl lg:text-5xl text-white mb-4">How The Guild Works</h2>
              <div className="gold-line mx-auto mt-6 mb-6" />
              <p className="text-gray-400 font-light max-w-xl mx-auto text-sm leading-relaxed">
                Six ancient steps, perfected over centuries, now executed at the speed of thought.
              </p>
            </div>

            {/* Steps */}
            <div className="relative">
              {/* Connector line — desktop only */}
              <motion.div 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                className="hidden lg:block absolute top-10 left-[calc(8.33%+2.5rem)] right-[calc(8.33%+2.5rem)] h-px bg-yellow-900/30 z-0 origin-left" 
              />

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
                {([
                  { step: 1, name: 'Script',           desc: 'Write or import your narrative', Icon: PenTool },
                  { step: 2, name: 'Avatar',           desc: 'Choose your guild character',    Icon: User    },
                  { step: 3, name: 'Voice & Sync',     desc: 'Select voice & sync lips',       Icon: Mic     },
                  { step: 4, name: 'Generate',         desc: 'AI renders your scene',          Icon: Zap     },
                  { step: 5, name: 'Preview',          desc: 'Review & fine-tune',             Icon: Eye     },
                  { step: 6, name: 'Publish',          desc: 'Export to any platform',         Icon: Share2  },
                ] as { step: number; name: string; desc: string; Icon: React.ElementType }[]).map((s, i) => (
                  <motion.div 
                    key={s.step} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * i }}
                    className="relative z-10 flex flex-col items-center text-center group"
                  >
                    {/* Icon circle */}
                    <div className="w-20 h-20 rounded-full border border-yellow-900/40 bg-[#0e0e0e] flex items-center justify-center mb-6 relative group-hover:border-yellow-700 mystic-glow transition-all duration-300">
                      {/* @ts-expect-error - LucideIcon typing mismatch */}
                      <s.Icon className="w-6 h-6 text-gray-500 group-hover:text-yellow-500 transition-colors duration-300" />
                      {/* Step badge */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-yellow-700 text-black flex items-center justify-center text-[10px] font-bold">
                        {s.step}
                      </div>
                    </div>
                    <h3 className="serif-font text-sm text-white tracking-wider uppercase mb-2">{s.name}</h3>
                    {/* Hover expand description */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 w-max pointer-events-none">
                      <p className="text-gray-500 text-[11px] leading-relaxed max-w-[140px] text-center pt-2">{s.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-20">
              <Link
                href="/commissions"
                className="inline-flex items-center gap-3 text-[11px] font-medium tracking-[0.2em] uppercase border border-yellow-700 text-yellow-500 px-10 py-4 hover:bg-yellow-700 hover:text-black transition-all duration-300"
              >
                SUMMON YOUR FIRST AVATAR &rarr;
              </Link>
            </div>

          </div>
        </motion.section>

        {/* ─── MANIFESTO QUOTE ──────────────────────────────────── */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="py-32 bg-[#0e0e0e] border-t border-yellow-900/20"
        >
          <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
            <span className="section-label block mb-10">Guild Manifesto</span>
            <blockquote className="serif-font text-3xl lg:text-5xl text-white leading-snug italic mb-10">
              &ldquo;As the web becomes an AI-shaped dreamscape, our guild remains committed to ethical, fair, transparent and resource supportive creative processes.&rdquo;
            </blockquote>
            <div className="gold-line mx-auto mb-6" />
            <p className="text-yellow-600 text-[11px] tracking-[0.2em] uppercase font-semibold">Jerome Goerke - Founder</p>
          </div>
        </motion.section>

        {/* ─── SPECIMENS CAROUSEL ───────────────────────────────── */}
        <ActiveSpecimens />



        {/* ─── COMMISSION CTA ───────────────────────────────────── */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="py-32 bg-[#0e0e0e] border-t border-yellow-900/20"
        >
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <span className="section-label block mb-6">Begin the Process</span>
            <h2 className="serif-font text-4xl lg:text-6xl text-white mb-6">Initiate the Process</h2>
            <div className="gold-line mx-auto mb-8" />
            <p className="text-gray-400 font-light mb-12 max-w-xl mx-auto leading-relaxed">
              Commission slots are regulated based on current guild capacity. Formal requirements are necessary for preliminary formulation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/commissions" className="text-[11px] font-medium tracking-[0.2em] uppercase bg-yellow-700 text-black px-12 py-4 hover:bg-yellow-500 transition-all duration-300">
                View Tariffs
              </Link>
              <Link href="mailto:commissions@wiverndigital.com" className="text-[11px] font-medium tracking-[0.2em] uppercase border border-yellow-700 text-yellow-500 px-12 py-4 hover:bg-yellow-900/20 transition-all duration-300">
                Request Avatar
              </Link>
            </div>
          </div>
        </motion.section>

      </main>
      <Footer />
    </>
  );
}
