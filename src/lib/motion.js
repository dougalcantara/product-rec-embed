
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