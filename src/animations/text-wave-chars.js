const waveChars = {
  id: 'text-wave-chars',
  name: 'Wave Chars',
  slug: 'wave-chars',
  category: 'text',
  tags: ['wave', 'characters', 'stagger', 'bounce', 'sea'],
  description: 'Individual characters animate in a rolling wave pattern.',
  longDescription: 'Splits text into individual character spans and applies a translateY wave animation with staggered animation-delay values. Each character bobs up and down in sequence, creating a flowing wave motion across the text. Requires JavaScript to wrap each character.',
  addedAt: '2024-01-27T00:00:00Z',
  updatedAt: '2024-03-15T00:00:00Z',
  author: 'CSS Motion Master',
  browserSupport: { chrome: 43, firefox: 16, safari: 9, edge: 12 },
  performanceScore: 10,
  complexityScore: 3,
  animatedProperties: ['transform'],
  triggerType: 'auto',
  css: `@keyframes waveChar {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-14px); }
}

.wave-chars-el {
  display: inline-flex;
  gap: 0;
  font-size: 2rem;
  font-weight: 700;
}

.wave-chars-el .char {
  display: inline-block;
  animation: waveChar 1s ease-in-out infinite;
}`,
  html: `<div class="wave-chars-el" id="waveCharsEl">Wave Text</div>`,
  js: `const el = document.getElementById('waveCharsEl');
const text = el.textContent;
el.innerHTML = text.split('').map((ch, i) =>
  ch === ' '
    ? '<span class="char" style="width:0.4em">&nbsp;</span>'
    : \`<span class="char" style="animation-delay:\${i * 0.08}s">\${ch}</span>\`
).join('');`,
  keyframes: {
    '0%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-14px)' },
    '100%': { transform: 'translateY(0)' }
  },
  variants: [
    { name: 'Fast', css: `@keyframes waveChar { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-14px); } } .wave-chars-el { display: inline-flex; gap: 0; font-size: 2rem; font-weight: 700; } .wave-chars-el .char { display: inline-block; animation: waveChar 0.5s ease-in-out infinite; }` },
    { name: 'Tall', css: `@keyframes waveChar { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-28px); } } .wave-chars-el { display: inline-flex; gap: 0; font-size: 2rem; font-weight: 700; } .wave-chars-el .char { display: inline-block; animation: waveChar 1s ease-in-out infinite; }` },
  ],
  relatedIds: ['text-typewriter', 'text-fade-words', 'text-scramble'],
}
export default waveChars
