/**
 * 🎞️ motionVariants.js
 * -----------------------------------------------------------------------------
 * High-level, reusable Framer Motion variant presets.
 * Built using motionConfig.js tokens for unified animation rhythm.
 *
 * Usage:
 * import { variants } from "./motionVariants";
 * <motion.div variants={variants.fadeUp(0.2)} initial="hidden" animate="visible" />
 * -----------------------------------------------------------------------------
 */

import { motionConfig } from "./motionConfig";

// Generate variant objects using base config + delay
export const variants = {
  // 🌈 Fade-up reveal (titles, cards, sections)
  fadeUp: (delay = 0) => ({
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration: motionConfig.duration.medium,
        ease: motionConfig.easing.soft,
      },
    },
  }),

  // ⚡ Simple fade-in (icons, text, etc.)
  fadeIn: (delay = 0) => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay,
        duration: motionConfig.duration.short,
        ease: motionConfig.easing.swift,
      },
    },
  }),

  // 💎 Scale + fade (app cards, buttons, logos)
  scaleIn: (delay = 0) => ({
    hidden: { opacity: 0, scale: 0.96 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay,
        ...motionConfig.spring.gentle,
      },
    },
  }),

  // 💫 Staggered entrance (use on parent motion.div)
  stagger: (staggerDelay = 0.08) => ({
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  }),

  // 🚀 Slide in from left (for modals, panels, CTA bars)
  slideInLeft: (delay = 0) => ({
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay,
        ...motionConfig.spring.smooth,
      },
    },
  }),

  // 🚀 Slide in from right (mirrored variant)
  slideInRight: (delay = 0) => ({
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay,
        ...motionConfig.spring.smooth,
      },
    },
  }),

  

  // 🧘 Fade + slight rotation (playful icon entries)
  fadeRotate: (delay = 0) => ({
    hidden: { opacity: 0, rotate: -8 },
    visible: {
      opacity: 1,
      rotate: 0,
      transition: {
        delay,
        duration: motionConfig.duration.medium,
        ease: motionConfig.easing.bounce,
      },
    },
  }),
};