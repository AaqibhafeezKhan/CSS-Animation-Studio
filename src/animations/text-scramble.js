const scramble = {
  id: 'text-scramble',
  name: 'Scramble',
  slug: 'scramble',
  category: 'text',
  tags: ['scramble', 'matrix', 'decode', 'hack', 'random'],
  description: 'Text scrambles through random characters before resolving to the final value.',
  longDescription: 'A JavaScript-driven text scramble effect where each character cycles through random alphanumeric characters before landing on the correct final character. The resolve happens character by character from left to right, creating a decoding or hacking terminal aesthetic.',
  addedAt: '2024-01-28T00:00:00Z',
  updatedAt: '2024-03-15T00:00:00Z',
  author: 'CSS Motion Master',
  browserSupport: { chrome: 50, firefox: 45, safari: 10, edge: 17 },
  performanceScore: 8,
  complexityScore: 4,
  animatedProperties: ['content'],
  triggerType: 'auto',
  css: `.scramble-el {
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--primary-color);
  letter-spacing: 0.08em;
  cursor: pointer;
  user-select: none;
}`,
  html: `<p class="scramble-el" id="scrambleEl">CSS MOTION MASTER</p>`,
  js: `const el = document.getElementById('scrambleEl');
const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%';
const finalText = el.textContent;
let frame = 0;
let raf;

function scramble() {
  cancelAnimationFrame(raf);
  frame = 0;
  const totalFrames = finalText.length * 4;

  function tick() {
    el.textContent = finalText.split('').map((ch, i) => {
      if (ch === ' ') return ' ';
      if (i < Math.floor(frame / 4)) return ch;
      return CHARS[Math.floor(Math.random() * CHARS.length)];
    }).join('');
    frame++;
    if (frame <= totalFrames) raf = requestAnimationFrame(tick);
    else el.textContent = finalText;
  }
  raf = requestAnimationFrame(tick);
}

scramble();
el.addEventListener('click', scramble);`,
  keyframes: null,
  variants: [
    { name: 'Green', css: `.scramble-el { font-family: 'JetBrains Mono', monospace; font-size: 1.8rem; font-weight: 600; color: hsl(145, 80%, 55%); letter-spacing: 0.08em; cursor: pointer; }` },
    { name: 'Large', css: `.scramble-el { font-family: 'JetBrains Mono', monospace; font-size: 3rem; font-weight: 800; color: var(--primary-color); letter-spacing: 0.1em; cursor: pointer; }` },
  ],
  relatedIds: ['text-typewriter', 'text-glitch', 'text-wave-chars'],
}
export default scramble
