import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#010409] py-20 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex flex-col items-center md:items-start gap-2">
                  <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                      <span className="text-xl font-black text-white tracking-tighter uppercase">KRISH.GUPTA</span>
                  </div>
                  <p className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.4em] font-black">END_OF_LINE // SYSTEM_SHUTDOWN</p>
              </div>

              <div className="text-center md:text-right">
                  <p className="text-sm font-bold text-slate-400">Built with React & Tailwind CSS v4</p>
                  <p className="text-[10px] font-mono text-purple-500/50 uppercase tracking-widest mt-1 font-black">Open for Global Opportunities // 2026</p>
              </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
              <span className="text-[9px] font-mono text-slate-700 uppercase tracking-[0.2em]">© {new Date().getFullYear()} ALL_RIGHTS_RESERVED</span>
              <div className="flex gap-8 font-mono text-[9px] text-slate-700 uppercase tracking-widest">
                  <span>LAT: 23.2599° N</span>
                  <span>LON: 77.4126° E</span>
              </div>
          </div>
      </div>

      {/* Decorative HUD background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808003_1px,transparent_1px),linear-gradient(to_bottom,#80808003_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
    </footer>
  );
};

export default Footer;
