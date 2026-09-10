const aurora = {
  id: 'background-aurora',
  name: 'Aurora',
  slug: 'aurora',
  category: 'background',
  tags: ['aurora', 'northern-lights', 'glow', 'atmospheric', 'shimmer'],
  description: 'Northern lights aurora borealis simulation with shifting light bands.',
  longDescription: 'Creates an aurora borealis effect using multiple absolutely-positioned pseudo-elements with blurred radial gradients that translate and rotate over time. The overlapping transparent gradients blend into the characteristic aurora color bands with their otherworldly shimmer.',
  addedAt: '2024-02-01T00:00:00Z', updatedAt: '2024-03-15T00:00:00Z', author: 'CSS Motion Master',
  browserSupport: { chrome: 43, firefox: 35, safari: 9, edge: 12 },
  performanceScore: 4, complexityScore: 3, animatedProperties: ['transform', 'opacity'], triggerType: 'auto',
  css: `@keyframes auroraA {
  0%,100% { transform: translateX(-10%) rotate(-5deg) scaleY(0.8); opacity: 0.6; }
  50% { transform: translateX(10%) rotate(5deg) scaleY(1.2); opacity: 1; }
}
@keyframes auroraB {
  0%,100% { transform: translateX(5%) rotate(3deg) scaleY(1); opacity: 0.5; }
  50% { transform: translateX(-5%) rotate(-3deg) scaleY(0.85); opacity: 0.9; }
}
.aurora-el {
  position: relative;
  width: 300px; height: 200px;
  background: hsl(220, 40%, 4%);
  border-radius: 12px;
  overflow: hidden;
}
.aurora-el::before {
  content: '';
  position: absolute;
  width: 120%; height: 60%;
  top: 10%; left: -10%;
  background: linear-gradient(transparent, hsla(170,80%,50%,0.4), hsla(251,100%,69%,0.35), transparent);
  filter: blur(20px);
  animation: auroraA 6s ease-in-out infinite;
}
.aurora-el::after {
  content: '';
  position: absolute;
  width: 120%; height: 50%;
  top: 25%; left: -10%;
  background: linear-gradient(transparent, hsla(330,100%,71%,0.3), hsla(170,80%,50%,0.3), transparent);
  filter: blur(25px);
  animation: auroraB 8s ease-in-out infinite;
}`,
  html: `<div class="aurora-el"></div>`, js: null, keyframes: null,
  variants: [
    { name: 'Blue', css: `@keyframes auroraA { 0%,100% { transform: translateX(-10%) rotate(-5deg); opacity: 0.6; } 50% { transform: translateX(10%) rotate(5deg); opacity: 1; } } .aurora-el { position:relative; width:300px;height:200px; background:hsl(220,40%,4%); border-radius:12px; overflow:hidden; } .aurora-el::before { content:''; position:absolute; width:120%;height:60%; top:10%;left:-10%; background:linear-gradient(transparent,hsla(200,100%,60%,0.5),hsla(220,100%,65%,0.4),transparent); filter:blur(20px); animation:auroraA 6s ease-in-out infinite; }` },
    { name: 'Vivid', css: `@keyframes auroraA { 0%,100% { transform: translateX(-10%) rotate(-5deg); opacity: 0.8; } 50% { transform: translateX(10%) rotate(5deg); opacity: 1; } } .aurora-el { position:relative; width:300px;height:200px; background:#000; border-radius:12px; overflow:hidden; } .aurora-el::before { content:''; position:absolute; width:120%;height:60%; top:10%;left:-10%; background:linear-gradient(transparent,hsla(145,100%,55%,0.7),hsla(251,100%,69%,0.5),transparent); filter:blur(15px); animation:auroraA 4s ease-in-out infinite; }` },
  ],
  relatedIds: ['background-mesh-shift', 'background-gradient-morph', 'button-glow-pulse'],
}
export default aurora
