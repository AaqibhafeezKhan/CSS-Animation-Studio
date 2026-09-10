const scaleUp = {
  id: 'hover-scale-up',
  name: 'Scale Up',
  slug: 'scale-up',
  category: 'hover',
  tags: ['scale', 'transform', 'hover', 'subtle', 'interactive'],
  description: 'Element scales up smoothly on hover using CSS transform.',
  longDescription: 'A classic hover interaction that scales an element up when the user hovers over it. Uses transform: scale() which is a composite property and performs at 60fps on the GPU. Ideal for cards, buttons, and interactive tiles.',
  addedAt: '2024-01-01T00:00:00Z',
  updatedAt: '2024-03-15T00:00:00Z',
  author: 'CSS Motion Master',
  browserSupport: { chrome: 36, firefox: 16, safari: 9, edge: 12 },
  performanceScore: 10,
  complexityScore: 1,
  animatedProperties: ['transform'],
  triggerType: 'hover',
  css: `.scale-up-el {
  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
  will-change: transform;
}

.scale-up-el:hover {
  transform: scale(1.08);
}`,
  html: `<div class="scale-up-el">Hover me</div>`,
  js: null,
  keyframes: null,
  variants: [
    { name: 'Subtle', css: `.scale-up-el { transition: transform 0.2s ease; } .scale-up-el:hover { transform: scale(1.03); }` },
    { name: 'Dramatic', css: `.scale-up-el { transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); } .scale-up-el:hover { transform: scale(1.15); }` },
    { name: 'Slow', css: `.scale-up-el { transition: transform 0.6s ease-in-out; } .scale-up-el:hover { transform: scale(1.08); }` },
  ],
  relatedIds: ['hover-shadow-lift', 'hover-rotate-tilt', 'hover-background-sweep'],
}
export default scaleUp
