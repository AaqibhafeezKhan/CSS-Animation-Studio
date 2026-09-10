const dots = {
  id: 'background-dots-drift',
  name: 'Dots Drift',
  slug: 'dots-drift',
  category: 'background',
  tags: ['background', 'dots', 'drift', 'loop'],
  description: 'Moves a dotted radial pattern horizontally in a slow loop.',
  longDescription: 'A lightweight decorative background motion using repeating-radial-gradient and background-position.',
  addedAt: '2026-08-19T00:00:00Z',
  updatedAt: '2026-08-19T00:00:00Z',
  author: 'CSS Motion Master',
  browserSupport: { chrome: 43, firefox: 16, safari: 9, edge: 12 },
  performanceScore: 8,
  complexityScore: 2,
  animatedProperties: ['background-position'],
  triggerType: 'auto',
  css: `@keyframes dots-drift {
  to {
    background-position: 48px 0;
  }
}
.dots-drift-el {
  background-image: radial-gradient(currentColor 1px, transparent 1px);
  background-size: 24px 24px;
  animation: dots-drift 3s linear infinite;
}`,
  html: '<div class="dots-drift-el">Dots</div>',
  js: null,
  keyframes: {
    '0%': { backgroundPosition: '0 0' },
    '100%': { backgroundPosition: '48px 0' },
  },
  variants: [],
  relatedIds: ['background-mesh-shift', 'background-noise-drift'],
}

export default dots
