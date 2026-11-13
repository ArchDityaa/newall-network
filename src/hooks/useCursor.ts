// src/hooks/useCursor.ts
import { useEffect, useState, useCallback, useRef } from 'react';

const CURSOR_MODES = ['default', 'pointer', 'text', 'grab', 'grabbing'] as const;
type CursorMode = typeof CURSOR_MODES[number];

export function useCursor() {
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const visibleRef = useRef<boolean>(false);
  const [, forceUpdate] = useState(0);
  const [mode, setMode] = useState('default' as CursorMode);
  const rafRef = useRef<number | null>(null);
  const targetRef = useRef({ x: 0, y: 0 });

  const setVisible = useCallback((v: boolean) => {
    visibleRef.current = v;
    forceUpdate(n => n + 1);
  }, []);

  const updatePosition = useCallback(() => {
    const dx = targetRef.current.x - position.x;
    const dy = targetRef.current.y - position.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance > 0.5) {
      setPosition((prev) => ({
        x: prev.x + dx * 0.15,
        y: prev.y + dy * 0.15,
      }));
    }
    rafRef.current = requestAnimationFrame(updatePosition);
  }, [position]);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
      if (!visibleRef.current) setVisible(true);
    };

    const handleLeave = () => setVisible(false);
    const handleEnter = () => setVisible(true);

    window.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseleave', handleLeave);
    document.addEventListener('mouseenter', handleEnter);

    rafRef.current = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseleave', handleLeave);
      document.removeEventListener('mouseenter', handleEnter);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [updatePosition]);

  const setCursorMode = useCallback((newMode: CursorMode) => {
    setMode(newMode);
  }, []);

  return { position, get visible() { return visibleRef.current; }, mode, setCursorMode };
}