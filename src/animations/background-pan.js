const pan = {
  id: 'background-pan',
  name: 'Background Pan',
  slug: 'background-pan',
  category: 'background',
  tags: ['background', 'gradient', 'pan', 'loop'],
  description: 'Pans a wide gradient continuously across the background.',
  longDescription: 'A smooth background-only motion built from background-position.',
  addedAt: '2026-08-19T00:00:00Z',
  updatedAt: '2026-08-19T00:00:00Z',
  author: 'CSS Motion Master',
  browserSupport: { chrome: 43, firefox: 16, safari: 9, edge: 12 },
  performanceScore: 8,
  complexityScore: 2,
  animatedProperties: ['background-position'],
  triggerType: 'auto',
  css: `@keyframes background-pan {
  to {
    background-position: 200% center;
  }
}
.background-pan-el {
  background: linear-gradient(90deg, #6c63ff, #ee71b6, #6c63ff);
  background-size: 200% 100%;
  animation: background-pan 6s linear infinite;
}`,
  html: '<div class="background-pan-el">Pan</div>',
  js: null,
  keyframes: {
    '0%': { backgroundPosition: '0% center' },
    '100%': { backgroundPosition: '200% center' },
  },
  variants: [],
  relatedIds: ['background-gradient-morph', 'text-shimmer'],
}

export default pan
