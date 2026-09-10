const rotateTilt = {
  id: 'hover-rotate-tilt',
  name: 'Rotate Tilt',
  slug: 'rotate-tilt',
  category: 'hover',
  tags: ['rotate', 'tilt', '3d', 'perspective', 'hover'],
  description: '3D perspective tilt effect that follows mouse position on hover.',
  longDescription: 'Applies a CSS perspective with a 3D rotation on hover, giving depth to flat elements. The tilt angle changes based on the mouse position relative to the element, creating a parallax-style interaction. Requires JavaScript for full mouse tracking but the base CSS provides a static tilt demonstration.',
  addedAt: '2024-01-06T00:00:00Z',
  updatedAt: '2024-03-15T00:00:00Z',
  author: 'CSS Motion Master',
  browserSupport: { chrome: 36, firefox: 16, safari: 9, edge: 12 },
  performanceScore: 9,
  complexityScore: 3,
  animatedProperties: ['transform'],
  triggerType: 'hover',
  css: `.rotate-tilt-el {
  transition: transform 0.3s ease;
  transform-style: preserve-3d;
  will-change: transform;
}

.rotate-tilt-el:hover {
  transform: perspective(600px) rotateY(10deg) rotateX(-5deg) scale(1.02);
}`,
  html: `<div class="rotate-tilt-el" id="tiltCard">Hover me</div>`,
  js: `const el = document.getElementById('tiltCard');
el.addEventListener('mousemove', (e) => {
  const rect = el.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width - 0.5;
  const y = (e.clientY - rect.top) / rect.height - 0.5;
  el.style.transform = \`perspective(600px) rotateY(\${x * 20}deg) rotateX(\${-y * 20}deg) scale(1.02)\`;
});
el.addEventListener('mouseleave', () => {
  el.style.transform = '';
});`,
  keyframes: null,
  variants: [
    { name: 'Subtle', css: `.rotate-tilt-el { transition: transform 0.3s ease; transform-style: preserve-3d; } .rotate-tilt-el:hover { transform: perspective(800px) rotateY(5deg) rotateX(-2deg); }` },
    { name: 'Intense', css: `.rotate-tilt-el { transition: transform 0.2s ease; transform-style: preserve-3d; } .rotate-tilt-el:hover { transform: perspective(400px) rotateY(20deg) rotateX(-10deg) scale(1.05); }` },
  ],
  relatedIds: ['hover-scale-up', 'hover-shadow-lift', '3d-card-flip', '3d-perspective-tilt'],
}
export default rotateTilt
