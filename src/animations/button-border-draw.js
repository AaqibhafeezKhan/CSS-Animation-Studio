const borderDraw = {
  id: 'button-border-draw',
  name: 'Border Draw',
  slug: 'border-draw',
  category: 'button',
  tags: ['border', 'draw', 'outline', 'hover', 'stroke'],
  description: 'Border draws itself around the button perimeter on hover using stroke-dashoffset.',
  longDescription: 'Uses an SVG rect overlay with stroke-dasharray and stroke-dashoffset animation to draw a border around the button on hover. The stroke animates from invisible (fully dashed offset) to fully visible, creating the effect of a border being drawn by hand.',
  addedAt: '2024-01-18T00:00:00Z',
  updatedAt: '2024-03-15T00:00:00Z',
  author: 'CSS Motion Master',
  browserSupport: { chrome: 50, firefox: 45, safari: 10, edge: 17 },
  performanceScore: 9,
  complexityScore: 3,
  animatedProperties: ['stroke-dashoffset'],
  triggerType: 'hover',
  css: `.border-draw-btn {
  position: relative;
  padding: 12px 28px;
  background: transparent;
  color: var(--primary-color);
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
}

.border-draw-btn svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.border-draw-btn rect {
  fill: none;
  stroke: var(--primary-color);
  stroke-width: 2;
  stroke-dasharray: 300;
  stroke-dashoffset: 300;
  transition: stroke-dashoffset 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.border-draw-btn:hover rect {
  stroke-dashoffset: 0;
}`,
  html: `<button class="border-draw-btn">
  <svg><rect width="100%" height="100%" rx="6" ry="6"/></svg>
  Draw Border
</button>`,
  js: null,
  keyframes: null,
  variants: [
    { name: 'Fast', css: `.border-draw-btn { position: relative; padding: 12px 28px; background: transparent; color: var(--primary-color); border: none; border-radius: 6px; cursor: pointer; } .border-draw-btn svg { position: absolute; inset: 0; width: 100%; height: 100%; } .border-draw-btn rect { fill: none; stroke: var(--primary-color); stroke-width: 2; stroke-dasharray: 300; stroke-dashoffset: 300; transition: stroke-dashoffset 0.2s ease; } .border-draw-btn:hover rect { stroke-dashoffset: 0; }` },
    { name: 'Thick', css: `.border-draw-btn { position: relative; padding: 12px 28px; background: transparent; color: var(--primary-color); border: none; border-radius: 6px; cursor: pointer; } .border-draw-btn svg { position: absolute; inset: 0; width: 100%; height: 100%; } .border-draw-btn rect { fill: none; stroke: var(--primary-color); stroke-width: 4; stroke-dasharray: 300; stroke-dashoffset: 300; transition: stroke-dashoffset 0.5s ease; } .border-draw-btn:hover rect { stroke-dashoffset: 0; }` },
  ],
  relatedIds: ['hover-border-trace', 'svg-stroke-dash', 'button-fill-slide'],
}
export default borderDraw
