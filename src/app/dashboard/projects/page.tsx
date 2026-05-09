import { Sparkles, Grid, List, PlaySquare, MoreVertical } from "lucide-react";

export default function ProjectsPage() {
  const projects = [
    { id: 1, title: "BRAND STORY — Q2 2026", duration: "1:20", badge: "Brand", views: "12.4K views", author: "Jerome", status: "Completed", statusColor: "green" },
    { id: 2, title: "PRODUCT LAUNCH — ELIXIR SERIES", duration: "0:45", badge: "Product", views: "8.2K views", author: "Morgana", status: "Processing", statusColor: "yellow" },
    { id: 3, title: "GUILD RECRUITMENT AD — SPRING", duration: "0:30", badge: "Ads", views: "4.1K views", author: "Aldric", status: "Draft", statusColor: "gray" },
    { id: 4, title: "TUTORIAL — THE ART OF NARRATION", duration: "3:10", badge: "Tutorial", views: "8.2K views", author: "Jerome", status: "Completed", statusColor: "green" },
    { id: 5, title: "TESTIMONIAL SERIES — VOL. 1", duration: "1:05", badge: "Social", views: "5.6K views", author: "Lyra", status: "Completed", statusColor: "green" },
    { id: 6, title: "SEASON PROMO — SUMMER GUILD", duration: "0:30", badge: "Promo", views: "1.2K views", author: "Jerome", status: "Draft", statusColor: "gray" },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="flex items-end justify-between mb-8">
        <div>
          <h1 className="text-3xl font-serif text-white mb-2 tracking-widest uppercase">PROJECTS ARCHIVE</h1>
          <p className="text-[#a19282] text-sm">6 creations in the vault</p>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <input 
            type="text" 
            placeholder="Search archives..." 
            className="w-64 bg-[#14100c] border border-[#2e241c] rounded p-2 text-sm text-[#f3ede4] focus:outline-none focus:border-primary/50"
          />
          <div className="flex bg-[#14100c] border border-[#2e241c] rounded p-1">
            <button className="px-4 py-1 rounded bg-[#241d17] text-primary text-sm font-bold">All</button>
            <button className="px-4 py-1 rounded text-[#a19282] hover:text-[#f3ede4] text-sm font-medium">Completed</button>
            <button className="px-4 py-1 rounded text-[#a19282] hover:text-[#f3ede4] text-sm font-medium">Processing</button>
            <button className="px-4 py-1 rounded text-[#a19282] hover:text-[#f3ede4] text-sm font-medium">Draft</button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="p-2 bg-[#241d17] text-primary rounded border border-[#2e241c]">
            <Grid className="w-4 h-4" />
          </button>
          <button className="p-2 text-[#a19282] hover:text-[#f3ede4] rounded border border-transparent hover:border-[#2e241c]">
            <List className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div key={p.id} className="bg-[#14100c] border border-[#2e241c] rounded-xl overflow-hidden hover:border-primary/50 transition-colors group cursor-pointer">
            
            {/* Thumbnail */}
            <div className="aspect-video relative bg-[#0c0a08]">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
              
              <div className="absolute top-3 left-3 z-20 px-2 py-0.5 rounded border border-primary/50 bg-[#1a1510] text-primary text-[10px] font-bold uppercase tracking-wider">
                {p.badge}
              </div>
              <div className="absolute bottom-3 right-3 z-20 bg-black/60 px-2 py-0.5 rounded text-white text-xs font-medium font-sans">
                {p.duration}
              </div>
            </div>

            {/* Info */}
            <div className="p-5">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-serif font-bold text-[#f3ede4] tracking-wider text-sm">{p.title}</h3>
                <button className="text-[#a19282] hover:text-white"><MoreVertical className="w-4 h-4" /></button>
              </div>

              <div className="flex items-center justify-between text-xs text-[#a19282]">
                <div className="flex items-center gap-3">
                  <span>by {p.author}</span>
                  <span>{p.views}</span>
                </div>
                
                <div className={`px-3 py-1 rounded-full border text-xs font-medium ${
                  p.statusColor === 'green' ? 'border-green-500/30 bg-green-500/10 text-green-400' :
                  p.statusColor === 'yellow' ? 'border-yellow-500/30 bg-yellow-500/10 text-yellow-400' :
                  'border-gray-500/30 bg-gray-500/10 text-gray-400'
                }`}>
                  {p.status}
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
