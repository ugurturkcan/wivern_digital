import React from 'react';

export default function HomePage() {
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
              <a href="#entrance" className="text-gray-300 hover:text-yellow-600 text-xs font-medium tracking-[0.15em] uppercase transition-colors">The Shop</a>
              <a href="#craft" className="text-gray-300 hover:text-yellow-600 text-xs font-medium tracking-[0.15em] uppercase transition-colors">The Craft</a>
              <a href="#archives" className="text-gray-300 hover:text-yellow-600 text-xs font-medium tracking-[0.15em] uppercase transition-colors">Specimens</a>
              <a href="#commission" className="text-gray-300 hover:text-yellow-600 text-xs font-medium tracking-[0.15em] uppercase transition-colors">Commission</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section: Entering the Shop */}
      <section id="entrance" className="relative h-screen min-h-[800px] flex items-center justify-center">
        {/* Background Image: Medieval Shop Exterior Placeholder */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1583417657207-6a17b9c968f9?q=80&w=2070&auto=format&fit=crop"
            alt="Medieval Shop Exterior"
            className="w-full h-full object-cover opacity-40 filter contrast-125 saturate-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-[#1a1a1a] opacity-90"></div>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <h2 className="text-sm md:text-base font-light tracking-[0.3em] gold-accent uppercase mb-6">Enter the Workshop</h2>
          <h1 className="serif-font text-5xl md:text-7xl lg:text-8xl text-white mb-8 tracking-wide drop-shadow-lg">
            Digital Alchemy
          </h1>
          <div className="w-px h-24 bg-gradient-to-b from-yellow-600 to-transparent mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
            Precision engineering of bespoke AI avatars. Ancient aesthetic principles realized through modern computational methodology.
          </p>
          <div className="mt-12">
            <a href="#archives" className="inline-block border border-yellow-700 text-yellow-500 px-10 py-4 text-xs font-medium tracking-[0.2em] uppercase hover:bg-yellow-900/20 transition-all duration-300">
              View the Archives
            </a>
          </div>
        </div>
      </section>

      {/* The Craft (About the Guild) */}
      <section id="craft" className="py-32 bg-[#f4f1ea] text-[#1a1a1a] relative border-y-8 border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="serif-font text-4xl md:text-5xl mb-8 text-gray-900">The Guild of Avatarists</h2>
              <p className="text-gray-700 mb-6 leading-relaxed font-light text-lg">
                Wivern Digital operates as a specialized guild dedicated exclusively to the craft of avatar creation. The primary function is the generation of detailed, animated digital constructs.
              </p>
              <p className="text-gray-700 leading-relaxed font-light text-lg mb-8">
                The process aligns with historical alchemical concepts—taking base data and conceptual requirements to synthesize a functional digital entity. Operations are structured to ensure accuracy and structural fidelity.
              </p>
              <div className="grid grid-cols-2 gap-8 border-t border-gray-300 pt-8 mt-8">
                <div>
                  <span className="block serif-font text-2xl text-gray-900 mb-2">Formulation</span>
                  <span className="block text-sm text-gray-600 font-light">Structural analysis and parameter setting.</span>
                </div>
                <div>
                  <span className="block serif-font text-2xl text-gray-900 mb-2">Infusion</span>
                  <span className="block text-sm text-gray-600 font-light">Application of animation logic.</span>
                </div>
              </div>
            </div>
            {/* Workshop Imagery */}
            <div className="relative h-[600px] w-full rounded-sm overflow-hidden bg-gray-200 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1517420879524-86d64ac2f339?q=80&w=1000&auto=format&fit=crop"
                alt="Workbench detailing"
                className="absolute inset-0 w-full h-full object-cover filter sepia-[.3] contrast-125"
              />
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-sm">
                <p className="serif-font text-white text-xl tracking-wider">Meticulous observation leads to precise replication.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Archives (Video Gallery) */}
      <section id="archives" className="py-32 relative bg-[#121212] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="text-xs font-medium tracking-[0.2em] gold-accent uppercase block mb-4">Observation Chamber</span>
            <h2 className="serif-font text-4xl md:text-6xl text-white">Active Specimens</h2>
            <div className="w-16 h-px bg-yellow-700 mx-auto mt-8"></div>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Specimen 1 */}
            <div className="glass-panel p-2 rounded-sm group mystic-glow">
              <div className="relative aspect-[4/5] bg-black overflow-hidden border border-gray-800">
                <video 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 filter contrast-125 grayscale-[20%]" 
                  autoPlay loop muted playsInline
                >
                  <source src="https://assets.mixkit.co/videos/preview/mixkit-mysterious-pale-looking-fashion-woman-39878-large.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 border border-yellow-700/30 m-4 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent">
                  <h3 className="serif-font text-xl text-white tracking-wider mb-1">Entity: Sylph</h3>
                  <p className="text-xs font-light text-gray-400 tracking-widest uppercase">Class: Aethereal</p>
                </div>
              </div>
            </div>

            {/* Specimen 2 */}
            <div className="glass-panel p-2 rounded-sm group mystic-glow md:translate-y-12">
              <div className="relative aspect-[4/5] bg-black overflow-hidden border border-gray-800">
                <video 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 filter contrast-125 grayscale-[20%]" 
                  autoPlay loop muted playsInline
                >
                  <source src="https://assets.mixkit.co/videos/preview/mixkit-portrait-of-a-woman-in-a-pool-1259-large.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 border border-yellow-700/30 m-4 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent">
                  <h3 className="serif-font text-xl text-white tracking-wider mb-1">Entity: Undine</h3>
                  <p className="text-xs font-light text-gray-400 tracking-widest uppercase">Class: Aquatic Form</p>
                </div>
              </div>
            </div>

            {/* Specimen 3 */}
            <div className="glass-panel p-2 rounded-sm group mystic-glow">
              <div className="relative aspect-[4/5] bg-black overflow-hidden border border-gray-800">
                <video 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 filter contrast-125 grayscale-[20%]" 
                  autoPlay loop muted playsInline
                >
                  <source src="https://assets.mixkit.co/videos/preview/mixkit-wizard-with-a-glowing-magic-wand-in-the-forest-27415-large.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 border border-yellow-700/30 m-4 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent">
                  <h3 className="serif-font text-xl text-white tracking-wider mb-1">Entity: Magus</h3>
                  <p className="text-xs font-light text-gray-400 tracking-widest uppercase">Class: Practitioner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Commission CTA */}
      <footer id="commission" className="bg-[#0a0a0a] border-t border-yellow-900/30 pt-24 pb-12 relative">
        <div className="max-w-4xl mx-auto px-4 text-center mb-24">
          <h2 className="serif-font text-3xl md:text-5xl text-white mb-6">Initiate the Process</h2>
          <p className="text-gray-400 font-light mb-10 max-w-2xl mx-auto">
            Commission slots are regulated based on current guild capacity. Formal requirements are necessary for preliminary formulation.
          </p>
          <a href="mailto:commissions@wiverndigital.com" className="inline-block border border-yellow-700 bg-yellow-900/10 text-yellow-500 px-12 py-4 text-xs font-medium tracking-[0.2em] uppercase hover:bg-yellow-700 hover:text-white transition-all duration-300">
            Submit Requisition
          </a>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-gray-800 pt-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full border border-yellow-700 flex items-center justify-center">
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
