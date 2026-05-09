import { Users, Search, Star, Lock } from "lucide-react";

export default function AvatarsPage() {
  const avatars = [
    { id: 1, name: "JEROME ALDWICK", title: "The Grand Master", rating: "4.9", videos: "1,240 videos made", locked: false },
    { id: 2, name: "MORGANA VEIL", title: "The Sorceress", rating: "4.8", videos: "876 videos made", locked: false },
    { id: 3, name: "ALDRIC STONE", title: "The Knight Commander", rating: "4.7", videos: "654 videos made", locked: false },
    { id: 4, name: "LYRA ASHWOOD", title: "The Scholar", rating: "4.9", videos: "932 videos made", locked: false },
    { id: 5, name: "THERON BLACKWOOD", title: "The Alchemist", rating: "4.8", videos: "Locked", locked: true },
    { id: 6, name: "VESPER DARKHOLLOW", title: "The Shadow", rating: "5.0", videos: "Locked", locked: true },
  ];

  return (
    <div className="flex gap-8 max-w-7xl mx-auto">
      
      {/* Main Grid */}
      <div className="flex-1">
        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-primary text-xs font-bold tracking-widest uppercase mb-2">
              <Users className="w-3 h-3" /> GUILD CHARACTERS
            </div>
            <h1 className="text-3xl font-serif text-white uppercase tracking-widest">AVATAR LIBRARY</h1>
          </div>
          
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#a19282]" />
            <input 
              type="text" 
              placeholder="Search avatars..." 
              className="w-full bg-[#14100c] border border-[#2e241c] rounded-md py-2 pl-10 pr-4 text-sm text-[#f3ede4] placeholder-[#a19282] focus:outline-none focus:border-primary/50"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button className="px-5 py-2 rounded bg-[#241d17] border border-primary/50 text-primary text-sm font-bold tracking-wider">All</button>
          <button className="px-5 py-2 rounded border border-[#2e241c] text-[#a19282] hover:text-[#f3ede4] hover:bg-[#14100c] transition-colors text-sm font-medium tracking-wider">Founder</button>
          <button className="px-5 py-2 rounded border border-[#2e241c] text-[#a19282] hover:text-[#f3ede4] hover:bg-[#14100c] transition-colors text-sm font-medium tracking-wider">Mystic</button>
          <button className="px-5 py-2 rounded border border-[#2e241c] text-[#a19282] hover:text-[#f3ede4] hover:bg-[#14100c] transition-colors text-sm font-medium tracking-wider">Warrior</button>
          <button className="px-5 py-2 rounded border border-[#2e241c] text-[#a19282] hover:text-[#f3ede4] hover:bg-[#14100c] transition-colors text-sm font-medium tracking-wider">Scholar</button>
          <button className="px-5 py-2 rounded border border-[#2e241c] text-[#a19282] hover:text-[#f3ede4] hover:bg-[#14100c] transition-colors text-sm font-medium tracking-wider">Alchemist</button>
          <button className="px-5 py-2 rounded border border-[#2e241c] text-[#a19282] hover:text-[#f3ede4] hover:bg-[#14100c] transition-colors text-sm font-medium tracking-wider">Shadow</button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {avatars.map((avatar) => (
            <div key={avatar.id} className="group relative aspect-[3/4] rounded-xl overflow-hidden border border-[#2e241c] cursor-pointer bg-[#0c0a08]">
              {/* Background gradient for placeholder */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0806] z-10" />
              
              {/* Image Placeholder */}
              <div className={`absolute inset-0 bg-[#14100c] transition-transform duration-500 group-hover:scale-105 ${avatar.locked ? 'opacity-50 grayscale' : ''}`} />
              
              {/* Rating Badge */}
              <div className="absolute top-4 left-4 z-20 px-2 py-1 rounded bg-black/60 text-primary text-xs font-bold flex items-center gap-1 border border-[#2e241c]">
                <Star className="w-3 h-3 fill-current" /> {avatar.rating}
              </div>

              {/* Lock Icon */}
              {avatar.locked && (
                <div className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/80 flex items-center justify-center border border-[#2e241c]">
                  <Lock className="w-4 h-4 text-[#a19282]" />
                </div>
              )}

              {/* Info */}
              <div className="absolute bottom-6 left-6 z-20">
                <h3 className="font-serif text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors">{avatar.name}</h3>
                <p className="text-[#a19282] text-xs font-medium mb-1">{avatar.title}</p>
                <p className="text-primary text-xs opacity-80">{avatar.videos}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Sidebar (Details Pane Placeholder) */}
      <div className="w-80 flex-shrink-0">
        <div className="sticky top-8 bg-[#14100c] border border-[#2e241c] rounded-xl h-[600px] flex flex-col items-center justify-center p-8 text-center">
          <div className="w-16 h-16 rounded-full border border-[#2e241c] bg-[#1a1510] flex items-center justify-center mb-6">
            <Users className="w-6 h-6 text-[#a19282]" />
          </div>
          <h2 className="font-serif text-lg text-primary tracking-widest uppercase mb-2">SELECT AN AVATAR</h2>
          <p className="text-sm text-[#a19282]">Click on any guild character to view details, voice samples, and start creating.</p>
        </div>
      </div>

    </div>
  );
}
