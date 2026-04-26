import { describe, it, expect } from 'vitest';
import {
  createCounterState,
  counterReducer,
  DEFAULT_COUNTER_MIN,
  DEFAULT_COUNTER_MAX,
} from '../types/counter';

describe('Counter types and reducer', () => {
  describe('createCounterState', () => {
    it('creates default state with value 0', () => {
      const state = createCounterState();
      expect(state.value).toBe(0);
      expect(state.min).toBe(DEFAULT_COUNTER_MIN);
      expect(state.max).toBe(DEFAULT_COUNTER_MAX);
      expect(state.hasReachedMax).toBe(false);
    });

    it('clamps initial value to min', () => {
      const state = createCounterState(-5);
      expect(state.value).toBe(DEFAULT_COUNTER_MIN);
    });

    it('clamps initial value to max', () => {
      const state = createCounterState(15);
      expect(state.value).toBe(DEFAULT_COUNTER_MAX);
      expect(state.hasReachedMax).toBe(true);
    });

    it('accepts custom min and max', () => {
      const state = createCounterState(5, 0, 20);
      expect(state.min).toBe(0);
      expect(state.max).toBe(20);
      expect(state.value).toBe(5);
    });
  });

  describe('counterReducer', () => {
    it('increments value', () => {
      const state = createCounterState(5);
      const next = counterReducer(state, { type: 'INCREMENT' });
      expect(next.value).toBe(6);
      expect(next.hasReachedMax).toBe(false);
    });

    it('does not increment past max', () => {
      const state = createCounterState(DEFAULT_COUNTER_MAX);
      const next = counterReducer(state, { type: 'INCREMENT' });
      expect(next.value).toBe(DEFAULT_COUNTER_MAX);
      expect(next.hasReachedMax).toBe(true);
    });

    it('decrements value', () => {
      const state = createCounterState(5);
      const next = counterReducer(state, { type: 'DECREMENT' });
      expect(next.value).toBe(4);
    });

    it('does not decrement below min', () => {
      const state = createCounterState(DEFAULT_COUNTER_MIN);
      const next = counterReducer(state, { type: 'DECREMENT' });
      expect(next.value).toBe(DEFAULT_COUNTER_MIN);
    });

    it('resets to min', () => {
      const state = createCounterState(7);
      const next = counterReducer(state, { type: 'RESET' });
      expect(next.value).toBe(DEFAULT_COUNTER_MIN);
      expect(next.hasReachedMax).toBe(false);
    });

    it('sets value directly', () => {
      const state = createCounterState(3);
      const next = counterReducer(state, { type: 'SET_VALUE', payload: 8 });
      expect(next.value).toBe(8);
    });

    it('clamps SET_VALUE to max', () => {
      const state = createCounterState(3);
      const next = counterReducer(state, { type: 'SET_VALUE', payload: 20 });
      expect(next.value).toBe(DEFAULT_COUNTER_MAX);
      expect(next.hasReachedMax).toBe(true);
    });

    it('clamps SET_VALUE to min', () => {
      const state = createCounterState(3);
      const next = counterReducer(state, { type: 'SET_VALUE', payload: -5 });
      expect(next.value).toBe(DEFAULT_COUNTER_MIN);
    });

    it('marks hasReachedMax when incrementing to max', () => {
      const state = createCounterState(DEFAULT_COUNTER_MAX - 1);
      const next = counterReducer(state, { type: 'INCREMENT' });
      expect(next.value).toBe(DEFAULT_COUNTER_MAX);
      expect(next.hasReachedMax).toBe(true);
    });
  });
});
