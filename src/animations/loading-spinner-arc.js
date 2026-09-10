const spinnerArc = {
  id: 'loading-spinner-arc',
  name: 'Spinner Arc',
  slug: 'spinner-arc',
  category: 'loading',
  tags: ['spinner', 'arc', 'circle', 'loading', 'rotate'],
  description: 'Circular arc spinner using SVG stroke animation with a rotating container.',
  longDescription: 'Combines CSS rotate animation on the SVG container with an SVG circle stroke-dasharray pattern to create an elegant spinning arc loader. The arc appears to chase its own tail as both the container rotation and stroke-dashoffset create a dynamic loading indicator.',
  addedAt: '2024-02-23T00:00:00Z', updatedAt: '2024-03-15T00:00:00Z', author: 'CSS Motion Master',
  browserSupport: { chrome: 43, firefox: 16, safari: 9, edge: 12 },
  performanceScore: 10, complexityScore: 2, animatedProperties: ['transform', 'stroke-dashoffset'], triggerType: 'auto',
  css: `@keyframes spinnerRotate { to { transform: rotate(360deg); } }
@keyframes spinnerDash {
  0% { stroke-dashoffset: 94; }
  50% { stroke-dashoffset: 24; }
  100% { stroke-dashoffset: 94; }
}
.spinner-arc-el {
  animation: spinnerRotate 1.5s linear infinite;
  width: 48px; height: 48px;
}
.spinner-arc-el circle {
  stroke: var(--primary-color);
  stroke-width: 4;
  fill: none;
  stroke-linecap: round;
  stroke-dasharray: 94;
  stroke-dashoffset: 94;
  animation: spinnerDash 1.5s ease-in-out infinite;
}`,
  html: `<svg class="spinner-arc-el" viewBox="0 0 32 32" width="48" height="48">
  <circle cx="16" cy="16" r="12"/>
</svg>`,
  js: null,
  keyframes: { '0%': { strokeDashoffset: '94' }, '50%': { strokeDashoffset: '24' }, '100%': { strokeDashoffset: '94' } },
  variants: [
    { name: 'Fast', css: `@keyframes spinnerRotate { to { transform:rotate(360deg); } } @keyframes spinnerDash { 0% { stroke-dashoffset:94; } 50% { stroke-dashoffset:24; } 100% { stroke-dashoffset:94; } } .spinner-arc-el { animation:spinnerRotate 0.7s linear infinite;width:48px;height:48px; } .spinner-arc-el circle { stroke:var(--primary-color);stroke-width:4;fill:none;stroke-linecap:round;stroke-dasharray:94;stroke-dashoffset:94;animation:spinnerDash 0.7s ease-in-out infinite; }` },
    { name: 'Large', css: `@keyframes spinnerRotate { to { transform:rotate(360deg); } } @keyframes spinnerDash { 0% { stroke-dashoffset:157; } 50% { stroke-dashoffset:40; } 100% { stroke-dashoffset:157; } } .spinner-arc-el { animation:spinnerRotate 1.5s linear infinite;width:80px;height:80px; } .spinner-arc-el circle { stroke:var(--primary-color);stroke-width:5;fill:none;stroke-linecap:round;stroke-dasharray:157;stroke-dashoffset:157;animation:spinnerDash 1.5s ease-in-out infinite; }` },
  ],
  relatedIds: ['keyframe-spin', 'loading-dot-cascade', 'loading-skeleton-pulse'],
}
export default spinnerArc
