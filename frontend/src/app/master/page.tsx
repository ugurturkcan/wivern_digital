import React from 'react';

export default function MasterPage() {
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
              <a href="/craft" className="text-gray-300 hover:text-yellow-600 text-xs font-medium tracking-[0.15em] uppercase transition-colors">The Guild</a>
              <a href="/specimens" className="text-gray-300 hover:text-yellow-600 text-xs font-medium tracking-[0.15em] uppercase transition-colors">Specimens</a>
              <a href="/commissions" className="text-gray-300 hover:text-yellow-600 text-xs font-medium tracking-[0.15em] uppercase transition-colors">Commission</a>
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
          <h2 className="text-sm md:text-base font-light tracking-[0.3em] gold-accent uppercase mb-4">Guild Leadership</h2>
          <h1 className="serif-font text-4xl md:text-6xl text-white mb-6 tracking-wide drop-shadow-lg">
            Master-in-Chief
          </h1>
          <div className="w-px h-16 bg-gradient-to-b from-yellow-600 to-transparent mx-auto mb-6"></div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-24 relative bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Portrait */}
            <div className="glass-panel p-2 rounded-sm mystic-glow h-full w-full max-w-md mx-auto lg:mx-0">
              <div className="relative w-full aspect-square md:aspect-[4/5] bg-black overflow-hidden border border-gray-800">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop" 
                  alt="Founder Portrait" 
                  className="w-full h-full object-cover filter contrast-110 sepia-[.1] grayscale-[10%]" 
                />
                <div className="absolute inset-0 border border-yellow-700/30 m-4 pointer-events-none z-10"></div>
                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
                  <span className="text-yellow-600 text-xs tracking-widest uppercase block mb-1">Founder</span>
                  <span className="serif-font text-white tracking-widest uppercase text-xl block">Jerome Goerke</span>
                </div>
              </div>
            </div>

            {/* Bio Content */}
            <div>
              <h2 className="serif-font text-3xl md:text-4xl text-white mb-8">Professional History</h2>
              <div className="space-y-6 text-gray-400 font-light leading-relaxed">
                <p>
                  Jerome Goerke serves as the Master-in-Chief and founder of Wivern Digital. His professional background originates in newsroom journalism, a discipline that provided the structural foundation for his subsequent transition into organizational leadership and digital media generation.
                </p>
                <p>
                  His primary expertise lies in innovation management and narrative structuring. These core competencies are currently applied to the development of the guild's proprietary assembly pipelines and the temporal formalization of digital avatars.
                </p>
                <p>
                  Prior to establishing Wivern Digital, Goerke was recognized with multiple industry awards for his work in storytelling. This documented history of narrative execution informs the operational methodology of the guild, ensuring that all generated constructs adhere to established standards of visual communication and character coherence.
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-800 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <span className="block serif-font text-2xl text-white mb-2">Innovation Management</span>
                  <span className="block text-sm text-gray-500 font-light">Structural oversight of the proprietary pipeline and guild protocols.</span>
                </div>
                <div>
                  <span className="block serif-font text-2xl text-white mb-2">Narrative Structuring</span>
                  <span className="block text-sm text-gray-500 font-light">Application of award-winning storytelling methodologies to avatar formulation.</span>
                </div>
              </div>
            </div>
          </div>
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
              <a href="/master" className="inline-block text-yellow-600 text-xs tracking-wider uppercase transition-colors">Master-in-Chief</a>
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
