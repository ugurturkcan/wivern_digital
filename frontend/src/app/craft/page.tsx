import React from 'react';

export default function CraftPage() {
  return (
    <main className="antialiased selection:bg-yellow-900 selection:text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 glass-panel border-b-0 border-opacity-30 border-yellow-700 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="flex-shrink-0 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-yellow-700 flex items-center justify-center bg-black">
                <span className="serif-font text-yellow-600 text-xl">W</span>
              </div>
              <div className="flex flex-col">
                <span className="serif-font text-2xl tracking-widest text-white uppercase">Wivern Digital</span>
                <span className="text-xs tracking-[0.2em] gold-accent uppercase">Guild of Avatarists</span>
              </div>
            </div>
            <div className="hidden md:flex space-x-12">
              <a href="/#entrance" className="text-gray-300 hover:text-yellow-600 text-xs font-medium tracking-[0.15em] uppercase transition-colors">The Shop</a>
              <a href="#guild" className="text-yellow-600 text-xs font-medium tracking-[0.15em] uppercase transition-colors">The Guild</a>
              <a href="/specimens" className="text-gray-300 hover:text-yellow-600 text-xs font-medium tracking-[0.15em] uppercase transition-colors">Specimens</a>
              <a href="/commissions" className="text-gray-300 hover:text-yellow-600 text-xs font-medium tracking-[0.15em] uppercase transition-colors">Commission</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <section id="guild" className="relative pt-48 pb-20 flex items-center justify-center border-b border-yellow-900/30">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop"
            alt="Alchemical Apparatus"
            className="w-full h-full object-cover opacity-20 filter contrast-125 sepia"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 via-[#1a1a1a]/95 to-[#1a1a1a] opacity-100 z-0"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h2 className="text-sm md:text-base font-light tracking-[0.3em] gold-accent uppercase mb-4">Operational Methodology</h2>
          <h1 className="serif-font text-4xl md:text-6xl text-white mb-6 tracking-wide drop-shadow-lg">
            The Guild
          </h1>
          <div className="w-px h-16 bg-gradient-to-b from-yellow-600 to-transparent mx-auto mb-6"></div>
          <p className="text-gray-400 text-base font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
            Detailing the proprietary assembly pipeline, ecological parameters, and the structural hierarchy of the avatarist guild.
          </p>
        </div>
      </section>

      {/* The Pipeline Section */}
      <section id="pipeline" className="py-24 relative bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="serif-font text-3xl md:text-4xl text-white mb-6">Proprietary Assembly Pipeline</h2>
              <p className="text-gray-400 mb-6 font-light leading-relaxed">
                The internal computational pipeline facilitates the rapid assembly of digital avatars, bypassing standard rendering techniques for swift formulation. This workflow integrates established narrative principles directly into the generation process.
              </p>
              <p className="text-gray-400 mb-8 font-light leading-relaxed">
                The architecture is calibrated to accommodate precise formats and high-frequency demands of social media profiles. Content generation relies on structured storytelling frameworks, including Setup, Bridge, and Punchline sequences, optimized for 10 to 15-second outputs. Specific engagement hooks prevalent on platforms such as Instagram are systematically applied to align with algorithmic specifications.
              </p>
              <ul className="space-y-4 text-sm text-gray-300 font-light border-t border-gray-800 pt-8">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 mt-0.5">◈</span>
                  Integration of structural hooks (Setup, Bridge, Punchline) tailored for short-form media.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 mt-0.5">◈</span>
                  Automated alignment of auditory tracks with labial movement algorithms.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 mt-0.5">◈</span>
                  Application of current platform-specific engagement mechanisms.
                </li>
              </ul>
            </div>

            <div className="glass-panel p-2 rounded-sm mystic-glow h-full">
              <div className="relative w-full h-[400px] bg-black overflow-hidden border border-gray-800">
                <video className="w-full h-full object-cover opacity-60 filter contrast-125 sepia-[.3]" autoPlay loop muted playsInline>
                  <source src="https://assets.mixkit.co/videos/preview/mixkit-animation-of-a-futuristic-device-in-a-dark-room-32360-large.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 border border-yellow-700/30 m-4 pointer-events-none z-10"></div>
                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
                  <span className="text-yellow-600 text-xs tracking-widest uppercase block mb-1">System Core</span>
                  <span className="serif-font text-white tracking-widest uppercase text-xl block">The Formulation Engine</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ethical and Ecological Principles */}
      <section className="py-24 bg-[#0a0a0a] border-t border-y border-yellow-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-xs font-medium tracking-[0.2em] gold-accent uppercase block mb-4">Operational Standards</span>
            <h2 className="serif-font text-3xl md:text-4xl text-white mb-6">Guild Principles</h2>
            <div className="w-16 h-px bg-yellow-700 mx-auto mt-4 mb-6"></div>
            <p className="text-gray-400 font-light text-sm leading-relaxed">
              Operations within the manor are strictly regulated by internal protocols designed to ensure both environmental sustainability and equitable labor practices across all disciplines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Ecological Standards */}
            <div className="glass-panel p-10 rounded-sm">
              <h3 className="serif-font text-xl text-white tracking-wider mb-4">Ecological Parameters</h3>
              <p className="text-gray-400 font-light text-sm leading-relaxed mb-6">
                An Ecology Fund, established from a baseline of 15% of all generation receipts, is reinvested into agricultural development initiatives for farmers. Furthermore, these funds procure the infrastructure required to ensure all processing power utilized in avatar production is sourced exclusively from wind or solar energy. This protocol ensures a net-zero environmental impact, preventing any net loss in ecological resources during production.
              </p>
            </div>

            {/* Compensation Standards */}
            <div className="glass-panel p-10 rounded-sm">
              <h3 className="serif-font text-xl text-white tracking-wider mb-4">Equitable Remuneration</h3>
              <p className="text-gray-400 font-light text-sm leading-relaxed mb-6">
                A fixed compensation structure mandates the distribution of project receipts. Standard avatar production is executed by a single Master Avatarist, who ensures comprehensive process completion and receives a 33.3% allocation. Apprenticeship positions are uncompensated (0%), while Journeymen receive a 16.6% allocation. In instances where a Journeyman and a Master collaborate on a single requisition, the standard 19% Operations Reserve (otherwise utilized for software licenses and cloud hosting) is proportionally decreased to cover the Journeyman's wage. Undistributed capital defaults to the Ecology Fund.
              </p>
            </div>
          </div>

          {/* Hierarchy Breakdown */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Rank I */}
            <div className="border border-gray-800 bg-[#121212] flex flex-col">
              <div className="h-48 w-full overflow-hidden border-b border-gray-800 relative">
                <img src="https://images.unsplash.com/photo-1544507851-bc015112521c?q=80&w=600&auto=format&fit=crop" alt="Apprentice Avatar" className="w-full h-full object-cover filter contrast-125 sepia-[.2] grayscale-[30%]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent"></div>
              </div>
              <div className="p-8 flex-grow">
                <span className="text-yellow-600 text-xs tracking-widest uppercase block mb-2">Rank I</span>
                <h4 className="serif-font text-lg text-white mb-1">The Apprentice</h4>
                <span className="text-gray-500 font-light text-[10px] tracking-widest uppercase block mb-4 border-b border-gray-800 pb-2">0% Revenue Allocation</span>
                <p className="text-gray-500 font-light text-xs leading-relaxed">
                  Tasked with initial dataset curation, prompt architecture, and latent space exploration. Advancement to the rank of Journeyman requires a verified majority vote from existing Journeymen and Masters; candidates failing to secure this majority are not accepted into the second tier.
                </p>
              </div>
            </div>

            {/* Rank II */}
            <div className="border border-gray-800 bg-[#121212] flex flex-col">
              <div className="h-48 w-full overflow-hidden border-b border-gray-800 relative">
                <img src="https://images.unsplash.com/photo-1614030612660-f1db1f88eb22?q=80&w=600&auto=format&fit=crop" alt="Journeyman Avatar" className="w-full h-full object-cover filter contrast-125 sepia-[.2] grayscale-[30%]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent"></div>
              </div>
              <div className="p-8 flex-grow">
                <span className="text-yellow-600 text-xs tracking-widest uppercase block mb-2">Rank II</span>
                <h4 className="serif-font text-lg text-white mb-1">The Journeyman</h4>
                <span className="text-gray-500 font-light text-[10px] tracking-widest uppercase block mb-4 border-b border-gray-800 pb-2">16.6% Revenue Allocation</span>
                <p className="text-gray-500 font-light text-xs leading-relaxed">
                  Responsible for algorithmic refinement, localized inpainting, and establishing structural coherence utilizing control networks. Advances raw outputs into high-fidelity static assets. Operates either independently or in direct collaboration with a Master.
                </p>
              </div>
            </div>

            {/* Rank III */}
            <div className="border border-gray-800 bg-[#121212] flex flex-col">
              <div className="h-48 w-full overflow-hidden border-b border-gray-800 relative">
                <img src="https://images.unsplash.com/photo-1544883441-118ffeb370ce?q=80&w=600&auto=format&fit=crop" alt="Master Avatar" className="w-full h-full object-cover filter contrast-125 sepia-[.2] grayscale-[30%] object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent"></div>
              </div>
              <div className="p-8 flex-grow">
                <span className="text-yellow-600 text-xs tracking-widest uppercase block mb-2">Rank III</span>
                <h4 className="serif-font text-lg text-white mb-1">The Master</h4>
                <span className="text-gray-500 font-light text-[10px] tracking-widest uppercase block mb-4 border-b border-gray-800 pb-2">33.3% Revenue Allocation</span>
                <p className="text-gray-500 font-light text-xs leading-relaxed">
                  Executes final temporal formalization. Manages generative video sequencing, audio-to-labial synchronization algorithms, and artifact suppression. Typically functions as the sole practitioner on standard productions to ensure complete structural execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section id="join" className="py-24 bg-[#121212] border-t border-yellow-900/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="serif-font text-3xl md:text-4xl text-white mb-6">Join the Guild</h2>
          <div className="w-16 h-px bg-yellow-700 mx-auto mb-6"></div>
          <p className="text-gray-400 font-light leading-relaxed mb-8">
            Acceptance into the guild requires the successful conclusion of a rigorous three-month AI internship under direct tutelage. The current acceptance rate for candidates stands at 4.3%.
          </p>
          <a href="mailto:applications@wiverndigital.com" className="inline-block border border-yellow-700 text-yellow-500 px-10 py-4 text-xs font-medium tracking-[0.2em] uppercase hover:bg-yellow-900/20 transition-all duration-300">
            Submit Credentials
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] border-t border-gray-800 pt-16 pb-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full border border-yellow-700 flex items-center justify-center bg-black">
                <span className="serif-font text-yellow-600 text-sm">W</span>
              </div>
              <span className="serif-font text-lg tracking-widest text-white uppercase">Wivern Digital</span>
            </div>
            <p className="text-gray-500 text-xs tracking-wider uppercase font-light mb-4">Guild of Avatarists &bull; Est. 2011</p>
            <div className="flex flex-wrap gap-4">
              <a href="/master" className="inline-block text-gray-500 hover:text-yellow-600 text-xs tracking-wider uppercase transition-colors">Master-in-Chief</a>
              <a href="#" className="inline-block text-gray-500 hover:text-yellow-600 text-xs tracking-wider uppercase transition-colors">Imprint</a>
              <a href="#" className="inline-block text-gray-500 hover:text-yellow-600 text-xs tracking-wider uppercase transition-colors">Privacy</a>
            </div>
          </div>

          <div className="md:text-center">
            <h4 className="text-xs font-medium uppercase tracking-[0.2em] mb-6 text-gray-400">Guild Coordinates</h4>
            <ul className="space-y-2 text-sm text-gray-600 font-light">
              <li>Sector 4R, Ward 2330</li>
              <li>The Manor Estate</li>
              <li>Access by documented appointment</li>
            </ul>
          </div>

          <div className="md:text-right">
            <h4 className="text-xs font-medium uppercase tracking-[0.2em] mb-6 text-gray-400">Protocols</h4>
            <ul className="space-y-2 text-sm font-light">
              <li><a href="#" className="text-gray-600 hover:text-yellow-600 transition-colors">Client Confidentiality</a></li>
              <li><a href="#" className="text-gray-600 hover:text-yellow-600 transition-colors">Creation Standards</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}
