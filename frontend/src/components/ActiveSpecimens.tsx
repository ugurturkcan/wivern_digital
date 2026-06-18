"use client";

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const specimens = [
  {
    name: 'Entity: Sylph',
    class: 'Aethereal',
    tags: 'ESOTERICA · OCCULT · WICCA',
    src: '/images/specimen_2_1778958085693.png',
  },
  {
    name: 'Entity: Magus',
    class: 'Practitioner',
    tags: 'PHILOSOPHY · ANCIENT HISTORY · ART',
    src: '/images/specimen_1_1778958073711.png',
  },
  {
    name: 'Entity: Duskweaver',
    class: 'Shadow Form',
    tags: 'HACKING · CYBERSECURITY · AI',
    src: '/images/specimen_3_1778958099280.png',
  },
  {
    name: 'Entity: Ignis',
    class: 'Elemental',
    tags: 'ALCHEMY · FIRE · CHAOS',
    src: '/images/specimen_4_1778958114762.png',
  },
];

export default function ActiveSpecimens() {
  const [active, setActive] = useState<number | null>(null);

  const activeSpecimen = active !== null ? specimens[active] : null;

  return (
    <>
      {/* ─── FULLSCREEN SPOTLIGHT OVERLAY ─── */}
      <AnimatePresence>
        {activeSpecimen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ background: 'rgba(0,0,0,0.92)' }}
            onClick={() => setActive(null)}
          >
            {/* Ambient glow behind character */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.55, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                width: '60vw',
                height: '60vw',
                maxWidth: 700,
                maxHeight: 700,
                borderRadius: '50%',
                background:
                  'radial-gradient(circle, rgba(202,138,4,0.25) 0%, rgba(133,77,14,0.12) 50%, transparent 75%)',
                willChange: 'transform, opacity',
              }}
            />

            {/* Character card */}
            <motion.div
              key={active}
              initial={{ scale: 0.75, opacity: 0, y: 60 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 40 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <div className="relative w-72 md:w-96 aspect-[3/4] overflow-hidden shadow-[0_0_80px_rgba(202,138,4,0.2)]"
                style={{ border: '1px solid rgba(202,138,4,0.25)' }}>
                <Image
                  src={activeSpecimen!.src}
                  alt={activeSpecimen!.name}
                  fill
                  sizes="(max-width: 768px) 80vw, 400px"
                  className="object-cover"
                  priority
                />
                {/* Inner border accent */}
                <div className="absolute inset-3 pointer-events-none"
                  style={{ border: '1px solid rgba(202,138,4,0.15)' }} />
              </div>

              {/* Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.4 }}
                className="mt-6 text-center"
              >
                <p className="text-[10px] tracking-[0.3em] uppercase text-yellow-600 mb-2">
                  {activeSpecimen!.class}
                </p>
                <h3 className="serif-font text-2xl text-white tracking-wider mb-2">
                  {activeSpecimen!.name}
                </h3>
                <p className="text-[9px] tracking-[0.25em] text-gray-500 uppercase">
                  {activeSpecimen!.tags}
                </p>
              </motion.div>

              {/* Dismiss */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                onClick={() => setActive(null)}
                className="mt-8 text-[10px] tracking-[0.2em] uppercase border border-yellow-800 text-yellow-600 px-8 py-3 hover:border-yellow-500 hover:text-white transition-all duration-300"
              >
                Dismiss Entity
              </motion.button>
            </motion.div>

            {/* Close X */}
            <button
              onClick={() => setActive(null)}
              className="fixed top-6 right-8 text-gray-600 hover:text-white transition-colors text-2xl font-thin z-20"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── SECTION ─── */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
        className="py-24 relative bg-[#121212] overflow-hidden"
        id="specimens"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10">
          <div className="flex justify-between items-end">
            <div>
              <span className="section-label block mb-4">Observation Chamber</span>
              <h2 className="serif-font text-4xl lg:text-5xl text-white">Active Specimens</h2>
            </div>
          </div>
          <div className="gold-line mt-6" />
        </div>

        {/* Horizontal scroll */}
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] pl-6 lg:pl-[calc((100vw-80rem)/2+2rem)]">
          {specimens.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              whileHover={{ scale: 1.03 }}
              onClick={() => setActive(i)}
              className="group relative w-72 md:w-80 aspect-[4/5] flex-shrink-0 video-card bg-black snap-start snap-always overflow-hidden cursor-pointer"
              style={{ willChange: 'transform' }}
            >
              <Image
                src={s.src}
                alt={s.name}
                fill
                sizes="320px"
                className="object-cover opacity-75 group-hover:opacity-100 filter contrast-125 grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              />

              {/* Hover shimmer */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(202,138,4,0.08) 0%, transparent 60%)',
                }} />

              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/95 to-transparent">
                <h3 className="serif-font text-lg text-white tracking-wider mb-3 group-hover:opacity-0 transition-opacity duration-300">
                  {s.name}
                </h3>
                {/* Hover reveal */}
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <button className="text-[10px] tracking-[0.2em] uppercase border border-yellow-700 text-yellow-500 px-4 py-2 hover:bg-yellow-700 hover:text-black transition-all">
                    Quicken Specimen
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
          {/* Spacer */}
          <div className="w-6 flex-shrink-0" />
        </div>
      </motion.section>
    </>
  );
}
