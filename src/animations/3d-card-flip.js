const cardFlip = {
  id: '3d-card-flip',
  name: 'Card Flip',
  slug: 'card-flip',
  category: '3d',
  tags: ['flip', '3d', 'card', 'hover', 'backface'],
  description: 'Card flips 180 degrees on hover revealing a back face.',
  longDescription: 'A classic 3D card flip using CSS transform-style: preserve-3d, perspective on the container, and rotateY on hover. The back face uses backface-visibility: hidden so it is invisible when facing away from the viewer. Creates depth-aware reveal effects for product cards, info panels, and flashcards.',
  addedAt: '2024-02-08T00:00:00Z', updatedAt: '2024-03-15T00:00:00Z', author: 'CSS Motion Master',
  browserSupport: { chrome: 36, firefox: 16, safari: 9, edge: 12 },
  performanceScore: 10, complexityScore: 3, animatedProperties: ['transform'], triggerType: 'hover',
  css: `.card-flip-scene {
  perspective: 800px;
  width: 200px; height: 140px;
}
.card-flip-inner {
  position: relative;
  width: 100%; height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}
.card-flip-scene:hover .card-flip-inner {
  transform: rotateY(180deg);
}
.card-flip-front,
.card-flip-back {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  font-weight: 700;
  font-size: 1.1rem;
}
.card-flip-front {
  background: linear-gradient(135deg, hsl(251,100%,60%), hsl(330,100%,65%));
  color: white;
}
.card-flip-back {
  background: linear-gradient(135deg, hsl(170,80%,40%), hsl(200,100%,50%));
  color: white;
  transform: rotateY(180deg);
}`,
  html: `<div class="card-flip-scene">
  <div class="card-flip-inner">
    <div class="card-flip-front">Front</div>
    <div class="card-flip-back">Back</div>
  </div>
</div>`, js: null, keyframes: null,
  variants: [
    { name: 'Vertical', css: `.card-flip-scene { perspective:800px;width:200px;height:140px; } .card-flip-inner { position:relative;width:100%;height:100%;transform-style:preserve-3d;transition:transform 0.7s ease; } .card-flip-scene:hover .card-flip-inner { transform:rotateX(180deg); } .card-flip-front, .card-flip-back { position:absolute;inset:0;backface-visibility:hidden;display:flex;align-items:center;justify-content:center;border-radius:12px;font-weight:700;color:white; } .card-flip-front { background:linear-gradient(135deg,hsl(251,100%,60%),hsl(330,100%,65%)); } .card-flip-back { background:linear-gradient(135deg,hsl(170,80%,40%),hsl(200,100%,50%));transform:rotateX(180deg); }` },
    { name: 'Fast', css: `.card-flip-scene { perspective:800px;width:200px;height:140px; } .card-flip-inner { position:relative;width:100%;height:100%;transform-style:preserve-3d;transition:transform 0.3s ease; } .card-flip-scene:hover .card-flip-inner { transform:rotateY(180deg); } .card-flip-front, .card-flip-back { position:absolute;inset:0;backface-visibility:hidden;display:flex;align-items:center;justify-content:center;border-radius:12px;font-weight:700;color:white; } .card-flip-front { background:linear-gradient(135deg,hsl(251,100%,60%),hsl(330,100%,65%)); } .card-flip-back { background:linear-gradient(135deg,hsl(170,80%,40%),hsl(200,100%,50%));transform:rotateY(180deg); }` },
  ],
  relatedIds: ['3d-cube-rotate', 'hover-rotate-tilt', '3d-perspective-tilt'],
}
export default cardFlip
