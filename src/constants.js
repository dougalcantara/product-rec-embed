
export const PANEL_TYPES = [
  'intro', 
  'reason', 
  'feature', 
  'result'
];

export const INTRO_BG = 'https://cdn2.hubspot.net/hubfs/5273025/mag/product-finder-hero.jpg';
export const PANEL_BG = 'https://cdn2.hubspot.net/hubfs/5273025/mag/KOI/koi-product-rec-bg.jpg';

export const REASON_HEADLINE = {
  default: 'Why Are You Looking for CBD?',
  pet: 'Why Are You Looking for CBD for your pet?'
};

export const REASON_OPTIONS = {
  default: [
    { name: 'Stress / Anxiety', icon: 'https://cdn2.hubspot.net/hubfs/5273025/mag/KOI/stress-icon.png' },
    { name: 'Sleep', icon: 'https://cdn2.hubspot.net/hubfs/5273025/mag/KOI/sleep-icon.png' },
    { name: 'Aches & Pains', icon: 'https://cdn2.hubspot.net/hubfs/5273025/mag/KOI/aches-icon.png' },
    { name: 'Skincare', icon: 'https://cdn2.hubspot.net/hubfs/5273025/mag/KOI/skincare-icon.png' },
    { name: 'Relaxation', icon: 'https://cdn2.hubspot.net/hubfs/5273025/mag/KOI/relax-icon.png' },
    { name: 'General Wellness', icon: 'https://cdn2.hubspot.net/hubfs/5273025/mag/KOI/wellness-icon.png' },
  ],
  pet: [
    { name: 'Stress / Anxiety', icon: 'https://cdn2.hubspot.net/hubfs/5273025/mag/KOI/stress-icon.png' },
    { name: 'Aches & Pains', icon: 'https://cdn2.hubspot.net/hubfs/5273025/mag/KOI/aches-icon.png' },
    { name: 'General Wellness', icon: 'https://cdn2.hubspot.net/hubfs/5273025/mag/KOI/wellness-icon.png' },
  ]
};

export const FEATURE_OPTIONS = {
  default: [
    'Discreet',
    'Ease of Use',
    'Easy To Bring Along',
    'Topical',
    'Fast Acting',
    'Flavor',
    'Flavorless',
  ],
  pet: [
    'Convenience',
    'Can be added to pet food or treats',
  ],
};

export const PRODUCT_ASSOCIATIONS = {
  default: {
    'Tincture - Flavored': {
      id: [205342, 205366, 205491],
      sku: '',
      reasons: [0, 1, 4, 5],
      features: [1, 2, 5],
      url: '/cbd-tinctures?flavored=true',
      description: 'Find out why people around the world are using Koi Naturals full-spectrum CBD oils every day to restore balance to their lives.',
      image: 'https://cdn2.hubspot.net/hubfs/5273025/mag/KOI/results-fpo.jpg',
      weights: {}
    },
    'Tincture - Unflavored': {
      id: [205502],
      sku: '',
      reasons: [0, 1, 4, 5],
      features: [1, 2, 6],
      url: '/product/koi-naturals-natural/',
      description: 'Find out why people around the world are using Koi Naturals full-spectrum CBD oils every day to restore balance to their lives.',
      image: 'https://cdn2.hubspot.net/hubfs/5273025/mag/KOI/results-fpo.jpg',
      weights: {}
    },
    'Gummies - Regular or Sour': {
      id: [30240],
      sku: '',
      reasons: [0, 1, 4, 5],
      features: [0, 1, 2, 5],
      url: '/product/cbd-gummies/',
      description: 'CBD edibles with delectable flavors provide an even consistency of CBD to restore balance naturally.',
      image: 'https://cdn2.hubspot.net/hubfs/5273025/mag/KOI/results-fpo.jpg',
      weights: {}
    },
    'Vape Juice - Flavored': {
      id: [30193, 30198, 30202, 30211, 30217],
      reasons: [0, 4],
      features: [2, 4, 5],
      url: '/cbd-vape?flavored=true',
      description: 'Enjoy an even distribution of CBD throughout your day. Vape them on their own or add to other e-liquids. Available in 7 awesome flavors.',
      image: 'https://cdn2.hubspot.net/hubfs/5273025/mag/KOI/results-fpo.jpg',
      weights: {}
    },
    'Vape Juice - Unflavored': {
      id: [30207],
      sku: '',
      reasons: [0, 4],
      features: [2, 4, 6],
      url: '/product/white-koi-cbd/',
      description: 'Enjoy an even distribution of CBD throughout your day. Vape them on their own or add to other e-liquids.',
      image: 'https://cdn2.hubspot.net/hubfs/5273025/mag/KOI/results-fpo.jpg',
      weights: {}
    },
    'Healing Balm': {
      id: [424649, 503515],
      reasons: [2],
      features: [3],
      url: '/cbd-topicals?balm_only=true',
      description: 'Relax and rejuvenate with all-purpose CBD topicals. Perfect for promoting beautiful, naturally healthy skin.',
      image: 'https://cdn2.hubspot.net/hubfs/5273025/mag/KOI/results-fpo.jpg',
      weights: {}
    },
    'Koi Lotion' : {
      id: [559149],
      reasons: [3],
      features: [3],
      url: '/product/lavender-koi/',
      description: 'Relax and rejuvenate with all-purpose CBD topicals. Perfect for promoting beautiful, naturally healthy skin.',
      image: 'https://cdn2.hubspot.net/hubfs/5273025/mag/KOI/results-fpo.jpg',
      weights: {}
    },
  },
  pet: {
    'Pet Spray' : {
      id: [168056],
      sku: 'PETSPRY',
      reasons: [],
      features: [1],
      url: '/product/koi-naturals-pet/',
      description: 'Specially formulated to give your pet nutrition, combined with all the benefits of full-spectrum CBD.',
      image: 'https://cdn2.hubspot.net/hubfs/5273025/mag/KOI/results-fpo.jpg',
      weights: {}
    },
    'Soft Pet Chews' : {
      id: [116376],
      sku: 'KPTSCHEWS',
      reasons: [],
      features: [0],
      url: '/product/koi-cbd-soft-chews/',
      description: 'Specially formulated to give your pet nutrition, combined with all the benefits of full-spectrum CBD.',
      image: 'https://cdn2.hubspot.net/hubfs/5273025/mag/KOI/results-fpo.jpg',
      weights: {}
    },
  },
};
