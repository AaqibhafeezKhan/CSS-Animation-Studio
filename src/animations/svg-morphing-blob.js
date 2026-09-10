const morphingBlob = {
  id: 'svg-morphing-blob',
  name: 'Morphing Blob',
  slug: 'morphing-blob',
  category: 'svg',
  tags: ['blob', 'morph', 'organic', 'svg', 'shape'],
  description: 'An organic blob shape continuously morphs between different irregular shapes.',
  longDescription: 'Animates an SVG path d attribute between multiple organic bezier curve shapes using a CSS @keyframes animation on the d property. The blob smoothly transitions between 4 different shapes in a looping cycle, creating a living, breathing organic shape effect.',
  addedAt: '2024-02-14T00:00:00Z', updatedAt: '2024-03-15T00:00:00Z', author: 'CSS Motion Master',
  browserSupport: { chrome: 56, firefox: 72, safari: 14, edge: 79 },
  performanceScore: 7, complexityScore: 3, animatedProperties: ['d'], triggerType: 'auto',
  css: `@keyframes blobMorph {
  0%, 100% { d: path("M60,20 C90,5 120,30 110,60 C100,90 70,100 45,85 C20,70 10,45 30,25 C40,15 50,25 60,20Z"); }
  33% { d: path("M65,15 C100,10 115,40 105,65 C95,90 65,105 40,90 C15,75 10,50 25,30 C35,15 50,18 65,15Z"); }
  66% { d: path("M55,25 C85,8 118,35 108,65 C98,95 70,98 44,84 C18,70 8,45 28,24 C39,13 48,30 55,25Z"); }
}
.morphing-blob-el {
  animation: blobMorph 6s ease-in-out infinite;
  fill: var(--primary-color);
}`,
  html: `<svg width="140" height="120" viewBox="0 0 140 120">
  <path class="morphing-blob-el" d="M60,20 C90,5 120,30 110,60 C100,90 70,100 45,85 C20,70 10,45 30,25 C40,15 50,25 60,20Z"/>
</svg>`,
  js: null,
  keyframes: null,
  variants: [
    { name: 'Fast', css: `@keyframes blobMorph { 0%,100% { d:path("M60,20 C90,5 120,30 110,60 C100,90 70,100 45,85 C20,70 10,45 30,25 C40,15 50,25 60,20Z"); } 50% { d:path("M65,15 C100,10 115,40 105,65 C95,90 65,105 40,90 C15,75 10,50 25,30 C35,15 50,18 65,15Z"); } } .morphing-blob-el { animation:blobMorph 2s ease-in-out infinite;fill:var(--primary-color); }` },
    { name: 'Secondary Color', css: `@keyframes blobMorph { 0%,100% { d:path("M60,20 C90,5 120,30 110,60 C100,90 70,100 45,85 C20,70 10,45 30,25 C40,15 50,25 60,20Z"); } 33% { d:path("M65,15 C100,10 115,40 105,65 C95,90 65,105 40,90 C15,75 10,50 25,30 C35,15 50,18 65,15Z"); } 66% { d:path("M55,25 C85,8 118,35 108,65 C98,95 70,98 44,84 C18,70 8,45 28,24 C39,13 48,30 55,25Z"); } } .morphing-blob-el { animation:blobMorph 6s ease-in-out infinite;fill:var(--secondary-color); }` },
  ],
  relatedIds: ['svg-path-draw', 'svg-shape-shift', 'morphing-blob-morph'],
}
export default morphingBlob
