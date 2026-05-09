import { Settings, User, Mic, Sliders, Bell, Shield } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="max-w-5xl mx-auto pb-12">
      
      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 text-primary text-xs font-bold tracking-widest uppercase mb-2">
          <Settings className="w-3 h-3" /> GUILD CONFIGURATION
        </div>
        <h1 className="text-3xl font-serif text-white tracking-widest uppercase">SETTINGS</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Left Nav */}
        <div className="w-full md:w-64 flex-shrink-0">
          <div className="bg-[#14100c] border border-[#2e241c] rounded-xl overflow-hidden flex flex-col">
            <button className="flex items-center gap-3 px-4 py-4 bg-[#1a1510] border-l-2 border-primary text-primary text-sm font-bold text-left hover:bg-[#1a1510]/80 transition-colors">
              <User className="w-4 h-4" /> Profile
            </button>
            <button className="flex items-center gap-3 px-4 py-4 text-[#a19282] text-sm font-medium border-l-2 border-transparent text-left hover:bg-[#1a1510] hover:text-[#f3ede4] transition-colors">
              <Mic className="w-4 h-4" /> Brand Voice
            </button>
            <button className="flex items-center gap-3 px-4 py-4 text-[#a19282] text-sm font-medium border-l-2 border-transparent text-left hover:bg-[#1a1510] hover:text-[#f3ede4] transition-colors">
              <Sliders className="w-4 h-4" /> Preferences
            </button>
            <button className="flex items-center gap-3 px-4 py-4 text-[#a19282] text-sm font-medium border-l-2 border-transparent text-left hover:bg-[#1a1510] hover:text-[#f3ede4] transition-colors">
              <Bell className="w-4 h-4" /> Notifications
            </button>
            <button className="flex items-center gap-3 px-4 py-4 text-[#a19282] text-sm font-medium border-l-2 border-transparent text-left hover:bg-[#1a1510] hover:text-[#f3ede4] transition-colors">
              <Shield className="w-4 h-4" /> Security
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 bg-[#14100c] border border-[#2e241c] rounded-xl p-8">
          
          <h2 className="font-serif text-lg text-white tracking-widest uppercase mb-8">GUILD PROFILE</h2>

          {/* Profile Header */}
          <div className="flex items-center gap-6 mb-10">
            <div className="w-20 h-20 rounded-full border border-[#2e241c] bg-[#1a1510] flex items-center justify-center text-primary font-serif text-2xl">
              J
            </div>
            <div>
              <div className="font-serif text-lg text-[#f3ede4] font-bold mb-1">JEROME ALDWICK</div>
              <div className="text-[#a19282] text-sm mb-3">Grand Master · jerome@wivern.ai</div>
              <button className="text-primary text-sm font-bold hover:underline">Change portrait</button>
            </div>
          </div>

          <form className="flex flex-col gap-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold tracking-widest text-[#a19282] uppercase mb-2">DISPLAY NAME</label>
                <input 
                  type="text" 
                  defaultValue="Jerome Aldwick"
                  className="w-full bg-[#0a0806] border border-[#2e241c] rounded p-3 text-[#f3ede4] focus:outline-none focus:border-primary/50"
                />
              </div>
              <div>
                <label className="block text-xs font-bold tracking-widest text-[#a19282] uppercase mb-2">EMAIL</label>
                <input 
                  type="email" 
                  defaultValue="jerome@wivern.ai"
                  className="w-full bg-[#0a0806] border border-[#2e241c] rounded p-3 text-[#f3ede4] focus:outline-none focus:border-primary/50"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold tracking-widest text-[#a19282] uppercase mb-2">GUILD TITLE</label>
                <input 
                  type="text" 
                  defaultValue="Grand Master"
                  className="w-full bg-[#0a0806] border border-[#2e241c] rounded p-3 text-[#f3ede4] focus:outline-none focus:border-primary/50"
                />
              </div>
              <div>
                <label className="block text-xs font-bold tracking-widest text-[#a19282] uppercase mb-2">ORGANIZATION</label>
                <input 
                  type="text" 
                  defaultValue="Wivern Digital"
                  className="w-full bg-[#0a0806] border border-[#2e241c] rounded p-3 text-[#f3ede4] focus:outline-none focus:border-primary/50"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold tracking-widest text-[#a19282] uppercase mb-2">BIO</label>
              <textarea 
                className="w-full h-32 bg-[#0a0806] border border-[#2e241c] rounded p-3 text-[#f3ede4] focus:outline-none focus:border-primary/50 resize-none leading-relaxed"
                defaultValue="Founder of the Guild of Wivern. Passionate about cinematic storytelling and AI-powered content creation."
              />
            </div>

            <div className="pt-8 border-t border-[#2e241c] flex justify-end">
              <button type="button" className="bg-gradient-to-r from-[#d4af37] to-[#aa832d] text-black px-8 py-3 rounded font-bold text-sm tracking-widest uppercase hover:opacity-90 transition-opacity">
                SAVE CHANGES
              </button>
            </div>

          </form>

        </div>

      </div>

    </div>
  );
}
