const gradientShift = {
  id: 'text-gradient-shift',
  name: 'Gradient Shift',
  slug: 'gradient-shift',
  category: 'text',
  tags: ['gradient', 'color', 'animated', 'text', 'background-clip'],
  description: 'Animated gradient flows across text using background-clip technique.',
  longDescription: 'Creates a flowing gradient effect on text by animating background-position on a gradient applied with -webkit-background-clip: text. The gradient moves continuously across the text, creating a shimmering prismatic effect ideal for headlines and logos.',
  addedAt: '2024-01-23T00:00:00Z',
  updatedAt: '2024-03-15T00:00:00Z',
  author: 'CSS Motion Master',
  browserSupport: { chrome: 40, firefox: 38, safari: 10, edge: 79 },
  performanceScore: 7,
  complexityScore: 2,
  animatedProperties: ['background-position'],
  triggerType: 'auto',
  css: `@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.gradient-shift-el {
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(
    135deg,
    hsl(251, 100%, 69%),
    hsl(330, 100%, 71%),
    hsl(170, 80%, 50%),
    hsl(47, 100%, 65%),
    hsl(251, 100%, 69%)
  );
  background-size: 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientShift 4s ease infinite;
}`,
  html: `<h2 class="gradient-shift-el">CSS Motion</h2>`,
  js: null,
  keyframes: {
    '0%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0% 50%' }
  },
  variants: [
    { name: 'Fast', css: `@keyframes gradientShift { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } } .gradient-shift-el { font-size: 2.5rem; font-weight: 800; background: linear-gradient(135deg, hsl(251,100%,69%), hsl(330,100%,71%), hsl(170,80%,50%), hsl(47,100%,65%), hsl(251,100%,69%)); background-size: 300% 300%; -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; animation: gradientShift 1.5s ease infinite; }` },
    { name: 'Warm', css: `@keyframes gradientShift { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } } .gradient-shift-el { font-size: 2.5rem; font-weight: 800; background: linear-gradient(135deg, hsl(0,100%,65%), hsl(47,100%,65%), hsl(25,100%,65%), hsl(0,100%,65%)); background-size: 300% 300%; -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; animation: gradientShift 4s ease infinite; }` },
  ],
  relatedIds: ['text-glitch', 'background-gradient-morph', 'text-blur-sharpen'],
}
export default gradientShift
