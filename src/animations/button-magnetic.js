const magnetic = {
  id: 'button-magnetic',
  name: 'Magnetic',
  slug: 'magnetic',
  category: 'button',
  tags: ['magnetic', 'mouse', 'follow', 'interactive', 'js'],
  description: 'Button magnetically attracts toward the cursor as it approaches.',
  longDescription: 'A JavaScript-powered magnetic attraction effect where the button drifts toward the mouse cursor as it enters the proximity zone. The strength of attraction is proportional to closeness. Creates a satisfying, physics-inspired interaction that encourages cursor engagement.',
  addedAt: '2024-01-19T00:00:00Z',
  updatedAt: '2024-03-15T00:00:00Z',
  author: 'CSS Motion Master',
  browserSupport: { chrome: 50, firefox: 45, safari: 10, edge: 17 },
  performanceScore: 9,
  complexityScore: 4,
  animatedProperties: ['transform'],
  triggerType: 'hover',
  css: `.magnetic-btn {
  padding: 14px 32px;
  background: var(--primary-color);
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: transform 0.15s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.15s ease;
  will-change: transform;
}

.magnetic-btn:hover {
  box-shadow: 0 8px 30px rgba(108, 99, 255, 0.5);
}`,
  html: `<button class="magnetic-btn" id="magnetBtn">Magnetic</button>`,
  js: `const btn = document.getElementById('magnetBtn');
const STRENGTH = 0.35;
btn.addEventListener('mousemove', (e) => {
  const rect = btn.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  const dx = e.clientX - cx;
  const dy = e.clientY - cy;
  btn.style.transform = \`translate(\${dx * STRENGTH}px, \${dy * STRENGTH}px)\`;
});
btn.addEventListener('mouseleave', () => {
  btn.style.transform = 'translate(0, 0)';
});`,
  keyframes: null,
  variants: [
    { name: 'Strong', css: `.magnetic-btn { padding: 14px 32px; background: var(--primary-color); color: #fff; border: none; border-radius: 8px; cursor: pointer; transition: transform 0.1s ease; }` },
    { name: 'Gentle', css: `.magnetic-btn { padding: 14px 32px; background: var(--primary-color); color: #fff; border: none; border-radius: 8px; cursor: pointer; transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1); }` },
  ],
  relatedIds: ['button-press-depth', 'hover-rotate-tilt', 'button-ripple'],
}
export default magnetic
