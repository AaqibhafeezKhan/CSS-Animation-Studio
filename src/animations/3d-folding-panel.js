const foldingPanel = {
  id: '3d-folding-panel',
  name: 'Folding Panel',
  slug: 'folding-panel',
  category: '3d',
  tags: ['fold', 'panel', '3d', 'open', 'origami'],
  description: 'Panel unfolds in 3D space like opening a book or origami.',
  longDescription: 'Creates a paper-folding effect by rotating a half-panel on the Y axis from -90 degrees (closed / folded flat) to 0 degrees (open). Setting transform-origin to the left edge makes it appear to hinge along the fold line. Ideal for accordion content, reveal panels, and creative navigation.',
  addedAt: '2024-02-12T00:00:00Z', updatedAt: '2024-03-15T00:00:00Z', author: 'CSS Motion Master',
  browserSupport: { chrome: 36, firefox: 16, safari: 9, edge: 12 },
  performanceScore: 10, complexityScore: 3, animatedProperties: ['transform'], triggerType: 'hover',
  css: `.folding-scene {
  perspective: 600px;
  display: inline-block;
}
.folding-panel-el {
  width: 200px; height: 120px;
  background: linear-gradient(135deg, hsl(251,100%,55%), hsl(330,100%,60%));
  border-radius: 0 12px 12px 0;
  transform: rotateY(-90deg);
  transform-origin: left;
  transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex; align-items: center; justify-content: center;
  color: white; font-weight: 700;
}
.folding-scene:hover .folding-panel-el {
  transform: rotateY(0deg);
}`,
  html: `<div class="folding-scene"><div class="folding-panel-el">Open Panel</div></div>`, js: null, keyframes: null,
  variants: [
    { name: 'From Top', css: `.folding-scene { perspective:600px;display:inline-block; } .folding-panel-el { width:200px;height:120px;background:linear-gradient(135deg,hsl(251,100%,55%),hsl(330,100%,60%));border-radius:12px 12px 0 0;transform:rotateX(-90deg);transform-origin:bottom;transition:transform 0.7s ease;display:flex;align-items:center;justify-content:center;color:white;font-weight:700; } .folding-scene:hover .folding-panel-el { transform:rotateX(0deg); }` },
    { name: 'Fast', css: `.folding-scene { perspective:600px;display:inline-block; } .folding-panel-el { width:200px;height:120px;background:linear-gradient(135deg,hsl(251,100%,55%),hsl(330,100%,60%));border-radius:0 12px 12px 0;transform:rotateY(-90deg);transform-origin:left;transition:transform 0.3s ease;display:flex;align-items:center;justify-content:center;color:white;font-weight:700; } .folding-scene:hover .folding-panel-el { transform:rotateY(0deg); }` },
  ],
  relatedIds: ['3d-card-flip', '3d-depth-zoom', '3d-cube-rotate'],
}
export default foldingPanel
