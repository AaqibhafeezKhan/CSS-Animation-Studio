const loadingDot = {
  id: 'micro-loading-dot',
  name: 'Loading Dot',
  slug: 'loading-dot',
  category: 'micro',
  tags: ['loading', 'dot', 'pulse', 'waiting', 'indicator'],
  description: 'Three bouncing dots indicate a loading or processing state.',
  longDescription: 'Classic three-dot loading indicator using staggered scale animations on three circular elements. The dots bounce in sequence using animation-delay offsets, creating the familiar ellipsis typing indicator or loading feedback pattern.',
  addedAt: '2024-02-19T00:00:00Z', updatedAt: '2024-03-15T00:00:00Z', author: 'CSS Motion Master',
  browserSupport: { chrome: 43, firefox: 16, safari: 9, edge: 12 },
  performanceScore: 10, complexityScore: 1, animatedProperties: ['transform'], triggerType: 'auto',
  css: `@keyframes dotBounce {
  0%, 80%, 100% { transform: scale(0.5); opacity: 0.5; }
  40% { transform: scale(1); opacity: 1; }
}
.loading-dot-el {
  display: inline-flex; gap: 6px; align-items: center;
}
.loading-dot-el span {
  width: 10px; height: 10px;
  background: var(--primary-color);
  border-radius: 50%;
  animation: dotBounce 1.4s ease-in-out infinite;
}
.loading-dot-el span:nth-child(2) { animation-delay: 0.2s; }
.loading-dot-el span:nth-child(3) { animation-delay: 0.4s; }`,
  html: `<div class="loading-dot-el">
  <span></span><span></span><span></span>
</div>`,
  js: null,
  keyframes: { '0%': { transform: 'scale(0.5)', opacity: '0.5' }, '40%': { transform: 'scale(1)', opacity: '1' }, '80%': { transform: 'scale(0.5)', opacity: '0.5' } },
  variants: [
    { name: 'Large', css: `@keyframes dotBounce { 0%,80%,100% { transform:scale(0.5);opacity:0.5; } 40% { transform:scale(1);opacity:1; } } .loading-dot-el { display:inline-flex;gap:8px;align-items:center; } .loading-dot-el span { width:16px;height:16px;background:var(--primary-color);border-radius:50%;animation:dotBounce 1.4s ease-in-out infinite; } .loading-dot-el span:nth-child(2) { animation-delay:0.2s; } .loading-dot-el span:nth-child(3) { animation-delay:0.4s; }` },
    { name: 'Fast', css: `@keyframes dotBounce { 0%,80%,100% { transform:scale(0.5);opacity:0.5; } 40% { transform:scale(1);opacity:1; } } .loading-dot-el { display:inline-flex;gap:6px;align-items:center; } .loading-dot-el span { width:10px;height:10px;background:var(--primary-color);border-radius:50%;animation:dotBounce 0.7s ease-in-out infinite; } .loading-dot-el span:nth-child(2) { animation-delay:0.1s; } .loading-dot-el span:nth-child(3) { animation-delay:0.2s; }` },
  ],
  relatedIds: ['loading-spinner-arc', 'loading-dot-cascade', 'keyframe-heartbeat'],
}
export default loadingDot
