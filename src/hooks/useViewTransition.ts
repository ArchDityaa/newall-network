// src/hooks/useViewTransition.ts
import { useRef, useCallback } from 'react';

export function useViewTransition() {
  const isSupported = typeof document !== 'undefined' && 'startViewTransition' in document;
  const skipNextRef = useRef(false);

  const navigate = useCallback((callback: () => void | Promise<void>) => {
    if (!isSupported || skipNextRef.current) {
      skipNextRef.current = false;
      callback();
      return;
    }
    (document as Document & { startViewTransition: (cb: () => Promise<void>) => { finished: Promise<void> } }).startViewTransition(async () => {
      await callback();
    });
  }, [isSupported]);

  const skipNext = useCallback(() => {
    skipNextRef.current = true;
  }, []);

  return { navigate, skipNext, isSupported };
}