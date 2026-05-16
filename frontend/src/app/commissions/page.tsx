'use client';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';

const tiers = [
  {
    label: 'Base Formulation',
    title: 'Single Specimen',
    price: '€199',
    unit: 'per output',
    featured: false,
    features: [
      'One isolated 30-second sequence',
      'Standard ambient motion',
      'Unspoken format (visual only)',
    ],
    cta: 'Initiate',
    mailto: 'Single Specimen Requisition',
  },
  {
    label: 'Sustained Output',
    title: 'Quarterly Batch',
    price: '€299',
    unit: 'total',
    featured: true,
    badge: 'Standard',
    features: [
      'Ten distinct 30-second sequences',
      'Distributed over a 90-day period',
      'Unspoken format (visual only)',
      'Cohesive character modeling across batch',
    ],
    cta: 'Initiate Batch',
    mailto: 'Quarterly Batch Requisition',
  },
  {
    label: 'Monthly Subscription',
    title: 'Guild Retainer',
    price: '€499',
    unit: 'per month',
    featured: false,
    features: [
      'Fifteen 30-second sequences per cycle',
      'Priority generation queue',
      'Direct access to structural architects',
      'Unspoken format (visual only)',
    ],
    cta: 'Establish Retainer',
    mailto: 'Guild Retainer Requisition',
  },
];

const addons = [
  {
    title: 'Spoken Integration',
    desc: 'Generation of synthesized audio track matching provided transcripts. No visual synchronization included.',
    price: '+ €49',
  },
  {
    title: 'Full Lip Synchronization',
    desc: 'Precise alignment of labial movement to synthesized or client-provided auditory tracks.',
    price: '+ €99',
    featured: true,
  },
  {
    title: 'Complex Gestural Mapping',
    desc: 'Implementation of specific, non-ambient somatic movements or interactions with digital objects.',
    price: '+ €79',
  },
];

export default function CommissionsPage() {
  return (
    <>
      <Nav />
      <main className="selection:bg-yellow-900/40 selection:text-white">

        {/* ─── PAGE HEADER ──────────────────────────────────────── */}
        <section className="relative pt-40 pb-24 bg-[#111111] border-b border-yellow-900/20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/80 to-[#111111]" />
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8"
          >
            <span className="section-label block mb-4">Official Register</span>
            <h1 className="serif-font text-6xl lg:text-8xl text-white leading-none tracking-wide mb-6">
              Requisition<br /><span className="gradient-gold">Tariffs</span>
            </h1>
            <div className="w-px h-16 bg-gradient-to-b from-yellow-600 to-transparent mb-6" />
            <p className="text-gray-400 font-light max-w-xl leading-relaxed">
              Standardized fees for the generation of 30-second digital avatar constructs. All submissions are subject to guild review prior to the commencement of formulation.
            </p>
          </motion.div>
        </section>

        {/* ─── PRICING GRID ─────────────────────────────────────── */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="py-32 bg-[#0e0e0e]"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              {tiers.map((tier, i) => (
                <motion.div
                  key={tier.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 * i }}
                  className={`glass-panel p-10 flex flex-col ${
                    tier.featured
                      ? 'border border-yellow-600/40 mystic-glow md:-mt-4 md:pb-14'
                      : 'card-hover border-t-4 border-t-transparent hover:border-t-yellow-700'
                  }`}
                >
                  {tier.featured && (
                    <div className="flex justify-between items-center mb-2">
                      <span className="section-label">{tier.label}</span>
                      <span className="text-[10px] tracking-widest uppercase bg-yellow-900/30 text-yellow-500 border border-yellow-700/40 px-2 py-0.5">
                        {tier.badge}
                      </span>
                    </div>
                  )}
                  {!tier.featured && <span className="section-label mb-2">{tier.label}</span>}
                  <h3 className="serif-font text-2xl text-white tracking-wider mb-6">{tier.title}</h3>
                  <div className="mb-8">
                    <span className="text-5xl font-light text-white">{tier.price}</span>
                    <span className="text-gray-500 text-sm ml-1">/ {tier.unit}</span>
                  </div>
                  <ul className="space-y-3 mb-10 flex-1">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-gray-300 font-light">
                        <span className="text-yellow-600 mt-0.5 flex-shrink-0">◈</span>{f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`mailto:commissions@wiverndigital.com?subject=${encodeURIComponent(tier.mailto)}`}
                    className={`block text-center text-[11px] font-medium tracking-[0.2em] uppercase py-3.5 transition-all duration-300 ${
                      tier.featured
                        ? 'bg-yellow-700 text-black hover:bg-yellow-500'
                        : 'border border-yellow-700 text-yellow-500 hover:bg-yellow-900/20'
                    }`}
                  >
                    {tier.cta}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ─── AUGMENTATIONS ────────────────────────────────────── */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="py-32 bg-[#111111] border-t border-yellow-900/20"
        >
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="section-label block mb-4">Optional Enhancements</span>
              <h2 className="serif-font text-3xl lg:text-4xl text-white mb-4">Required Augmentations</h2>
              <div className="gold-line mx-auto mt-6 mb-4" />
              <p className="text-gray-500 text-sm font-light">Fees calculated per 30-second output.</p>
            </div>
            <div className="space-y-4">
              {addons.map((a, i) => (
                <motion.div
                  key={a.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className={`glass-panel p-6 flex flex-col md:flex-row justify-between items-center gap-6 card-hover ${
                    a.featured ? 'border border-yellow-900/40 mystic-glow' : ''
                  }`}
                >
                  <div className="flex-1">
                    <h4 className="serif-font text-lg text-white tracking-wider mb-1.5">{a.title}</h4>
                    <p className="text-gray-400 font-light text-sm leading-relaxed">{a.desc}</p>
                  </div>
                  <div className="text-right whitespace-nowrap border-l border-gray-800 pl-8 w-full md:w-auto">
                    <span className="text-2xl font-light text-yellow-500">{a.price}</span>
                    <span className="block text-[10px] text-gray-500 tracking-widest uppercase mt-1">Per Output</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ─── PROCESS NOTE ─────────────────────────────────────── */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="py-32 bg-[#0e0e0e] border-t border-yellow-900/20"
        >
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <blockquote className="serif-font text-2xl lg:text-3xl text-white italic leading-snug mb-8">
              &ldquo;Commission slots are regulated based on current guild capacity. Formal requirements are necessary for preliminary formulation.&rdquo;
            </blockquote>
            <div className="gold-line mx-auto mb-8" />
            <Link
              href="mailto:commissions@wiverndigital.com"
              className="inline-block text-[11px] font-medium tracking-[0.2em] uppercase bg-yellow-700 text-black px-12 py-4 hover:bg-yellow-500 transition-all duration-300"
            >
              Submit Requisition
            </Link>
          </div>
        </motion.section>

      </main>
      <Footer />
    </>
  );
}
