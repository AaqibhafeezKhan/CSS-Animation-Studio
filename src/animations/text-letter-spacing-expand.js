const letterSpacingExpand = {
  id: 'text-letter-spacing-expand',
  name: 'Letter Spacing Expand',
  slug: 'letter-spacing-expand',
  category: 'text',
  tags: ['letter-spacing', 'expand', 'reveal', 'title', 'cinematic'],
  description: 'Letters expand outward from center with growing letter-spacing.',
  longDescription: 'Creates a cinematic title reveal by animating letter-spacing from 0 to a large value while fading in from 0 opacity. The letters push apart as they become visible, creating a dramatic entrance typical of movie intro sequences and luxury brand reveals.',
  addedAt: '2024-01-25T00:00:00Z',
  updatedAt: '2024-03-15T00:00:00Z',
  author: 'CSS Motion Master',
  browserSupport: { chrome: 43, firefox: 16, safari: 9, edge: 12 },
  performanceScore: 5,
  complexityScore: 1,
  animatedProperties: ['letter-spacing', 'opacity'],
  triggerType: 'auto',
  css: `@keyframes letterExpand {
  from {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  to {
    letter-spacing: 0.3em;
    opacity: 1;
  }
}

.letter-spacing-expand-el {
  font-size: 2rem;
  font-weight: 700;
  animation: letterExpand 1.2s cubic-bezier(0.2, 0.6, 0.4, 1) both;
  display: block;
  text-align: center;
}`,
  html: `<span class="letter-spacing-expand-el">MOTION</span>`,
  js: null,
  keyframes: {
    '0%': { letterSpacing: '-0.5em', opacity: '0' },
    '100%': { letterSpacing: '0.3em', opacity: '1' }
  },
  variants: [
    { name: 'Slow', css: `@keyframes letterExpand { from { letter-spacing: -0.5em; opacity: 0; } 40% { opacity: 0.6; } to { letter-spacing: 0.3em; opacity: 1; } } .letter-spacing-expand-el { font-size: 2rem; font-weight: 700; animation: letterExpand 2.5s cubic-bezier(0.2, 0.6, 0.4, 1) both; display: block; text-align: center; }` },
    { name: 'Wide', css: `@keyframes letterExpand { from { letter-spacing: -0.5em; opacity: 0; } 40% { opacity: 0.6; } to { letter-spacing: 0.6em; opacity: 1; } } .letter-spacing-expand-el { font-size: 2rem; font-weight: 700; animation: letterExpand 1.2s cubic-bezier(0.2, 0.6, 0.4, 1) both; display: block; text-align: center; }` },
  ],
  relatedIds: ['text-fade-words', 'text-wave-chars', 'scroll-reveal-clip'],
}
export default letterSpacingExpand
