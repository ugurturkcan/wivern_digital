import { Sparkles, LayoutDashboard, FolderKanban, PlusCircle, Users, CreditCard, Settings, LogOut, Search, Bell, ChevronRight, Plus } from "lucide-react";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-[#0a0806] text-[#f3ede4] font-sans overflow-hidden">
      
      {/* Sidebar */}
      <aside className="w-72 border-r border-[#2e241c] bg-[#0c0a08] flex flex-col h-full flex-shrink-0">
        {/* Logo */}
        <div className="h-20 px-6 flex items-center gap-3 border-b border-[#2e241c]">
          <div className="w-8 h-8 rounded-full border border-primary/50 flex items-center justify-center bg-black/40">
            <Sparkles className="w-4 h-4 text-primary" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-serif font-bold tracking-widest text-[#f3ede4] text-sm">WIVERN</span>
            <span className="font-serif text-primary text-xs tracking-widest">DIGITAL</span>
          </div>
        </div>

        {/* User Profile */}
        <div className="px-6 py-6 border-b border-[#2e241c]">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full border border-[#2e241c] bg-[#1a1510] flex items-center justify-center text-primary font-serif">
              J
            </div>
            <div>
              <div className="text-sm font-serif font-bold tracking-wide">JEROME ALDWICK</div>
              <div className="text-xs text-[#a19282]">Grand Master</div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-2">
          <Link href="/dashboard" className="flex items-center justify-between px-4 py-3 rounded bg-primary/10 text-primary group transition-colors">
            <div className="flex items-center gap-3">
              <LayoutDashboard className="w-5 h-5" />
              <span className="text-sm font-medium">Overview</span>
            </div>
            <ChevronRight className="w-4 h-4 opacity-70" />
          </Link>

          <Link href="/dashboard/projects" className="flex items-center gap-3 px-4 py-3 rounded text-[#a19282] hover:bg-[#1a1510] hover:text-[#f3ede4] transition-colors">
            <FolderKanban className="w-5 h-5" />
            <span className="text-sm font-medium">Projects</span>
          </Link>

          <Link href="/dashboard/create" className="flex items-center gap-3 px-4 py-3 mt-2 rounded bg-[#1a1510] text-[#f3ede4] hover:bg-[#241d17] border border-[#2e241c] transition-colors">
            <PlusCircle className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Create Video</span>
          </Link>

          <Link href="/dashboard/avatars" className="flex items-center gap-3 px-4 py-3 rounded text-[#a19282] hover:bg-[#1a1510] hover:text-[#f3ede4] transition-colors mt-2">
            <Users className="w-5 h-5" />
            <span className="text-sm font-medium">Avatar Library</span>
          </Link>

          <Link href="/dashboard/billing" className="flex items-center gap-3 px-4 py-3 rounded text-[#a19282] hover:bg-[#1a1510] hover:text-[#f3ede4] transition-colors">
            <CreditCard className="w-5 h-5" />
            <span className="text-sm font-medium">Billing</span>
          </Link>

          <Link href="/dashboard/settings" className="flex items-center gap-3 px-4 py-3 rounded text-[#a19282] hover:bg-[#1a1510] hover:text-[#f3ede4] transition-colors">
            <Settings className="w-5 h-5" />
            <span className="text-sm font-medium">Settings</span>
          </Link>
        </div>

        {/* Plan Widget */}
        <div className="p-6">
          <div className="rounded-lg border border-[#2e241c] bg-[#14100c] p-4">
            <div className="text-primary text-xs font-serif font-bold tracking-widest uppercase mb-2">Journeyman Plan</div>
            <div className="text-xs text-[#a19282] mb-3">7 videos remaining</div>
            
            <div className="w-full h-1 bg-[#241d17] rounded-full mb-4 overflow-hidden">
              <div className="h-full bg-primary rounded-full w-[30%]" />
            </div>

            <button className="w-full bg-gradient-to-r from-[#d4af37] to-[#aa832d] text-black font-bold text-sm py-2 rounded shadow-[0_0_10px_rgba(194,155,98,0.2)] hover:opacity-90 transition-opacity">
              Upgrade Rank
            </button>
          </div>

          <button className="flex items-center gap-3 px-4 py-4 mt-2 text-[#a19282] hover:text-white transition-colors w-full">
            <LogOut className="w-5 h-5" />
            <span className="text-sm font-medium">Leave the Guild</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
        {/* Header */}
        <header className="h-20 border-b border-[#2e241c] flex items-center justify-between px-8 bg-[#0c0a08]/80 backdrop-blur z-10 flex-shrink-0">
          
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#a19282]" />
            <input 
              type="text" 
              placeholder="Search the archives..." 
              className="w-full bg-[#14100c] border border-[#2e241c] rounded-md py-2 pl-10 pr-4 text-sm text-[#f3ede4] placeholder-[#a19282] focus:outline-none focus:border-primary/50 transition-colors"
            />
          </div>

          <div className="flex items-center gap-6">
            <Link href="/dashboard/create" className="bg-primary text-black px-4 py-2 rounded font-bold text-sm flex items-center gap-2 hover:bg-primary/90 transition-colors">
              <Plus className="w-4 h-4" /> NEW VIDEO
            </Link>
            
            <button className="relative text-[#a19282] hover:text-[#f3ede4] transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute 0 right-0 w-2 h-2 bg-primary rounded-full" />
            </button>

            <div className="w-8 h-8 rounded-full border border-[#2e241c] bg-[#1a1510] flex items-center justify-center text-primary font-serif text-sm">
              J
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-8 relative">
           {/* Subtle glow effect behind main content */}
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
          {children}
        </main>
      </div>
    </div>
  );
}
