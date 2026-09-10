const ripple = {
  id: 'button-ripple',
  name: 'Ripple',
  slug: 'ripple',
  category: 'button',
  tags: ['ripple', 'material', 'click', 'button', 'wave'],
  description: 'Material Design ripple effect radiates from click point.',
  longDescription: 'Implements the Material Design ripple effect where a circular wave expands from the point of click. The ripple is created dynamically via JavaScript, positioned at the exact click coordinates relative to the button. The CSS handles the expanding scale and opacity fade-out.',
  addedAt: '2024-01-15T00:00:00Z',
  updatedAt: '2024-03-15T00:00:00Z',
  author: 'CSS Motion Master',
  browserSupport: { chrome: 50, firefox: 45, safari: 10, edge: 17 },
  performanceScore: 9,
  complexityScore: 3,
  animatedProperties: ['transform', 'opacity'],
  triggerType: 'click',
  css: `.ripple-btn {
  position: relative;
  overflow: hidden;
  padding: 12px 28px;
  background: var(--primary-color);
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: background 0.2s ease;
}

.ripple-btn:hover {
  filter: brightness(1.1);
}

.ripple-btn .ripple-wave {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.35);
  transform: scale(0);
  animation: rippleExpand 0.6s linear;
  pointer-events: none;
}

@keyframes rippleExpand {
  to { transform: scale(4); opacity: 0; }
}`,
  html: `<button class="ripple-btn" id="rippleBtn">Click Me</button>`,
  js: `const btn = document.getElementById('rippleBtn');
btn.addEventListener('click', function(e) {
  const rect = btn.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = e.clientX - rect.left - size / 2;
  const y = e.clientY - rect.top - size / 2;
  const wave = document.createElement('span');
  wave.classList.add('ripple-wave');
  wave.style.cssText = \`width:\${size}px;height:\${size}px;left:\${x}px;top:\${y}px;\`;
  btn.appendChild(wave);
  wave.addEventListener('animationend', () => wave.remove());
});`,
  keyframes: {
    'to': { transform: 'scale(4)', opacity: '0' }
  },
  variants: [
    { name: 'Dark', css: `.ripple-btn { position: relative; overflow: hidden; padding: 12px 28px; background: #1a1a2e; color: #fff; border: none; border-radius: 6px; cursor: pointer; } .ripple-btn .ripple-wave { position: absolute; border-radius: 50%; background: rgba(108, 99, 255, 0.5); transform: scale(0); animation: rippleExpand 0.6s linear; pointer-events: none; } @keyframes rippleExpand { to { transform: scale(4); opacity: 0; } }` },
    { name: 'Slow', css: `.ripple-btn { position: relative; overflow: hidden; padding: 12px 28px; background: var(--primary-color); color: #fff; border: none; border-radius: 6px; cursor: pointer; } .ripple-btn .ripple-wave { position: absolute; border-radius: 50%; background: rgba(255, 255, 255, 0.35); transform: scale(0); animation: rippleExpand 1.2s linear; pointer-events: none; } @keyframes rippleExpand { to { transform: scale(4); opacity: 0; } }` },
  ],
  relatedIds: ['button-fill-slide', 'button-press-depth', 'button-glow-pulse'],
}
export default ripple
