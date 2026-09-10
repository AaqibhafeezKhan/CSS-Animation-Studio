const shine = {
  id: 'button-shine',
  name: 'Shine',
  slug: 'shine',
  category: 'button',
  tags: ['button', 'shine', 'sweep', 'hover'],
  description: 'Sweeps a highlight across a button on hover.',
  longDescription: 'A compact pseudo-element highlight that creates a polished button interaction.',
  addedAt: '2026-08-19T00:00:00Z',
  updatedAt: '2026-08-19T00:00:00Z',
  author: 'CSS Motion Master',
  browserSupport: { chrome: 36, firefox: 16, safari: 9, edge: 12 },
  performanceScore: 9,
  complexityScore: 2,
  animatedProperties: ['transform'],
  triggerType: 'hover',
  css: `.shine-el {
  position: relative;
  overflow: hidden;
}
.shine-el::after {
  content: "";
  position: absolute;
  inset: 0;
  width: 35%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.45), transparent);
  transform: translateX(-180%);
  transition: transform .4s ease;
}
.shine-el:hover::after {
  transform: translateX(420%);
}`,
  html: '<button class="shine-el">Hover me</button>',
  js: null,
  keyframes: null,
  variants: [],
  relatedIds: ['button-fill-slide', 'hover-background-sweep'],
}

export default shine
