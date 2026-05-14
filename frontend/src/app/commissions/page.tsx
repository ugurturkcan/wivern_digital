import React from 'react';

export default function CommissionsPage() {
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
              <a href="/craft" className="text-gray-300 hover:text-yellow-600 text-xs font-medium tracking-[0.15em] uppercase transition-colors">The Craft</a>
              <a href="/specimens" className="text-gray-300 hover:text-yellow-600 text-xs font-medium tracking-[0.15em] uppercase transition-colors">Specimens</a>
              <a href="#tariffs" className="text-yellow-600 text-xs font-medium tracking-[0.15em] uppercase transition-colors">Commission</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <section className="relative pt-48 pb-20 flex items-center justify-center border-b border-yellow-900/30">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] via-[#1a1a1a]/90 to-[#1a1a1a] opacity-100 z-0"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h2 className="text-sm md:text-base font-light tracking-[0.3em] gold-accent uppercase mb-4">Official Register</h2>
          <h1 className="serif-font text-4xl md:text-6xl text-white mb-6 tracking-wide drop-shadow-lg">
            Requisition Tariffs
          </h1>
          <div className="w-px h-16 bg-gradient-to-b from-yellow-600 to-transparent mx-auto mb-6"></div>
          <p className="text-gray-400 text-base font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
            Standardized fees for the generation of 30-second digital avatar constructs. All submissions are subject to guild review prior to the commencement of formulation.
          </p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section id="tariffs" className="py-24 relative bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tier 1: Single Clip */}
            <div className="glass-panel p-10 rounded-sm flex flex-col justify-between border-t-4 border-t-gray-700 hover:border-t-yellow-600 transition-all duration-300">
              <div>
                <h3 className="serif-font text-2xl text-white tracking-wider mb-2">Single Specimen</h3>
                <p className="text-xs font-light text-gray-400 tracking-widest uppercase mb-8">Base Formulation</p>
                <div className="mb-8">
                  <span className="text-4xl font-light text-white">€199</span>
                  <span className="text-sm text-gray-500">/ output</span>
                </div>
                <ul className="space-y-4 text-sm text-gray-300 font-light mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-600 mt-0.5">◈</span>
                    One isolated 30-second sequence
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-600 mt-0.5">◈</span>
                    Standard ambient motion
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-600 mt-0.5">◈</span>
                    Unspoken format (visual only)
                  </li>
                </ul>
              </div>
              <a href="mailto:commissions@wiverndigital.com?subject=Single Specimen Requisition" className="block text-center border border-yellow-700 text-yellow-500 px-6 py-3 text-xs font-medium tracking-[0.2em] uppercase hover:bg-yellow-900/20 transition-all duration-300">
                Initiate
              </a>
            </div>

            {/* Tier 2: Batch */}
            <div className="glass-panel p-10 rounded-sm flex flex-col justify-between border-t-4 border-t-yellow-600 mystic-glow transform md:-translate-y-4">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="serif-font text-2xl text-white tracking-wider">Quarterly Batch</h3>
                  <span className="bg-yellow-900/30 text-yellow-500 text-[10px] px-2 py-1 tracking-widest uppercase border border-yellow-700/50">Standard</span>
                </div>
                <p className="text-xs font-light text-gray-400 tracking-widest uppercase mb-8">Sustained Output</p>
                <div className="mb-8">
                  <span className="text-4xl font-light text-white">€299</span>
                  <span className="text-sm text-gray-500">/ total</span>
                </div>
                <ul className="space-y-4 text-sm text-gray-300 font-light mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-600 mt-0.5">◈</span>
                    Ten distinct 30-second sequences
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-600 mt-0.5">◈</span>
                    Distributed over a 90-day period
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-600 mt-0.5">◈</span>
                    Unspoken format (visual only)
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-600 mt-0.5">◈</span>
                    Cohesive character modeling across batch
                  </li>
                </ul>
              </div>
              <a href="mailto:commissions@wiverndigital.com?subject=Quarterly Batch Requisition" className="block text-center bg-yellow-700/10 border border-yellow-600 text-yellow-500 px-6 py-3 text-xs font-medium tracking-[0.2em] uppercase hover:bg-yellow-700 hover:text-white transition-all duration-300">
                Initiate Batch
              </a>
            </div>

            {/* Tier 3: Subscription */}
            <div className="glass-panel p-10 rounded-sm flex flex-col justify-between border-t-4 border-t-gray-700 hover:border-t-yellow-600 transition-all duration-300">
              <div>
                <h3 className="serif-font text-2xl text-white tracking-wider mb-2">Guild Retainer</h3>
                <p className="text-xs font-light text-gray-400 tracking-widest uppercase mb-8">Monthly Subscription</p>
                <div className="mb-8">
                  <span className="text-4xl font-light text-white">€499</span>
                  <span className="text-sm text-gray-500">/ month</span>
                </div>
                <ul className="space-y-4 text-sm text-gray-300 font-light mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-600 mt-0.5">◈</span>
                    Fifteen 30-second sequences per cycle
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-600 mt-0.5">◈</span>
                    Priority generation queue
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-600 mt-0.5">◈</span>
                    Direct access to structural architects
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-600 mt-0.5">◈</span>
                    Unspoken format (visual only)
                  </li>
                </ul>
              </div>
              <a href="mailto:commissions@wiverndigital.com?subject=Guild Retainer Requisition" className="block text-center border border-yellow-700 text-yellow-500 px-6 py-3 text-xs font-medium tracking-[0.2em] uppercase hover:bg-yellow-900/20 transition-all duration-300">
                Establish Retainer
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Augmentations (Add-ons) */}
      <section className="py-24 bg-[#0a0a0a] border-t border-yellow-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="serif-font text-3xl text-white mb-4">Required Augmentations</h2>
            <p className="text-gray-400 font-light text-sm">
              Structural and auditory adjustments applicable to base formulations. Fees are calculated per 30-second output.
            </p>
          </div>

          <div className="space-y-4">
            {/* Add-on Item */}
            <div className="glass-panel p-6 rounded-sm flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <h4 className="serif-font text-lg text-white tracking-wider mb-1">Spoken Integration</h4>
                <p className="text-gray-400 font-light text-sm">Generation of synthesized audio track matching provided transcripts. No visual synchronization included.</p>
              </div>
              <div className="text-right whitespace-nowrap border-l border-gray-700 pl-6 w-full md:w-auto">
                <span className="text-xl font-light text-yellow-600">+ €49</span>
                <span className="block text-[10px] text-gray-500 tracking-widest uppercase">Per Output</span>
              </div>
            </div>

            {/* Add-on Item */}
            <div className="glass-panel p-6 rounded-sm flex flex-col md:flex-row justify-between items-center gap-6 border border-yellow-900/40">
              <div>
                <h4 className="serif-font text-lg text-white tracking-wider mb-1">Full Lip Synchronization</h4>
                <p className="text-gray-400 font-light text-sm">Precise alignment of labial movement to synthesized or client-provided auditory tracks.</p>
              </div>
              <div className="text-right whitespace-nowrap border-l border-gray-700 pl-6 w-full md:w-auto">
                <span className="text-xl font-light text-yellow-600">+ €99</span>
                <span className="block text-[10px] text-gray-500 tracking-widest uppercase">Per Output</span>
              </div>
            </div>

            {/* Add-on Item */}
            <div className="glass-panel p-6 rounded-sm flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <h4 className="serif-font text-lg text-white tracking-wider mb-1">Complex Gestural Mapping</h4>
                <p className="text-gray-400 font-light text-sm">Implementation of specific, non-ambient somatic movements or interactions with digital objects.</p>
              </div>
              <div className="text-right whitespace-nowrap border-l border-gray-700 pl-6 w-full md:w-auto">
                <span className="text-xl font-light text-yellow-600">+ €79</span>
                <span className="block text-[10px] text-gray-500 tracking-widest uppercase">Per Output</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#121212] border-t border-gray-800 pt-16 pb-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full border border-yellow-700 flex items-center justify-center bg-black">
                <span className="serif-font text-yellow-600 text-sm">W</span>
              </div>
              <span className="serif-font text-lg tracking-widest text-white uppercase">Wivern Digital</span>
            </div>
            <p className="text-gray-500 text-xs tracking-wider uppercase font-light">Guild of Avatarists &bull; Est. 2026</p>
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
