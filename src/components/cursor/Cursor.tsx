// src/components/cursor/Cursor.tsx
import { useCursor } from '@hooks/useCursor';

export function Cursor() {
  const { position, visible } = useCursor();
  
  if (typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }
  
  const prefersReducedMotion = typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (prefersReducedMotion) {
    return null;
  }
  
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .cur { pointer-events: none; z-index: 9999; }
            .cur-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--color-paper); mix-blend-mode: difference; transform: translate(-50%, -50%); }
            .cur-trail { width: 8px; height: 8px; border-radius: 50%; background: var(--color-lime); mix-blend-mode: difference; opacity: 0.4; transform: translate(-50%, -50%); transition: transform 0.1s ease-out; }
          `
        }}
      />
      
      <div
        className="cur cur-dot fixed top-0 left-0"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.2s ease-out',
        }}
        aria-hidden="true"
      />
      
      <div
        className="cur cur-trail fixed top-0 left-0"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
          opacity: visible ? 0.6 : 0,
          transition: 'opacity 0.2s ease-out',
        }}
        aria-hidden="true"
      />
    </>
  );
}