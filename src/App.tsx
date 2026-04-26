import { useReducer, useCallback } from 'react';
import {
  CounterState,
  CounterAction,
  createCounterState,
  counterReducer,
  DEFAULT_COUNTER_MAX,
  DEFAULT_COUNTER_MIN,
} from './types/counter';

export default function App() {
  const [state, dispatch] = useReducer(counterReducer, createCounterState());

  const increment = useCallback(() => dispatch({ type: 'INCREMENT' }), []);
  const decrement = useCallback(() => dispatch({ type: 'DECREMENT' }), []);
  const reset = useCallback(() => dispatch({ type: 'RESET' }), []);

  const isEmpty = state.value === DEFAULT_COUNTER_MIN;
  const showWarning = state.hasReachedMax && !state.isWarningDismissed;

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--color-background)' }}>
      {/* Top App Bar */}
      <header
        className="sticky top-0 z-50 w-full flex justify-between items-center px-6 md:px-8 h-16 backdrop-blur-[20px]"
        style={{
          backgroundColor: 'rgba(248,249,250,0.8)',
          boxShadow: '0 1px 0 0 rgba(0,0,0,0.05)',
        }}
      >
        <div
          className="text-xl font-bold tracking-[-0.02em]"
          style={{ fontFamily: 'var(--font-headline)', color: 'var(--color-on-surface)' }}
        >
          ZenCounter
        </div>
        <div className="flex items-center gap-3">
          <button
            aria-label="Geçmiş"
            className="p-2 rounded-full transition-colors duration-200 active:scale-95 cursor-pointer"
            style={{ color: 'var(--color-primary)' }}
            onClick={() => { /* TODO: implement history view */ }}
          >
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'wght' 300" }}>
              history
            </span>
          </button>
          <button
            aria-label="Ayarlar"
            className="p-2 rounded-full transition-colors duration-200 active:scale-95"
            style={{ color: 'var(--color-primary)' }}
          >
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'wght' 300" }}>
              settings
            </span>
          </button>
        </div>
      </header>

      {/* Max Warning Banner */}
      {showWarning && (
        <div
          className="w-full py-3 px-6 flex justify-between items-center z-40 relative"
          style={{
            backgroundColor: 'var(--color-error)',
            color: 'var(--color-on-error)',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          }}
        >
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
              warning
            </span>
            <span className="text-sm font-medium" style={{ fontFamily: 'var(--font-body)' }}>
              Uyarı: Maksimum sayaç değeri olan {DEFAULT_COUNTER_MAX}&apos;e ulaşıldı.
            </span>
          </div>
          <button
            aria-label="Uyarıyı kapat"
            className="opacity-80 hover:opacity-100 transition-opacity p-1 rounded-full"
            onClick={() => dispatch({ type: 'DISMISS_WARNING' })}
          >
            <span className="material-symbols-outlined text-sm">close</span>
          </button>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 pt-4 pb-28 md:pb-12">
        <div
          className="w-full max-w-[380px] rounded-xl p-8 md:p-10 flex flex-col items-center relative overflow-hidden"
          style={{
            backgroundColor: 'var(--color-surface-container-lowest)',
            boxShadow: '0 20px 40px rgba(17,24,39,0.06)',
          }}
        >
          {/* Ambient light effect */}
          <div
            className="absolute -top-16 -left-16 w-48 h-48 rounded-full blur-[60px] opacity-20 pointer-events-none"
            style={{ backgroundColor: 'var(--color-primary-container)' }}
          />

          {/* Counter Display */}
          <div className="relative z-10 flex flex-col items-center mt-4 mb-8">
            {isEmpty ? (
              <>
                <span
                  className="font-extrabold leading-none tracking-tighter block mb-4"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '120px',
                    color: 'var(--color-on-surface)',
                    opacity: 0.2,
                  }}
                >
                  0
                </span>
                <div
                  className="px-4 py-1.5 rounded-full inline-flex items-center gap-2 mb-2"
                  style={{ backgroundColor: 'color-mix(in srgb, var(--color-primary) 10%, transparent)' }}
                >
                  <span className="material-symbols-outlined text-sm" style={{ color: 'var(--color-primary)' }}>
                    info
                  </span>
                  <span
                    className="text-xs font-semibold uppercase tracking-[0.05em]"
                    style={{ fontFamily: 'var(--font-label)', color: 'var(--color-primary)' }}
                  >
                    Boş Durum
                  </span>
                </div>
                <h2
                  className="text-2xl font-semibold mb-2"
                  style={{ fontFamily: 'var(--font-headline)', color: 'var(--color-on-surface)' }}
                >
                  Sayaç sıfır.
                </h2>
                <p
                  className="text-base max-w-xs mx-auto leading-relaxed text-center"
                  style={{ fontFamily: 'var(--font-body)', color: 'var(--color-on-surface-variant)' }}
                >
                  Artırmak için aşağıdaki &apos;Artır&apos; butonuna tıklayın. Yeni bir seans başlatmaya hazırsınız.
                </p>
              </>
            ) : (
              <>
                <span
                  className="text-[72px] font-bold leading-none tracking-tighter"
                  style={{
                    fontFamily: 'var(--font-display)',
                    color: showWarning ? 'var(--color-error)' : 'var(--color-primary)',
                  }}
                >
                  {state.value}
                </span>
                <span
                  className="mt-4 text-xs tracking-[0.05em] uppercase"
                  style={{ fontFamily: 'var(--font-label)', color: 'var(--color-on-surface-variant)' }}
                >
                  Min: {DEFAULT_COUNTER_MIN}, Max: {DEFAULT_COUNTER_MAX}
                </span>
              </>
            )}
          </div>

          {/* Action Buttons */}
          <div className="w-full flex items-center justify-between gap-4 z-10 relative mt-4">
            {/* Decrease Button */}
            <button
              aria-label="Azalt"
              onClick={decrement}
              disabled={isEmpty}
              className="flex flex-col items-center justify-center w-16 h-16 rounded-lg active:scale-95 transition-transform duration-200 group"
              style={{
                backgroundColor: isEmpty ? 'var(--color-surface-dim)' : 'var(--color-surface-container-high)',
                color: isEmpty ? 'var(--color-outline)' : 'var(--color-primary)',
                cursor: isEmpty ? 'not-allowed' : 'pointer',
              }}
            >
              <span
                className="material-symbols-outlined text-[20px] group-active:opacity-70 transition-opacity"
                style={{ fontVariationSettings: "'wght' 400" }}
              >
                remove
              </span>
              <span className="text-[10px] font-medium mt-1" style={{ fontFamily: 'var(--font-label)' }}>
                Azalt
              </span>
            </button>

            {/* Increase Button (Primary) */}
            <button
              aria-label="Artır"
              onClick={increment}
              disabled={showWarning}
              className="flex flex-col items-center justify-center w-20 h-20 rounded-xl active:scale-95 transition-transform duration-200 group -translate-y-2"
              style={{
                backgroundColor: showWarning ? 'var(--color-surface-variant)' : 'var(--color-surface-tint)',
                color: showWarning ? 'var(--color-on-surface-variant)' : 'var(--color-on-primary)',
                boxShadow: showWarning
                  ? 'none'
                  : '0 12px 24px rgba(0,90,194,0.25)',
                cursor: showWarning ? 'not-allowed' : 'pointer',
                opacity: showWarning ? 0.5 : 1,
              }}
            >
              <span
                className="material-symbols-outlined text-[32px] group-active:opacity-80 transition-opacity"
                style={{ fontVariationSettings: "'wght' 300" }}
              >
                add
              </span>
              <span className="text-[11px] font-medium mt-1" style={{ fontFamily: 'var(--font-label)' }}>
                Artır
              </span>
            </button>

            {/* Reset Button */}
            <button
              aria-label="Sıfırla"
              onClick={reset}
              className="flex flex-col items-center justify-center w-16 h-16 rounded-lg active:scale-95 transition-transform duration-200 group"
              style={{
                backgroundColor: 'var(--color-surface-container-high)',
                color: 'var(--color-primary)',
              }}
            >
              <span
                className="material-symbols-outlined text-[20px] group-active:opacity-70 transition-opacity"
                style={{ fontVariationSettings: "'wght' 400" }}
              >
                restart_alt
              </span>
              <span className="text-[10px] font-medium mt-1" style={{ fontFamily: 'var(--font-label)' }}>
                Sıfırla
              </span>
            </button>
          </div>
        </div>
      </main>

      {/* Bottom Navigation (Mobile) */}
      <nav
        className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-6 pb-6 pt-2 backdrop-blur-[20px] rounded-t-[24px]"
        style={{
          backgroundColor: 'rgba(255,255,255,0.8)',
          boxShadow: '0 -20px 40px rgba(17,24,39,0.06)',
        }}
      >
        <button
          className="flex flex-col items-center justify-center rounded-[12px] p-3 active:scale-90 transition-all duration-200 min-w-[72px]"
          style={{ backgroundColor: 'rgba(0,88,190,0.08)', color: 'var(--color-primary)' }}
        >
          <span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: "'FILL' 1" }}>
            exposure
          </span>
          <span
            className="text-[10px] font-medium tracking-[0.05em] uppercase"
            style={{ fontFamily: 'var(--font-label)' }}
          >
            Sayaç
          </span>
        </button>
        <button
          className="flex flex-col items-center justify-center p-3 active:scale-90 transition-all duration-200 min-w-[72px]"
          style={{ color: 'var(--color-outline)' }}
        >
          <span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: "'FILL' 0" }}>
            timer
          </span>
          <span
            className="text-[10px] font-medium tracking-[0.05em] uppercase"
            style={{ fontFamily: 'var(--font-label)' }}
          >
            Seanslar
          </span>
        </button>
        <button
          className="flex flex-col items-center justify-center p-3 active:scale-90 transition-all duration-200 min-w-[72px]"
          style={{ color: 'var(--color-outline)' }}
        >
          <span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: "'FILL' 0" }}>
            tune
          </span>
          <span
            className="text-[10px] font-medium tracking-[0.05em] uppercase"
            style={{ fontFamily: 'var(--font-label)' }}
          >
            Ayarlar
          </span>
        </button>
      </nav>

      {/* Web Navigation (Desktop Sidebar) */}
      <div
        className="hidden md:flex flex-col gap-2 p-6 w-64 fixed left-0 top-16 z-40 h-[calc(100vh-4rem)]"
        style={{ backgroundColor: 'var(--color-surface-container-low)', borderRight: '1px solid var(--color-outline-variant)' }}
      >
        <button
          className="flex items-center gap-3 p-3 rounded-xl transition-all"
          style={{ backgroundColor: 'rgba(0,88,190,0.08)', color: 'var(--color-primary)' }}
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
            exposure
          </span>
          <span className="text-sm font-medium tracking-tight" style={{ fontFamily: 'var(--font-label)' }}>
            Sayaç
          </span>
        </button>
        <button
          className="flex items-center gap-3 p-3 rounded-xl transition-all"
          style={{ color: 'var(--color-outline)' }}
        >
          <span className="material-symbols-outlined">timer</span>
          <span className="text-sm font-medium tracking-tight" style={{ fontFamily: 'var(--font-label)' }}>
            Seanslar
          </span>
        </button>
        <button
          className="flex items-center gap-3 p-3 rounded-xl transition-all"
          style={{ color: 'var(--color-outline)' }}
        >
          <span className="material-symbols-outlined">tune</span>
          <span className="text-sm font-medium tracking-tight" style={{ fontFamily: 'var(--font-label)' }}>
            Ayarlar
          </span>
        </button>
      </div>
    </div>
  );
}
