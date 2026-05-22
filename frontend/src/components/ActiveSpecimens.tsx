"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

const specimens = [
  { name: 'Entity: Sylph', class: 'Aethereal', src: '/images/specimen_2_1778958085693.png' },
  { name: 'Entity: Magus', class: 'Practitioner', src: '/images/specimen_1_1778958073711.png' },
  { name: 'Entity: Duskweaver', class: 'Shadow Form', src: '/images/specimen_3_1778958099280.png' },
  { name: 'Entity: Ignis', class: 'Elemental', src: '/images/specimen_4_1778958114762.png' },
];

export default function ActiveSpecimens() {
  return (
    <motion.section 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
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
            <div
              key={i}
              className="group relative w-72 md:w-80 aspect-[4/5] flex-shrink-0 video-card bg-black rounded-sm overflow-hidden"
            >
              <Image src={s.src} alt={s.name} fill priority={i < 2} sizes="320px" className="object-cover opacity-75 group-hover:opacity-100 filter contrast-125 grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" />
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/95 to-transparent">
                <h3 className="serif-font text-lg text-white tracking-wider mb-3 group-hover:opacity-0 transition-opacity duration-300">{s.name}</h3>
                {/* Hover reveal */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  <button className="text-[10px] tracking-[0.2em] uppercase border border-yellow-700 text-yellow-500 px-4 py-2 hover:bg-yellow-700 hover:text-black transition-all">
                    Quicken Specimen
                  </button>
                </div>
              </div>
            </div>
          ))}
          {/* Spacer */}
          <div className="w-6 flex-shrink-0" />
      </div>
    </motion.section>
  );
}
