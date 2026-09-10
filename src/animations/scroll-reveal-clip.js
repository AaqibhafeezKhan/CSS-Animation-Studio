const revealClip = {
  id: 'scroll-reveal-clip',
  name: 'Reveal Clip',
  slug: 'reveal-clip',
  category: 'scroll',
  tags: ['clip', 'reveal', 'wipe', 'scroll', 'mask'],
  description: 'Content is revealed by a clip-path wipe as it enters the viewport.',
  longDescription: 'Uses clip-path animation to reveal content with a wipe effect. When the element enters the viewport, its clip-path transitions from covering the entire element to revealing it fully. Creates a cinematic reveal ideal for section headings and featured images.',
  addedAt: '2024-02-07T00:00:00Z', updatedAt: '2024-03-15T00:00:00Z', author: 'CSS Motion Master',
  browserSupport: { chrome: 55, firefox: 54, safari: 13.1, edge: 79 },
  performanceScore: 9, complexityScore: 2, animatedProperties: ['clip-path'], triggerType: 'scroll',
  css: `.reveal-clip-el {
  clip-path: inset(0 100% 0 0);
  transition: clip-path 0.9s cubic-bezier(0.4, 0, 0.2, 1);
}
.reveal-clip-el.is-visible {
  clip-path: inset(0 0% 0 0);
}`,
  html: `<div class="reveal-clip-el" id="revealClipEl">Revealed Content</div>`,
  js: `const el = document.getElementById('revealClipEl');
const obs = new IntersectionObserver(([entry]) => {
  if (entry.isIntersecting) { el.classList.add('is-visible'); obs.disconnect(); }
}, { threshold: 0.1 });
obs.observe(el);`,
  keyframes: null,
  variants: [
    { name: 'From Bottom', css: `.reveal-clip-el { clip-path:inset(100% 0 0 0);transition:clip-path 0.9s cubic-bezier(0.4,0,0.2,1); } .reveal-clip-el.is-visible { clip-path:inset(0 0 0 0); }` },
    { name: 'Fast', css: `.reveal-clip-el { clip-path:inset(0 100% 0 0);transition:clip-path 0.4s cubic-bezier(0.4,0,0.2,1); } .reveal-clip-el.is-visible { clip-path:inset(0 0% 0 0); }` },
  ],
  relatedIds: ['scroll-fade-up', 'scroll-stagger-list', 'transition-page-slide'],
}
export default revealClip
