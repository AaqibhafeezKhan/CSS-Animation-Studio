const pathDraw = {
  id: 'svg-path-draw',
  name: 'Path Draw',
  slug: 'path-draw',
  category: 'svg',
  tags: ['svg', 'path', 'draw', 'stroke', 'handwriting'],
  description: 'SVG path draws itself using stroke-dasharray and stroke-dashoffset animation.',
  longDescription: 'The classic SVG path drawing technique using stroke-dasharray set to the path total length and animating stroke-dashoffset from the full length to 0. Creates a handwriting or illustration reveal effect. The path length can be retrieved via SVGGeometryElement.getTotalLength().',
  addedAt: '2024-02-13T00:00:00Z', updatedAt: '2024-03-15T00:00:00Z', author: 'CSS Motion Master',
  browserSupport: { chrome: 43, firefox: 16, safari: 9, edge: 12 },
  performanceScore: 9, complexityScore: 2, animatedProperties: ['stroke-dashoffset'], triggerType: 'auto',
  css: `@keyframes drawPath {
  from { stroke-dashoffset: 300; }
  to { stroke-dashoffset: 0; }
}
.path-draw-svg path {
  stroke-dasharray: 300;
  stroke-dashoffset: 300;
  animation: drawPath 2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  fill: none;
  stroke: var(--primary-color);
  stroke-width: 3;
  stroke-linecap: round;
}`,
  html: `<svg class="path-draw-svg" width="200" height="100" viewBox="0 0 200 100">
  <path d="M10,50 Q50,10 100,50 Q150,90 190,50"/>
</svg>`,
  js: null,
  keyframes: { '0%': { strokeDashoffset: '300' }, '100%': { strokeDashoffset: '0' } },
  variants: [
    { name: 'Slow', css: `@keyframes drawPath { from { stroke-dashoffset:300; } to { stroke-dashoffset:0; } } .path-draw-svg path { stroke-dasharray:300;stroke-dashoffset:300;animation:drawPath 4s cubic-bezier(0.4,0,0.2,1) forwards;fill:none;stroke:var(--primary-color);stroke-width:3;stroke-linecap:round; }` },
    { name: 'Thick', css: `@keyframes drawPath { from { stroke-dashoffset:300; } to { stroke-dashoffset:0; } } .path-draw-svg path { stroke-dasharray:300;stroke-dashoffset:300;animation:drawPath 2s ease forwards;fill:none;stroke:var(--primary-color);stroke-width:8;stroke-linecap:round; }` },
  ],
  relatedIds: ['svg-stroke-dash', 'svg-morphing-blob', 'button-border-draw'],
}
export default pathDraw
