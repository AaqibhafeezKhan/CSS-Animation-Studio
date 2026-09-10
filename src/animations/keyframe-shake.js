const shake = {
  id: 'keyframe-shake',
  name: 'Shake',
  slug: 'shake',
  category: 'keyframe',
  tags: ['shake', 'error', 'attention', 'vibrate', 'alert'],
  description: 'Attention-grabbing horizontal shake animation, ideal for error states.',
  longDescription: 'A rapid horizontal shake animation commonly used to indicate an error or require attention. The keyframes use small translateX increments that mimic a physical shake or vibration. Works perfectly on form fields after validation failures.',
  addedAt: '2024-01-09T00:00:00Z',
  updatedAt: '2024-03-15T00:00:00Z',
  author: 'CSS Motion Master',
  browserSupport: { chrome: 43, firefox: 16, safari: 9, edge: 12 },
  performanceScore: 10,
  complexityScore: 1,
  animatedProperties: ['transform'],
  triggerType: 'auto',
  css: `@keyframes shake {
  0%, 100% { transform: translateX(0); }
  10%, 50%, 90% { transform: translateX(-8px); }
  30%, 70% { transform: translateX(8px); }
}

.shake-el {
  animation: shake 0.6s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  display: inline-block;
}`,
  html: `<div class="shake-el">Shake</div>`,
  js: null,
  keyframes: {
    '0%': { transform: 'translateX(0)' },
    '10%': { transform: 'translateX(-8px)' },
    '30%': { transform: 'translateX(8px)' },
    '50%': { transform: 'translateX(-8px)' },
    '70%': { transform: 'translateX(8px)' },
    '90%': { transform: 'translateX(-8px)' },
    '100%': { transform: 'translateX(0)' }
  },
  variants: [
    { name: 'Subtle', css: `@keyframes shake { 0%, 100% { transform: translateX(0); } 20%, 60% { transform: translateX(-4px); } 40%, 80% { transform: translateX(4px); } } .shake-el { animation: shake 0.4s ease both; display: inline-block; }` },
    { name: 'Intense', css: `@keyframes shake { 0%, 100% { transform: translateX(0); } 10%, 50%, 90% { transform: translateX(-16px); } 30%, 70% { transform: translateX(16px); } } .shake-el { animation: shake 0.8s cubic-bezier(0.36, 0.07, 0.19, 0.97) both; display: inline-block; }` },
  ],
  relatedIds: ['keyframe-bounce', 'keyframe-heartbeat', 'micro-checkbox-tick'],
}
export default shake
