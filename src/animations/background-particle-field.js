const particleField = {
  id: 'background-particle-field',
  name: 'Particle Field',
  slug: 'particle-field',
  category: 'background',
  tags: ['particles', 'field', 'floating', 'dots', 'css-only'],
  description: 'CSS-only floating particle dots create a deep-space field effect.',
  longDescription: 'Simulates a particle field using multiple box-shadows on a pseudo-element. Each shadow position represents a particle, and the entire set animates upward with a y-translate. The seamless loop is achieved by starting from a lower position so particles wrap from bottom to top.',
  addedAt: '2024-01-30T00:00:00Z', updatedAt: '2024-03-15T00:00:00Z', author: 'CSS Motion Master',
  browserSupport: { chrome: 43, firefox: 16, safari: 9, edge: 12 },
  performanceScore: 5, complexityScore: 3, animatedProperties: ['transform'], triggerType: 'auto',
  css: `@keyframes particleFloat {
  from { transform: translateY(0); }
  to { transform: translateY(-200px); }
}
.particle-field-el {
  position: relative;
  width: 300px;
  height: 200px;
  background: #050510;
  border-radius: 12px;
  overflow: hidden;
}
.particle-field-el::before,
.particle-field-el::after {
  content: '';
  position: absolute;
  width: 2px;
  height: 2px;
  border-radius: 50%;
  background: white;
  box-shadow:
    20px 40px 0 hsl(251,100%,80%),
    80px 100px 0 white,
    140px 60px 0 hsl(330,100%,80%),
    200px 140px 0 white,
    260px 80px 0 hsl(170,80%,70%),
    30px 160px 0 white,
    110px 20px 0 hsl(47,100%,80%),
    170px 180px 0 white,
    230px 30px 0 white,
    50px 120px 0 hsl(200,100%,80%),
    90px 170px 0 white,
    150px 100px 0 white,
    210px 60px 0 hsl(280,80%,75%),
    270px 120px 0 white,
    10px 80px 0 white;
  animation: particleFloat 6s linear infinite;
}
.particle-field-el::after {
  animation-delay: -3s;
  opacity: 0.6;
}`,
  html: `<div class="particle-field-el"></div>`, js: null,
  keyframes: { '0%': { transform: 'translateY(0)' }, '100%': { transform: 'translateY(-200px)' } },
  variants: [
    { name: 'Fast', css: `@keyframes particleFloat { from { transform: translateY(0); } to { transform: translateY(-200px); } } .particle-field-el { position: relative; width: 300px; height: 200px; background: #050510; border-radius: 12px; overflow: hidden; } .particle-field-el::before { content: ''; position: absolute; width: 2px; height: 2px; border-radius: 50%; background: white; box-shadow: 20px 40px 0 white, 80px 100px 0 white, 140px 60px 0 white, 200px 140px 0 white, 260px 80px 0 white; animation: particleFloat 2s linear infinite; }` },
    { name: 'Large Dots', css: `@keyframes particleFloat { from { transform: translateY(0); } to { transform: translateY(-200px); } } .particle-field-el { position: relative; width: 300px; height: 200px; background: #050510; border-radius: 12px; overflow: hidden; } .particle-field-el::before { content: ''; position: absolute; width: 4px; height: 4px; border-radius: 50%; background: hsl(251,100%,80%); box-shadow: 20px 40px 0 hsl(330,100%,80%), 80px 100px 0 hsl(170,80%,70%), 140px 60px 0 hsl(47,100%,80%), 200px 140px 0 hsl(200,100%,80%); animation: particleFloat 6s linear infinite; }` },
  ],
  relatedIds: ['background-gradient-morph', 'background-aurora', 'background-noise-drift'],
}
export default particleField
