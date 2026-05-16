'use client';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';

const competencies = [
  { title: 'Innovation Management', desc: 'Structural oversight of the proprietary pipeline and guild protocols.' },
  { title: 'Narrative Structuring', desc: 'Application of award-winning storytelling methodologies to avatar formulation.' },
  { title: 'Newsroom Journalism', desc: 'The structural foundation from which all guild operational discipline originates.' },
  { title: 'Digital Media Generation', desc: 'Translation of narrative frameworks into high-fidelity generative outputs.' },
];

export default function MasterPage() {
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
            <span className="section-label block mb-4">Guild Leadership</span>
            <h1 className="serif-font text-6xl lg:text-8xl text-white leading-none tracking-wide mb-6">
              Master-<br /><span className="gradient-gold">in-Chief</span>
            </h1>
            <div className="w-px h-16 bg-gradient-to-b from-yellow-600 to-transparent" />
          </motion.div>
        </section>

        {/* ─── BIO SECTION ──────────────────────────────────────── */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="py-32 bg-[#0e0e0e]"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

              {/* Portrait Placeholder */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="glass-panel p-2 mystic-glow lg:sticky lg:top-28"
              >
                <div className="relative aspect-[4/5] bg-black/40 overflow-hidden border border-gray-800/50">
                  <img src="/images/jerome_photo.png" alt="Jerome Goerke - Master in Chief" className="w-full h-full object-cover filter contrast-125 sepia-[.4] grayscale-[20%]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] to-transparent" />
                  <div className="absolute inset-0 border border-yellow-700/10 m-4 pointer-events-none" />
                </div>
              </motion.div>

              {/* Bio Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <span className="section-label block mb-6">Professional History</span>
                <h2 className="serif-font text-4xl text-white mb-8">A Record of Structural Excellence</h2>
                <div className="gold-line mb-8" />
                <div className="space-y-6 text-gray-400 font-light leading-relaxed text-sm">
                  <p>
                    Jerome Goerke serves as the Master-in-Chief and founder of Wivern Digital. His professional background originates in newsroom journalism — a discipline that provided the structural foundation for his subsequent transition into organizational leadership and digital media generation.
                  </p>
                  <p>
                    His primary expertise lies in innovation management and narrative structuring. These core competencies are currently applied to the development of the guild&rsquo;s proprietary assembly pipelines and the temporal formalization of digital avatars.
                  </p>
                  <p>
                    Prior to establishing Wivern Digital, Goerke was recognized with multiple industry awards for his work in storytelling. This documented history of narrative execution informs the operational methodology of the guild, ensuring that all generated constructs adhere to established standards of visual communication and character coherence.
                  </p>
                </div>

                {/* Competencies */}
                <div className="mt-12 pt-8 border-t border-gray-800">
                  <span className="section-label block mb-8">Core Competencies</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {competencies.map((c, i) => (
                      <motion.div 
                        key={c.title} 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 + (0.1 * i) }}
                        className="glass-panel p-6 card-hover"
                      >
                        <h4 className="serif-font text-base text-white mb-2 tracking-wider">{c.title}</h4>
                        <p className="text-gray-500 text-xs font-light leading-relaxed">{c.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Contact */}
                <div className="mt-12 pt-8 border-t border-gray-800">
                  <span className="section-label block mb-6">Direct Correspondence</span>
                  <Link
                    href="mailto:commissions@wiverndigital.com"
                    className="inline-block text-[11px] font-medium tracking-[0.2em] uppercase border border-yellow-700 text-yellow-500 px-10 py-3.5 hover:bg-yellow-900/20 transition-all duration-300"
                  >
                    Initiate Commission
                  </Link>
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
            <blockquote className="serif-font text-3xl lg:text-4xl text-white italic leading-snug mb-8">
              &ldquo;We do not approximate the human form — we formalize it. Every construct is a declaration of structural intent.&rdquo;
            </blockquote>
            <div className="gold-line mx-auto mb-6" />
            <p className="text-gray-500 text-sm tracking-widest uppercase">Jerome Goerke &mdash; Master-in-Chief</p>
          </div>
        </motion.section>

      </main>
      <Footer />
    </>
  );
}
