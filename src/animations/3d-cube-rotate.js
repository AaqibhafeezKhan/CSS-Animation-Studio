const cubeRotate = {
  id: '3d-cube-rotate',
  name: 'Cube Rotate',
  slug: 'cube-rotate',
  category: '3d',
  tags: ['cube', '3d', 'rotate', 'faces', 'geometric'],
  description: 'A 3D cube rotates continuously on two axes showing all six faces.',
  longDescription: 'Constructs a 3D cube from six div elements positioned with translateZ and appropriate rotations. The entire cube rotates on X and Y axes simultaneously, cycling through all six faces. Demonstrates CSS 3D space, perspective, and transform-style: preserve-3d.',
  addedAt: '2024-02-09T00:00:00Z', updatedAt: '2024-03-15T00:00:00Z', author: 'CSS Motion Master',
  browserSupport: { chrome: 36, firefox: 16, safari: 9, edge: 12 },
  performanceScore: 10, complexityScore: 4, animatedProperties: ['transform'], triggerType: 'auto',
  css: `@keyframes cubeRotate {
  from { transform: rotateX(0deg) rotateY(0deg); }
  to { transform: rotateX(360deg) rotateY(360deg); }
}
.cube-scene {
  perspective: 400px;
  width: 80px; height: 80px;
  margin: 40px auto;
}
.cube {
  width: 80px; height: 80px;
  transform-style: preserve-3d;
  animation: cubeRotate 6s linear infinite;
}
.cube-face {
  position: absolute;
  width: 80px; height: 80px;
  display: flex; align-items: center; justify-content: center;
  font-weight: 700; font-size: 0.9rem;
  border: 2px solid hsla(251,100%,85%,0.4);
  background: hsla(251,100%,69%,0.15);
  color: hsl(251,100%,85%);
}
.cube-face.front  { transform: translateZ(40px); }
.cube-face.back   { transform: rotateY(180deg) translateZ(40px); }
.cube-face.left   { transform: rotateY(-90deg) translateZ(40px); }
.cube-face.right  { transform: rotateY(90deg) translateZ(40px); }
.cube-face.top    { transform: rotateX(90deg) translateZ(40px); }
.cube-face.bottom { transform: rotateX(-90deg) translateZ(40px); }`,
  html: `<div class="cube-scene">
  <div class="cube">
    <div class="cube-face front">Front</div>
    <div class="cube-face back">Back</div>
    <div class="cube-face left">Left</div>
    <div class="cube-face right">Right</div>
    <div class="cube-face top">Top</div>
    <div class="cube-face bottom">Bottom</div>
  </div>
</div>`, js: null,
  keyframes: { '0%': { transform: 'rotateX(0deg) rotateY(0deg)' }, '100%': { transform: 'rotateX(360deg) rotateY(360deg)' } },
  variants: [
    { name: 'Slow', css: `@keyframes cubeRotate { from { transform: rotateX(0deg) rotateY(0deg); } to { transform: rotateX(360deg) rotateY(360deg); } } .cube-scene { perspective:400px;width:80px;height:80px;margin:40px auto; } .cube { width:80px;height:80px;transform-style:preserve-3d;animation:cubeRotate 12s linear infinite; } .cube-face { position:absolute;width:80px;height:80px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:0.9rem;border:2px solid hsla(251,100%,85%,0.4);background:hsla(251,100%,69%,0.15);color:hsl(251,100%,85%); } .cube-face.front { transform:translateZ(40px); } .cube-face.back { transform:rotateY(180deg) translateZ(40px); } .cube-face.left { transform:rotateY(-90deg) translateZ(40px); } .cube-face.right { transform:rotateY(90deg) translateZ(40px); } .cube-face.top { transform:rotateX(90deg) translateZ(40px); } .cube-face.bottom { transform:rotateX(-90deg) translateZ(40px); }` },
    { name: 'Opaque', css: `@keyframes cubeRotate { from { transform: rotateX(0deg) rotateY(0deg); } to { transform: rotateX(360deg) rotateY(360deg); } } .cube-scene { perspective:400px;width:80px;height:80px;margin:40px auto; } .cube { width:80px;height:80px;transform-style:preserve-3d;animation:cubeRotate 6s linear infinite; } .cube-face { position:absolute;width:80px;height:80px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:0.9rem;border:none;background:hsl(251,100%,60%);color:white; } .cube-face.front { transform:translateZ(40px); } .cube-face.back { transform:rotateY(180deg) translateZ(40px);background:hsl(330,100%,60%); } .cube-face.left { transform:rotateY(-90deg) translateZ(40px);background:hsl(170,80%,40%); } .cube-face.right { transform:rotateY(90deg) translateZ(40px);background:hsl(47,100%,55%); } .cube-face.top { transform:rotateX(90deg) translateZ(40px);background:hsl(200,100%,50%); } .cube-face.bottom { transform:rotateX(-90deg) translateZ(40px);background:hsl(280,80%,55%); }` },
  ],
  relatedIds: ['3d-card-flip', '3d-perspective-tilt', '3d-depth-zoom'],
}
export default cubeRotate
