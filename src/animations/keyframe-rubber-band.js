const rubberBand = {
  id: 'keyframe-rubber-band',
  name: 'Rubber Band',
  slug: 'rubber-band',
  category: 'keyframe',
  tags: ['rubber', 'elastic', 'stretch', 'squash', 'playful'],
  description: 'Elastic rubber-band stretch and squash using scaleX/scaleY animations.',
  longDescription: 'Simulates the physical behavior of a rubber band being stretched and released. Uses alternating scaleX and scaleY values to create the squash-and-stretch effect central to Disney-style animation principles. Works great for notification pings and interactive confirmations.',
  addedAt: '2024-01-13T00:00:00Z',
  updatedAt: '2024-03-15T00:00:00Z',
  author: 'CSS Motion Master',
  browserSupport: { chrome: 43, firefox: 16, safari: 9, edge: 12 },
  performanceScore: 10,
  complexityScore: 2,
  animatedProperties: ['transform'],
  triggerType: 'auto',
  css: `@keyframes rubberBand {
  0% { transform: scaleX(1) scaleY(1); }
  30% { transform: scaleX(1.25) scaleY(0.75); }
  40% { transform: scaleX(0.75) scaleY(1.25); }
  50% { transform: scaleX(1.15) scaleY(0.85); }
  65% { transform: scaleX(0.95) scaleY(1.05); }
  75% { transform: scaleX(1.05) scaleY(0.95); }
  100% { transform: scaleX(1) scaleY(1); }
}

.rubber-band-el {
  animation: rubberBand 1s ease-in-out;
  display: inline-block;
}`,
  html: `<div class="rubber-band-el">Rubber Band</div>`,
  js: null,
  keyframes: {
    '0%': { transform: 'scaleX(1) scaleY(1)' },
    '30%': { transform: 'scaleX(1.25) scaleY(0.75)' },
    '40%': { transform: 'scaleX(0.75) scaleY(1.25)' },
    '50%': { transform: 'scaleX(1.15) scaleY(0.85)' },
    '65%': { transform: 'scaleX(0.95) scaleY(1.05)' },
    '75%': { transform: 'scaleX(1.05) scaleY(0.95)' },
    '100%': { transform: 'scaleX(1) scaleY(1)' }
  },
  variants: [
    { name: 'Subtle', css: `@keyframes rubberBand { 0% { transform: scale(1); } 30% { transform: scaleX(1.1) scaleY(0.92); } 50% { transform: scaleX(0.95) scaleY(1.06); } 100% { transform: scale(1); } } .rubber-band-el { animation: rubberBand 0.8s ease-in-out; display: inline-block; }` },
    { name: 'Intense', css: `@keyframes rubberBand { 0% { transform: scaleX(1) scaleY(1); } 30% { transform: scaleX(1.4) scaleY(0.6); } 40% { transform: scaleX(0.6) scaleY(1.4); } 50% { transform: scaleX(1.2) scaleY(0.8); } 65% { transform: scaleX(0.9) scaleY(1.1); } 100% { transform: scaleX(1) scaleY(1); } } .rubber-band-el { animation: rubberBand 1.2s ease-in-out; display: inline-block; }` },
  ],
  relatedIds: ['keyframe-jello', 'keyframe-bounce', 'keyframe-wobble'],
}
export default rubberBand
