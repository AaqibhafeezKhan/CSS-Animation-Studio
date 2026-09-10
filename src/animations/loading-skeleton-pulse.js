const skeletonPulse = {
  id: 'loading-skeleton-pulse',
  name: 'Skeleton Pulse',
  slug: 'skeleton-pulse',
  category: 'loading',
  tags: ['skeleton', 'loading', 'placeholder', 'shimmer', 'content'],
  description: 'Shimmer skeleton loading placeholder animates while content loads.',
  longDescription: 'Implements the skeleton loading pattern where content placeholders show a shimmer animation while the real content is fetching. The shimmer is a moving gradient overlay created with a CSS linear-gradient and background-position animation on a pseudo-element.',
  addedAt: '2024-02-21T00:00:00Z', updatedAt: '2024-03-15T00:00:00Z', author: 'CSS Motion Master',
  browserSupport: { chrome: 43, firefox: 16, safari: 9, edge: 12 },
  performanceScore: 8, complexityScore: 2, animatedProperties: ['background-position'], triggerType: 'auto',
  css: `@keyframes shimmer {
  from { background-position: -200% center; }
  to { background-position: 200% center; }
}
.skeleton-pulse-el {
  background: linear-gradient(90deg, hsl(235,20%,18%) 25%, hsl(235,20%,25%) 50%, hsl(235,20%,18%) 75%);
  background-size: 200% auto;
  border-radius: 6px;
  animation: shimmer 1.5s linear infinite;
}
.skeleton-line { height: 14px; margin-bottom: 10px; }
.skeleton-line.short { width: 60%; }
.skeleton-line.medium { width: 80%; }
.skeleton-line.full { width: 100%; }`,
  html: `<div style="padding:16px;max-width:300px">
  <div class="skeleton-pulse-el skeleton-line full"></div>
  <div class="skeleton-pulse-el skeleton-line medium"></div>
  <div class="skeleton-pulse-el skeleton-line short"></div>
</div>`,
  js: null,
  keyframes: { '0%': { backgroundPosition: '-200% center' }, '100%': { backgroundPosition: '200% center' } },
  variants: [
    { name: 'Light Theme', css: `@keyframes shimmer { from { background-position:-200% center; } to { background-position:200% center; } } .skeleton-pulse-el { background:linear-gradient(90deg,hsl(220,15%,90%) 25%,hsl(220,10%,95%) 50%,hsl(220,15%,90%) 75%);background-size:200% auto;border-radius:6px;animation:shimmer 1.5s linear infinite; } .skeleton-line { height:14px;margin-bottom:10px; } .skeleton-line.short { width:60%; } .skeleton-line.medium { width:80%; } .skeleton-line.full { width:100%; }` },
    { name: 'Fast', css: `@keyframes shimmer { from { background-position:-200% center; } to { background-position:200% center; } } .skeleton-pulse-el { background:linear-gradient(90deg,hsl(235,20%,18%) 25%,hsl(235,20%,25%) 50%,hsl(235,20%,18%) 75%);background-size:200% auto;border-radius:6px;animation:shimmer 0.8s linear infinite; } .skeleton-line { height:14px;margin-bottom:10px; } .skeleton-line.short { width:60%; } .skeleton-line.medium { width:80%; } .skeleton-line.full { width:100%; }` },
  ],
  relatedIds: ['loading-spinner-arc', 'loading-progress-bar', 'loading-dot-cascade'],
}
export default skeletonPulse
