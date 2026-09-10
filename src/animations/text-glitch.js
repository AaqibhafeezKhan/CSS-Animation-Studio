const glitch = {
  id: 'text-glitch',
  name: 'Glitch',
  slug: 'glitch',
  category: 'text',
  tags: ['glitch', 'cyberpunk', 'error', 'distort', 'rgb-split'],
  description: 'Cyberpunk-style glitch effect with RGB channel splitting and clip distortion.',
  longDescription: 'Recreates the digital glitch aesthetic using pseudo-elements with clip-rect animation and color channel offsets. The ::before renders red and the ::after renders blue, each clipping to random regions and translating to simulate RGB-channel misalignment common in analogue video errors.',
  addedAt: '2024-01-24T00:00:00Z',
  updatedAt: '2024-03-15T00:00:00Z',
  author: 'CSS Motion Master',
  browserSupport: { chrome: 43, firefox: 16, safari: 9, edge: 12 },
  performanceScore: 6,
  complexityScore: 3,
  animatedProperties: ['transform', 'clip', 'opacity'],
  triggerType: 'auto',
  css: `@keyframes glitchA {
  0%, 100% { clip: rect(0, 9999px, 0, 0); }
  10% { clip: rect(12px, 9999px, 28px, 0); transform: translate(-3px, -2px); }
  20% { clip: rect(44px, 9999px, 58px, 0); transform: translate(3px, 0px); }
  30% { clip: rect(8px, 9999px, 20px, 0); transform: translate(-3px, 2px); }
  40% { clip: rect(35px, 9999px, 50px, 0); transform: translate(0px, -2px); }
  50% { clip: rect(72px, 9999px, 90px, 0); transform: translate(3px, 2px); }
  60% { clip: rect(4px, 9999px, 18px, 0); transform: translate(-3px, 0); }
  70% { clip: rect(55px, 9999px, 70px, 0); transform: translate(3px, -2px); }
  80% { clip: rect(22px, 9999px, 36px, 0); transform: translate(-3px, 2px); }
  90% { clip: rect(60px, 9999px, 78px, 0); transform: translate(3px, 0); }
}

@keyframes glitchB {
  0%, 100% { clip: rect(0, 9999px, 0, 0); }
  15% { clip: rect(30px, 9999px, 48px, 0); transform: translate(3px, 0); }
  35% { clip: rect(5px, 9999px, 22px, 0); transform: translate(-3px, 2px); }
  55% { clip: rect(62px, 9999px, 80px, 0); transform: translate(2px, -2px); }
  75% { clip: rect(18px, 9999px, 34px, 0); transform: translate(-2px, 1px); }
  95% { clip: rect(45px, 9999px, 60px, 0); transform: translate(3px, -1px); }
}

.glitch-el {
  position: relative;
  font-size: 2rem;
  font-weight: 800;
  color: var(--text-color);
  letter-spacing: 2px;
}

.glitch-el::before,
.glitch-el::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.glitch-el::before {
  color: hsl(0, 100%, 65%);
  animation: glitchA 2s infinite linear alternate-reverse;
}

.glitch-el::after {
  color: hsl(200, 100%, 65%);
  animation: glitchB 2s infinite linear;
}`,
  html: `<p class="glitch-el" data-text="GLITCH">GLITCH</p>`,
  js: null,
  keyframes: null,
  variants: [
    { name: 'Intense', css: `@keyframes glitchA { 0%, 100% { clip: rect(0, 9999px, 0, 0); } 10% { clip: rect(12px, 9999px, 28px, 0); transform: translate(-6px, -4px); } 30% { clip: rect(44px, 9999px, 58px, 0); transform: translate(6px, 0px); } 50% { clip: rect(72px, 9999px, 90px, 0); transform: translate(-6px, 4px); } 70% { clip: rect(55px, 9999px, 70px, 0); transform: translate(6px, -4px); } 90% { clip: rect(60px, 9999px, 78px, 0); transform: translate(-6px, 0); } } @keyframes glitchB { 15% { clip: rect(30px, 9999px, 48px, 0); transform: translate(6px, 0); } 55% { clip: rect(62px, 9999px, 80px, 0); transform: translate(-6px, -4px); } 95% { clip: rect(45px, 9999px, 60px, 0); transform: translate(6px, -2px); } } .glitch-el { position: relative; font-size: 2rem; font-weight: 800; color: var(--text-color); } .glitch-el::before, .glitch-el::after { content: attr(data-text); position: absolute; top: 0; left: 0; } .glitch-el::before { color: hsl(0,100%,65%); animation: glitchA 1s infinite; } .glitch-el::after { color: hsl(200,100%,65%); animation: glitchB 1s infinite; }` },
    { name: 'Subtle', css: `@keyframes glitchA { 0%, 100% { clip: rect(0, 9999px, 0, 0); } 25% { clip: rect(20px, 9999px, 35px, 0); transform: translate(-2px, 0); } 75% { clip: rect(50px, 9999px, 65px, 0); transform: translate(2px, 0); } } .glitch-el { position: relative; font-size: 2rem; font-weight: 800; color: var(--text-color); } .glitch-el::before { content: attr(data-text); position: absolute; top: 0; left: 0; color: hsl(0,100%,65%); animation: glitchA 4s infinite; }` },
  ],
  relatedIds: ['text-gradient-shift', 'text-scramble', 'text-blur-sharpen'],
}
export default glitch
