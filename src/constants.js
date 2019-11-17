
export const PANEL_TYPES = [
  'intro', 
  'reason', 
  'feature', 
  'results'
];

export const INTRO_BG = 'https://cdn2.hubspot.net/hubfs/5273025/mag/product-finder-hero.jpg';
export const PANEL_BG = 'https://cdn2.hubspot.net/hubfs/5273025/mag/KOI/koi-product-rec-bg.jpg';

export const REASON_OPTIONS = [
  { name: 'Stress / Anxiety', icon: 'https://cdn2.hubspot.net/hubfs/5273025/mag/KOI/stress-icon.png' },
  { name: 'Sleep', icon: 'https://cdn2.hubspot.net/hubfs/5273025/mag/KOI/sleep-icon.png' },
  { name: 'Aches & Pains', icon: 'https://cdn2.hubspot.net/hubfs/5273025/mag/KOI/aches-icon.png' },
  { name: 'Skincare', icon: 'https://cdn2.hubspot.net/hubfs/5273025/mag/KOI/skincare-icon.png' },
  { name: 'Relaxation', icon: 'https://cdn2.hubspot.net/hubfs/5273025/mag/KOI/relax-icon.png' },
  { name: 'General Wellness', icon: 'https://cdn2.hubspot.net/hubfs/5273025/mag/KOI/wellness-icon.png' },
];

export const FEATURE_OPTIONS = [
  'Discreet',
  'Ease of Use',
  'Easy To Bring Along',
  'Topical',
  'Fast Acting',
  'Flavor',
  'Flavorless',
];


export const PRODUCT_ASSOCIATIONS = {
  'Tincture - Flavored': {
    id: [205342, 205366, 205491],
    sku: '',
    reasons: [0, 1, 4, 5],
    features: [1, 2, 5],
    url: '#tincture-flavored',
    description: 'Lorem dolor set amet.',
    image: 'https://cdn2.hubspot.net/hubfs/5273025/mag/KOI/results-fpo.jpg',
    weights: {}
  },
  'Tincture - Unflavored': {
    id: [205502],
    sku: '',
    reasons: [0, 1, 4, 5],
    features: [1, 2, 6],
    url: '#tincture-unflavored',
    description: 'Lorem dolor set amet.',
    image: 'https://cdn2.hubspot.net/hubfs/5273025/mag/KOI/results-fpo.jpg',
    weights: {}
  },
  'Gummies - Regular or Sour': {
    id: [30240],
    sku: '',
    reasons: [0, 1, 4, 5],
    features: [0, 1, 2, 5],
    url: '#gummies',
    description: 'Lorem dolor set amet.',
    image: 'https://cdn2.hubspot.net/hubfs/5273025/mag/KOI/results-fpo.jpg',
    weights: {}
  },
  'Vape Juice - Flavored': {
    id: [30193, 30198, 30202, 30211, 30217],
    reasons: [0, 4],
    features: [2, 4, 5],
    url: '#vape-flavored',
    description: 'Lorem dolor set amet.',
    image: 'https://cdn2.hubspot.net/hubfs/5273025/mag/KOI/results-fpo.jpg',
    weights: {}
  },
  'Vape Juice - Unflavored': {
    id: [30207],
    sku: '',
    reasons: [0, 4],
    features: [2, 4, 6],
    url: '#vape-flavored',
    description: 'Lorem dolor set amet.',
    image: 'https://cdn2.hubspot.net/hubfs/5273025/mag/KOI/results-fpo.jpg',
    weights: {}
  },
  'Healing Balm': {
    id: [424649, 503515],
    reasons: [2],
    features: [3],
    url: '#healing-balm',
    description: 'Lorem dolor set amet.',
    image: 'https://cdn2.hubspot.net/hubfs/5273025/mag/KOI/results-fpo.jpg',
    weights: {}
  },
  'Lavender Lotion' : {
    id: [559149],
    reasons: [3],
    features: [3],
    url: '#lavendar-lotion',
    description: 'Lorem dolor set amet.',
    image: 'https://cdn2.hubspot.net/hubfs/5273025/mag/KOI/results-fpo.jpg',
    weights: {}
  }
};

export const PET_PRODUCT_ASSOCIATIONS = {
  'Pet Spray' : {
    id: '',
    sku: 'PETSPRY',
  },
  'Soft Pet Chews' : {
    id: '',
    sku: 'KPTSCHEWS',
  },
};


const transition = {
  duration: 0.4,
  ease: 'easeInOut',
};

export const MOTION_VARIANTS = {
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
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  exit: direction => {
    
    return {
      x: direction === 'next' ? -window.innerWidth : window.innerWidth,
      zIndex: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut'
      },
      transitionEnd: {
        display: 'none'
      },
    };
  },
};
