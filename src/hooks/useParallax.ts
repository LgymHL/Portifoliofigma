import { useEffect, useRef } from "react";

export function useParallax(strength = 40) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const el = ref.current;
    if (!el) return;

    function onScroll() {
      const rect = el!.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const vp = window.innerHeight / 2;
      const ratio = (center - vp) / vp;
      const clamped = Math.max(-1, Math.min(1, ratio));
      el!.style.transform = `translateY(${clamped * strength}px)`;
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [strength]);

  return ref;
}
