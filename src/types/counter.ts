export interface CounterState {
  value: number;
  hasReachedMax: boolean;
  isWarningDismissed: boolean;
  min: number;
  max: number;
}

export type CounterAction =
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'RESET' }
  | { type: 'SET_VALUE'; payload: number }
  | { type: 'DISMISS_WARNING' };

export const DEFAULT_COUNTER_MIN = 0;
export const DEFAULT_COUNTER_MAX = 10;

export function createCounterState(
  initialValue = 0,
  min = DEFAULT_COUNTER_MIN,
  max = DEFAULT_COUNTER_MAX,
): CounterState {
  return {
    value: Math.min(Math.max(initialValue, min), max),
    hasReachedMax: initialValue >= max,
    isWarningDismissed: false,
    min,
    max,
  };
}

export function counterReducer(state: CounterState, action: CounterAction): CounterState {
  switch (action.type) {
    case 'INCREMENT': {
      const next = state.value + 1;
      if (next > state.max) {
        return { ...state, hasReachedMax: true, isWarningDismissed: false };
      }
      return { ...state, value: next, hasReachedMax: next >= state.max, isWarningDismissed: false };
    }
    case 'DECREMENT': {
      const next = Math.max(state.value - 1, state.min);
      return { ...state, value: next, hasReachedMax: next >= state.max };
    }
    case 'RESET':
      return { ...state, value: state.min, hasReachedMax: state.min >= state.max };
    case 'SET_VALUE': {
      const clamped = Math.min(Math.max(action.payload, state.min), state.max);
      return { ...state, value: clamped, hasReachedMax: clamped >= state.max };
    }
    case 'DISMISS_WARNING':
      return { ...state, isWarningDismissed: true };
    default:
      return state;
  }
}
