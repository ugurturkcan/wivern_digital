'use client';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import type { Hotspot } from '@/components/InteractiveModelViewer';

// Lazy load the interactive 3D viewer
const InteractiveModelViewer = dynamic(
  () => import('@/components/InteractiveModelViewer'),
  { ssr: false }
);

// ─── Demo Hotspot Data (replace with real avatar coords once model is ready) ───
const DEMO_HOTSPOTS: Hotspot[] = [
  {
    id: 'helmet_visor',
    position: [0.0, 0.1, 1.1],
    label: 'Visor Optics',
    title: 'Tactical Visor — AR Interface',
    content: `Primary Generation Prompt

"Extreme macro close-up of a highly detailed armored shoulder pad (pauldron) for a digital avatar. The surface material is a brushed metal alloy exhibiting a semi-gloss finish, with visible micro-scratches, mechanical edge wear, and distinct specular highlights on the elevated structural ridges.

The shading applies the established color palette, emphasizing warm tones across the metal and any underlying costume fabric. The environmental lighting consists of a hazy grey-blue sky providing ambient illumination. All light sources are soft and diffuse, ensuring absolutely no hard shadows are cast across the armor's geometry.

The asset is rendered with 8k texture density and physically based rendering (PBR) materials to demonstrate precise structural integrity and physical wear suitable for close-range inspection."

Control Layers
— ControlNet: depth map for structural form
— LoRA: wivern_armour_v3 (weight 0.85)
— Sampler: DPM++ 2M Karras, 32 steps
— CFG Scale: 7.5`,
  },
  {
    id: 'helmet_side',
    position: [0.9, 0.0, 0.3],
    label: 'Audio Node',
    title: 'Communication — Audio Node',
    content: `Primary Generation Prompt

"Detailed render of a medieval fantasy chest plate fused with bioluminescent organic material. Central sternum piece features an etched guild sigil with subtle golden inlay. Surface exhibits layered lacquer over hammered iron substrate with strategic patina application across recessed geometry.

The lighting environment is a golden-hour overcast studio setup — directional key light at 30 degrees, no hard shadow casting. Rim lighting from rear-left at reduced intensity to separate form from negative space.

Material breakdown: outer iron layer (metalness 0.92, roughness 0.24), inner leather lining visible at edge joins (roughness 0.78), gold inlay (metalness 1.0, roughness 0.05)."

Control Layers
— Reference image: guild_chest_ref_v2.png
— LoRA: wivern_guild_livery (weight 0.9)
— Upscaler: 4x-UltraSharp at 0.4 denoise`,
  },
  {
    id: 'helmet_top',
    position: [0.0, 0.9, 0.2],
    label: 'Crown',
    title: 'Structural Crown — Ridge',
    content: `Primary Generation Prompt

"Close-up portrait of a full-face armored helm for a fantasy guild avatar. The visor is a narrow horizontal slit with polished inner edge catch. Crown features three raised ridge fins for structural reinforcement. The overall silhouette references Milanese sallet design reinterpreted through a digital-occult aesthetic.

Surface texture: aged brushed titanium with selective rust bloom at weld seams. No rust on primary face plate — clean and imposing. Temperature of metal shifts from cool grey-silver at crown to warm amber at jaw-line due to forge heat variation simulation.

Render parameters: camera at eye-level, extremely shallow depth-of-field (f/1.8 equivalent), background fully bokeh at #1a1a1a. HDR environment for accurate reflections of the studio dome."

Control Layers
— Depth: extracted from concept sketch (helm_concept_03.png)
— Seed locked: 2847391
— Sampler: Euler A, 28 steps, CFG 6.0`,
  },
];

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

              {/* Interactive 3D Model Viewer */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mystic-glow lg:sticky lg:top-28"
              >
                <div className="relative aspect-[4/5] bg-[#080808] overflow-hidden border border-yellow-900/20">
                  <InteractiveModelViewer
                    modelUrl="/DamagedHelmet.glb"
                    hotspots={DEMO_HOTSPOTS}
                    label="Armour Viewer — Wivern Digital"
                  />
                </div>
                <p className="text-[8px] tracking-[0.2em] uppercase text-gray-600 text-center mt-2">
                  ◉ Click the glowing markers to explore design layers
                </p>
              </motion.div>

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
