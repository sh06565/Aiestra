import { ANIMATION_CONFIG } from './constants';

// Framer Motion variants for common animations
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: ANIMATION_CONFIG.DURATION.NORMAL }
};

export const slideUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: ANIMATION_CONFIG.DURATION.NORMAL }
};

export const slideDown = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
  transition: { duration: ANIMATION_CONFIG.DURATION.NORMAL }
};

export const slideLeft = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
  transition: { duration: ANIMATION_CONFIG.DURATION.NORMAL }
};

export const slideRight = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 },
  transition: { duration: ANIMATION_CONFIG.DURATION.NORMAL }
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
  transition: { duration: ANIMATION_CONFIG.DURATION.NORMAL }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Page transition variants
export const pageTransition = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 },
  transition: { duration: ANIMATION_CONFIG.DURATION.SLOW }
};

// Hover animations
export const hoverScale = {
  scale: 1.05,
  transition: { duration: ANIMATION_CONFIG.DURATION.FAST }
};

export const hoverLift = {
  y: -5,
  transition: { duration: ANIMATION_CONFIG.DURATION.FAST }
};

// Loading animations
export const loadingPulse = {
  animate: {
    opacity: [1, 0.5, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const loadingSpin = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "linear"
    }
  }
};
