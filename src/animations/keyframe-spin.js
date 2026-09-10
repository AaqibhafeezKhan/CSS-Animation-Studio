const spin = {
  id: 'keyframe-spin',
  name: 'Spin',
  slug: 'spin',
  category: 'keyframe',
  tags: ['spin', 'rotate', 'loop', 'loading', 'continuous'],
  description: 'Continuous 360-degree rotation animation using @keyframes.',
  longDescription: 'A fundamental animation that rotates an element continuously using @keyframes. Composite-only property (transform) ensures buttery 60fps performance. Commonly used for loading indicators, icons, and decorative elements.',
  addedAt: '2024-01-07T00:00:00Z',
  updatedAt: '2024-03-15T00:00:00Z',
  author: 'CSS Motion Master',
  browserSupport: { chrome: 43, firefox: 16, safari: 9, edge: 12 },
  performanceScore: 10,
  complexityScore: 1,
  animatedProperties: ['transform'],
  triggerType: 'auto',
  css: `@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.spin-el {
  animation: spin 1s linear infinite;
  will-change: transform;
  display: inline-block;
}`,
  html: `<div class="spin-el">Spin</div>`,
  js: null,
  keyframes: { '0%': { transform: 'rotate(0deg)' }, '100%': { transform: 'rotate(360deg)' } },
  variants: [
    { name: 'Slow', css: `@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } } .spin-el { animation: spin 3s linear infinite; display: inline-block; }` },
    { name: 'Fast', css: `@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } } .spin-el { animation: spin 0.4s linear infinite; display: inline-block; }` },
    { name: 'Reverse', css: `@keyframes spin { from { transform: rotate(360deg); } to { transform: rotate(0deg); } } .spin-el { animation: spin 1s linear infinite; display: inline-block; }` },
  ],
  relatedIds: ['loading-spinner-arc', 'keyframe-float', 'loading-dot-cascade'],
}
export default spin
