const shapeShift = {
  id: 'svg-shape-shift',
  name: 'Shape Shift',
  slug: 'shape-shift',
  category: 'svg',
  tags: ['shape', 'morph', 'shift', 'polygon', 'transform'],
  description: 'SVG polygon morphs between circle, square, and triangle shapes.',
  longDescription: 'Morphs an SVG polygon points attribute between circle-approximation, square, and triangle configurations using CSS keyframe animation on the points attribute. Browser support requires Blink/Firefox with SVG animation support.',
  addedAt: '2024-02-16T00:00:00Z', updatedAt: '2024-03-15T00:00:00Z', author: 'CSS Motion Master',
  browserSupport: { chrome: 56, firefox: 72, safari: 14, edge: 79 },
  performanceScore: 8, complexityScore: 3, animatedProperties: ['d', 'transform'], triggerType: 'auto',
  css: `@keyframes shapeShift {
  0%, 100% { d: path("M80,10 L150,35 L150,85 L80,110 L10,85 L10,35 Z"); }
  33% { d: path("M80,10 A70,70 0 1,1 79.9,10 Z"); }
  66% { d: path("M20,20 L140,20 L140,100 L20,100 Z"); }
}
.shape-shift-el {
  fill: var(--primary-color);
  animation: shapeShift 4s ease-in-out infinite;
}`,
  html: `<svg width="160" height="120" viewBox="0 0 160 120">
  <path class="shape-shift-el" d="M80,10 L150,35 L150,85 L80,110 L10,85 L10,35 Z"/>
</svg>`,
  js: null, keyframes: null,
  variants: [
    { name: 'Outline', css: `@keyframes shapeShift { 0%,100% { d:path("M80,10 L150,35 L150,85 L80,110 L10,85 L10,35 Z"); } 33% { d:path("M80,10 A70,70 0 1,1 79.9,10 Z"); } 66% { d:path("M20,20 L140,20 L140,100 L20,100 Z"); } } .shape-shift-el { fill:none;stroke:var(--primary-color);stroke-width:3;animation:shapeShift 4s ease-in-out infinite; }` },
    { name: 'Fast', css: `@keyframes shapeShift { 0%,100% { d:path("M80,10 L150,35 L150,85 L80,110 L10,85 L10,35 Z"); } 33% { d:path("M80,10 A70,70 0 1,1 79.9,10 Z"); } 66% { d:path("M20,20 L140,20 L140,100 L20,100 Z"); } } .shape-shift-el { fill:var(--primary-color);animation:shapeShift 2s ease-in-out infinite; }` },
  ],
  relatedIds: ['svg-morphing-blob', 'svg-path-draw', 'morphing-liquid-button'],
}
export default shapeShift
