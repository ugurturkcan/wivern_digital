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
    id: 'enchantress_visage',
    position: [0.0, 0.65, 0.1],
    label: 'Visage',
    title: 'Gothic Enchantress Visage',
    content: `Primary Generation Prompt

"A breathtaking photorealistic portrait of a dark fantasy enchantress. Her facial features are striking and aristocratic, with pale porcelain skin contrasting against deep obsidian makeup around piercing amber eyes. 

Surface details: The lighting is cinematic chiaroscuro, reminiscent of classical renaissance paintings but with a digital-occult edge. A soft rim light catches the subtle metallic gold flakes embedded in her dark lipstick.

The asset utilizes advanced subsurface scattering for hyper-realistic skin rendering, ensuring physically accurate light absorption and diffusion across the cheekbones and jawline."

Control Layers
— Prompt Adherence: 98%
— Texture resolution: 8K
— Seed locked: 4891023`,
  },
  {
    id: 'gilded_corset',
    position: [0.0, 0.25, 0.15],
    label: 'Gilded Armor',
    title: 'Intricate Gilded Corset',
    content: `Primary Generation Prompt

"Close-up of an ornate medieval bodice armor, crafted from blackened steel and layered with intricate gold filigree. The armor plates curve elegantly to form a protective yet ceremonial corset. 

Lighting environment: Soft studio lighting with a warm golden-hour fill. The gold inlays catch the light brilliantly, emphasizing the meticulous craftsmanship of the digital forge. 

Material breakdown: The blackened steel uses a highly treated PBR material (metalness 0.9, roughness 0.3) showing micro-abrasions from ancient battles. The gold filigree is polished to a mirror finish (metalness 1.0, roughness 0.05), blending ancient smithing principles with modern computational rendering."

Control Layers
— Reference image: wivern_gilded_armor.png
— Upscaler: 4x-UltraSharp at 0.3 denoise`,
  },
  {
    id: 'void_robes',
    position: [0.0, -0.45, 0.2],
    label: 'Void-Silk Robes',
    title: 'Woven Void-Silk Lower Robes',
    content: `Primary Generation Prompt

"A detailed shot of flowing, dark fantasy lower robes. The fabric appears to be woven from abyssal thread, displaying a mesmerizing texture that shifts between matte charcoal and deep, shimmering midnight blue as the light moves across its folds.

Surface texture: The cloth physically simulates heavy velvet but flows with ethereal lightness. The edges are lined with frayed golden thread, suggesting an ancient, noble lineage.

Render parameters: Camera uses an 85mm lens with a shallow depth of field. Cloth physics simulation is baked at 120 ticks per second to capture the exact, dramatic resting drape of the fabric."

Control Layers
— Physics Engine: Marvelous Designer drape data
— Sampler: DPM++ SDE Karras, 40 steps, CFG 6.5`,
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
                    modelUrl="/avatar.glb"
                    hotspots={DEMO_HOTSPOTS}
                    label="Avatar Viewer — Wivern Digital"
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
