const bounce = {
  id: 'keyframe-bounce',
  name: 'Bounce',
  slug: 'bounce',
  category: 'keyframe',
  tags: ['bounce', 'jump', 'playful', 'loop', 'elastic'],
  description: 'Classic bouncing animation with a natural deceleration curve.',
  longDescription: 'A natural-feeling bounce animation that simulates the physics of a ball bouncing. Multiple keyframe stops create the characteristic deceleration pattern. The squash at the bottom is implied through timing rather than shape deformation.',
  addedAt: '2024-01-08T00:00:00Z',
  updatedAt: '2024-03-15T00:00:00Z',
  author: 'CSS Motion Master',
  browserSupport: { chrome: 43, firefox: 16, safari: 9, edge: 12 },
  performanceScore: 10,
  complexityScore: 2,
  animatedProperties: ['transform'],
  triggerType: 'auto',
  css: `@keyframes bounce {
  0%, 100% { transform: translateY(0); animation-timing-function: cubic-bezier(0.8, 0, 1, 1); }
  50% { transform: translateY(-30px); animation-timing-function: cubic-bezier(0, 0, 0.2, 1); }
}

.bounce-el {
  animation: bounce 1s infinite;
  display: inline-block;
}`,
  html: `<div class="bounce-el">Bounce</div>`,
  js: null,
  keyframes: {
    '0%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-30px)' },
    '100%': { transform: 'translateY(0)' }
  },
  variants: [
    { name: 'Subtle', css: `@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } } .bounce-el { animation: bounce 1.5s ease-in-out infinite; display: inline-block; }` },
    { name: 'High', css: `@keyframes bounce { 0%, 20%, 53%, 80%, 100% { transform: translateY(0); } 40%, 43% { transform: translateY(-48px); } 70% { transform: translateY(-24px); } 90% { transform: translateY(-8px); } } .bounce-el { animation: bounce 1.2s ease-in-out infinite; display: inline-block; }` },
    { name: 'Fast', css: `@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } } .bounce-el { animation: bounce 0.5s ease-in-out infinite; display: inline-block; }` },
  ],
  relatedIds: ['keyframe-rubber-band', 'keyframe-jello', 'keyframe-shake'],
}
export default bounce
