const depthZoom = {
  id: '3d-depth-zoom',
  name: 'Depth Zoom',
  slug: 'depth-zoom',
  category: '3d',
  tags: ['zoom', 'depth', '3d', 'perspective', 'push'],
  description: 'Element zooms in from deep Z depth creating an approaching movement.',
  longDescription: 'Animates translateZ to push an element from far in z-space toward the viewer. Requires a perspective context on the parent element. Creates a dramatic approach animation suitable for hero content, product reveals, and modal entrances.',
  addedAt: '2024-02-11T00:00:00Z', updatedAt: '2024-03-15T00:00:00Z', author: 'CSS Motion Master',
  browserSupport: { chrome: 36, firefox: 16, safari: 9, edge: 12 },
  performanceScore: 10, complexityScore: 2, animatedProperties: ['transform'], triggerType: 'auto',
  css: `@keyframes depthZoom {
  from { transform: translateZ(-200px) scale(0.5); opacity: 0; }
  to { transform: translateZ(0) scale(1); opacity: 1; }
}
.depth-zoom-scene { perspective: 400px; }
.depth-zoom-el {
  animation: depthZoom 1s cubic-bezier(0.2, 0.6, 0.4, 1) both;
  padding: 24px 40px;
  background: linear-gradient(135deg, hsl(251,100%,55%), hsl(330,100%,60%));
  border-radius: 12px; color: white; font-weight: 700; font-size: 1.2rem; text-align: center;
}`,
  html: `<div class="depth-zoom-scene"><div class="depth-zoom-el">Depth Zoom</div></div>`, js: null,
  keyframes: { '0%': { transform: 'translateZ(-200px) scale(0.5)', opacity: '0' }, '100%': { transform: 'translateZ(0) scale(1)', opacity: '1' } },
  variants: [
    { name: 'Deep', css: `@keyframes depthZoom { from { transform:translateZ(-500px) scale(0.2);opacity:0; } to { transform:translateZ(0) scale(1);opacity:1; } } .depth-zoom-scene { perspective:400px; } .depth-zoom-el { animation:depthZoom 1.5s cubic-bezier(0.2,0.6,0.4,1) both;padding:24px 40px;background:linear-gradient(135deg,hsl(251,100%,55%),hsl(330,100%,60%));border-radius:12px;color:white;font-weight:700; }` },
    { name: 'Fast', css: `@keyframes depthZoom { from { transform:translateZ(-200px) scale(0.5);opacity:0; } to { transform:translateZ(0) scale(1);opacity:1; } } .depth-zoom-scene { perspective:400px; } .depth-zoom-el { animation:depthZoom 0.4s cubic-bezier(0.2,0.6,0.4,1) both;padding:24px 40px;background:linear-gradient(135deg,hsl(251,100%,55%),hsl(330,100%,60%));border-radius:12px;color:white;font-weight:700; }` },
  ],
  relatedIds: ['3d-cube-rotate', '3d-card-flip', '3d-folding-panel'],
}
export default depthZoom
