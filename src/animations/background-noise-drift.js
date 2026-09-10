const noiseDrift = {
  id: 'background-noise-drift',
  name: 'Noise Drift',
  slug: 'noise-drift',
  category: 'background',
  tags: ['noise', 'grain', 'texture', 'drift', 'organic'],
  description: 'Organic noise texture drifts slowly across the surface.',
  longDescription: 'Applies a repeating noise texture via SVG filter feTurbulence and animates its baseFrequency to create a drifting organic noise pattern. The result is a subtle animated grain or static effect that adds tactile depth to flat backgrounds.',
  addedAt: '2024-02-02T00:00:00Z', updatedAt: '2024-03-15T00:00:00Z', author: 'CSS Motion Master',
  browserSupport: { chrome: 50, firefox: 45, safari: 10, edge: 79 },
  performanceScore: 4, complexityScore: 3, animatedProperties: ['transform'], triggerType: 'auto',
  css: `@keyframes noiseDrift {
  0% { transform: translate(0, 0); }
  25% { transform: translate(-5%, -5%); }
  50% { transform: translate(5%, -5%); }
  75% { transform: translate(-5%, 5%); }
  100% { transform: translate(0, 0); }
}
.noise-drift-el {
  position: relative;
  width: 300px; height: 200px;
  background: linear-gradient(135deg, hsl(235,25%,10%), hsl(251,40%,20%));
  border-radius: 12px;
  overflow: hidden;
}
.noise-drift-el::after {
  content: '';
  position: absolute;
  inset: -20%;
  width: 140%; height: 140%;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.06'/%3E%3C/svg%3E");
  animation: noiseDrift 8s ease-in-out infinite;
  opacity: 0.4;
}`,
  html: `<div class="noise-drift-el"></div>`, js: null, keyframes: null,
  variants: [
    { name: 'Strong', css: `@keyframes noiseDrift { 0% { transform: translate(0,0); } 50% { transform: translate(5%,-5%); } 100% { transform: translate(0,0); } } .noise-drift-el { position:relative;width:300px;height:200px;background:hsl(235,25%,10%);border-radius:12px;overflow:hidden; } .noise-drift-el::after { content:'';position:absolute;inset:-20%;width:140%;height:140%;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.15'/%3E%3C/svg%3E");animation:noiseDrift 8s ease-in-out infinite;opacity:0.7; }` },
    { name: 'Slow', css: `@keyframes noiseDrift { 0% { transform: translate(0,0); } 50% { transform: translate(5%,-5%); } 100% { transform: translate(0,0); } } .noise-drift-el { position:relative;width:300px;height:200px;background:hsl(235,25%,10%);border-radius:12px;overflow:hidden; } .noise-drift-el::after { content:'';position:absolute;inset:-20%;width:140%;height:140%;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.06'/%3E%3C/svg%3E");animation:noiseDrift 20s ease-in-out infinite; }` },
  ],
  relatedIds: ['background-particle-field', 'background-mesh-shift', 'background-aurora'],
}
export default noiseDrift
