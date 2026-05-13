"use client";
import { motion } from "framer-motion";
import { Sparkles, Leaf, Wind, Sun, ChevronRight, Check } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 selection:text-primary overflow-x-hidden">
      
      {/* Navigation - Morphic inspired sticky sleek nav */}
      <nav className="fixed w-full z-50 top-0 border-b border-primary/20 bg-background/80 backdrop-blur-md transition-all duration-300">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full border border-primary flex items-center justify-center bg-black shadow-[0_0_15px_rgba(194,155,98,0.2)]">
              <span className="font-serif text-primary text-xl">W</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-serif font-bold tracking-widest text-white uppercase text-lg">Wivern Digital</span>
              <span className="font-serif text-primary text-[10px] tracking-[0.2em] uppercase">Guild of Avatarists</span>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-10">
            <Link href="#entrance" className="text-[11px] font-medium tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-colors">The Shop</Link>
            <Link href="#craft" className="text-[11px] font-medium tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-colors">The Craft</Link>
            <Link href="#archives" className="text-[11px] font-medium tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-colors">Specimens</Link>
            <Link href="#guild" className="text-[11px] font-medium tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-colors">The Guild</Link>
            <Link href="#tariffs" className="text-[11px] font-medium tracking-[0.15em] uppercase text-primary hover:text-white transition-colors">Commission</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/login" className="hidden md:block text-[11px] font-bold tracking-widest uppercase text-white hover:text-primary transition-colors">
              Sign In
            </Link>
            <Link href="/dashboard" className="border border-primary/50 bg-primary/10 text-primary px-6 py-2.5 rounded text-[11px] font-bold tracking-widest uppercase hover:bg-primary hover:text-black transition-all duration-300 mystic-glow">
              Enter Platform
            </Link>
          </div>
        </div>
      </nav>

      <main>
        
        {/* HERO SECTION: Entering the Shop */}
        <motion.section 
          id="entrance"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="relative min-h-[95vh] flex flex-col justify-center pt-20 overflow-hidden"
        >
          {/* Animated Cinematic Background */}
          <div className="absolute inset-0 z-0 bg-black overflow-hidden pointer-events-none">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1583417657207-6a17b9c968f9?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat opacity-40 filter contrast-125 saturate-50 animate-ken-burns" />
             <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/90 opacity-90" />
             <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="container mx-auto px-6 relative z-20 flex flex-col items-center text-center mt-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-sm md:text-base font-light tracking-[0.3em] text-primary uppercase mb-6"
            >
              Enter the Workshop
            </motion.h2>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="font-serif text-6xl md:text-8xl lg:text-[7rem] text-white mb-8 tracking-wide drop-shadow-2xl"
            >
              Digital Alchemy
            </motion.h1>

            <motion.div 
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="w-px h-24 bg-gradient-to-b from-primary to-transparent mx-auto mb-8 origin-top" 
            />

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-muted-foreground text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto leading-relaxed"
            >
              Precision engineering of bespoke AI avatars. Ancient aesthetic principles realized through modern computational methodology.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="mt-12"
            >
              <Link href="#archives" className="inline-flex items-center gap-3 border border-primary/50 text-primary px-10 py-4 text-xs font-medium tracking-[0.2em] uppercase hover:bg-primary/10 transition-all duration-300 mystic-glow">
                View the Archives <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* THE CRAFT */}
        <motion.section 
          id="craft" 
          {...fadeInUp}
          className="py-32 bg-[#0c0a08] relative border-y border-primary/20"
        >
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-serif text-4xl md:text-5xl mb-8 text-white tracking-wide">The Guild of Avatarists</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed font-light text-lg">
                  Wivern Digital operates as a specialized guild dedicated exclusively to the craft of avatar creation. The primary function is the generation of detailed, animated digital constructs.
                </p>
                <p className="text-muted-foreground leading-relaxed font-light text-lg mb-10">
                  The process aligns with historical alchemical concepts—taking base data and conceptual requirements to synthesize a functional digital entity. Operations are structured to ensure accuracy and structural fidelity.
                </p>
                
                <div className="grid grid-cols-2 gap-8 border-t border-primary/20 pt-10">
                  <div className="glass-panel p-6 rounded">
                    <span className="block font-serif text-2xl text-white mb-3">Formulation</span>
                    <span className="block text-sm text-muted-foreground font-light leading-relaxed">Structural analysis and parameter setting.</span>
                  </div>
                  <div className="glass-panel p-6 rounded">
                    <span className="block font-serif text-2xl text-white mb-3">Infusion</span>
                    <span className="block text-sm text-muted-foreground font-light leading-relaxed">Application of animation logic.</span>
                  </div>
                </div>
              </div>
              
              <div className="relative h-[600px] w-full rounded overflow-hidden shadow-2xl mystic-glow border border-primary/20">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1517420879524-86d64ac2f339?q=80&w=1000&auto=format&fit=crop" 
                  alt="Workbench detailing" 
                  className="absolute inset-0 w-full h-full object-cover filter sepia-[.2] contrast-125"
                />
                <div className="absolute bottom-8 left-8 right-8 glass-panel p-6 rounded z-20">
                  <p className="font-serif text-white text-xl tracking-wider text-center">Meticulous observation leads to precise replication.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* THE ARCHIVES (SPECIMENS) */}
        <motion.section 
          id="archives" 
          {...fadeInUp}
          className="py-32 relative bg-background overflow-hidden"
        >
          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className="text-center mb-20">
              <span className="text-xs font-medium tracking-[0.2em] text-primary uppercase block mb-4">Observation Chamber</span>
              <h2 className="font-serif text-4xl md:text-6xl text-white tracking-wide">Active Specimens</h2>
              <div className="w-16 h-px bg-primary/50 mx-auto mt-8" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Specimen 1 */}
              <div className="glass-panel p-2 rounded group mystic-glow cursor-pointer">
                <div className="relative aspect-[4/5] bg-black overflow-hidden border border-primary/20">
                  <video className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 filter contrast-125 grayscale-[20%]" autoPlay loop muted playsInline>
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-mysterious-pale-looking-fashion-woman-39878large.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 border border-primary/30 m-4 pointer-events-none transition-all duration-500 group-hover:m-2" />
                  <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent">
                    <h3 className="font-serif text-2xl text-white tracking-wider mb-2">Entity: Sylph</h3>
                    <p className="text-xs font-light text-primary tracking-widest uppercase">Class: Aethereal</p>
                  </div>
                </div>
              </div>

              {/* Specimen 2 */}
              <div className="glass-panel p-2 rounded group mystic-glow md:translate-y-12 cursor-pointer">
                <div className="relative aspect-[4/5] bg-black overflow-hidden border border-primary/20">
                  <video className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 filter contrast-125 grayscale-[20%]" autoPlay loop muted playsInline>
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-portrait-of-a-woman-in-a-pool-1259-large.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 border border-primary/30 m-4 pointer-events-none transition-all duration-500 group-hover:m-2" />
                  <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent">
                    <h3 className="font-serif text-2xl text-white tracking-wider mb-2">Entity: Undine</h3>
                    <p className="text-xs font-light text-primary tracking-widest uppercase">Class: Aquatic Form</p>
                  </div>
                </div>
              </div>

              {/* Specimen 3 */}
              <div className="glass-panel p-2 rounded group mystic-glow cursor-pointer">
                <div className="relative aspect-[4/5] bg-black overflow-hidden border border-primary/20">
                  <video className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 filter contrast-125 grayscale-[20%]" autoPlay loop muted playsInline>
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-wizard-with-a-glowing-magic-wand-in-theforest-27415-large.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 border border-primary/30 m-4 pointer-events-none transition-all duration-500 group-hover:m-2" />
                  <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent">
                    <h3 className="font-serif text-2xl text-white tracking-wider mb-2">Entity: Magus</h3>
                    <p className="text-xs font-light text-primary tracking-widest uppercase">Class: Practitioner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* THE GUILD (Pipeline & Ecology) */}
        <motion.section 
          id="guild" 
          {...fadeInUp}
          className="py-32 border-t border-primary/20 bg-[url('https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop')] bg-fixed bg-cover bg-center relative"
        >
          <div className="absolute inset-0 bg-background/95 backdrop-blur-sm z-0" />
          
          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className="text-center mb-24">
              <span className="text-xs font-medium tracking-[0.2em] text-primary uppercase block mb-4">Operational Methodology</span>
              <h2 className="font-serif text-4xl md:text-6xl text-white mb-6 tracking-wide">The Guild Architecture</h2>
              <div className="w-16 h-px bg-primary/50 mx-auto mb-6" />
              <p className="text-muted-foreground text-base font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
                Detailing the proprietary assembly pipeline, ecological parameters, and the structural hierarchy of the avatarist guild.
              </p>
            </div>

            {/* Pipeline Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
              <div className="glass-panel p-10 rounded">
                <h3 className="font-serif text-3xl text-white mb-6">Proprietary Assembly Pipeline</h3>
                <p className="text-muted-foreground mb-6 font-light leading-relaxed">
                  The internal computational pipeline facilitates the rapid assembly of digital avatars, bypassing standard rendering techniques for swift formulation. This workflow integrates established narrative principles directly into the generation process.
                </p>
                <p className="text-muted-foreground mb-8 font-light leading-relaxed">
                  The architecture is calibrated to accommodate precise formats and high-frequency demands of modern platforms. Content generation relies on structured storytelling frameworks, optimized for 10 to 15-second outputs.
                </p>
                <ul className="space-y-4 text-sm text-foreground font-light border-t border-primary/20 pt-8">
                  <li className="flex items-start gap-3"><span className="text-primary mt-0.5">◈</span> Integration of structural hooks (Setup, Bridge, Punchline).</li>
                  <li className="flex items-start gap-3"><span className="text-primary mt-0.5">◈</span> Automated alignment of auditory tracks with labial movement.</li>
                  <li className="flex items-start gap-3"><span className="text-primary mt-0.5">◈</span> Application of current platform-specific engagement mechanisms.</li>
                </ul>
              </div>

              <div className="glass-panel p-2 rounded mystic-glow h-full">
                <div className="relative w-full h-full min-h-[400px] bg-black overflow-hidden border border-primary/20">
                  <video className="w-full h-full object-cover opacity-60 filter contrast-125 sepia-[.2]" autoPlay loop muted playsInline>
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-animation-of-a-futuristic-device-in-a-dark-room-32360-large.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 border border-primary/30 m-4 pointer-events-none z-10" />
                  <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
                    <span className="text-primary text-xs tracking-widest uppercase block mb-2">System Core</span>
                    <span className="font-serif text-white tracking-widest uppercase text-2xl block">The Formulation Engine</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ECOLOGY & SUSTAINABILITY FUND (EXPANDED) */}
            <div className="mb-32">
              <div className="text-center mb-16 max-w-3xl mx-auto">
                <span className="text-xs font-medium tracking-[0.2em] text-primary uppercase block mb-4">Operational Standards</span>
                <h2 className="font-serif text-4xl text-white mb-6">Guild Principles & Ecology</h2>
                <div className="w-16 h-px bg-primary/50 mx-auto mt-4 mb-6" />
                <p className="text-muted-foreground font-light text-base leading-relaxed">
                  Operations within the manor are strictly regulated by internal protocols designed to ensure environmental sustainability and equitable labor practices across all disciplines.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Ecology Fund */}
                <div className="glass-panel p-10 rounded border-t-4 border-t-green-900/50 hover:border-t-primary transition-all duration-500 group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded bg-black border border-primary/30 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <Leaf className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-2xl text-white tracking-wider">Ecological Parameters</h3>
                  </div>
                  <div className="text-5xl font-serif text-primary mb-6">15%</div>
                  <p className="text-muted-foreground font-light leading-relaxed mb-6">
                    An Ecology Fund, established from a baseline of 15% of all generation receipts, is reinvested into agricultural development initiatives for farmers. 
                  </p>
                  <div className="flex flex-col gap-4 border-t border-primary/20 pt-6">
                    <div className="flex items-center gap-3 text-sm text-foreground font-light"><Wind className="w-4 h-4 text-primary" /> 100% Wind & Solar Energy</div>
                    <div className="flex items-center gap-3 text-sm text-foreground font-light"><Sun className="w-4 h-4 text-primary" /> Net-zero computational footprint</div>
                  </div>
                </div>

                {/* Remuneration */}
                <div className="glass-panel p-10 rounded border-t-4 border-t-primary/30 hover:border-t-primary transition-all duration-500">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded bg-black border border-primary/30 flex items-center justify-center text-primary">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-2xl text-white tracking-wider">Equitable Remuneration</h3>
                  </div>
                  <p className="text-muted-foreground font-light leading-relaxed mb-6">
                    A fixed compensation structure mandates the distribution of project receipts. Standard avatar production is executed by a single Master Avatarist, receiving a 33.3% allocation. 
                  </p>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Apprenticeship positions are uncompensated (0%), while Journeymen receive a 16.6% allocation. The standard 19% Operations Reserve covers cloud hosting. Undistributed capital defaults to the Ecology Fund.
                  </p>
                </div>
              </div>
            </div>

            {/* Hierarchy Breakdown */}
            <div>
              <div className="text-center mb-16">
                <h3 className="font-serif text-3xl text-white tracking-wider">The Hierarchical Ranks</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Rank I */}
                <div className="glass-panel rounded flex flex-col overflow-hidden hover:-translate-y-2 transition-transform duration-300">
                  <div className="h-48 w-full border-b border-primary/20 relative">
                    <img src="https://images.unsplash.com/photo-1544507851-bc015112521c?q=80&w=600&auto=format&fit=crop" alt="Apprentice Avatar" className="w-full h-full object-cover filter contrast-125 sepia-[.2] grayscale-[30%]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#14100c] to-transparent" />
                  </div>
                  <div className="p-8 flex-grow flex flex-col">
                    <span className="text-primary text-xs tracking-widest uppercase block mb-2">Rank I</span>
                    <h4 className="font-serif text-xl text-white mb-2">The Apprentice</h4>
                    <span className="text-muted-foreground font-light text-[10px] tracking-widest uppercase block mb-6 border-b border-primary/20 pb-3">0% Revenue Allocation</span>
                    <p className="text-muted-foreground font-light text-sm leading-relaxed flex-grow">
                      Tasked with initial dataset curation, prompt architecture, and latent space exploration. Advancement requires a verified majority vote.
                    </p>
                  </div>
                </div>

                {/* Rank II */}
                <div className="glass-panel rounded flex flex-col overflow-hidden hover:-translate-y-2 transition-transform duration-300 border-t-2 border-t-primary/50">
                  <div className="h-48 w-full border-b border-primary/20 relative">
                    <img src="https://images.unsplash.com/photo-1614030612660-f1db1f88eb22?q=80&w=600&auto=format&fit=crop" alt="Journeyman Avatar" className="w-full h-full object-cover filter contrast-125 sepia-[.2] grayscale-[30%]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#14100c] to-transparent" />
                  </div>
                  <div className="p-8 flex-grow flex flex-col">
                    <span className="text-primary text-xs tracking-widest uppercase block mb-2">Rank II</span>
                    <h4 className="font-serif text-xl text-white mb-2">The Journeyman</h4>
                    <span className="text-muted-foreground font-light text-[10px] tracking-widest uppercase block mb-6 border-b border-primary/20 pb-3">16.6% Revenue Allocation</span>
                    <p className="text-muted-foreground font-light text-sm leading-relaxed flex-grow">
                      Responsible for algorithmic refinement, localized inpainting, and establishing structural coherence. Operates independently or with a Master.
                    </p>
                  </div>
                </div>

                {/* Rank III */}
                <div className="glass-panel rounded flex flex-col overflow-hidden hover:-translate-y-2 transition-transform duration-300 mystic-glow border-t-2 border-t-primary">
                  <div className="h-48 w-full border-b border-primary/20 relative">
                    <img src="https://images.unsplash.com/photo-1544883441-118ffeb370ce?q=80&w=600&auto=format&fit=crop" alt="Master Avatar" className="w-full h-full object-cover filter contrast-125 sepia-[.2] grayscale-[30%] object-top" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#14100c] to-transparent" />
                  </div>
                  <div className="p-8 flex-grow flex flex-col">
                    <span className="text-primary text-xs tracking-widest uppercase block mb-2">Rank III</span>
                    <h4 className="font-serif text-xl text-white mb-2">The Master</h4>
                    <span className="text-muted-foreground font-light text-[10px] tracking-widest uppercase block mb-6 border-b border-primary/20 pb-3">33.3% Revenue Allocation</span>
                    <p className="text-muted-foreground font-light text-sm leading-relaxed flex-grow">
                      Executes final temporal formalization. Manages generative video sequencing and audio-to-labial synchronization. Functions as the sole practitioner on standard productions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* COMMISSION TARIFFS (Pricing - Morphic Style) */}
        <motion.section 
          id="tariffs" 
          {...fadeInUp}
          className="py-32 relative bg-background border-t border-primary/20"
        >
          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-sm md:text-base font-light tracking-[0.3em] text-primary uppercase mb-4">Official Register</h2>
              <h1 className="font-serif text-5xl md:text-6xl text-white mb-6 tracking-wide">Requisition Tariffs</h1>
              <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent mx-auto mb-6" />
              <p className="text-muted-foreground text-lg font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
                Standardized fees for the generation of 30-second digital avatar constructs. All submissions are subject to guild review prior to commencement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
              {/* Tier 1 */}
              <div className="glass-panel p-10 rounded flex flex-col justify-between border-t-4 border-t-[#2e241c] hover:border-t-primary transition-all duration-300">
                <div>
                  <h3 className="font-serif text-2xl text-white tracking-wider mb-2">Single Specimen</h3>
                  <p className="text-xs font-light text-muted-foreground tracking-widest uppercase mb-8">Base Formulation</p>
                  <div className="mb-10 flex items-end gap-2">
                    <span className="text-5xl font-light text-white">€199</span>
                    <span className="text-sm text-muted-foreground mb-1">/ output</span>
                  </div>
                  <ul className="space-y-4 text-sm text-foreground font-light mb-12">
                    <li className="flex items-start gap-3"><Check className="w-4 h-4 text-primary mt-0.5" /> One isolated 30-second sequence</li>
                    <li className="flex items-start gap-3"><Check className="w-4 h-4 text-primary mt-0.5" /> Standard ambient motion</li>
                    <li className="flex items-start gap-3"><Check className="w-4 h-4 text-primary mt-0.5" /> Unspoken format (visual only)</li>
                  </ul>
                </div>
                <a href="mailto:commissions@wiverndigital.com?subject=Single Specimen" className="block text-center border border-primary/50 text-primary px-6 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-primary hover:text-black transition-all duration-300">
                  Initiate
                </a>
              </div>

              {/* Tier 2 */}
              <div className="glass-panel p-10 rounded flex flex-col justify-between border-t-4 border-t-primary mystic-glow transform md:-translate-y-4 shadow-2xl">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif text-2xl text-white tracking-wider">Quarterly Batch</h3>
                    <span className="bg-primary/20 text-primary text-[10px] px-3 py-1 rounded tracking-widest uppercase border border-primary/50">Standard</span>
                  </div>
                  <p className="text-xs font-light text-muted-foreground tracking-widest uppercase mb-8">Sustained Output</p>
                  <div className="mb-10 flex items-end gap-2">
                    <span className="text-5xl font-light text-white">€299</span>
                    <span className="text-sm text-muted-foreground mb-1">/ total</span>
                  </div>
                  <ul className="space-y-4 text-sm text-foreground font-light mb-12">
                    <li className="flex items-start gap-3"><Check className="w-4 h-4 text-primary mt-0.5" /> Ten distinct 30-second sequences</li>
                    <li className="flex items-start gap-3"><Check className="w-4 h-4 text-primary mt-0.5" /> Distributed over a 90-day period</li>
                    <li className="flex items-start gap-3"><Check className="w-4 h-4 text-primary mt-0.5" /> Cohesive character modeling</li>
                    <li className="flex items-start gap-3"><Check className="w-4 h-4 text-primary mt-0.5" /> Unspoken format (visual only)</li>
                  </ul>
                </div>
                <a href="mailto:commissions@wiverndigital.com?subject=Quarterly Batch" className="block text-center bg-primary text-black px-6 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:opacity-90 transition-opacity duration-300">
                  Initiate Batch
                </a>
              </div>

              {/* Tier 3 */}
              <div className="glass-panel p-10 rounded flex flex-col justify-between border-t-4 border-t-[#2e241c] hover:border-t-primary transition-all duration-300">
                <div>
                  <h3 className="font-serif text-2xl text-white tracking-wider mb-2">Guild Retainer</h3>
                  <p className="text-xs font-light text-muted-foreground tracking-widest uppercase mb-8">Monthly Subscription</p>
                  <div className="mb-10 flex items-end gap-2">
                    <span className="text-5xl font-light text-white">€499</span>
                    <span className="text-sm text-muted-foreground mb-1">/ month</span>
                  </div>
                  <ul className="space-y-4 text-sm text-foreground font-light mb-12">
                    <li className="flex items-start gap-3"><Check className="w-4 h-4 text-primary mt-0.5" /> Fifteen 30-second sequences per cycle</li>
                    <li className="flex items-start gap-3"><Check className="w-4 h-4 text-primary mt-0.5" /> Priority generation queue</li>
                    <li className="flex items-start gap-3"><Check className="w-4 h-4 text-primary mt-0.5" /> Direct access to structural architects</li>
                    <li className="flex items-start gap-3"><Check className="w-4 h-4 text-primary mt-0.5" /> Unspoken format (visual only)</li>
                  </ul>
                </div>
                <a href="mailto:commissions@wiverndigital.com?subject=Guild Retainer" className="block text-center border border-primary/50 text-primary px-6 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-primary hover:text-black transition-all duration-300">
                  Establish Retainer
                </a>
              </div>
            </div>

            {/* Required Augmentations */}
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl text-white mb-4">Required Augmentations</h2>
                <p className="text-muted-foreground font-light text-sm">
                  Structural and auditory adjustments applicable to base formulations. Fees are calculated per 30-second output.
                </p>
              </div>

              <div className="space-y-4">
                <div className="glass-panel p-6 rounded flex flex-col md:flex-row justify-between items-center gap-6 hover:border-primary/50 transition-colors">
                  <div>
                    <h4 className="font-serif text-lg text-white tracking-wider mb-2">Spoken Integration</h4>
                    <p className="text-muted-foreground font-light text-sm">Generation of synthesized audio track matching provided transcripts. No visual synchronization included.</p>
                  </div>
                  <div className="text-right whitespace-nowrap md:border-l border-primary/20 md:pl-6 w-full md:w-auto">
                    <span className="text-2xl font-serif text-primary block mb-1">+ €49</span>
                    <span className="text-[10px] text-muted-foreground tracking-widest uppercase">Per Output</span>
                  </div>
                </div>

                <div className="glass-panel p-6 rounded flex flex-col md:flex-row justify-between items-center gap-6 border-primary/40 mystic-glow hover:border-primary/80 transition-colors">
                  <div>
                    <h4 className="font-serif text-lg text-white tracking-wider mb-2">Full Lip Synchronization</h4>
                    <p className="text-muted-foreground font-light text-sm">Precise alignment of labial movement to synthesized or client-provided auditory tracks.</p>
                  </div>
                  <div className="text-right whitespace-nowrap md:border-l border-primary/20 md:pl-6 w-full md:w-auto">
                    <span className="text-2xl font-serif text-primary block mb-1">+ €99</span>
                    <span className="text-[10px] text-muted-foreground tracking-widest uppercase">Per Output</span>
                  </div>
                </div>

                <div className="glass-panel p-6 rounded flex flex-col md:flex-row justify-between items-center gap-6 hover:border-primary/50 transition-colors">
                  <div>
                    <h4 className="font-serif text-lg text-white tracking-wider mb-2">Complex Gestural Mapping</h4>
                    <p className="text-muted-foreground font-light text-sm">Implementation of specific, non-ambient somatic movements or interactions with digital objects.</p>
                  </div>
                  <div className="text-right whitespace-nowrap md:border-l border-primary/20 md:pl-6 w-full md:w-auto">
                    <span className="text-2xl font-serif text-primary block mb-1">+ €79</span>
                    <span className="text-[10px] text-muted-foreground tracking-widest uppercase">Per Output</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* MASTER-IN-CHIEF BIO */}
        <motion.section 
          {...fadeInUp}
          className="py-32 relative bg-[#0c0a08] border-t border-primary/20"
        >
          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-sm md:text-base font-light tracking-[0.3em] text-primary uppercase mb-4">Guild Leadership</h2>
              <h1 className="font-serif text-5xl md:text-6xl text-white mb-6 tracking-wide">Master-in-Chief</h1>
              <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent mx-auto" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="glass-panel p-2 rounded mystic-glow h-full w-full max-w-md mx-auto lg:mx-0 relative">
                <div className="relative w-full aspect-square md:aspect-[4/5] bg-black overflow-hidden border border-primary/20">
                  <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10" />
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" alt="Jerome Goerke Placeholder" className="w-full h-full object-cover filter contrast-110 sepia-[.2] grayscale-[20%]" />
                  <div className="absolute inset-0 border border-primary/30 m-4 pointer-events-none z-20" />
                  <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black via-black/80 to-transparent z-20">
                    <span className="text-primary text-xs tracking-widest uppercase block mb-1">Founder</span>
                    <span className="font-serif text-white tracking-widest uppercase text-2xl block">Jerome Goerke</span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-3xl md:text-4xl text-white mb-8">Professional History</h2>
                <div className="space-y-6 text-muted-foreground font-light leading-relaxed text-lg">
                  <p>
                    Jerome Goerke serves as the Master-in-Chief and founder of Wivern Digital. His professional background originates in newsroom journalism, a discipline that provided the structural foundation for his subsequent transition into organizational leadership and digital media generation.
                  </p>
                  <p>
                    His primary expertise lies in innovation management and narrative structuring. These core competencies are currently applied to the development of the guild's proprietary assembly pipelines and the temporal formalization of digital avatars.
                  </p>
                  <p>
                    Prior to establishing Wivern Digital, Goerke was recognized with multiple industry awards for his work in storytelling. This documented history of narrative execution informs the operational methodology of the guild, ensuring that all generated constructs adhere to established standards of visual communication and character coherence.
                  </p>
                </div>

                <div className="mt-12 pt-10 border-t border-primary/20 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="glass-panel p-6 rounded">
                    <span className="block font-serif text-xl text-white mb-3">Innovation Management</span>
                    <span className="block text-sm text-muted-foreground font-light leading-relaxed">Structural oversight of the proprietary pipeline and guild protocols.</span>
                  </div>
                  <div className="glass-panel p-6 rounded">
                    <span className="block font-serif text-xl text-white mb-3">Narrative Structuring</span>
                    <span className="block text-sm text-muted-foreground font-light leading-relaxed">Application of award-winning storytelling methodologies to avatar formulation.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      {/* FOOTER */}
      <footer className="bg-background border-t border-primary/20 pt-20 pb-12 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Initiate the Process</h2>
            <p className="text-muted-foreground font-light mb-10 text-lg">
              Commission slots are regulated based on current guild capacity. Formal requirements are necessary for preliminary formulation.
            </p>
            <a href="mailto:commissions@wiverndigital.com" className="inline-block border border-primary/50 bg-primary/10 text-primary px-12 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-primary hover:text-black transition-all duration-300 mystic-glow">
              Submit Requisition
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-primary/20 pt-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full border border-primary flex items-center justify-center bg-black">
                  <span className="font-serif text-primary text-xl">W</span>
                </div>
                <span className="font-serif text-xl tracking-widest text-white uppercase">Wivern Digital</span>
              </div>
              <p className="text-muted-foreground text-xs tracking-wider uppercase font-light">Guild of Avatarists &bull; Est. 2026</p>
            </div>
            
            <div className="md:text-center">
              <h4 className="text-xs font-medium uppercase tracking-[0.2em] mb-6 text-muted-foreground">Guild Coordinates</h4>
              <ul className="space-y-3 text-sm text-foreground font-light">
                <li>Sector 4R, Ward 2330</li>
                <li>The Manor Estate</li>
                <li>Access by documented appointment</li>
              </ul>
            </div>

            <div className="md:text-right">
              <h4 className="text-xs font-medium uppercase tracking-[0.2em] mb-6 text-muted-foreground">Protocols</h4>
              <ul className="space-y-3 text-sm font-light">
                <li><a href="#" className="text-foreground hover:text-primary transition-colors">Client Confidentiality</a></li>
                <li><a href="#" className="text-foreground hover:text-primary transition-colors">Creation Standards</a></li>
                <li><a href="#" className="text-foreground hover:text-primary transition-colors">Ecology Reports</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
