const heartbeat = {
  id: 'keyframe-heartbeat',
  name: 'Heartbeat',
  slug: 'heartbeat',
  category: 'keyframe',
  tags: ['heartbeat', 'pulse', 'scale', 'heart', 'rhythm'],
  description: 'Rhythmic double-pulse scale animation mimicking a heartbeat.',
  longDescription: 'A two-beat scale animation that mimics the rhythm of a heartbeat. The double pulse (lub-dub) is achieved with two rapid scale-up peaks separated by a brief plateau. Great for favorite buttons, health indicators, and notification alerts.',
  addedAt: '2024-01-10T00:00:00Z',
  updatedAt: '2024-03-15T00:00:00Z',
  author: 'CSS Motion Master',
  browserSupport: { chrome: 43, firefox: 16, safari: 9, edge: 12 },
  performanceScore: 10,
  complexityScore: 2,
  animatedProperties: ['transform'],
  triggerType: 'auto',
  css: `@keyframes heartbeat {
  0% { transform: scale(1); }
  14% { transform: scale(1.2); }
  28% { transform: scale(1); }
  42% { transform: scale(1.2); }
  70% { transform: scale(1); }
}

.heartbeat-el {
  animation: heartbeat 1.5s ease-in-out infinite;
  display: inline-block;
}`,
  html: `<div class="heartbeat-el">Heart</div>`,
  js: null,
  keyframes: {
    '0%': { transform: 'scale(1)' },
    '14%': { transform: 'scale(1.2)' },
    '28%': { transform: 'scale(1)' },
    '42%': { transform: 'scale(1.2)' },
    '70%': { transform: 'scale(1)' }
  },
  variants: [
    { name: 'Fast', css: `@keyframes heartbeat { 0% { transform: scale(1); } 14% { transform: scale(1.2); } 28% { transform: scale(1); } 42% { transform: scale(1.2); } 70% { transform: scale(1); } } .heartbeat-el { animation: heartbeat 0.8s ease-in-out infinite; display: inline-block; }` },
    { name: 'Gentle', css: `@keyframes heartbeat { 0% { transform: scale(1); } 14% { transform: scale(1.08); } 28% { transform: scale(1); } 42% { transform: scale(1.08); } 70% { transform: scale(1); } } .heartbeat-el { animation: heartbeat 2s ease-in-out infinite; display: inline-block; }` },
  ],
  relatedIds: ['keyframe-bounce', 'button-glow-pulse', 'micro-loading-dot'],
}
export default heartbeat
