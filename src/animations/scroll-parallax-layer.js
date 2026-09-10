const parallaxLayer = {
  id: 'scroll-parallax-layer',
  name: 'Parallax Layer',
  slug: 'parallax-layer',
  category: 'scroll',
  tags: ['parallax', 'depth', 'scroll', 'layer', 'perspective'],
  description: 'Layered parallax depth effect as page scrolls using scroll-driven animations.',
  longDescription: 'Demonstrates layered parallax scrolling where background elements move slower than foreground elements, creating an illusion of depth. Uses CSS scroll-driven animations (animation-timeline: scroll()) where available, with a JS fallback that applies transform based on scrollY position.',
  addedAt: '2024-02-05T00:00:00Z', updatedAt: '2024-03-15T00:00:00Z', author: 'CSS Motion Master',
  browserSupport: { chrome: 115, firefox: 110, safari: 16, edge: 115 },
  performanceScore: 8, complexityScore: 3, animatedProperties: ['transform'], triggerType: 'scroll',
  css: `.parallax-container {
  position: relative;
  height: 200px;
  overflow: hidden;
  border-radius: 12px;
}
.parallax-back {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, hsl(251,100%,20%), hsl(235,25%,10%));
  transform: translateY(0);
  transition: transform 0.1s linear;
}
.parallax-front {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
}`,
  html: `<div class="parallax-container" id="parallaxContainer">
  <div class="parallax-back" id="parallaxBack"></div>
  <div class="parallax-front">Scroll to see parallax</div>
</div>`,
  js: `const back = document.getElementById('parallaxBack');
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  back.style.transform = \`translateY(\${scrolled * 0.3}px)\`;
});`,
  keyframes: null,
  variants: [
    { name: 'Strong', css: `.parallax-container { position:relative;height:200px;overflow:hidden;border-radius:12px; } .parallax-back { position:absolute;inset:0;background:linear-gradient(135deg,hsl(251,100%,20%),hsl(235,25%,10%)); }` },
    { name: 'Subtle', css: `.parallax-container { position:relative;height:200px;overflow:hidden;border-radius:12px; } .parallax-back { position:absolute;inset:0;background:linear-gradient(135deg,hsl(251,100%,30%),hsl(235,25%,15%)); }` },
  ],
  relatedIds: ['scroll-fade-up', 'scroll-stagger-list', 'keyframe-float'],
}
export default parallaxLayer
