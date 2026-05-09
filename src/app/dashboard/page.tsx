import { Sparkles, Plus, PlaySquare, Eye, Users, Zap, ChevronRight, Video, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto flex gap-8">
      
      {/* Main Column */}
      <div className="flex-1">
        
        {/* Welcome Section */}
        <div className="bg-[#14100c] border border-[#2e241c] rounded-xl p-8 mb-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-50 pointer-events-none" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 text-primary text-xs font-bold tracking-widest uppercase mb-4">
              <Sparkles className="w-3 h-3" /> Welcome Back, Grand Master
            </div>
            <h1 className="text-4xl font-serif text-white mb-2">GOOD DAY, JEROME</h1>
            <p className="text-[#a19282] mb-6">
              You have 3 videos in queue and 2 scheduled for auto-publish tomorrow.
            </p>
            <Link href="/dashboard/create" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#d4af37] to-[#aa832d] text-black px-6 py-3 rounded text-sm font-bold shadow-[0_0_15px_rgba(194,155,98,0.3)] hover:shadow-[0_0_20px_rgba(194,155,98,0.5)] transition-all">
              <Plus className="w-4 h-4" /> CREATE NEW VIDEO
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          
          <div className="bg-[#14100c] border border-[#2e241c] rounded-xl p-5">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded bg-[#d4af37]/10 flex items-center justify-center border border-[#d4af37]/20">
                <PlaySquare className="w-5 h-5 text-[#d4af37]" />
              </div>
              <ChevronRight className="w-4 h-4 text-[#4ade80] -rotate-45" />
            </div>
            <div className="text-3xl font-serif font-bold text-white mb-1">24</div>
            <div className="text-xs text-[#a19282] mb-2">Videos Created</div>
            <div className="text-xs text-[#d4af37]">+4 this month</div>
          </div>

          <div className="bg-[#14100c] border border-[#2e241c] rounded-xl p-5">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                <Eye className="w-5 h-5 text-blue-500" />
              </div>
              <ChevronRight className="w-4 h-4 text-[#4ade80] -rotate-45" />
            </div>
            <div className="text-3xl font-serif font-bold text-white mb-1">128K</div>
            <div className="text-xs text-[#a19282] mb-2">Total Views</div>
            <div className="text-xs text-blue-400">+12% vs last month</div>
          </div>

          <div className="bg-[#14100c] border border-[#2e241c] rounded-xl p-5">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
                <Users className="w-5 h-5 text-purple-400" />
              </div>
              <ChevronRight className="w-4 h-4 text-[#4ade80] -rotate-45" />
            </div>
            <div className="text-3xl font-serif font-bold text-white mb-1">5</div>
            <div className="text-xs text-[#a19282] mb-2">Avatars Used</div>
            <div className="text-xs text-purple-400">3 active guilds</div>
          </div>

          <div className="bg-[#14100c] border border-[#2e241c] rounded-xl p-5">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded bg-green-500/10 flex items-center justify-center border border-green-500/20">
                <Zap className="w-5 h-5 text-green-500" />
              </div>
              <ChevronRight className="w-4 h-4 text-[#4ade80] -rotate-45" />
            </div>
            <div className="text-3xl font-serif font-bold text-white mb-1">18</div>
            <div className="text-xs text-[#a19282] mb-2">Auto-Published</div>
            <div className="text-xs text-green-500">75% automation rate</div>
          </div>

        </div>

        {/* Recent Projects */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-serif font-bold text-lg tracking-widest uppercase">RECENT PROJECTS</h2>
            <Link href="/dashboard/projects" className="text-primary text-sm font-bold flex items-center hover:underline">
              View all <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          
          <div className="flex flex-col gap-3">
            {/* Project 1 */}
            <div className="bg-[#14100c] border border-[#2e241c] rounded-xl p-4 flex items-center justify-between hover:border-primary/40 transition-colors cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-md bg-[#1a1510] border border-[#2e241c] overflow-hidden relative">
                   <div className="absolute inset-0 bg-zinc-800 animate-pulse" /> {/* Placeholder Image */}
                </div>
                <div>
                  <h3 className="font-serif font-bold text-[#f3ede4] tracking-wider mb-1">BRAND STORY — Q2 2026</h3>
                  <div className="flex items-center gap-4 text-xs text-[#a19282]">
                    <span>Avatar: Jerome</span>
                    <span className="flex items-center gap-1"><PlaySquare className="w-3 h-3" /> 1:20</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <div className="px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs font-medium">
                  Completed
                </div>
                <div className="text-xs text-[#a19282]">Apr 28</div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-[#14100c] border border-[#2e241c] rounded-xl p-4 flex items-center justify-between hover:border-primary/40 transition-colors cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-md bg-[#1a1510] border border-[#2e241c] overflow-hidden relative">
                   <div className="absolute inset-0 bg-zinc-800 animate-pulse" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-[#f3ede4] tracking-wider mb-1">PRODUCT LAUNCH — ELIXIR SERIES</h3>
                  <div className="flex items-center gap-4 text-xs text-[#a19282]">
                    <span>Avatar: Morgana</span>
                    <span className="flex items-center gap-1"><PlaySquare className="w-3 h-3" /> 0:45</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <div className="px-3 py-1 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 text-xs font-medium">
                  Processing
                </div>
                <div className="text-xs text-[#a19282]">Apr 27</div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-[#14100c] border border-[#2e241c] rounded-xl p-4 flex items-center justify-between hover:border-primary/40 transition-colors cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-md bg-[#1a1510] border border-[#2e241c] overflow-hidden relative">
                   <div className="absolute inset-0 bg-zinc-800 animate-pulse" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-[#f3ede4] tracking-wider mb-1">GUILD RECRUITMENT AD — SPRING</h3>
                  <div className="flex items-center gap-4 text-xs text-[#a19282]">
                    <span>Avatar: Aldric</span>
                    <span className="flex items-center gap-1"><PlaySquare className="w-3 h-3" /> 0:30</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <div className="px-3 py-1 rounded-full border border-gray-500/30 bg-gray-500/10 text-gray-400 text-xs font-medium">
                  Draft
                </div>
                <div className="text-xs text-[#a19282]">Apr 26</div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-72 flex-shrink-0 flex flex-col gap-6">
        
        {/* Quick Actions */}
        <div className="bg-[#14100c] border border-[#2e241c] rounded-xl p-6">
          <h2 className="font-serif font-bold text-sm tracking-widest uppercase mb-4">QUICK ACTIONS</h2>
          <div className="flex flex-col gap-2">
            <Link href="/dashboard/create" className="flex items-center gap-3 p-3 rounded border border-[#2e241c] text-[#a19282] hover:text-[#f3ede4] hover:bg-[#1a1510] transition-colors">
              <Video className="w-4 h-4" />
              <span className="text-sm font-medium">Create Video</span>
            </Link>
            <Link href="/dashboard/avatars" className="flex items-center gap-3 p-3 rounded border border-[#2e241c] text-[#a19282] hover:text-[#f3ede4] hover:bg-[#1a1510] transition-colors">
              <Users className="w-4 h-4" />
              <span className="text-sm font-medium">Browse Avatars</span>
            </Link>
            <Link href="/dashboard/projects" className="flex items-center gap-3 p-3 rounded border border-[#2e241c] text-[#a19282] hover:text-[#f3ede4] hover:bg-[#1a1510] transition-colors">
              <Calendar className="w-4 h-4" />
              <span className="text-sm font-medium">Schedule Content</span>
            </Link>
          </div>
        </div>

        {/* Monthly Usage */}
        <div className="bg-[#14100c] border border-[#2e241c] rounded-xl p-6">
          <h2 className="font-serif font-bold text-sm tracking-widest uppercase mb-4">MONTHLY USAGE</h2>
          <div>
            <div className="flex items-end justify-between mb-2">
              <span className="text-sm text-[#a19282]">Videos</span>
              <span className="text-sm font-bold text-[#f3ede4]">3 / 10</span>
            </div>
            <div className="w-full h-1.5 bg-[#241d17] rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full w-[30%]" />
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
