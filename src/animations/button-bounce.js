const bounce = {
  id: 'button-bounce',
  name: 'Bounce',
  slug: 'button-bounce',
  category: 'button',
  tags: ['button', 'bounce', 'press', 'hover'],
  description: 'Adds a small vertical bounce to a button on hover.',
  longDescription: 'A playful but restrained button response based on translateY.',
  addedAt: '2026-08-19T00:00:00Z',
  updatedAt: '2026-08-19T00:00:00Z',
  author: 'CSS Motion Master',
  browserSupport: { chrome: 36, firefox: 16, safari: 9, edge: 12 },
  performanceScore: 10,
  complexityScore: 1,
  animatedProperties: ['transform'],
  triggerType: 'hover',
  css: `@keyframes button-bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
}
.button-bounce-el:hover {
  animation: button-bounce .35s ease;
}`,
  html: '<button class="button-bounce-el">Hover me</button>',
  js: null,
  keyframes: {
    '0%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-4px)' },
    '100%': { transform: 'translateY(0)' },
  },
  variants: [],
  relatedIds: ['button-press-depth', 'keyframe-bounce'],
}

export default bounce
