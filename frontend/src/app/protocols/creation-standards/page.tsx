'use client';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';

const sections = [
  {
    id: 'philosophy',
    title: 'The Foundational Philosophy',
    content: `At Wivern Digital, creation is not an output — it is a discipline. Every avatar construct that leaves the Guild has passed through a rigorous, multi-stage assembly process governed by standards that prioritise structural fidelity, ethical responsibility, and aesthetic precision above commercial expediency. We do not produce approximations. We formalise.`,
  },
  {
    id: 'formulation',
    title: 'Stage I — Formulation',
    content: `No generative cycle begins without a fully ratified structural blueprint. The client's conceptual requirements are deconstructed into atomic parameters: identity archetype, aesthetic range, vocal signature, somatic baseline, and negative space definition (what the entity must not be). This blueprint is submitted to the client for approval before any processing is initiated. Amendments are welcomed at this stage; they are costly once infusion has begun.`,
  },
  {
    id: 'infusion',
    title: 'Stage II — Infusion',
    content: `The infusion stage applies animation logic to the approved structural blueprint. Raw generative outputs are subjected to: latent space navigation and seed locking to establish consistency; ControlNet skeleton alignment to govern posture and anatomical coherence; localised inpainting to suppress artefacts and ensure visual integrity; and iterative refinement cycles until the static construct achieves the fidelity threshold set in the formulation blueprint. The Guild does not accept outputs that fail to meet this threshold.`,
  },
  {
    id: 'rendering',
    title: 'Stage III — Rendering & Temporal Formalization',
    content: `The final stage transforms approved static constructs into living, animated entities. This phase includes: generative video sequencing (standard output: 30 seconds); audio-to-labial synchronisation using client-supplied or Guild-sourced voice profiles; temporal coherence algorithms to ensure frame-to-frame structural consistency; and final artefact suppression. Every completed construct receives a quality certification review by the Guild's Master Avatarist before delivery.`,
  },
  {
    id: 'ethics',
    title: 'Ethical Creation Standards',
    content: `The Guild enforces the following ethical standards across all commissions without exception: all real individuals depicted in avatar constructs must have provided documented informed consent; no content designed to deceive, manipulate, or harm will be produced under any circumstances; the synthetic nature of all deliverables must be disclosed in public-facing contexts, regardless of local legal requirements; no commission may be used for political disinformation, electoral manipulation, or non-consensual synthetic media. These standards are non-negotiable and apply to all tiers of commission.`,
  },
  {
    id: 'ecology',
    title: 'Ecological Production Standards',
    content: `The Guild acknowledges that AI creation carries a measurable ecological cost. Our creation standards therefore include binding ecological commitments: fifteen percent (15%) of all net revenue is allocated to the Ecological Impact and Innovation Fund before any other distribution; all processing workloads are sourced, to the maximum extent operationally feasible, from renewable energy providers; Guild data infrastructure is reviewed annually against net-zero targets; and clients are provided with a transparent breakdown of their commission's ecological allocation in every invoice.`,
  },
  {
    id: 'quality',
    title: 'Quality Assurance Protocol',
    content: `All deliverables are subject to a formal quality assurance process before client handover. This process includes a structural review against the approved formulation blueprint; a technical review of video coherence, audio synchronisation accuracy, and artefact suppression; an ethical review confirming compliance with our Acceptable Use Policy; and a final sign-off by the Master Avatarist. Clients receive a single revision cycle as standard. Additional revision cycles are available at the commission tier rates specified in the current tariff schedule.`,
  },
  {
    id: 'delivery',
    title: 'Delivery Standards',
    content: `Final constructs are delivered in agreed formats via secure, encrypted transfer. Standard delivery includes: the final rendered video sequence in H.264 and ProRes formats; a static keyframe extraction set; an audio-separated master file; and a production summary document detailing the parameters and seed configurations used (for client reference and future consistency). Delivery timelines are specified in the commission agreement and are subject to the Guild's current capacity schedule.`,
  },
];

export default function CreationStandardsPage() {
  return (
    <>
      <Nav />
      <main className="selection:bg-yellow-900/40 selection:text-white">

        {/* Hero */}
        <section className="relative pt-40 pb-24 bg-[#111111] border-b border-yellow-900/20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/80 to-[#111111]" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Link href="/" className="text-gray-500 hover:text-yellow-600 text-xs tracking-widest uppercase transition-colors">Home</Link>
              <span className="text-yellow-900">◈</span>
              <span className="text-gray-600 text-xs tracking-widest uppercase">Protocols</span>
              <span className="text-yellow-900">◈</span>
              <span className="text-yellow-600 text-xs tracking-widest uppercase">Creation Standards</span>
            </div>
            <span className="section-label block mb-4">Guild Protocols</span>
            <h1 className="serif-font text-5xl lg:text-7xl text-white leading-none tracking-wide mb-6">
              Creation <span className="gradient-gold">Standards</span>
            </h1>
            <div className="w-px h-12 bg-gradient-to-b from-yellow-600 to-transparent mb-6" />
            <p className="text-gray-400 font-light leading-relaxed max-w-xl">
              Every construct that leaves this Guild has passed through a process governed by structural, ethical, and ecological standards. We do not approximate. We formalise.
            </p>
          </motion.div>
        </section>

        {/* Three stages strip */}
        <section className="py-12 bg-[#111111] border-b border-yellow-900/20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { step: '01', label: 'Formulation', desc: 'Structural blueprint ratified before a single generative cycle begins.' },
                { step: '02', label: 'Infusion', desc: 'Animation logic applied through iterative, precision-governed refinement.' },
                { step: '03', label: 'Rendering', desc: 'Temporal formalization and Master Avatarist certification before delivery.' },
              ].map((item) => (
                <div key={item.step} className="glass-panel p-6 text-center">
                  <span className="serif-font text-4xl text-yellow-900/40 block mb-3">{item.step}</span>
                  <h3 className="serif-font text-white text-sm tracking-wider mb-2">{item.label}</h3>
                  <p className="text-gray-500 text-xs font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-24 bg-[#0e0e0e]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-panel p-8 mb-16 border-l-2 border-yellow-700"
            >
              <p className="text-gray-300 font-light leading-relaxed text-sm italic serif-font text-base">
                &ldquo;We do not produce outputs. We produce constructs — each one a formal declaration of structural intent.&rdquo;
              </p>
              <p className="text-gray-600 text-xs tracking-widest uppercase mt-4">Guild Creation Covenant</p>
            </motion.div>

            <div className="space-y-0">
              {sections.map((section, i) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.05 * i }}
                  id={section.id}
                  className="py-12 border-b border-yellow-900/10 last:border-b-0"
                >
                  <h2 className="serif-font text-xl text-white mb-4 tracking-wider">{section.title}</h2>
                  <p className="text-gray-400 font-light leading-relaxed text-sm">{section.content}</p>
                </motion.div>
              ))}
            </div>

            {/* Ecological commitment highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 glass-panel p-8 border border-yellow-900/30"
            >
              <div className="flex items-start gap-6">
                <div className="text-yellow-600 text-3xl flex-shrink-0">◈</div>
                <div>
                  <h3 className="serif-font text-white text-lg mb-3 tracking-wider">Ecological Commitment in Every Invoice</h3>
                  <p className="text-gray-400 text-sm font-light leading-relaxed">
                    Every commission invoice includes a transparent breakdown showing exactly how your 15% ecological allocation is applied — to greentech.training scholarships and community-led restoration at our server sites. Creation without accountability is not creation. It is extraction.
                  </p>
                  <Link href="/master" className="inline-block mt-4 text-[11px] tracking-[0.2em] uppercase text-yellow-600 hover:text-yellow-400 transition-colors">
                    Learn about the Ecology Fund →
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 glass-panel p-10 text-center"
            >
              <span className="section-label block mb-4">Ready to Commission?</span>
              <h3 className="serif-font text-2xl text-white mb-4">Begin the Formulation Process</h3>
              <div className="gold-line mx-auto mb-6" />
              <a
                href="mailto:commissions@wiverndigital.com"
                className="inline-block text-[11px] font-medium tracking-[0.2em] uppercase border border-yellow-700 text-yellow-500 px-10 py-3 hover:bg-yellow-900/20 transition-all duration-300"
              >
                Request Avatar
              </a>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
