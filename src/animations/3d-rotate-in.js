const rotateIn = {
  id: '3d-rotate-in',
  name: '3D Rotate In',
  slug: '3d-rotate-in',
  category: '3d',
  tags: ['3d', 'rotate', 'entrance', 'perspective'],
  description: 'Rotates an element into view around its X axis.',
  longDescription: 'A compact 3D entrance using perspective, rotateX, and opacity.',
  addedAt: '2026-08-19T00:00:00Z',
  updatedAt: '2026-08-19T00:00:00Z',
  author: 'CSS Motion Master',
  browserSupport: { chrome: 36, firefox: 16, safari: 9, edge: 12 },
  performanceScore: 9,
  complexityScore: 2,
  animatedProperties: ['transform', 'opacity'],
  triggerType: 'auto',
  css: `@keyframes rotate-in-3d {
  from {
    opacity: 0;
    transform: perspective(700px) rotateX(-55deg);
  }
  to {
    opacity: 1;
    transform: perspective(700px) rotateX(0);
  }
}
.rotate-in-3d-el {
  animation: rotate-in-3d .6s ease both;
}`,
  html: '<div class="rotate-in-3d-el">Rotate in</div>',
  js: null,
  keyframes: {
    '0%': { opacity: 0, transform: 'perspective(700px) rotateX(-55deg)' },
    '100%': { opacity: 1, transform: 'perspective(700px) rotateX(0)' },
  },
  variants: [],
  relatedIds: ['3d-perspective-tilt', 'keyframe-fade'],
}

export default rotateIn
