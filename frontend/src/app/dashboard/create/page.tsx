import { Sparkles, FileText, User, Mic, MonitorPlay, Zap, Eye, Download, Upload, ChevronRight, ChevronLeft } from "lucide-react";

export default function CreateVideoPage() {
  const steps = [
    { name: "Script", icon: FileText, active: true },
    { name: "Avatar", icon: User, active: false },
    { name: "Voice", icon: Mic, active: false },
    { name: "Scene", icon: MonitorPlay, active: false },
    { name: "Generate", icon: Zap, active: false },
    { name: "Preview", icon: Eye, active: false },
    { name: "Export", icon: Download, active: false },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      
      {/* Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 text-primary text-xs font-bold tracking-widest uppercase mb-2">
          <Sparkles className="w-3 h-3" /> THE RITUAL CHAMBER
        </div>
        <h1 className="text-3xl font-serif text-white mb-2">CREATE NEW VIDEO</h1>
        <p className="text-[#a19282]">
          Follow the seven sacred steps to summon your cinematic avatar video.
        </p>
      </div>

      {/* Stepper */}
      <div className="flex items-center justify-between mb-12 relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[1px] bg-[#2e241c] z-0" />
        
        {steps.map((step, i) => (
          <div key={step.name} className="relative z-10 flex flex-col items-center gap-3">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${
              step.active ? 'border-primary bg-[#14100c] text-primary' : 'border-[#2e241c] bg-[#0c0a08] text-[#a19282]'
            }`}>
              <step.icon className="w-5 h-5" />
            </div>
            <span className={`text-xs font-bold ${step.active ? 'text-primary' : 'text-[#a19282]'}`}>
              {step.name}
            </span>
          </div>
        ))}
      </div>

      {/* Main Card */}
      <div className="bg-[#14100c] border border-[#2e241c] rounded-xl p-8 mb-8">
        <h2 className="font-serif font-bold text-lg tracking-widest text-[#f3ede4] uppercase mb-2">SCRIPT INPUT</h2>
        <p className="text-[#a19282] text-sm mb-6">
          Write your narrative or let the guild scribes craft one for you.
        </p>

        <div className="flex gap-8">
          
          {/* Left: Script Box */}
          <div className="flex-1">
            <div className="text-xs font-bold tracking-widest text-[#a19282] uppercase mb-3">YOUR SCRIPT</div>
            <textarea 
              className="w-full h-64 bg-[#0a0806] border border-[#2e241c] rounded-lg p-5 text-[#f3ede4] placeholder-[#a19282] focus:outline-none focus:border-primary/50 resize-none font-serif leading-relaxed"
              placeholder="Start typing your script..."
              defaultValue="Welcome to the Guild of Wivern, where your story is crafted with the precision of a master artisan and the power of modern alchemy..."
            />
            <div className="flex justify-between items-center mt-3 text-xs text-[#a19282]">
              <span>133 characters</span>
              <span>~1 min read</span>
            </div>
          </div>

          {/* Right: Settings */}
          <div className="w-64 flex-shrink-0 flex flex-col gap-6">
            
            <div>
              <div className="text-xs font-bold tracking-widest text-[#a19282] uppercase mb-3">TONE</div>
              <select className="w-full bg-[#0a0806] border border-[#2e241c] rounded-lg p-3 text-[#f3ede4] focus:outline-none focus:border-primary/50 appearance-none cursor-pointer">
                <option>Cinematic & Dark</option>
                <option>Professional</option>
                <option>Epic / Trailer</option>
                <option>Narrative</option>
              </select>
            </div>

            <div>
              <div className="text-xs font-bold tracking-widest text-[#a19282] uppercase mb-3">DURATION</div>
              <select className="w-full bg-[#0a0806] border border-[#2e241c] rounded-lg p-3 text-[#f3ede4] focus:outline-none focus:border-primary/50 appearance-none cursor-pointer">
                <option>30 seconds</option>
                <option>60 seconds</option>
                <option>2 minutes</option>
                <option>Custom</option>
              </select>
            </div>

            <div className="pt-4 border-t border-[#2e241c] flex flex-col gap-3">
              <button className="w-full bg-transparent border border-primary/50 text-primary py-3 rounded-lg text-sm font-bold flex items-center justify-center gap-2 hover:bg-primary/5 transition-colors">
                <Sparkles className="w-4 h-4" /> Generate with AI Scribes
              </button>
              <button className="w-full bg-[#1a1510] border border-[#2e241c] text-[#f3ede4] py-3 rounded-lg text-sm font-bold flex items-center justify-center gap-2 hover:bg-[#241d17] transition-colors">
                <Upload className="w-4 h-4" /> Import from File
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* Footer Navigation */}
      <div className="flex items-center justify-between mt-8 border-t border-[#2e241c] pt-8">
        <button className="flex items-center gap-2 text-[#a19282] opacity-50 cursor-not-allowed text-sm font-bold uppercase tracking-widest">
          <ChevronLeft className="w-5 h-5" /> Previous
        </button>
        
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary" />
          <div className="w-2 h-2 rounded-full bg-[#2e241c]" />
          <div className="w-2 h-2 rounded-full bg-[#2e241c]" />
          <div className="w-2 h-2 rounded-full bg-[#2e241c]" />
          <div className="w-2 h-2 rounded-full bg-[#2e241c]" />
          <div className="w-2 h-2 rounded-full bg-[#2e241c]" />
          <div className="w-2 h-2 rounded-full bg-[#2e241c]" />
        </div>

        <button className="flex items-center gap-2 bg-gradient-to-r from-[#d4af37] to-[#aa832d] text-black px-6 py-3 rounded text-sm font-bold uppercase tracking-widest hover:opacity-90 transition-opacity">
          CONTINUE <ChevronRight className="w-5 h-5" />
        </button>
      </div>

    </div>
  );
}
