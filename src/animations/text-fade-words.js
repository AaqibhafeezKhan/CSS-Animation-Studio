const fadeWords = {
  id: 'text-fade-words',
  name: 'Fade Words',
  slug: 'fade-words',
  category: 'text',
  tags: ['fade', 'words', 'sequence', 'text', 'transition'],
  description: 'Words fade in and out in sequence, cycling through a list.',
  longDescription: 'Cycles through a list of words by fading them in and out using CSS animations with staggered delays. Each word occupies the same space and uses absolute positioning. The result is a dynamic headline that rotates through different terms smoothly.',
  addedAt: '2024-01-22T00:00:00Z',
  updatedAt: '2024-03-15T00:00:00Z',
  author: 'CSS Motion Master',
  browserSupport: { chrome: 43, firefox: 16, safari: 9, edge: 12 },
  performanceScore: 9,
  complexityScore: 3,
  animatedProperties: ['opacity', 'transform'],
  triggerType: 'auto',
  css: `@keyframes fadeWord {
  0%, 20% { opacity: 0; transform: translateY(10px); }
  30%, 70% { opacity: 1; transform: translateY(0); }
  80%, 100% { opacity: 0; transform: translateY(-10px); }
}

.fade-words-container {
  position: relative;
  height: 2em;
  display: flex;
  align-items: center;
}

.fade-words-container span {
  position: absolute;
  opacity: 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
  animation: fadeWord 8s ease-in-out infinite;
}

.fade-words-container span:nth-child(1) { animation-delay: 0s; }
.fade-words-container span:nth-child(2) { animation-delay: 2s; }
.fade-words-container span:nth-child(3) { animation-delay: 4s; }
.fade-words-container span:nth-child(4) { animation-delay: 6s; }`,
  html: `<div class="fade-words-container">
  <span>Beautiful</span>
  <span>Smooth</span>
  <span>Powerful</span>
  <span>Creative</span>
</div>`,
  js: null,
  keyframes: {
    '0%': { opacity: '0', transform: 'translateY(10px)' },
    '30%': { opacity: '1', transform: 'translateY(0)' },
    '70%': { opacity: '1', transform: 'translateY(0)' },
    '100%': { opacity: '0', transform: 'translateY(-10px)' }
  },
  variants: [
    { name: 'Fast', css: `@keyframes fadeWord { 0%, 20% { opacity: 0; transform: translateY(10px); } 30%, 70% { opacity: 1; transform: translateY(0); } 80%, 100% { opacity: 0; transform: translateY(-10px); } } .fade-words-container { position: relative; height: 2em; display: flex; align-items: center; } .fade-words-container span { position: absolute; opacity: 0; font-size: 1.5rem; font-weight: 700; color: var(--primary-color); animation: fadeWord 4s ease-in-out infinite; } .fade-words-container span:nth-child(1) { animation-delay: 0s; } .fade-words-container span:nth-child(2) { animation-delay: 1s; } .fade-words-container span:nth-child(3) { animation-delay: 2s; } .fade-words-container span:nth-child(4) { animation-delay: 3s; }` },
    { name: 'Scale', css: `@keyframes fadeWord { 0%, 20% { opacity: 0; transform: scale(0.8); } 30%, 70% { opacity: 1; transform: scale(1); } 80%, 100% { opacity: 0; transform: scale(1.2); } } .fade-words-container { position: relative; height: 2em; display: flex; align-items: center; } .fade-words-container span { position: absolute; opacity: 0; font-size: 1.5rem; font-weight: 700; color: var(--primary-color); animation: fadeWord 8s ease-in-out infinite; } .fade-words-container span:nth-child(1) { animation-delay: 0s; } .fade-words-container span:nth-child(2) { animation-delay: 2s; } .fade-words-container span:nth-child(3) { animation-delay: 4s; } .fade-words-container span:nth-child(4) { animation-delay: 6s; }` },
  ],
  relatedIds: ['text-typewriter', 'text-gradient-shift', 'text-wave-chars'],
}
export default fadeWords
