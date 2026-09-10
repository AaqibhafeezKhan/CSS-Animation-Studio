const successCheckmark = {
  id: 'micro-success-checkmark',
  name: 'Success Checkmark',
  slug: 'success-checkmark',
  category: 'micro',
  tags: ['success', 'checkmark', 'confirm', 'done', 'feedback'],
  description: 'Animated success circle with a drawing checkmark for completion feedback.',
  longDescription: 'A two-stage animation: first a circle strokes itself in from 0% to 100% using stroke-dashoffset, then a checkmark path draws in. Combined with a green fill transition, it provides rich success/completion visual feedback. Used in form submissions, payments, and task completions.',
  addedAt: '2024-02-20T00:00:00Z', updatedAt: '2024-03-15T00:00:00Z', author: 'CSS Motion Master',
  browserSupport: { chrome: 43, firefox: 16, safari: 9, edge: 12 },
  performanceScore: 9, complexityScore: 3, animatedProperties: ['stroke-dashoffset', 'opacity'], triggerType: 'auto',
  css: `@keyframes circleIn {
  from { stroke-dashoffset: 157; }
  to { stroke-dashoffset: 0; }
}
@keyframes checkIn {
  from { stroke-dashoffset: 50; opacity: 0; }
  to { stroke-dashoffset: 0; opacity: 1; }
}
.success-circle {
  stroke: hsl(145,80%,50%);
  stroke-width: 3;
  fill: none;
  stroke-dasharray: 157;
  stroke-dashoffset: 157;
  animation: circleIn 0.6s cubic-bezier(0.4,0,0.2,1) 0.1s forwards;
}
.success-check {
  stroke: hsl(145,80%,50%);
  stroke-width: 3;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 50;
  stroke-dashoffset: 50;
  opacity: 0;
  animation: checkIn 0.4s ease 0.65s forwards;
}`,
  html: `<svg width="60" height="60" viewBox="0 0 60 60">
  <circle class="success-circle" cx="30" cy="30" r="25"/>
  <path class="success-check" d="M18,30 L26,38 L42,22"/>
</svg>`,
  js: null,
  keyframes: { '0%': { strokeDashoffset: '157' }, '100%': { strokeDashoffset: '0' } },
  variants: [
    { name: 'Large', css: `@keyframes circleIn { from { stroke-dashoffset:314; } to { stroke-dashoffset:0; } } @keyframes checkIn { from { stroke-dashoffset:80;opacity:0; } to { stroke-dashoffset:0;opacity:1; } } .success-circle { stroke:hsl(145,80%,50%);stroke-width:3;fill:none;stroke-dasharray:314;stroke-dashoffset:314;animation:circleIn 0.6s cubic-bezier(0.4,0,0.2,1) 0.1s forwards; } .success-check { stroke:hsl(145,80%,50%);stroke-width:3;fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:80;stroke-dashoffset:80;opacity:0;animation:checkIn 0.4s ease 0.65s forwards; }` },
    { name: 'Fast', css: `@keyframes circleIn { from { stroke-dashoffset:157; } to { stroke-dashoffset:0; } } @keyframes checkIn { from { stroke-dashoffset:50;opacity:0; } to { stroke-dashoffset:0;opacity:1; } } .success-circle { stroke:hsl(145,80%,50%);stroke-width:3;fill:none;stroke-dasharray:157;stroke-dashoffset:157;animation:circleIn 0.3s ease 0s forwards; } .success-check { stroke:hsl(145,80%,50%);stroke-width:3;fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:50;stroke-dashoffset:50;opacity:0;animation:checkIn 0.2s ease 0.28s forwards; }` },
  ],
  relatedIds: ['micro-checkbox-tick', 'micro-toggle-switch', 'transition-modal-pop'],
}
export default successCheckmark
