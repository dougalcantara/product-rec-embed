
// Button show/hide
export const BUTTON_VARIANTS = {
  hide: {
    opacity: 0,
    y: 35,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};


// Fixed top bar variants
export const FIXED_CONTROLS_VARIANTS = {
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 0,
  },
  exit: {
    y: -50,
    opacity: 0,
  },
};


// Panel Content motion
export const CONTENT_MOTION_TRANSITION = {
  delay: 0.35,
  opacity: {
    ease: 'linear',
    duration: 1,
  },
  y: {
    type: 'spring',
    duration: 1,
  },
};
export const CONTENT_MOTION_VARIANTS = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};



// Panel-to-Panel transition
const transition = {
  duration: 0.4,
  ease: 'easeInOut',
};
export const PANEL_MOTION_VARIANTS = {
  initial: direction => {
    let result = { transition };
    if (direction === 'none') {
      result.opacity = 0;
      result.transition = { ease: 'linear', duration: 1 };
    } else {
      result.x = direction === 'next' ? window.innerWidth : -window.innerWidth;
    }
    return { ...result, opacity: 1 };
  },
  animate: {
    x: 0,
    zIndex: 99,
    transition,
  },
  exit: direction => {
    return {
      x: direction === 'next' ? -window.innerWidth : window.innerWidth,
      zIndex: 0,
      transition,
    };
  },
};
