const pageSlide = {
  id: 'transition-page-slide',
  name: 'Page Slide',
  slug: 'page-slide',
  category: 'transition',
  tags: ['page', 'slide', 'transition', 'navigation', 'enter'],
  description: 'Page transitions slide content in from the side for navigation.',
  longDescription: 'A page-level slide transition where the incoming page slides in from the right while the outgoing page slides out to the left. Implemented using CSS animations triggered by React Router or class toggling. The translateX animation uses transform (composite) for optimal performance.',
  addedAt: '2024-02-25T00:00:00Z', updatedAt: '2024-03-15T00:00:00Z', author: 'CSS Motion Master',
  browserSupport: { chrome: 43, firefox: 16, safari: 9, edge: 12 },
  performanceScore: 9, complexityScore: 2, animatedProperties: ['transform', 'opacity'], triggerType: 'auto',
  css: `@keyframes slideInRight {
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
@keyframes slideOutLeft {
  from { transform: translateX(0); opacity: 1; }
  to { transform: translateX(-100%); opacity: 0; }
}
.page-enter { animation: slideInRight 0.35s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
.page-exit { animation: slideOutLeft 0.35s cubic-bezier(0.4, 0, 0.2, 1) forwards; }`,
  html: `<div class="page-enter" style="padding:24px;background:var(--surface-color);border-radius:12px">
  Page sliding in from right
</div>`,
  js: null,
  keyframes: { '0%': { transform: 'translateX(100%)', opacity: '0' }, '100%': { transform: 'translateX(0)', opacity: '1' } },
  variants: [
    { name: 'Fade', css: `@keyframes fadeIn { from { opacity:0; } to { opacity:1; } } @keyframes fadeOut { from { opacity:1; } to { opacity:0; } } .page-enter { animation:fadeIn 0.3s ease forwards; } .page-exit { animation:fadeOut 0.3s ease forwards; }` },
    { name: 'Scale', css: `@keyframes scaleIn { from { transform:scale(0.94);opacity:0; } to { transform:scale(1);opacity:1; } } @keyframes scaleOut { from { transform:scale(1);opacity:1; } to { transform:scale(1.04);opacity:0; } } .page-enter { animation:scaleIn 0.3s ease forwards; } .page-exit { animation:scaleOut 0.3s ease forwards; }` },
  ],
  relatedIds: ['transition-modal-pop', 'transition-drawer-slide', 'scroll-reveal-clip'],
}
export default pageSlide
