const typewriter = {
  id: 'text-typewriter',
  name: 'Typewriter',
  slug: 'typewriter',
  category: 'text',
  tags: ['typewriter', 'typing', 'cursor', 'text', 'reveal'],
  description: 'Text types itself out character by character with a blinking cursor.',
  longDescription: 'Simulates a typewriter by using CSS steps() timing function on width animation, combined with a blinking cursor created via ::after pseudo-element with alternating opacity. The text must be monospace for the per-character stepping to look authentic.',
  addedAt: '2024-01-21T00:00:00Z',
  updatedAt: '2024-03-15T00:00:00Z',
  author: 'CSS Motion Master',
  browserSupport: { chrome: 43, firefox: 16, safari: 9, edge: 12 },
  performanceScore: 6,
  complexityScore: 2,
  animatedProperties: ['width', 'border-right-color'],
  triggerType: 'auto',
  css: `@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes blink-caret {
  from, to { border-right-color: transparent; }
  50% { border-right-color: var(--primary-color); }
}

.typewriter-el {
  overflow: hidden;
  white-space: nowrap;
  border-right: 3px solid var(--primary-color);
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.2rem;
  width: fit-content;
  animation:
    typing 2.5s steps(30, end) forwards,
    blink-caret 0.75s step-end infinite;
}`,
  html: `<p class="typewriter-el">Hello, CSS Motion Master!</p>`,
  js: null,
  keyframes: {
    '0%': { width: '0' },
    '100%': { width: '100%' }
  },
  variants: [
    { name: 'Fast', css: `@keyframes typing { from { width: 0; } to { width: 100%; } } @keyframes blink-caret { from, to { border-right-color: transparent; } 50% { border-right-color: var(--primary-color); } } .typewriter-el { overflow: hidden; white-space: nowrap; border-right: 3px solid var(--primary-color); font-family: monospace; font-size: 1.2rem; width: fit-content; animation: typing 1s steps(30, end) forwards, blink-caret 0.75s step-end infinite; }` },
    { name: 'No Cursor', css: `@keyframes typing { from { width: 0; } to { width: 100%; } } .typewriter-el { overflow: hidden; white-space: nowrap; font-family: monospace; font-size: 1.2rem; width: fit-content; animation: typing 2.5s steps(30, end) forwards; }` },
  ],
  relatedIds: ['text-scramble', 'text-fade-words', 'text-wave-chars'],
}
export default typewriter
