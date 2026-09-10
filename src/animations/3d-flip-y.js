const flipY = {
  id: '3d-flip-y',
  name: '3D Flip Y',
  slug: '3d-flip-y',
  category: '3d',
  tags: ['3d', 'flip', 'card', 'rotateY'],
  description: 'Flips a card around its vertical axis.',
  longDescription: 'A reusable 3D card flip using perspective and rotateY.',
  addedAt: '2026-08-19T00:00:00Z',
  updatedAt: '2026-08-19T00:00:00Z',
  author: 'CSS Motion Master',
  browserSupport: { chrome: 36, firefox: 16, safari: 9, edge: 12 },
  performanceScore: 9,
  complexityScore: 2,
  animatedProperties: ['transform'],
  triggerType: 'hover',
  css: `.flip-y-el {
  perspective: 1000px;
  transition: transform 0.6s ease;
  transform-style: preserve-3d;
}
.flip-y-el:hover {
  transform: rotateY(180deg);
}`,
  html: '<div class="flip-y-el">Flip</div>',
  js: null,
  keyframes: null,
  variants: [],
  relatedIds: ['3d-card-flip', '3d-cube-rotate'],
}
export default flipY
