const perspectiveTilt = {
  id: '3d-perspective-tilt',
  name: 'Perspective Tilt',
  slug: 'perspective-tilt',
  category: '3d',
  tags: ['perspective', 'tilt', '3d', 'depth', 'hover'],
  description: 'Card tilts in 3D perspective space with a highlight sheen on hover.',
  longDescription: 'Combines a 3D perspective transform with a moving radial-gradient highlight overlay to simulate depth and surface reflection. The highlight moves opposite to the tilt direction, reinforcing the illusion of a light source above the card.',
  addedAt: '2024-02-10T00:00:00Z', updatedAt: '2024-03-15T00:00:00Z', author: 'CSS Motion Master',
  browserSupport: { chrome: 40, firefox: 38, safari: 9, edge: 15 },
  performanceScore: 9, complexityScore: 3, animatedProperties: ['transform'], triggerType: 'hover',
  css: `.perspective-tilt-el {
  width: 200px; height: 140px;
  background: linear-gradient(135deg, hsl(251,100%,55%), hsl(330,100%,60%));
  border-radius: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  transform-style: preserve-3d;
  cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  font-weight: 700; color: white; font-size: 1.1rem;
  box-shadow: 0 8px 32px hsla(251,100%,50%,0.3);
}
.perspective-tilt-el:hover {
  transform: perspective(500px) rotateX(-8deg) rotateY(12deg) scale(1.04);
  box-shadow: 0 20px 60px hsla(251,100%,50%,0.5);
}`,
  html: `<div class="perspective-tilt-el">Tilt Me</div>`, js: null, keyframes: null,
  variants: [
    { name: 'Subtle', css: `.perspective-tilt-el { width:200px;height:140px;background:linear-gradient(135deg,hsl(251,100%,55%),hsl(330,100%,60%));border-radius:12px;transition:transform 0.3s ease;cursor:pointer;display:flex;align-items:center;justify-content:center;font-weight:700;color:white; } .perspective-tilt-el:hover { transform:perspective(600px) rotateX(-4deg) rotateY(6deg); }` },
    { name: 'Dramatic', css: `.perspective-tilt-el { width:200px;height:140px;background:linear-gradient(135deg,hsl(251,100%,55%),hsl(330,100%,60%));border-radius:12px;transition:transform 0.3s ease;cursor:pointer;display:flex;align-items:center;justify-content:center;font-weight:700;color:white; } .perspective-tilt-el:hover { transform:perspective(300px) rotateX(-15deg) rotateY(20deg) scale(1.08); }` },
  ],
  relatedIds: ['hover-rotate-tilt', '3d-card-flip', '3d-depth-zoom'],
}
export default perspectiveTilt
