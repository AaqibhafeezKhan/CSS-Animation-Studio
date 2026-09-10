const jello = {
  id: 'keyframe-jello',
  name: 'Jello',
  slug: 'jello',
  category: 'keyframe',
  tags: ['jello', 'skew', 'elastic', 'wiggle', 'playful'],
  description: 'Jelly-like wobble using alternating skew transforms.',
  longDescription: 'A jelly-like animation that uses skewX and skewY to create a wobbly, gelatinous motion. The skew values decrease over time to simulate damped oscillation, creating a natural physical feel. Perfect for playful UI elements that need personality.',
  addedAt: '2024-01-14T00:00:00Z',
  updatedAt: '2024-03-15T00:00:00Z',
  author: 'CSS Motion Master',
  browserSupport: { chrome: 43, firefox: 16, safari: 9, edge: 12 },
  performanceScore: 10,
  complexityScore: 2,
  animatedProperties: ['transform'],
  triggerType: 'auto',
  css: `@keyframes jello {
  0%, 11.1%, 100% { transform: none; }
  22.2% { transform: skewX(-12.5deg) skewY(-12.5deg); }
  33.3% { transform: skewX(6.25deg) skewY(6.25deg); }
  44.4% { transform: skewX(-3.125deg) skewY(-3.125deg); }
  55.5% { transform: skewX(1.5625deg) skewY(1.5625deg); }
  66.6% { transform: skewX(-0.78125deg) skewY(-0.78125deg); }
  77.7% { transform: skewX(0.390625deg) skewY(0.390625deg); }
  88.8% { transform: skewX(-0.1953125deg) skewY(-0.1953125deg); }
}

.jello-el {
  animation: jello 0.9s ease-in-out;
  display: inline-block;
  transform-origin: center bottom;
}`,
  html: `<div class="jello-el">Jello</div>`,
  js: null,
  keyframes: {
    '0%': { transform: 'none' },
    '22.2%': { transform: 'skewX(-12.5deg) skewY(-12.5deg)' },
    '33.3%': { transform: 'skewX(6.25deg) skewY(6.25deg)' },
    '44.4%': { transform: 'skewX(-3.125deg) skewY(-3.125deg)' },
    '100%': { transform: 'none' }
  },
  variants: [
    { name: 'Fast', css: `@keyframes jello { 0%, 11.1%, 100% { transform: none; } 22.2% { transform: skewX(-12.5deg) skewY(-12.5deg); } 33.3% { transform: skewX(6.25deg) skewY(6.25deg); } 44.4% { transform: skewX(-3.125deg) skewY(-3.125deg); } 55.5% { transform: skewX(1.5625deg) skewY(1.5625deg); } 88.8% { transform: none; } } .jello-el { animation: jello 0.4s ease-in-out; display: inline-block; transform-origin: center bottom; }` },
    { name: 'Loop', css: `@keyframes jello { 0%, 11.1%, 100% { transform: none; } 22.2% { transform: skewX(-12.5deg) skewY(-12.5deg); } 33.3% { transform: skewX(6.25deg) skewY(6.25deg); } 44.4% { transform: skewX(-3.125deg) skewY(-3.125deg); } 55.5% { transform: skewX(1.5625deg) skewY(1.5625deg); } 88.8% { transform: none; } } .jello-el { animation: jello 0.9s ease-in-out infinite; display: inline-block; transform-origin: center bottom; }` },
  ],
  relatedIds: ['keyframe-rubber-band', 'keyframe-wobble', 'keyframe-shake'],
}
export default jello
