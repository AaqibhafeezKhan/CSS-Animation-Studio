const modalPop = {
  id: 'transition-modal-pop',
  name: 'Modal Pop',
  slug: 'modal-pop',
  category: 'transition',
  tags: ['modal', 'pop', 'dialog', 'overlay', 'entrance'],
  description: 'Modal dialog pops in with a spring scale animation and backdrop fade.',
  longDescription: 'Combines a backdrop overlay fade-in with a modal content scale animation using a spring cubic-bezier. The modal scales from 92% to 100% while fading in, creating a satisfying pop that respects the material design elevation model. The backdrop uses a separate opacity animation.',
  addedAt: '2024-02-26T00:00:00Z', updatedAt: '2024-03-15T00:00:00Z', author: 'CSS Motion Master',
  browserSupport: { chrome: 43, firefox: 16, safari: 9, edge: 12 },
  performanceScore: 9, complexityScore: 2, animatedProperties: ['transform', 'opacity'], triggerType: 'click',
  css: `@keyframes backdropIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes modalPop {
  from { transform: scale(0.92) translateY(-16px); opacity: 0; }
  to { transform: scale(1) translateY(0); opacity: 1; }
}
.modal-backdrop {
  position: fixed; inset: 0;
  background: hsla(235,25%,3%,0.8);
  display: flex; align-items: center; justify-content: center;
  animation: backdropIn 0.2s ease forwards;
}
.modal-panel {
  background: var(--surface-color);
  border-radius: 16px;
  padding: 32px;
  width: 90%; max-width: 480px;
  animation: modalPop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  border: 1px solid hsla(220,20%,95%,0.1);
}`,
  html: `<div class="modal-backdrop">
  <div class="modal-panel">
    <h3>Modal Pop</h3>
    <p>Spring scale modal entrance</p>
  </div>
</div>`,
  js: null,
  keyframes: { '0%': { transform: 'scale(0.92) translateY(-16px)', opacity: '0' }, '100%': { transform: 'scale(1) translateY(0)', opacity: '1' } },
  variants: [
    { name: 'Dramatic', css: `@keyframes backdropIn { from { opacity:0; } to { opacity:1; } } @keyframes modalPop { from { transform:scale(0.7) translateY(-40px);opacity:0; } to { transform:scale(1) translateY(0);opacity:1; } } .modal-backdrop { position:fixed;inset:0;background:hsla(235,25%,3%,0.8);display:flex;align-items:center;justify-content:center;animation:backdropIn 0.2s ease forwards; } .modal-panel { background:var(--surface-color);border-radius:16px;padding:32px;width:90%;max-width:480px;animation:modalPop 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards; }` },
    { name: 'Fast', css: `@keyframes backdropIn { from { opacity:0; } to { opacity:1; } } @keyframes modalPop { from { transform:scale(0.92);opacity:0; } to { transform:scale(1);opacity:1; } } .modal-backdrop { position:fixed;inset:0;background:hsla(235,25%,3%,0.8);display:flex;align-items:center;justify-content:center;animation:backdropIn 0.1s ease forwards; } .modal-panel { background:var(--surface-color);border-radius:16px;padding:32px;width:90%;max-width:480px;animation:modalPop 0.15s ease forwards; }` },
  ],
  relatedIds: ['transition-page-slide', 'transition-drawer-slide', 'micro-success-checkmark'],
}
export default modalPop
