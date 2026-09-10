const pressDepth = {
  id: 'button-press-depth',
  name: 'Press Depth',
  slug: 'press-depth',
  category: 'button',
  tags: ['press', 'depth', '3d', 'click', 'tactile'],
  description: 'Button sinks down with a 3D press effect on active state.',
  longDescription: 'Simulates a physical button press using translateY and box-shadow manipulation. When the button is pressed, it shifts down slightly and the shadow shrinks, creating the illusion of depth and physical response. Provides excellent tactile feedback through visual cues.',
  addedAt: '2024-01-17T00:00:00Z',
  updatedAt: '2024-03-15T00:00:00Z',
  author: 'CSS Motion Master',
  browserSupport: { chrome: 36, firefox: 16, safari: 9, edge: 12 },
  performanceScore: 9,
  complexityScore: 1,
  animatedProperties: ['transform', 'box-shadow'],
  triggerType: 'click',
  css: `.press-depth-btn {
  padding: 12px 28px;
  background: var(--primary-color);
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  box-shadow: 0 6px 0 hsl(251, 100%, 50%);
  transition: transform 0.08s ease, box-shadow 0.08s ease;
  transform: translateY(0);
}

.press-depth-btn:hover {
  box-shadow: 0 4px 0 hsl(251, 100%, 50%);
  transform: translateY(2px);
}

.press-depth-btn:active {
  box-shadow: 0 0 0 hsl(251, 100%, 50%);
  transform: translateY(6px);
}`,
  html: `<button class="press-depth-btn">Press Me</button>`,
  js: null,
  keyframes: null,
  variants: [
    { name: 'Subtle', css: `.press-depth-btn { padding: 12px 28px; background: var(--primary-color); color: #fff; border: none; border-radius: 6px; cursor: pointer; box-shadow: 0 3px 0 hsl(251, 100%, 50%); transition: transform 0.08s ease, box-shadow 0.08s ease; } .press-depth-btn:active { box-shadow: 0 0 0 hsl(251, 100%, 50%); transform: translateY(3px); }` },
    { name: 'Dramatic', css: `.press-depth-btn { padding: 12px 28px; background: var(--primary-color); color: #fff; border: none; border-radius: 6px; cursor: pointer; box-shadow: 0 10px 0 hsl(251, 100%, 40%); transition: transform 0.08s ease, box-shadow 0.08s ease; } .press-depth-btn:active { box-shadow: 0 0 0 hsl(251, 100%, 40%); transform: translateY(10px); }` },
  ],
  relatedIds: ['button-ripple', 'button-magnetic', 'button-glow-pulse'],
}
export default pressDepth
