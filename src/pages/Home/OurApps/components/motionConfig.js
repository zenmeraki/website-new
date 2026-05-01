/**
 * 🎬 motionConfig.js
 * -----------------------------------------------------------------------------
 * Global motion design tokens for Zen Meraki’s UI system.
 *
 * Purpose:
 * - Centralize all easing, duration, and spring physics parameters.
 * - Ensure smooth, cinematic, and consistent animation behavior.
 * - Serve as a design language bridge between Framer Motion and CSS transitions.
 * -----------------------------------------------------------------------------
 */

export const motionConfig = {
  // 🌈 Fade + upward reveal (used by titles, cards, sections)
  fadeUp: {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: (delay = 0) => ({
      delay,
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    }),
  },

  // ⚡ Simple fade-in (for small UI or secondary text)
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: (delay = 0) => ({
      delay,
      duration: 0.45,
      ease: [0.42, 0, 0.58, 1],
    }),
  },

  // 🪄 Scale-in (used for app cards or icons)
  scaleIn: {
    initial: { opacity: 0, scale: 0.96 },
    animate: { opacity: 1, scale: 1 },
    transition: (delay = 0) => ({
      delay,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    }),
  },

  // 💫 Parent-child staggered entrance
  stagger: (staggerDelay = 0.08) => ({
    animate: { transition: { staggerChildren: staggerDelay } },
  }),

  // 🧮 Shared easing tokens
  easing: {
    soft: [0.25, 0.1, 0.25, 1],       // default easing (used site-wide)
    sharp: [0.83, 0, 0.17, 1],        // snappy UI transitions
    bounce: [0.34, 1.56, 0.64, 1],    // playful entry or hover effects
    swift: [0.4, 0, 0.2, 1],          // general UI transition curve
  },

  // 🕒 Timing constants (seconds)
  duration: {
    short: 0.3,
    medium: 0.6,
    long: 1.2,
  },

  // 🌿 Spring physics presets (for natural motion)
  spring: {
    gentle: {
      type: "spring",
      stiffness: 120,
      damping: 20,
      mass: 1,
      restDelta: 0.001,
    },
    smooth: {
      type: "spring",
      stiffness: 170,
      damping: 26,
      restDelta: 0.002,
    },
    snappy: {
      type: "spring",
      stiffness: 220,
      damping: 18,
      restDelta: 0.001,
    },
    bounce: {
      type: "spring",
      stiffness: 240,
      damping: 12,
      restDelta: 0.001,
    },
  },
};