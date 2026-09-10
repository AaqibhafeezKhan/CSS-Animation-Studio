const textReveal = {
  id: 'hover-text-reveal',
  name: 'Text Reveal',
  slug: 'text-reveal',
  category: 'hover',
  tags: ['text', 'reveal', 'hover', 'clip', 'pseudo-element'],
  description: 'Hidden text slides up and reveals itself on hover via clip-path.',
  longDescription: 'A text reveal interaction where a secondary label slides up from below using clip-path animation. The original text fades out while the new label clips into view. Ideal for navigation menus and call-to-action buttons with descriptive sub-labels.',
  addedAt: '2024-01-05T00:00:00Z',
  updatedAt: '2024-03-15T00:00:00Z',
  author: 'CSS Motion Master',
  browserSupport: { chrome: 55, firefox: 54, safari: 13.1, edge: 79 },
  performanceScore: 9,
  complexityScore: 2,
  animatedProperties: ['clip-path', 'transform', 'opacity'],
  triggerType: 'hover',
  css: `.text-reveal-el {
  position: relative;
  overflow: hidden;
  display: inline-block;
  padding: 12px 24px;
  cursor: pointer;
}

.text-reveal-el .original {
  display: block;
  transition: transform 0.3s ease, opacity 0.2s ease;
}

.text-reveal-el .revealed {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(100%);
  transition: transform 0.3s ease;
  color: var(--primary-color);
  font-weight: 600;
}

.text-reveal-el:hover .original {
  transform: translateY(-100%);
  opacity: 0;
}

.text-reveal-el:hover .revealed {
  transform: translateY(0);
}`,
  html: `<button class="text-reveal-el">
  <span class="original">Hover me</span>
  <span class="revealed">Revealed!</span>
</button>`,
  js: null,
  keyframes: null,
  variants: [
    { name: 'Fade Only', css: `.text-reveal-el { position: relative; display: inline-block; padding: 12px 24px; cursor: pointer; } .text-reveal-el .original { display: block; transition: opacity 0.3s ease; } .text-reveal-el .revealed { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.3s ease; color: var(--primary-color); font-weight: 600; } .text-reveal-el:hover .original { opacity: 0; } .text-reveal-el:hover .revealed { opacity: 1; }` },
    { name: 'Slide Left', css: `.text-reveal-el { position: relative; overflow: hidden; display: inline-block; padding: 12px 24px; cursor: pointer; } .text-reveal-el .original { display: block; transition: transform 0.3s ease, opacity 0.2s ease; } .text-reveal-el .revealed { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; transform: translateX(100%); transition: transform 0.3s ease; color: var(--primary-color); font-weight: 600; } .text-reveal-el:hover .original { transform: translateX(-100%); opacity: 0; } .text-reveal-el:hover .revealed { transform: translateX(0); }` },
  ],
  relatedIds: ['hover-background-sweep', 'hover-border-trace', 'text-typewriter'],
}
export default textReveal
