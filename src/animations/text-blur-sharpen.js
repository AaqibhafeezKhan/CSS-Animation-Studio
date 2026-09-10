const blurSharpen = {
  id: 'text-blur-sharpen',
  name: 'Blur Sharpen',
  slug: 'blur-sharpen',
  category: 'text',
  tags: ['blur', 'focus', 'reveal', 'filter', 'depth'],
  description: 'Text focuses in from a blurred state, like a camera coming into focus.',
  longDescription: 'Animates text from a heavily blurred state to pin-sharp clarity using CSS filter: blur(). Combined with an opacity fade, it simulates a camera auto-focus effect. Creates a dramatic reveal suitable for hero headings and loading states.',
  addedAt: '2024-01-26T00:00:00Z',
  updatedAt: '2024-03-15T00:00:00Z',
  author: 'CSS Motion Master',
  browserSupport: { chrome: 53, firefox: 35, safari: 9.1, edge: 79 },
  performanceScore: 6,
  complexityScore: 1,
  animatedProperties: ['filter', 'opacity'],
  triggerType: 'auto',
  css: `@keyframes blurSharpen {
  from {
    filter: blur(16px);
    opacity: 0;
    transform: scale(1.05);
  }
  to {
    filter: blur(0);
    opacity: 1;
    transform: scale(1);
  }
}

.blur-sharpen-el {
  animation: blurSharpen 1.2s cubic-bezier(0.4, 0, 0.2, 1) both;
  font-size: 2rem;
  font-weight: 700;
  display: inline-block;
}`,
  html: `<h2 class="blur-sharpen-el">Focus</h2>`,
  js: null,
  keyframes: {
    '0%': { filter: 'blur(16px)', opacity: '0' },
    '100%': { filter: 'blur(0)', opacity: '1' }
  },
  variants: [
    { name: 'Slow', css: `@keyframes blurSharpen { from { filter: blur(16px); opacity: 0; } to { filter: blur(0); opacity: 1; } } .blur-sharpen-el { animation: blurSharpen 2.5s cubic-bezier(0.4, 0, 0.2, 1) both; font-size: 2rem; font-weight: 700; display: inline-block; }` },
    { name: 'Loop', css: `@keyframes blurSharpen { 0%, 100% { filter: blur(12px); opacity: 0.4; } 50% { filter: blur(0); opacity: 1; } } .blur-sharpen-el { animation: blurSharpen 3s ease-in-out infinite; font-size: 2rem; font-weight: 700; display: inline-block; }` },
  ],
  relatedIds: ['text-gradient-shift', 'text-glitch', 'loading-skeleton-pulse'],
}
export default blurSharpen
