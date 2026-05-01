import { useEffect, useState } from "react";

/**
 * 🧘‍♀️ usePrefersReducedMotion
 * --------------------------------------------------------------------------
 * Detects if the user has enabled the "Reduce Motion" OS setting.
 * Returns true if motion should be minimized.
 *
 * ✅ React 18 safe — no hydration mismatches.
 * ✅ Subscribes to system preference changes dynamically.
 * ✅ Ideal for disabling animations in AnimatedBackground, cards, etc.
 * --------------------------------------------------------------------------
 */

export const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Ensure window is available (safe for SSR/Next.js)
    if (typeof window === "undefined" || !window.matchMedia) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    // Set initial value
    setPrefersReducedMotion(mediaQuery.matches);

    // Listener for future changes
    const handleChange = (event) => {
      setPrefersReducedMotion(event.matches);
    };

    // Support modern + legacy browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
    } else {
      mediaQuery.addListener(handleChange);
    }

    // Cleanup listener
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  return prefersReducedMotion;
};