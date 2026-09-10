const blobMorph = {
  id: 'morphing-blob-morph',
  name: 'Blob Morph',
  slug: 'blob-morph',
  category: 'morphing',
  tags: ['blob', 'morph', 'organic', 'shape', 'fluid'],
  description: 'Colorful blob morphs between organic shapes in a continuous fluid loop.',
  longDescription: 'An expressive morphing blob using border-radius animation across 8 values to create organic rounded shape transitions. By changing each corner radius individually at different keyframe points, the element flows between blob configurations naturally. No SVG required — pure CSS shapes.',
  addedAt: '2024-02-28T00:00:00Z', updatedAt: '2024-03-15T00:00:00Z', author: 'CSS Motion Master',
  browserSupport: { chrome: 43, firefox: 16, safari: 9, edge: 12 },
  performanceScore: 8, complexityScore: 2, animatedProperties: ['border-radius', 'transform'], triggerType: 'auto',
  css: `@keyframes blobMorphCSS {
  0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; transform: rotate(0deg); }
  25% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; transform: rotate(90deg); }
  50% { border-radius: 50% 50% 20% 80% / 25% 80% 20% 75%; transform: rotate(180deg); }
  75% { border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%; transform: rotate(270deg); }
}
.blob-morph-el {
  width: 120px; height: 120px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  animation: blobMorphCSS 8s ease-in-out infinite;
}`,
  html: `<div class="blob-morph-el"></div>`,
  js: null,
  keyframes: {
    '0%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
    '50%': { borderRadius: '50% 50% 20% 80% / 25% 80% 20% 75%' },
    '100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }
  },
  variants: [
    { name: 'Fast', css: `@keyframes blobMorphCSS { 0%,100% { border-radius:60% 40% 30% 70% / 60% 30% 70% 40%;transform:rotate(0deg); } 25% { border-radius:30% 60% 70% 40% / 50% 60% 30% 60%;transform:rotate(90deg); } 50% { border-radius:50% 50% 20% 80% / 25% 80% 20% 75%;transform:rotate(180deg); } 75% { border-radius:70% 30% 50% 50% / 30% 30% 70% 70%;transform:rotate(270deg); } } .blob-morph-el { width:120px;height:120px;background:linear-gradient(135deg,var(--primary-color),var(--secondary-color));animation:blobMorphCSS 3s ease-in-out infinite; }` },
    { name: 'Accent', css: `@keyframes blobMorphCSS { 0%,100% { border-radius:60% 40% 30% 70% / 60% 30% 70% 40%; } 50% { border-radius:50% 50% 20% 80% / 25% 80% 20% 75%; } } .blob-morph-el { width:120px;height:120px;background:linear-gradient(135deg,var(--accent-color),hsl(47,100%,65%));animation:blobMorphCSS 8s ease-in-out infinite; }` },
  ],
  relatedIds: ['svg-morphing-blob', 'morphing-liquid-button', 'background-mesh-shift'],
}
export default blobMorph
