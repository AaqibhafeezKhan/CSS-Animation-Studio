const drawerSlide = {
  id: 'transition-drawer-slide',
  name: 'Drawer Slide',
  slug: 'drawer-slide',
  category: 'transition',
  tags: ['drawer', 'slide', 'panel', 'sidebar', 'off-canvas'],
  description: 'Off-canvas drawer slides in from the side with an overlay backdrop.',
  longDescription: 'An off-canvas navigation drawer that slides in from the left side using a translateX transition. The drawer starts off-screen at -100% and transitions to 0% on open. A semi-transparent backdrop overlay fades in simultaneously. The combination creates a standard mobile navigation pattern.',
  addedAt: '2024-02-27T00:00:00Z', updatedAt: '2024-03-15T00:00:00Z', author: 'CSS Motion Master',
  browserSupport: { chrome: 43, firefox: 16, safari: 9, edge: 12 },
  performanceScore: 9, complexityScore: 2, animatedProperties: ['transform', 'opacity'], triggerType: 'click',
  css: `@keyframes drawerIn {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}
@keyframes overlayIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.drawer-overlay {
  position: fixed; inset: 0;
  background: hsla(235,25%,3%,0.6);
  animation: overlayIn 0.3s ease forwards;
}
.drawer-panel {
  position: fixed; top: 0; left: 0; bottom: 0;
  width: 280px;
  background: var(--surface-color);
  border-right: 1px solid hsla(220,20%,95%,0.1);
  padding: 24px;
  animation: drawerIn 0.35s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  z-index: 1;
}`,
  html: `<div class="drawer-overlay">
  <div class="drawer-panel">
    <h3>Drawer</h3>
    <p>Navigation panel slides in</p>
  </div>
</div>`,
  js: null,
  keyframes: { '0%': { transform: 'translateX(-100%)' }, '100%': { transform: 'translateX(0)' } },
  variants: [
    { name: 'From Right', css: `@keyframes drawerIn { from { transform:translateX(100%); } to { transform:translateX(0); } } @keyframes overlayIn { from { opacity:0; } to { opacity:1; } } .drawer-overlay { position:fixed;inset:0;background:hsla(235,25%,3%,0.6);animation:overlayIn 0.3s ease forwards; } .drawer-panel { position:fixed;top:0;right:0;bottom:0;width:280px;background:var(--surface-color);border-left:1px solid hsla(220,20%,95%,0.1);padding:24px;animation:drawerIn 0.35s cubic-bezier(0.4,0,0.2,1) forwards;z-index:1; }` },
    { name: 'Fast', css: `@keyframes drawerIn { from { transform:translateX(-100%); } to { transform:translateX(0); } } .drawer-panel { position:fixed;top:0;left:0;bottom:0;width:280px;background:var(--surface-color);padding:24px;animation:drawerIn 0.15s ease forwards;z-index:1; }` },
  ],
  relatedIds: ['transition-modal-pop', 'transition-page-slide', 'scroll-reveal-clip'],
}
export default drawerSlide
