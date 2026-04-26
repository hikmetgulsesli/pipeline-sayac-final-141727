// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Ana Sayaç Ekranı
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface AnaSayacEkraniProps {}

export function AnaSayacEkrani(props: AnaSayacEkraniProps) {
  return (
    <>
      {/*  TopAppBar  */}
      <header className="sticky top-0 z-50 w-full flex justify-between items-center px-8 h-16 bg-[#f8f9fa]/80 dark:bg-slate-900/80 backdrop-blur-[20px] shadow-[0_1px_0_0_rgba(0,0,0,0.05)] dark:shadow-none font-['Inter'] font-medium tracking-tight">
      <div className="text-xl font-bold text-slate-900 dark:text-slate-50 tracking-[-0.02em]">
                  ZenCounter
              </div>
      <div className="flex items-center gap-4">
      <button className="text-blue-600 dark:text-blue-400 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 transition-colors active:scale-95 duration-200 p-2 rounded-full flex items-center justify-center">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'wght' 300"}}>history</span>
      </button>
      <button className="text-blue-600 dark:text-blue-400 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 transition-colors active:scale-95 duration-200 p-2 rounded-full flex items-center justify-center">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'wght' 300"}}>settings</span>
      </button>
      </div>
      </header>
      {/*  Main Content Canvas  */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 pt-4 pb-28">
      {/*  Centerpiece Counter Card  */}
      <div className="w-full max-w-[340px] bg-surface-container-lowest rounded-xl p-10 flex flex-col items-center shadow-[0_20px_40px_rgba(17,24,39,0.06)] relative overflow-hidden">
      {/*  Subtle Asymmetric Ambient Light  */}
      <div className="absolute -top-16 -left-16 w-48 h-48 bg-primary-container rounded-full blur-[60px] opacity-20 pointer-events-none"></div>
      {/*  Main Value Display  */}
      <div className="relative z-10 flex flex-col items-center mt-4 mb-8">
      <span className="text-[72px] font-bold font-display leading-none tracking-tighter bg-gradient-to-br from-primary to-primary-container bg-clip-text text-transparent">
                          5
                      </span>
      <span className="mt-4 font-label text-xs tracking-[0.05em] text-on-surface-variant uppercase">
                          Min: 0, Max: 10
                      </span>
      </div>
      {/*  Action Buttons  */}
      <div className="w-full flex items-center justify-between gap-4 z-10 relative mt-4">
      {/*  Decrease Button  */}
      <button className="flex flex-col items-center justify-center w-16 h-16 bg-surface-container-high rounded-lg text-primary active:scale-95 transition-transform duration-200 group">
      <span className="material-symbols-outlined text-[20px] group-active:opacity-70 transition-opacity" style={{fontVariationSettings: "'wght' 400"}}>remove</span>
      <span className="text-[10px] font-medium mt-1">Azalt</span>
      </button>
      {/*  Increase Button (Primary Hero Interaction)  */}
      <button className="flex flex-col items-center justify-center w-20 h-20 bg-surface-tint rounded-xl text-on-primary shadow-[0_12px_24px_rgba(0,90,194,0.25)] active:scale-95 transition-transform duration-200 group -translate-y-2">
      <span className="material-symbols-outlined text-[32px] group-active:opacity-80 transition-opacity" style={{fontVariationSettings: "'wght' 300"}}>add</span>
      <span className="text-[11px] font-medium mt-1">Artır</span>
      </button>
      {/*  Reset Button  */}
      <button className="flex flex-col items-center justify-center w-16 h-16 bg-surface-container-high rounded-lg text-primary active:scale-95 transition-transform duration-200 group">
      <span className="material-symbols-outlined text-[20px] group-active:opacity-70 transition-opacity" style={{fontVariationSettings: "'wght' 400"}}>restart_alt</span>
      <span className="text-[10px] font-medium mt-1">Sıfırla</span>
      </button>
      </div>
      </div>
      </main>
      {/*  BottomNavBar  */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-6 pb-6 pt-2 bg-white/80 dark:bg-slate-950/80 backdrop-blur-[20px] rounded-t-[24px] border-none shadow-[0_-20px_40px_rgba(17,24,39,0.06)] md:hidden">
      {/*  Active Tab: Counter  */}
      <button className="flex flex-col items-center justify-center bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-[12px] p-3 active:scale-90 transition-all duration-200 min-w-[72px]">
      <span className="material-symbols-outlined mb-1" style={{fontVariationSettings: "'FILL' 1"}}>exposure</span>
      <span className="font-['Inter'] text-[10px] font-medium tracking-[0.05em] uppercase">Counter</span>
      </button>
      {/*  Inactive Tab: Sessions  */}
      <button className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 p-3 hover:text-blue-500 transition-all active:scale-90 duration-200 min-w-[72px]">
      <span className="material-symbols-outlined mb-1" style={{fontVariationSettings: "'FILL' 0"}}>timer</span>
      <span className="font-['Inter'] text-[10px] font-medium tracking-[0.05em] uppercase">Sessions</span>
      </button>
      {/*  Inactive Tab: Preferences  */}
      <button className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 p-3 hover:text-blue-500 transition-all active:scale-90 duration-200 min-w-[72px]">
      <span className="material-symbols-outlined mb-1" style={{fontVariationSettings: "'FILL' 0"}}>tune</span>
      <span className="font-['Inter'] text-[10px] font-medium tracking-[0.05em] uppercase">Preferences</span>
      </button>
      </nav>
    </>
  );
}
