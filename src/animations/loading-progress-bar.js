const progressBar = {
  id: 'loading-progress-bar',
  name: 'Progress Bar',
  slug: 'progress-bar',
  category: 'loading',
  tags: ['progress', 'bar', 'loading', 'determinate', 'indicator'],
  description: 'Indeterminate and determinate progress bar animations.',
  longDescription: 'Provides both indeterminate (back-and-forth slide) and determinate (fills from 0 to value) progress bar variants. The indeterminate variant uses a sliding gradient; the determinate uses a CSS custom property to control width via transition.',
  addedAt: '2024-02-22T00:00:00Z', updatedAt: '2024-03-15T00:00:00Z', author: 'CSS Motion Master',
  browserSupport: { chrome: 43, firefox: 16, safari: 9, edge: 12 },
  performanceScore: 8, complexityScore: 2, animatedProperties: ['transform', 'width'], triggerType: 'auto',
  css: `@keyframes progressSlide {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(300%); }
}
.progress-bar-track {
  width: 100%;
  height: 6px;
  background: hsl(235,20%,20%);
  border-radius: 3px;
  overflow: hidden;
}
.progress-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  border-radius: 3px;
  animation: progressSlide 1.5s ease-in-out infinite;
  width: 40%;
}`,
  html: `<div class="progress-bar-track">
  <div class="progress-bar-fill"></div>
</div>`,
  js: null,
  keyframes: { '0%': { transform: 'translateX(-100%)' }, '100%': { transform: 'translateX(300%)' } },
  variants: [
    { name: 'Determinate', css: `.progress-bar-track { width:100%;height:8px;background:hsl(235,20%,20%);border-radius:4px;overflow:hidden; } .progress-bar-fill { height:100%;background:linear-gradient(90deg,var(--primary-color),var(--secondary-color));border-radius:4px;width:0%;transition:width 0.8s cubic-bezier(0.4,0,0.2,1); }` },
    { name: 'Thin', css: `@keyframes progressSlide { 0% { transform:translateX(-100%); } 100% { transform:translateX(300%); } } .progress-bar-track { width:100%;height:3px;background:hsl(235,20%,20%);border-radius:2px;overflow:hidden; } .progress-bar-fill { height:100%;background:linear-gradient(90deg,var(--primary-color),var(--secondary-color));border-radius:2px;animation:progressSlide 1.5s ease-in-out infinite;width:40%; }` },
  ],
  relatedIds: ['loading-skeleton-pulse', 'loading-spinner-arc', 'micro-loading-dot'],
}
export default progressBar
