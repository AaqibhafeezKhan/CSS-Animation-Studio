const hoverLift = {
  id: '3d-hover-lift',
  name: '3D Hover Lift',
  slug: '3d-hover-lift',
  category: '3d',
  tags: ['3d', 'hover', 'lift', 'perspective'],
  description: 'Lifts and tilts an element toward the viewer on hover.',
  longDescription: 'A subtle 3D interaction using perspective and compound transforms.',
  addedAt: '2026-08-19T00:00:00Z',
  updatedAt: '2026-08-19T00:00:00Z',
  author: 'CSS Motion Master',
  browserSupport: { chrome: 36, firefox: 16, safari: 9, edge: 12 },
  performanceScore: 10,
  complexityScore: 2,
  animatedProperties: ['transform'],
  triggerType: 'hover',
  css: `.hover-lift-3d-el {
  transform: perspective(800px) translateZ(0);
  transition: transform 0.35s ease;
}
.hover-lift-3d-el:hover {
  transform: perspective(800px) translateY(-8px) rotateX(4deg);
}`,
  html: '<div class="hover-lift-3d-el">Lift</div>',
  js: null,
  keyframes: null,
  variants: [],
  relatedIds: ['3d-perspective-tilt', 'hover-lift'],
}
export default hoverLift
