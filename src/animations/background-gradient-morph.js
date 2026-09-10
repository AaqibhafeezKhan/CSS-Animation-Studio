const gradientMorph = {
  id: 'background-gradient-morph',
  name: 'Gradient Morph',
  slug: 'gradient-morph',
  category: 'background',
  tags: ['gradient', 'morph', 'color', 'animated', 'background'],
  description: 'Background gradient continuously morphs through multiple color stops.',
  longDescription: 'A mesmerizing full-area background animation that loops through a spectrum of colors using animated background-position on a large gradient. The background-size is set larger than 100% and the position animates to create a smooth color morphing effect.',
  addedAt: '2024-01-29T00:00:00Z', updatedAt: '2024-03-15T00:00:00Z', author: 'CSS Motion Master',
  browserSupport: { chrome: 43, firefox: 16, safari: 9, edge: 12 },
  performanceScore: 6, complexityScore: 1, animatedProperties: ['background-position'], triggerType: 'auto',
  css: `@keyframes gradientMorph {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.gradient-morph-el {
  background: linear-gradient(270deg, hsl(251,100%,69%), hsl(330,100%,71%), hsl(170,80%,50%), hsl(47,100%,65%), hsl(200,100%,60%));
  background-size: 400% 400%;
  animation: gradientMorph 8s ease infinite;
  padding: 40px;
  border-radius: 12px;
}`,
  html: `<div class="gradient-morph-el">Gradient Morph</div>`, js: null,
  keyframes: { '0%': { backgroundPosition: '0% 50%' }, '50%': { backgroundPosition: '100% 50%' }, '100%': { backgroundPosition: '0% 50%' } },
  variants: [
    { name: 'Fast', css: `@keyframes gradientMorph { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } } .gradient-morph-el { background: linear-gradient(270deg, hsl(251,100%,69%), hsl(330,100%,71%), hsl(170,80%,50%), hsl(47,100%,65%)); background-size: 400% 400%; animation: gradientMorph 2s ease infinite; padding: 40px; border-radius: 12px; }` },
    { name: 'Cool', css: `@keyframes gradientMorph { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } } .gradient-morph-el { background: linear-gradient(270deg, hsl(200,100%,70%), hsl(170,80%,50%), hsl(220,100%,65%)); background-size: 400% 400%; animation: gradientMorph 8s ease infinite; padding: 40px; border-radius: 12px; }` },
  ],
  relatedIds: ['background-aurora', 'background-mesh-shift', 'text-gradient-shift'],
}
export default gradientMorph
