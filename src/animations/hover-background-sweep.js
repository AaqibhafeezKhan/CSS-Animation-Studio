const backgroundSweep = {
  id: 'hover-background-sweep',
  name: 'Background Sweep',
  slug: 'background-sweep',
  category: 'hover',
  tags: ['background', 'sweep', 'fill', 'hover', 'gradient'],
  description: 'Background sweeps across the element from left to right on hover.',
  longDescription: 'A background color sweeps across the element using a linear-gradient and background-size animation. The fill starts at 0% width and expands to 100%, creating a paint-brush wipe effect perfect for navigation items and interactive labels.',
  addedAt: '2024-01-04T00:00:00Z',
  updatedAt: '2024-03-15T00:00:00Z',
  author: 'CSS Motion Master',
  browserSupport: { chrome: 40, firefox: 38, safari: 9, edge: 15 },
  performanceScore: 7,
  complexityScore: 2,
  animatedProperties: ['background-size', 'color'],
  triggerType: 'hover',
  css: `.background-sweep-el {
  background: linear-gradient(to right, var(--primary-color) 50%, transparent 50%);
  background-size: 200% 100%;
  background-position: right;
  transition: background-position 0.4s ease, color 0.3s ease;
  padding: 12px 24px;
  border: 1px solid var(--primary-color);
  border-radius: 6px;
  cursor: pointer;
}

.background-sweep-el:hover {
  background-position: left;
  color: #fff;
}`,
  html: `<button class="background-sweep-el">Hover me</button>`,
  js: null,
  keyframes: null,
  variants: [
    { name: 'Reverse', css: `.background-sweep-el { background: linear-gradient(to left, var(--primary-color) 50%, transparent 50%); background-size: 200% 100%; background-position: left; transition: background-position 0.4s ease, color 0.3s ease; padding: 12px 24px; border: 1px solid var(--primary-color); border-radius: 6px; cursor: pointer; } .background-sweep-el:hover { background-position: right; color: #fff; }` },
    { name: 'Diagonal', css: `.background-sweep-el { background: linear-gradient(135deg, var(--primary-color) 50%, transparent 50%); background-size: 250% 100%; background-position: right; transition: background-position 0.5s ease, color 0.3s ease; padding: 12px 24px; border: 1px solid var(--primary-color); border-radius: 6px; cursor: pointer; } .background-sweep-el:hover { background-position: left; color: #fff; }` },
    { name: 'Fast', css: `.background-sweep-el { background: linear-gradient(to right, var(--primary-color) 50%, transparent 50%); background-size: 200% 100%; background-position: right; transition: background-position 0.2s ease, color 0.2s ease; padding: 12px 24px; border: 1px solid var(--primary-color); border-radius: 6px; cursor: pointer; } .background-sweep-el:hover { background-position: left; color: #fff; }` },
  ],
  relatedIds: ['hover-border-trace', 'button-fill-slide', 'hover-scale-up'],
}
export default backgroundSweep
