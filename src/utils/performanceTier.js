const COMPOSITE_PROPS = new Set(['transform', 'opacity'])
const PAINT_PROPS = new Set(['background', 'background-color', 'color', 'filter', 'box-shadow', 'border-color', 'outline', 'text-shadow', 'fill', 'stroke'])
const LAYOUT_PROPS = new Set(['width', 'height', 'top', 'left', 'right', 'bottom', 'margin', 'padding', 'border', 'border-width', 'font-size', 'line-height', 'letter-spacing'])

export const TIERS = {
  COMPOSITE: 'composite',
  PAINT: 'paint',
  LAYOUT: 'layout',
}

export function classifyProperty(prop) {
  const p = prop.toLowerCase().trim()
  if (COMPOSITE_PROPS.has(p)) return TIERS.COMPOSITE
  if (PAINT_PROPS.has(p)) return TIERS.PAINT
  for (const layoutProp of LAYOUT_PROPS) {
    if (p === layoutProp || p.startsWith(layoutProp + '-')) return TIERS.LAYOUT
  }
  return TIERS.PAINT
}

export function analyzeAnimation(animatedProperties) {
  return animatedProperties.map(prop => ({
    property: prop,
    tier: classifyProperty(prop),
  }))
}

export function computePerformanceScore(animatedProperties) {
  if (!animatedProperties || animatedProperties.length === 0) return 10
  const tiers = animatedProperties.map(classifyProperty)
  const hasLayout = tiers.includes(TIERS.LAYOUT)
  const hasPaint = tiers.includes(TIERS.PAINT)
  if (hasLayout) return Math.max(1, 5 - tiers.filter(t => t === TIERS.LAYOUT).length)
  if (hasPaint) return Math.max(5, 8 - tiers.filter(t => t === TIERS.PAINT).length)
  return 10
}

const SUGGESTIONS = {
  'width': { message: 'Replace width animation with scaleX transform', fix: 'Use transform: scaleX() instead of animating width for GPU compositing.' },
  'height': { message: 'Replace height animation with scaleY transform', fix: 'Use transform: scaleY() instead of animating height for GPU compositing.' },
  'top': { message: 'Replace top animation with translateY transform', fix: 'Use transform: translateY() instead of animating top for GPU compositing.' },
  'left': { message: 'Replace left animation with translateX transform', fix: 'Use transform: translateX() instead of animating left for GPU compositing.' },
  'right': { message: 'Replace right animation with translateX transform', fix: 'Use transform: translateX() instead of animating right for GPU compositing.' },
  'bottom': { message: 'Replace bottom animation with translateY transform', fix: 'Use transform: translateY() instead of animating bottom for GPU compositing.' },
  'margin': { message: 'Avoid animating margin — triggers layout', fix: 'Use transform: translate() to move elements without triggering layout reflow.' },
  'padding': { message: 'Avoid animating padding — triggers layout', fix: 'Use transform or pseudo-elements instead of animating padding.' },
  'font-size': { message: 'Avoid animating font-size — triggers layout and paint', fix: 'Use transform: scale() for zoom effects instead of font-size.' },
  'background-color': { message: 'Background-color triggers paint — consider opacity or overlay', fix: 'Animate a semi-transparent overlay element using opacity for better performance.' },
  'box-shadow': { message: 'Box-shadow is expensive — consider filter: drop-shadow', fix: 'Use filter: drop-shadow() which can be GPU-composited in some cases, or animate opacity of a pseudo-element shadow.' },
  'filter': { message: 'CSS filter triggers paint — use sparingly', fix: 'Limit filter animations to blur and brightness which are most GPU-friendly. Avoid drop-shadow in animations.' },
}

export function getSuggestions(animatedProperties) {
  return animatedProperties
    .filter(prop => SUGGESTIONS[prop.toLowerCase()])
    .map(prop => ({ property: prop, ...SUGGESTIONS[prop.toLowerCase()] }))
}
