const fadeUp = {
  id: 'scroll-fade-up',
  name: 'Fade Up',
  slug: 'fade-up',
  category: 'scroll',
  tags: ['scroll', 'fade', 'up', 'reveal', 'entrance'],
  description: 'Elements fade in and slide up when entering the viewport on scroll.',
  longDescription: 'A scroll-triggered entrance animation where elements fade in while translating upward from below. An IntersectionObserver watches the target element and adds an .is-visible class when it enters the viewport, triggering the CSS transition.',
  addedAt: '2024-02-04T00:00:00Z', updatedAt: '2024-03-15T00:00:00Z', author: 'CSS Motion Master',
  browserSupport: { chrome: 58, firefox: 55, safari: 12.1, edge: 16 },
  performanceScore: 9, complexityScore: 2, animatedProperties: ['opacity', 'transform'], triggerType: 'scroll',
  css: `.fade-up-el {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.fade-up-el.is-visible {
  opacity: 1;
  transform: translateY(0);
}`,
  html: `<div class="fade-up-el" id="fadeUpEl">Scroll to see me</div>`,
  js: `const el = document.getElementById('fadeUpEl');
const obs = new IntersectionObserver(([entry]) => {
  if (entry.isIntersecting) {
    el.classList.add('is-visible');
    obs.disconnect();
  }
}, { threshold: 0.1 });
obs.observe(el);`,
  keyframes: null,
  variants: [
    { name: 'Fast', css: `.fade-up-el { opacity:0;transform:translateY(40px);transition:opacity 0.3s ease,transform 0.3s ease; } .fade-up-el.is-visible { opacity:1;transform:translateY(0); }` },
    { name: 'Far', css: `.fade-up-el { opacity:0;transform:translateY(80px);transition:opacity 0.9s ease,transform 0.9s ease; } .fade-up-el.is-visible { opacity:1;transform:translateY(0); }` },
  ],
  relatedIds: ['scroll-stagger-list', 'scroll-reveal-clip', 'scroll-parallax-layer'],
}
export default fadeUp
