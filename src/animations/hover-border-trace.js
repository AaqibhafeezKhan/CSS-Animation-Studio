const borderTrace = {
  id: 'hover-border-trace',
  name: 'Border Trace',
  slug: 'border-trace',
  category: 'hover',
  tags: ['border', 'outline', 'trace', 'hover', 'pseudo-element'],
  description: 'A border traces around the element perimeter on hover using pseudo-elements.',
  longDescription: 'Creates a tracing border effect by using ::before and ::after pseudo-elements that scale from 0 to 100% along each axis on hover. The result is a border that draws itself around the element, creating an eye-catching interactive highlight.',
  addedAt: '2024-01-03T00:00:00Z',
  updatedAt: '2024-03-15T00:00:00Z',
  author: 'CSS Motion Master',
  browserSupport: { chrome: 40, firefox: 38, safari: 9, edge: 15 },
  performanceScore: 9,
  complexityScore: 2,
  animatedProperties: ['transform', 'opacity'],
  triggerType: 'hover',
  css: `.border-trace-el {
  position: relative;
  padding: 16px 32px;
}

.border-trace-el::before,
.border-trace-el::after {
  content: '';
  position: absolute;
  inset: 0;
  border: 2px solid var(--primary-color);
  opacity: 0;
  transition: opacity 0.15s ease, transform 0.3s ease;
}

.border-trace-el::before {
  transform: scaleX(0);
  transform-origin: left;
}

.border-trace-el::after {
  transform: scaleY(0);
  transform-origin: top;
}

.border-trace-el:hover::before,
.border-trace-el:hover::after {
  opacity: 1;
  transform: scale(1);
}`,
  html: `<div class="border-trace-el">Hover me</div>`,
  js: null,
  keyframes: null,
  variants: [
    { name: 'Fast', css: `.border-trace-el { position: relative; padding: 16px 32px; } .border-trace-el::before, .border-trace-el::after { content: ''; position: absolute; inset: 0; border: 2px solid var(--primary-color); opacity: 0; transition: opacity 0.1s ease, transform 0.15s ease; } .border-trace-el::before { transform: scaleX(0); transform-origin: left; } .border-trace-el::after { transform: scaleY(0); transform-origin: top; } .border-trace-el:hover::before, .border-trace-el:hover::after { opacity: 1; transform: scale(1); }` },
    { name: 'Double Border', css: `.border-trace-el { position: relative; padding: 16px 32px; } .border-trace-el::before { content: ''; position: absolute; inset: 4px; border: 2px solid var(--secondary-color); opacity: 0; transform: scaleX(0); transform-origin: left; transition: opacity 0.15s ease, transform 0.3s ease; } .border-trace-el:hover::before { opacity: 1; transform: scale(1); }` },
  ],
  relatedIds: ['hover-shadow-lift', 'hover-background-sweep', 'hover-text-reveal'],
}
export default borderTrace
