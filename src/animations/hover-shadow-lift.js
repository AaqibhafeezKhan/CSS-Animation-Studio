const shadowLift = {
  id: 'hover-shadow-lift',
  name: 'Shadow Lift',
  slug: 'shadow-lift',
  category: 'hover',
  tags: ['shadow', 'lift', 'depth', 'hover', 'elevation'],
  description: 'Element lifts with an expanding shadow on hover, creating an elevation effect.',
  longDescription: 'Simulates physical elevation by combining translateY with an expanding box-shadow. The element appears to float above the page surface. Works particularly well on cards and panels in Material Design-inspired layouts.',
  addedAt: '2024-01-02T00:00:00Z',
  updatedAt: '2024-03-15T00:00:00Z',
  author: 'CSS Motion Master',
  browserSupport: { chrome: 36, firefox: 16, safari: 9, edge: 12 },
  performanceScore: 8,
  complexityScore: 1,
  animatedProperties: ['transform', 'box-shadow'],
  triggerType: 'hover',
  css: `.shadow-lift-el {
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
}

.shadow-lift-el:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(0,0,0,0.25);
}`,
  html: `<div class="shadow-lift-el">Hover me</div>`,
  js: null,
  keyframes: null,
  variants: [
    { name: 'Subtle', css: `.shadow-lift-el { transition: transform 0.2s ease, box-shadow 0.2s ease; box-shadow: 0 1px 4px rgba(0,0,0,0.1); } .shadow-lift-el:hover { transform: translateY(-3px); box-shadow: 0 8px 20px rgba(0,0,0,0.15); }` },
    { name: 'Dramatic', css: `.shadow-lift-el { transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.35s ease; box-shadow: 0 4px 12px rgba(0,0,0,0.2); } .shadow-lift-el:hover { transform: translateY(-12px); box-shadow: 0 24px 60px rgba(0,0,0,0.35); }` },
  ],
  relatedIds: ['hover-scale-up', 'hover-border-trace', '3d-perspective-tilt'],
}
export default shadowLift
