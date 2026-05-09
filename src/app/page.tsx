import { Play, Sparkles, ChevronRight, HelpCircle } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0806] text-[#f3ede4] relative">
      {/* Background Texture Simulation */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at center, #c29b62 0%, transparent 60%)', backgroundSize: '100% 100%' }} />
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/dark-matter.png")' }} />

      {/* Navbar */}
      <header className="relative z-50 border-b border-white/5 bg-transparent">
        <div className="container mx-auto px-8 h-24 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-primary/50 flex items-center justify-center bg-black/40">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <span className="text-xl font-serif tracking-[0.2em] text-[#e8dfd3]">WIVERN DIGITAL</span>
          </div>
          <nav className="hidden md:flex gap-10 text-sm font-medium tracking-widest text-[#a19282] uppercase">
            <Link href="#works" className="hover:text-[#f3ede4] transition-colors">Works</Link>
            <Link href="#process" className="hover:text-[#f3ede4] transition-colors">Process</Link>
            <Link href="#guild" className="hover:text-[#f3ede4] transition-colors">The Guild</Link>
            <Link href="#pricing" className="hover:text-[#f3ede4] transition-colors">Pricing</Link>
            <Link href="#contact" className="hover:text-[#f3ede4] transition-colors">Contact</Link>
          </nav>
          <div className="flex items-center gap-6">
            <Link href="/login" className="text-sm font-medium tracking-widest text-[#a19282] hover:text-[#f3ede4] transition-colors uppercase">
              Sign In
            </Link>
            <Link href="/dashboard" className="bg-primary text-black px-6 py-2.5 rounded text-sm font-bold tracking-widest uppercase hover:bg-primary/90 transition-colors">
              Enter Guild
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 relative z-10 flex flex-col items-center justify-center pt-20 pb-32">
        <div className="container mx-auto px-6 text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-md border border-primary/30 bg-black/40 text-primary text-xs font-medium tracking-[0.3em] uppercase mb-12">
            <Sparkles className="w-3 h-3" />
            EST. MDXVI • THE CREATIVE GUILD
            <Sparkles className="w-3 h-3" />
          </div>

          {/* Heading */}
          <h1 className="font-serif text-6xl md:text-8xl font-normal tracking-wide mb-8 leading-[1.1]">
            <span className="text-[#f3ede4]">CRAFTING DIGITAL AVATARS</span><br />
            <span className="text-primary drop-shadow-[0_0_30px_rgba(194,155,98,0.3)]">
              SINCE THE 16TH CENTURY
            </span>
          </h1>

          {/* Subtext */}
          <p className="font-serif italic text-[#c8baaa] text-xl md:text-2xl max-w-4xl mx-auto mb-16 leading-relaxed">
            Ancient storytelling wisdom meets modern AI sorcery. Transform your scripts into
            <br />
            cinematic avatar videos with the power of an immortal guild of digital artisans.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/dashboard" className="w-full sm:w-auto bg-primary text-black px-10 py-4 rounded font-serif font-bold text-lg tracking-widest uppercase hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
              ENTER THE GUILD <ChevronRight className="w-5 h-5" />
            </Link>
            <button className="w-full sm:w-auto bg-transparent text-[#f3ede4] border border-[#f3ede4]/20 px-10 py-4 rounded font-serif font-bold text-lg tracking-widest uppercase hover:bg-white/5 transition-colors flex items-center justify-center gap-3">
              <Play className="w-5 h-5" /> VIEW WORKS
            </button>
          </div>

          {/* Statistics */}
          <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-12 max-w-5xl mx-auto">
            <div>
              <div className="font-serif text-5xl font-bold text-primary mb-3">2,400+</div>
              <div className="text-xs text-[#a19282] uppercase tracking-[0.2em]">VIDEOS CREATED</div>
            </div>
            <div>
              <div className="font-serif text-5xl font-bold text-primary mb-3">98%</div>
              <div className="text-xs text-[#a19282] uppercase tracking-[0.2em]">CLIENT SATISFACTION</div>
            </div>
            <div>
              <div className="font-serif text-5xl font-bold text-primary mb-3">150+</div>
              <div className="text-xs text-[#a19282] uppercase tracking-[0.2em]">GUILD MEMBERS</div>
            </div>
            <div>
              <div className="font-serif text-5xl font-bold text-primary mb-3">40+</div>
              <div className="text-xs text-[#a19282] uppercase tracking-[0.2em]">COUNTRIES SERVED</div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-24 flex flex-col items-center opacity-50">
            <span className="text-xs tracking-[0.3em] text-[#a19282] uppercase mb-4">SCROLL</span>
            <div className="w-[1px] h-16 bg-gradient-to-b from-[#a19282] to-transparent" />
          </div>

        </div>
      </main>

      {/* Help Button (Bottom Right) */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="w-12 h-12 rounded-full bg-[#1a1510] border border-white/10 flex items-center justify-center text-[#f3ede4] hover:bg-[#241d17] transition-colors">
          <HelpCircle className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
