const dotCascade = {
  id: 'loading-dot-cascade',
  name: 'Dot Cascade',
  slug: 'dot-cascade',
  category: 'loading',
  tags: ['dot', 'cascade', 'wave', 'loading', 'sequence'],
  description: 'Dots cascade in a wave pattern indicating loading or processing.',
  longDescription: 'Five dots animate with staggered translateY and opacity keyframes in a cascading wave pattern. The timing creates a smooth left-to-right wave motion. Commonly used for chat loading indicators, data processing feedback, and multi-step waiting states.',
  addedAt: '2024-02-24T00:00:00Z', updatedAt: '2024-03-15T00:00:00Z', author: 'CSS Motion Master',
  browserSupport: { chrome: 43, firefox: 16, safari: 9, edge: 12 },
  performanceScore: 10, complexityScore: 2, animatedProperties: ['transform', 'opacity'], triggerType: 'auto',
  css: `@keyframes dotCascade {
  0%, 100% { transform: translateY(0); opacity: 0.3; }
  50% { transform: translateY(-12px); opacity: 1; }
}
.dot-cascade-el {
  display: inline-flex; gap: 6px; align-items: center; padding: 8px;
}
.dot-cascade-el span {
  width: 10px; height: 10px;
  background: var(--primary-color);
  border-radius: 50%;
  animation: dotCascade 1s ease-in-out infinite;
}
.dot-cascade-el span:nth-child(2) { animation-delay: 0.15s; }
.dot-cascade-el span:nth-child(3) { animation-delay: 0.3s; }
.dot-cascade-el span:nth-child(4) { animation-delay: 0.45s; }
.dot-cascade-el span:nth-child(5) { animation-delay: 0.6s; }`,
  html: `<div class="dot-cascade-el">
  <span></span><span></span><span></span><span></span><span></span>
</div>`,
  js: null,
  keyframes: { '0%': { transform: 'translateY(0)', opacity: '0.3' }, '50%': { transform: 'translateY(-12px)', opacity: '1' }, '100%': { transform: 'translateY(0)', opacity: '0.3' } },
  variants: [
    { name: 'Color Shift', css: `@keyframes dotCascade { 0%,100% { transform:translateY(0);opacity:0.3; } 50% { transform:translateY(-12px);opacity:1; } } .dot-cascade-el { display:inline-flex;gap:6px;align-items:center;padding:8px; } .dot-cascade-el span { width:10px;height:10px;border-radius:50%;animation:dotCascade 1s ease-in-out infinite; } .dot-cascade-el span:nth-child(1) { background:hsl(251,100%,69%); } .dot-cascade-el span:nth-child(2) { background:hsl(290,80%,65%);animation-delay:0.15s; } .dot-cascade-el span:nth-child(3) { background:hsl(330,100%,71%);animation-delay:0.3s; } .dot-cascade-el span:nth-child(4) { background:hsl(25,100%,65%);animation-delay:0.45s; } .dot-cascade-el span:nth-child(5) { background:hsl(47,100%,65%);animation-delay:0.6s; }` },
    { name: 'Fast', css: `@keyframes dotCascade { 0%,100% { transform:translateY(0);opacity:0.3; } 50% { transform:translateY(-12px);opacity:1; } } .dot-cascade-el { display:inline-flex;gap:6px;align-items:center;padding:8px; } .dot-cascade-el span { width:10px;height:10px;background:var(--primary-color);border-radius:50%;animation:dotCascade 0.5s ease-in-out infinite; } .dot-cascade-el span:nth-child(2) { animation-delay:0.07s; } .dot-cascade-el span:nth-child(3) { animation-delay:0.14s; } .dot-cascade-el span:nth-child(4) { animation-delay:0.21s; } .dot-cascade-el span:nth-child(5) { animation-delay:0.28s; }` },
  ],
  relatedIds: ['micro-loading-dot', 'loading-spinner-arc', 'text-wave-chars'],
}
export default dotCascade
