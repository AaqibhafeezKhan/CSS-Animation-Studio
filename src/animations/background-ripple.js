const ripple = {
  id: 'background-ripple',
  name: 'Background Ripple',
  slug: 'background-ripple',
  category: 'background',
  tags: ['background', 'ripple', 'radial', 'loop'],
  description: 'Creates repeating radial rings across a background.',
  longDescription: 'A decorative radial-gradient pulse for hero and surface backgrounds.',
  addedAt: '2026-08-19T00:00:00Z',
  updatedAt: '2026-08-19T00:00:00Z',
  author: 'CSS Motion Master',
  browserSupport: { chrome: 43, firefox: 16, safari: 9, edge: 12 },
  performanceScore: 8,
  complexityScore: 2,
  animatedProperties: ['background-size', 'opacity'],
  triggerType: 'auto',
  css: `@keyframes background-ripple {
  0%, 100% {
    background-size: 100% 100%;
    opacity: .85;
  }
  50% {
    background-size: 140% 140%;
    opacity: 1;
  }
}
.background-ripple-el {
  background: radial-gradient(circle, rgba(108,99,255,.35) 0 8%, transparent 9% 100%);
  animation: background-ripple 3s ease-in-out infinite;
}`,
  html: '<div class="background-ripple-el">Ripple</div>',
  js: null,
  keyframes: {
    '0%': { backgroundSize: '100% 100%', opacity: .85 },
    '50%': { backgroundSize: '140% 140%', opacity: 1 },
    '100%': { backgroundSize: '100% 100%', opacity: .85 },
  },
  variants: [],
  relatedIds: ['background-radial-burst', 'loading-pulse'],
}

export default ripple
