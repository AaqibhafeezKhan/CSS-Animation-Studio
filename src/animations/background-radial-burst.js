const radialBurst = {
  id: 'background-radial-burst',
  name: 'Radial Burst',
  slug: 'radial-burst',
  category: 'background',
  tags: ['radial', 'burst', 'rays', 'sunburst', 'energetic'],
  description: 'Rotating conic-gradient sunburst radiates from the center.',
  longDescription: 'Uses a conic-gradient to create sunburst rays that rotate around the center using a transform: rotate animation. The gradient alternates between a color and transparent to create the ray pattern. A center radial gradient overlays to focus attention.',
  addedAt: '2024-02-03T00:00:00Z', updatedAt: '2024-03-15T00:00:00Z', author: 'CSS Motion Master',
  browserSupport: { chrome: 69, firefox: 83, safari: 12.1, edge: 79 },
  performanceScore: 8, complexityScore: 2, animatedProperties: ['transform'], triggerType: 'auto',
  css: `@keyframes burstRotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.radial-burst-el {
  position: relative;
  width: 300px; height: 200px;
  background: hsl(235,25%,8%);
  border-radius: 12px;
  overflow: hidden;
  display: flex; align-items: center; justify-content: center;
}
.radial-burst-el::before {
  content: '';
  position: absolute;
  width: 500px; height: 500px;
  background: conic-gradient(
    from 0deg,
    hsla(251,100%,69%,0.15) 0deg, transparent 20deg,
    hsla(251,100%,69%,0.15) 40deg, transparent 60deg,
    hsla(251,100%,69%,0.15) 80deg, transparent 100deg,
    hsla(251,100%,69%,0.15) 120deg, transparent 140deg,
    hsla(251,100%,69%,0.15) 160deg, transparent 180deg,
    hsla(251,100%,69%,0.15) 200deg, transparent 220deg,
    hsla(251,100%,69%,0.15) 240deg, transparent 260deg,
    hsla(251,100%,69%,0.15) 280deg, transparent 300deg,
    hsla(251,100%,69%,0.15) 320deg, transparent 340deg,
    hsla(251,100%,69%,0.15) 360deg
  );
  animation: burstRotate 8s linear infinite;
}`,
  html: `<div class="radial-burst-el"><span style="position:relative;z-index:1;font-weight:700">Burst</span></div>`, js: null, keyframes: null,
  variants: [
    { name: 'Fast', css: `@keyframes burstRotate { to { transform: rotate(360deg); } } .radial-burst-el { position:relative;width:300px;height:200px;background:hsl(235,25%,8%);border-radius:12px;overflow:hidden; } .radial-burst-el::before { content:'';position:absolute;width:500px;height:500px;background:conic-gradient(from 0deg,hsla(251,100%,69%,0.2) 0deg,transparent 20deg,hsla(251,100%,69%,0.2) 40deg,transparent 60deg,hsla(251,100%,69%,0.2) 80deg,transparent 100deg,hsla(251,100%,69%,0.2) 120deg,transparent 140deg,hsla(251,100%,69%,0.2) 160deg,transparent 180deg);animation:burstRotate 2s linear infinite; }` },
    { name: 'Multi-color', css: `@keyframes burstRotate { to { transform: rotate(360deg); } } .radial-burst-el { position:relative;width:300px;height:200px;background:hsl(235,25%,8%);border-radius:12px;overflow:hidden; } .radial-burst-el::before { content:'';position:absolute;width:500px;height:500px;background:conic-gradient(from 0deg,hsla(251,100%,69%,0.2) 0deg,transparent 30deg,hsla(330,100%,71%,0.2) 60deg,transparent 90deg,hsla(170,80%,50%,0.2) 120deg,transparent 150deg);animation:burstRotate 6s linear infinite; }` },
  ],
  relatedIds: ['background-aurora', 'background-gradient-morph', 'keyframe-spin'],
}
export default radialBurst
