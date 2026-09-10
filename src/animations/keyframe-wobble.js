const wobble = {
  id: 'keyframe-wobble',
  name: 'Wobble',
  slug: 'wobble',
  category: 'keyframe',
  tags: ['wobble', 'rotation', 'playful', 'attention', 'jiggle'],
  description: 'Playful wobble animation combining rotation and translation.',
  longDescription: 'A fun, playful wobble animation that alternates between rotations and translations to create a jiggling effect. Inspired by Animate.css and ideal for notification badges, alerts, and app icons needing to draw user attention.',
  addedAt: '2024-01-12T00:00:00Z',
  updatedAt: '2024-03-15T00:00:00Z',
  author: 'CSS Motion Master',
  browserSupport: { chrome: 43, firefox: 16, safari: 9, edge: 12 },
  performanceScore: 10,
  complexityScore: 2,
  animatedProperties: ['transform'],
  triggerType: 'auto',
  css: `@keyframes wobble {
  0% { transform: translateX(0%) rotate(0deg); }
  15% { transform: translateX(-20px) rotate(-5deg); }
  30% { transform: translateX(12px) rotate(3deg); }
  45% { transform: translateX(-12px) rotate(-3deg); }
  60% { transform: translateX(8px) rotate(2deg); }
  75% { transform: translateX(-6px) rotate(-1deg); }
  100% { transform: translateX(0%) rotate(0deg); }
}

.wobble-el {
  animation: wobble 1s ease-in-out;
  display: inline-block;
}

.wobble-el:hover {
  animation: wobble 1s ease-in-out;
}`,
  html: `<div class="wobble-el">Wobble</div>`,
  js: null,
  keyframes: {
    '0%': { transform: 'translateX(0%) rotate(0deg)' },
    '15%': { transform: 'translateX(-20px) rotate(-5deg)' },
    '30%': { transform: 'translateX(12px) rotate(3deg)' },
    '45%': { transform: 'translateX(-12px) rotate(-3deg)' },
    '60%': { transform: 'translateX(8px) rotate(2deg)' },
    '75%': { transform: 'translateX(-6px) rotate(-1deg)' },
    '100%': { transform: 'translateX(0%) rotate(0deg)' }
  },
  variants: [
    { name: 'Subtle', css: `@keyframes wobble { 0% { transform: rotate(0deg); } 25% { transform: rotate(-4deg); } 50% { transform: rotate(4deg); } 75% { transform: rotate(-2deg); } 100% { transform: rotate(0deg); } } .wobble-el { animation: wobble 0.8s ease-in-out infinite; display: inline-block; }` },
    { name: 'Fast', css: `@keyframes wobble { 0% { transform: translateX(0%) rotate(0deg); } 15% { transform: translateX(-12px) rotate(-5deg); } 30% { transform: translateX(8px) rotate(3deg); } 50% { transform: translateX(-6px) rotate(-2deg); } 100% { transform: translateX(0%) rotate(0deg); } } .wobble-el { animation: wobble 0.5s ease-in-out infinite; display: inline-block; }` },
  ],
  relatedIds: ['keyframe-jello', 'keyframe-shake', 'keyframe-rubber-band'],
}
export default wobble
