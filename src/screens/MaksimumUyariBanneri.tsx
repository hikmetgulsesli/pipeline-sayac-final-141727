// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Maksimum Uyarı Bannerı
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface MaksimumUyariBanneriProps {}

export function MaksimumUyariBanneri(props: MaksimumUyariBanneriProps) {
  return (
    <>
      {/*  TopAppBar from JSON  */}
      <header className="sticky top-0 z-50 w-full flex justify-between items-center px-8 h-16 bg-[#f8f9fa]/80 dark:bg-slate-900/80 backdrop-blur-[20px] shadow-[0_1px_0_0_rgba(0,0,0,0.05)] dark:shadow-none docked full-width top-0">
      <div className="text-xl font-bold text-slate-900 dark:text-slate-50 tracking-[-0.02em] font-['Inter']">
                  ZenCounter
              </div>
      <div className="flex items-center gap-4">
      <button className="text-blue-600 dark:text-blue-400 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 transition-colors p-2 rounded-full active:scale-95 duration-200">
      <span className="material-symbols-outlined" data-icon="history" style={{fontVariationSettings: "'FILL' 0"}}>history</span>
      </button>
      <button className="text-blue-600 dark:text-blue-400 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 transition-colors p-2 rounded-full active:scale-95 duration-200">
      <span className="material-symbols-outlined" data-icon="settings" style={{fontVariationSettings: "'FILL' 0"}}>settings</span>
      </button>
      </div>
      </header>
      {/*  Maximum Warning Banner  */}
      <div className="w-full bg-error text-on-error py-3 px-6 flex justify-between items-center z-40 relative shadow-sm">
      <div className="flex items-center gap-3">
      <span className="material-symbols-outlined" data-icon="warning" style={{fontVariationSettings: "'FILL' 1"}}>warning</span>
      <span className="font-body text-sm font-medium">Uyarı: Maksimum sayaç değeri olan 10'a ulaşıldı.</span>
      </div>
      <button className="text-on-error opacity-80 hover:opacity-100 transition-opacity p-1 rounded-full hover:bg-black/10">
      <span className="material-symbols-outlined text-sm" data-icon="close">close</span>
      </button>
      </div>
      {/*  Main Content Area  */}
      <main className="flex-1 flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/*  Background Decor  */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
      <div className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-gradient-to-br from-error-container to-surface-container-low rounded-full blur-[100px] opacity-40 transform translate-y-20"></div>
      </div>
      <div className="z-10 w-full max-w-md flex flex-col items-center gap-16">
      {/*  Metadata Label  */}
      <div className="text-center">
      <span className="font-label text-[0.75rem] text-error uppercase tracking-[0.05em] font-bold bg-error-container/50 px-4 py-2 rounded-full">
                          Hedefe Ulaşıldı
                       </span>
      </div>
      {/*  Counter Display  */}
      <div className="relative w-64 h-64 flex items-center justify-center">
      {/*  Outer subtle ring  */}
      <div className="absolute inset-0 rounded-full border border-error opacity-20"></div>
      {/*  Inner progress ring representation  */}
      <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewbox="0 0 100 100">
      <circle className="text-error" cx="50" cy="50" fill="none" r="48" stroke="currentColor" stroke-dasharray="301.59" stroke-dashoffset="0" stroke-width="2"></circle>
      </svg>
      <div className="text-center">
      <h1 className="font-display text-[72px] font-bold text-error tracking-tighter leading-none" style={{textShadow: "0 10px 30px rgba(186, 26, 26, 0.1)"}}>
                              10
                          </h1>
      <p className="font-body text-sm text-on-surface-variant mt-2 opacity-60">
                              Zikir
                          </p>
      </div>
      </div>
      {/*  Controls  */}
      <div className="flex items-center gap-6">
      {/*  Decrease Button  */}
      <button aria-label="Azalt" className="w-16 h-16 rounded-full bg-surface-container-highest text-primary flex items-center justify-center hover:bg-surface-variant transition-colors active:scale-95">
      <span className="material-symbols-outlined text-3xl" data-icon="remove">remove</span>
      </button>
      {/*  Increase Button (Disabled state)  */}
      <button aria-label="Artır" className="w-24 h-24 rounded-full bg-surface-variant text-on-surface-variant/30 flex items-center justify-center cursor-not-allowed shadow-[0_20px_40px_rgba(17,24,39,0.02)] transition-transform" disabled="">
      <span className="material-symbols-outlined text-4xl" data-icon="add">add</span>
      </button>
      {/*  Reset Button  */}
      <button aria-label="Sıfırla" className="w-16 h-16 rounded-full bg-surface-container-highest text-primary flex items-center justify-center hover:bg-surface-variant transition-colors active:scale-95">
      <span className="material-symbols-outlined text-2xl" data-icon="refresh">refresh</span>
      </button>
      </div>
      </div>
      </main>
      {/*  BottomNavBar from JSON  */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-6 pb-6 pt-2 bg-white/80 dark:bg-slate-950/80 backdrop-blur-[20px] rounded-t-[24px] border-none shadow-[0_-20px_40px_rgba(17,24,39,0.06)] md:hidden">
      {/*  Active Tab: Counter (Assumed based on intent)  */}
      <button className="flex flex-col items-center justify-center bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-[12px] p-3 hover:text-blue-500 transition-all active:scale-90 duration-200">
      <span className="material-symbols-outlined mb-1" data-icon="exposure" style={{fontVariationSettings: "'FILL' 1"}}>exposure</span>
      <span className="font-['Inter'] text-[10px] font-medium tracking-[0.05em] uppercase">Counter</span>
      </button>
      {/*  Inactive Tab: Sessions  */}
      <button className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 p-3 hover:text-blue-500 transition-all active:scale-90 duration-200">
      <span className="material-symbols-outlined mb-1" data-icon="timer" style={{fontVariationSettings: "'FILL' 0"}}>timer</span>
      <span className="font-['Inter'] text-[10px] font-medium tracking-[0.05em] uppercase">Sessions</span>
      </button>
      {/*  Inactive Tab: Preferences  */}
      <button className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 p-3 hover:text-blue-500 transition-all active:scale-90 duration-200">
      <span className="material-symbols-outlined mb-1" data-icon="tune" style={{fontVariationSettings: "'FILL' 0"}}>tune</span>
      <span className="font-['Inter'] text-[10px] font-medium tracking-[0.05em] uppercase">Preferences</span>
      </button>
      </nav>
      {/*  Web Navigation Placeholder (Hidden on mobile)  */}
      <div className="hidden md:flex flex-col gap-2 p-6 w-64 bg-surface-container-low border-none h-screen fixed left-0 top-16 z-40">
      {/*  Active Tab  */}
      <button className="flex items-center gap-3 bg-blue-50 text-blue-700 p-3 rounded-xl transition-all">
      <span className="material-symbols-outlined" data-icon="exposure" style={{fontVariationSettings: "'FILL' 1"}}>exposure</span>
      <span className="font-['Inter'] text-sm font-medium tracking-tight">Counter</span>
      </button>
      {/*  Inactive Tabs  */}
      <button className="flex items-center gap-3 text-slate-500 p-3 rounded-xl hover:bg-slate-100 transition-all">
      <span className="material-symbols-outlined" data-icon="timer">timer</span>
      <span className="font-['Inter'] text-sm font-medium tracking-tight">Sessions</span>
      </button>
      <button className="flex items-center gap-3 text-slate-500 p-3 rounded-xl hover:bg-slate-100 transition-all">
      <span className="material-symbols-outlined" data-icon="tune">tune</span>
      <span className="font-['Inter'] text-sm font-medium tracking-tight">Preferences</span>
      </button>
      </div>
      {/*  Padding for fixed web nav to ensure content isn't hidden  */}
      <style>
              @media (min-width: 768px) {
                  main {
                      padding-left: 16rem; /* Width of the side nav */
                  }
              }
          </style>
    </>
  );
}
