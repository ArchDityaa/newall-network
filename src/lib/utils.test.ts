// src/lib/utils.test.ts
import { describe, it, expect, vi } from 'vitest';
import { cn, slugify, formatDate, debounce, throttle } from './utils';

describe('utils', () => {
  describe('cn', () => {
    it('joins class names', () => {
      expect(cn('a', 'b', 'c')).toBe('a b c');
    });

    it('handles conditional classes', () => {
      expect(cn('base', true && 'active', false && 'inactive')).toBe('base active');
    });

    it('handles objects', () => {
      expect(cn({ active: true, inactive: false })).toBe('active');
    });
  });

  describe('slugify', () => {
    it('converts to lowercase', () => {
      expect(slugify('Hello World')).toBe('hello-world');
    });

    it('removes special characters', () => {
      expect(slugify('Hello @ World!')).toBe('hello-world');
    });

    it('handles multiple spaces', () => {
      expect(slugify('Hello    World')).toBe('hello-world');
    });
  });

  describe('formatDate', () => {
    it('formats date in Indonesian', () => {
      const date = new Date('2026-11-13');
      expect(formatDate(date, 'id')).toContain('November');
    });

    it('formats date in English', () => {
      const date = new Date('2026-11-13');
      expect(formatDate(date, 'en')).toContain('November');
    });
  });

  describe('debounce', () => {
    it('delays execution', async () => {
      const fn = vi.fn();
      const debounced = debounce(fn, 50);
      debounced();
      debounced();
      expect(fn).not.toHaveBeenCalled();
      await new Promise((r) => setTimeout(r, 100));
      expect(fn).toHaveBeenCalledTimes(1);
    });
  });

  describe('throttle', () => {
    it('limits execution rate', async () => {
      const fn = vi.fn();
      const throttled = throttle(fn, 50);
      throttled();
      throttled();
      throttled();
      expect(fn).toHaveBeenCalledTimes(1);
      await new Promise((r) => setTimeout(r, 100));
      throttled();
      expect(fn).toHaveBeenCalledTimes(2);
    });
  });
});