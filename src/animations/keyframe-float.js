const float = {
  id: 'keyframe-float',
  name: 'Float',
  slug: 'float',
  category: 'keyframe',
  tags: ['float', 'hover', 'gentle', 'loop', 'levitate'],
  description: 'Gentle up-and-down floating motion with a looping ease-in-out arc.',
  longDescription: 'A subtle floating animation that creates the illusion of an element levitating. Uses translateY combined with ease-in-out timing function to create smooth parabolic arcs. Perfect for hero illustrations, product images, and decorative elements.',
  addedAt: '2024-01-11T00:00:00Z',
  updatedAt: '2024-03-15T00:00:00Z',
  author: 'CSS Motion Master',
  browserSupport: { chrome: 43, firefox: 16, safari: 9, edge: 12 },
  performanceScore: 10,
  complexityScore: 1,
  animatedProperties: ['transform'],
  triggerType: 'auto',
  css: `@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-16px); }
}

.float-el {
  animation: float 3s ease-in-out infinite;
  display: inline-block;
}`,
  html: `<div class="float-el">Float</div>`,
  js: null,
  keyframes: {
    '0%': { transform: 'translateY(0px)' },
    '50%': { transform: 'translateY(-16px)' },
    '100%': { transform: 'translateY(0px)' }
  },
  variants: [
    { name: 'Subtle', css: `@keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-6px); } } .float-el { animation: float 4s ease-in-out infinite; display: inline-block; }` },
    { name: 'High', css: `@keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-30px); } } .float-el { animation: float 2s ease-in-out infinite; display: inline-block; }` },
    { name: 'With Shadow', css: `@keyframes float { 0%, 100% { transform: translateY(0px); filter: drop-shadow(0 8px 12px rgba(0,0,0,0.3)); } 50% { transform: translateY(-20px); filter: drop-shadow(0 24px 20px rgba(0,0,0,0.15)); } } .float-el { animation: float 3s ease-in-out infinite; display: inline-block; }` },
  ],
  relatedIds: ['keyframe-spin', 'keyframe-wobble', 'scroll-parallax-layer'],
}
export default float
