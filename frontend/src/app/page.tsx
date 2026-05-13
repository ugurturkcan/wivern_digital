"use client";
import { motion } from "framer-motion";
import { Sparkles, Play, ChevronRight, Check, MapPin, Mail, Phone, PenTool, User, Mic, Zap, Eye, Share2, Quote, Users, Star, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0806] text-[#f3ede4] font-sans selection:bg-primary/30 selection:text-primary">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 top-0 border-b border-[#2e241c] bg-[#0c0a08]/90 backdrop-blur-md">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-primary/50 flex items-center justify-center bg-black/40 shadow-[0_0_15px_rgba(194,155,98,0.2)]">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-serif font-bold tracking-widest text-[#f3ede4]">WIVERN</span>
              <span className="font-serif text-primary text-xs tracking-[0.3em]">DIGITAL</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-xs font-bold tracking-widest uppercase text-[#a19282]">
            <Link href="#works" className="hover:text-primary transition-colors">Works</Link>
            <Link href="#process" className="hover:text-primary transition-colors">Process</Link>
            <Link href="#guild" className="hover:text-primary transition-colors">The Guild</Link>
            <Link href="#pricing" className="hover:text-primary transition-colors">Pricing</Link>
            <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/login" className="text-xs font-bold tracking-widest uppercase text-[#f3ede4] hover:text-primary transition-colors">
              Sign In
            </Link>
            <Link href="/dashboard" className="bg-gradient-to-r from-[#d4af37] to-[#aa832d] text-black px-6 py-2.5 rounded font-bold text-xs tracking-widest uppercase hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(194,155,98,0.3)]">
              Enter Guild
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        
        {/* HERO SECTION (home_1 with new animated background) */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-20 overflow-hidden border-b border-[#2e241c]">
          
          {/* Animated Cinematic Background */}
          <div className="absolute inset-0 z-0 bg-black overflow-hidden pointer-events-none">
             <div className="absolute inset-0 bg-[url('/images/home_bg.png')] bg-cover bg-center bg-no-repeat opacity-50 animate-ken-burns" />
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />
             {/* Gradient overlays to blend into the dark theme */}
             <div className="absolute inset-0 bg-gradient-to-b from-[#0a0806]/40 via-transparent to-[#0a0806] z-10" />
             <div className="absolute inset-0 bg-gradient-to-r from-[#0a0806]/60 via-transparent to-[#0a0806]/60 z-10" />
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none z-10" />
          
          <div className="container mx-auto px-6 relative z-20 flex flex-col items-center text-center">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-[#1a1510]/80 text-primary text-xs font-bold tracking-widest uppercase mb-8 backdrop-blur-sm">
              <Sparkles className="w-3 h-3" /> EST. MDXVI • THE CREATIVE GUILD
            </div>

            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-8 tracking-wide max-w-5xl">
              <span className="text-[#f3ede4]">CRAFTING DIGITAL AVATARS</span><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#f3ede4] to-[#aa832d]">
                SINCE THE 16TH CENTURY
              </span>
            </h1>

            <p className="text-lg md:text-xl text-[#a19282] max-w-2xl mb-12 leading-relaxed">
              We merge ancient storytelling mastery with bleeding-edge AI alchemies to summon hyper-realistic cinematic videos for modern brands.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link href="/dashboard" className="bg-gradient-to-r from-[#d4af37] to-[#aa832d] text-black px-8 py-4 rounded text-sm font-bold tracking-widest uppercase hover:opacity-90 transition-opacity flex items-center gap-2 shadow-[0_0_30px_rgba(194,155,98,0.4)]">
                ENTER THE GUILD <ChevronRight className="w-4 h-4" />
              </Link>
              <Link href="#works" className="bg-transparent text-[#f3ede4] border border-[#2e241c] px-8 py-4 rounded text-sm font-bold tracking-widest uppercase hover:bg-[#1a1510] transition-colors flex items-center gap-2">
                <Play className="w-4 h-4" /> VIEW WORKS
              </Link>
            </div>

            <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 border-t border-[#2e241c] pt-12">
              <div>
                <div className="text-4xl font-serif text-primary font-bold mb-2">2.4M+</div>
                <div className="text-xs tracking-widest uppercase text-[#a19282]">Videos Created</div>
              </div>
              <div>
                <div className="text-4xl font-serif text-primary font-bold mb-2">15,000</div>
                <div className="text-xs tracking-widest uppercase text-[#a19282]">Active Patrons</div>
              </div>
              <div>
                <div className="text-4xl font-serif text-primary font-bold mb-2">4.97/5</div>
                <div className="text-xs tracking-widest uppercase text-[#a19282]">Client Rating</div>
              </div>
              <div>
                <div className="text-4xl font-serif text-primary font-bold mb-2">MDXVI</div>
                <div className="text-xs tracking-widest uppercase text-[#a19282]">Year Founded</div>
              </div>
            </div>

            <div className="mt-24 flex flex-col items-center opacity-50">
              <span className="text-xs tracking-[0.3em] text-[#a19282] uppercase mb-4">SCROLL</span>
              <div className="w-[1px] h-16 bg-gradient-to-b from-[#a19282] to-transparent" />
            </div>

          </div>
        </motion.section>

        {/* FEATURED WORKS (home_2) */}
        <motion.section 
          id="works" 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="py-24 border-t border-[#2e241c] bg-[#050403]">
          <div className="container mx-auto px-6 text-center mb-16">
            <h2 className="font-serif text-5xl text-[#f3ede4] mb-6 tracking-widest uppercase">FEATURED WORKS</h2>
            <p className="text-[#a19282] max-w-2xl mx-auto">
              Behold the creations of our guild — each frame a testament to the union of ancient craft and modern alchemy.
            </p>
          </div>

          <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
            {/* Work 1 */}
            <div className="group relative aspect-[3/4] rounded-xl overflow-hidden border border-[#2e241c] cursor-pointer bg-[#0c0a08]">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
              <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded border border-primary/50 bg-[#1a1510] text-primary text-xs font-bold">AI Avatar</div>
              <div className="absolute top-4 right-4 z-20 text-[#f3ede4] text-xs font-medium font-sans">0:45</div>
              <div className="absolute bottom-6 left-6 z-20">
                <h3 className="font-serif text-xl font-bold text-white group-hover:text-primary transition-colors uppercase tracking-widest">THE MERCHANT OF ALDBROOK</h3>
              </div>
            </div>

            {/* Work 2 */}
            <div className="group relative aspect-[3/4] rounded-xl overflow-hidden border border-[#2e241c] cursor-pointer bg-[#0c0a08]">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
              <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded border border-primary/50 bg-[#1a1510] text-primary text-xs font-bold">Storytelling</div>
              <div className="absolute top-4 right-4 z-20 text-[#f3ede4] text-xs font-medium font-sans">1:20</div>
              <div className="absolute bottom-6 left-6 z-20">
                <h3 className="font-serif text-xl font-bold text-white group-hover:text-primary transition-colors uppercase tracking-widest">REALM OF ECHOES – BRAND STORY</h3>
              </div>
            </div>

            {/* Work 3 */}
            <div className="group relative aspect-[3/4] rounded-xl overflow-hidden border border-[#2e241c] cursor-pointer bg-[#0c0a08]">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
              <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded border border-primary/50 bg-[#1a1510] text-primary text-xs font-bold">Ads</div>
              <div className="absolute top-4 right-4 z-20 text-[#f3ede4] text-xs font-medium font-sans">0:30</div>
              <div className="absolute bottom-6 left-6 z-20">
                <h3 className="font-serif text-xl font-bold text-white group-hover:text-primary transition-colors uppercase tracking-widest">GUILD RECRUITMENT AD</h3>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-12">
             <button className="bg-transparent text-[#a19282] border border-[#2e241c] px-8 py-3 rounded text-sm font-bold tracking-widest uppercase hover:bg-[#1a1510] hover:text-[#f3ede4] transition-colors flex items-center gap-2">
                VIEW FULL PORTFOLIO <ChevronRight className="w-4 h-4" />
             </button>
          </div>
        </motion.section>

        {/* HOW THE GUILD WORKS (home_3) */}
        <motion.section 
          id="process" 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="py-24 border-t border-[#2e241c]">
          <div className="container mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-primary/50" />
              <span className="text-primary text-xs font-bold tracking-widest uppercase">THE RITUAL</span>
              <div className="w-12 h-[1px] bg-primary/50" />
            </div>
            <h2 className="font-serif text-5xl text-[#f3ede4] mb-6 tracking-widest uppercase">HOW THE GUILD WORKS</h2>
            <p className="text-[#a19282] max-w-2xl mx-auto mb-20">
              Six ancient steps, perfected over centuries, now executed at the speed of thought.
            </p>

            <div className="flex flex-col md:flex-row items-start justify-between relative max-w-5xl mx-auto">
              <div className="hidden md:block absolute top-10 left-10 right-10 h-[1px] bg-[#2e241c] z-0" />
              
              {[
                { step: 1, name: "SCRIPT", desc: "Write or import your narrative", icon: PenTool },
                { step: 2, name: "AVATAR", desc: "Choose your guild character", icon: User },
                { step: 3, name: "VOICE & LIP SYNC", desc: "Select voice & sync lips", icon: Mic },
                { step: 4, name: "GENERATE", desc: "AI renders your scene", icon: Zap },
                { step: 5, name: "PREVIEW", desc: "Review & fine-tune", icon: Eye },
                { step: 6, name: "PUBLISH", desc: "Export to any platform", icon: Share2 }
              ].map((s) => (
                <div key={s.step} className="relative z-10 flex flex-col items-center flex-1 mb-8 md:mb-0">
                  <div className="w-20 h-20 rounded-full border border-[#2e241c] bg-[#0c0a08] flex items-center justify-center mb-4 relative">
                    <s.icon className="w-6 h-6 text-[#a19282]" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-black flex items-center justify-center text-xs font-bold">{s.step}</div>
                  </div>
                  <h3 className="font-serif text-sm text-[#f3ede4] tracking-widest uppercase mb-2">{s.name}</h3>
                  <p className="text-[#a19282] text-xs max-w-[120px]">{s.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-20">
              <Link href="/dashboard/create" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#d4af37] to-[#aa832d] text-black px-8 py-4 rounded text-sm font-bold tracking-widest uppercase hover:opacity-90 transition-opacity shadow-[0_0_30px_rgba(194,155,98,0.2)]">
                BEGIN YOUR FIRST RITUAL <Sparkles className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.section>

        {/* THE GUILD OF WIVERN (home_4) */}
        <motion.section 
          id="guild" 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="py-24 border-t border-[#2e241c] bg-[#050403]">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="w-12 h-[1px] bg-primary/50" />
                <span className="text-primary text-xs font-bold tracking-widest uppercase">OUR ORDER</span>
                <div className="w-12 h-[1px] bg-primary/50" />
              </div>
              <h2 className="font-serif text-5xl text-[#f3ede4] tracking-widest uppercase">THE GUILD OF WIVERN</h2>
            </div>

            <div className="flex flex-col lg:flex-row gap-16 items-center max-w-6xl mx-auto">
              {/* Image Left */}
              <div className="flex-1 w-full">
                <div className="relative aspect-[4/5] rounded-xl border border-[#2e241c] bg-[#0c0a08] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0806] via-transparent to-transparent z-10" />
                  {/* Image Placeholder */}
                  <div className="absolute bottom-6 left-6 z-20">
                    <h3 className="font-serif text-2xl font-bold text-primary tracking-widest uppercase mb-1">JEROME ALDWICK</h3>
                    <p className="text-[#a19282] text-xs tracking-[0.2em] uppercase">GRAND MASTER · GUILD FOUNDER · 1516</p>
                  </div>
                </div>
              </div>

              {/* Text Right */}
              <div className="flex-1">
                <blockquote className="font-serif text-2xl text-primary italic mb-8 border-l-2 border-primary/50 pl-6 leading-relaxed">
                  "In the 16th century, I discovered that every soul has a story worth telling. Today, we give that story a face, a voice, and an eternal stage."
                </blockquote>
                
                <p className="text-[#a19282] mb-6 leading-relaxed">
                  Founded by Jerome Aldwick in 1516 in the cobblestoned alleys of Bruges, the Guild of Wivern began as a fellowship of storytellers, portrait painters, and voice actors. Over five centuries, we have evolved — but our soul remains the same: every story deserves to be heard, seen, and remembered.
                </p>
                <p className="text-[#a19282] mb-12 leading-relaxed">
                  Today, Wivern Digital channels that legacy through AI-powered avatar video creation. We serve modern brands, creators, and visionaries who believe that storytelling is the most powerful force in marketing.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-12">
                  <div className="border border-[#2e241c] rounded-lg p-6 bg-[#14100c]">
                    <Sparkles className="w-5 h-5 text-primary mb-3" />
                    <div className="font-serif text-white font-bold text-lg mb-1 uppercase">10 CANNES LIONS</div>
                    <div className="text-xs text-[#a19282]">Digital Content Awards</div>
                  </div>
                  <div className="border border-[#2e241c] rounded-lg p-6 bg-[#14100c]">
                    <Users className="w-5 h-5 text-primary mb-3" />
                    <div className="font-serif text-white font-bold text-lg mb-1 uppercase">15,000+ CLIENTS</div>
                    <div className="text-xs text-[#a19282]">Across 40 countries</div>
                  </div>
                  <div className="border border-[#2e241c] rounded-lg p-6 bg-[#14100c]">
                    <Play className="w-5 h-5 text-primary mb-3" />
                    <div className="font-serif text-white font-bold text-lg mb-1 uppercase">2.4M+ VIDEOS</div>
                    <div className="text-xs text-[#a19282]">Created to date</div>
                  </div>
                  <div className="border border-[#2e241c] rounded-lg p-6 bg-[#14100c]">
                    <Star className="w-5 h-5 text-primary mb-3" />
                    <div className="font-serif text-white font-bold text-lg mb-1 uppercase">4.97/5 RATING</div>
                    <div className="text-xs text-[#a19282]">Average client score</div>
                  </div>
                </div>

                <div>
                  <div className="text-xs font-bold tracking-widest text-[#a19282] uppercase mb-4">TRUSTED BY GUILDS WORLDWIDE</div>
                  <div className="flex flex-wrap gap-3">
                    {["NETFLIX", "SHOPIFY", "HUBSPOT", "NOTION", "CANVA", "ADOBE"].map(b => (
                      <div key={b} className="px-4 py-2 border border-[#2e241c] rounded text-[#a19282] text-xs tracking-wider">{b}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* QUOTE BANNER (home_5) */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="py-32 border-t border-[#2e241c] relative flex items-center justify-center bg-[#0c0a08]">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none" />
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#f3ede4] tracking-wide mb-6">
              "WE DO NOT CREATE CONTENT. WE CRAFT <span className="text-primary">LEGACIES</span>."
            </h2>
            <p className="text-[#a19282] text-lg italic">
              — The Wivern Guild Charter, 1516
            </p>
          </div>
        </motion.section>

        {/* CHOOSE YOUR RANK (home_6) */}
        <motion.section 
          id="pricing" 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="py-24 border-t border-[#2e241c]">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="w-12 h-[1px] bg-primary/50" />
                <span className="text-primary text-xs font-bold tracking-widest uppercase">GUILD MEMBERSHIP</span>
                <div className="w-12 h-[1px] bg-primary/50" />
              </div>
              <h2 className="font-serif text-5xl text-[#f3ede4] tracking-widest uppercase mb-4">CHOOSE YOUR RANK</h2>
              <p className="text-[#a19282]">Every rank unlocks greater powers. Ascend through the guild to command the full might of Wivern's craft.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Pricing Cards (Matching Billing page) */}
              <div className="bg-[#0c0a08] border border-[#2e241c] rounded-xl p-8 flex flex-col">
                <h3 className="font-serif text-lg text-primary tracking-widest uppercase mb-2">APPRENTICE</h3>
                <div className="text-xs text-[#a19282] tracking-widest uppercase mb-4">MONTHLY SUBSCRIPTION</div>
                <div className="flex items-end gap-1 mb-8">
                  <span className="text-4xl font-serif text-white font-bold">$49</span><span className="text-sm text-[#a19282] mb-1">/month</span>
                </div>
                <div className="flex flex-col gap-4 mb-8 flex-1">
                  <div className="flex items-center gap-3 text-sm text-[#f3ede4]"><Check className="w-4 h-4 text-primary" /> 5 videos per month</div>
                  <div className="flex items-center gap-3 text-sm text-[#f3ede4]"><Check className="w-4 h-4 text-primary" /> HD export (1080p)</div>
                  <div className="flex items-center gap-3 text-sm text-[#f3ede4]"><Check className="w-4 h-4 text-primary" /> 3 avatar characters</div>
                  <div className="flex items-center gap-3 text-sm text-[#f3ede4]"><Check className="w-4 h-4 text-primary" /> Basic voice options</div>
                  <div className="flex items-center gap-3 text-sm text-[#f3ede4]"><Check className="w-4 h-4 text-primary" /> Email support</div>
                </div>
                <button className="w-full border border-[#2e241c] text-[#a19282] py-4 rounded text-sm font-bold tracking-widest uppercase hover:bg-[#14100c] hover:text-white transition-colors">JOIN THE GUILD</button>
              </div>

              <div className="bg-[#14100c] border border-primary/50 rounded-xl p-8 flex flex-col relative transform md:-translate-y-4 shadow-[0_0_30px_rgba(194,155,98,0.1)]">
                <div className="absolute top-4 right-4 bg-primary text-black text-xs font-bold px-3 py-1 rounded">Most Popular</div>
                <h3 className="font-serif text-lg text-primary tracking-widest uppercase mb-2">JOURNEYMAN</h3>
                <div className="text-xs text-[#a19282] tracking-widest uppercase mb-4">10 × 30-SECOND VIDEOS</div>
                <div className="flex items-end gap-1 mb-8">
                  <span className="text-5xl font-serif text-white font-bold">$149</span><span className="text-sm text-[#a19282] mb-1.5">/ 3 months</span>
                </div>
                <div className="flex flex-col gap-4 mb-8 flex-1">
                  <div className="flex items-center gap-3 text-sm text-[#f3ede4]"><Check className="w-4 h-4 text-primary" /> 10 videos (30s each)</div>
                  <div className="flex items-center gap-3 text-sm text-[#f3ede4]"><Check className="w-4 h-4 text-primary" /> Valid for 3 months</div>
                  <div className="flex items-center gap-3 text-sm text-[#f3ede4]"><Check className="w-4 h-4 text-primary" /> 4K cinematic export</div>
                  <div className="flex items-center gap-3 text-sm text-[#f3ede4]"><Check className="w-4 h-4 text-primary" /> All avatar characters</div>
                  <div className="flex items-center gap-3 text-sm text-[#f3ede4]"><Check className="w-4 h-4 text-primary" /> Priority support</div>
                </div>
                <button className="w-full bg-gradient-to-r from-[#d4af37] to-[#aa832d] text-black py-4 rounded text-sm font-bold tracking-widest uppercase hover:opacity-90 transition-opacity">JOIN THE GUILD</button>
              </div>

              <div className="bg-[#0c0a08] border border-[#2e241c] rounded-xl p-8 flex flex-col">
                <h3 className="font-serif text-lg text-primary tracking-widest uppercase mb-2">GRAND MASTER</h3>
                <div className="text-xs text-[#a19282] tracking-widest uppercase mb-4">PREMIUM PLAN</div>
                <div className="flex items-end gap-1 mb-8">
                  <span className="text-4xl font-serif text-white font-bold">$299</span><span className="text-sm text-[#a19282] mb-1">/month</span>
                </div>
                <div className="flex flex-col gap-4 mb-8 flex-1">
                  <div className="flex items-center gap-3 text-sm text-[#f3ede4]"><Check className="w-4 h-4 text-primary" /> Unlimited videos</div>
                  <div className="flex items-center gap-3 text-sm text-[#f3ede4]"><Check className="w-4 h-4 text-primary" /> 8K ultra cinematic</div>
                  <div className="flex items-center gap-3 text-sm text-[#f3ede4]"><Check className="w-4 h-4 text-primary" /> Full avatar library</div>
                  <div className="flex items-center gap-3 text-sm text-[#f3ede4]"><Check className="w-4 h-4 text-primary" /> Custom voice cloning</div>
                  <div className="flex items-center gap-3 text-sm text-[#f3ede4]"><Check className="w-4 h-4 text-primary" /> Dedicated guild master</div>
                </div>
                <button className="w-full border border-[#2e241c] text-[#a19282] py-4 rounded text-sm font-bold tracking-widest uppercase hover:bg-[#14100c] hover:text-white transition-colors">JOIN THE GUILD</button>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ADD-ONS (home_7) */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="pb-24 pt-12 border-t border-[#2e241c] bg-[#050403]">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-12">
               <div className="inline-flex items-center gap-4 mb-6">
                <div className="w-12 h-[1px] bg-primary/50" />
                <span className="text-primary text-xs font-bold tracking-widest uppercase">GUILD ENCHANTMENTS</span>
                <div className="w-12 h-[1px] bg-primary/50" />
              </div>
              <h2 className="font-serif text-3xl text-[#f3ede4] tracking-widest uppercase mb-4">OPTIONAL ADD-ONS</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="border border-[#2e241c] rounded-lg p-6 bg-[#0c0a08]">
                <div className="text-primary mb-2">+</div>
                <h4 className="font-serif text-white tracking-widest uppercase mb-2">NEURAL LIP SYNC</h4>
                <p className="text-xs text-[#a19282] mb-4">Ultra-realistic lip sync matching</p>
                <div className="text-primary font-serif font-bold tracking-widest">+$12/VIDEO</div>
              </div>
              <div className="border border-[#2e241c] rounded-lg p-6 bg-[#0c0a08]">
                <div className="text-primary mb-2">+</div>
                <h4 className="font-serif text-white tracking-widest uppercase mb-2">SCRIPT ALCHEMY</h4>
                <p className="text-xs text-[#a19282] mb-4">AI-crafted scripts by guild scribes</p>
                <div className="text-primary font-serif font-bold tracking-widest">+$25/SCRIPT</div>
              </div>
              <div className="border border-[#2e241c] rounded-lg p-6 bg-[#0c0a08]">
                <div className="text-primary mb-2">+</div>
                <h4 className="font-serif text-white tracking-widest uppercase mb-2">VOICE CUSTOMIZATION</h4>
                <p className="text-xs text-[#a19282] mb-4">Clone or craft unique voices</p>
                <div className="text-primary font-serif font-bold tracking-widest">+$35/VOICE</div>
              </div>
              <div className="border border-[#2e241c] rounded-lg p-6 bg-[#0c0a08]">
                <div className="text-primary mb-2">+</div>
                <h4 className="font-serif text-white tracking-widest uppercase mb-2">RUSH DELIVERY</h4>
                <p className="text-xs text-[#a19282] mb-4">24-hour video delivery</p>
                <div className="text-primary font-serif font-bold tracking-widest">+$20/VIDEO</div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* TESTIMONIALS (home_8) */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="py-24 border-t border-[#2e241c]">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="w-12 h-[1px] bg-primary/50" />
                <span className="text-primary text-xs font-bold tracking-widest uppercase">THE CHRONICLES</span>
                <div className="w-12 h-[1px] bg-primary/50" />
              </div>
              <h2 className="font-serif text-5xl text-[#f3ede4] tracking-widest uppercase mb-4">WORDS OF THE PATRONS</h2>
              <p className="text-[#a19282]">Hear from the artisans, brands, and visionaries who have entrusted their stories to the guild.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-[#2e241c] rounded-xl p-8 bg-[#0c0a08]">
                <Quote className="w-8 h-8 text-primary mb-6 opacity-50" />
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
                </div>
                <p className="text-[#a19282] italic mb-8 leading-relaxed">"Wivern Digital transformed our content strategy. The quality of the avatars is indistinguishable from reality, saving us hundreds of hours in production time."</p>
                <div>
                  <div className="font-serif text-white tracking-widest uppercase text-sm">ELARA VANCE</div>
                  <div className="text-xs text-primary">Marketing Director, Lumina</div>
                </div>
              </div>
              <div className="border border-[#2e241c] rounded-xl p-8 bg-[#0c0a08]">
                <Quote className="w-8 h-8 text-primary mb-6 opacity-50" />
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
                </div>
                <p className="text-[#a19282] italic mb-8 leading-relaxed">"I was skeptical about AI avatar video creation, but the Guild's platform is nothing short of alchemy. Our ads are performing 3x better."</p>
                <div>
                  <div className="font-serif text-white tracking-widest uppercase text-sm">MARCUS THORNE</div>
                  <div className="text-xs text-primary">CEO, Obsidian Forge</div>
                </div>
              </div>
              <div className="border border-[#2e241c] rounded-xl p-8 bg-[#0c0a08]">
                <Quote className="w-8 h-8 text-primary mb-6 opacity-50" />
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
                </div>
                <p className="text-[#a19282] italic mb-8 leading-relaxed">"From script to final cinematic delivery in under 24 hours. The Grand Master plan is the best investment our agency has made this year."</p>
                <div>
                  <div className="font-serif text-white tracking-widest uppercase text-sm">SARAH JENKINS</div>
                  <div className="text-xs text-primary">Creative Lead, Apex</div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* BLOG (home_9) */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="py-24 border-t border-[#2e241c] bg-[#050403]">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-serif text-5xl text-[#f3ede4] tracking-widest uppercase mb-4">FROM THE GUILD'S QUILL</h2>
              <p className="text-[#a19282]">Insights, discoveries, and dispatches from the frontiers of AI video creation and cinematic storytelling.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Blog 1 */}
              <div className="border border-[#2e241c] rounded-xl overflow-hidden bg-[#0c0a08] group cursor-pointer">
                <div className="aspect-video relative bg-[#14100c]">
                   <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded border border-primary/50 bg-[#1a1510] text-primary text-xs font-bold">AI Technology</div>
                </div>
                <div className="p-6">
                  <div className="text-xs text-[#a19282] mb-3">April 18, 2026 · 5 min read</div>
                  <h3 className="font-serif text-lg text-white mb-3 group-hover:text-primary transition-colors tracking-wide">THE RISE OF NEURAL LIP SYNC: HOW AI AVATARS ARE REDEFINING VISUAL STORYTELLING</h3>
                  <p className="text-[#a19282] text-sm mb-6 line-clamp-3">Explore how cutting-edge neural rendering models are closing the gap between digital avatars and reality — and what this means for the future of brand communication.</p>
                  <div className="text-primary text-xs font-bold tracking-widest uppercase flex items-center gap-2">READ SCROLL <ChevronRight className="w-4 h-4" /></div>
                </div>
              </div>
              
              {/* Blog 2 */}
              <div className="border border-[#2e241c] rounded-xl overflow-hidden bg-[#0c0a08] group cursor-pointer">
                <div className="aspect-video relative bg-[#14100c]">
                   <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded border border-primary/50 bg-[#1a1510] text-primary text-xs font-bold">Content Creation</div>
                </div>
                <div className="p-6">
                  <div className="text-xs text-[#a19282] mb-3">April 10, 2026 · 7 min read</div>
                  <h3 className="font-serif text-lg text-white mb-3 group-hover:text-primary transition-colors tracking-wide">FROM SCRIPT TO SCREEN: THE CINEMATIC WORKFLOW BEHIND EVERY WIVERN VIDEO</h3>
                  <p className="text-[#a19282] text-sm mb-6 line-clamp-3">A behind-the-curtain look at the guild's seven-step creation ritual — where ancient storytelling wisdom meets the precision of modern AI sorcery.</p>
                  <div className="text-primary text-xs font-bold tracking-widest uppercase flex items-center gap-2">READ SCROLL <ChevronRight className="w-4 h-4" /></div>
                </div>
              </div>

              {/* Blog 3 */}
              <div className="border border-[#2e241c] rounded-xl overflow-hidden bg-[#0c0a08] group cursor-pointer">
                <div className="aspect-video relative bg-[#14100c]">
                   <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded border border-primary/50 bg-[#1a1510] text-primary text-xs font-bold">Storytelling</div>
                </div>
                <div className="p-6">
                  <div className="text-xs text-[#a19282] mb-3">March 29, 2026 · 6 min read</div>
                  <h3 className="font-serif text-lg text-white mb-3 group-hover:text-primary transition-colors tracking-wide">WHY BRAND STORYTELLING IS THE MOST POWERFUL MARKETING FORCE OF OUR AGE</h3>
                  <p className="text-[#a19282] text-sm mb-6 line-clamp-3">Data campaigns fade. Stories endure. We examine why narrative-driven avatar videos outperform traditional ads by 4x in retention and conversion metrics.</p>
                  <div className="text-primary text-xs font-bold tracking-widest uppercase flex items-center gap-2">READ SCROLL <ChevronRight className="w-4 h-4" /></div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-12">
              <button className="bg-transparent text-[#a19282] border border-[#2e241c] px-8 py-3 rounded text-sm font-bold tracking-widest uppercase hover:bg-[#1a1510] hover:text-[#f3ede4] transition-colors flex items-center gap-2">
                 BROWSE ALL SCROLLS <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.section>

        {/* CONTACT (home_10) */}
        <motion.section 
          id="contact" 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="py-24 border-t border-[#2e241c]">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="w-12 h-[1px] bg-primary/50" />
                <span className="text-primary text-xs font-bold tracking-widest uppercase">SEND A RAVEN</span>
                <div className="w-12 h-[1px] bg-primary/50" />
              </div>
              <h2 className="font-serif text-5xl text-[#f3ede4] tracking-widest uppercase mb-4">CONTACT THE GUILD</h2>
              <p className="text-[#a19282]">Whether you seek counsel, wish to commission a creation, or desire to join our order — send word and we shall respond with haste.</p>
            </div>

            <div className="flex flex-col md:flex-row gap-16">
              {/* Left Info */}
              <div className="w-full md:w-1/3">
                <div className="flex gap-4 mb-8">
                  <div className="w-12 h-12 rounded border border-[#2e241c] bg-[#14100c] flex items-center justify-center flex-shrink-0 text-primary">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-[#f3ede4] tracking-widest uppercase text-sm mb-1">GUILD HEADQUARTERS</h4>
                    <p className="text-[#a19282] text-sm">Markt 1, Bruges, Belgium<br/>& Digital Realm, Est. 1516</p>
                  </div>
                </div>
                
                <div className="flex gap-4 mb-8">
                  <div className="w-12 h-12 rounded border border-[#2e241c] bg-[#14100c] flex items-center justify-center flex-shrink-0 text-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-[#f3ede4] tracking-widest uppercase text-sm mb-1">DISPATCH A LETTER</h4>
                    <p className="text-[#a19282] text-sm">guild@wiverndigital.com</p>
                  </div>
                </div>

                <div className="flex gap-4 mb-12">
                  <div className="w-12 h-12 rounded border border-[#2e241c] bg-[#14100c] flex items-center justify-center flex-shrink-0 text-primary">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-[#f3ede4] tracking-widest uppercase text-sm mb-1">SUMMON BY VOICE</h4>
                    <p className="text-[#a19282] text-sm">+1 (800) WIVERN-D</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold tracking-widest text-[#a19282] uppercase mb-4">FIND US IN THE DIGITAL REALM</h4>
                  <div className="flex gap-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="w-10 h-10 rounded border border-[#2e241c] bg-[#0c0a08] flex items-center justify-center text-[#a19282] hover:text-primary hover:border-primary/50 transition-colors cursor-pointer">
                        <Globe className="w-4 h-4" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Form */}
              <div className="flex-1 bg-[#0c0a08] border border-[#2e241c] rounded-xl p-8">
                <form className="flex flex-col gap-6">
                  <div>
                    <label className="block text-xs font-bold tracking-widest text-[#a19282] uppercase mb-2">YOUR NAME</label>
                    <input type="text" placeholder="e.g. Aldric the Merchant" className="w-full bg-[#14100c] border border-[#2e241c] rounded p-3 text-[#f3ede4] focus:outline-none focus:border-primary/50" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold tracking-widest text-[#a19282] uppercase mb-2">EMAIL ADDRESS</label>
                    <input type="email" placeholder="your@guild.com" className="w-full bg-[#14100c] border border-[#2e241c] rounded p-3 text-[#f3ede4] focus:outline-none focus:border-primary/50" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold tracking-widest text-[#a19282] uppercase mb-2">YOUR MESSAGE</label>
                    <textarea placeholder="Describe your vision, your quest, or your inquiry..." className="w-full h-32 bg-[#14100c] border border-[#2e241c] rounded p-3 text-[#f3ede4] focus:outline-none focus:border-primary/50 resize-none" />
                  </div>
                  <button type="button" className="w-full bg-gradient-to-r from-[#d4af37] to-[#aa832d] text-black py-4 rounded text-sm font-bold tracking-widest uppercase hover:opacity-90 transition-opacity">
                    SEND MESSAGE
                  </button>
                </form>
              </div>
            </div>
          </div>
        </motion.section>

      </main>

      {/* FOOTER (home_10 bottom) */}
      <footer className="border-t border-[#2e241c] bg-[#050403] pt-24 pb-8">
        <div className="container mx-auto px-6 max-w-6xl">
          
          <div className="text-center mb-24">
             <div className="text-primary mb-4">
                <Sparkles className="w-6 h-6 mx-auto" />
             </div>
             <h2 className="font-serif text-5xl text-[#f3ede4] tracking-widest mb-6">
                YOUR STORY AWAITS, <span className="text-primary">ARTISAN</span>
             </h2>
             <p className="text-[#a19282] italic font-serif mb-8 text-lg">Five centuries of craft. One platform. Infinite stories.</p>
             <div className="flex justify-center">
               <button className="bg-gradient-to-r from-[#d4af37] to-[#aa832d] text-black px-8 py-4 rounded text-sm font-bold tracking-widest uppercase hover:opacity-90 transition-opacity flex items-center gap-2 shadow-[0_0_30px_rgba(194,155,98,0.3)]">
                 ENTER THE GUILD — FREE TRIAL <ChevronRight className="w-4 h-4" />
               </button>
             </div>
             <p className="text-[#a19282] text-xs mt-4">No seal required. Cancel any parchment, any time.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-[#2e241c] pt-12 pb-12">
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full border border-primary/50 flex items-center justify-center bg-black/40">
                  <Sparkles className="w-4 h-4 text-primary" />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="font-serif font-bold tracking-widest text-[#f3ede4] text-sm">WIVERN</span>
                  <span className="font-serif text-primary text-[10px] tracking-widest">DIGITAL</span>
                </div>
              </div>
              <p className="text-[#a19282] text-sm leading-relaxed mb-6">
                Crafting digital avatar videos with the wisdom of centuries and the power of modern AI. Est. MDXVI — Bruges, Belgium.
              </p>
            </div>
            
            <div>
              <h4 className="font-serif text-[#f3ede4] tracking-widest uppercase text-sm mb-6">GUILD</h4>
              <ul className="flex flex-col gap-4 text-sm text-[#a19282]">
                <li><Link href="#" className="hover:text-primary transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Portfolio</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-[#f3ede4] tracking-widest uppercase text-sm mb-6">CRAFT</h4>
              <ul className="flex flex-col gap-4 text-sm text-[#a19282]">
                <li><Link href="/dashboard/avatars" className="hover:text-primary transition-colors">Avatar Library</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Voice Studio</Link></li>
                <li><Link href="/dashboard/billing" className="hover:text-primary transition-colors">Pricing</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Templates</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-[#f3ede4] tracking-widest uppercase text-sm mb-6">SUPPORT</h4>
              <ul className="flex flex-col gap-4 text-sm text-[#a19282]">
                <li><Link href="#" className="hover:text-primary transition-colors">Documentation</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">API Access</Link></li>
                <li><Link href="#contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Status</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#2e241c] pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#a19282]">
            <div>© 2026 Wivern Digital. All rights reserved. Est. MDXVI.</div>
            <div className="flex items-center gap-6">
              <Link href="#" className="hover:text-white transition-colors">Imprint</Link>
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}
// Note: Users and Star imports are needed from lucide-react. I will fix the imports.
