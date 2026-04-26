// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Boş Durum Ekranı
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface BosDurumEkraniProps {}

export function BosDurumEkrani(props: BosDurumEkraniProps) {
  return (
    <>
      {/*  TopAppBar (Web & Tablet)  */}
      <header className="hidden md:flex sticky top-0 z-50 w-full justify-between items-center px-8 h-16 bg-[#f8f9fa]/80 backdrop-blur-[20px] shadow-[0_1px_0_0_rgba(0,0,0,0.05)] shadow-sm">
      <div className="flex items-center gap-4">
      <span className="text-xl font-bold text-slate-900 tracking-[-0.02em] font-headline">ZenCounter</span>
      </div>
      <nav className="flex gap-6">
      <a className="text-blue-600 font-bold hover:bg-slate-100/50 transition-colors active:scale-95 duration-200 px-3 py-2 rounded-lg flex items-center gap-2" href="#">
      <span className="material-symbols-outlined">exposure</span>
                      Counter
                  </a>
      <a className="text-slate-500 hover:bg-slate-100/50 transition-colors active:scale-95 duration-200 px-3 py-2 rounded-lg flex items-center gap-2" href="#">
      <span className="material-symbols-outlined">timer</span>
                      Sessions
                  </a>
      <a className="text-slate-500 hover:bg-slate-100/50 transition-colors active:scale-95 duration-200 px-3 py-2 rounded-lg flex items-center gap-2" href="#">
      <span className="material-symbols-outlined">tune</span>
                      Preferences
                  </a>
      </nav>
      <div className="flex items-center gap-4 text-blue-600">
      <button className="hover:bg-slate-100/50 p-2 rounded-full transition-colors active:scale-95">
      <span className="material-symbols-outlined">history</span>
      </button>
      <button className="hover:bg-slate-100/50 p-2 rounded-full transition-colors active:scale-95">
      <span className="material-symbols-outlined">settings</span>
      </button>
      </div>
      </header>
      {/*  Main Content Canvas  */}
      <main className="flex-grow flex flex-col items-center justify-center p-6 md:p-12 mb-24 md:mb-0">
      {/*  Empty State Container  */}
      <div className="w-full max-w-lg flex flex-col items-center justify-center bg-surface-container-lowest rounded-[2rem] p-10 md:p-16 shadow-[0_20px_40px_rgba(17,24,39,0.06)] relative overflow-hidden">
      {/*  Subtle Background Accents  */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-fixed-dim/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary-fixed-dim/20 rounded-full blur-3xl pointer-events-none"></div>
      {/*  The Hero Value (Asymmetric placement hint)  */}
      <div className="mb-8 w-full text-center">
      <span className="font-display font-extrabold text-[120px] leading-none text-on-surface opacity-20 tracking-tighter block mb-4">0</span>
      </div>
      {/*  Contextual Messaging  */}
      <div className="text-center mb-12 flex flex-col items-center gap-4 z-10">
      <div className="bg-primary/10 px-4 py-1.5 rounded-full inline-flex items-center gap-2 mb-2">
      <span className="material-symbols-outlined text-primary text-sm">info</span>
      <span className="font-label text-xs font-semibold text-primary uppercase tracking-[0.05em]">Boş Durum</span>
      </div>
      <h2 className="font-headline text-2xl font-semibold text-on-surface mb-2">Sayaç sıfır.</h2>
      <p className="font-body text-base text-on-surface-variant max-w-xs mx-auto leading-relaxed">
                          Artırmak için aşağıdaki 'Artır' butonuna tıklayın. Yeni bir seans başlatmaya hazırsınız.
                      </p>
      </div>
      {/*  Primary Action  */}
      <button className="z-10 group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-xl font-medium text-lg active:scale-95 transition-all duration-200 shadow-[0_10px_20px_rgba(0,88,190,0.2)] hover:shadow-[0_15px_30px_rgba(0,88,190,0.3)] w-full sm:w-auto">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>add_circle</span>
      <span>Artır</span>
      <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </button>
      </div>
      </main>
      {/*  BottomNavBar (Mobile)  */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-6 pb-6 pt-2 bg-white/80 backdrop-blur-[20px] rounded-t-[24px] shadow-[0_-20px_40px_rgba(17,24,39,0.06)] bg-slate-50">
      <a className="flex flex-col items-center justify-center bg-blue-50 text-blue-700 rounded-[12px] p-3 hover:text-blue-500 transition-all active:scale-90 duration-200 w-16" href="#">
      <span className="material-symbols-outlined mb-1">exposure</span>
      <span className="font-['Inter'] text-[10px] font-medium tracking-[0.05em] uppercase truncate w-full text-center">Counter</span>
      </a>
      <a className="flex flex-col items-center justify-center text-slate-400 p-3 hover:text-blue-500 transition-all active:scale-90 duration-200 w-16" href="#">
      <span className="material-symbols-outlined mb-1">timer</span>
      <span className="font-['Inter'] text-[10px] font-medium tracking-[0.05em] uppercase truncate w-full text-center">Sessions</span>
      </a>
      <a className="flex flex-col items-center justify-center text-slate-400 p-3 hover:text-blue-500 transition-all active:scale-90 duration-200 w-16" href="#">
      <span className="material-symbols-outlined mb-1">tune</span>
      <span className="font-['Inter'] text-[10px] font-medium tracking-[0.05em] uppercase truncate w-full text-center">Prefs</span>
      </a>
      </nav>
    </>
  );
}
