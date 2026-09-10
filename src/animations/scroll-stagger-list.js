const staggerList = {
  id: 'scroll-stagger-list',
  name: 'Stagger List',
  slug: 'stagger-list',
  category: 'scroll',
  tags: ['stagger', 'list', 'sequence', 'scroll', 'cascade'],
  description: 'List items cascade in with staggered delays when the list scrolls into view.',
  longDescription: 'Applies sequential entrance animations to a list of items using CSS animation-delay. An IntersectionObserver fires when the list container enters the viewport, adding an is-visible class which triggers the staggered transitions on each child item.',
  addedAt: '2024-02-06T00:00:00Z', updatedAt: '2024-03-15T00:00:00Z', author: 'CSS Motion Master',
  browserSupport: { chrome: 58, firefox: 55, safari: 12.1, edge: 16 },
  performanceScore: 9, complexityScore: 2, animatedProperties: ['opacity', 'transform'], triggerType: 'scroll',
  css: `.stagger-list-el .item {
  opacity: 0;
  transform: translateX(-20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.stagger-list-el.is-visible .item:nth-child(1) { opacity:1;transform:translateX(0);transition-delay:0s; }
.stagger-list-el.is-visible .item:nth-child(2) { opacity:1;transform:translateX(0);transition-delay:0.1s; }
.stagger-list-el.is-visible .item:nth-child(3) { opacity:1;transform:translateX(0);transition-delay:0.2s; }
.stagger-list-el.is-visible .item:nth-child(4) { opacity:1;transform:translateX(0);transition-delay:0.3s; }
.stagger-list-el.is-visible .item:nth-child(5) { opacity:1;transform:translateX(0);transition-delay:0.4s; }`,
  html: `<ul class="stagger-list-el" id="staggerList">
  <li class="item">Item One</li>
  <li class="item">Item Two</li>
  <li class="item">Item Three</li>
  <li class="item">Item Four</li>
  <li class="item">Item Five</li>
</ul>`,
  js: `const list = document.getElementById('staggerList');
const obs = new IntersectionObserver(([entry]) => {
  if (entry.isIntersecting) { list.classList.add('is-visible'); obs.disconnect(); }
}, { threshold: 0.2 });
obs.observe(list);`,
  keyframes: null,
  variants: [
    { name: 'From Right', css: `.stagger-list-el .item { opacity:0;transform:translateX(20px);transition:opacity 0.5s ease,transform 0.5s ease; } .stagger-list-el.is-visible .item:nth-child(1) { opacity:1;transform:translateX(0);transition-delay:0s; } .stagger-list-el.is-visible .item:nth-child(2) { opacity:1;transform:translateX(0);transition-delay:0.1s; } .stagger-list-el.is-visible .item:nth-child(3) { opacity:1;transform:translateX(0);transition-delay:0.2s; }` },
    { name: 'From Bottom', css: `.stagger-list-el .item { opacity:0;transform:translateY(20px);transition:opacity 0.5s ease,transform 0.5s ease; } .stagger-list-el.is-visible .item:nth-child(1) { opacity:1;transform:translateY(0);transition-delay:0s; } .stagger-list-el.is-visible .item:nth-child(2) { opacity:1;transform:translateY(0);transition-delay:0.1s; } .stagger-list-el.is-visible .item:nth-child(3) { opacity:1;transform:translateY(0);transition-delay:0.2s; }` },
  ],
  relatedIds: ['scroll-fade-up', 'scroll-reveal-clip', 'micro-loading-dot'],
}
export default staggerList
