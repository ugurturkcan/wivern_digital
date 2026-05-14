import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Link from 'next/link';

const pipeline = [
  {
    step: '01',
    title: 'Formulation',
    desc: 'Structural analysis and parameter setting. The client\'s requirements are deconstructed into atomic variables.',
    items: ['Identity deconstruction & archetype mapping', 'Aesthetic parameter calibration', 'Negative space definition', 'Blueprint approval'],
  },
  {
    step: '02',
    title: 'Infusion',
    desc: 'Application of animation logic. Raw generative outputs are refined through iterative cycles.',
    items: ['Latent space navigation', 'ControlNet skeleton alignment', 'Localized inpainting', 'Static asset extraction'],
  },
  {
    step: '03',
    title: 'Rendering',
    desc: 'Temporal formalization. Static constructs become living, animated entities.',
    items: ['Generative video sequencing', 'Audio-to-labial synchronization', 'Temporal coherence', 'Master certification'],
  },
];

const principles = [
  {
    title: 'Ecological Parameters',
    body: 'An Ecology Fund — established from a baseline of 15% of all generation receipts — is reinvested into agricultural development initiatives. All processing power is sourced exclusively from wind or solar energy, ensuring net-zero environmental impact.',
  },
  {
    title: 'Equitable Remuneration',
    body: 'A fixed compensation structure mandates the distribution of project receipts. Master Avatarists receive 33.3%, Journeymen 16.6%, and Apprenticeships are uncompensated. Undistributed capital defaults to the Ecology Fund.',
  },
];

const ranks = [
  {
    rank: 'Rank I', title: 'The Apprentice', allocation: '0%',
    img: 'https://images.unsplash.com/photo-1544507851-bc015112521c?q=80&w=600&auto=format&fit=crop',
    desc: 'Tasked with initial dataset curation, prompt architecture, and latent space exploration. Advancement requires a verified majority vote from existing Journeymen and Masters.',
  },
  {
    rank: 'Rank II', title: 'The Journeyman', allocation: '16.6%',
    img: 'https://images.unsplash.com/photo-1614030612660-f1db1f88eb22?q=80&w=600&auto=format&fit=crop',
    desc: 'Responsible for algorithmic refinement, localized inpainting, and establishing structural coherence utilizing control networks. Operates independently or with a Master.',
  },
  {
    rank: 'Rank III', title: 'The Master', allocation: '33.3%',
    img: 'https://images.unsplash.com/photo-1544883441-118ffeb370ce?q=80&w=600&auto=format&fit=crop',
    desc: 'Executes final temporal formalization. Manages generative video sequencing, audio-to-labial synchronization algorithms, and artifact suppression.',
  },
];

export default function CraftPage() {
  return (
    <>
      <Nav />
      <main className="selection:bg-yellow-900/40 selection:text-white">

        {/* ─── PAGE HEADER ──────────────────────────────────────── */}
        <section className="relative pt-40 pb-24 bg-[#111111] overflow-hidden border-b border-yellow-900/20">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop"
              alt="Alchemical Apparatus"
              className="w-full h-full object-cover opacity-10 filter sepia contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/60 to-[#111111]" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <span className="section-label block mb-4">Operational Methodology</span>
            <h1 className="serif-font text-6xl lg:text-8xl text-white leading-none tracking-wide mb-6">
              The <span className="gradient-gold">Guild</span>
            </h1>
            <div className="w-px h-16 bg-gradient-to-b from-yellow-600 to-transparent mb-6" />
            <p className="text-gray-400 font-light max-w-xl leading-relaxed">
              The proprietary assembly pipeline, ecological parameters, and the structural hierarchy of the avatarist guild.
            </p>
          </div>
        </section>

        {/* ─── PIPELINE ─────────────────────────────────────────── */}
        <section className="py-28 bg-[#0e0e0e]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-16">
              <span className="section-label block mb-4">System Core</span>
              <h2 className="serif-font text-4xl text-white">Proprietary Assembly Pipeline</h2>
              <div className="gold-line mt-6" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pipeline.map((p) => (
                <div key={p.step} className="glass-panel p-8 card-hover">
                  <span className="serif-font text-5xl text-yellow-900/40 block mb-4 leading-none">{p.step}</span>
                  <h3 className="serif-font text-xl text-white mb-3 tracking-wider">{p.title}</h3>
                  <p className="text-gray-500 text-sm font-light leading-relaxed mb-6">{p.desc}</p>
                  <ul className="space-y-2">
                    {p.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-gray-400 font-light">
                        <span className="text-yellow-700 mt-0.5">◈</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Pipeline video */}
            <div className="mt-12 glass-panel p-2 mystic-glow">
              <div className="relative w-full aspect-video bg-black overflow-hidden border border-gray-800">
                <video className="w-full h-full object-cover opacity-50 filter contrast-125 sepia-[.3]" autoPlay loop muted playsInline>
                  <source src="https://assets.mixkit.co/videos/preview/mixkit-animation-of-a-futuristic-device-in-a-dark-room-32360-large.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 border border-yellow-700/20 m-4 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
                  <span className="section-label">System Core</span>
                  <p className="serif-font text-white text-2xl tracking-wider mt-1">The Formulation Engine</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── GUILD PRINCIPLES ─────────────────────────────────── */}
        <section className="py-28 bg-[#111111] border-t border-yellow-900/20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="section-label block mb-4">Operational Standards</span>
              <h2 className="serif-font text-4xl text-white">Guild Principles</h2>
              <div className="gold-line mx-auto mt-6" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {principles.map((p) => (
                <div key={p.title} className="glass-panel p-10 card-hover">
                  <h3 className="serif-font text-xl text-white mb-4 tracking-wider">{p.title}</h3>
                  <p className="text-gray-400 font-light text-sm leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── HIERARCHY ────────────────────────────────────────── */}
        <section className="py-28 bg-[#0e0e0e] border-t border-yellow-900/20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="section-label block mb-4">Rank Structure</span>
              <h2 className="serif-font text-4xl text-white">Guild Hierarchy</h2>
              <div className="gold-line mx-auto mt-6" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ranks.map((r) => (
                <div key={r.rank} className="glass-panel card-hover flex flex-col overflow-hidden">
                  <div className="h-52 relative overflow-hidden">
                    <img src={r.img} alt={r.title} className="w-full h-full object-cover filter contrast-125 sepia-[.2] grayscale-[30%]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent" />
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <span className="section-label mb-2">{r.rank}</span>
                    <h3 className="serif-font text-xl text-white mb-1">{r.title}</h3>
                    <span className="text-[10px] text-yellow-700 tracking-widest uppercase border-b border-gray-800 pb-3 mb-4">{r.allocation} Revenue Allocation</span>
                    <p className="text-gray-500 text-xs font-light leading-relaxed flex-1">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── JOIN CTA ─────────────────────────────────────────── */}
        <section className="py-28 bg-[#111111] border-t border-yellow-900/20 text-center">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <span className="section-label block mb-6">Enlistment</span>
            <h2 className="serif-font text-4xl lg:text-5xl text-white mb-6">Join the Guild</h2>
            <div className="gold-line mx-auto mb-8" />
            <p className="text-gray-400 font-light leading-relaxed mb-10">
              Acceptance requires the successful conclusion of a rigorous three-month AI internship under direct tutelage. Current acceptance rate: 4.3%.
            </p>
            <Link href="mailto:applications@wiverndigital.com" className="inline-block text-[11px] font-medium tracking-[0.2em] uppercase border border-yellow-700 text-yellow-500 px-12 py-4 hover:bg-yellow-900/20 transition-all duration-300">
              Submit Credentials
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
