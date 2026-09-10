const liquidButton = {
  id: 'morphing-liquid-button',
  name: 'Liquid Button',
  slug: 'liquid-button',
  category: 'morphing',
  tags: ['liquid', 'button', 'morph', 'blob', 'elastic'],
  description: 'Button morphs its shape with a liquid elastic effect on hover and click.',
  longDescription: 'A button that squishes and morphs its border-radius on hover and active states, creating a liquid or jelly-like tactile response. Combines multiple border-radius values with a scale transform to simulate a physical elastic material being pressed and released.',
  addedAt: '2024-03-01T00:00:00Z', updatedAt: '2024-03-15T00:00:00Z', author: 'CSS Motion Master',
  browserSupport: { chrome: 43, firefox: 16, safari: 9, edge: 12 },
  performanceScore: 9, complexityScore: 2, animatedProperties: ['border-radius', 'transform'], triggerType: 'hover',
  css: `.liquid-btn {
  padding: 14px 32px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  border: none;
  border-radius: 50% 30% 50% 30% / 30% 50% 30% 50%;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: border-radius 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 6px 24px hsla(251,100%,69%,0.3);
}
.liquid-btn:hover {
  border-radius: 30% 50% 30% 50% / 50% 30% 50% 30%;
  transform: scale(1.05);
  box-shadow: 0 10px 40px hsla(251,100%,69%,0.5);
}
.liquid-btn:active {
  border-radius: 40% 60% 40% 60% / 60% 40% 60% 40%;
  transform: scale(0.97);
  box-shadow: 0 3px 12px hsla(251,100%,69%,0.3);
}`,
  html: `<button class="liquid-btn">Liquid</button>`,
  js: null, keyframes: null,
  variants: [
    { name: 'Subtle', css: `.liquid-btn { padding:14px 32px;background:linear-gradient(135deg,var(--primary-color),var(--secondary-color));color:white;border:none;border-radius:8px;cursor:pointer;transition:border-radius 0.4s cubic-bezier(0.34,1.56,0.64,1),transform 0.3s ease;font-size:1rem;font-weight:600; } .liquid-btn:hover { border-radius:30% 70% 30% 70% / 70% 30% 70% 30%;transform:scale(1.03); } .liquid-btn:active { transform:scale(0.97); }` },
    { name: 'Round', css: `.liquid-btn { padding:14px 32px;background:linear-gradient(135deg,var(--primary-color),var(--secondary-color));color:white;border:none;border-radius:50%;cursor:pointer;transition:border-radius 0.4s cubic-bezier(0.34,1.56,0.64,1),transform 0.3s ease,padding 0.3s ease;font-size:1rem;font-weight:600; } .liquid-btn:hover { border-radius:40% 60% 50% 50% / 60% 40% 60% 40%;padding:14px 40px; }` },
  ],
  relatedIds: ['morphing-blob-morph', 'button-ripple', 'svg-shape-shift'],
}
export default liquidButton
