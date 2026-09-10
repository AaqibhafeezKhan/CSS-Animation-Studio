const strokeDash = {
  id: 'svg-stroke-dash',
  name: 'Stroke Dash',
  slug: 'stroke-dash',
  category: 'svg',
  tags: ['stroke', 'dash', 'marching-ants', 'outline', 'svg'],
  description: 'Animated dashed stroke marches around an SVG shape continuously.',
  longDescription: 'Creates the "marching ants" selection effect by animating stroke-dashoffset on a shape with a dashed stroke pattern. The dasharray creates equally spaced dashes; animating dashoffset makes them appear to march around the perimeter endlessly.',
  addedAt: '2024-02-15T00:00:00Z', updatedAt: '2024-03-15T00:00:00Z', author: 'CSS Motion Master',
  browserSupport: { chrome: 43, firefox: 16, safari: 9, edge: 12 },
  performanceScore: 9, complexityScore: 1, animatedProperties: ['stroke-dashoffset'], triggerType: 'auto',
  css: `@keyframes marchingAnts {
  from { stroke-dashoffset: 0; }
  to { stroke-dashoffset: 20; }
}
.stroke-dash-shape {
  fill: none;
  stroke: var(--primary-color);
  stroke-width: 2.5;
  stroke-dasharray: 10 5;
  animation: marchingAnts 0.8s linear infinite;
}`,
  html: `<svg width="160" height="100" viewBox="0 0 160 100">
  <rect class="stroke-dash-shape" x="10" y="10" width="140" height="80" rx="10"/>
</svg>`,
  js: null,
  keyframes: { '0%': { strokeDashoffset: '0' }, '100%': { strokeDashoffset: '20' } },
  variants: [
    { name: 'Wide Gaps', css: `@keyframes marchingAnts { from { stroke-dashoffset:0; } to { stroke-dashoffset:30; } } .stroke-dash-shape { fill:none;stroke:var(--primary-color);stroke-width:2.5;stroke-dasharray:15 10;animation:marchingAnts 1s linear infinite; }` },
    { name: 'Fast', css: `@keyframes marchingAnts { from { stroke-dashoffset:0; } to { stroke-dashoffset:20; } } .stroke-dash-shape { fill:none;stroke:var(--primary-color);stroke-width:2.5;stroke-dasharray:10 5;animation:marchingAnts 0.3s linear infinite; }` },
  ],
  relatedIds: ['svg-path-draw', 'button-border-draw', 'svg-shape-shift'],
}
export default strokeDash
