'use client';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

export default function EcologyFundPage() {
  return (
    <>
      <Nav />
      <main className="selection:bg-yellow-900/40 selection:text-white">

        {/* ─── PAGE HEADER ──────────────────────────────────────── */}
        <section className="relative pt-40 pb-24 bg-[#111111] border-b border-yellow-900/20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/60 to-[#111111]" />
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8"
          >
            <span className="section-label block mb-4">Commitment to the Planet</span>
            <h1 className="serif-font text-6xl lg:text-8xl text-white leading-none tracking-wide mb-6">
              Ecology Fund <br /><span className="gradient-gold">&amp; Data</span>
            </h1>
            <div className="w-px h-16 bg-gradient-to-b from-yellow-600 to-transparent mb-6" />
            <p className="text-yellow-600 text-[11px] tracking-[0.2em] uppercase font-semibold">Jerome Goerke - Founder</p>
          </motion.div>
        </section>

        {/* ─── CONTENT SECTION ──────────────────────────────────── */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="py-32 bg-[#0e0e0e]"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

              {/* Interactive 3D Model Viewer Placeholder / CTA */}
              <div 
                className="col-span-1 lg:col-span-1 flex flex-col justify-center lg:sticky lg:top-28"
              >
                <div className="relative aspect-[4/5] bg-black/40 backdrop-blur-md border border-yellow-900/30 flex flex-col items-center justify-center p-8 text-center overflow-hidden group hover:border-yellow-600/50 transition-all duration-700 shadow-2xl">
                  {/* Aggressive glowing orb background */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-600/20 via-black to-black opacity-40 group-hover:opacity-100 group-hover:from-yellow-500/30 transition-all duration-700 scale-150 group-hover:scale-100" />
                  
                  {/* Grid lines overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 group-hover:opacity-40 transition-opacity" />

                  <div className="relative z-10 flex flex-col items-center gap-8">
                    {/* Animated Eye Icon */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-yellow-500/20 rounded-full blur-xl animate-pulse" />
                      <span className="relative w-20 h-20 rounded-full bg-black border border-yellow-700/50 flex items-center justify-center group-hover:scale-110 group-hover:border-yellow-400 transition-all duration-500 shadow-[0_0_30px_rgba(202,138,4,0.15)] group-hover:shadow-[0_0_50px_rgba(234,179,8,0.4)]">
                        <span className="text-yellow-500 text-3xl group-hover:animate-ping absolute opacity-0 group-hover:opacity-30">👁</span>
                        <span className="text-yellow-500 text-3xl relative z-10">👁</span>
                      </span>
                    </div>
                    
                    <div>
                      <span className="text-[10px] tracking-[0.3em] uppercase text-yellow-600 font-bold block mb-3 animate-pulse">
                        Neural Interface Ready
                      </span>
                      <h4 className="serif-font text-3xl text-white mb-3 tracking-wide">
                        Proto-Avatar Engine
                      </h4>
                      <p className="text-gray-400 text-[11px] tracking-widest uppercase mb-8 max-w-[280px] leading-relaxed mx-auto">
                        A fully immersive 3D environment for structural analysis.
                      </p>
                    </div>

                    <Link 
                      href="/viewer"
                      className="relative overflow-hidden px-10 py-4 bg-yellow-600/10 hover:bg-yellow-500 border border-yellow-600/50 hover:border-yellow-400 text-yellow-500 hover:text-black text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 group/btn"
                    >
                      <span className="relative z-10">Initiate Sequence</span>
                      {/* Shine effect */}
                      <div className="absolute top-0 -left-[100%] w-[120%] h-full bg-white/20 skew-x-[45deg] group-hover/btn:animate-[shine_1s_ease-out_forwards]" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <span className="section-label block mb-6">The Dreamscape</span>
                <h2 className="serif-font text-3xl text-white mb-8">A Positive Force for Humanity</h2>
                <div className="gold-line mb-8" />
                <div className="space-y-6 text-gray-400 font-light leading-relaxed text-sm">
                  <p>
                    At the heart of Wivern Digital is a commitment to balance the creation of AI avatars for training and entertainment with the preservation of our planet. As we build the future web, which we see as a &quot;dreamscape&quot; where human intelligence and play converge on a hyper-real canvas, we recognize that this innovation requires resource usage. The Ecological Fund is our proactive response to ensure this development serves as a positive force for humanity.
                  </p>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-800">
                  <span className="section-label block mb-6">Mission</span>
                  <h3 className="serif-font text-2xl text-white mb-4">Our Mission and Governance</h3>
                  <div className="space-y-4 text-gray-400 font-light leading-relaxed text-sm">
                    <p>
                      This fund is established by the founder of Wivern Digital, Jerome Goerke, who also founded the greentech.training platform. Both entities are unified by a singular focus: improving planetary and human lives through the smarter application of human knowledge and artificial intelligence within the food, energy, and water nexus.
                    </p>
                    <p>
                      The Guild operates as a transparent, post-capitalist system where revenue is shared equitably among contributors. This model is intentionally decoupled from stock markets and traditional capitalistic principles, ensuring that our operations prioritize human and ecological value over extractive profit.
                    </p>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-800">
                  <span className="section-label block mb-6">Application</span>
                  <h3 className="serif-font text-2xl text-white mb-4">Purpose and Application</h3>
                  <p className="text-gray-400 font-light leading-relaxed text-sm mb-6">
                    The 15% allocation to the Ecological Fund serves two primary objectives:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="glass-panel p-6 card-hover">
                      <h4 className="serif-font text-base text-white mb-2 tracking-wider">Global Knowledge Transfer</h4>
                      <p className="text-gray-500 text-xs font-light leading-relaxed">
                        We provide scholarships via the greentech.training platform, empowering individuals worldwide to master the food, energy, and water nexus. This allows us to actively compensate experts to share the knowledge necessary for building a sustainable future.
                      </p>
                    </div>
                    <div className="glass-panel p-6 card-hover">
                      <h4 className="serif-font text-base text-white mb-2 tracking-wider">Active Restoration</h4>
                      <p className="text-gray-500 text-xs font-light leading-relaxed">
                        Beyond offsetting the resource requirements of our data centers and server sites, we collaborate with local communities, municipal councils, and operators to repair and restore the nature affected by our AI creation process.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-800">
                  <span className="section-label block mb-6">Transparency</span>
                  <h3 className="serif-font text-2xl text-white mb-4">Financial Structure</h3>
                  <p className="text-gray-400 font-light leading-relaxed text-sm mb-6">
                    We provide complete transparency regarding how these funds are generated and deployed.
                  </p>
                  <ul className="space-y-4 text-gray-400 font-light leading-relaxed text-sm">
                    <li><strong className="text-gray-200">Deduction Timing:</strong> The 15% ecological allocation is calculated and deducted from net revenue—the amount remaining after Value Added Tax (VAT) has been settled with the authorities.</li>
                    <li><strong className="text-gray-200">Operational Transparency:</strong> Because this deduction occurs from net revenue, it is integrated into our cost structure before corporate profit is finalized. This ensures that the commitment to the planet is a foundational cost of doing business, rather than an afterthought.</li>
                    <li><strong className="text-gray-200">Reporting:</strong> Every client can see exactly how their contribution is divided. By separating the Ecological Fund from our corporate overhead and creative commission pools, we ensure that stakeholders can track exactly how their investment is converted into scholarships and community-led restoration projects.</li>
                  </ul>
                </div>

              </motion.div>

            </div>
          </div>
        </motion.section>

        {/* ─── MANIFESTO QUOTE ──────────────────────────────────── */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="py-32 bg-[#111111] border-t border-yellow-900/20 text-center"
        >
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <blockquote className="serif-font text-3xl lg:text-5xl text-white italic leading-snug mb-10">
              &ldquo;This structured approach ensures that the 'dreamscape' we create does not come at the expense of our reality, but rather, actively contributes to its regeneration.&rdquo;
            </blockquote>
            <div className="gold-line mx-auto mb-6" />
          </div>
        </motion.section>

      </main>
      <Footer />
    </>
  );
}
