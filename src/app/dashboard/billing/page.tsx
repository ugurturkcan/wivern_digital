import { CreditCard, Sparkles, Check, Download } from "lucide-react";

export default function BillingPage() {
  return (
    <div className="max-w-5xl mx-auto pb-12">
      
      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 text-primary text-xs font-bold tracking-widest uppercase mb-2">
          <CreditCard className="w-3 h-3" /> GUILD TREASURY
        </div>
        <h1 className="text-3xl font-serif text-white tracking-widest uppercase">BILLING & PLANS</h1>
      </div>

      {/* Current Rank Card */}
      <div className="bg-[#14100c] border border-primary/30 rounded-xl p-8 mb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent pointer-events-none" />
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative z-10 gap-6">
          <div className="flex-1">
            <div className="text-primary text-xs font-bold tracking-widest uppercase mb-2">CURRENT RANK</div>
            <h2 className="text-4xl font-serif text-white mb-2">JOURNEYMAN</h2>
            <p className="text-[#a19282] text-sm">10 × 30-Second Videos · Valid until July 1, 2026</p>
          </div>
          
          <div className="text-right flex flex-col items-end gap-3">
            <div className="flex items-end gap-2 text-primary">
              <span className="text-5xl font-serif font-bold">7</span>
              <span className="text-sm uppercase tracking-widest mb-1 opacity-80">Videos Remaining</span>
            </div>
            <button className="bg-gradient-to-r from-[#d4af37] to-[#aa832d] text-black px-6 py-2.5 rounded font-bold text-sm tracking-widest uppercase hover:opacity-90 transition-opacity flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> ASCEND TO GRAND MASTER
            </button>
            <button className="text-[#a19282] text-sm hover:text-white transition-colors">Renew Journeyman</button>
          </div>
        </div>

        <div className="mt-8 relative z-10">
          <div className="flex justify-between text-xs text-[#a19282] mb-2 font-medium">
            <span>Usage this period</span>
            <span>3 / 10 videos</span>
          </div>
          <div className="w-full h-2 bg-[#241d17] rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#d4af37] to-[#e6c770] w-[30%] rounded-full" />
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="mb-12">
        <h2 className="font-serif text-xl text-white tracking-widest uppercase mb-6">CHOOSE YOUR RANK</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Apprentice */}
          <div className="bg-[#0c0a08] border border-[#2e241c] rounded-xl p-8 flex flex-col">
            <h3 className="font-serif text-lg text-primary tracking-widest uppercase mb-2">APPRENTICE</h3>
            <div className="flex items-end gap-1 mb-8">
              <span className="text-3xl font-serif text-white font-bold">$49</span>
              <span className="text-sm text-[#a19282] mb-1">/month</span>
            </div>
            <div className="flex flex-col gap-4 mb-8 flex-1">
              <div className="flex items-center gap-3 text-sm text-[#f3ede4]"><Check className="w-4 h-4 text-primary" /> 5 videos/month</div>
              <div className="flex items-center gap-3 text-sm text-[#f3ede4]"><Check className="w-4 h-4 text-primary" /> HD 1080p</div>
              <div className="flex items-center gap-3 text-sm text-[#f3ede4]"><Check className="w-4 h-4 text-primary" /> 3 avatars</div>
              <div className="flex items-center gap-3 text-sm text-[#f3ede4]"><Check className="w-4 h-4 text-primary" /> Basic voice</div>
              <div className="flex items-center gap-3 text-sm text-[#f3ede4]"><Check className="w-4 h-4 text-primary" /> Email support</div>
            </div>
            <button className="w-full border border-[#2e241c] text-[#a19282] py-3 rounded text-sm font-bold tracking-widest uppercase hover:bg-[#14100c] hover:text-white transition-colors">
              DOWNGRADE
            </button>
          </div>

          {/* Journeyman (Current) */}
          <div className="bg-[#14100c] border border-primary/50 rounded-xl p-8 flex flex-col relative transform md:-translate-y-2 shadow-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#d4af37] to-[#aa832d] text-black text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest">
              Current Plan
            </div>
            <h3 className="font-serif text-lg text-primary tracking-widest uppercase mb-2">JOURNEYMAN</h3>
            <div className="flex items-end gap-1 mb-2">
              <span className="text-4xl font-serif text-white font-bold">$149</span>
              <span className="text-sm text-[#a19282] mb-1.5">/ 3 months</span>
            </div>
            <div className="flex flex-col gap-4 mb-8 flex-1 mt-6">
              <div className="flex items-center gap-3 text-sm text-[#f3ede4]"><Check className="w-4 h-4 text-primary" /> 10 videos (30s each)</div>
              <div className="flex items-center gap-3 text-sm text-[#f3ede4]"><Check className="w-4 h-4 text-primary" /> Valid 3 months</div>
              <div className="flex items-center gap-3 text-sm text-[#f3ede4]"><Check className="w-4 h-4 text-primary" /> 4K export</div>
              <div className="flex items-center gap-3 text-sm text-[#f3ede4]"><Check className="w-4 h-4 text-primary" /> All avatars</div>
              <div className="flex items-center gap-3 text-sm text-[#f3ede4]"><Check className="w-4 h-4 text-primary" /> Priority support</div>
            </div>
          </div>

          {/* Grand Master */}
          <div className="bg-[#0c0a08] border border-[#2e241c] rounded-xl p-8 flex flex-col">
            <h3 className="font-serif text-lg text-primary tracking-widest uppercase mb-2">GRAND MASTER</h3>
            <div className="flex items-end gap-1 mb-8">
              <span className="text-3xl font-serif text-white font-bold">$299</span>
              <span className="text-sm text-[#a19282] mb-1">/month</span>
            </div>
            <div className="flex flex-col gap-4 mb-8 flex-1">
              <div className="flex items-center gap-3 text-sm text-[#f3ede4]"><Check className="w-4 h-4 text-primary" /> Unlimited videos</div>
              <div className="flex items-center gap-3 text-sm text-[#f3ede4]"><Check className="w-4 h-4 text-primary" /> 8K export</div>
              <div className="flex items-center gap-3 text-sm text-[#f3ede4]"><Check className="w-4 h-4 text-primary" /> Custom voice cloning</div>
              <div className="flex items-center gap-3 text-sm text-[#f3ede4]"><Check className="w-4 h-4 text-primary" /> Auto-publish</div>
              <div className="flex items-center gap-3 text-sm text-[#f3ede4]"><Check className="w-4 h-4 text-primary" /> Dedicated support</div>
            </div>
            <button className="w-full border border-primary/50 text-primary py-3 rounded text-sm font-bold tracking-widest uppercase hover:bg-primary/10 transition-colors">
              UPGRADE
            </button>
          </div>

        </div>
      </div>

      {/* Lower Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Payments */}
        <div>
          <h2 className="font-serif text-lg text-white tracking-widest uppercase mb-4">SCROLL OF PAYMENTS</h2>
          <div className="flex flex-col gap-3">
            <div className="bg-[#14100c] border border-[#2e241c] rounded-lg p-4 flex items-center justify-between hover:border-primary/30 transition-colors">
              <div>
                <div className="text-sm font-bold text-[#f3ede4] mb-1">Journeyman · 3-Month Package</div>
                <div className="text-xs text-[#a19282]">INV-2604 · Apr 1, 2026</div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-primary font-serif font-bold">$149.00</span>
                <span className="px-2 py-0.5 rounded border border-green-500/30 bg-green-500/10 text-green-400 text-xs font-medium">Paid</span>
                <button className="text-[#a19282] hover:text-white"><Download className="w-4 h-4" /></button>
              </div>
            </div>
          </div>
        </div>

        {/* Add-ons */}
        <div>
          <h2 className="font-serif text-lg text-white tracking-widest uppercase mb-4">ADD-ON PURCHASES</h2>
          <div className="flex flex-col gap-3">
            <div className="bg-[#14100c] border border-[#2e241c] rounded-lg p-4 flex items-center justify-between hover:border-primary/30 transition-colors">
              <div>
                <div className="text-sm font-bold text-[#f3ede4] mb-1">Neural Lip Sync × 3</div>
                <div className="text-xs text-[#a19282]">Apr 20</div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-primary font-serif font-bold">$36.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
