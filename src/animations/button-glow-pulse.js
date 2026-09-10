const glowPulse = {
  id: 'button-glow-pulse',
  name: 'Glow Pulse',
  slug: 'glow-pulse',
  category: 'button',
  tags: ['glow', 'pulse', 'neon', 'shimmer', 'cta'],
  description: 'Pulsating glow halo animation around the button for attention-grabbing CTAs.',
  longDescription: 'Animates a glowing halo around the button using box-shadow animation. The glow expands outward and fades, looping continuously. Creates a neon sign-like effect perfect for primary call-to-action buttons where maximum prominence is required.',
  addedAt: '2024-01-20T00:00:00Z',
  updatedAt: '2024-03-15T00:00:00Z',
  author: 'CSS Motion Master',
  browserSupport: { chrome: 43, firefox: 16, safari: 9, edge: 12 },
  performanceScore: 7,
  complexityScore: 1,
  animatedProperties: ['box-shadow'],
  triggerType: 'auto',
  css: `@keyframes glowPulse {
  0%, 100% {
    box-shadow: 0 0 8px rgba(108, 99, 255, 0.6),
                0 0 20px rgba(108, 99, 255, 0.3);
  }
  50% {
    box-shadow: 0 0 20px rgba(108, 99, 255, 0.9),
                0 0 50px rgba(108, 99, 255, 0.5),
                0 0 80px rgba(108, 99, 255, 0.2);
  }
}

.glow-pulse-btn {
  padding: 14px 32px;
  background: var(--primary-color);
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  animation: glowPulse 2s ease-in-out infinite;
}`,
  html: `<button class="glow-pulse-btn">Glow Pulse</button>`,
  js: null,
  keyframes: {
    '0%': { boxShadow: '0 0 8px rgba(108,99,255,0.6)' },
    '50%': { boxShadow: '0 0 50px rgba(108,99,255,0.9)' },
    '100%': { boxShadow: '0 0 8px rgba(108,99,255,0.6)' }
  },
  variants: [
    { name: 'Fast', css: `@keyframes glowPulse { 0%, 100% { box-shadow: 0 0 8px rgba(108,99,255,0.6), 0 0 20px rgba(108,99,255,0.3); } 50% { box-shadow: 0 0 20px rgba(108,99,255,0.9), 0 0 50px rgba(108,99,255,0.5); } } .glow-pulse-btn { padding: 14px 32px; background: var(--primary-color); color: #fff; border: none; border-radius: 8px; cursor: pointer; animation: glowPulse 0.8s ease-in-out infinite; }` },
    { name: 'Pink', css: `@keyframes glowPulse { 0%, 100% { box-shadow: 0 0 8px rgba(255,107,157,0.6), 0 0 20px rgba(255,107,157,0.3); } 50% { box-shadow: 0 0 20px rgba(255,107,157,0.9), 0 0 50px rgba(255,107,157,0.5); } } .glow-pulse-btn { padding: 14px 32px; background: var(--secondary-color); color: #fff; border: none; border-radius: 8px; cursor: pointer; animation: glowPulse 2s ease-in-out infinite; }` },
  ],
  relatedIds: ['button-ripple', 'keyframe-heartbeat', 'background-aurora'],
}
export default glowPulse
